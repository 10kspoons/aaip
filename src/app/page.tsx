import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import PolicyPillars from "@/components/PolicyPillars";
import WhyAISection from "@/components/WhyAISection";
import NewsPreview from "@/components/NewsPreview";
import NewsletterSignup from "@/components/NewsletterSignup";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, breadcrumbSchema, speakableSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Australian AI Party | Smarter Decisions for All Australians",
  description:
    "The Australian AI Party advocates for the ethical and effective use of artificial intelligence in government decision-making. Join us in building a smarter, more transparent democracy.",
  openGraph: {
    title: "Australian AI Party | Smarter Decisions for All Australians",
    description:
      "The Australian AI Party advocates for the ethical and effective use of artificial intelligence in government decision-making.",
    url: SITE_URL,
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: SITE_URL }])} />
      <JsonLd data={speakableSchema(["h1", ".hero-summary"])} />
      <HeroSection />
      <PolicyPillars />
      <WhyAISection />
      <NewsPreview />
      <NewsletterSignup />
    </>
  );
}
