import { cva } from "class-variance-authority";

const imagerySectionStyles = cva([
    "w-full px-4 py-12",
    "md:px-10",
])

const imagerySectionInnerStyles = cva([
    "max-w-layout-md mx-auto",
])

const imagerySectionGridStyles = cva([
    "grid grid-cols-1 md:grid-cols-2 gap-8",
])

const imageryTallImageStyles = cva([
    "aspect-[4/5] rounded-xl overflow-hidden shadow-lg bg-gray-100",
])

const imageryImageStyles = cva([
    "w-full h-full bg-cover bg-center",
])

const imageryRightColumnStyles = cva([
    "flex flex-col justify-center gap-8",
])

const imagerySquareImageStyles = cva([
    "aspect-square rounded-xl overflow-hidden shadow-lg bg-gray-100",
])

const imageryQuoteBlockStyles = cva([
    "bg-primary/5 dark:bg-primary/10 p-10 rounded-xl border-l-4 border-primary",
])

const imageryQuoteTextStyles = cva([
    "text-2xl font-display font-medium leading-relaxed italic text-primary",
])

const imageryQuoteAuthorStyles = cva([
    "mt-6 font-bold text-sm",
])

interface ImageryContentProps {
    tallImage: string;
    squareImage: string;
    quote: {
        text: string;
        author: string;
    };
}

const imageryContent: ImageryContentProps = {
    tallImage: "/dummy/david-maier-nSHEKTHRm0U-unsplash.jpg",
    squareImage: "/dummy/pawel-czerwinski-IQHxLsy-VgM-unsplash.jpg",
    quote: {
        text: "The new identity doesn't just look better; it feels like the soul of our studio finally has a face.",
        author: "— Marcus Thorne, Principal Architect"
    }
}

export default function ImagerySection() {
    return (
        <section className={imagerySectionStyles()}>
            <div className={imagerySectionInnerStyles()}>
                <div className={imagerySectionGridStyles()}>

                    <div className={imageryTallImageStyles()}>
                        <div
                            className={imageryImageStyles()}
                            style={{ backgroundImage: `url("${imageryContent.tallImage}")` }}
                        />
                    </div>

                    <div className={imageryRightColumnStyles()}>
                        <div className={imagerySquareImageStyles()}>
                            <div
                                className={imageryImageStyles()}
                                style={{ backgroundImage: `url("${imageryContent.squareImage}")` }}
                            />
                        </div>
                        <div className={imageryQuoteBlockStyles()}>
                            <p className={imageryQuoteTextStyles()}>
                                &ldquo;{imageryContent.quote.text}&rdquo;
                            </p>
                            <p className={imageryQuoteAuthorStyles()}>
                                {imageryContent.quote.author}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
