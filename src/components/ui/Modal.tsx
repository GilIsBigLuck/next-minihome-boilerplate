"use client";

import { cva } from "class-variance-authority";
import { ReactNode } from "react";
import { Button } from "./Button";

const modalOverlayStyles = cva([
    "fixed inset-0 bg-black/50 backdrop-blur-sm z-modal",
    "flex items-center justify-center p-4",
]);

const modalContentStyles = cva([
    "w-full max-w-md bg-white dark:bg-card-dark rounded-xl shadow-2xl",
    "border border-black/5 p-6 space-y-4",
    "animate-fadeIn",
]);

const modalHeaderStyles = cva([
    "flex items-center justify-between",
]);

const modalTitleStyles = cva([
    "font-bold text-lg",
]);

const modalCloseStyles = cva([
    "opacity-40 cursor-pointer hover:opacity-100 transition-opacity",
]);

const modalBodyStyles = cva([
    "text-sm opacity-60",
]);

const modalFooterStyles = cva([
    "flex justify-end gap-3 pt-2",
]);

function CloseIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18"/>
            <path d="m6 6 12 12"/>
        </svg>
    );
}

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
    onConfirm?: () => void;
    confirmText?: string;
    cancelText?: string;
    className?: string;
}

function Modal({
    isOpen,
    onClose,
    title,
    children,
    onConfirm,
    confirmText = "Confirm",
    cancelText = "Cancel",
    className
}: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className={modalOverlayStyles()} onClick={onClose}>
            <div
                className={modalContentStyles({ className })}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={modalHeaderStyles()}>
                    <h3 className={modalTitleStyles()}>{title}</h3>
                    <button className={modalCloseStyles()} onClick={onClose}>
                        <CloseIcon />
                    </button>
                </div>
                <div className={modalBodyStyles()}>
                    {children}
                </div>
                <div className={modalFooterStyles()}>
                    <Button variant="ghost" onClick={onClose}>
                        {cancelText}
                    </Button>
                    {onConfirm && (
                        <Button variant="primary" onClick={onConfirm}>
                            {confirmText}
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}

export { Modal, modalOverlayStyles, modalContentStyles };
