import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import Providers from "@/providers";

import { cva } from "class-variance-authority";

export const metadata: Metadata = {
  title: "Next.js 15.5.7 Minihome Boilerplate",
  description: "Next.js 15.5.7 Minihome Boilerplate",
};

const bodyStyles = cva([
  "flex flex-col min-h-screenbg-background-light text-[#0e1b1a] bg-bg-light  min-h-screen"
])

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={bodyStyles()}>
        <Providers>
          <Header />
          <main className="pt-20">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
