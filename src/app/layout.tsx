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
      <meta
        name="description"
        content="Meu portfólio pessoal mostrando meus projetos e minha jornada, com design inspirado na cultura oriental."
      />

      <meta property="og:url" content="https://www.kazyel.dev/" />
      <meta property="og:type" content="site" />
      <meta property="og:title" content="Kazyel" />
      <meta
        property="og:description"
        content="Meu portfólio pessoal mostrando meus projetos e minha jornada, com design inspirado na cultura oriental."
      />
      {/* <meta property="og:image" content="" /> */}

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.kazyel.dev/" />
      <meta name="twitter:title" content="site" />
      <meta
        name="twitter:description"
        content="Meu portfólio pessoal mostrando meus projetos e minha jornada, com design inspirado na cultura oriental."
      />
      {/* <meta name="twitter:image" content=""/> */}

      <body className={`${unbounded.className} bg-darkest antialiased`}>
        <JotaiProvider>
          <NextIntlClientProvider locale={locale}>{children}</NextIntlClientProvider>{" "}
        </JotaiProvider>
        <Toaster richColors />
      </body>
    </html>
  );
}
