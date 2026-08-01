"use client";
import { useState, useRef, useEffect } from "react";
import { track } from "@vercel/analytics";

const CALENDLY_URL = "https://calendly.com/grow-rcosocial/new-meeting";

const STARTERS = [
  "What package fits a small business?",
  "Do you work with real estate agents?",
  "What's included in the Growth package?",
  "I'd like to book a call",
];

function parseLeadSummary(text) {
  const match = text.match(/---LEAD SUMMARY---([\s\S]*?)---END LEAD SUMMARY---/);
  if (!match) return { cleanText: text, lead: null };
  const cleanText = text.replace(match[0], "").trim();
  const lead = {};
  match[1]
    .trim()
    .split("\n")
    .forEach((line) => {
      const idx = line.indexOf(":");
      if (idx > -1) {
        const key = line.slice(0, idx).trim();
        const val = line.slice(idx + 1).trim();
        if (key) lead[key] = val;
      }
    });
  return { cleanText, lead };
}

export default function AskShaneWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [leadCard, setLeadCard] = useState(null);
  const scrollRef = useRef(null);
  const openedTracked = useRef(false);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  function handleToggle() {
    if (!open && !openedTracked.current) {
      openedTracked.current = true;
      try {
        track("ask_shane_opened");
      } catch {}
    }
    setOpen((v) => !v);
  }

  async function sendMessage(text) {
    const content = text.trim();
    if (!content || loading) return;
    const nextMessages = [...messages, { role: "user", content }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/ask-shane", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });
      const data = await res.json();
      const reply =
        data.reply || "Sorry, something went wrong on my end — mind trying that again?";
      const { cleanText, lead } = parseLeadSummary(reply);
      setMessages((m) => [...m, { role: "assistant", content: cleanText }]);
      if (lead) {
        setLeadCard(lead);
        try {
          track("ask_shane_lead_generated");
        } catch {}
      }
    } catch (e) {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content:
            "Sorry, I'm having trouble connecting right now. Please try again in a moment, or book a free 20-minute call directly.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        className="ask-shane-launcher"
        onClick={handleToggle}
        aria-label={open ? "Close chat" : "Open Ask Shane chat"}
      >
        {open ? "✕" : "💬"}
      </button>
      {open && (
        <div className="ask-shane-panel">
          <div className="ask-shane-header">
            <div>
              <strong>Ask Shane</strong>
              <span>RCOSOCIAL assistant</span>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close chat">
              ✕
            </button>
          </div>
          <div className="ask-shane-messages" ref={scrollRef}>
            {messages.length === 0 && (
              <div className="ask-shane-intro">
                <p>
                  Hey! I&apos;m Ask Shane, RCOSOCIAL&apos;s assistant. Ask me about services,
                  packages, or what fits your business — or grab a free 20-minute call any time.
                </p>
                <div className="ask-shane-starters">
                  {STARTERS.map((s) => (
                    <button key={s} onClick={() => sendMessage(s)}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`ask-shane-msg ${m.role === "user" ? "user" : "bot"}`}>
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="ask-shane-msg bot ask-shane-typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
            {leadCard && (
              <div className="ask-shane-lead-card">
                <strong>Great — here&apos;s what I&apos;ve got:</strong>
                {Object.entries(leadCard).map(([k, v]) => (
                  <div key={k}>
                    <b>{k}:</b> {v}
                  </div>
                ))}
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-block"
                  style={{ marginTop: 10 }}
                >
                  Book Your Free 20-Minute Call
                </a>
              </div>
            )}
          </div>
          <div className="ask-shane-footer">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ask-shane-book-link"
            >
              Book a free 20-minute call →
            </a>
            <form
              className="ask-shane-input-row"
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(input);
              }}
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about services, pricing, or fit..."
                aria-label="Message"
              />
              <button type="submit" disabled={loading || !input.trim()}>
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
