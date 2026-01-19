import { cva } from "class-variance-authority";
import { getTranslations } from "next-intl/server";

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

export default async function HeroSection() {
    const t = await getTranslations("about.hero");
    const clarityText = t("clarity");
    
    return (
        <section className={heroSectionStyles()}>
            <div className={heroInnerStyles()}>
                <span className={heroBadgeStyles()}>
                    {t("badge")}
                </span>
                <h1 className={heroTitleStyles()}>
                    {t("title", { clarity: clarityText })}
                </h1>
                <p className={heroDescriptionStyles()}>
                    {t("description")}
                </p>
            </div>
            <div className={heroBackgroundStyles()} />
        </section>
    )
}
