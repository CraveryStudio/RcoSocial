import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Senior-Level Web Development Services",
  description:
    "Custom, high-performance website and e-commerce development built by senior engineers — fast, mobile-first, conversion-focused, and SEO-ready from day one.",
  alternates: { canonical: "https://rcosocial.com/services/web-development" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Web Development",
  provider: { "@type": "Organization", name: "RCO Social" },
  areaServed: "Global",
  description:
    "Senior-level web development including custom architecture, e-commerce, and lead-generation systems, built mobile-first and SEO-ready.",
};

export default function Page() {
  return (
    <ServicePage
      eyebrow="Web Development"
      title="Senior-Level Web Development"
      intro="A slow, outdated, or non-converting website is a growth ceiling. We build robust, lightning-fast, conversion-focused platforms that scale with your business — not templated sites that plateau."
      whyTitle="Why senior-level web development is necessary"
      whyParagraphs={[
        "Most small-business websites are built once, on a template, by whoever was cheapest at the time — and then never revisited as the business grows. That works fine for a landing page. It does not work for a business trying to generate leads, rank on search, or convert paid traffic.",
        "Junior or templated builds tend to break down in the same places: slow load times that kill mobile conversion, brittle structure that can't support new pages or integrations, and code that wasn't written with SEO or analytics in mind. Fixing that after the fact costs more than building it right the first time.",
        "A senior-level build means the architecture, performance, and conversion paths are considered from day one — so the site can support your marketing instead of undermining it.",
      ]}
      features={[
        "Custom high-performance architecture (no bloated page builders)",
        "E-commerce and lead-generation systems built to convert",
        "Mobile-first, responsive layouts tested across devices",
        "SEO-ready technical foundation (structured data, clean markup, fast Core Web Vitals)",
        "Ongoing support and iteration as your business grows",
      ]}
      process={[
        { title: "Discovery & audit", desc: "We review your current site, goals, and competitors." },
        { title: "Architecture & design", desc: "We map the structure and design for conversion and speed." },
        { title: "Build", desc: "Senior engineers build and test the platform end to end." },
        { title: "Launch & iterate", desc: "We launch, monitor performance, and keep improving." },
      ]}
      faqs={[
        {
          q: "How is this different from a template or DIY website builder?",
          a: "Template builders optimize for speed of setup, not performance or conversion. A custom build is engineered around your specific goals, load times, and SEO requirements, so it keeps paying off as you grow rather than needing to be rebuilt in a year.",
        },
        {
          q: "Will my new site be mobile-friendly?",
          a: "Yes. Every build is mobile-first: designed and tested for phones and tablets first, then scaled up to desktop, which is how most of your traffic will actually arrive.",
        },
        {
          q: "Do you work with existing sites or only new builds?",
          a: "Both. We regularly audit and rebuild underperforming sites, and we build new platforms from scratch for brands starting fresh.",
        },
      ]}
      schema={schema}
    />
  );
}
