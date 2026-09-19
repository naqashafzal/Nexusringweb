import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crowdfunding Campaign | Back the Discipline Engine",
  description:
    "Join over 450 early backers in funding the Nexus Ring. 452% funded with over $45,000 raised. Pledge tiers from $15 DIY Maker kit to $129 Founder's Artifact.",
  keywords: [
    "Success & Discipline Engine",
    "Nexus Ring Kickstarter",
    "Crowdfunding Campaign",
    "Founder's Artifact",
    "High-Performance Workspace Artifact",
    "Pre-Order Nexus Ring",
  ],
  alternates: {
    canonical: "/campaign",
  },
  openGraph: {
    title: "Crowdfunding Campaign | Back the Discipline Engine",
    description:
      "452% funded. Protect your potential and back the physical discipline engine built for deep work.",
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
