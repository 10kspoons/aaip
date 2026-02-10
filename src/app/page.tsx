import HeroSection from "@/components/HeroSection";
import PolicyPillars from "@/components/PolicyPillars";
import WhyAISection from "@/components/WhyAISection";
import NewsPreview from "@/components/NewsPreview";
import NewsletterSignup from "@/components/NewsletterSignup";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PolicyPillars />
      <WhyAISection />
      <NewsPreview />
      <NewsletterSignup />
    </>
  );
}
