import { cva } from "class-variance-authority";
import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

const teamSectionStyles = cva([
    "px-6 py-24 bg-white",
    "lg:px-40",
])

const teamInnerStyles = cva([
    "max-w-layout-md mx-auto",
])

const teamHeaderStyles = cva([
    "flex flex-col gap-6 mb-16",
    "md:flex-row md:justify-between md:items-end",
])

const teamHeaderContentStyles = cva([
    "",
])

const teamTitleStyles = cva([
    "text-4xl font-black tracking-tight mb-4",
])

const teamSubtitleStyles = cva([
    "text-gray-600",
])

const teamLinkStyles = cva([
    "text-primary font-bold flex items-center gap-2 hover:underline",
])

const teamGridStyles = cva([
    "grid grid-cols-1 gap-10",
    "md:grid-cols-3",
])

const teamMemberLinkStyles = cva([
    "group block",
])

const teamMemberImageContainerStyles = cva([
    "relative overflow-hidden rounded-xl mb-6 aspect-[4/5] bg-gray-100",
])

const teamMemberImageStyles = cva([
    "w-full h-full object-cover",
    "group-hover:scale-110 transition-transform duration-500",
])

const teamMemberNameStyles = cva([
    "text-xl font-bold",
])

const teamMemberRoleStyles = cva([
    "text-primary text-sm font-bold mb-4 uppercase tracking-wider",
])

const teamMemberBioStyles = cva([
    "text-gray-600 text-sm leading-relaxed",
])

interface TeamMemberProps {
    slug: string;
    name: string;
    role: string;
    bio: string;
    image: string;
}

const teamMembersData = [
    {
        slug: "marcus-thorne",
        name: "Marcus Thorne",
        roleKey: "ceo",
        bioKey: "marcusBio",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAryizkOMGbfc-A75-V03vI6XQN2g_Iiio_QzGXivAH6g5tXnS3wjRLkwJJaMMuFz79_V1CjlKYV_ivveLwhgfke8QbDfaHtSO2QvhWX-hnPAFZrs2A4XK3kPenRWpaGgrTuZSN7oOXrE0XqB4GUj5kABDncqLcsg5uTSNYRam3irctohugTBX4UVZXkOo9b-LIpge2Cqs0X4XfSBlMzdpQGcfYfPA6sHnLavEvYy1ZUxMa8ICif5PQaevpNOYJW44zgWkCBIoby3Ik"
    },
    {
        slug: "elena-rodriguez",
        name: "Elena Rodriguez",
        roleKey: "cto",
        bioKey: "elenaBio",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOQ5dlFQqCWeCdCuEedupvb76q7GTOCnpFda8K1tXmZ-z_qCt4yyfL6Ge7pmSAb8tKZHb80BKGDeSAfgLp4ckxlDZvSdkQcm0nySk5s6Dsvfxcw-Q-m3LlotgeNOpbGY2tQeecGWrVDj0Cb34vsmiGFjnlw9OkF9CKnQOvTI5tlLRex-MG__nh9EtMQob-XzZBHyBJkX8jeA84FnOTRvAO53iC1G6Q5SGYjCSBlYUPT04WbJ_OmcyP7jZ2CQljVm6Y7K1zqMr7yUEN"
    },
    {
        slug: "jameson-wu",
        name: "Jameson Wu",
        roleKey: "headOfDesign",
        bioKey: "jamesonBio",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtRsVDI_DkzlwfquUdoSqlbQ2crhqKQXNwKv3xfgz-LfitlCpVdR54oZSp6xRH7ATwoaVRDtggynjOhieSniBOfbv1xvhj0EYGZdhXFfr6NlPL1tryKwki-ma6-mTQ_AEuO1EvizOMtdi8C5hpb0P57UKydg6jeAK2jn3jC4GnWHF-_m83Qgo7u0JySBUNK2tCFcHaSB4M_gukJN6phQR8Uqv8zvSR_Ph5zp9EkbJ0MyvP4qQjEKQ77wcdVL3HclUWG-vmPRVGuCam"
    }
]

function TeamMember({ slug, name, role, bio, image }: TeamMemberProps) {
    return (
        <Link href={`/about/team/${slug}`} className={teamMemberLinkStyles()}>
            <div className={teamMemberImageContainerStyles()}>
                <Image
                    src={image}
                    alt={name}
                    fill
                    className={teamMemberImageStyles()}
                />
            </div>
            <h3 className={teamMemberNameStyles()}>{name}</h3>
            <p className={teamMemberRoleStyles()}>{role}</p>
            <p className={teamMemberBioStyles()}>{bio}</p>
        </Link>
    )
}

export default async function TeamSection() {
    const t = await getTranslations("about.team");
    const tRoles = await getTranslations("about.team.roles");
    
    const teamMembers: TeamMemberProps[] = teamMembersData.map(member => ({
        slug: member.slug,
        name: member.name,
        role: tRoles(member.roleKey),
        bio: t(member.bioKey),
        image: member.image
    }));

    return (
        <section id="meet-the-visionaries" className={teamSectionStyles()}>
            <div className={teamInnerStyles()}>
                <div className={teamHeaderStyles()}>
                    <div className={teamHeaderContentStyles()}>
                        <h2 className={teamTitleStyles()}>{t("title")}</h2>
                        <p className={teamSubtitleStyles()}>{t("subtitle")}</p>
                    </div>
                    <Link href="#" className={teamLinkStyles()}>
                        {t("viewAllCareers")}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </Link>
                </div>
                <div className={teamGridStyles()}>
                    {teamMembers.map((member, index) => (
                        <TeamMember key={index} {...member} />
                    ))}
                </div>
            </div>
        </section>
    )
}
