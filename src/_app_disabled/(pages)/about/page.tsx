import HeroSection from "@/components/pages/about/section/HeroSection";
import StorySection from "@/components/pages/about/section/StorySection";
import ValuesSection from "@/components/pages/about/section/ValuesSection";
import TeamSection from "@/components/pages/about/section/TeamSection";
import CTASection from "@/components/pages/about/section/CTASection";

export default function AboutPage() {
    return (
        <div id="aboutPage">
            <HeroSection />
            <StorySection />
            <ValuesSection />
            <TeamSection />
            <CTASection />
        </div>
    )
}
