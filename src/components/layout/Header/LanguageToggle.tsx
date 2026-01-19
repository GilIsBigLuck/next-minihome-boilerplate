"use client";

import { cva } from "class-variance-authority";
import { useState } from "react";

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

export type Language = "KR" | "EN";

interface LanguageToggleProps {
  defaultLanguage?: Language;
  onChange?: (language: Language) => void;
}

export default function LanguageToggle({ 
  defaultLanguage = "EN",
  onChange 
}: LanguageToggleProps) {
  const [language, setLanguage] = useState<Language>(defaultLanguage);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    onChange?.(lang);
  };

  return (
    <div className={langToggleContainerStyles()}>
      <button
        onClick={() => handleLanguageChange("EN")}
        className={langToggleButtonStyles({
          className: language === "EN" 
            ? langToggleButtonActiveStyles() 
            : langToggleButtonInactiveStyles()
        })}
        aria-label="Switch to English"
        aria-pressed={language === "EN"}
      >
        EN
      </button>
      <button
        onClick={() => handleLanguageChange("KR")}
        className={langToggleButtonStyles({
          className: language === "KR" 
            ? langToggleButtonActiveStyles() 
            : langToggleButtonInactiveStyles()
        })}
        aria-label="한국어로 변경"
        aria-pressed={language === "KR"}
      >
        KR
      </button>
    </div>
  );
}
