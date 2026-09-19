import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
  themeColor: "#000000",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
