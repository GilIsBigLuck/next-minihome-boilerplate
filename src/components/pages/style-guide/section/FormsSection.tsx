"use client";

import { cva } from "class-variance-authority";
import { useTranslations } from "next-intl";
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
    "bg-white p-8 rounded-xl",
    "border border-primary/20 space-y-6",
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

export default async function FormsSection() {
    const t = await getTranslations("styleGuide.forms");
    
    return (
        <section className={sectionStyles()} id="forms">
            <div className={sectionHeaderStyles()}>
                <EditNoteIcon />
                <h2 className={sectionTitleStyles()}>{t("title")}</h2>
            </div>
            <div className={formContainerStyles()}>
                <Input
                    label={t("defaultInput")}
                    placeholder={t("defaultInputPlaceholder")}
                    type="text"
                />

                <Input
                    label={t("errorState")}
                    type="email"
                    defaultValue="invalid-email"
                    error={t("errorMessage")}
                />

                <InputGroup
                    label={t("searchInput")}
                    placeholder={t("searchPlaceholder")}
                    prepend={<SearchIcon />}
                />

                <InputGroup
                    label={t("urlInput")}
                    placeholder={t("urlPlaceholder")}
                    prepend="https://"
                />

                <Select
                    label={t("selectOption")}
                    placeholder={t("selectPlaceholder")}
                    options={[
                        { value: "option1", label: t("option1") },
                        { value: "option2", label: t("option2") },
                        { value: "option3", label: t("option3") },
                    ]}
                />

                <Textarea
                    label={t("message")}
                    placeholder={t("messagePlaceholder")}
                    maxLength={500}
                    showCount
                    defaultValue=""
                />

                <FileUpload
                    label={t("fileUpload")}
                    hint={t("fileUploadHint")}
                    accept="image/*,.pdf"
                />

                <div className="space-y-4">
                    <Toggle label={t("toggleOn")} defaultChecked />

                    <div className={radioGroupStyles()}>
                        <Radio name="options" label={t("optionA")} defaultChecked />
                        <Radio name="options" label={t("optionB")} />
                    </div>

                    <div className={checkboxGroupStyles()}>
                        <Checkbox
                            label={t("acceptTerms")}
                            description={t("acceptTermsDescription")}
                        />
                        <Checkbox
                            label={t("subscribeNewsletter")}
                            defaultChecked
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
