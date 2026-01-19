import { cva } from "class-variance-authority";
import Image from "next/image";
import { getBlurDataURL } from "@/lib/plaiceholder";
import { getTranslations } from "next-intl/server";

const storySectionStyles = cva([
    "px-6 py-20 bg-white",
    "lg:px-40",
])

const storyInnerStyles = cva([
    "max-w-layout-md mx-auto",
])

const storyBlockStyles = cva([
    "flex flex-col items-center gap-16 mb-32 last:mb-0",
    "md:flex-row",
])

const storyBlockReverseStyles = cva([
    "flex flex-col-reverse items-center gap-16",
    "md:flex-row",
])

const storyContentStyles = cva([
    "w-full",
    "md:w-1/2",
])

const storyTitleStyles = cva([
    "text-3xl font-black mb-6 tracking-tight",
])

const storyTextStyles = cva([
    "text-gray-600 text-lg leading-relaxed mb-6 last:mb-0",
])

const storyImageWrapperStyles = cva([
    "w-full",
    "md:w-1/2",
])

const storyImageContainerStyles = cva([
    "relative group",
])

const storyImageBackgroundStyles = cva([
    "absolute -inset-4 bg-primary/10 rounded-xl",
    "group-hover:-inset-2 transition-all duration-300",
])

const storyImageStyles = cva([
    "relative rounded-lg shadow-2xl w-full aspect-video object-cover",
])

const teamAvatarsContainerStyles = cva([
    "flex gap-4 items-center",
])

const teamAvatarsStyles = cva([
    "flex -space-x-4 overflow-hidden",
])

const teamAvatarStyles = cva([
    "inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover",
])

const teamCountStyles = cva([
    "text-sm font-bold text-primary",
])

interface StoryBlockProps {
    title: string;
    paragraphs: string[];
    image: string;
    imageAlt: string;
    reverse?: boolean;
    teamAvatars?: string[];
    teamCount?: string;
}

const storyBlocksData = [
    {
        image: "/dummy/fons-heijnsbroek-v3mm6Mjkm6o-unsplash.jpg",
        imageAltKey: "imageAlt1",
        reverse: false
    },
    {
        image: "/dummy/steve-johnson-SR6hGVgpZZc-unsplash.jpg",
        imageAltKey: "imageAlt2",
        reverse: true,
        teamAvatars: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuD6G3H_bAp5mrZlvd_rCGXiuEE8QSG2TpX9-GS3c_vzpXKzYKm7AodTVK3yZSaFKD4veJHN1qXMCii-KGOaNvoYR37vmx_qruJjgb3tuQMEeCSiq1IF7LNU0FaEaUmjMnyqxXOq07Wk_2OPodoByhR9pGCX9hmGQVrO0oVTRLbbh71cOH6SJ96_1cOoEa1MMWXtW19FKQt9QsqpxZGiDSjd3jNFE1K2LmS6iLBKMW0oA_EUr_JdS3iZComkjQknpXBaTDh1iY65KTRM",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBztGjK_B_9yoZu0M4KDVTOJ0J0hhblFcNMpBSuf5jYfwkv1-KRddSC4Sn4AOOH3Zh_MuMDtXvNZZhQnPziqbC2-19Os5II6BFnj4s6ocbR-NjBpTx5zaYGx_zTlc6MX60ytAhtKrx-8QcG6da5vmjZRRm_pFd6m6-zZfqgruEfqV58CVz-r44ksNkYY4PoVUHeUO_gbP57e7WxDWhph_W6zJUPS146JAEIra6cyK2gKzBnLGX703qaiJBLAylYm6Pbnq3wSpTnlK1d",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBl6CMumKBQYRjqy8JjUGb5L0YemjAy3SzYGP6CF3EuPVLSydPrgXiHcUWb-qmPvieRmn3KaD54qkDvzZlR3mxjtERJRU3iHsw-VJiaq6XMX3HD131yctSUEXqRVOrtD0UsWBmxIlCMPCr-npQBWgepHepnH1zopT_feZy1ZaLcgMIpr2JNL3B7ajVrQgU9HWAT4v68AEBidRLk3KzKvPG7TUeadXQTZ9kSA8S1jOYPaChz6YYht5pDMjP6vt-aiJEwnnmfuPl44v4b"
        ],
        teamCountKey: "teamCount"
    }
]

