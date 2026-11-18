import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kickstarter Campaign — Nexus Ring: The Physical Off-Switch for Distractions",
  description:
    "Drop the magnetic totem to launch your work apps and silence distractions across PC, Mac, Linux, Android & iOS. No subscription. Back Nexus Ring on Kickstarter ($39–$199).",
  keywords: [
    "Nexus Ring Kickstarter",
    "The Physical Off-Switch for Distractions",
    "Nexus Ring Rewards",
    "Digital Maker Kit",
    "Physical Intent Computing",
    "Workspace Automation",
  ],
  alternates: {
    canonical: "/campaign",
  },
  openGraph: {
    title: "Kickstarter Campaign — Nexus Ring: The Physical Off-Switch for Distractions",
    description:
      "Drop the magnetic totem to launch your work apps and silence distractions across PC, Mac, Linux, Android & iOS. No subscription.",
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
