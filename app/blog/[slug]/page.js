import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPostBySlug } from "@/lib/blogData";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://rcosocial.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default function BlogPost({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: "RCO Social" },
    publisher: { "@type": "Organization", name: "RCO Social" },
    mainEntityOfPage: `https://rcosocial.com/blog/${post.slug}`,
  };

  const faqSchema = post.faqs && {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      <section className="section-navy page-hero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Home</Link> / <Link href="/blog">Blog</Link></div>
          <span className="eyebrow">{post.category}</span>
          <h1 style={{ maxWidth: 720 }}>{post.title}</h1>
          <p style={{ color: "#9aa4b2", fontSize: 14 }}>{post.date} · {post.readTime}</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="article">
            <p>{post.intro}</p>
            {post.sections.map((s) => (
              <div key={s.heading}>
                <h2>{s.heading}</h2>
                {s.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            ))}
            {post.faqs && (
              <>
                <h2>FAQ</h2>
                {post.faqs.map((f) => (
                  <div className="faq" key={f.q}>
                    <h3>{f.q}</h3>
                    <p>{f.a}</p>
                  </div>
                ))}
              </>
            )}
          </div>
          <div style={{ maxWidth: 760, margin: "40px auto 0" }}>
            <div className="cta-band">
              <h2>Ready to talk about your project?</h2>
              <p>Get a free competitive audit and strategy session.</p>
              <Link href="/#contact" className="btn btn-primary">Start Your Project</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
