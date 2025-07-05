import type { Metadata } from "next";

import JotaiProvider from "@/components/jotai-provider";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import { Toaster } from "@/components/ui/sonner";

import "@fontsource-variable/noto-sans-jp";
import "@fontsource-variable/unbounded";

import "./globals.css";

export const metadata: Metadata = {
  title: "Kazyel",
  description: "My portfolio",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body className={`font-unbounded bg-darkest antialiased`}>
        <JotaiProvider>
          <NextIntlClientProvider locale={locale}>{children}</NextIntlClientProvider>{" "}
        </JotaiProvider>
        <Toaster richColors />
      </body>
    </html>
  );
}
