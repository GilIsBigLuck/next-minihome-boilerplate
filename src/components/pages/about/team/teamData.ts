export interface Expertise {
    icon: string;
    title: string;
    description: string;
}

export interface Project {
    title: string;
    year: string;
    location: string;
    image: string;
}

export interface TeamMember {
    slug: string;
    name: string;
    role: string;
    bio: string[];
    image: string;
    expertise: Expertise[];
    projects: Project[];
    social: {
        linkedin?: string;
        twitter?: string;
    };
}

export const teamMembers: TeamMember[] = [
    {
        slug: "marcus-thorne",
        name: "Marcus Thorne",
        role: "Chief Executive Officer",
        bio: [
            "Marcus has led digital transformations for over 50 global brands, focusing on structural efficiency and organizational clarity.",
            "With a background in management consulting and technology strategy, Marcus brings a unique perspective to solving complex business challenges through innovative solutions.",
            "Prior to founding Clear Sections, Marcus served as VP of Strategy at TechForward and led the digital transformation practice at McKinsey & Company."
        ],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAryizkOMGbfc-A75-V03vI6XQN2g_Iiio_QzGXivAH6g5tXnS3wjRLkwJJaMMuFz79_V1CjlKYV_ivveLwhgfke8QbDfaHtSO2QvhWX-hnPAFZrs2A4XK3kPenRWpaGgrTuZSN7oOXrE0XqB4GUj5kABDncqLcsg5uTSNYRam3irctohugTBX4UVZXkOo9b-LIpge2Cqs0X4XfSBlMzdpQGcfYfPA6sHnLavEvYy1ZUxMa8ICif5PQaevpNOYJW44zgWkCBIoby3Ik",
        expertise: [
            {
                icon: "strategy",
                title: "Strategic Leadership",
                description: "Developing long-term vision and organizational frameworks for sustainable growth."
            },
            {
                icon: "transform",
                title: "Digital Transformation",
                description: "Leading enterprise-wide digital initiatives that drive operational excellence."
            },
            {
                icon: "groups",
                title: "Team Building",
                description: "Cultivating high-performance teams and fostering innovative company cultures."
            }
        ],
        projects: [
            {
                title: "Global Rebrand",
                year: "2023",
                location: "New York",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLIodfpUCDBGVpmThUb9uC6zM-ZLNhto8UBM77Y7_vPvTyGk1YZJe_OV6t-POHC_pcGYlIrxXYhoXuIQKIYnvIYi2t9zygTAqDGPMm_XdUZrAzOyC9LNpuYFSqCB-DDe4ZdyQor9rn-2fH4jLMIAzP2_zoaN2CT6x54aMCjs8wLAdybyb4pesPhjTVqaLs8exu36_FbgIGz1ERJizZvokPs82TaLp97TCWAHFcWwvLPXj5zipjNsFOc_T8Oiiz_zj08mFo7d0I64Et"
            },
            {
                title: "Market Expansion",
                year: "2022",
                location: "London",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAY_Ee0NYSibOKBRIETWDrBn6zXlnWCyAdXQfqIrm4w0wi8q1C-02XnVOA2Uw0BL0C4n82bWUO_SwVni4F_HNRzTijiIAIg89344AKEuBNULRM5zFXimD8BSf6_tHJ8G9QxBtHfL5F28A3N4Dx86ZibcefwTFQKfeX7hXfJ3HB0yw52SmQDTaQSymRwCEu52iExqFuaFYqwDiQ-WkKxfUay8_DSOr5ebi1cGxW7Q5p5oOcHuRW_EHSKQJK7X6q8xEV0bUjYtVZRjbR9"
            },
            {
                title: "Innovation Lab",
                year: "2021",
                location: "Berlin",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGr-DI4EQFFj-Mco2BhE8_eAHJiXRD_mpPV3mzzpEJVzxp9HHqSpKFlbwGHgD9LgdiV6CXMd7Xp80oYRegRTZmm4C4NOW1_UgolziJvMKY-GP3cmfnRTZ0exCyPCaqkHdw8aWr6aS-itUvL5Im2sOSg-0GsErUCdia2IhEdo2JcMWDDKpgyORSdcJWpCFBVOPjr--KKiXq3Sv8vs9BtOT5IqaH0TPdeVqqNJi1xeOEimlAvrR3s-uiIPqg4tdZCveU4k3jW6a7JD8z"
            },
            {
                title: "Startup Accelerator",
                year: "2020",
                location: "San Francisco",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkGrRFnccSIGY7dvpCywwTujvLo8NKJWOvFpyT7_aUoAEM7aPoMMjqo8hPQv11bmZ83KiNgd9ggW5MuWXMsOMetlG-CuCFL38HRW-AiPtO6ICRx0HJR1l-tHdYjaAZAFEIVrqOCOcQWiwh2QxQYK0vhg-AExafxHRQSK1J5anxPgANL2hGJy4UYrLzLwaY6m-6XjStNeEfaTm25XT6GaTlxjoa7Gc06k1p97IIlTH3bx-TxvK0viU6_WZZDn1hdYPjRfNpqoAKk0JJ"
            }
        ],
        social: {
            linkedin: "#",
            twitter: "#"
        }
    },
    {
        slug: "elena-rodriguez",
        name: "Elena Rodriguez",
        role: "Chief Technology Officer",
        bio: [
            "A pioneer in scalable architecture, Elena ensures our technological foundations are as clear as our vision.",
            "With expertise in cloud infrastructure, distributed systems, and AI/ML integration, Elena has architected solutions that serve millions of users globally.",
            "She previously led engineering teams at Google Cloud and was a founding engineer at two successful startups. Elena holds a Ph.D. in Computer Science from Stanford."
        ],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOQ5dlFQqCWeCdCuEedupvb76q7GTOCnpFda8K1tXmZ-z_qCt4yyfL6Ge7pmSAb8tKZHb80BKGDeSAfgLp4ckxlDZvSdkQcm0nySk5s6Dsvfxcw-Q-m3LlotgeNOpbGY2tQeecGWrVDj0Cb34vsmiGFjnlw9OkF9CKnQOvTI5tlLRex-MG__nh9EtMQob-XzZBHyBJkX8jeA84FnOTRvAO53iC1G6Q5SGYjCSBlYUPT04WbJ_OmcyP7jZ2CQljVm6Y7K1zqMr7yUEN",
        expertise: [
            {
                icon: "cloud",
                title: "Cloud Architecture",
                description: "Designing resilient, scalable cloud infrastructure for enterprise applications."
            },
            {
                icon: "memory",
                title: "AI/ML Systems",
                description: "Building intelligent systems that leverage machine learning for business insights."
            },
            {
                icon: "security",
                title: "Security Engineering",
                description: "Implementing robust security frameworks and compliance standards."
            }
        ],
        projects: [
            {
                title: "Platform Migration",
                year: "2023",
                location: "Global",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLIodfpUCDBGVpmThUb9uC6zM-ZLNhto8UBM77Y7_vPvTyGk1YZJe_OV6t-POHC_pcGYlIrxXYhoXuIQKIYnvIYi2t9zygTAqDGPMm_XdUZrAzOyC9LNpuYFSqCB-DDe4ZdyQor9rn-2fH4jLMIAzP2_zoaN2CT6x54aMCjs8wLAdybyb4pesPhjTVqaLs8exu36_FbgIGz1ERJizZvokPs82TaLp97TCWAHFcWwvLPXj5zipjNsFOc_T8Oiiz_zj08mFo7d0I64Et"
            },
            {
                title: "AI Analytics",
                year: "2022",
                location: "Seattle",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAY_Ee0NYSibOKBRIETWDrBn6zXlnWCyAdXQfqIrm4w0wi8q1C-02XnVOA2Uw0BL0C4n82bWUO_SwVni4F_HNRzTijiIAIg89344AKEuBNULRM5zFXimD8BSf6_tHJ8G9QxBtHfL5F28A3N4Dx86ZibcefwTFQKfeX7hXfJ3HB0yw52SmQDTaQSymRwCEu52iExqFuaFYqwDiQ-WkKxfUay8_DSOr5ebi1cGxW7Q5p5oOcHuRW_EHSKQJK7X6q8xEV0bUjYtVZRjbR9"
            },
            {
                title: "Security Overhaul",
                year: "2021",
                location: "Austin",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGr-DI4EQFFj-Mco2BhE8_eAHJiXRD_mpPV3mzzpEJVzxp9HHqSpKFlbwGHgD9LgdiV6CXMd7Xp80oYRegRTZmm4C4NOW1_UgolziJvMKY-GP3cmfnRTZ0exCyPCaqkHdw8aWr6aS-itUvL5Im2sOSg-0GsErUCdia2IhEdo2JcMWDDKpgyORSdcJWpCFBVOPjr--KKiXq3Sv8vs9BtOT5IqaH0TPdeVqqNJi1xeOEimlAvrR3s-uiIPqg4tdZCveU4k3jW6a7JD8z"
            },
            {
                title: "Data Pipeline",
                year: "2020",
                location: "Chicago",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkGrRFnccSIGY7dvpCywwTujvLo8NKJWOvFpyT7_aUoAEM7aPoMMjqo8hPQv11bmZ83KiNgd9ggW5MuWXMsOMetlG-CuCFL38HRW-AiPtO6ICRx0HJR1l-tHdYjaAZAFEIVrqOCOcQWiwh2QxQYK0vhg-AExafxHRQSK1J5anxPgANL2hGJy4UYrLzLwaY6m-6XjStNeEfaTm25XT6GaTlxjoa7Gc06k1p97IIlTH3bx-TxvK0viU6_WZZDn1hdYPjRfNpqoAKk0JJ"
            }
        ],
        social: {
            linkedin: "#",
            twitter: "#"
        }
    },
    {
        slug: "jameson-wu",
        name: "Jameson Wu",
        role: "Head of Design",
        bio: [
            "Jameson translates complex data into intuitive experiences that delight users and drive results.",
            "His design philosophy centers on radical simplicity and human-centered approaches that bridge the gap between technology and everyday users.",
            "Before joining Clear Sections, Jameson was Design Director at Airbnb and led product design at Stripe. He studied at the Rhode Island School of Design."
        ],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtRsVDI_DkzlwfquUdoSqlbQ2crhqKQXNwKv3xfgz-LfitlCpVdR54oZSp6xRH7ATwoaVRDtggynjOhieSniBOfbv1xvhj0EYGZdhXFfr6NlPL1tryKwki-ma6-mTQ_AEuO1EvizOMtdi8C5hpb0P57UKydg6jeAK2jn3jC4GnWHF-_m83Qgo7u0JySBUNK2tCFcHaSB4M_gukJN6phQR8Uqv8zvSR_Ph5zp9EkbJ0MyvP4qQjEKQ77wcdVL3HclUWG-vmPRVGuCam",
        expertise: [
            {
                icon: "palette",
                title: "Visual Design",
                description: "Creating cohesive brand systems and stunning visual experiences."
            },
            {
                icon: "touch_app",
                title: "UX Strategy",
                description: "Designing user journeys that maximize engagement and conversion."
            },
            {
                icon: "draw",
                title: "Design Systems",
                description: "Building scalable component libraries and design tokens for consistency."
            }
        ],
        projects: [
            {
                title: "Brand Refresh",
                year: "2023",
                location: "Tokyo",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLIodfpUCDBGVpmThUb9uC6zM-ZLNhto8UBM77Y7_vPvTyGk1YZJe_OV6t-POHC_pcGYlIrxXYhoXuIQKIYnvIYi2t9zygTAqDGPMm_XdUZrAzOyC9LNpuYFSqCB-DDe4ZdyQor9rn-2fH4jLMIAzP2_zoaN2CT6x54aMCjs8wLAdybyb4pesPhjTVqaLs8exu36_FbgIGz1ERJizZvokPs82TaLp97TCWAHFcWwvLPXj5zipjNsFOc_T8Oiiz_zj08mFo7d0I64Et"
            },
            {
                title: "Mobile App",
                year: "2022",
                location: "Seoul",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAY_Ee0NYSibOKBRIETWDrBn6zXlnWCyAdXQfqIrm4w0wi8q1C-02XnVOA2Uw0BL0C4n82bWUO_SwVni4F_HNRzTijiIAIg89344AKEuBNULRM5zFXimD8BSf6_tHJ8G9QxBtHfL5F28A3N4Dx86ZibcefwTFQKfeX7hXfJ3HB0yw52SmQDTaQSymRwCEu52iExqFuaFYqwDiQ-WkKxfUay8_DSOr5ebi1cGxW7Q5p5oOcHuRW_EHSKQJK7X6q8xEV0bUjYtVZRjbR9"
            },
            {
                title: "Design System",
                year: "2021",
                location: "Singapore",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGr-DI4EQFFj-Mco2BhE8_eAHJiXRD_mpPV3mzzpEJVzxp9HHqSpKFlbwGHgD9LgdiV6CXMd7Xp80oYRegRTZmm4C4NOW1_UgolziJvMKY-GP3cmfnRTZ0exCyPCaqkHdw8aWr6aS-itUvL5Im2sOSg-0GsErUCdia2IhEdo2JcMWDDKpgyORSdcJWpCFBVOPjr--KKiXq3Sv8vs9BtOT5IqaH0TPdeVqqNJi1xeOEimlAvrR3s-uiIPqg4tdZCveU4k3jW6a7JD8z"
            },
            {
                title: "E-commerce UX",
                year: "2020",
                location: "Sydney",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkGrRFnccSIGY7dvpCywwTujvLo8NKJWOvFpyT7_aUoAEM7aPoMMjqo8hPQv11bmZ83KiNgd9ggW5MuWXMsOMetlG-CuCFL38HRW-AiPtO6ICRx0HJR1l-tHdYjaAZAFEIVrqOCOcQWiwh2QxQYK0vhg-AExafxHRQSK1J5anxPgANL2hGJy4UYrLzLwaY6m-6XjStNeEfaTm25XT6GaTlxjoa7Gc06k1p97IIlTH3bx-TxvK0viU6_WZZDn1hdYPjRfNpqoAKk0JJ"
            }
        ],
        social: {
            linkedin: "#",
            twitter: "#"
        }
    }
];

export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
    return teamMembers.find(member => member.slug === slug);
}

export function getAllTeamSlugs(): string[] {
    return teamMembers.map(member => member.slug);
}
