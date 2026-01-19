import { cva } from "class-variance-authority";

const heroSectionStyles = cva([
    "max-w-layout-md mx-auto w-full px-6 pt-16 pb-12",
])

const heroContentStyles = cva([
    "max-w-2xl",
])

const heroTitleStyles = cva([
    "text-5xl font-black leading-[1.1] tracking-tight mb-4",
])

const heroTitleAccentStyles = cva([
    "text-primary",
])

const heroDescriptionStyles = cva([
    "text-lg text-gray-600 font-medium",
])

interface HeroContentProps {
    titleParts: { text: string; accent?: boolean }[];
    description: string;
}

const heroContent: HeroContentProps = {
    titleParts: [
        { text: "Let's build something " },
        { text: "remarkable", accent: true },
        { text: " together." }
    ],
    description: "Have a specific challenge or just want to explore how we can work together? Our team is ready to listen and help you scale."
}

export default function HeroSection() {
    return (
        <section className={heroSectionStyles()}>
            <div className={heroContentStyles()}>
                <h2 className={heroTitleStyles()}>
                    {heroContent.titleParts.map((part, index) => (
                        part.accent ? (
                            <span key={index} className={heroTitleAccentStyles()}>{part.text}</span>
                        ) : (
                            <span key={index}>{part.text}</span>
                        )
                    ))}
                </h2>
                <p className={heroDescriptionStyles()}>
                    {heroContent.description}
                </p>
            </div>
        </section>
    )
}
