import { cva } from "class-variance-authority";

const solutionSectionStyles = cva([
    "max-w-layout-md mx-auto px-6 py-24",
])

const solutionSectionInnerStyles = cva([
    "flex flex-col gap-10",
])

const solutionTextBlockStyles = cva([
    "max-w-xl",
])

const solutionTitleStyles = cva([
    "text-3xl font-black tracking-tight mb-6",
])

const solutionDescriptionStyles = cva([
    "text-lg leading-relaxed text-gray-600 dark:text-gray-300",
])

const solutionImageContainerStyles = cva([
    "w-full aspect-video rounded-xl overflow-hidden shadow-2xl",
])

const solutionImageStyles = cva([
    "w-full h-full bg-cover bg-center",
])

interface SolutionContentProps {
    title: string;
    description: string;
    image: string;
}

const solutionContent: SolutionContentProps = {
    title: "The Solution",
    description: "We developed a modular grid system inspired by architectural floor plans. This grid serves as the foundation for everything from the responsive website to the physical construction site hoardings.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMh5dOciATcGbDEwTNQbOYnlp9nLh4yN431hhaPDrF5oiV3KAfhQrcUCG1ijGI9DtK4f5tmy2uIicquElDJy7BZqIXroZdTwwyJObNopHHCDnh0rl491hIb8HPv2cp6WXIg9NJtyuzBqo7CJLFYsz8ZVRxI-fYssCIWUgcs_e_KkiSWD8f4Dt1nICfNd7Zi1cRc9X_PYw8HOJAhZkrC2iknbZlRrr9dXKVr0_50Fi3ELeeJz-0lEWWGJ6QY8FsxyugZJVhhkjhSCvU"
}

export default function SolutionSection() {
    return (
        <section className={solutionSectionStyles()}>
            <div className={solutionSectionInnerStyles()}>

                <div className={solutionTextBlockStyles()}>
                    <h2 className={solutionTitleStyles()}>
                        {solutionContent.title}
                    </h2>
                    <p className={solutionDescriptionStyles()}>
                        {solutionContent.description}
                    </p>
                </div>

                <div className={solutionImageContainerStyles()}>
                    <div
                        className={solutionImageStyles()}
                        style={{ backgroundImage: `url("${solutionContent.image}")` }}
                    />
                </div>

            </div>
        </section>
    )
}
