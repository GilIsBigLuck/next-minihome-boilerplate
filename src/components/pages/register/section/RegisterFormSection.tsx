"use client";

import { cva } from "class-variance-authority";
import Link from "next/link";
import { Input, Button, Checkbox } from "@/components/ui";

const sectionStyles = cva([
    "flex-1 flex items-center justify-center p-6 sm:p-12",
]);

const containerStyles = cva([
    "w-full max-w-[520px] bg-white dark:bg-card-dark rounded-xl",
    "shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)]",
    "border border-border-default dark:border-white/5 overflow-hidden",
]);

const contentStyles = cva([
    "p-8 sm:p-10",
]);

const headerStyles = cva([
    "text-center mb-10",
]);

const titleStyles = cva([
    "text-3xl font-extrabold tracking-tight mb-2",
]);

const subtitleStyles = cva([
    "text-gray-500 dark:text-gray-400",
]);

const formStyles = cva([
    "space-y-5",
]);

const passwordRowStyles = cva([
    "grid grid-cols-1 sm:grid-cols-2 gap-4",
]);

const strengthBarContainerStyles = cva([
    "flex gap-1 h-1 w-full rounded-full overflow-hidden bg-bg-muted dark:bg-white/5 mt-1",
]);

const strengthBarStyles = cva([
    "w-1/3 bg-primary/40",
]);

const strengthHintStyles = cva([
    "text-[11px] text-gray-500 dark:text-gray-400 mt-1",
]);

const dividerContainerStyles = cva([
    "relative my-8",
]);

const dividerLineStyles = cva([
    "absolute inset-0 flex items-center",
]);

const dividerInnerLineStyles = cva([
    "w-full border-t border-border-default dark:border-white/10",
]);

const dividerTextContainerStyles = cva([
    "relative flex justify-center text-xs font-semibold uppercase tracking-wider",
]);

const dividerTextStyles = cva([
    "bg-white dark:bg-card-dark px-3 text-gray-500 dark:text-gray-400",
]);

const socialGridStyles = cva([
    "grid grid-cols-2 gap-4",
]);

const socialButtonStyles = cva([
    "flex items-center justify-center gap-2",
    "border border-border-default dark:border-white/10 rounded-lg h-11",
    "hover:bg-bg-muted dark:hover:bg-white/5 transition-colors",
    "text-sm font-semibold",
]);

const footerStyles = cva([
    "mt-10 text-center",
]);

const footerTextStyles = cva([
    "text-sm text-gray-500 dark:text-gray-400",
]);

const footerLinkStyles = cva([
    "text-primary font-bold hover:underline underline-offset-4 ml-1",
]);

function GoogleIcon() {
    return (
        <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
    );
}

function GithubIcon() {
    return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
    );
}

export default function RegisterFormSection() {
    return (
        <section className={sectionStyles()}>
            <div className={containerStyles()}>
                <div className={contentStyles()}>
                    <div className={headerStyles()}>
                        <h1 className={titleStyles()}>Create your account</h1>
                        <p className={subtitleStyles()}>
                            Join Clear Sections and start building today.
                        </p>
                    </div>

                    <form className={formStyles()}>
                        <Input
                            label="Full Name"
                            type="text"
                            placeholder="e.g. Jane Doe"
                        />

                        <Input
                            label="Email Address"
                            type="email"
                            placeholder="name@company.com"
                        />

                        <div className={passwordRowStyles()}>
                            <Input
                                label="Password"
                                type="password"
                                placeholder="Enter password"
                            />
                            <Input
                                label="Confirm"
                                type="password"
                                placeholder="Confirm password"
                            />
                        </div>

                        <div>
                            <div className={strengthBarContainerStyles()}>
                                <div className={strengthBarStyles()} />
                                <div className="w-1/3 bg-transparent" />
                                <div className="w-1/3 bg-transparent" />
                            </div>
                            <p className={strengthHintStyles()}>
                                Use 8 or more characters with a mix of letters, numbers &amp; symbols.
                            </p>
                        </div>

                        <Checkbox
                            label="I agree to the Terms of Service and Privacy Policy"
                            description="By creating an account, you agree to our terms."
                        />

                        <Button size="lg" className="w-full">
                            Create Account
                        </Button>
                    </form>

                    <div className={dividerContainerStyles()}>
                        <div className={dividerLineStyles()} aria-hidden="true">
                            <div className={dividerInnerLineStyles()} />
                        </div>
                        <div className={dividerTextContainerStyles()}>
                            <span className={dividerTextStyles()}>Or sign up with</span>
                        </div>
                    </div>

                    <div className={socialGridStyles()}>
                        <button type="button" className={socialButtonStyles()}>
                            <GoogleIcon />
                            <span>Google</span>
                        </button>
                        <button type="button" className={socialButtonStyles()}>
                            <GithubIcon />
                            <span>Github</span>
                        </button>
                    </div>

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
