import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_CONFIG, getStructuredData } from "@/lib/seo-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "Nexus Ring | Bridging the gap between physical intention and digital execution",
    template: "%s | Nexus Ring",
  },
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: SITE_CONFIG.founder.name }, { name: SITE_CONFIG.legalName }],
  creator: SITE_CONFIG.founder.name,
  publisher: SITE_CONFIG.legalName,
  applicationName: "Nexus Ring",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nexus Ring | Bridging the gap between physical intention and digital execution",
    description:
      "Transforming productivity from a software struggle into a tangible, tactile experience. The Nexus Ring acts as a Physical Attention Operating System.",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus Ring | Bridging the gap between physical intention and digital execution",
    description:
      "A physical barrier between you and digital distractions. Accelerate personal success with hardware-locked focus.",
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
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#030508",
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
      className={`font-inter font-space-grotesk h-full antialiased`}
    >
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs.txt" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" title="Nexus Ring RSS Feed" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-vantablack text-[#F8FAFC] selection:bg-accent-500/30 selection:text-accent-400">
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
