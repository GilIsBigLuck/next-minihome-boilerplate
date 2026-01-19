"use client";

import { cva } from "class-variance-authority";
import { useLanguage, Locale } from "@/providers/LanguageProvider";

// 언어 토글 컨테이너 스타일
const langToggleContainerStyles = cva([
  "flex items-center gap-2 bg-bg-muted rounded-lg p-1"
])

// 언어 토글 버튼 스타일
const langToggleButtonStyles = cva([
  "px-3 py-1.5 text-xs font-semibold rounded-md transition-all",
  "hover:bg-white/50",
  "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
])

const langToggleButtonActiveStyles = cva([
  "bg-white text-primary shadow-sm"
])

const langToggleButtonInactiveStyles = cva([
  "text-gray-600"
])

export default function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  const handleLanguageChange = (lang: Locale) => {
    setLocale(lang);
  };

  return (
    <div className={langToggleContainerStyles()}>
      <button
        onClick={() => handleLanguageChange("en")}
        className={langToggleButtonStyles({
          className: locale === "en"
            ? langToggleButtonActiveStyles()
            : langToggleButtonInactiveStyles()
        })}
        aria-label="Switch to English"
        aria-pressed={locale === "en"}
      >
        EN
      </button>
      <button
        onClick={() => handleLanguageChange("ko")}
        className={langToggleButtonStyles({
          className: locale === "ko"
            ? langToggleButtonActiveStyles()
            : langToggleButtonInactiveStyles()
        })}
        aria-label="한국어로 변경"
        aria-pressed={locale === "ko"}
      >
        KR
      </button>
    </div>
  );
}
