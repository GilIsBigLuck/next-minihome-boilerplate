"use client";

import Link from "next/link";
import { cva } from "class-variance-authority";
import { useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";

// 오버레이 스타일
const overlayStyles = cva([
  "fixed inset-0 bg-black/50 backdrop-blur-sm z-dropdown",
  "transition-opacity duration-300 ease-out",
]);

// 메뉴 패널 스타일
const menuPanelStyles = cva([
  "fixed top-0 right-0 h-full w-80 max-w-[85vw]",
  "bg-bg-light border-l border-primary/10",
  "shadow-2xl z-dropdown",
  "transform transition-transform duration-300 ease-out",
]);

// 메뉴 헤더 스타일
const menuHeaderStyles = cva([
  "flex items-center justify-between p-6",
  "border-b border-primary/10",
]);

// 메뉴 타이틀 스타일
const menuTitleStyles = cva([
  "text-xl font-extrabold tracking-tight",
]);

// 닫기 버튼 스타일
const closeButtonStyles = cva([
  "p-2 rounded-lg",
  "opacity-60 hover:opacity-100 hover:bg-primary/5",
  "transition-all cursor-pointer",
]);

// 메뉴 리스트 스타일
const menuListStyles = cva([
  "flex flex-col p-6 space-y-2",
]);

// 메뉴 항목 스타일
const menuItemStyles = cva([
  "block px-4 py-3 rounded-lg",
  "text-base font-semibold",
  "hover:bg-primary/5 hover:text-primary",
  "transition-all",
]);

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const t = useTranslations("common");
  const locale = useLocale();
  
  // ESC 키로 메뉴 닫기
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // 스크롤 방지
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* 오버레이 */}
      <div
        className={`${overlayStyles()} ${isOpen ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* 메뉴 패널 */}
      <nav
        className={`${menuPanelStyles()} ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        aria-label="Mobile navigation"
      >
        {/* 메뉴 헤더 */}
        <div className={menuHeaderStyles()}>
          <h2 className={menuTitleStyles()}>{t("menu")}</h2>
          <button
            onClick={onClose}
            className={closeButtonStyles()}
            aria-label={t("ui.close")}
          >
            <CloseIcon />
          </button>
        </div>

        {/* 메뉴 리스트 */}
        <div className={menuListStyles()}>
          <Link
            href={`/${locale}/about`}
            onClick={onClose}
            className={menuItemStyles()}
          >
            {t("about")}
          </Link>
          <Link
            href={`/${locale}/style-guide`}
            onClick={onClose}
            className={menuItemStyles()}
          >
            {t("styleGuide")}
          </Link>
          <Link
            href={`/${locale}/contact`}
            onClick={onClose}
            className={menuItemStyles()}
          >
            {t("contact")}
          </Link>
        </div>
      </nav>
    </>
  );
}
