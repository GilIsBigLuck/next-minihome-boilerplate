"use client";

import { cva } from "class-variance-authority";
import { useState } from "react";
import { Breadcrumb, Pagination, Button } from "@/components/ui";

const sectionStyles = cva([
    "space-y-6",
])

const sectionHeaderStyles = cva([
    "flex items-center gap-3",
])

const sectionTitleStyles = cva([
    "text-2xl font-bold",
])

const navigationContainerStyles = cva([
    "space-y-10",
])

const navBoxStyles = cva([
    "bg-white dark:bg-card-dark p-8 rounded-xl",
    "border border-primary/20 dark:border-white/10 space-y-8",
])

const modalPreviewStyles = cva([
    "bg-bg-light dark:bg-bg-inverse p-6 rounded-xl",
    "border border-primary/20 dark:border-white/10",
    "relative overflow-hidden h-[240px] flex items-center justify-center",
])

const modalBackdropStyles = cva([
    "absolute inset-0 bg-primary/5 backdrop-blur-[1px]",
])

const modalCardStyles = cva([
    "relative w-full max-w-[320px] bg-white dark:bg-card-dark rounded-xl",
    "shadow-2xl border border-black/5 p-6 space-y-4",
])

const modalHeaderStyles = cva([
    "flex items-center justify-between",
])

const modalTitleStyles = cva([
    "font-bold",
])

const modalCloseStyles = cva([
    "opacity-40 cursor-pointer hover:opacity-100",
])

const modalBodyStyles = cva([
    "text-sm opacity-60",
])

const modalFooterStyles = cva([
    "flex justify-end gap-3 pt-2",
])

function LayersIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
            <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/>
            <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/>
            <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>
        </svg>
    )
}

function CloseIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18"/>
            <path d="m6 6 12 12"/>
        </svg>
    )
}

const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Library", href: "#" },
    { label: "Style Guide" },
];

export default function NavigationSection() {
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <section id="navigation" className={sectionStyles()}>
            <div className={sectionHeaderStyles()}>
                <LayersIcon />
                <h2 className={sectionTitleStyles()}>Navigation &amp; Modal</h2>
            </div>
            <div className={navigationContainerStyles()}>
                {/* Breadcrumbs & Pagination */}
                <div className={navBoxStyles()}>
                    <Breadcrumb items={breadcrumbItems} />
                    <Pagination
                        currentPage={currentPage}
                        totalPages={10}
                        onPageChange={setCurrentPage}
                    />
                </div>

                {/* Mini Modal Preview */}
                <div className={modalPreviewStyles()}>
                    <div className={modalBackdropStyles()} />
                    <div className={modalCardStyles()}>
                        <div className={modalHeaderStyles()}>
                            <h3 className={modalTitleStyles()}>Confirmation</h3>
                            <span className={modalCloseStyles()}>
                                <CloseIcon />
                            </span>
                        </div>
                        <p className={modalBodyStyles()}>
                            Are you sure you want to publish these changes to production?
                        </p>
                        <div className={modalFooterStyles()}>
                            <Button variant="ghost" size="sm">Cancel</Button>
                            <Button variant="primary" size="sm">Confirm</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
