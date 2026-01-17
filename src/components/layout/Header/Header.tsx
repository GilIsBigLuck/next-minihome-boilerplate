import Link from "next/link";
import { cva } from "class-variance-authority";

// 헤더 스타일
const headerStyles = cva([
  "fixed top-0 left-0 right-0 z-header bg-bg-light/80", 
  "backdrop-blur-md border-b border-primary/10",
])

// 헤더 내부 스타일
const headerInnerStyles = cva([
  "max-w-layout-md mx-auto h-20 flex items-center justify-between"
])

// 로고(h1) 스타일
const logoStyles = cva([
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
          <Link href="/">
            Clear Sections 
          </Link>
        </h1>

        <nav className={navStyles()}>
          <Link href="/about" className={navItemStyles()}>About</Link>
          <Link href="/contact" className={navItemStyles()}>Contact</Link>
        </nav>
        
      </div>

    </header>
  );
}
