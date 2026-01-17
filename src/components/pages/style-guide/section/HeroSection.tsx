import { cva } from "class-variance-authority";

const heroSectionStyles = cva([
    "flex flex-col md:flex-row justify-between items-start md:items-end gap-6",
    "border-b border-border-default dark:border-white/10 pb-8",
])

const heroContentStyles = cva([
    "max-w-2xl space-y-2",
])

const heroTitleStyles = cva([
    "text-5xl font-black tracking-tight",
])

const heroDescriptionStyles = cva([
    "text-lg opacity-60",
])

const heroBadgeStyles = cva([
    "px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-widest",
])

interface HeroSectionProps {
    title: string;
    description: string;
    version: string;
}

const heroContent: HeroSectionProps = {
    title: "UI Style Guide",
    description: "A comprehensive component library and design system for the Clear Sections template. Engineered for clarity, consistency, and scale.",
    version: "Version 1.0.4"
}

export default function HeroSection() {
    return (
        <div className={heroSectionStyles()}>
            <div className={heroContentStyles()}>
                <h1 className={heroTitleStyles()}>{heroContent.title}</h1>
                <p className={heroDescriptionStyles()}>{heroContent.description}</p>
            </div>
            <div className="flex items-center gap-4">
                <span className={heroBadgeStyles()}>{heroContent.version}</span>
            </div>
        </div>
    )
}
