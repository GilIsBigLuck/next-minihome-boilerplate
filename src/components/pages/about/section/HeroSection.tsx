import { cva } from "class-variance-authority";

const heroSectionStyles = cva([
    "relative px-6 py-24 overflow-hidden",
    "md:py-32",
    "lg:px-40",
])

const heroInnerStyles = cva([
    "max-w-layout-md mx-auto text-center relative z-10",
])

const heroBadgeStyles = cva([
    "inline-block px-4 py-1.5 mb-6",
    "text-xs font-bold tracking-widest uppercase",
    "bg-primary/10 text-primary rounded-full",
])

const heroTitleStyles = cva([
    "text-5xl font-black leading-tight tracking-[-0.04em] mb-8",
    "md:text-7xl",
])

const heroTitleAccentStyles = cva([
    "text-primary",
])

const heroDescriptionStyles = cva([
    "text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed",
    "md:text-xl",
])

const heroBackgroundStyles = cva([
    "absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 -z-0",
])

interface HeroContentProps {
    badge: string;
    titleParts: { text: string; accent?: boolean }[];
    description: string;
}

const heroContent: HeroContentProps = {
    badge: "Our Purpose",
    titleParts: [
        { text: "Redefining " },
        { text: "Clarity", accent: true },
    ],
    description: "Empowering businesses through structured innovation and transparent communication. We believe that the best solutions are born from radical honesty and elegant simplicity."
}

export default function HeroSection() {
    return (
        <section className={heroSectionStyles()}>
            <div className={heroInnerStyles()}>
                <span className={heroBadgeStyles()}>
                    {heroContent.badge}
                </span>
                <h1 className={heroTitleStyles()}>
                    {heroContent.titleParts.map((part, index) => (
                        part.accent ? (
                            <span key={index} className={heroTitleAccentStyles()}>{part.text}</span>
                        ) : (
                            <span key={index}>{part.text}</span>
                        )
                    ))}
                </h1>
                <p className={heroDescriptionStyles()}>
                    {heroContent.description}
                </p>
            </div>
            <div className={heroBackgroundStyles()} />
        </section>
    )
}
