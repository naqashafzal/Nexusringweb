import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crowdfunding Campaign | Back the Discipline Engine",
  description:
    "Join early backers in bringing the Nexus Ring to life. Pledge tiers from $15 DIY Maker kit with official 3MF print profiles to the fully assembled V1 3D-printed artifact.",
  keywords: [
    "Success & Discipline Engine",
    "Nexus Ring MakeWorld",
    "Crowdfunding Campaign",
    "3D Printed Focus Tool",
    "High-Performance Workspace Artifact",
    "Pre-Order Nexus Ring",
  ],
  alternates: {
    canonical: "/campaign",
  },
  openGraph: {
    title: "Crowdfunding Campaign | Back the Discipline Engine",
    description:
      "Protect your potential and back the physical discipline engine built for deep work.",
    url: "https://www.nexusring.tech/campaign",
  },
};

export default function CampaignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
