import { notFound } from "next/navigation";
import { getTeamMemberBySlug, getAllTeamSlugs } from "@/components/pages/about/team/teamData";
import BackNavigation from "@/components/pages/about/team/section/BackNavigation";
import ProfileHeroSection from "@/components/pages/about/team/section/ProfileHeroSection";
import ExpertiseSection from "@/components/pages/about/team/section/ExpertiseSection";
import ProjectsSection from "@/components/pages/about/team/section/ProjectsSection";

interface TeamMemberPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const slugs = getAllTeamSlugs();
    return slugs.map((slug) => ({ slug }));
}

export default async function TeamMemberPage({ params }: TeamMemberPageProps) {
    const { slug } = await params;
    const member = getTeamMemberBySlug(slug);

    if (!member) {
        notFound();
    }

    return (
        <div className="max-w-layout-md mx-auto px-6 md:px-20 lg:px-40 py-12">
            <BackNavigation />
            <ProfileHeroSection member={member} />
            <ExpertiseSection expertise={member.expertise} />
            <ProjectsSection projects={member.projects} />
        </div>
    );
}
