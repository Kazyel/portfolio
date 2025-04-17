import type { Metadata } from "next";

import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  title: "Kazyel",
  description: "My portfolio",
};

import "@fontsource-variable/noto-sans-jp";
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
