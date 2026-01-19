"use client";

import { cva } from "class-variance-authority";
import Link from "next/link";
import { useTranslations } from "next-intl";

const contactSectionStyles = cva([
    "max-w-layout-md mx-auto w-full px-6 grid grid-cols-1 gap-16 pb-24",
    "lg:grid-cols-12",
])

// Form Styles
const formContainerStyles = cva([
    "lg:col-span-7",
])

const formCardStyles = cva([
    "bg-white border border-primary/10",
    "p-8 rounded-xl shadow-card",
])

const formStyles = cva([
    "space-y-6",
])

const formGridStyles = cva([
    "grid grid-cols-1 gap-6",
    "md:grid-cols-2",
])

const formLabelStyles = cva([
    "flex flex-col gap-2",
])

const formLabelTextStyles = cva([
    "text-sm font-bold",
])

const formInputStyles = cva([
    "w-full rounded-lg border border-primary/20",
    "bg-transparent h-14 px-4 text-base transition-all",
    "placeholder:text-gray-400",
    "focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none",
])

const formSelectContainerStyles = cva([
    "relative",
])

const formSelectStyles = cva([
    "w-full rounded-lg border border-primary/20",
    "bg-transparent h-14 px-4 text-base transition-all appearance-none cursor-pointer",
    "focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none",
])

const formSelectIconStyles = cva([
    "absolute right-4 top-4 pointer-events-none text-gray-400",
])

const formTextareaStyles = cva([
    "w-full rounded-lg border border-primary/20",
    "bg-transparent min-h-[160px] p-4 text-base transition-all",
    "placeholder:text-gray-400",
    "focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none",
])

const formButtonContainerStyles = cva([
    "pt-4",
])

const formButtonStyles = cva([
    "w-full min-w-[200px] bg-primary hover:bg-primary/90 text-white",
    "font-bold py-4 px-8 rounded-lg shadow-lg shadow-primary/20 transition-all",
    "flex items-center justify-center gap-2 group",
    "md:w-auto",
])

// Info Styles
const infoContainerStyles = cva([
    "lg:col-span-5 flex flex-col justify-between py-4",
])

const infoBlocksStyles = cva([
    "space-y-12",
])

const infoBlockStyles = cva([
    "",
])

const infoBlockTitleStyles = cva([
    "text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-6",
])

const infoItemStyles = cva([
    "flex gap-4",
])

const infoIconStyles = cva([
    "text-primary bg-primary/10 p-3 rounded-lg h-fit",
])

const infoMainTextStyles = cva([
    "text-xl font-bold leading-tight mb-2",
])

const infoSubTextStyles = cva([
    "text-gray-600 leading-relaxed",
])

const contactLinkStyles = cva([
    "flex items-center gap-4",
])

const contactLinkTextStyles = cva([
    "text-lg font-bold hover:text-primary transition-colors",
    "underline decoration-primary/20 underline-offset-4",
])

const socialLinksStyles = cva([
    "flex gap-4",
])

const socialLinkStyles = cva([
    "w-12 h-12 flex items-center justify-center rounded-lg",
    "border border-primary/10",
    "hover:bg-primary/5 hover:border-primary transition-all",
    "text-gray-500 hover:text-primary",
])

const testimonialStyles = cva([
    "mt-12 bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl",
])

const testimonialTextStyles = cva([
    "text-sm font-semibold italic text-primary",
])

const testimonialAuthorStyles = cva([
    "text-xs font-bold mt-3",
])


function LocationIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
        </svg>
    )
}

function MailIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
    )
}

function PhoneIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
    )
}

function SendIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
            <path d="m22 2-7 20-4-9-9-4Z"/>
            <path d="M22 2 11 13"/>
        </svg>
    )
}

function ChevronDownIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6"/>
        </svg>
    )
}

function LinkedInIcon() {
    return (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
    )
}

function TwitterIcon() {
    return (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
        </svg>
    )
}

function InstagramIcon() {
    return (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
    )
}

