import { cva } from "class-variance-authority";
import Image from "next/image";
import { getBlurDataURL } from "@/lib/plaiceholder";

const heroSectionStyles = cva([
    "w-full px-4 py-8",
    "md:px-10",
])

const heroSectionInnerStyles = cva([
    "max-w-layout-md mx-auto",
])

const heroBannerStyles = cva([
    "relative w-full h-[70vh] rounded-xl overflow-hidden shadow-2xl",
])

const heroBannerImageStyles = cva([
    "absolute inset-0 bg-cover bg-center",
])

const heroBannerContentStyles = cva([
    "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent",
    "flex flex-col justify-end p-8 md:p-16"
])

const heroBannerSubtitleStyles = cva([
    "text-white font-bold tracking-widest text-xs mb-4",
])

const heroBannerTitleStyles = cva([
    "text-white text-5xl font-black leading-tight tracking-[-0.04em] max-w-3xl",
    "md:text-7xl"
])

const heroImagePath = "/dummy/fons-heijnsbroek-uhWEGjTfStg-unsplash.jpg";

export default async function HeroSection() {
    const blurDataURL = await getBlurDataURL(heroImagePath);

    return (
    <section className={heroSectionStyles()}>
        <div className={heroSectionInnerStyles()}>
            <div className={heroBannerStyles()}>
                    <div 
                        className={heroBannerImageStyles()} 
                    >
                        <Image 
                            src={heroImagePath} 
                            alt="Hero Banner Image" 
                            fill 
                            className="object-cover"
                            placeholder="blur"
                            blurDataURL={blurDataURL}
                            priority
                        />
                    </div>
                <div className={heroBannerContentStyles()}>
                    <p className={heroBannerSubtitleStyles()}>
                        Sub Title
                    </p>
                    <h2 className={heroBannerTitleStyles()}>
                        mini&apos;s <br/> Clear Sections
                    </h2>
                </div>
            </div>
        </div>
    </section>
    )
}
