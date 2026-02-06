import React from "react"
import type { Metadata, Viewport } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import { LocaleProvider } from "@/components/locale-provider";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

const _manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
});
const _jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "MP Vision | Дигитална агенция",
  description:
    "Изграждаме високопроизводителни уебсайтове, създаваме кинематографично видео съдържание и оптимизираме SMMA профили. Трансформирайте дигиталното си присъствие с MP Vision.",
};

export const viewport: Viewport = {
  themeColor: "#03FA6E",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${_manrope.variable} ${_jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LocaleProvider>{children}</LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
