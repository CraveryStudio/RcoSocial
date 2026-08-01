import PricingPage from "@/components/PricingPage";

export const metadata = {
  title: "Real Estate Growth Packages",
  description:
    "SEO, social media, and Zillow-ready AI video packages built for real estate agents and teams — from $299/mo.",
  alternates: { canonical: "https://rcosocial.com/real-estate" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Real Estate Marketing Packages",
  provider: { "@type": "Organization", name: "RCO Social" },
  areaServed: "Global",
  description:
    "Tiered marketing packages for real estate agents and teams, covering local SEO, agentic discovery, social media, and Zillow-ready AI-generated listing videos, starting at $299/month.",
  offers: [
    { "@type": "Offer", name: "Agent Start", priceSpecification: { "@type": "UnitPriceSpecification", price: "299", priceCurrency: "USD", unitText: "MONTH" } },
    { "@type": "Offer", name: "Agent Growth", priceSpecification: { "@type": "UnitPriceSpecification", price: "597", priceCurrency: "USD", unitText: "MONTH" } },
    { "@type": "Offer", name: "Team Growth", priceSpecification: { "@type": "UnitPriceSpecification", price: "997", priceCurrency: "USD", unitText: "MONTH" } },
  ],
};

const tiers = [
  {
    name: "Agent Start",
    price: "299",
    features: [
      'Local SEO monitoring (agent name + "[city] real estate")',
      "4 social posts/month (1 platform)",
      "1 Zillow-ready AI-generated video/month",
      "Monthly report",
    ],
  },
  {
    name: "Agent Growth",
    price: "597",
    features: [
      "Local SEO + Agentic Discovery basics",
      "2 social platforms, listing-focused content",
      "4 Zillow-ready AI-generated listing videos/month",
    ],
  },
  {
    name: "Team Growth",
    price: "997",
    features: [
      "Everything in Agent Growth",
      "Market-update content added",
      "6 Zillow-ready AI-generated videos/month",
      "Monthly strategy call",
    ],
  },
];

const addons = [
  { name: "Single listing video package", desc: "3 polished, Zillow-ready videos for one property" },
  { name: "Open house social blitz", desc: "1-day, 3-platform campaign built around your event" },
  { name: "Agent headshot/branding refresh", desc: "AI-generated, on-brand professional imagery" },
  { name: "New listing landing page", desc: "Dedicated single-property site" },
  { name: "Market report/newsletter design", desc: "Monthly branded update for your sphere" },
  { name: "MLS-integrated listing feed", desc: "Live listings connected directly to your site" },
  { name: "Neighborhood/community page", desc: "Local-area page to capture hyperlocal search" },
  { name: "Virtual staging", desc: "AI-staged photos for empty listings" },
  { name: "Sphere-of-influence email campaign", desc: "One-time setup to reach your existing network" },
];

export default function RealEstatePage() {
  return (
    <PricingPage
      eyebrow="Real Estate"
      breadcrumbLabel="Your listings expire. Your visibility shouldn't."
      title="Your listings expire. Your visibility shouldn't."
      intro={[
        "Most agent websites go quiet the moment a listing sells — no new content, no reason for Google or buyers to come back. Meanwhile, you're competing for attention on every platform at once, with no time to keep any of them consistent.",
        "And the ground is shifting again: AI search agents and assistants are becoming the first place buyers look for a recommendation. The agents who show up there first — with structured, discoverable content — will own that channel before it's competitive. We build that infrastructure for you, so your online presence works as hard as you do.",
        "Every listing video we produce is Zillow-ready — sized, formatted, and optimized to upload straight to your Zillow listing, MLS, and social channels without any extra editing on your end.",
      ]}
      tiers={tiers}
      videoShowcase={{
        eyebrow: "See it in action",
        title: "A Zillow-Ready Listing Video, Start to Finish",
        intro: "Here's a sample of the kind of listing video every real estate package includes — ready to upload to Zillow, MLS, and social the moment it's delivered.",
        videoUrl: "https://iuyxtbcs2wvuxhzt.public.blob.vercel-storage.com/REAL%20ESTATE%20SAMPLE.mp4",
        caption: "Sample listing video — delivered Zillow-ready, no extra editing required.",
      }}
      addonsEyebrow="Real estate add-ons"
      addonsTitle="Boost Any Listing, Any Launch, Any Month"
      addons={addons}
      closingTitle="Running a full team or brokerage?"
      closingText="Our Team Scale and Brokerage Enterprise packages include full website builds and multi-agent rollout — let's talk."
      schema={schema}
    />
  );
}
