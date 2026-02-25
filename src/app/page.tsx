import HeroSection from "@/components/sections/HeroSection";
import AuthoritySection from "@/components/sections/AuthoritySection";
import ServicesPreview from "@/components/sections/ServicesPreview";
import QuietInterlude from "@/components/sections/QuietInterlude";
import CaseStudyHighlight from "@/components/sections/CaseStudyHighlight";
import FounderPreview from "@/components/sections/FounderPreview";
import FinalCta from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AuthoritySection />
      <ServicesPreview />
      <QuietInterlude />
      <CaseStudyHighlight />
      <FounderPreview />
      <FinalCta />
    </>
  );
}
