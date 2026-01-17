import { cva } from "class-variance-authority";
import Image from "next/image";
import Link from "next/link";
import { TeamMember } from "../teamData";

const profileHeroStyles = cva([
    "grid grid-cols-1 gap-12 items-start mb-24",
    "lg:grid-cols-12 lg:gap-20",
])

const portraitContainerStyles = cva([
    "lg:col-span-5",
])

const portraitWrapperStyles = cva([
    "relative group",
])

const portraitBackgroundStyles = cva([
    "absolute -inset-4 bg-primary/5 rounded-xl transition-all",
    "group-hover:-inset-2",
])

const portraitImageContainerStyles = cva([
    "aspect-[3/4] w-full bg-bg-muted dark:bg-surface-dark rounded-lg overflow-hidden relative shadow-2xl",
])

const socialLinksStyles = cva([
    "flex gap-4 mt-6 justify-center",
    "lg:justify-start",
])

const socialLinkStyles = cva([
    "p-2 rounded-full border border-border-default dark:border-gray-700",
    "hover:border-primary hover:text-primary transition-all",
])

const bioContainerStyles = cva([
    "lg:col-span-7 space-y-8",
])

const nameStyles = cva([
    "text-5xl font-extrabold tracking-tight mb-4",
    "lg:text-6xl",
])

const roleStyles = cva([
    "text-xl text-primary font-medium",
])

const bioTextContainerStyles = cva([
    "prose dark:prose-invert max-w-none text-lg text-gray-600 dark:text-gray-400 leading-relaxed space-y-6",
])

const ctaButtonStyles = cva([
    "bg-primary/10 text-primary px-8 py-4 rounded-xl font-bold",
    "hover:bg-primary hover:text-white transition-all",
])

function LinkedInIcon() {
    return (
        <svg className="size-5 fill-current" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
    )
}

function TwitterIcon() {
    return (
        <svg className="size-5 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
    )
}

interface ProfileHeroSectionProps {
    member: TeamMember;
}

export default function ProfileHeroSection({ member }: ProfileHeroSectionProps) {
    return (
        <div className={profileHeroStyles()}>
            {/* Portrait */}
            <div className={portraitContainerStyles()}>
                <div className={portraitWrapperStyles()}>
                    <div className={portraitBackgroundStyles()} />
                    <div className={portraitImageContainerStyles()}>
                        <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                    {/* Social Links */}
                    <div className={socialLinksStyles()}>
                        {member.social.linkedin && (
                            <Link href={member.social.linkedin} className={socialLinkStyles()}>
                                <LinkedInIcon />
                            </Link>
                        )}
                        {member.social.twitter && (
                            <Link href={member.social.twitter} className={socialLinkStyles()}>
                                <TwitterIcon />
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            {/* Bio */}
            <div className={bioContainerStyles()}>
                <div>
                    <h1 className={nameStyles()}>{member.name}</h1>
                    <p className={roleStyles()}>{member.role}</p>
                </div>
                <div className={bioTextContainerStyles()}>
                    {member.bio.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
                <div className="pt-6">
                    <button className={ctaButtonStyles()}>
                        Schedule a Vision Session
                    </button>
                </div>
            </div>
        </div>
    )
}
