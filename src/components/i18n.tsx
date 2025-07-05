"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useAtom } from "jotai";
import { localeAtom } from "@/lib/store/language";

interface TranslationsContextType {
  t: (key: string) => string;
  locale: string;
}

const TranslationsContext = createContext<TranslationsContextType | null>(null);

export function TranslationsProvider({
  children,
  initialMessages,
  initialLocale,
}: {
  children: React.ReactNode;
  initialMessages: any;
  initialLocale: string;
}) {
  const [locale, _] = useAtom(localeAtom);
  const [messages, setMessages] = useState(initialMessages);

  useEffect(() => {
    document.cookie = `locale=${locale}; path=/; max-age=${60 * 60 * 24 * 365}`;
  }, [locale]);

  useEffect(() => {
    if (locale !== initialLocale) {
      const loadMessages = async () => {
        try {
          const newMessages = await import(`../lib/i18n/messages/${locale}.json`);
          setMessages(newMessages.default);
        } catch (error) {
          console.error("Failed to load messages:", error);
        }
      };
      loadMessages();
    }
  }, [locale, initialLocale]);

  const t = (key: string) => messages[key] || key;

  return (
    <TranslationsContext.Provider value={{ t, locale }}>
      {children}
    </TranslationsContext.Provider>
  );
}

export function useClientTranslations() {
  const context = useContext(TranslationsContext);
  if (!context) {
    throw new Error("useClientTranslations must be used within TranslationsProvider");
  }
  return context;
}
