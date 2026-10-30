import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_CONFIG, getStructuredData } from "@/lib/seo-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "Nexus Ring | Physical Focus & Productivity Controller",
    template: "%s | Nexus Ring",
  },
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: SITE_CONFIG.founder.name }, { name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.founder.name,
  publisher: SITE_CONFIG.name,
  applicationName: "Nexus Ring",
  category: "technology",
  openGraph: {
    title: "Nexus Ring | Physical Focus & Productivity Controller",
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus Ring | Physical Focus & Productivity Controller",
    description: SITE_CONFIG.description,
    creator: "@nexusring",
    site: "@nexusring",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#080B12",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = getStructuredData();

  return (
    <html
      lang="en"
      className="font-inter font-space-grotesk h-full antialiased"
    >
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs.txt" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" title="Nexus Ring RSS Feed" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#080B12] text-[#F8FAFC] selection:bg-[#FF405A]/30 selection:text-white">
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
