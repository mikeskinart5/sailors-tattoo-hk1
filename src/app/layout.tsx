import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SAILORS — Tattoo Studio · Hong Kong",
  description:
    "Sailors Tattoo HK — A Hong Kong-based custom tattoo studio by Mike Skinart, a former seafarer who sailed across the world. Specializing in tribal & pattern designs, portraits, black & grey realism, and color realism.",
  keywords: [
    "Sailors Tattoo HK",
    "Mike Skinart",
    "tattoo Hong Kong",
    "tribal tattoo",
    "realism tattoo",
    "black and grey tattoo",
    "color realism",
    "Tung Chung tattoo",
    "custom tattoo",
  ],
  authors: [{ name: "Mike Skinart" }],
  icons: {
    icon: "/black-cat-logo.png",
  },
  openGraph: {
    title: "SAILORS — Tattoo Studio · Hong Kong",
    description:
      "A custom tattoo studio by Mike Skinart — a dreamer who once sailed across the world and fell in love with ink.",
    url: "https://sailorstattoohk.wordpress.com",
    siteName: "Sailors Tattoo HK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SAILORS — Tattoo Studio · Hong Kong",
    description:
      "Custom tattoo studio in Hong Kong by Mike Skinart. Tribal, portraits, black & grey realism, color realism.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground selection:bg-white selection:text-black">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
