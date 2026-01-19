import { cva } from "class-variance-authority";
import { getTranslations } from "next-intl/server";

const challengeSectionStyles = cva([
    "max-w-layout-md mx-auto px-6 py-16",
])

const challengeSectionInnerStyles = cva([
    "flex flex-col gap-6",
])

const challengeSectionTitleStyles = cva([
    "text-3xl font-black tracking-tight",
])

const challengeSectionGridStyles = cva([
    "grid grid-cols-1 md:grid-cols-2 gap-12",
])

const challengeSectionTextStyles = cva([
    "text-lg leading-relaxed text-gray-600 font-light",
])

export default async function ChallengeSection() {
    const t = await getTranslations("home.challenge");
    const paragraphs = t.raw("paragraphs") as string[];

    return (
        <section className={challengeSectionStyles()}>
            <div className={challengeSectionInnerStyles()}>
                <h3 className={challengeSectionTitleStyles()}>
                    {t("title")}
                </h3>
                <div className={challengeSectionGridStyles()}>
                    {paragraphs.map((paragraph, index) => (
                        <p key={index} className={challengeSectionTextStyles()}>
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    )
}