export default function ContactFormSection() {
    const t = useTranslations("contact.form");
    const tInfo = useTranslations("contact.info");
    
    const inquiryTypes = [
        { value: "", label: t("inquiryTypePlaceholder") },
        { value: "consulting", label: t("inquiryTypes.generalConsulting") },
        { value: "enterprise", label: t("inquiryTypes.enterpriseSolutions") },
        { value: "support", label: t("inquiryTypes.technicalSupport") },
        { value: "billing", label: t("inquiryTypes.billingInquiry") },
    ]

    return (
        <section id="contact-form" className={contactSectionStyles()}>
            {/* Contact Form */}
            <div className={formContainerStyles()}>
                <div className={formCardStyles()}>
                    <form className={formStyles()}>
                        <div className={formGridStyles()}>
                            <label className={formLabelStyles()}>
                                <span className={formLabelTextStyles()}>{t("fullName")}</span>
                                <input
                                    type="text"
                                    placeholder={t("fullNamePlaceholder")}
                                    className={formInputStyles()}
                                />
                            </label>
                            <label className={formLabelStyles()}>
                                <span className={formLabelTextStyles()}>{t("workEmail")}</span>
                                <input
                                    type="email"
                                    placeholder={t("workEmailPlaceholder")}
                                    className={formInputStyles()}
                                />
                            </label>
                        </div>

                        <label className={formLabelStyles()}>
                            <span className={formLabelTextStyles()}>{t("inquiryType")}</span>
                            <div className={formSelectContainerStyles()}>
                                <select className={formSelectStyles()}>
                                    {inquiryTypes.map((type) => (
                                        <option key={type.value} value={type.value}>
                                            {type.label}
                                        </option>
                                    ))}
                                </select>
                                <span className={formSelectIconStyles()}>
                                    <ChevronDownIcon />
                                </span>
                            </div>
                        </label>

                        <label className={formLabelStyles()}>
                            <span className={formLabelTextStyles()}>{t("message")}</span>
                            <textarea
                                placeholder={t("messagePlaceholder")}
                                className={formTextareaStyles()}
                            />
                        </label>

                        <div className={formButtonContainerStyles()}>
                            <button type="submit" className={formButtonStyles()}>
                                {t("sendMessage")}
                                <SendIcon />
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Contact Info */}
            <div className={infoContainerStyles()}>
                <div className={infoBlocksStyles()}>
                    {/* Headquarters */}
                    <div className={infoBlockStyles()}>
                        <h3 className={infoBlockTitleStyles()}>{tInfo("headquarters.title")}</h3>
                        <div className={infoItemStyles()}>
                            <span className={infoIconStyles()}>
                                <LocationIcon />
                            </span>
                            <div>
                                <p className={infoMainTextStyles()}>{tInfo("headquarters.name")}</p>
                                <p className={infoSubTextStyles()}>
                                    {(tInfo.raw("headquarters.address") as string[]).map((line: string, index: number, arr: string[]) => (
                                        <span key={index}>
                                            {line}
                                            {index < arr.length - 1 && <br />}
                                        </span>
                                    ))}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Direct Contact */}
                    <div className={infoBlockStyles()}>
                        <h3 className={infoBlockTitleStyles()}>{tInfo("directContact.title")}</h3>
                        <div className="space-y-6">
                            <div className={contactLinkStyles()}>
                                <span className={infoIconStyles()}>
                                    <MailIcon />
                                </span>
                                <Link href={`mailto:${tInfo("directContact.email")}`} className={contactLinkTextStyles()}>
                                    {tInfo("directContact.email")}
                                </Link>
                            </div>
                            <div className={contactLinkStyles()}>
                                <span className={infoIconStyles()}>
                                    <PhoneIcon />
                                </span>
                                <Link href={`tel:${tInfo("directContact.phone").replace(/\D/g, '')}`} className={contactLinkTextStyles()}>
                                    {tInfo("directContact.phone")}
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className={infoBlockStyles()}>
                        <h3 className={infoBlockTitleStyles()}>{tInfo("social.title")}</h3>
                        <div className={socialLinksStyles()}>
                            <Link href="#" className={socialLinkStyles()}>
                                <LinkedInIcon />
                            </Link>
                            <Link href="#" className={socialLinkStyles()}>
                                <TwitterIcon />
                            </Link>
                            <Link href="#" className={socialLinkStyles()}>
                                <InstagramIcon />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Testimonial */}
                <div className={testimonialStyles()}>
                    <p className={testimonialTextStyles()}>&ldquo;{tInfo("testimonial.text")}&rdquo;</p>
                    <p className={testimonialAuthorStyles()}>{tInfo("testimonial.author")}</p>
                </div>
            </div>
        </section>
    )
}
