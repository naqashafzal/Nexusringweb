import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Choose Your Nexus Ring Tier — Kickstarter Rewards",
  description:
    "Explore Nexus Ring Kickstarter rewards ($39 Digital Maker Kit, $89 Early Bird, $109 Kickstarter Special, $199 Day & Night Duo Pack). Choose Day (Silver) or Night (Obsidian Black) finish.",
  keywords: [
    "Nexus Ring Kickstarter",
    "Nexus Ring Preorder",
    "Day Silver Nexus Ring",
    "Night Obsidian Black Nexus Ring",
    "Digital Maker Kit",
    "Focus Hardware",
  ],
  alternates: {
    canonical: "/preorder",
  },
  openGraph: {
    title: "Choose Your Nexus Ring Tier — Kickstarter Rewards",
    description:
      "Explore Nexus Ring Kickstarter rewards ($39 Maker Kit, $89 Early Bird, $109 Kickstarter Special, $199 Duo Pack) with lifetime core desktop & mobile apps.",
    url: "https://www.nexusring.tech/preorder",
  },
};

export default function PreorderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
