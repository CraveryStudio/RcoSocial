import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AskShaneWidget from "@/components/AskShaneWidget";

export const metadata = {
  metadataBase: new URL("https://rcosocial.com"),
  title: {
    default: "RCO Social | Senior Digital Marketing & Web Development",
    template: "%s | RCO Social",
  },
  description:
    "RCO Social builds senior-level, high-performance websites and runs next-gen SEO, agentic discovery, AI content, and social media programs for ambitious brands.",
  openGraph: {
    title: "RCO Social | Senior Digital Marketing & Web Development",
    description:
      "Senior-level web development, next-gen SEO & agentic discovery, AI content, and social media marketing.",
    url: "https://rcosocial.com",
    siteName: "RCO Social",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "RCO Social",
  url: "https://rcosocial.com",
  logo: "https://rcosocial.com/logo.svg",
  foundingDate: "2020",
  founder: { "@type": "Person", name: "Shane" },
  description:
    "Senior-level digital marketing and web development agency specializing in web development, SEO and agentic discovery, AI content, and social media marketing.",
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    email: "grow@rcosocial.com",
    contactType: "sales",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <AskShaneWidget />
        <Analytics />
      </body>
    </html>
  );
}
