import { cva } from "class-variance-authority";
import Image from "next/image";
import { getBlurDataURL } from "@/lib/plaiceholder";

const solutionSectionStyles = cva([
    "max-w-layout-sm mx-auto px-6 py-24",
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
    "text-lg leading-relaxed text-gray-600",
])

const solutionImageContainerStyles = cva([
    "w-full aspect-video rounded-xl overflow-hidden shadow-2xl relative",
])

const solutionImageStyles = cva([
    "w-full h-full object-cover",
])

interface SolutionContentProps {
    title: string;
    description: string;
    image: string;
}

const solutionContent: SolutionContentProps = {
    title: "The Solution",
    description: "We developed a modular grid system inspired by architectural floor plans. This grid serves as the foundation for everything from the responsive website to the physical construction site hoardings.",
    image: "/dummy/logan-voss-3RevGUpbUXI-unsplash.jpg"
}

export default async function SolutionSection() {
    const blurDataURL = await getBlurDataURL(solutionContent.image);

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
                    <Image
                        src={solutionContent.image}
                        alt="Solution Image"
                        fill
                        className={solutionImageStyles()}
                        placeholder="blur"
                        blurDataURL={blurDataURL}
                    />
                </div>
            </div>
        </section>
    )
}
