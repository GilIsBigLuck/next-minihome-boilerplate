import { cva } from "class-variance-authority";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Project } from "../teamData";

const projectsSectionStyles = cva([
    "mb-24",
])

const projectsTitleStyles = cva([
    "text-3xl font-bold mb-10 flex items-center gap-3",
])

const projectsTitleBarStyles = cva([
    "w-8 h-1 bg-primary rounded-full",
])

const projectsGridStyles = cva([
    "grid grid-cols-1 gap-6",
    "md:grid-cols-2",
    "lg:grid-cols-4",
])

const projectCardStyles = cva([
    "group cursor-pointer",
])

const projectImageContainerStyles = cva([
    "aspect-square bg-bg-muted rounded-xl overflow-hidden mb-4 relative",
])

const projectImageStyles = cva([
    "transition-transform duration-500",
    "group-hover:scale-110",
])

const projectOverlayStyles = cva([
    "absolute inset-0 bg-primary/20 opacity-0",
    "group-hover:opacity-100 transition-opacity",
    "flex items-center justify-center",
])

const projectOverlayIconStyles = cva([
    "bg-white text-primary p-3 rounded-full",
])

const projectTitleStyles = cva([
    "font-bold text-lg",
])

const projectMetaStyles = cva([
    "text-sm text-gray-500 uppercase tracking-widest font-semibold mt-1",
])

function EyeIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
            <circle cx="12" cy="12" r="3"/>
        </svg>
    )
}

interface ProjectsSectionProps {
    projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
    const t = useTranslations("team.projects");
    
    return (
        <section className={projectsSectionStyles()}>
            <h2 className={projectsTitleStyles()}>
                <span className={projectsTitleBarStyles()} />
                {t("title")}
            </h2>
            <div className={projectsGridStyles()}>
                {projects.map((project, index) => (
                    <div key={index} className={projectCardStyles()}>
                        <div className={projectImageContainerStyles()}>
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className={`object-cover ${projectImageStyles()}`}
                            />
                            <div className={projectOverlayStyles()}>
                                <span className={projectOverlayIconStyles()}>
                                    <EyeIcon />
                                </span>
                            </div>
                        </div>
                        <h4 className={projectTitleStyles()}>{project.title}</h4>
                        <p className={projectMetaStyles()}>
                            {project.year} • {project.location}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}
