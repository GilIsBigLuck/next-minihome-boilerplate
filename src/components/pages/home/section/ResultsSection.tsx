import { cva } from "class-variance-authority";

const resultsSectionStyles = cva([
    "max-w-layout-md mx-auto px-6 py-16 mb-20",
])

const resultsSectionGridStyles = cva([
    "grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left",
])

const resultsItemStyles = cva([
    "",
])

const resultsValueStyles = cva([
    "text-5xl font-black text-primary",
])

const resultsLabelStyles = cva([
    "mt-4 text-sm font-bold uppercase text-gray-500 tracking-widest",
])

interface ResultItemProps {
    value: string;
    label: string;
}

function ResultItem({ value, label }: ResultItemProps) {
    return (
        <div className={resultsItemStyles()}>
            <span className={resultsValueStyles()}>
                {value}
            </span>
            <p className={resultsLabelStyles()}>
                {label}
            </p>
        </div>
    )
}

const resultsItems: ResultItemProps[] = [
    { value: "140%", label: "Inquiry Increase" },
    { value: "03", label: "Design Awards" },
    { value: "12", label: "Global Locations" },
]

export default function ResultsSection() {
    return (
        <section className={resultsSectionStyles()}>
            <div className={resultsSectionGridStyles()}>
                {resultsItems.map((item, index) => (
                    <ResultItem key={index} value={item.value} label={item.label} />
                ))}
            </div>
        </section>
    )
}
