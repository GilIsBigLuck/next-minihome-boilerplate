import { cva } from "class-variance-authority";
import { InputHTMLAttributes, ReactNode, forwardRef } from "react";

const inputGroupStyles = cva([
    "flex",
]);

const inputGroupInputStyles = cva([
    "flex-1 px-4 py-3 border transition-all",
    "focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-primary focus:border-primary",
    "placeholder:text-gray-400",
    "border-border-default",
    "bg-bg-light",
]);

const inputGroupPrependStyles = cva([
    "px-4 py-3 border border-r-0 rounded-l-lg",
    "border-border-default",
    "bg-bg-muted",
    "flex items-center text-gray-500",
]);

const inputGroupAppendStyles = cva([
    "px-4 py-3 border border-l-0 rounded-r-lg",
    "border-border-default",
    "bg-bg-muted",
    "flex items-center text-gray-500",
]);

const inputGroupLabelStyles = cva([
    "block text-sm font-bold mb-2 opacity-70",
]);

export interface InputGroupProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    label?: string;
    prepend?: ReactNode;
    append?: ReactNode;
}

const InputGroup = forwardRef<HTMLInputElement, InputGroupProps>(
    ({ className, label, prepend, append, ...props }, ref) => {
        const inputClassName = [
            inputGroupInputStyles(),
            !prepend && "rounded-l-lg",
            !append && "rounded-r-lg",
        ].filter(Boolean).join(" ");

        return (
            <div className="space-y-2">
                {label && (
                    <label className={inputGroupLabelStyles()}>
                        {label}
                    </label>
                )}
                <div className={inputGroupStyles({ className })}>
                    {prepend && (
                        <div className={inputGroupPrependStyles()}>
                            {prepend}
                        </div>
                    )}
                    <input
                        ref={ref}
                        className={inputClassName}
                        {...props}
                    />
                    {append && (
                        <div className={inputGroupAppendStyles()}>
                            {append}
                        </div>
                    )}
                </div>
            </div>
        );
    }
);

InputGroup.displayName = "InputGroup";

export { InputGroup, inputGroupStyles };
