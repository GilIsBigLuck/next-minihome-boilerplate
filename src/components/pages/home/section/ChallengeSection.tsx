import { cva } from "class-variance-authority";

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
    "text-lg leading-relaxed text-gray-600 dark:text-gray-300 font-light",
])

interface ChallengeContentProps {
    title: string;
    paragraphs: string[];
}

const challengeContent: ChallengeContentProps = {
    title: "The Challenge",
    paragraphs: [
        "Studio Archstone sought to redefine the visual language of urban redevelopment. Their existing brand felt rooted in the past, failing to communicate the sustainable and human-centric approach of their modern architectural projects.",
        "We were tasked with creating a comprehensive identity system that bridges the gap between industrial heritage and future-focused innovation, ensuring consistency across physical sites and digital touchpoints."
    ]
}

export default function ChallengeSection() {
    return (
        <section className={challengeSectionStyles()}>
            <div className={challengeSectionInnerStyles()}>
                <h2 className={challengeSectionTitleStyles()}>
                    {challengeContent.title}
                </h2>
                <div className={challengeSectionGridStyles()}>
                    {challengeContent.paragraphs.map((paragraph, index) => (
                        <p key={index} className={challengeSectionTextStyles()}>
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    )
}
