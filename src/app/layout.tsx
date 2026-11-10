import type { Metadata } from "next";
import { Geist, Lora } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { identity } from "@/data/portfolio";
import { siteUrl } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: `${identity.name} — Professional Portfolio`,
  title: {
    default: "Hernán Carvente Martinez | Social Entrepreneur & AI Builder",
    template: "%s | Hernán Carvente Martinez",
  },
  description:
    "Social entrepreneur, nonprofit executive, leadership-development strategist, and AI builder bridging technology and social impact.",
  authors: [{ name: identity.name }],
  creator: identity.name,
  publisher: identity.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: `${identity.name} — Professional Portfolio`,
    title: "Hernán Carvente Martinez | Social Entrepreneur & AI Builder",
    description:
      "Technology, nonprofit leadership, responsible AI, and social-impact work grounded in lived expertise.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hernán Carvente Martinez | Social Entrepreneur & AI Builder",
    description:
      "Technology, nonprofit leadership, responsible AI, and social-impact work grounded in lived expertise.",
  },
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
