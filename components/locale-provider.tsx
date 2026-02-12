"use client";

import { useState, type ReactNode } from "react";
import { LocaleContext, defaultLocale, getDictionary, type Locale } from "@/lib/i18n";

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(defaultLocale);
  const t = getDictionary(locale);  

  return (
    <LocaleContext value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext>
  );
}
