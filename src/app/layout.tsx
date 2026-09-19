import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  title: "Nexus Ring | Stop Distractions. Anchor Your Mind.",
  description: "A high-end, interactive tech-art piece designed to fracture the loop of digital distraction. Modular, beautifully machined, and built for ultimate focus.",
  keywords: ["Nexus Ring", "Productivity Tool", "Desk Accessory", "ADHD Tech", "Minimalist Design", "Tech Art", "Focus Timer"],
  authors: [{ name: "Nexus" }],
  openGraph: {
    title: "Nexus Ring | Anchor Your Mind.",
    description: "The modern workspace is designed to fracture your focus. The Nexus Ring is the physical intervention you need.",
    url: "https://www.nexusring.tech",
    siteName: "Nexus Ring",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus Ring | Anchor Your Mind.",
    description: "A high-end, interactive tech-art piece designed to fracture the loop of digital distraction.",
  },
};

export const viewport: Viewport = {
  themeColor: "#030508",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#030508] text-[#F8FAFC] selection:bg-emerald-500/30 selection:text-emerald-400">
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
