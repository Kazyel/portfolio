import type { Metadata } from "next";

import { Providers } from "@/components/providers";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kazyel",
  description: "My portfolio",
};

import "@fontsource-variable/montserrat";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`relative font-mont flex flex-col antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
