import Link from "next/link";
import Image from "next/image";
import { cva } from "class-variance-authority";
import LanguageToggle from "./LanguageToggle";

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

  return (
    
    <header className={headerStyles()}>

      <div className={headerInnerStyles()}>

        <h1 className={logoStyles()}>
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="/favicon/favicon-32x32.png" 
              alt="Logo" 
              width={32} 
              height={32}
              className={logoImageStyles()}
            />
            <span className={logoTextStyles()}>
              Clear Sections 
            </span>
          </Link>
        </h1>

        <div className="flex items-center gap-8">
          <nav className={navStyles()}>
            <Link href="/about" className={navItemStyles()}>About</Link>
            <Link href="/style-guide" className={navItemStyles()}>Style Guide</Link>
            <Link href="/contact" className={navItemStyles()}>Contact</Link>
          </nav>

          <LanguageToggle />

        </div>

        {/* <Link
          href="/login"
          className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all"
        >
          Login
        </Link> */}
      </div>

    </header>
  );
}
