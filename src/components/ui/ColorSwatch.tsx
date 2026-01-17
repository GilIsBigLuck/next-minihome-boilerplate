import { cva } from "class-variance-authority";

const colorSwatchStyles = cva([
    "space-y-3",
]);

const colorSwatchPreviewStyles = cva([
    "h-24 w-full rounded-lg shadow-sm border border-black/5",
]);

const colorSwatchNameStyles = cva([
    "font-bold text-sm",
]);

const colorSwatchCodeStyles = cva([
    "text-xs font-mono opacity-60",
]);

export interface ColorSwatchProps {
    name: string;
    color: string;
    code: string;
    className?: string;
}

function ColorSwatch({ name, color, code, className }: ColorSwatchProps) {
    return (
        <div className={colorSwatchStyles({ className })}>
            <div
                className={colorSwatchPreviewStyles()}
                style={{ backgroundColor: color }}
            />
            <div>
                <p className={colorSwatchNameStyles()}>{name}</p>
                <p className={colorSwatchCodeStyles()}>{code}</p>
            </div>
        </div>
    );
}

export { ColorSwatch, colorSwatchStyles };
