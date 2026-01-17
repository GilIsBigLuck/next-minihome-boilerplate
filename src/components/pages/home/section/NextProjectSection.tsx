import { cva } from "class-variance-authority";
import Link from "next/link";

const nextProjectSectionStyles = cva([
    "w-full mt-24",
])

const nextProjectLinkStyles = cva([
    "group relative block w-full h-[60vh] overflow-hidden bg-bg-inverse",
])

const nextProjectBgImageStyles = cva([
    "absolute inset-0 bg-cover bg-center opacity-40",
    "group-hover:opacity-60 transition-opacity duration-700",
])

const nextProjectOverlayStyles = cva([
    "absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent",
])

const nextProjectContentStyles = cva([
    "relative h-full max-w-layout-md mx-auto px-6 flex flex-col justify-center items-start",
])

const nextProjectLabelStyles = cva([
    "text-primary font-bold tracking-[0.2em] uppercase text-sm mb-6",
    "flex items-center gap-2",
    "group-hover:translate-x-2 transition-transform duration-500",
])

const nextProjectTitleStyles = cva([
    "text-white text-5xl font-black tracking-tighter max-w-2xl",
    "md:text-8xl",
    "group-hover:scale-[1.02] transition-transform duration-700 origin-left",
])

interface NextProjectContentProps {
    label: string;
    title: string;
    href: string;
    backgroundImage: string;
}

const nextProjectContent: NextProjectContentProps = {
    label: "Next Project",
    title: "Ethos Workspace Systems",
    href: "#",
    backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0g-IRZS60uc7XkSWl5beuQWc_K89FQeFjPlIFHM7ttmah6SBcygmklgccpuiltCKa8CiPb7sVj3o_A1Y7rls5q1OaZ7MMOLy2sugIzAKMiIlx4SmN9wxJujCRwiXPQFi7CpYqtI7_VEBP6E5RlgP0yRGdbjiZxnLepg01SWyOzETPcjqjdmGEaqod5OvAJn5HoWfoE65Up7snKEbMjljZRwU0NtFH_KGmmg7mHnyDq5m6DEtiYgZPIwCTg5hjPT9BoPJhRpnhybwK"
}

export default function NextProjectSection() {
    return (
        <section className={nextProjectSectionStyles()}>
            <Link href={nextProjectContent.href} className={nextProjectLinkStyles()}>

                <div
                    className={nextProjectBgImageStyles()}
                    style={{ backgroundImage: `url("${nextProjectContent.backgroundImage}")` }}
                />

                <div className={nextProjectOverlayStyles()} />

                <div className={nextProjectContentStyles()}>
                    <span className={nextProjectLabelStyles()}>
                        {nextProjectContent.label}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </span>
                    <h2 className={nextProjectTitleStyles()}>
                        {nextProjectContent.title}
                    </h2>
                </div>

            </Link>
        </section>
    )
}
