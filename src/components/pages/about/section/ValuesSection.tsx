import { cva } from "class-variance-authority";
import { getTranslations } from "next-intl/server";

const valuesSectionStyles = cva([
    "px-6 py-24 bg-bg-light",
    "lg:px-40",
])

const valuesInnerStyles = cva([
    "max-w-layout-md mx-auto",
])

const valuesHeaderStyles = cva([
    "text-center mb-16",
])

const valuesTitleStyles = cva([
    "text-4xl font-black tracking-tight mb-4",
])

const valuesSubtitleStyles = cva([
    "text-gray-600 max-w-xl mx-auto",
])

const valuesGridStyles = cva([
    "grid grid-cols-1 gap-8",
    "md:grid-cols-3",
])

const valueCardStyles = cva([
    "bg-white p-8 rounded-xl",
    "border border-primary/5 shadow-sm",
    "hover:shadow-xl hover:-translate-y-1 transition-all",
])

const valueIconContainerStyles = cva([
    "w-12 h-12 bg-primary/10 rounded-lg",
    "flex items-center justify-center text-primary mb-6",
])

const valueCardTitleStyles = cva([
    "text-xl font-bold mb-3",
])

const valueCardDescriptionStyles = cva([
    "text-gray-600 leading-relaxed",
])

interface ValueProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const valueIcons = [
    (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
    ),
    (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18V5l12-2v13"/>
            <circle cx="6" cy="18" r="3"/>
            <circle cx="18" cy="16" r="3"/>
        </svg>
    ),
    (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
        </svg>
    )
]

function ValueCard({ icon, title, description }: ValueProps) {
    return (
        <div className={valueCardStyles()}>
            <div className={valueIconContainerStyles()}>
                {icon}
            </div>
            <h3 className={valueCardTitleStyles()}>{title}</h3>
            <p className={valueCardDescriptionStyles()}>{description}</p>
        </div>
    )
}

export default async function ValuesSection() {
    const t = await getTranslations("about.values");
    
    const values: ValueProps[] = [
        {
            icon: valueIcons[0],
            title: t("integrity.title"),
            description: t("integrity.description")
        },
        {
            icon: valueIcons[1],
            title: t("innovation.title"),
            description: t("innovation.description")
        },
        {
            icon: valueIcons[2],
            title: t("empathy.title"),
            description: t("empathy.description")
        }
    ]

    return (
        <section id="core-principles" className={valuesSectionStyles()}>
            <div className={valuesInnerStyles()}>
                <div className={valuesHeaderStyles()}>
                    <h2 className={valuesTitleStyles()}>{t("title")}</h2>
                    <p className={valuesSubtitleStyles()}>{t("subtitle")}</p>
                </div>
                <div className={valuesGridStyles()}>
                    {values.map((value, index) => (
                        <ValueCard key={index} {...value} />
                    ))}
                </div>
            </div>
        </section>
    )
}
