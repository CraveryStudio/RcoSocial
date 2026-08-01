import Link from "next/link";
import { posts } from "@/lib/blogData";

export const metadata = {
  title: "Blog",
  description:
    "Insights on why senior-level web development, SEO & agentic discovery, and social media marketing are necessary for growing businesses.",
  alternates: { canonical: "https://rcosocial.com/blog" },
};

export default function BlogIndex() {
  return (
    <>
      <section className="section-navy page-hero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Home</Link> / Blog</div>
          <span className="eyebrow">Insights</span>
          <h1 style={{ maxWidth: 680 }}>Why This Work Matters</h1>
          <p style={{ color: "#cbd2dc", maxWidth: 600, fontSize: 17 }}>
            Straight answers on why senior-level web development, agentic discovery, and
            professional social media marketing are worth the investment.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {posts.map((p) => (
              <Link href={`/blog/${p.slug}`} key={p.slug} className="blog-card">
                <div className="thumb">{p.category}</div>
                <div className="body">
                  <div className="meta">{p.date} · {p.readTime}</div>
                  <h3>{p.title}</h3>
                  <p className="excerpt">{p.description}</p>
                  <span className="read">Read article →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
