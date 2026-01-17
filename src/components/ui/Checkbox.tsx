import { cva } from "class-variance-authority";
import { InputHTMLAttributes, forwardRef } from "react";

const checkboxContainerStyles = cva([
    "flex items-start gap-3 cursor-pointer",
]);

const checkboxInputStyles = cva([
    "w-5 h-5 rounded border-2 border-border-default dark:border-white/20",
    "text-primary focus:ring-primary focus:ring-offset-0",
    "cursor-pointer mt-0.5",
]);

const checkboxLabelStyles = cva([
    "text-sm",
]);

const checkboxDescriptionStyles = cva([
    "text-xs text-gray-500 mt-0.5",
]);

export interface CheckboxProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    label?: string;
    description?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
    ({ className, label, description, ...props }, ref) => {
        return (
            <label className={checkboxContainerStyles({ className })}>
                <input
                    ref={ref}
                    type="checkbox"
                    className={checkboxInputStyles()}
                    {...props}
                />
                {(label || description) && (
                    <div>
                        {label && <span className={checkboxLabelStyles()}>{label}</span>}
                        {description && <p className={checkboxDescriptionStyles()}>{description}</p>}
                    </div>
                )}
            </label>
        );
    }
);

Checkbox.displayName = "Checkbox";

export { Checkbox, checkboxContainerStyles };
