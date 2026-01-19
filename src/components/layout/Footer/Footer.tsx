"use client";

import { cva } from "class-variance-authority";
import Link from "next/link";
import { useState } from "react";
import { useTranslations } from "next-intl";
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

const logoImageStyles = cva([
    "w-8 h-8 object-contain"
  ])

export default function Footer() {
    const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
    const [termsModalOpen, setTermsModalOpen] = useState(false);
    const t = useTranslations("footer");
    const tNav = useTranslations("footer.nav");
    const tUi = useTranslations("ui");
    
    const navColumns = [
        {
            title: tNav("about.title"),
            links: [
                { label: tNav("about.journeyToClarity"), href: "/about#journey-to-clarity" },
                { label: tNav("about.corePrinciples"), href: "/about#core-principles" },
                { label: tNav("about.meetTheVisionaries"), href: "/about#meet-the-visionaries" },
            ]
        },
        {
            title: tNav("styleGuide.title"),
            links: [
                { label: tNav("styleGuide.typography"), href: "/style-guide#typography" },
                { label: tNav("styleGuide.colors"), href: "/style-guide#colors" },
                { label: tNav("styleGuide.buttons"), href: "/style-guide#buttons" },
            ]
        },
        {
            title: tNav("contact.title"),
            links: [
                { label: tNav("contact.contactForm"), href: "/contact#contact-form" },
                { label: tNav("contact.map"), href: "/contact#map" },
            ]
        },
    ]

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
                                {t("brandName")}
                            </h2>
                        </div>
                        <p className={footerBrandDescriptionStyles()}>
                            {t("description")}
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
                        {t("copyright", { year: new Date().getFullYear().toString() })}
                    </p>
                    <div className={footerLegalLinksStyles()}>
                        <button
                            onClick={() => setPrivacyModalOpen(true)}
                            className={footerLegalLinkStyles()}
                        >
                            {t("privacyPolicy")}
                        </button>
                        <button
                            onClick={() => setTermsModalOpen(true)}
                            className={footerLegalLinkStyles()}
                        >
                            {t("termsOfService")}
                        </button>
                    </div>
                </div>

            </div>
        </footer>

        <Modal
            isOpen={privacyModalOpen}
            onClose={() => setPrivacyModalOpen(false)}
            title={t("privacyPolicy")}
            confirmText={tUi("close")}
            onConfirm={() => setPrivacyModalOpen(false)}
            cancelText=""
            className="max-w-2xl"
        >
            <div className="space-y-4 text-sm leading-relaxed whitespace-pre-line">
                {t("privacyPolicyContent")}
            </div>
        </Modal>

        <Modal
            isOpen={termsModalOpen}
            onClose={() => setTermsModalOpen(false)}
            title={t("termsOfService")}
            confirmText={tUi("close")}
            onConfirm={() => setTermsModalOpen(false)}
            cancelText=""
            className="max-w-2xl"
        >
            <div className="space-y-4 text-sm leading-relaxed whitespace-pre-line">
                {t("termsOfServiceContent")}
            </div>
        </Modal>
        </>
    )
}
