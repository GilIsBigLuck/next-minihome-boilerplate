"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { InputHTMLAttributes, forwardRef, useState, useRef } from "react";
import { useTranslations } from "next-intl";

const fileUploadContainerStyles = cva([
    "space-y-2",
]);

const fileUploadLabelStyles = cva([
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

const fileUploadDropzoneStyles = cva([
    "relative border-2 border-dashed rounded-lg p-8 transition-all cursor-pointer",
    "flex flex-col items-center justify-center gap-3 text-center",
    "hover:border-primary hover:bg-primary/5",
], {
    variants: {
        variant: {
            default: "border-border-default",
            error: "border-state-danger bg-red-50",
            active: "border-primary bg-primary/10",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});

const fileUploadIconStyles = cva([
    "w-12 h-12 text-gray-400",
]);

const fileUploadTextStyles = cva([
    "text-sm text-gray-500",
]);

const fileUploadButtonStyles = cva([
    "text-primary font-medium hover:underline",
]);

const fileUploadHintStyles = cva([
    "text-xs text-gray-400",
]);

const fileUploadErrorStyles = cva([
    "text-xs font-medium mt-1 text-state-danger",
]);

const fileUploadPreviewStyles = cva([
    "flex items-center gap-3 p-3 bg-bg-muted rounded-lg",
]);

const fileUploadFileNameStyles = cva([
    "text-sm font-medium truncate flex-1",
]);

const fileUploadFileSizeStyles = cva([
    "text-xs text-gray-400",
]);

const fileUploadRemoveStyles = cva([
    "p-1 hover:bg-gray-200 rounded transition-colors",
    "text-gray-400 hover:text-state-danger",
]);

function UploadIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={fileUploadIconStyles()}>
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="17 8 12 3 7 8"/>
            <line x1="12" x2="12" y1="3" y2="15"/>
        </svg>
    );
}

function FileIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
            <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
        </svg>
    );
}

function CloseIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18"/>
            <path d="m6 6 12 12"/>
        </svg>
    );
}

function formatFileSize(bytes: number): string {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

export interface FileUploadProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "value" | "onChange">,
        VariantProps<typeof fileUploadDropzoneStyles> {
    label?: string;
    error?: string;
    hint?: string;
    accept?: string;
    maxSize?: number;
    value?: File | null;
    onChange?: (file: File | null) => void;
}

const FileUpload = forwardRef<HTMLInputElement, FileUploadProps>(
    ({ className, variant, label, error, hint, accept, maxSize, value, onChange, ...props }, ref) => {
        const t = useTranslations("styleGuide.forms");
        const [isDragging, setIsDragging] = useState(false);
        const [internalFile, setInternalFile] = useState<File | null>(null);
        const inputRef = useRef<HTMLInputElement>(null);

        const file = value !== undefined ? value : internalFile;
        const actualVariant = error ? "error" : isDragging ? "active" : variant;

        const handleFile = (selectedFile: File | null) => {
            if (selectedFile && maxSize && selectedFile.size > maxSize) {
                return;
            }
            if (value === undefined) {
                setInternalFile(selectedFile);
            }
            onChange?.(selectedFile);
        };

        const handleDragOver = (e: React.DragEvent) => {
            e.preventDefault();
            setIsDragging(true);
        };

        const handleDragLeave = (e: React.DragEvent) => {
            e.preventDefault();
            setIsDragging(false);
        };

        const handleDrop = (e: React.DragEvent) => {
            e.preventDefault();
            setIsDragging(false);
            const droppedFile = e.dataTransfer.files[0];
            if (droppedFile) {
                handleFile(droppedFile);
            }
        };

        const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const selectedFile = e.target.files?.[0] || null;
            handleFile(selectedFile);
        };

        const handleRemove = (e: React.MouseEvent) => {
            e.stopPropagation();
            handleFile(null);
            if (inputRef.current) {
                inputRef.current.value = "";
            }
        };

        const handleClick = () => {
            inputRef.current?.click();
        };

        return (
            <div className={fileUploadContainerStyles({ className })}>
                {label && (
                    <label className={fileUploadLabelStyles({ variant: error ? "error" : "default" })}>
                        {label}
                    </label>
                )}

                {file ? (
                    <div className={fileUploadPreviewStyles()}>
                        <FileIcon />
                        <div className="flex-1 min-w-0">
                            <p className={fileUploadFileNameStyles()}>{file.name}</p>
                            <p className={fileUploadFileSizeStyles()}>{formatFileSize(file.size)}</p>
                        </div>
                        <button
                            type="button"
                            onClick={handleRemove}
                            className={fileUploadRemoveStyles()}
                        >
                            <CloseIcon />
                        </button>
                    </div>
                ) : (
                    <div
                        className={fileUploadDropzoneStyles({ variant: actualVariant })}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        onClick={handleClick}
                    >
                        <UploadIcon />
                        <p className={fileUploadTextStyles()}>
                            {t("fileUploadDragAndDrop")}{" "}
                            <span className={fileUploadButtonStyles()}>{t("fileUploadBrowse")}</span>
                        </p>
                        {hint && <p className={fileUploadHintStyles()}>{hint}</p>}
                        <input
                            ref={(node) => {
                                (inputRef as React.MutableRefObject<HTMLInputElement | null>).current = node;
                                if (typeof ref === "function") {
                                    ref(node);
                                } else if (ref) {
                                    ref.current = node;
                                }
                            }}
                            type="file"
                            accept={accept}
                            onChange={handleInputChange}
                            className="hidden"
                            {...props}
                        />
                    </div>
                )}

                {error && (
                    <p className={fileUploadErrorStyles()}>{error}</p>
                )}
            </div>
        );
    }
);

FileUpload.displayName = "FileUpload";

export { FileUpload, fileUploadDropzoneStyles, fileUploadLabelStyles };
