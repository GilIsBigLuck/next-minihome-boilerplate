import { cva } from "class-variance-authority";
import Link from "next/link";
import { Fragment } from "react";

const breadcrumbStyles = cva([
    "flex items-center gap-2 text-sm",
]);

const breadcrumbItemStyles = cva([
    "opacity-60 hover:opacity-100 transition-opacity",
]);

const breadcrumbActiveStyles = cva([
    "text-primary font-bold",
]);

const breadcrumbSeparatorStyles = cva([
    "opacity-30 text-xs",
]);

function ChevronRightIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6"/>
        </svg>
    );
}

export interface BreadcrumbItem {
    label: string;
    href?: string;
}

export interface BreadcrumbProps {
    items: BreadcrumbItem[];
    className?: string;
}

function Breadcrumb({ items, className }: BreadcrumbProps) {
    return (
        <nav className={breadcrumbStyles({ className })}>
            {items.map((item, index) => {
                const isLast = index === items.length - 1;

                return (
                    <Fragment key={index}>
                        {isLast ? (
                            <span className={breadcrumbActiveStyles()}>
                                {item.label}
                            </span>
                        ) : (
                            <>
                                {item.href ? (
                                    <Link href={item.href} className={breadcrumbItemStyles()}>
                                        {item.label}
                                    </Link>
                                ) : (
                                    <span className={breadcrumbItemStyles()}>
                                        {item.label}
                                    </span>
                                )}
                                <span className={breadcrumbSeparatorStyles()}>
                                    <ChevronRightIcon />
                                </span>
                            </>
                        )}
                    </Fragment>
                );
            })}
        </nav>
    );
}

export { Breadcrumb, breadcrumbStyles };