interface StoryBlockWithBlurProps extends StoryBlockProps {
    blurDataURL?: string;
}

function StoryBlock({ title, paragraphs, image, imageAlt, reverse, teamAvatars, teamCount, blurDataURL }: StoryBlockWithBlurProps) {
    const containerClass = reverse ? storyBlockReverseStyles() : storyBlockStyles();

    return (
        <div className={containerClass}>
            {!reverse && (
                <div className={storyContentStyles()}>
                    <h2 className={storyTitleStyles()}>{title}</h2>
                    {paragraphs.map((paragraph, index) => (
                        <p key={index} className={storyTextStyles()}>{paragraph}</p>
                    ))}
                    {teamAvatars && teamCount && (
                        <div className={teamAvatarsContainerStyles()}>
                            <div className={teamAvatarsStyles()}>
                                {teamAvatars.map((avatar, index) => (
                                    <Image
                                        key={index}
                                        src={avatar}
                                        alt="Team member"
                                        width={40}
                                        height={40}
                                        className={teamAvatarStyles()}
                                    />
                                ))}
                            </div>
                            <span className={teamCountStyles()}>{teamCount}</span>
                        </div>
                    )}
                </div>
            )}

            <div className={storyImageWrapperStyles()}>
                <div className={storyImageContainerStyles()}>
                    <div className={storyImageBackgroundStyles()} />
                    <Image
                        src={image}
                        alt={imageAlt}
                        width={600}
                        height={400}
                        className={storyImageStyles()}
                        placeholder={blurDataURL ? "blur" : "empty"}
                        blurDataURL={blurDataURL}
                    />
                </div>
            </div>

            {reverse && (
                <div className={storyContentStyles()}>
                    <h2 className={storyTitleStyles()}>{title}</h2>
                    {paragraphs.map((paragraph, index) => (
                        <p key={index} className={storyTextStyles()}>{paragraph}</p>
                    ))}
                    {teamAvatars && teamCount && (
                        <div className={teamAvatarsContainerStyles()}>
                            <div className={teamAvatarsStyles()}>
                                {teamAvatars.map((avatar, index) => (
                                    <Image
                                        key={index}
                                        src={avatar}
                                        alt="Team member"
                                        width={40}
                                        height={40}
                                        className={teamAvatarStyles()}
                                    />
                                ))}
                            </div>
                            <span className={teamCountStyles()}>{teamCount}</span>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default async function StorySection() {
    const t = await getTranslations("about.story");
    const tJourney = await getTranslations("about.story.journeyToClarity");
    const tEvolution = await getTranslations("about.story.continuousEvolution");
    
    const storyBlur1 = await getBlurDataURL(storyBlocksData[0].image);
    const storyBlur2 = await getBlurDataURL(storyBlocksData[1].image);

    const storyBlocks: StoryBlockProps[] = [
        {
            title: tJourney("title"),
            paragraphs: tJourney.raw("paragraphs") as string[],
            image: storyBlocksData[0].image,
            imageAlt: t(storyBlocksData[0].imageAltKey),
            reverse: storyBlocksData[0].reverse || false
        },
        {
            title: tEvolution("title"),
            paragraphs: tEvolution.raw("paragraphs") as string[],
            image: storyBlocksData[1].image,
            imageAlt: t(storyBlocksData[1].imageAltKey),
            reverse: storyBlocksData[1].reverse || false,
            teamAvatars: storyBlocksData[1].teamAvatars,
            teamCount: storyBlocksData[1].teamCountKey ? t(storyBlocksData[1].teamCountKey) : undefined
        }
    ];

    return (
        <section id="journey-to-clarity" className={storySectionStyles()}>
            <div className={storyInnerStyles()}>
                {storyBlocks.map((block, index) => (
                    <StoryBlock 
                        key={index} 
                        {...block} 
                        blurDataURL={index === 0 ? storyBlur1 : storyBlur2}
                    />
                ))}
            </div>
        </section>
    )
}
