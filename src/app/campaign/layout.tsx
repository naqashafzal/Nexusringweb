import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kickstarter Campaign — Nexus Ring: Physical Switch for You",
  description:
    "Dock the totem. Open your work tools. Restrict distractions across Windows, macOS, Linux, Android & iOS. No subscription. Back Nexus Ring on Kickstarter ($39–$199).",
  keywords: [
    "Nexus Ring Kickstarter",
    "Physical Switch for You",
    "Nexus Ring Rewards",
    "Digital Maker Kit",
    "Physical Intent Computing",
    "Workspace Automation",
  ],
  alternates: {
    canonical: "/campaign",
  },
  openGraph: {
    title: "Kickstarter Campaign — Nexus Ring: Physical Switch for You",
    description:
      "Dock the totem. Open your work tools. Restrict distractions across Windows, macOS, Linux, Android & iOS. No subscription.",
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
