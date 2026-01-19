"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useTransition } from "react";
import { useRouter } from "next/navigation";

export type Locale = "en" | "ko";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  isPending: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "ko";

  const cookieLocale = document.cookie
    .split("; ")
    .find((row) => row.startsWith("locale="))
    ?.split("=")[1];

  return (cookieLocale as Locale) || "ko";
}

interface LanguageProviderProps {
  children: ReactNode;
  initialLocale?: Locale;
}

export function LanguageProvider({ children, initialLocale }: LanguageProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale || "ko");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  useEffect(() => {
    const initial = getInitialLocale();
    setLocaleState(initial);
  }, []);

  const setLocale = (newLocale: Locale) => {
    document.cookie = `locale=${newLocale};path=/;max-age=31536000`;
    setLocaleState(newLocale);
    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, isPending }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
