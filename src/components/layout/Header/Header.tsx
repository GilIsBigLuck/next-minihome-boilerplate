"use client";

import Link from "next/link";
import Image from "next/image";
import { cva } from "class-variance-authority";
import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import LanguageToggle from "./LanguageToggle";
import HamburgerButton from "./HamburgerButton";
import MobileMenu from "./MobileMenu";

// 헤더 스타일
const headerStyles = cva([
  "fixed top-0 left-0 right-0 z-header bg-bg-light/80", 
  "backdrop-blur-md border-b border-primary/10  px-6 md:px-10",
])

// 헤더 내부 스타일
const headerInnerStyles = cva([
  "max-w-layout-md mx-auto h-20 flex items-center justify-between"
])

// 로고(h1) 스타일
const logoStyles = cva([
  "flex items-center gap-3"
])

// 로고 이미지 스타일
const logoImageStyles = cva([
  "w-8 h-8 object-contain"
])

// 로고 텍스트 스타일
const logoTextStyles = cva([
  "text-xl font-extrabold tracking-tight"
])

// 네비게이션 스타일
const navStyles = cva([
  "hidden md:flex items-center gap-10"
])

// 네비게이션 항목 스타일
const navItemStyles = cva([
  "text-sm font-semibold hover:text-primary transition-colors"
])

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations("common");
  const tHeader = useTranslations("header");
  const locale = useLocale();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={headerStyles()}>
        <div className={headerInnerStyles()}>
          <div className={logoStyles()}>
            <Link href={`/${locale}`} className="flex items-center gap-3">
              <Image
                src="/favicon/favicon-32x32.png"
                alt="Logo"
                width={32}
                height={32}
                className={logoImageStyles()}
              />
              <span className={logoTextStyles()}>{tHeader("title")}</span>
            </Link>
          </div>

          <div className="flex items-center gap-8">
            <nav className={navStyles()}>
              <Link href={`/${locale}/about`} className={navItemStyles()}>
                {t("about")}
              </Link>
              <Link href={`/${locale}/style-guide`} className={navItemStyles()}>
                {t("styleGuide")}
              </Link>
              <Link href={`/${locale}/contact`} className={navItemStyles()}>
                {t("contact")}
              </Link>
            </nav>

            <LanguageToggle />

            <HamburgerButton
              isOpen={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            />
          </div>

          {/* <Link
            href="/login"
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all"
          >
            Login
          </Link> */}
        </div>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </>
  );
}
