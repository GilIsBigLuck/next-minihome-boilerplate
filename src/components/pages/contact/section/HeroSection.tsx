import { cva } from "class-variance-authority";
import { getTranslations } from "next-intl/server";

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

export default async function HeroSection() {
    const t = await getTranslations("contact.hero");
    const remarkableText = t("remarkable");
    
    return (
        <section className={heroSectionStyles()}>
            <div className={heroContentStyles()}>
                <h2 className={heroTitleStyles()}>
                    {t("title", { remarkable: remarkableText })}
                </h2>
                <p className={heroDescriptionStyles()}>
                    {t("description")}
                </p>
            </div>
        </section>
    )
}
