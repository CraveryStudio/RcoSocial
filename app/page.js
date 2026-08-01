import Link from "next/link";

export const metadata = {
  title: "RCO Social | Senior Digital Marketing & Web Development",
  description:
    "Senior-level web development, next-gen SEO & agentic discovery, AI video/image content, and strategic social media marketing for ambitious brands. Get a free audit.",
  alternates: { canonical: "https://rcosocial.com/" },
};

const SERVICES = [
  {
    icon: "💻",
    title: "Senior-Level Web Development",
    problem: "Struggling with slow, outdated, or non-converting websites?",
    solution:
      "We build robust, lightning-fast, conversion-focused platforms that scale with your business.",
    points: [
      "Custom high-performance architecture",
      "E-commerce & lead generation systems",
      "Mobile-first & SEO-ready from day one",
    ],
    href: "/services/web-development",
  },
  {
    icon: "🔍",
    title: "Next-Gen SEO & Agentic Discovery",
    problem: "Tired of invisible rankings?",
    solution:
      "We optimize for both traditional search engines and AI agents so your brand is discovered when it matters most.",
    points: [
      "Technical SEO & content strategy",
      "AI-optimized schema markup",
      "Monthly performance reports",
    ],
    href: "/services/seo-agentic-discovery",
  },
  {
    icon: "✨",
    title: "AI Video & Image Generation",
    problem: "Need consistent, high-quality visuals fast?",
    solution:
      "We create scroll-stopping branded content using cutting-edge AI, saving time and standing out.",
    points: [
      "Branded image & video creation",
      "Short-form social content",
      "Consistent brand assets",
    ],
    href: "/services/ai-content",
  },
  {
    icon: "📱",
    title: "Strategic Social Media Marketing",
    problem: "Low engagement and no leads from social?",
    solution:
      "We run data-driven campaigns that build community and convert followers into paying customers.",
    points: [
      "Content strategy & creation",
      "Community management & ads",
      "Performance tracking",
    ],
    href: "/services/social-media-marketing",
  },
];

