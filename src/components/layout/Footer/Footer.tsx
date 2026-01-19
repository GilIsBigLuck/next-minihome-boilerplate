"use client";

import { cva } from "class-variance-authority";
import Link from "next/link";
import { useState } from "react";
import { Modal } from "@/components/ui";
import Image from "next/image";

const footerStyles = cva([
    "bg-white border-t border-primary/10 py-20",
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
    "text-gray-500 font-light leading-relaxed",
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
    "text-xs text-gray-400 hover:text-primary transition-colors cursor-pointer",
])

interface NavColumn {
    title: string;
    links: { label: string; href: string }[];
}

const navColumns: NavColumn[] = [
    {
        title: "About",
        links: [
            { label: "The Journey to Clarity", href: "/about#journey-to-clarity" },
            { label: "Core Principles", href: "/about#core-principles" },
            { label: "CoMeet the Visionaries", href: "/about#meet-the-visionaries" },
        ]
    },
    {
        title: "Style Guide",
        links: [
            { label: "Typography", href: "/style-guide#typography" },
            { label: "Colors", href: "/style-guide#colors" },
            { label: "Buttons", href: "/style-guide#buttons" },
        ]
    },
    {
        title: "Contact",
        links: [
            { label: "Contact Form", href: "/contact#contact-form" },
            { label: "Map", href: "/contact#map" },
        ]
    },
]

const logoImageStyles = cva([
    "w-8 h-8 object-contain"
  ])

const footerContent = {
    brandName: "Clear Sections",
    description: "A boutique design partner for architectural firms and real estate developers looking to stand out in a crowded urban landscape.",
    copyright: `© ${new Date().getFullYear()} Clear Sections. All rights reserved.`,
    legalLinks: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
    ]
}

const privacyPolicyContent = `
At Clear Sections, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.

Information We Collect:
- Personal information you provide (name, email, contact details)
- Usage data and analytics information
- Cookies and tracking technologies

How We Use Your Information:
- To provide and maintain our services
- To notify you about changes to our services
- To provide customer support
- To gather analysis or valuable information

Data Protection:
We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.

Your Rights:
You have the right to access, update, or delete your personal information at any time. Please contact us if you wish to exercise these rights.
`;

const termsOfServiceContent = `
Welcome to Clear Sections. By accessing or using our website, you agree to be bound by these Terms of Service.

Use License:
Permission is granted to temporarily access the materials on Clear Sections' website for personal, non-commercial transitory viewing only.

Restrictions:
- You may not modify or copy the materials
- You may not use the materials for any commercial purpose
- You may not remove any copyright or other proprietary notations

Disclaimer:
The materials on Clear Sections' website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim all other warranties.

Limitations:
In no event shall Clear Sections or its suppliers be liable for any damages arising out of the use or inability to use the materials on our website.

Revisions:
Clear Sections may revise these terms of service at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
`;

export default function Footer() {
    const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
    const [termsModalOpen, setTermsModalOpen] = useState(false);

    return (
        <>
            <footer className={footerStyles()}>
                <div className={footerInnerStyles()}>

                <div className={footerMainGridStyles()}>

                    <div className={footerBrandBlockStyles()}>
                        <div className={footerBrandHeaderStyles()}>
                            <div className={footerBrandIconStyles()}>
                                <Image 
                                    src="/favicon/favicon-32x32.png" 
                                    alt="Logo" 
                                    width={32} 
                                    height={32}
                                    className={logoImageStyles()}
                                    />
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
                        <button
                            onClick={() => setPrivacyModalOpen(true)}
                            className={footerLegalLinkStyles()}
                        >
                            Privacy Policy
                        </button>
                        <button
                            onClick={() => setTermsModalOpen(true)}
                            className={footerLegalLinkStyles()}
                        >
                            Terms of Service
                        </button>
                    </div>
                </div>

            </div>
        </footer>

        <Modal
            isOpen={privacyModalOpen}
            onClose={() => setPrivacyModalOpen(false)}
            title="Privacy Policy"
            confirmText="Close"
            onConfirm={() => setPrivacyModalOpen(false)}
            cancelText=""
            className="max-w-2xl"
        >
            <div className="space-y-4 text-sm leading-relaxed whitespace-pre-line">
                {privacyPolicyContent}
            </div>
        </Modal>

        <Modal
            isOpen={termsModalOpen}
            onClose={() => setTermsModalOpen(false)}
            title="Terms of Service"
            confirmText="Close"
            onConfirm={() => setTermsModalOpen(false)}
            cancelText=""
            className="max-w-2xl"
        >
            <div className="space-y-4 text-sm leading-relaxed whitespace-pre-line">
                {termsOfServiceContent}
            </div>
        </Modal>
        </>
    )
}
