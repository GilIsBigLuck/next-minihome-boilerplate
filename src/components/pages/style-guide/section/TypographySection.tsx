import { cva } from "class-variance-authority";

const sectionStyles = cva([
    "space-y-6",
])

const sectionHeaderStyles = cva([
    "flex items-center gap-3",
])

const sectionTitleStyles = cva([
    "text-2xl font-bold",
])

const tableContainerStyles = cva([
    "overflow-x-auto rounded-xl border border-primary/20",
    "bg-white",
    "scroll-smooth",
])

const tableStyles = cva([
    "w-full min-w-[700px] text-left",
])

const tableHeaderStyles = cva([
    "bg-primary/5 border-b border-primary/20",
])

const tableHeaderCellStyles = cva([
    "px-4 md:px-6 py-4 text-sm font-bold uppercase tracking-wider",
])

const tableCellStyles = cva([
    "px-4 md:px-6 py-4 md:py-6",
])

const typeLabelStyles = cva([
    "font-mono text-xs text-primary/70",
])

const typeDetailsStyles = cva([
    "text-sm",
])

function FormatSizeIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
            <polyline points="4 7 4 4 20 4 20 7"/>
            <line x1="9" x2="15" y1="20" y2="20"/>
            <line x1="12" x2="12" y1="4" y2="20"/>
        </svg>
    )
}

interface TypographyItem {
    level: string;
    details: string;
    example: string;
    exampleClass: string;
}

const typographyItems: TypographyItem[] = [
    {
        level: "H1",
        details: "text-7xl / 72px / 800",
        example: "Heading 1",
        exampleClass: "text-7xl font-extrabold font-display"
    },
    {
        level: "H2",
        details: "text-5xl / 48px / 700",
        example: "Heading 2",
        exampleClass: "text-5xl font-bold font-display"
    },
    {
        level: "H3",
        details: "text-4xl / 36px / 700",
        example: "Heading 3",
        exampleClass: "text-4xl font-bold font-display"
    },
    {
        level: "H4",
        details: "text-3xl / 30px / 600",
        example: "Heading 4",
        exampleClass: "text-3xl font-semibold"
    },
    {
        level: "H5",
        details: "text-2xl / 24px / 600",
        example: "Heading 5",
        exampleClass: "text-2xl font-semibold"
    },
    {
        level: "H6",
        details: "text-xl / 20px / 600",
        example: "Heading 6",
        exampleClass: "text-xl font-semibold"
    },
    {
        level: "Body",
        details: "text-base / 16px / 400",
        example: "본문 텍스트입니다. Body text for readability.",
        exampleClass: "text-base leading-relaxed"
    },
    {
        level: "Small",
        details: "text-sm / 14px / 400",
        example: "작은 텍스트입니다. Small helper text.",
        exampleClass: "text-sm"
    },
    {
        level: "Caption",
        details: "text-xs / 12px / 500",
        example: "캡션 텍스트 CAPTION TEXT",
        exampleClass: "text-xs font-medium uppercase tracking-widest text-text-muted"
    }
]

export default function TypographySection() {
    return (
        <section className={sectionStyles()} id="typography">
            <div className={sectionHeaderStyles()}>
                <FormatSizeIcon />
                <h2 className={sectionTitleStyles()}>Typography</h2>
            </div>
            <div className={tableContainerStyles()}>
                <table className={tableStyles()}>
                    <thead className={tableHeaderStyles()}>
                        <tr>
                            <th className={tableHeaderCellStyles()}>Level</th>
                            <th className={tableHeaderCellStyles()}>Details</th>
                            <th className={tableHeaderCellStyles()}>Example</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-primary/20">
                        {typographyItems.map((item, index) => (
                            <tr key={index}>
                                <td className={tableCellStyles()}>
                                    <span className={typeLabelStyles()}>{item.level}</span>
                                </td>
                                <td className={tableCellStyles()}>
                                    <span className={typeDetailsStyles()}>{item.details}</span>
                                </td>
                                <td className={tableCellStyles()}>
                                    <span className={item.exampleClass}>{item.example}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}
