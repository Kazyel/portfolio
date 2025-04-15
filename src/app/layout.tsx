import type { Metadata } from "next";

import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  title: "Kazyel",
  description: "My portfolio",
};

import "@fontsource-variable/montserrat";
import "@fontsource-variable/exo-2";
import "@fontsource-variable/lexend";
import "@fontsource-variable/rubik";
import "@fontsource-variable/merriweather-sans";
import "@fontsource-variable/outfit";
import "@fontsource-variable/lora";
import "@fontsource-variable/noto-sans-jp";
// Supports weights 100-900
import "@fontsource-variable/libre-franklin";
// Supports weights 200-900
import "@fontsource-variable/unbounded";

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-merriweather bg-darkest flex flex-col antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
