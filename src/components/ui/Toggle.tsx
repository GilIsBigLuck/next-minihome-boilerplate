"use client";

import { cva } from "class-variance-authority";
import { InputHTMLAttributes, forwardRef } from "react";

const toggleContainerStyles = cva([
    "flex items-center gap-3 cursor-pointer group",
]);

const toggleTrackStyles = cva([
    "relative w-12 h-6 rounded-full transition-colors",
    "bg-border-default",
    "group-has-[:checked]:bg-primary",
]);

const toggleThumbStyles = cva([
    "absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform",
    "peer-checked:translate-x-6",
]);

const toggleLabelStyles = cva([
    "text-sm font-medium",
]);

export interface ToggleProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    label?: string;
}

const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
    ({ className, label, ...props }, ref) => {
        return (
            <label className={toggleContainerStyles({ className })}>
                <div className={toggleTrackStyles()}>
                    <input
                        ref={ref}
                        type="checkbox"
                        className="sr-only peer"
                        {...props}
                    />
                    <div className={toggleThumbStyles()} />
                </div>
                {label && <span className={toggleLabelStyles()}>{label}</span>}
            </label>
        );
    }
);

Toggle.displayName = "Toggle";

export { Toggle, toggleContainerStyles, toggleTrackStyles };
