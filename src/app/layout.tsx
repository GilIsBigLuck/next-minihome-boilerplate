import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import Providers from "@/providers";

import { cva } from "class-variance-authority";

export const metadata: Metadata = {
  title: {
    default: "mini's boilerplate",
    template: "%s | mini's boilerplate",
  },
  description: "A modern Next.js boilerplate for building beautiful and performant web applications. Built with TypeScript, Tailwind CSS, and best practices.",
  keywords: ["Next.js", "boilerplate", "TypeScript", "React", "web development"],
  authors: [{ name: "mini" }],
  creator: "mini",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://boilerplate.minihome.page",
    siteName: "mini's boilerplate",
    title: "mini's boilerplate",
    description: "A modern Next.js boilerplate for building beautiful and performant web applications.",
  },
  twitter: {
    card: "summary_large_image",
    title: "mini's boilerplate",
    description: "A modern Next.js boilerplate for building beautiful and performant web applications.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/favicon/apple-icon-57x57.png", sizes: "57x57", type: "image/png" },
      { url: "/favicon/apple-icon-60x60.png", sizes: "60x60", type: "image/png" },
      { url: "/favicon/apple-icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/favicon/apple-icon-76x76.png", sizes: "76x76", type: "image/png" },
      { url: "/favicon/apple-icon-114x114.png", sizes: "114x114", type: "image/png" },
      { url: "/favicon/apple-icon-120x120.png", sizes: "120x120", type: "image/png" },
      { url: "/favicon/apple-icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/favicon/apple-icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/favicon/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/favicon/manifest.json",
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
