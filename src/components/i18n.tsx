"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useAtom } from "jotai";
import { localeAtom } from "@/lib/store/language";

interface TranslationsContextType {
  t: (key: string) => string;
  locale: string;
  isLoading: boolean;
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
  const [locale, setLocale] = useAtom(localeAtom);
  const [messages, setMessages] = useState(initialMessages);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.cookie = `locale=${locale}; path=/; max-age=${60 * 60 * 24 * 365}`;
  }, [locale]);

  useEffect(() => {
    if (locale !== initialLocale) {
      setIsLoading(true);
      const loadMessages = async () => {
        try {
          const newMessages = await import(`../lib/i18n/messages/${locale}.json`);
          setMessages(newMessages.default);
        } catch (error) {
          console.error("Failed to load messages:", error);
        } finally {
          setIsLoading(false);
        }
      };
      loadMessages();
    }
  }, [locale, initialLocale]);

  const t = (key: string) => messages[key] || key;

  return (
    <TranslationsContext.Provider value={{ t, locale, isLoading }}>
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
