import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Next-Gen SEO & Agentic Discovery Services",
  description:
    "Technical SEO plus agentic discovery optimization — so your brand ranks with traditional search engines and gets recommended by AI agents, LLMs, and conversational search tools.",
  alternates: { canonical: "https://rcosocial.com/services/seo-agentic-discovery" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "SEO and Agentic Discovery Optimization",
  provider: { "@type": "Organization", name: "RCO Social" },
  areaServed: "Global",
  description:
    "Technical SEO and content strategy combined with optimization for AI agents, LLMs, and conversational search so brands are discoverable across both traditional and agentic search.",
};

export default function Page() {
  return (
    <ServicePage
      eyebrow="SEO & Agentic Discovery"
      title="Next-Gen SEO & Agentic Discovery"
      intro="Invisible rankings mean invisible revenue. We optimize for traditional search engines and for the AI agents and LLMs that are now the first stop for a growing share of buyers."
      whyTitle="Why agentic discovery is now necessary, not optional"
      whyParagraphs={[
        "Search behavior has changed. Buyers increasingly ask AI assistants and chatbots to find and compare businesses instead of typing a query into a search engine and scrolling through links. If your site isn't structured for those systems to read, understand, and recommend, you don't show up in that conversation at all — no matter how good your Google ranking is.",
        "Agentic discovery means making your site legible to machines as well as humans: clean semantic structure, accurate schema markup, clear factual content, and machine-readable summaries. Combined with traditional technical SEO, this is what determines whether your business gets recommended when someone asks an AI 'who should I hire for this.'",
        "Businesses that ignore this now are repeating the mistake early web businesses made by ignoring mobile — the shift is already underway, and the cost of catching up later is higher than building it in now.",
      ]}
      features={[
        "Technical SEO audit and fixes (site speed, indexing, crawlability)",
        "Content strategy built around real search and conversational intent",
        "AI-optimized schema markup (Organization, Service, FAQ, Article)",
        "Agentic discovery readiness: structured, machine-legible page content",
        "Monthly performance reporting on rankings and visibility",
      ]}
      process={[
        { title: "Technical audit", desc: "We assess crawlability, speed, and current search visibility." },
        { title: "Strategy", desc: "We build a content and structure plan for search and AI agents." },
        { title: "Implementation", desc: "We apply schema, content, and technical fixes site-wide." },
        { title: "Reporting", desc: "Monthly reports track rankings and AI-discovery performance." },
      ]}
      faqs={[
        {
          q: "What is agentic discovery?",
          a: "It's the practice of optimizing a website so AI agents, large language models, and conversational search tools can accurately read, understand, and recommend your business — distinct from (but complementary to) traditional search engine optimization.",
        },
        {
          q: "How long does SEO take to show results?",
          a: "Technical fixes can improve crawlability within weeks. Ranking and visibility improvements typically build over 3-6 months, depending on competition and starting point.",
        },
        {
          q: "Do you provide reporting?",
          a: "Yes, monthly performance reports covering rankings, traffic, and visibility across both traditional and AI-driven discovery.",
        },
      ]}
      schema={schema}
    />
  );
}
