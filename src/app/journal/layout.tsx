import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/seo-data";

export const metadata: Metadata = {
  title: "Focus Journal | Deep Work, Behavioral Science & Attention Economics",
  description:
    "Explore in-depth articles, behavioral research, and engineering insights on reclaiming human attention, habit loops, and designing distraction-free workspaces.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/journal`,
  },
  openGraph: {
    title: "The Focus Journal | Nexus Ring",
    description:
      "Research, ideas, and practical systems for reclaiming attention in a distracted world.",
    url: `${SITE_CONFIG.url}/journal`,
    siteName: SITE_CONFIG.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Focus Journal | Nexus Ring",
    description:
      "Research, ideas, and practical systems for reclaiming attention in a distracted world.",
  },
};

export default function JournalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
