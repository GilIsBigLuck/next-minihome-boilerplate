import { cva } from "class-variance-authority";
import Image from "next/image";
import { getBlurDataURL } from "@/lib/blur";
import { getTranslations } from "next-intl/server";

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

const solutionImagePath = "/dummy/logan-voss-3RevGUpbUXI-unsplash.jpg";

export default async function SolutionSection() {
    const blurDataURL = getBlurDataURL();
    const t = await getTranslations("home.solution");

    return (
        <section className={solutionSectionStyles()}>
            <div className={solutionSectionInnerStyles()}>
                <div className={solutionTextBlockStyles()}>
                    <h2 className={solutionTitleStyles()}>
                        {t("title")}
                    </h2>
                    <p className={solutionDescriptionStyles()}>
                        {t("description")}
                    </p>
                </div>
                <div className={solutionImageContainerStyles()}>
                    <Image
                        src={solutionImagePath}
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
