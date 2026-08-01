import Link from "next/link";

export default function PricingPage({
  eyebrow,
  breadcrumbLabel,
  title,
  intro,
  tiers,
  featuredAddon,
  addonsEyebrow,
  addonsTitle,
  addonsIntro,
  addons,
  videoShowcase,
  closingTitle,
  closingText,
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
            <Link href="/">Home</Link> / {breadcrumbLabel}
          </div>
          <span className="eyebrow">{eyebrow}</span>
          <h1 style={{ maxWidth: 720 }}>{title}</h1>
          {intro.map((p, i) => (
            <p key={i} style={{ color: "#cbd2dc", maxWidth: 700, fontSize: 17 }}>{p}</p>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="pricing-grid">
            {tiers.map((t) => (
              <div key={t.name} className={`price-card ${t.featured ? "featured" : ""}`}>
                {t.featured && <span className="badge-featured">{t.badgeLabel || "Most Popular"}</span>}
                <span className="tier-name">{t.name}</span>
                <div className="price">From ${t.price}<span> /mo</span></div>
                <ul className="list-check">
                  {t.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
                <Link href="/#contact" className="btn btn-primary btn-block">Get Started</Link>
              </div>
            ))}
          </div>
          {featuredAddon && (
            <div className="price-card featured-addon">
              <span className="badge-addon">{featuredAddon.badge || "Most Popular"}</span>
              <span className="tier-name">{featuredAddon.name}</span>
              {featuredAddon.tagline && <p className="addon-tagline">{featuredAddon.tagline}</p>}
              <div className="addon-price-row">
                <div>
                  <div className="addon-price-amount">${featuredAddon.setupPrice}</div>
                  <div className="addon-price-label">{featuredAddon.setupLabel || "Setup"}</div>
                </div>
                <div>
                  <div className="addon-price-amount">${featuredAddon.monthlyPrice}<span>/mo</span></div>
                  <div className="addon-price-label">Ongoing</div>
                </div>
              </div>
              <ul className="list-check">
                {featuredAddon.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
              <Link href={featuredAddon.ctaHref} className="btn btn-primary btn-block">{featuredAddon.ctaLabel}</Link>
            </div>
          )}
        </div>
      </section>
      {videoShowcase && (
        <section className="section section-navy">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow" style={{ color: "#a5b4fc" }}>{videoShowcase.eyebrow}</span>
              <h2>{videoShowcase.title}</h2>
              {videoShowcase.intro && <p style={{ color: "#cbd2dc" }}>{videoShowcase.intro}</p>}
            </div>
            <div className="showcase-video-wrap">
              <video
                src={videoShowcase.videoUrl}
                controls
                playsInline
                preload="metadata"
              />
            </div>
            {videoShowcase.caption && (
              <p className="showcase-caption">{videoShowcase.caption}</p>
            )}
          </div>
        </section>
      )}
      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{addonsEyebrow}</span>
            <h2>{addonsTitle}</h2>
            {addonsIntro && <p>{addonsIntro}</p>}
          </div>
          <div className="addon-list">
            {addons.map((a) => (
              <div key={a.name} className="addon-item">
                <div className="addon-text">
                  <strong>{a.name}</strong>
                  <span>{a.desc}</span>
                </div>
                <Link href="/#contact" className="addon-cta">Contact Us to Add →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="cta-band">
            <h2>{closingTitle}</h2>
            <p>{closingText}</p>
            <Link href="/#contact" className="btn btn-primary">Let&apos;s Talk</Link>
          </div>
        </div>
      </section>
    </>
  );
}
