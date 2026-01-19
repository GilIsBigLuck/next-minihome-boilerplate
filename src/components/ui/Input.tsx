import { cva, type VariantProps } from "class-variance-authority";
import { InputHTMLAttributes, forwardRef } from "react";

const inputStyles = cva(
    [
        "w-full px-4 py-3 rounded-lg border transition-all",
        "focus:outline-none focus:ring-2 focus:ring-offset-0",
        "placeholder:text-gray-400",
    ],
    {
        variants: {
            variant: {
                default: [
                    "border-border-default",
                    "bg-bg-light",
                    "focus:ring-primary focus:border-primary",
                ],
                error: [
                    "border-state-danger",
                    "bg-red-50",
                    "focus:ring-state-danger focus:border-state-danger",
                ],
                success: [
                    "border-state-success",
                    "bg-green-50",
                    "focus:ring-state-success focus:border-state-success",
                ],
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

const inputLabelStyles = cva([
    "block text-sm font-bold mb-2",
], {
    variants: {
        variant: {
            default: "opacity-70",
            error: "text-state-danger",
            success: "text-state-success",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});

const inputErrorStyles = cva([
    "text-xs font-medium mt-1 text-state-danger",
]);

export interface InputProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
        VariantProps<typeof inputStyles> {
    label?: string;
    error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, variant, label, error, ...props }, ref) => {
        const actualVariant = error ? "error" : variant;

        return (
            <div className="space-y-2">
                {label && (
                    <label className={inputLabelStyles({ variant: actualVariant })}>
                        {label}
                    </label>
                )}
                <input
                    ref={ref}
                    className={inputStyles({ variant: actualVariant, className })}
                    {...props}
                />
                {error && (
                    <p className={inputErrorStyles()}>{error}</p>
                )}
            </div>
        );
    }
);

Input.displayName = "Input";

export { Input, inputStyles, inputLabelStyles };
