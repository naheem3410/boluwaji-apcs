import { PublicLayout } from "@/components/layout/PublicLayout";
import { HeroSection } from "@/components/public/HeroSection";
import { OffersSection } from "@/components/public/OffersSection";
import { HowItWorksSection } from "@/components/public/HowItWorksSection";
import { StatsSection } from "@/components/public/StatsSection";
import { TestimonialsSection } from "@/components/public/TestimonialsSection";
import { CtaSection } from "@/components/public/CtaSection";

export default function HomePage() {
  return (
    <PublicLayout>
      <HeroSection />
      <OffersSection />
      <HowItWorksSection />
      <StatsSection />
      <TestimonialsSection />
      <CtaSection />
    </PublicLayout>
  );
}
