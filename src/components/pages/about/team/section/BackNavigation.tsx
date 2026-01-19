import { cva } from "class-variance-authority";
import Link from "next/link";
import { useTranslations } from "next-intl";

const backNavStyles = cva([
    "mb-12",
])

const backLinkStyles = cva([
    "flex items-center gap-2 text-primary font-bold text-sm",
    "hover:translate-x-[-4px] transition-transform",
])

function ArrowBackIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m12 19-7-7 7-7"/>
            <path d="M19 12H5"/>
        </svg>
    )
}

export default function BackNavigation() {
    const t = useTranslations("team");
    
    return (
        <div className={backNavStyles()}>
            <Link href="/about" className={backLinkStyles()}>
                <ArrowBackIcon />
                <span>{t("backNavigation")}</span>
            </Link>
        </div>
    )
}
