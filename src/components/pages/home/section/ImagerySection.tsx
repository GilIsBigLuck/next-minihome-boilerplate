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
    tallImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxYj7qstZcurQRxW1cr5Tv58MOeXIfmU86jpmvcbX52oqWjvcwMZPiYe-ORIKPZGo2kog_PjZUZhAWb0bK8qrofr5pm8C8rCkuhDsbM4I-RuroCmWHyMk8Cb9S3-k2L8kaD9T6moMtK8wNjGSPAikihyRAfMgJuIVFTuo9LD9kF7LrnWghw8nVXh-q6mnqSCdLUO2yFLbhubnnoJeloVfW0F1Q5HJkd6XnK076FRpNiKkZFikS078tzKpnW2FZZ_NKmPPU1v9JY-uC",
    squareImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIf87T-awEI0Io1vmpsMtBXU41rufIKWBcUasiMMtZaAE7z9aO7p2ppCh8kkocIiSoTcfNxgIK1rUx5X7nzrH2ygHG5iVK6W54OlKf-rF84C8dQ6m9gEMwWNPgzyd4MIqZ2ZXqPQbvvQ2f03O4MM3vIN2FwZSkjILWNgJp-85d-RiYwd8HpxmrRP0PGWn0X4Ji0a7jZ66BsxU-gktJ88abmiVe6y74AzP1CtQE5noPKoISi1CTxFI1Aq4cuNwImPpKBpp7APKvbBGk",
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
