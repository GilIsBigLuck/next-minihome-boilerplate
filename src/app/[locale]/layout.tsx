import type { Metadata } from "next";
import "../globals.css";

import { Noto_Sans_KR, Inter, Rubik } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";

import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import QueryProvider from "@/providers/QueryProvider";
import { routing } from "@/i18n/routing";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-kr",
  display: "swap",
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-rubik",
  display: "swap",
  preload: false,
});

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

type Locale = (typeof routing.locales)[number];

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  // Validate locale
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${notoSansKR.variable} ${inter.variable} ${rubik.variable}`}>
      <body className="flex flex-col min-h-screen bg-bg-light text-[#0e1b1a] font-body">
        <NextIntlClientProvider messages={messages}>
          <QueryProvider>
            <Header />
            <main className="pt-20">
              {children}
            </main>
            <Footer />
          </QueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
