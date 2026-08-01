import Link from "next/link";

export default function ServicePage({
  eyebrow,
  title,
  intro,
  whyTitle,
  whyParagraphs,
  features,
  process,
  faqs,
  schema,
}) {
  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      <section className="section-navy page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> / <Link href="/services/web-development">Services</Link> / {title}
          </div>
          <span className="eyebrow">{eyebrow}</span>
          <h1 style={{ maxWidth: 720 }}>{title}</h1>
          <p style={{ color: "#cbd2dc", maxWidth: 620, fontSize: 17 }}>{intro}</p>
          <div style={{ marginTop: 20 }}>
            <Link href="/#contact" className="btn btn-primary">Get a Free Audit</Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="two-col">
            <div>
              <h2>{whyTitle}</h2>
              {whyParagraphs.map((p, i) => <p key={i}>{p}</p>)}
              <h3 style={{ marginTop: 32 }}>What&apos;s included</h3>
              <ul className="list-check">
                {features.map((f) => <li key={f}>{f}</li>)}
              </ul>
            </div>
            <div>
              <div className="card">
                <h3 style={{ marginBottom: 16 }}>Our process</h3>
                {process.map((step, i) => (
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
      {faqs && faqs.length > 0 && (
        <section className="section section-soft">
          <div className="container">
            <div className="section-head">
              <h2>Frequently asked questions</h2>
            </div>
            <div className="article">
              {faqs.map((f) => (
                <div className="faq" key={f.q}>
                  <h3>{f.q}</h3>
                  <p>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      <section className="section">
        <div className="container">
          <div className="cta-band">
            <h2>Ready to fix what&apos;s holding your brand back?</h2>
            <p>Get a free competitive audit and a straight answer on what to prioritize first.</p>
            <Link href="/#contact" className="btn btn-primary">Start Your Project</Link>
          </div>
        </div>
      </section>
    </>
  );
}
