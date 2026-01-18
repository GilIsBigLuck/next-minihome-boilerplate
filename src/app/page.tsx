import HeroSection from "@/components/pages/home/section/HeroSection";
import MetadataSection from "@/components/pages/home/section/MetadataSection";
import ChallengeSection from "@/components/pages/home/section/ChallengeSection";
import ImagerySection from "@/components/pages/home/section/ImagerySection";
import SolutionSection from "@/components/pages/home/section/SolutionSection";
import ResultsSection from "@/components/pages/home/section/ResultsSection";
import NextProjectSection from "@/components/pages/home/section/NextProjectSection";

export default function Home() {
  return (
    <div id="homePage">
      <HeroSection />
      <MetadataSection />
      <ChallengeSection />
      <ImagerySection />
      <SolutionSection />
      <ResultsSection />
      <NextProjectSection />
    </div>
  );
}
