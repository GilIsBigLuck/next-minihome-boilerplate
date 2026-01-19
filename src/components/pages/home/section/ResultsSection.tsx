import { cva } from "class-variance-authority";
import { getTranslations } from "next-intl/server";

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

export default async function ResultsSection() {
    const t = await getTranslations("home.results");

    const resultsItems: ResultItemProps[] = [
        { value: "140%", label: t("inquiryIncrease") },
        { value: "03", label: t("designAwards") },
        { value: "12", label: t("globalLocations") },
    ];

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
