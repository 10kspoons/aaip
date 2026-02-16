import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import PolicyPillars from "@/components/PolicyPillars";
import WhyAISection from "@/components/WhyAISection";
import NewsPreview from "@/components/NewsPreview";
import NewsletterSignup from "@/components/NewsletterSignup";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, breadcrumbSchema, speakableSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Australian AI Party | Citizen Politicians. Evidence Over Ideology.",
  description:
    "Break the career politician monopoly. AI-augmented governance lets farmers, doctors, and business owners serve effectively without becoming lifelong politicians. Fix housing. End the reform drought. Evidence over ideology.",
  openGraph: {
    title: "Australian AI Party | Citizen Politicians. Evidence Over Ideology.",
    description:
      "Break the career politician monopoly. AI-augmented governance lets farmers, doctors, and business owners serve effectively without becoming lifelong politicians.",
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
