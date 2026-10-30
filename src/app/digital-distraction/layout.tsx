import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/seo-data";

export const metadata: Metadata = {
  title: "Digital Distraction: Why Feeds Compete for Your Time & How to Reclaim Focus",
  description:
    "Explore why modern digital platforms and recommendation algorithms compete for your attention, the hidden cognitive cost of task switching, and practical strategies to protect your deep focus.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/digital-distraction`,
  },
  openGraph: {
    title: "Digital Distraction: How to Reclaim Your Attention | Nexus Ring",
    description:
      "Understand how feeds, notifications, and engagement-driven design compete for your attention, and explore practical ways to protect your focus.",
    url: `${SITE_CONFIG.url}/digital-distraction`,
    siteName: SITE_CONFIG.name,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Distraction: How to Reclaim Your Attention | Nexus Ring",
    description:
      "Understand how feeds, notifications, and engagement-driven design compete for your attention, and explore practical ways to protect your focus.",
  },
};

export default function DigitalDistractionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
