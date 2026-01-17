import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";

const buttonStyles = cva(
    [
        "inline-flex items-center justify-center gap-2",
        "font-bold text-sm rounded-lg transition-all",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
    ],
    {
        variants: {
            variant: {
                primary: [
                    "bg-primary text-white shadow-md",
                    "hover:bg-primary/90 hover:shadow-lg hover:ring-4 hover:ring-primary/20",
                    "focus:ring-primary",
                    "disabled:bg-primary/40 disabled:cursor-not-allowed disabled:shadow-none",
                ],
                secondary: [
                    "bg-primary/10 dark:bg-primary/20 text-primary",
                    "hover:bg-primary/20 dark:hover:bg-primary/30 hover:ring-4 hover:ring-primary/5",
                    "focus:ring-primary",
                    "disabled:bg-primary/5 disabled:text-primary/40 disabled:cursor-not-allowed",
                ],
                outline: [
                    "border-2 border-border-default dark:border-white/20 bg-transparent",
                    "hover:border-primary hover:text-primary",
                    "focus:ring-primary",
                    "disabled:border-border-default/40 disabled:text-gray-300 dark:disabled:text-gray-600 disabled:cursor-not-allowed",
                ],
                ghost: [
                    "bg-transparent",
                    "hover:bg-primary/5",
                    "focus:ring-primary",
                    "disabled:text-gray-300 disabled:cursor-not-allowed",
                ],
                danger: [
                    "bg-state-danger text-white shadow-md",
                    "hover:bg-state-danger/90 hover:shadow-lg",
                    "focus:ring-state-danger",
                    "disabled:bg-state-danger/40 disabled:cursor-not-allowed",
                ],
            },
            size: {
                sm: "px-4 py-1.5 text-xs",
                md: "px-6 py-2",
                lg: "px-8 py-3 text-base",
                xl: "px-10 py-4 text-lg",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    }
);

export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonStyles> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={buttonStyles({ variant, size, className })}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";

export { Button, buttonStyles };
