import { cva } from "class-variance-authority";
import { ColorSwatch } from "@/components/ui";

const sectionStyles = cva([
    "space-y-6",
])

const sectionHeaderStyles = cva([
    "flex items-center gap-3",
])

const sectionTitleStyles = cva([
    "text-2xl font-bold",
])

const colorGridStyles = cva([
    "grid grid-cols-2 gap-6",
    "md:grid-cols-4",
    "lg:grid-cols-5",
])

function PaletteIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
            <circle cx="13.5" cy="6.5" r=".5"/>
            <circle cx="17.5" cy="10.5" r=".5"/>
            <circle cx="8.5" cy="7.5" r=".5"/>
            <circle cx="6.5" cy="12.5" r=".5"/>
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z"/>
        </svg>
    )
}

interface ColorItem {
    name: string;
    color: string;
    code: string;
}

const colors: ColorItem[] = [
    { name: "Primary Teal", color: "#0e776c", code: "#0E776C" },
    { name: "Light Teal", color: "#e7f3f2", code: "#E7F3F2" },
    { name: "Rich Black", color: "#121214", code: "#121214" },
    { name: "Surface", color: "#fafafa", code: "#FAFAFA" },
    { name: "Error Red", color: "#EF4444", code: "#EF4444" },
]

export default function ColorSection() {
    return (
        <section className={sectionStyles()} id="colors">
            <div className={sectionHeaderStyles()}>
                <PaletteIcon />
                <h2 className={sectionTitleStyles()}>Color Palette</h2>
            </div>
            <div className={colorGridStyles()}>
                {colors.map((color, index) => (
                    <ColorSwatch
                        key={index}
                        name={color.name}
                        color={color.color}
                        code={color.code}
                    />
                ))}
            </div>
        </section>
    )
}
