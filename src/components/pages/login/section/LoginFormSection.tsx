"use client";

import { cva } from "class-variance-authority";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { Input, Button, Checkbox } from "@/components/ui";
import { useLogin } from "@/hooks";
import { loginSchema, LoginInput } from "@/lib/validations";

const sectionStyles = cva([
    "flex-1 flex items-center justify-center p-6 md:p-12",
]);

const containerStyles = cva([
    "w-full max-w-[440px] flex flex-col items-center",
]);

const headerStyles = cva([
    "mb-8 text-center",
]);

const titleStyles = cva([
    "text-3xl font-bold tracking-tight mb-2",
]);

const subtitleStyles = cva([
    "text-gray-500 dark:text-gray-400",
]);

const formContainerStyles = cva([
    "w-full bg-bg-muted dark:bg-card-dark p-8 rounded-xl",
    "border border-border-default dark:border-white/10",
]);

const formStyles = cva([
    "flex flex-col gap-5",
]);

const passwordHeaderStyles = cva([
    "flex justify-between items-center mb-2",
]);

const forgotLinkStyles = cva([
    "text-primary text-xs font-semibold hover:underline",
]);

const dividerStyles = cva([
    "relative flex items-center py-4",
]);

const dividerLineStyles = cva([
    "flex-grow border-t border-border-default dark:border-white/10",
]);

const dividerTextStyles = cva([
    "flex-shrink mx-4 text-gray-400 text-xs font-semibold uppercase tracking-wider",
]);

const socialButtonStyles = cva([
    "flex w-full items-center justify-center gap-3 rounded-lg h-14 px-4",
    "border border-border-default dark:border-white/10",
    "bg-white dark:bg-bg-inverse",
    "text-sm font-semibold",
    "hover:bg-gray-50 dark:hover:bg-white/5 transition-all",
]);

const footerStyles = cva([
    "mt-8 text-center",
]);

const footerTextStyles = cva([
    "text-sm font-medium text-gray-500 dark:text-gray-400",
]);

const footerLinkStyles = cva([
    "text-primary font-bold hover:underline ml-1",
]);

const errorStyles = cva([
    "text-sm text-state-danger bg-red-50 dark:bg-red-500/10 p-3 rounded-lg",
]);

function GoogleIcon() {
    return (
        <svg className="size-5" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
    );
}

export default function LoginFormSection() {
    const login = useLogin();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginInput>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = (data: LoginInput) => {
        login.mutate(data);
    };

    const handleGoogleLogin = () => {
        signIn("google", { callbackUrl: "/" });
    };

    return (
        <section className={sectionStyles()}>
            <div className={containerStyles()}>
                <div className={headerStyles()}>
                    <h1 className={titleStyles()}>Welcome back</h1>
                    <p className={subtitleStyles()}>
                        Sign in to your Clear Sections account to continue.
                    </p>
                </div>

                <div className={formContainerStyles()}>
                    <form className={formStyles()} onSubmit={handleSubmit(onSubmit)}>
                        {login.error && (
                            <div className={errorStyles()}>
                                {login.error.message}
                            </div>
                        )}

                        <Input
                            label="Email Address"
                            type="email"
                            placeholder="name@company.com"
                            error={errors.email?.message}
                            {...register("email")}
                        />

                        <div>
                            <div className={passwordHeaderStyles()}>
                                <label className="text-sm font-bold opacity-70">Password</label>
                                <Link href="#" className={forgotLinkStyles()}>
                                    Forgot password?
                                </Link>
                            </div>
                            <Input
                                type="password"
                                placeholder="Enter your password"
                                error={errors.password?.message}
                                {...register("password")}
                            />
                        </div>

                        <Checkbox
                            label="Keep me signed in"
                        />

                        <Button
                            type="submit"
                            size="lg"
                            className="w-full"
                            disabled={login.isPending}
                        >
                            {login.isPending ? "Logging in..." : "Log In"}
                        </Button>

                        <div className={dividerStyles()}>
                            <div className={dividerLineStyles()} />
                            <span className={dividerTextStyles()}>Or continue with</span>
                            <div className={dividerLineStyles()} />
                        </div>

                        <button
                            type="button"
                            className={socialButtonStyles()}
                            onClick={handleGoogleLogin}
                        >
                            <GoogleIcon />
                            Google
                        </button>
                    </form>
                </div>

                <div className={footerStyles()}>
                    <p className={footerTextStyles()}>
                        Don&apos;t have an account?
                        <Link href="/register" className={footerLinkStyles()}>
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}
