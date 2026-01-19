"use client";

import { cva } from "class-variance-authority";

const paginationStyles = cva([
    "flex items-center gap-2",
]);

const paginationButtonStyles = cva(
    [
        "size-10 flex items-center justify-center rounded-lg text-sm font-bold transition-colors",
    ],
    {
        variants: {
            variant: {
                default: [
                    "border border-border-default",
                    "hover:bg-primary/5",
                ],
                active: [
                    "bg-primary text-white",
                ],
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

const paginationEllipsisStyles = cva([
    "px-2 opacity-40",
]);

function ChevronLeftIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
        </svg>
    );
}

function ChevronRightIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6"/>
        </svg>
    );
}

export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange?: (page: number) => void;
    className?: string;
}

function Pagination({ currentPage, totalPages, onPageChange, className }: PaginationProps) {
    const pages: (number | "ellipsis")[] = [];

    // Simple pagination logic
    if (totalPages <= 5) {
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
    } else {
        pages.push(1);
        if (currentPage > 3) {
            pages.push("ellipsis");
        }
        for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
            pages.push(i);
        }
        if (currentPage < totalPages - 2) {
            pages.push("ellipsis");
        }
        pages.push(totalPages);
    }

    return (
        <div className={paginationStyles({ className })}>
            <button
                className={paginationButtonStyles({ variant: "default" })}
                onClick={() => onPageChange?.(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
            >
                <ChevronLeftIcon />
            </button>

            {pages.map((page, index) => (
                page === "ellipsis" ? (
                    <span key={`ellipsis-${index}`} className={paginationEllipsisStyles()}>...</span>
                ) : (
                    <button
                        key={page}
                        className={paginationButtonStyles({
                            variant: page === currentPage ? "active" : "default"
                        })}
                        onClick={() => onPageChange?.(page)}
                    >
                        {page}
                    </button>
                )
            ))}

            <button
                className={paginationButtonStyles({ variant: "default" })}
                onClick={() => onPageChange?.(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
            >
                <ChevronRightIcon />
            </button>
        </div>
    );
}

export { Pagination, paginationStyles, paginationButtonStyles };
