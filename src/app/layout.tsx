import type { Metadata } from "next";

import JotaiProvider from "@/components/jotai";
import { TranslationsProvider } from "@/components/i18n";
import { Toaster } from "@/components/ui/sonner";

import "@fontsource-variable/noto-sans-jp";
import "@fontsource-variable/unbounded";

import "./globals.css";
import { getServerLocale } from "@/lib/i18n/locale";
import { getTranslations } from "@/lib/i18n/translations";

export const metadata: Metadata = {
  title: "Kazyel",
  description: "My portfolio",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getServerLocale();
  const messages = await getTranslations(locale);

  return (
    <html lang={locale}>
      <body className={`font-unbounded bg-darkest antialiased`}>
        <JotaiProvider>
          <TranslationsProvider initialMessages={messages} initialLocale={locale}>
            {children}
          </TranslationsProvider>{" "}
        </JotaiProvider>
        <Toaster richColors />
      </body>
    </html>
  );
}
