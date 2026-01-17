import { cva } from "class-variance-authority";
import { Expertise } from "../teamData";

const expertiseSectionStyles = cva([
    "mb-24",
])

const expertiseTitleStyles = cva([
    "text-3xl font-bold mb-10 flex items-center gap-3",
])

const expertiseTitleBarStyles = cva([
    "w-8 h-1 bg-primary rounded-full",
])

const expertiseGridStyles = cva([
    "grid grid-cols-1 gap-6",
    "md:grid-cols-3",
])

const expertiseCardStyles = cva([
    "p-8 rounded-xl bg-bg-muted dark:bg-surface-dark",
    "border border-border-default dark:border-gray-700",
    "hover:shadow-xl hover:shadow-primary/5 transition-all",
])

const expertiseIconStyles = cva([
    "text-primary mb-6",
])

const expertiseCardTitleStyles = cva([
    "text-xl font-bold mb-3",
])

const expertiseCardDescriptionStyles = cva([
    "text-gray-500 dark:text-gray-400 leading-relaxed",
])

function getIcon(iconName: string) {
    const icons: Record<string, React.ReactNode> = {
        strategy: (
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
            </svg>
        ),
        transform: (
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/>
                <path d="M21 3v5h-5"/>
            </svg>
        ),
        groups: (
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
        ),
        cloud: (
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
            </svg>
        ),
        memory: (
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 19v-3"/>
                <path d="M10 19v-3"/>
                <path d="M14 19v-3"/>
                <path d="M18 19v-3"/>
                <path d="M8 11V9"/>
                <path d="M16 11V9"/>
                <path d="M12 11V9"/>
                <path d="M2 15h20"/>
                <path d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z"/>
            </svg>
        ),
        security: (
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
        ),
        palette: (
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="13.5" cy="6.5" r=".5"/>
                <circle cx="17.5" cy="10.5" r=".5"/>
                <circle cx="8.5" cy="7.5" r=".5"/>
                <circle cx="6.5" cy="12.5" r=".5"/>
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z"/>
            </svg>
        ),
        touch_app: (
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 14V4a2 2 0 1 1 4 0v6"/>
                <path d="M12 10V8a2 2 0 1 1 4 0v6"/>
                <path d="M16 14V10a2 2 0 1 1 4 0v8a6 6 0 0 1-6 6h-2a6 6 0 0 1-6-6 3 3 0 0 1 3-3h1"/>
            </svg>
        ),
        draw: (
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                <path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z"/>
            </svg>
        ),
    };
    return icons[iconName] || icons.strategy;
}

interface ExpertiseSectionProps {
    expertise: Expertise[];
}

export default function ExpertiseSection({ expertise }: ExpertiseSectionProps) {
    return (
        <section className={expertiseSectionStyles()}>
            <h2 className={expertiseTitleStyles()}>
                <span className={expertiseTitleBarStyles()} />
                Role &amp; Expertise
            </h2>
            <div className={expertiseGridStyles()}>
                {expertise.map((item, index) => (
                    <div key={index} className={expertiseCardStyles()}>
                        <div className={expertiseIconStyles()}>
                            {getIcon(item.icon)}
                        </div>
                        <h3 className={expertiseCardTitleStyles()}>{item.title}</h3>
                        <p className={expertiseCardDescriptionStyles()}>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
