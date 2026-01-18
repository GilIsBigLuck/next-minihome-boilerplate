import HeroSection from "@/components/pages/style-guide/section/HeroSection";
import TypographySection from "@/components/pages/style-guide/section/TypographySection";
import ColorSection from "@/components/pages/style-guide/section/ColorSection";
import ButtonsSection from "@/components/pages/style-guide/section/ButtonsSection";
import FormsSection from "@/components/pages/style-guide/section/FormsSection";
import NavigationSection from "@/components/pages/style-guide/section/NavigationSection";

export default function StyleGuidePage() {
    return (
        <div className="max-w-layout-md mx-auto w-full py-12 px-6 lg:px-10 space-y-16">
            <HeroSection />
            <TypographySection />
            <ColorSection />
            <ButtonsSection />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <FormsSection />
                <NavigationSection />
            </div>
        </div>
    )
}
