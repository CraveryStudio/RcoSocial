import { posts } from "@/lib/blogData";

export default function sitemap() {
  const base = "https://rcosocial.com";
  const staticRoutes = [
    "",
    "/services/web-development",
    "/services/seo-agentic-discovery",
    "/services/ai-content",
    "/services/social-media-marketing",
    "/services/custom",
    "/packages",
    "/real-estate",
    "/ai-chat-agent",
    "/blog",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
  const postRoutes = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: p.date,
  }));
  return [...staticRoutes, ...postRoutes];
}
