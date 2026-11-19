import type { Metadata, Viewport } from "next";
import { Audiowide } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_CONFIG, getStructuredData } from "@/lib/seo-data";
import "./globals.css";

const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-audiowide",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "Nexus Ring — Less Scroll. More Life.",
    template: "%s | Nexus Ring",
  },
  description:
    "You're not lazy — the system is designed to steal your focus. Nexus Ring is the physical off-switch on your desk that fights for your freedom across PC, Mac, Linux & phone. Zero subscriptions.",
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: SITE_CONFIG.founder.name }, { name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.founder.name,
  publisher: SITE_CONFIG.name,
  applicationName: "Nexus Ring",
  category: "technology",
  openGraph: {
    title: "Nexus Ring — Less Scroll. More Life.",
    description:
      "It's not just a device. It's a system built to fight for your freedom. Drop the magnetic totem to silence Shorts & feeds across PC, Mac, Linux & phone. Zero subscriptions.",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: "en_US",
    type: "website",
    images: [{ url: "/images/kickstarter/ks-fight-for-freedom.jpg", width: 1024, height: 576, alt: "Nexus Ring — Fight for Your Freedom" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus Ring — Less Scroll. More Life.",
    description:
      "It's not just a device. It's a system built to fight for your freedom. Zero subscriptions. Live on Kickstarter.",
    creator: "@Nexusringtech",
    site: "@Nexusringtech",
    images: ["/images/kickstarter/ks-fight-for-freedom.jpg"],
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
  themeColor: "#080A0E",
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
      data-theme="night"
      suppressHydrationWarning
      className={`${audiowide.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('nexus-theme');if(t==='day'||t==='night'){document.documentElement.dataset.theme=t;}}catch(e){}})();`,
          }}
        />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs.txt" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" title="Nexus Ring RSS Feed" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#080A0E] text-[#F5F6F8] selection:bg-[#D83A50]/25 selection:text-white">
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
