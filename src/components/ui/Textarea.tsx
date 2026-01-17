import { cva, type VariantProps } from "class-variance-authority";
import { TextareaHTMLAttributes, forwardRef } from "react";

const textareaStyles = cva(
    [
        "w-full px-4 py-3 rounded-lg border transition-all resize-y",
        "focus:outline-none focus:ring-2 focus:ring-offset-0",
        "placeholder:text-gray-400",
        "min-h-[120px]",
    ],
    {
        variants: {
            variant: {
                default: [
                    "border-border-default dark:border-white/10",
                    "bg-bg-light dark:bg-bg-inverse",
                    "focus:ring-primary focus:border-primary",
                ],
                error: [
                    "border-state-danger",
                    "bg-red-50 dark:bg-red-500/10",
                    "focus:ring-state-danger focus:border-state-danger",
                ],
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

const textareaLabelStyles = cva([
    "block text-sm font-bold mb-2",
], {
    variants: {
        variant: {
            default: "opacity-70",
            error: "text-state-danger",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});

const textareaErrorStyles = cva([
    "text-xs font-medium mt-1 text-state-danger",
]);

const textareaCountStyles = cva([
    "text-xs text-gray-400 mt-1 text-right",
]);

export interface TextareaProps
    extends TextareaHTMLAttributes<HTMLTextAreaElement>,
        VariantProps<typeof textareaStyles> {
    label?: string;
    error?: string;
    showCount?: boolean;
    maxLength?: number;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, variant, label, error, showCount, maxLength, value, ...props }, ref) => {
        const actualVariant = error ? "error" : variant;
        const currentLength = typeof value === "string" ? value.length : 0;

        return (
            <div className="space-y-2">
                {label && (
                    <label className={textareaLabelStyles({ variant: actualVariant })}>
                        {label}
                    </label>
                )}
                <textarea
                    ref={ref}
                    className={textareaStyles({ variant: actualVariant, className })}
                    maxLength={maxLength}
                    value={value}
                    {...props}
                />
                <div className="flex justify-between">
                    {error && (
                        <p className={textareaErrorStyles()}>{error}</p>
                    )}
                    {showCount && maxLength && (
                        <p className={textareaCountStyles()}>
                            {currentLength} / {maxLength}
                        </p>
                    )}
                </div>
            </div>
        );
    }
);

Textarea.displayName = "Textarea";

export { Textarea, textareaStyles, textareaLabelStyles };
