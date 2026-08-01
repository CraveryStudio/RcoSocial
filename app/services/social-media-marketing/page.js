import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Strategic Social Media Marketing Services",
  description:
    "Data-driven social media campaigns that build community and convert followers into paying customers — content strategy, community management, ads, and reporting.",
  alternates: { canonical: "https://rcosocial.com/services/social-media-marketing" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Social Media Marketing",
  provider: { "@type": "Organization", name: "RCO Social" },
  areaServed: "Global",
  description:
    "Data-driven social media strategy, content, community management, and advertising designed to convert followers into paying customers.",
};

export default function Page() {
  return (
    <ServicePage
      eyebrow="Social Media Marketing"
      title="Strategic Social Media Marketing"
      intro="Low engagement and no leads from social isn't a content problem alone — it's usually a strategy problem. We run data-driven campaigns that build community and convert followers into paying customers."
      whyTitle="Why professional social media management is necessary"
      whyParagraphs={[
        "Posting consistently is not the same as posting strategically. Most businesses that manage their own social media end up optimizing for likes and follower counts — metrics that don't translate into revenue — while missing the targeting, timing, and funnel structure that actually drives leads.",
        "Platforms change their algorithms constantly, and what worked six months ago often stops working without warning. Staying effective requires ongoing attention most business owners don't have time to give while also running the business itself.",
        "A managed, data-driven approach treats social media as a measurable growth channel — with clear goals, testing, and reporting — rather than a task squeezed in between everything else.",
      ]}
      features={[
        "Content strategy and creation aligned to business goals",
        "Community management and audience engagement",
        "Paid social advertising and targeting",
        "Performance tracking tied to leads, not just vanity metrics",
        "Regular strategy adjustments as platforms and algorithms change",
      ]}
      process={[
        { title: "Audit", desc: "We review current channels, audience, and performance." },
        { title: "Strategy", desc: "We build a content and campaign plan tied to real goals." },
        { title: "Execution", desc: "We create, post, manage, and run ads on your behalf." },
        { title: "Optimize", desc: "We track performance and adjust monthly for better results." },
      ]}
      faqs={[
        {
          q: "Which platforms do you manage?",
          a: "We tailor the platform mix to where your audience actually is — commonly Instagram, TikTok, Facebook, and LinkedIn — rather than spreading effort thin across every platform.",
        },
        {
          q: "How do you measure success?",
          a: "We track metrics tied to business outcomes: leads, conversions, and audience growth quality, not just likes or impressions.",
        },
        {
          q: "Do you handle paid ads too?",
          a: "Yes, both organic content and paid social advertising are part of this service, managed together for consistent messaging.",
        },
      ]}
      schema={schema}
    />
  );
}
