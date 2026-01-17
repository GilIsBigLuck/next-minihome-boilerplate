"use client";

import { cva } from "class-variance-authority";
import { Input, Toggle, Radio } from "@/components/ui";

const sectionStyles = cva([
    "space-y-6",
])

const sectionHeaderStyles = cva([
    "flex items-center gap-3",
])

const sectionTitleStyles = cva([
    "text-2xl font-bold",
])

const formContainerStyles = cva([
    "bg-white dark:bg-card-dark p-8 rounded-xl",
    "border border-primary/20 dark:border-white/10 space-y-6",
])

const radioGroupStyles = cva([
    "flex gap-6",
])

function EditNoteIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
            <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
            <path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z"/>
        </svg>
    )
}

export default function FormsSection() {
    return (
        <section className={sectionStyles()} id="forms">
            <div className={sectionHeaderStyles()}>
                <EditNoteIcon />
                <h2 className={sectionTitleStyles()}>Forms</h2>
            </div>
            <div className={formContainerStyles()}>
                <Input
                    label="Default Input"
                    placeholder="Your name"
                    type="text"
                />

                <Input
                    label="Error State"
                    type="email"
                    defaultValue="invalid-email"
                    error="Please enter a valid email address."
                />

                <div className="space-y-4">
                    <Toggle label="Toggle Switch On" defaultChecked />

                    <div className={radioGroupStyles()}>
                        <Radio name="options" label="Option A" defaultChecked />
                        <Radio name="options" label="Option B" />
                    </div>
                </div>
            </div>
        </section>
    )
}
