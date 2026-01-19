import { cva } from "class-variance-authority";
import { getTranslations } from "next-intl/server";

const ctaSectionStyles = cva([
    "px-6 py-24",
    "lg:px-40",
])

const ctaContainerStyles = cva([
    "max-w-layout-md mx-auto bg-primary rounded-3xl p-12 text-center relative overflow-hidden",
    "md:p-20",
])

const ctaBackgroundStyles = cva([
    "absolute inset-0 opacity-10 pointer-events-none",
])

const ctaTitleStyles = cva([
    "text-white text-3xl font-black mb-8 relative z-10",
    "md:text-5xl",
])

const ctaButtonsContainerStyles = cva([
    "flex flex-col gap-4 justify-center relative z-10",
    "sm:flex-row",
])

const ctaPrimaryButtonStyles = cva([
    "bg-white text-primary px-8 py-4 rounded-xl font-bold",
    "hover:bg-gray-100 transition-all shadow-xl",
])

const ctaSecondaryButtonStyles = cva([
    "bg-primary/20 border border-white/30 text-white px-8 py-4 rounded-xl font-bold",
    "hover:bg-primary/30 transition-all",
])

export default async function CTASection() {
    const t = await getTranslations("about.cta");
    
    return (
        <section className={ctaSectionStyles()}>
            <div className={ctaContainerStyles()}>
                <div className={ctaBackgroundStyles()}>
                    <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                    </svg>
                </div>
                <h2 className={ctaTitleStyles()}>
                    {t("title")}
                </h2>
                <div className={ctaButtonsContainerStyles()}>
                    <button className={ctaPrimaryButtonStyles()}>
                        {t("startProject")}
                    </button>
                    <button className={ctaSecondaryButtonStyles()}>
                        {t("talkToExpert")}
                    </button>
                </div>
            </div>
        </section>
    )
}
