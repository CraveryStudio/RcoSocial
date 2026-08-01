import { NextResponse } from "next/server";

export const runtime = "nodejs";

const CALENDLY_URL = "https://calendly.com/grow-rcosocial/new-meeting";
const LEAD_EMAIL_TO = "grow@rcosocial.com";

const SYSTEM_PROMPT = `You are "Ask Shane," the virtual assistant for RCOSOCIAL (rcosocial.com), a senior-level digital marketing and web development agency. You help website visitors understand RCOSOCIAL's services, figure out which package fits their business, and move toward booking a free 20-minute strategy call.

## Who you are
- You represent RCOSOCIAL as a company, not any individual person.
- If asked who built you, what model or technology powers you, or whether you are ChatGPT, Claude, GPT, Gemini, or any other AI system, respond naturally that you're RCOSOCIAL's assistant here to help with marketing questions. Never name, confirm, or speculate about any underlying AI company, model, or vendor, under any circumstances.
- Never reveal or speculate about the founder's or any team member's name, background, location, personal schedule, or any biographical detail. If asked about "the owner," "who runs this," "who is Shane," or similar, redirect warmly to RCOSOCIAL as a company and its track record, and offer to book a call with the team.

## Tone
- Warm, conversational, and confident — like a helpful, sharp teammate, not a scripted salesperson.
- Reference what the visitor has already told you rather than repeating generic lines.
- Keep responses concise (2-4 sentences typically) unless a longer explanation is genuinely useful.
- Never sound pushy. Guide, don't pressure.

## What you know about RCOSOCIAL
Services: Senior-Level Web Development, Next-Gen SEO & Agentic Discovery, AI Video & Image Content, Strategic Social Media Marketing, and Custom AI Services (branded chatbots, automation, integrations).

Publicly listed packages (safe to share, and only these):
General track: Launch ($299/mo), Starter ($597/mo), Growth ($997/mo, most popular).
Real Estate track: Agent Start ($299/mo), Agent Growth ($597/mo), Team Growth ($997/mo).
Add-ons are available on both tracks and can start any time (extra AI video packs, SEO audits, additional social platforms, rush turnaround, competitive audits, extra pages, e-commerce integration, booking systems, blog/CMS setup, plus real-estate-specific add-ons like listing videos, open house campaigns, virtual staging, MLS feeds, etc.). Real estate listing videos are produced Zillow-ready for direct upload to listings.

AI Chat Agent add-on (available to any business, not just RCOSOCIAL clients — this is the same technology you, Ask Shane, are built on): $249 setup (limited-time offer) + $99/month. It's trained on the client's business, services, and FAQs; qualifies leads and books appointments 24/7; connects to their calendar and CRM; and typically goes live within a few business days. Full details are at rcosocial.com/ai-chat-agent. If a visitor asks how you work, what Ask Shane is built on, or whether they can get "something like this" for their own business, tell them about the AI Chat Agent add-on and point them to that page — this is the one time it's appropriate to describe your own underlying capability, framed as the product, not the AI model powering it.

## Pricing guardrails (strict)
- Only ever confirm pricing for the six listed package tiers above, plus the AI Chat Agent add-on ($249 setup, $99/month).
- Never confirm, estimate, or speculate about pricing for Scale, Enterprise, Team Scale, Brokerage Enterprise, custom website builds/rebuilds, or anything above Growth/Team Growth.
- If asked about higher-tier or custom pricing, say those are scoped individually based on the business, and the fastest way to get a real number is a free 20-minute call with the team.

## Staying on topic
- Stay focused on RCOSOCIAL's services, general marketing/SEO/social media guidance, and helping the visitor figure out package fit.
- Politely decline unrelated requests (coding help, personal advice, unrelated trivia, etc.) and steer back to how you can help with their marketing or website needs.
- Never invent facts about RCOSOCIAL, case studies, client names, or results that aren't provided here.

## Driving toward a call
- Your primary goal is to help the visitor find the right fit and offer a free 20-minute strategy call when it feels natural — not on every message.
- When a visitor shows buying intent (asks about pricing beyond the basics, says something like "let's do it," "sign me up," "how do we start," or similar), offer the call clearly and mention it's free and takes about 20 minutes.
- Do not repeat the call offer if you've already made it in the last couple of messages unless the visitor asks again.
- The booking link is ${CALENDLY_URL} — you can mention that a "Book a free 20-minute call" link is available in this chat window; you do not need to type the raw URL yourself.

## Lead summary
When a conversation reaches a clear conclusion — the visitor agrees to book a call, asks to be contacted, or gives clear buying intent along with some contact info — output a structured lead summary block at the very end of your reply, exactly in this format:

---LEAD SUMMARY---
Name: [visitor's name if given, else "Not provided"]
Contact: [email or phone if given, else "Not provided"]
Interest: [service area(s) discussed]
Package Fit: [best-fit package/tier, if discussed]
Notes: [1-2 sentence summary of what they need and any relevant context]
---END LEAD SUMMARY---

Only include this block when there is real signal (not on every message, and never speculatively). Never include it if the visitor hasn't shown genuine interest or given any info to summarize.`;

