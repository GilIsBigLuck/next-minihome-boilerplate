import { cva } from "class-variance-authority";
import { Button } from "@/components/ui";

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
    "bg-white dark:bg-card-dark p-8 rounded-xl",
    "border border-primary/20 dark:border-white/10 overflow-x-auto",
])

const tableStyles = cva([
    "w-full min-w-[600px]",
])

const tableHeaderCellStyles = cva([
    "pb-6 text-left opacity-60 text-xs font-bold uppercase tracking-widest",
])

const tableCellStyles = cva([
    "py-4",
])

const typeLabelStyles = cva([
    "font-bold text-sm",
])

function SmartButtonIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
            <rect width="18" height="10" x="3" y="7" rx="2"/>
            <line x1="7" x2="7.01" y1="12" y2="12"/>
            <line x1="17" x2="17.01" y1="12" y2="12"/>
        </svg>
    )
}

export default function ButtonsSection() {
    return (
        <section className={sectionStyles()} id="buttons">
            <div className={sectionHeaderStyles()}>
                <SmartButtonIcon />
                <h2 className={sectionTitleStyles()}>Buttons Matrix</h2>
            </div>
            <div className={tableContainerStyles()}>
                <table className={tableStyles()}>
                    <thead>
                        <tr>
                            <th className={tableHeaderCellStyles()}>Type</th>
                            <th className={tableHeaderCellStyles()}>Default</th>
                            <th className={tableHeaderCellStyles()}>Hover</th>
                            <th className={tableHeaderCellStyles()}>Disabled</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={tableCellStyles()}>
                                <span className={typeLabelStyles()}>Primary</span>
                            </td>
                            <td className={tableCellStyles()}>
                                <Button variant="primary">Action</Button>
                            </td>
                            <td className={tableCellStyles()}>
                                <Button variant="primary" className="ring-4 ring-primary/20">Action</Button>
                            </td>
                            <td className={tableCellStyles()}>
                                <Button variant="primary" disabled>Action</Button>
                            </td>
                        </tr>
                        <tr>
                            <td className={tableCellStyles()}>
                                <span className={typeLabelStyles()}>Secondary</span>
                            </td>
                            <td className={tableCellStyles()}>
                                <Button variant="secondary">Action</Button>
                            </td>
                            <td className={tableCellStyles()}>
                                <Button variant="secondary" className="ring-4 ring-primary/5">Action</Button>
                            </td>
                            <td className={tableCellStyles()}>
                                <Button variant="secondary" disabled>Action</Button>
                            </td>
                        </tr>
                        <tr>
                            <td className={tableCellStyles()}>
                                <span className={typeLabelStyles()}>Outline</span>
                            </td>
                            <td className={tableCellStyles()}>
                                <Button variant="outline">Action</Button>
                            </td>
                            <td className={tableCellStyles()}>
                                <Button variant="outline" className="border-primary text-primary">Action</Button>
                            </td>
                            <td className={tableCellStyles()}>
                                <Button variant="outline" disabled>Action</Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}
