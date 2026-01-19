"use client";

import { cva } from "class-variance-authority";
import Link from "next/link";
import { Button } from "@/components/ui";

const sectionStyles = cva([
    "flex-1 flex items-center justify-center p-6 sm:p-12",
]);

const containerStyles = cva([
    "w-full max-w-[520px] bg-white rounded-xl",
    "shadow-[0_8px_30px_rgb(0,0,0,0.04)]",
    "border border-border-default overflow-hidden",
]);

const contentStyles = cva([
    "p-8 sm:p-10 text-center",
]);

const titleStyles = cva([
    "text-3xl font-extrabold tracking-tight mb-4",
]);

const subtitleStyles = cva([
    "text-gray-500 mb-8",
]);

const footerStyles = cva([
    "mt-8",
]);

const footerTextStyles = cva([
    "text-sm text-gray-500",
]);

const footerLinkStyles = cva([
    "text-primary font-bold hover:underline underline-offset-4 ml-1",
]);

export default function RegisterFormSection() {
    return (
        <section className={sectionStyles()}>
            <div className={containerStyles()}>
                <div className={contentStyles()}>
                    <h1 className={titleStyles()}>Registration</h1>
                    <p className={subtitleStyles()}>
                        계정 등록은 관리자에게 문의해주세요.<br />
                        Registration is handled by the administrator.
                    </p>

                    <Link href="/login">
                        <Button size="lg" className="w-full">
                            Go to Login
                        </Button>
                    </Link>

                    <div className={footerStyles()}>
                        <p className={footerTextStyles()}>
                            Already have an account?
                            <Link href="/login" className={footerLinkStyles()}>
                                Log In
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
