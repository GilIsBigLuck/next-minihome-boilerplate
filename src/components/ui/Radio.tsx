import { cva } from "class-variance-authority";
import { InputHTMLAttributes, forwardRef } from "react";

const radioContainerStyles = cva([
    "flex items-center gap-2 cursor-pointer",
]);

const radioInputStyles = cva([
    "text-primary focus:ring-primary",
]);

const radioLabelStyles = cva([
    "text-sm",
]);

export interface RadioProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    label?: string;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(
    ({ className, label, ...props }, ref) => {
        return (
            <label className={radioContainerStyles({ className })}>
                <input
                    ref={ref}
                    type="radio"
                    className={radioInputStyles()}
                    {...props}
                />
                {label && <span className={radioLabelStyles()}>{label}</span>}
            </label>
        );
    }
);

Radio.displayName = "Radio";

export { Radio, radioContainerStyles };
