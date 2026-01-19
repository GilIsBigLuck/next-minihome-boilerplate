import { cva } from "class-variance-authority";
import Link from "next/link";
import Image from "next/image";
import { getBlurDataURL } from "@/lib/plaiceholder";
import { getTranslations } from "next-intl/server";

const nextProjectSectionStyles = cva([
    "w-full mt-24",
])

const nextProjectLinkStyles = cva([
    "group relative block w-full h-[60vh] overflow-hidden bg-bg-inverse",
])

const nextProjectBgImageStyles = cva([
    "absolute inset-0 object-cover opacity-70",
    "group-hover:opacity-80 transition-opacity duration-700",
])

const nextProjectOverlayStyles = cva([
    "absolute inset-0 bg-gradient-to-r from-black/10 via-black/100 to-black/20",
])

const nextProjectContentStyles = cva([
    "relative h-full max-w-layout-md mx-auto px-6 flex flex-col justify-center items-start",
])

const nextProjectLabelStyles = cva([
    "text-primary font-bold tracking-[0.2em] uppercase text-sm mb-6",
    "flex items-center gap-2",
    "group-hover:translate-x-2 transition-transform duration-500",
])

const nextProjectTitleStyles = cva([
    "text-white text-5xl font-black tracking-tighter max-w-2xl",
    "md:text-8xl",
    "group-hover:scale-[1.02] transition-transform duration-700 origin-left",
])

const nextProjectBackgroundImage = "/dummy/logan-voss-cfEoiMkUVXU-unsplash.jpg";

export default async function NextProjectSection() {
    const blurDataURL = await getBlurDataURL(nextProjectBackgroundImage);
    const t = await getTranslations("home.nextProject");

    return (
        <section className={nextProjectSectionStyles()}>
            <Link href="/style-guide" className={nextProjectLinkStyles()}>
                <Image
                    src={nextProjectBackgroundImage}
                    alt="Next Project Background"
                    fill
                    className={nextProjectBgImageStyles()}
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                />
                <div className={nextProjectOverlayStyles()} />
                <div className={nextProjectContentStyles()}>
                    <span className={nextProjectLabelStyles()}>
                        {t("title")}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </span>
                    <h2 className={nextProjectTitleStyles()}>
                        {t("description")}
                    </h2>
                </div>
            </Link>
        </section>
    )
}
