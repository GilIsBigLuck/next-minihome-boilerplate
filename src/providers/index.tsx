"use client";

import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import QueryProvider from "./QueryProvider";
import { LanguageProvider, Locale } from "./LanguageProvider";

interface ProvidersProps {
  children: ReactNode;
  locale: Locale;
  messages: Record<string, unknown>;
}

export default function Providers({ children, locale, messages }: ProvidersProps) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <LanguageProvider initialLocale={locale}>
        <QueryProvider>{children}</QueryProvider>
      </LanguageProvider>
    </NextIntlClientProvider>
  );
}

export { QueryProvider, LanguageProvider };
export type { Locale };
