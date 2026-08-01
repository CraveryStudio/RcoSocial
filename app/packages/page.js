import PricingPage from "@/components/PricingPage";

export const metadata = {
  title: "Packages & Pricing",
  description:
    "Digital marketing and web development packages for growing businesses — SEO, social media, AI content, and web development, starting at $299/mo.",
  alternates: { canonical: "https://rcosocial.com/packages" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Digital Marketing Packages",
  provider: { "@type": "Organization", name: "RCO Social" },
  areaServed: "Global",
  description:
    "Tiered digital marketing packages covering SEO, social media management, and AI-generated content, starting at $299/month.",
  offers: [
    { "@type": "Offer", name: "Launch", priceSpecification: { "@type": "UnitPriceSpecification", price: "299", priceCurrency: "USD", unitText: "MONTH" } },
    { "@type": "Offer", name: "Starter", priceSpecification: { "@type": "UnitPriceSpecification", price: "597", priceCurrency: "USD", unitText: "MONTH" } },
    { "@type": "Offer", name: "Growth", priceSpecification: { "@type": "UnitPriceSpecification", price: "997", priceCurrency: "USD", unitText: "MONTH" } },
    { "@type": "Offer", name: "AI Chat Agent", priceSpecification: { "@type": "UnitPriceSpecification", price: "99", priceCurrency: "USD", unitText: "MONTH" }, description: "24/7 AI chat agent add-on. $249 one-time setup, then $99/month." },
  ],
};

const tiers = [
  {
    name: "Launch",
    price: "299",
    features: [
      "1 service (Social Media posting OR basic Local SEO monitoring)",
      "1 AI-generated video/month",
      "Monthly performance report",
      "No strategy calls — self-serve simplicity",
    ],
  },
  {
    name: "Starter",
    price: "597",
    features: [
      "1 core service, full scope (complete SEO foundation OR full Social Media management)",
      "2 AI-generated videos/month",
      "Monthly performance report",
      "Email support",
    ],
  },
  {
    name: "Growth",
    price: "997",
    featured: true,
    features: [
      "2 services bundled (your choice of any two: SEO, Social, AI Content)",
      "4–6 AI-generated short-form videos/month",
      "Monthly strategy call with our team",
    ],
  },
];

const featuredAddon = {
  name: "AI Chat Agent",
  tagline: "Your website, answering itself.",
  badge: "Most Popular Add-On",
  setupPrice: "249",
  setupLabel: "Setup (Limited-Time Offer)",
  monthlyPrice: "99",
  features: [
    "Trained on your business, services & FAQs",
    "Qualifies leads and books appointments 24/7",
    "Connects to your calendar & CRM",
    "Live on your site in days, not weeks",
    'The same technology powering rcosocial.com\'s own "Ask Shane"',
  ],
  ctaLabel: "Add to My Package →",
  ctaHref: "/ai-chat-agent",
};

const addons = [
  { name: "Extra AI video pack", desc: "10 additional videos for content-heavy months" },
  { name: "SEO technical audit", desc: "One-time deep audit of site health and rankings" },
  { name: "Additional social platform", desc: "Expand management to another platform" },
  { name: "Rush/priority turnaround", desc: "Faster delivery on any active project" },
  { name: "Quarterly competitive audit", desc: "See exactly where you stand against competitors" },
  { name: "Additional page (site work)", desc: "Extend any web project beyond base scope" },
  { name: "E-commerce integration", desc: "Add online selling capability to your site" },
  { name: "Custom booking/scheduling system", desc: "Let customers book directly from your site" },
  { name: "Blog/CMS setup", desc: "Give yourself a content engine for ongoing SEO" },
];

export default function PackagesPage() {
  return (
    <PricingPage
      eyebrow="Packages"
      breadcrumbLabel="Stop guessing what growth costs."
      title="Stop guessing what growth costs."
      intro={[
        "Most agencies make you sit through a sales call just to find out if you can afford them. We don't. Below are our core packages — pick the scope that matches where your business is today, then talk to us about what's next. No pressure, no upsell script, just a clear starting point.",
      ]}
      tiers={tiers}
      featuredAddon={featuredAddon}
      addonsEyebrow="Flexible add-ons"
      addonsTitle="Add-Ons — Add to Any Package"
      addonsIntro="Not sure if you need it yet? Ask us — most add-ons can start anytime."
      addons={addons}
      closingTitle="Need more than what's listed here?"
      closingText="Our Scale and Enterprise packages are built around businesses with bigger footprints — let's talk."
      schema={schema}
    />
  );
}
