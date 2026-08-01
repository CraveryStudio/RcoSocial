import Link from "next/link";

export const metadata = {
  title: "Custom AI Services for Your Business",
  description:
    "Custom-built AI tools tailored to your brand: branded customer service chatbots, lead qualification assistants, content automation, and integrations.",
  alternates: { canonical: "https://rcosocial.com/services/custom" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Custom AI Solutions",
  provider: { "@type": "Organization", name: "RCO Social" },
  areaServed: "Global",
  description:
    "Custom AI tools built for individual businesses, including branded chatbots, automated lead qualification, content automation, and system integrations.",
};

const CUSTOM_SERVICES = [
  {
    icon: "💬",
    title: "Branded AI Customer Service Chatbot",
    desc: "A chatbot trained on your brand voice, product catalog, FAQs, and policies — answering customer questions on your site or socials 24/7 like a trained team member.",
    href: "/ai-chat-agent",
  },
  {
    icon: "📅",
    title: "Automated Lead Qualification & Booking",
    desc: "An AI assistant that answers inbound inquiries, qualifies leads against your criteria, and books consultations directly onto your calendar.",
  },
  {
    icon: "🔁",
    title: "AI Content Repurposing Engine",
    desc: "Turn one piece of content — a blog post, video, or podcast — into a full set of platform-specific social posts automatically.",
  },
  {
    icon: "⭐",
    title: "Automated Review & Reputation Management",
    desc: "AI-assisted monitoring and response drafting for reviews across Google, Yelp, and social platforms, so nothing goes unanswered.",
  },
  {
    icon: "🔗",
    title: "Custom CRM & Client Portal Integrations",
    desc: "Connect your website, forms, and marketing tools to the CRM or portal you already use, so leads flow in automatically with no manual entry.",
  },
  {
    icon: "🛠️",
    title: "Internal Tools & API Automations",
    desc: "Purpose-built internal tools and API integrations that automate the repetitive parts of running your business, custom-scoped to your workflow.",
  },
];

export default function CustomServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="section-navy page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> / Custom Services
          </div>
          <span className="eyebrow">Built around your business</span>
          <h1 style={{ maxWidth: 720 }}>Custom AI Services</h1>
          <p style={{ color: "#cbd2dc", maxWidth: 620, fontSize: 17 }}>
            Beyond our core services, we build custom AI-powered tools scoped to what your
            specific business actually needs — trained on your brand, your data, and your workflow.
          </p>
          <div style={{ marginTop: 20 }}>
            <Link href="/#contact" className="btn btn-primary">Discuss a Custom Build</Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="custom-list">
            {CUSTOM_SERVICES.map((s) => (
              <div className="custom-item" key={s.title}>
                <div className="icon">{s.icon}</div>
                {s.href ? (
                  <Link href={s.href}>
                    <h3 style={{ fontSize: 18 }}>{s.title}</h3>
                  </Link>
                ) : (
                  <h3 style={{ fontSize: 18 }}>{s.title}</h3>
                )}
                <p style={{ color: "var(--muted)", marginBottom: s.href ? 8 : 0 }}>{s.desc}</p>
                {s.href && <Link href={s.href} className="more">Learn more →</Link>}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-soft">
        <div className="container">
          <div className="cta-band" style={{ background: "linear-gradient(135deg, var(--navy), #1e2a4a)" }}>
            <h2>Don&apos;t see exactly what you need?</h2>
            <p>Tell us the problem you&apos;re trying to solve — most of our custom work starts as a one-off request.</p>
            <Link href="/#contact" className="btn btn-primary">Tell Us Your Idea</Link>
          </div>
        </div>
      </section>
    </>
  );
}
