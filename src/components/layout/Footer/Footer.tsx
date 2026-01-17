import { cva } from "class-variance-authority";
import Link from "next/link";

const footerStyles = cva([
    "bg-white dark:bg-[#0a1413] border-t border-primary/10 py-20",
])

const footerInnerStyles = cva([
    "max-w-layout-md mx-auto px-6",
])

const footerMainGridStyles = cva([
    "flex flex-col md:flex-row justify-between gap-12",
])

const footerBrandBlockStyles = cva([
    "max-w-sm",
])

const footerBrandHeaderStyles = cva([
    "flex items-center gap-3 mb-6",
])

const footerBrandIconStyles = cva([
    "size-6 text-primary",
])

const footerBrandTitleStyles = cva([
    "text-xl font-bold tracking-tight",
])

const footerBrandDescriptionStyles = cva([
    "text-gray-500 dark:text-gray-400 font-light leading-relaxed",
])

const footerNavGridStyles = cva([
    "grid grid-cols-2 md:grid-cols-3 gap-8",
])

const footerNavColumnStyles = cva([
    "flex flex-col gap-4",
])

const footerNavTitleStyles = cva([
    "font-bold text-xs uppercase tracking-widest text-primary",
])

const footerNavLinkStyles = cva([
    "text-sm hover:text-primary transition-colors",
])

const footerBottomStyles = cva([
    "mt-20 pt-8 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-6",
])

const footerCopyrightStyles = cva([
    "text-xs text-gray-400",
])

const footerLegalLinksStyles = cva([
    "flex gap-8",
])

const footerLegalLinkStyles = cva([
    "text-xs text-gray-400 hover:text-primary transition-colors",
])

interface NavColumn {
    title: string;
    links: { label: string; href: string }[];
}

const navColumns: NavColumn[] = [
    {
        title: "Work",
        links: [
            { label: "Architecture", href: "#" },
            { label: "Residential", href: "#" },
            { label: "Commercial", href: "#" },
        ]
    },
    {
        title: "Company",
        links: [
            { label: "The Studio", href: "#" },
            { label: "Contact", href: "#" },
            { label: "Journal", href: "#" },
        ]
    },
    {
        title: "Connect",
        links: [
            { label: "Instagram", href: "#" },
            { label: "LinkedIn", href: "#" },
        ]
    },
]

const footerContent = {
    brandName: "Clear Sections",
    description: "A boutique design partner for architectural firms and real estate developers looking to stand out in a crowded urban landscape.",
    copyright: `© ${new Date().getFullYear()} Clear Sections. All rights reserved.`,
    legalLinks: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
    ]
}

function BrandIcon() {
    return (
        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fill="currentColor" fillRule="evenodd" />
            <path clipRule="evenodd" d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z" fill="currentColor" fillRule="evenodd" />
        </svg>
    )
}

export default function Footer() {
    return (
        <footer className={footerStyles()}>
            <div className={footerInnerStyles()}>

                <div className={footerMainGridStyles()}>

                    <div className={footerBrandBlockStyles()}>
                        <div className={footerBrandHeaderStyles()}>
                            <div className={footerBrandIconStyles()}>
                                <BrandIcon />
                            </div>
                            <h2 className={footerBrandTitleStyles()}>
                                {footerContent.brandName}
                            </h2>
                        </div>
                        <p className={footerBrandDescriptionStyles()}>
                            {footerContent.description}
                        </p>
                    </div>

                    <div className={footerNavGridStyles()}>
                        {navColumns.map((column, index) => (
                            <div
                                key={index}
                                className={footerNavColumnStyles({
                                    className: index === 2 ? "col-span-2 md:col-span-1" : ""
                                })}
                            >
                                <p className={footerNavTitleStyles()}>
                                    {column.title}
                                </p>
                                {column.links.map((link, linkIndex) => (
                                    <Link
                                        key={linkIndex}
                                        href={link.href}
                                        className={footerNavLinkStyles()}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>

                </div>

                <div className={footerBottomStyles()}>
                    <p className={footerCopyrightStyles()}>
                        {footerContent.copyright}
                    </p>
                    <div className={footerLegalLinksStyles()}>
                        {footerContent.legalLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className={footerLegalLinkStyles()}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    )
}
