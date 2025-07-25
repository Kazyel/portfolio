import type { Metadata } from "next";

import JotaiProvider from "@/components/jotai-provider";
import { Unbounded } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import { Toaster } from "@/components/ui/sonner";

import "./globals.css";

export const metadata: Metadata = {
  title: "Kazyel",
  description: "My portfolio",
};

const unbounded = Unbounded({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body className={`${unbounded.className} bg-darkest antialiased`}>
        <JotaiProvider>
          <NextIntlClientProvider locale={locale}>{children}</NextIntlClientProvider>{" "}
        </JotaiProvider>
        <Toaster richColors />
      </body>
    </html>
  );
}
