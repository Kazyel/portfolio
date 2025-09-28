import type { Metadata } from "next";

import JotaiProvider from "@/components/jotai-provider";
import {
  Crimson_Pro,
  Faculty_Glyphic,
  Lora,
  Merienda,
  Merriweather,
  Noto_Sans_JP,
  Protest_Revolution,
  Ubuntu,
  Unbounded,
} from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import { Toaster } from "@/components/ui/sonner";

import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Kazyel",
  description:
    "Meu portfólio pessoal mostrando meus projetos e minha jornada, com design inspirado na cultura oriental.",
};

const merriweather = Crimson_Pro({
  preload: true,
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: "swap",
});

const jp = Noto_Sans_JP({
  preload: true,
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-jp",
  display: "swap",
});

const unbounded = Unbounded({
  preload: true,
  variable: "--font-unbounded",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <link rel="icon" href="/favicon.ico" sizes="any" />

      <meta property="og:url" content="https://www.kazyel.dev/" />
      <meta property="og:type" content="site" />
      <meta property="og:title" content="Kazyel" />
      <meta
        property="og:description"
        content="Meu portfólio pessoal mostrando meus projetos e minha jornada, com design inspirado na cultura oriental."
      />
      <meta
        property="og:image"
        content="https://www.kazyel.dev/images/og.png"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.kazyel.dev/" />
      <meta name="twitter:title" content="site" />
      <meta
        name="twitter:description"
        content="Meu portfólio pessoal mostrando meus projetos e minha jornada, com design inspirado na cultura oriental."
      />
      <meta
        name="twitter:image"
        content="https://www.kazyel.dev/images/og.png"
      />

      <body
        className={`${jp.variable} ${unbounded.variable} ${merriweather.variable} font-unbounded bg-darkest antialiased`}
      >
        <JotaiProvider>
          <NextIntlClientProvider locale={locale}>
            {children}
          </NextIntlClientProvider>
        </JotaiProvider>
        <Toaster richColors />
      </body>
    </html>
  );
}
