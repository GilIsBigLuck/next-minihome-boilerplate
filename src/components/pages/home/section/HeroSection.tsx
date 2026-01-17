import { cva } from "class-variance-authority";

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

export default function HeroSection() {
    return (
    <section className={heroSectionStyles()}>
        <div className={heroSectionInnerStyles()}>

            <div className={heroBannerStyles()}>

                <div 
                    className={heroBannerImageStyles()} 
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDdIzp8McTRUFEBgre3EyWe7UhTMJghqRvk2AJ6CK_pdNWHUKogwqc-lEw_quoJOzpMteZr-sejkKU00GLX_6FEg-OpXtjlz9_L5HQtAiAz_Mgtg0n3VqrI0L0qCsqZMzAT0LNWJBxfDwd2IENcqdu9Apxe_T8rnhyuiHgeRQCHvlqKcnMEN1fngv3UN0wicPIq21Ngb8MTKw9fQ-agqrsraNuwd4_ylDvCCHvk5g34tANGasWZhYBXs_wgWhtQolYsJ_9FqtT7seYF')" }}>
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