import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/seo-data";

export const metadata: Metadata = {
  title: "Focus & Discipline Hub: Deep Work Systems, Routines & Digital Well-Being",
  description:
    "A comprehensive evidence-based resource center on deep work systems, habit formation, environmental workspace design, and practical focus strategies for creators and engineers.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/focus`,
  },
  openGraph: {
    title: "Focus & Discipline Resource Hub | Nexus Ring",
    description:
      "Evidence-based frameworks for building self-discipline, deep work routines, environmental focus design, and sustainable digital well-being.",
    url: `${SITE_CONFIG.url}/focus`,
    siteName: SITE_CONFIG.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Focus & Discipline Resource Hub | Nexus Ring",
    description:
      "Evidence-based frameworks for building self-discipline, deep work routines, environmental focus design, and sustainable digital well-being.",
  },
};

export default function FocusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

