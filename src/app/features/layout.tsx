import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Operating Modes & Features",
  description:
    "Explore the four physical operating modes of Nexus Ring: Deep Work, Creative, Meeting, and Break. Connect deliberate physical gestures to custom workspace profiles.",
  keywords: [
    "Nexus Ring Features",
    "Physical Modes",
    "Deep Work Controller",
    "Focus Interface",
    "Workspace Automation",
  ],
  alternates: {
    canonical: "/features",
  },
  openGraph: {
    title: "Operating Modes & Features | Nexus Ring",
    description:
      "Explore the four physical operating modes of Nexus Ring: Deep Work, Creative, Meeting, and Break. Connect deliberate physical gestures to custom workspace profiles.",
    url: "https://www.nexusring.tech/features",
  },
};

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
