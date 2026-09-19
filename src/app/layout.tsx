import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_CONFIG, getStructuredData } from "@/lib/seo-data";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "Nexus Ring | The Physical Discipline Engine for Unbreakable Focus & Success",
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
    title: "Nexus Ring | The Physical Discipline Engine for Unbreakable Focus",
    description:
      "The Nexus Ring is a physical discipline engine built to accelerate your personal success. Force your focus, save your time, and engineer your own success.",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus Ring | The Physical Discipline Engine",
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
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs.txt" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#030508] text-[#F8FAFC] selection:bg-emerald-500/30 selection:text-emerald-400">
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
