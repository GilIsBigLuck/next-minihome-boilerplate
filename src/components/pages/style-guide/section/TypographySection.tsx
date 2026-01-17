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
    "overflow-hidden rounded-xl border border-primary/20 dark:border-white/10",
    "bg-white dark:bg-card-dark",
])

const tableStyles = cva([
    "w-full text-left",
])

const tableHeaderStyles = cva([
    "bg-primary/5 dark:bg-white/5 border-b border-primary/20 dark:border-white/10",
])

const tableHeaderCellStyles = cva([
    "px-6 py-4 text-sm font-bold uppercase tracking-wider",
])

const tableCellStyles = cva([
    "px-6 py-6",
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
        level: "H1 - ExtraBold",
        details: "48px / 1.2 / 800",
        example: "The quick brown fox",
        exampleClass: "text-4xl font-extrabold"
    },
    {
        level: "H2 - Bold",
        details: "32px / 1.3 / 700",
        example: "Jumps over the lazy dog",
        exampleClass: "text-2xl font-bold"
    },
    {
        level: "Body - Regular",
        details: "16px / 1.6 / 400",
        example: "This is how body text looks. It is designed to be highly readable with a generous line height for long-form content.",
        exampleClass: "text-base leading-relaxed opacity-80"
    },
    {
        level: "Caption - Medium",
        details: "12px / 1.4 / 500",
        example: "System Metadata Caption",
        exampleClass: "text-xs font-medium uppercase tracking-widest opacity-60"
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
                    <tbody className="divide-y divide-primary/20 dark:divide-white/10">
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
