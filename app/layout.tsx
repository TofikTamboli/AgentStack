import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter_Tight } from "next/font/google";

import { Navbar } from "@/components/navigation/Navbar";
import { constructMetadata } from "@/config/seo";
import { generateOrganizationSchema, generateWebSiteSchema } from "@/utils/seo";

import { AppProviders } from "./providers";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = constructMetadata();

export const viewport: Viewport = {
  themeColor: "#F5F5F5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebSiteSchema();

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`light ${interTight.variable} ${instrumentSerif.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema]),
          }}
        />
      </head>
      <body
        className="min-h-screen bg-[#F5F5F5] font-sans antialiased text-[#0F0F11]"
        suppressHydrationWarning
      >
        <AppProviders>
          <Navbar />
          <main className="relative flex min-h-screen flex-col">
            {children}
          </main>
          <Analytics />
          <SpeedInsights />
        </AppProviders>
      </body>
    </html>
  );
}
