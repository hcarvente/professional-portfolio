import type { Metadata } from "next";
import { Geist, Lora } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hernancarvente.com"),
  title: {
    default: "Hernán Carvente Martinez | Social Entrepreneur & AI Builder",
    template: "%s | Hernán Carvente Martinez",
  },
  description:
    "Social entrepreneur, nonprofit executive, leadership-development strategist, and AI builder bridging technology and social impact.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${lora.variable} antialiased`}>
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
