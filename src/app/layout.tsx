import type { Metadata } from "next";

import { Providers } from "@/components/providers";
import { Toaster } from "@/components/ui/sonner";

import "@fontsource-variable/noto-sans-jp";
import "@fontsource-variable/unbounded";

import "./globals.css";

export const metadata: Metadata = {
  title: "Kazyel",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-unbounded bg-darkest flex flex-col antialiased`}>
        <Providers>{children}</Providers>
        <Toaster richColors />
      </body>
    </html>
  );
}