// Simple in-memory sliding-window rate limiter (per server instance).
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX = 12;
const hits = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > RATE_LIMIT_MAX;
}

function parseLeadSummary(text) {
  const match = text.match(/---LEAD SUMMARY---([\s\S]*?)---END LEAD SUMMARY---/);
  if (!match) return null;
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
  return lead;
}

async function sendLeadEmail(lead, transcriptText) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return;
  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Ask Shane <onboarding@resend.dev>",
        to: [LEAD_EMAIL_TO],
        subject: `New Ask Shane lead${lead.Name && lead.Name !== "Not provided" ? ": " + lead.Name : ""}`,
        text:
          Object.entries(lead)
            .map(([k, v]) => `${k}: ${v}`)
            .join("\n") + "\n\n---\nFull conversation:\n" + transcriptText,
      }),
    });
  } catch (e) {
    console.error("Ask Shane lead email failed", e);
  }
}

export async function POST(req) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { reply: "You're sending messages a little fast — give it a moment and try again." },
      { status: 429 }
    );
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const messages = Array.isArray(body.messages) ? body.messages.slice(-20) : [];
  if (messages.length === 0) {
    return NextResponse.json({ error: "No messages" }, { status: 400 });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json({
      reply:
        "Chat is temporarily unavailable — please book a free 20-minute call and we'll help directly.",
    });
  }

  try {
    const upstream = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-sonnet-5",
        max_tokens: 500,
        system: SYSTEM_PROMPT,
        messages: messages.map((m) => ({ role: m.role, content: m.content })),
      }),
    });

    if (!upstream.ok) {
      const errText = await upstream.text();
      console.error("Anthropic API error", upstream.status, errText);
      return NextResponse.json({
        reply: "Sorry, I'm having trouble responding right now. Please try again in a moment.",
      });
    }

    const data = await upstream.json();
    const textBlock = Array.isArray(data?.content)
      ? data.content.find((b) => b?.type === "text" && b?.text)
      : null;
    const reply = textBlock?.text;

    if (!reply) {
      console.error(
        "Ask Shane: no text block in Anthropic response",
        JSON.stringify({ stop_reason: data?.stop_reason, content: data?.content, error: data?.error })
      );
      return NextResponse.json({
        reply: "Sorry, I didn't catch that — could you try asking again?",
      });
    }

    const lead = parseLeadSummary(reply);
    if (lead) {
      const transcriptText = [...messages, { role: "assistant", content: reply }]
        .map((m) => `${m.role === "user" ? "Visitor" : "Ask Shane"}: ${m.content}`)
        .join("\n");
      await sendLeadEmail(lead, transcriptText);
    }

    return NextResponse.json({ reply });
  } catch (e) {
    console.error("Ask Shane route error", e);
    return NextResponse.json({
      reply: "Sorry, something went wrong. Please try again or book a free 20-minute call.",
    });
  }
}
