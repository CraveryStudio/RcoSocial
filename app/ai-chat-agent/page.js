import Link from "next/link";

const CALENDLY_URL = "https://calendly.com/grow-rcosocial/new-meeting";

export const metadata = {
  title: "AI Chat Agent for Local Businesses | RCOSOCIAL Atlanta",
  description:
    "24/7 AI chat agent that qualifies leads, books appointments, and answers customer questions for Metro Atlanta businesses. Setup from $249, $99/mo.",
  alternates: { canonical: "https://rcosocial.com/ai-chat-agent" },
};

const STEPS = [
  { title: "Learns your business", desc: "We build the agent around your services, pricing structure, service area, and FAQs — not a generic template." },
  { title: "Qualifies before it hands off", desc: "It asks the same questions you'd ask a lead before booking a call, so you only get calendar invites worth taking." },
  { title: "Books directly into your calendar", desc: "Integrated with Calendly, Google Calendar, or your existing scheduling tool." },
  { title: "Escalates when it should", desc: "High-value or urgent conversations route straight to you — the agent knows when to step back." },
  { title: "Reports what it's doing", desc: "Leads and conversation summaries land in your inbox, CRM, or a shared dashboard." },
];

const COMPARISONS = [
  { title: "Vs. DIY builders (Tidio, ManyChat, Voiceflow)", desc: "You're not buying software you have to configure yourself — you're buying it done, tuned, and live." },
  { title: "Vs. enterprise platforms (Intercom, Drift)", desc: "You're not paying an enterprise support-team tax for features a 3-person business will never touch." },
  { title: "Vs. a freelance build", desc: "A freelancer builds it and disappears. This one is maintained, updated, and bundled into your marketing stack." },
  { title: "Vs. doing nothing", desc: "The real competitor. After-hours leads go cold in minutes — this keeps the door open." },
];

const FAQS = [
  { q: "How long does setup take?", a: "Most agents go live within a few business days of completing the onboarding questionnaire." },
  { q: "Will it sound like a robot?", a: "No — tone and voice are matched to your brand during setup, and reviewed before launch." },
  { q: "What if it doesn't know an answer?", a: "It escalates to you rather than guessing, and every unanswered question gets added to its training." },
  { q: "Does it work with my current website platform?", a: "Yes — it embeds as a widget on WordPress, Squarespace, or custom-built sites like this one." },
  { q: "Can it book appointments directly, or just collect leads?", a: "Both — you choose whether it books directly into your calendar or just captures and forwards qualified leads." },
  { q: "Is my pricing/info kept private?", a: "Yes — the agent is configured with clear boundaries on what it will and won't disclose, same as the one running on this site." },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI Chat Agent / Website Chatbot",
  provider: { "@type": "Organization", name: "RCO Social" },
  areaServed: "Metro Atlanta and beyond",
  description:
    "24/7 AI chat agent that qualifies leads, books appointments, and answers customer questions for local businesses.",
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    priceSpecification: { "@type": "UnitPriceSpecification", price: "99", priceCurrency: "USD", unitText: "MONTH" },
    description: "$249 one-time setup (limited-time offer), then $99/month.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function AiChatAgentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="section-navy page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> / AI Chat Agent
          </div>
          <span className="eyebrow">AI Chat Agent</span>
          <h1 style={{ maxWidth: 720 }}>The AI Chat Agent That Never Clocks Out</h1>
          <p style={{ color: "#fff", maxWidth: 660, fontSize: 18, fontWeight: 600 }}>
            Off-the-shelf bots know how to chat. Ours knows your business — because we already run one.
          </p>
          <p style={{ color: "#cbd2dc", maxWidth: 660, fontSize: 17 }}>
            Every visitor who leaves your site without talking to someone is a lead handed to your
            competitor. Our AI Chat Agent greets, qualifies, and books your visitors in real time —
            trained on your business, not a generic script. It&apos;s the exact system running live on
            this site right now.
          </p>
          <div className="hero-actions" style={{ justifyContent: "flex-start", marginBottom: 0 }}>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Book a Free Walkthrough
            </a>
            <Link href="/packages" className="btn btn-outline">View Packages</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="two-col">
            <div>
              <span className="eyebrow">How it works</span>
              <h2>Agentic Brief</h2>
              <p>
                Every AI Chat Agent is built the same disciplined way — trained on your real business
                details, not a stock script, and configured to know exactly when to hand a conversation
                back to a human.
              </p>
            </div>
            <div>
              <div className="card">
                {STEPS.map((step, i) => (
                  <div className="process-step" key={step.title}>
                    <div className="n">{i + 1}</div>
                    <div>
                      <strong>{step.title}</strong>
                      <p style={{ marginBottom: 0, color: "var(--muted)", fontSize: 14.5 }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Why this, why this price</span>
            <h2>What You&apos;re Actually Paying For</h2>
          </div>
          <div className="custom-list">
            {COMPARISONS.map((c) => (
              <div className="custom-item" key={c.title}>
                <h3 style={{ fontSize: 17 }}>{c.title}</h3>
                <p style={{ color: "var(--muted)", marginBottom: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="pricing">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Pricing</span>
            <h2>One Simple Plan</h2>
          </div>
          <div style={{ maxWidth: 420, margin: "0 auto" }}>
            <div className="price-card featured-addon">
              <span className="badge-addon">Most Popular Add-On</span>
              <span className="tier-name">AI Chat Agent</span>
              <div className="addon-price-row">
                <div>
                  <div className="addon-price-amount">$249</div>
                  <div className="addon-price-label">Setup (Limited-Time Offer)</div>
                </div>
                <div>
                  <div className="addon-price-amount">$99<span>/mo</span></div>
                  <div className="addon-price-label">Ongoing</div>
                </div>
              </div>
              <ul className="list-check">
                <li>Full FAQ & service training</li>
                <li>Calendar/CRM integration</li>
                <li>Lead notifications</li>
                <li>Monthly updates & tuning</li>
              </ul>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-block">
                Get Started
              </a>
            </div>
            <p style={{ textAlign: "center", color: "var(--muted)", fontSize: 14, marginTop: 18 }}>
              Prefer it bundled with a marketing package? See our{" "}
              <Link href="/packages" style={{ color: "var(--indigo)", fontWeight: 700 }}>General Packages</Link> or{" "}
              <Link href="/real-estate" style={{ color: "var(--indigo)", fontWeight: 700 }}>Real Estate Packages</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="article">
            {FAQS.map((f) => (
              <div className="faq" key={f.q}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <h2>Talk to It Yourself</h2>
            <p>
              Click the chat icon at the bottom right of this page, or book a walkthrough below.
            </p>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Book a Walkthrough
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
