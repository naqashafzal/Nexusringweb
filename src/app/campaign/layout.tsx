import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Development & Campaign Roadmap",
  description:
    "Follow the open development trail of Nexus Ring. Transparent production roadmap, maker CAD files, and planned crowdfunding tiers.",
  keywords: [
    "Nexus Ring Development",
    "Crowdfunding Roadmap",
    "Maker Hardware",
    "Physical Intent Computing",
    "Workspace Automation",
  ],
  alternates: {
    canonical: "/campaign",
  },
  openGraph: {
    title: "Development & Campaign Roadmap | Nexus Ring",
    description:
      "Follow the open development trail of Nexus Ring. Transparent production roadmap, maker CAD files, and planned crowdfunding tiers.",
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