export default function HomePage() {
  return (
    <>
      <section id="home" className="section-navy hero">
        <div className="container">
          <span className="eyebrow" style={{ color: "#a5b4fc" }}>Digital growth, engineered</span>
          <h1>Senior-Level Digital Growth That Actually Converts</h1>
          <p className="lead">
            We specialize in Senior Web Development, Next-Gen SEO, AI Content, and Strategic
            Social Media for ambitious brands in top industries.
          </p>
          <div className="availability-badge"><span className="dot" /> Accepting New Clients 2026</div>
          <div className="hero-actions">
            <Link href="/#contact" className="btn btn-primary">Start Your Project</Link>
            <Link href="/packages" className="btn btn-outline">View Packages</Link>
          </div>
          <div className="stats">
            <div className="stat"><div className="num">450%</div><div className="label">Avg. ROI</div></div>
            <div className="stat"><div className="num">250K+</div><div className="label">Leads Generated</div></div>
            <div className="stat"><div className="num">100+</div><div className="label">Happy Clients</div></div>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Solutions for your challenges</span>
            <h2>Services That Solve Real Problems</h2>
            <p>Each service has its own dedicated page with our full approach, process, and results.</p>
          </div>
          <div className="grid grid-2">
            {SERVICES.map((s) => (
              <div className="card" key={s.href}>
                <div className="icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p style={{ fontWeight: 600 }}>{s.problem}</p>
                <p style={{ color: "var(--muted)" }}>{s.solution}</p>
                <ul className="list-check">
                  {s.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
                <Link href={s.href} className="more">Learn why it matters →</Link>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <Link href="/services/custom" className="btn btn-outline">Looking for a custom AI solution? →</Link>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="about">
        <div className="container">
          <div className="about-grid">
            <div>
              <span className="eyebrow">Our story</span>
              <h2>Built for brands that refuse to be average</h2>
              <p>
                At RCO Social, we don&apos;t just help brands navigate the digital landscape — we build
                the infrastructure that dominates it. Established in 2020 by founder Shane, RCO Social
                was born out of a clear mission: to bridge the gap between high-end, senior-level
                technical development and high-impact digital marketing.
              </p>
              <p>
                We engineer high-performance digital ecosystems designed for maximum visibility,
                seamless user experience, and hyper-scalable growth.
              </p>
              <Link href="/#contact" className="btn btn-primary">Work with us</Link>
            </div>
            <div>
              <div className="capability">
                <span className="dot" />
                <div>
                  <h3 style={{ fontSize: 16, marginBottom: 4 }}>Senior-Level Web Development</h3>
                  <p style={{ color: "var(--muted)", marginBottom: 0 }}>
                    Robust, lightning-fast web architecture and customized e-commerce platforms
                    engineered for flawless performance and high conversion rates.
                  </p>
                </div>
              </div>
              <div className="capability">
                <span className="dot" />
                <div>
                  <h3 style={{ fontSize: 16, marginBottom: 4 }}>Next-Gen SEO & Agentic Discovery</h3>
                  <p style={{ color: "var(--muted)", marginBottom: 0 }}>
                    We optimize your brand for traditional search engines and for Agentic
                    Discovery — ensuring your business is the top recommendation when AI agents,
                    LLMs, and conversational search tools crawl the web.
                  </p>
                </div>
              </div>
              <div className="capability">
                <span className="dot" />
                <div>
                  <h3 style={{ fontSize: 16, marginBottom: 4 }}>AI Video & Image Generation</h3>
                  <p style={{ color: "var(--muted)", marginBottom: 0 }}>
                    Cutting-edge generative AI to produce high-contrast, scroll-stopping visual
                    assets and cinematic marketing videos at scale.
                  </p>
                </div>
              </div>
              <div className="capability">
                <span className="dot" />
                <div>
                  <h3 style={{ fontSize: 16, marginBottom: 4 }}>Strategic Social Media Marketing</h3>
                  <p style={{ color: "var(--muted)", marginBottom: 0 }}>
                    Data-driven social campaigns designed to capture attention, foster community,
                    and turn passive scrollers into loyal customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-navy" id="gallery">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow" style={{ color: "#a5b4fc" }}>Our work</span>
            <h2>See the results in motion</h2>
            <p style={{ color: "#cbd2dc" }}>
              A look at recent branded video projects.
            </p>
          </div>
          <div className="gallery-grid">
            <div className="video-slot">
              <video
                className="gallery-video"
                src="https://iuyxtbcs2wvuxhzt.public.blob.vercel-storage.com/hermes.mp4"
                controls
                playsInline
                preload="metadata"
              />
              <span className="badge">Case Study 01</span>
            </div>
            <div className="video-slot">
              <video
                className="gallery-video"
                src="https://iuyxtbcs2wvuxhzt.public.blob.vercel-storage.com/neese.mp4"
                controls
                playsInline
                preload="metadata"
              />
              <span className="badge">Case Study 02</span>
            </div>
            <div className="video-slot">
              <video
                className="gallery-video"
                src="https://iuyxtbcs2wvuxhzt.public.blob.vercel-storage.com/nike.mp4"
                controls
                playsInline
                preload="metadata"
              />
              <span className="badge">Case Study 03</span>
            </div>
          </div>
          <div className="next-brief">
            <h3 style={{ fontSize: 18 }}>You could be next.</h3>
            <p style={{ color: "#cbd2dc", marginBottom: 0 }}>
              RCO Social partners with growth-stage brands to design, launch, and promote
              senior-level websites and AI-powered content that convert. If you&apos;re evaluating a
              web development, SEO, or social media marketing partner, this is the gallery of
              what a done-right engagement looks like — and the next project featured here could
              be yours. <Link href="/#contact" style={{ color: "#fff", fontWeight: 700, textDecoration: "underline" }}>Start
              your project</Link> or read
              <Link href="/blog" style={{ color: "#fff", fontWeight: 700, textDecoration: "underline" }}> why senior-level
              digital growth matters</Link> on our blog.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="ai-chat-agent-nod">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">New</span>
            <h2>Is Anyone Answering Your Website After 5PM?</h2>
            <p>
              Every hour your site goes unanswered, a lead goes to whoever responds first. Our AI
              Chat Agent qualifies visitors, answers questions, and books meetings around the
              clock — built the same way we built the one running on this site right now.
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <Link href="/ai-chat-agent" className="btn btn-primary">Meet the AI Chat Agent →</Link>
            <p style={{ marginTop: 16, color: "var(--muted)", fontSize: 14 }}>
              Try it — it&apos;s live at the bottom right of this page.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container">
          <div className="contact-grid">
            <div>
              <span className="eyebrow">Let&apos;s talk</span>
              <h2>Let&apos;s Build Something Great Together</h2>
              <p>Get your free competitive audit + strategy session.</p>
              <ul className="list-check">
                <li>Free 20-minute strategy call</li>
                <li>Competitive audit of your current site & channels</li>
                <li>No obligation, no pressure</li>
              </ul>
              <p style={{ marginTop: 20 }}>
                Prefer email? <a href="mailto:grow@rcosocial.com" style={{ color: "var(--indigo)", fontWeight: 700 }}>grow@rcosocial.com</a>
              </p>
            </div>
            <form className="card" action="mailto:grow@rcosocial.com" method="post" encType="text/plain">
              <div className="field">
                <label htmlFor="name">Full Name</label>
                <input id="name" name="name" type="text" required />
              </div>
              <div className="field">
                <label htmlFor="email">Business Email</label>
                <input id="email" name="email" type="email" required />
              </div>
              <div className="field">
                <label htmlFor="company">Company / Website</label>
                <input id="company" name="company" type="text" />
              </div>
              <div className="field">
                <label htmlFor="message">How can we help you?</label>
                <textarea id="message" name="message" required />
              </div>
              <button type="submit" className="btn btn-primary btn-block">Send Message — Let&apos;s Grow</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
