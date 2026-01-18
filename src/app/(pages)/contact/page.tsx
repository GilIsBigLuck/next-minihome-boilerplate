import HeroSection from "@/components/pages/contact/section/HeroSection";
import ContactFormSection from "@/components/pages/contact/section/ContactFormSection";
import MapSection from "@/components/pages/contact/section/MapSection";

export default function ContactPage() {
    return (
        <div id="contactPage">
            <HeroSection />
            <ContactFormSection />
            <MapSection />
        </div>
    )
}
