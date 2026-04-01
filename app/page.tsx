import { CategorySplit } from "@/components/home/CategorySplit";
import { FAQPreview } from "@/components/home/FAQPreview";
import { FeaturedHajj } from "@/components/home/FeaturedHajj";
import { FeaturedUmrah } from "@/components/home/FeaturedUmrah";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Hero } from "@/components/home/Hero";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { TestimonialShowcase } from "@/components/home/TestimonialShowcase";
import { TrustStrip } from "@/components/home/TrustStrip";
import { WhyChoose } from "@/components/home/WhyChoose";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <CategorySplit />
      <FeaturedUmrah />
      <FeaturedHajj />
      <WhyChoose />
      <ProcessSteps />
      <TestimonialShowcase />
      <FAQPreview />
      <FinalCTA />
    </>
  );
}
