"use client";

import { cva } from "class-variance-authority";
import { Input, Toggle, Radio, Select, Textarea, Checkbox, InputGroup, FileUpload } from "@/components/ui";

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

const checkboxGroupStyles = cva([
    "space-y-3",
])

function EditNoteIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
            <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
            <path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z"/>
        </svg>
    )
}

function SearchIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.3-4.3"/>
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

                <InputGroup
                    label="Search Input"
                    placeholder="Search..."
                    prepend={<SearchIcon />}
                />

                <InputGroup
                    label="URL Input"
                    placeholder="yoursite.com"
                    prepend="https://"
                />

                <Select
                    label="Select Option"
                    placeholder="Choose an option"
                    options={[
                        { value: "option1", label: "Option 1" },
                        { value: "option2", label: "Option 2" },
                        { value: "option3", label: "Option 3" },
                    ]}
                />

                <Textarea
                    label="Message"
                    placeholder="Write your message here..."
                    maxLength={500}
                    showCount
                    defaultValue=""
                />

                <FileUpload
                    label="File Upload"
                    hint="PNG, JPG, PDF up to 10MB"
                    accept="image/*,.pdf"
                />

                <div className="space-y-4">
                    <Toggle label="Toggle Switch On" defaultChecked />

                    <div className={radioGroupStyles()}>
                        <Radio name="options" label="Option A" defaultChecked />
                        <Radio name="options" label="Option B" />
                    </div>

                    <div className={checkboxGroupStyles()}>
                        <Checkbox
                            label="Accept terms and conditions"
                            description="You agree to our Terms of Service and Privacy Policy."
                        />
                        <Checkbox
                            label="Subscribe to newsletter"
                            defaultChecked
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
