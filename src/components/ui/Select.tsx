"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { SelectHTMLAttributes, forwardRef } from "react";

const selectContainerStyles = cva([
    "relative",
]);

const selectStyles = cva(
    [
        "w-full px-4 py-3 pr-10 rounded-lg border transition-all appearance-none cursor-pointer",
        "focus:outline-none focus:ring-2 focus:ring-offset-0",
        "bg-transparent",
    ],
    {
        variants: {
            variant: {
                default: [
                    "border-border-default",
                    "focus:ring-primary focus:border-primary",
                ],
                error: [
                    "border-state-danger",
                    "focus:ring-state-danger focus:border-state-danger",
                ],
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

const selectLabelStyles = cva([
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

const selectIconStyles = cva([
    "absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400",
]);

const selectErrorStyles = cva([
    "text-xs font-medium mt-1 text-state-danger",
]);

function ChevronDownIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6"/>
        </svg>
    );
}

export interface SelectOption {
    value: string;
    label: string;
}

export interface SelectProps
    extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size">,
        VariantProps<typeof selectStyles> {
    label?: string;
    error?: string;
    options: SelectOption[];
    placeholder?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
    ({ className, variant, label, error, options, placeholder, ...props }, ref) => {
        const actualVariant = error ? "error" : variant;

        return (
            <div className="space-y-2">
                {label && (
                    <label className={selectLabelStyles({ variant: actualVariant })}>
                        {label}
                    </label>
                )}
                <div className={selectContainerStyles()}>
                    <select
                        ref={ref}
                        className={selectStyles({ variant: actualVariant, className })}
                        {...props}
                    >
                        {placeholder && (
                            <option value="">{placeholder}</option>
                        )}
                        {options.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <span className={selectIconStyles()}>
                        <ChevronDownIcon />
                    </span>
                </div>
                {error && (
                    <p className={selectErrorStyles()}>{error}</p>
                )}
            </div>
        );
    }
);

Select.displayName = "Select";

export { Select, selectStyles, selectLabelStyles };
