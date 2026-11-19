import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kickstarter — Nexus Ring: Less Scroll. More Life.",
  description:
    "You're not lazy — the system is designed to steal your focus. Nexus Ring is a physical off-switch on your desk that fights for your freedom across PC, Mac, Linux & phone. Zero subscriptions. Back from $5.",
  keywords: [
    "Nexus Ring Kickstarter",
    "Less Scroll More Life",
    "Physical Off-Switch for Distractions",
    "ADHD Focus Tool",
    "Digital Maker Kit",
    "Zero Subscription Focus Blocker",
  ],
  alternates: {
    canonical: "/campaign",
  },
  openGraph: {
    title: "Nexus Ring — It's a System Built to Fight for Your Freedom",
    description:
      "You're not lazy — the system is designed to steal your focus. Drop the magnetic totem on your desk to lock in deep work with zero subscriptions. Live on Kickstarter.",
    url: "https://www.nexusring.tech/campaign",
    images: [{ url: "/images/kickstarter/ks-fight-for-freedom.jpg", width: 1024, height: 576, alt: "Nexus Ring — Fight for Your Freedom" }],
  },
};

export default function CampaignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
