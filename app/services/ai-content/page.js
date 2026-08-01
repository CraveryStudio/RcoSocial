import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "AI Video & Image Generation Services",
  description:
    "Consistent, high-quality, brand-matched video and image content produced with cutting-edge AI tools — fast turnaround without sacrificing quality or consistency.",
  alternates: { canonical: "https://rcosocial.com/services/ai-content" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI Video and Image Content Generation",
  provider: { "@type": "Organization", name: "RCO Social" },
  areaServed: "Global",
  description:
    "Branded video and image content produced with generative AI for consistent, scroll-stopping social and marketing assets at scale.",
};

export default function Page() {
  return (
    <ServicePage
      eyebrow="AI Video & Image Content"
      title="AI Video & Image Generation"
      intro="Need consistent, high-quality visuals fast? We create scroll-stopping branded content using cutting-edge AI, saving time and keeping your brand ahead of the content curve."
      whyTitle="Why AI-produced content is now necessary"
      whyParagraphs={[
        "Content volume, not just quality, drives visibility on social platforms and search alike. Traditional photo and video production can't keep pace with the posting cadence modern algorithms reward — and hiring a full production team for every asset isn't realistic for most growing brands.",
        "Generative AI closes that gap: it lets a brand produce consistent, high-contrast, professional visuals at a volume and speed traditional production can't match, without sacrificing brand consistency when it's managed by people who know how to direct the tools.",
        "The brands winning attention right now are the ones publishing often, testing formats quickly, and staying visually consistent across every post — all things AI content production is built for.",
      ]}
      features={[
        "Branded image and video creation matched to your visual identity",
        "Short-form social content built for Reels, TikTok, and Shorts",
        "Consistent brand assets across every platform",
        "Fast turnaround for campaigns and promotions",
        "Direction and quality control from our team, not raw automated output",
      ]}
      process={[
        { title: "Brand brief", desc: "We capture your visual identity, tone, and goals." },
        { title: "Generation", desc: "We produce image and video assets using AI tools we direct and curate." },
        { title: "Review & refine", desc: "We select, edit, and refine to match your brand exactly." },
        { title: "Delivery", desc: "You receive ready-to-post assets, sized for each platform." },
      ]}
      faqs={[
        {
          q: "Will AI-generated content look generic or off-brand?",
          a: "No — every asset is directed and curated by our team against your specific brand guidelines, not published as raw, unreviewed AI output.",
        },
        {
          q: "How fast is turnaround?",
          a: "Most content batches are delivered within days, far faster than traditional photo or video shoots, which is what makes consistent posting cadence realistic.",
        },
        {
          q: "Can this replace real product photography entirely?",
          a: "For some use cases, yes. For others, we recommend blending AI-generated content with select real photography for the best of both.",
        },
      ]}
      schema={schema}
    />
  );
}
