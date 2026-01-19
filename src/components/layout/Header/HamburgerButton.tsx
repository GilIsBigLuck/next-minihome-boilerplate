"use client";

import { cva } from "class-variance-authority";

// 햄버거 버튼 스타일
const buttonStyles = cva([
  "md:hidden p-2 rounded-lg",
  "opacity-80 hover:opacity-100 hover:bg-primary/5",
  "transition-all cursor-pointer",
  "flex flex-col justify-center items-center gap-1.5",
  "w-10 h-10",
]);

// 햄버거 라인 스타일
const lineStyles = cva([
  "w-6 h-0.5 bg-current rounded-full",
  "transition-all duration-300 ease-out",
]);

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function HamburgerButton({
  isOpen,
  onClick,
}: HamburgerButtonProps) {
  return (
    <button
      onClick={onClick}
      className={buttonStyles()}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
    >
      <span
        className={`${lineStyles()} ${
          isOpen
            ? "rotate-45 translate-y-2"
            : ""
        }`}
      />
      <span
        className={`${lineStyles()} ${
          isOpen
            ? "opacity-0 -translate-x-4"
            : ""
        }`}
      />
      <span
        className={`${lineStyles()} ${
          isOpen
            ? "-rotate-45 -translate-y-2"
            : ""
        }`}
      />
    </button>
  );
}
