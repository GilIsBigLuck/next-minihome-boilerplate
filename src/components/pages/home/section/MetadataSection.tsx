import { cva } from "class-variance-authority";
import { getTranslations } from "next-intl/server";

const metadataSectionStyles = cva([
    "max-w-layout-md mx-auto px-6 py-12",
])

const metadataSectionInnerStyles = cva([
    "grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-y border-primary/10",
])

const metadataSectionItemStyles = cva([
    "flex flex-col gap-2",
])

const metadataSectionItemTitleStyles = cva([
    "text-primary text-xs font-bold uppercase tracking-wider",
])

const metadataSectionItemValueStyles = cva([
    "text-lg font-medium",
])

interface MetadataItemProps {
    title: string;
    value: string;
}

function MetadataItem({ title, value }: MetadataItemProps) {
    return (
        <div className={metadataSectionItemStyles()}>
            <p className={metadataSectionItemTitleStyles()}>
                {title}
            </p>
            <p className={metadataSectionItemValueStyles()}>
                {value}
            </p>
        </div>
    )
}

export default async function MetadataSection() {
    const t = await getTranslations("home.metadata");
    
    const metadataItems = [
        { title: t("titleClient"), value: t("client") },
        { title: t("titleYear"), value: t("year") },
        { title: t("titleRole"), value: t("role") },
    ]

    return (
    <section className={metadataSectionStyles()}>
        <div className={metadataSectionInnerStyles()}>
            {metadataItems.map((item, index) => (
                <MetadataItem key={index} title={item.title} value={item.value} />
            ))}
        </div>
    </section>
    )
}