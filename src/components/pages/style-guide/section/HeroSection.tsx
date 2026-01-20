import { cva } from "class-variance-authority";
import { getTranslations } from "next-intl/server";

const heroSectionStyles = cva([
    "flex flex-col md:flex-row justify-between items-start md:items-end gap-6",
    "border-b border-border-default pb-8",
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

export default async function HeroSection() {
    const t = await getTranslations("styleGuide.hero");
    
    return (
        <div className={heroSectionStyles()}>
            <div className={heroContentStyles()}>
                <h1 className={heroTitleStyles()}>{t("title")}</h1>
                <p className={heroDescriptionStyles()}>{t("description")}</p>
            </div>
            <div className="flex items-center gap-4">
                <span className={heroBadgeStyles()}>{t("version")}</span>
            </div>
        </div>
    )
}
