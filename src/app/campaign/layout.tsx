import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hardware Roadmap & Early Access — Nexus Ring: Less Scroll. More Life.",
  description:
    "You're not lazy — the system is designed to steal your focus. Nexus Ring is a physical off-switch on your desk that fights for your freedom across PC, Mac, Linux & phone. Zero subscriptions. Join early access waitlist.",
  keywords: [
    "Nexus Ring Early Access",
    "Nexus Ring Waitlist",
    "Less Scroll More Life",
    "Physical Off-Switch for Distractions",
    "ADHD Focus Tool",
    "Digital Maker Kit",
    "Zero Subscription Focus Blocker",
    "Nexus Ring Focus Switch",
  ],
  alternates: {
    canonical: "/campaign",
  },
  openGraph: {
    title: "Nexus Ring — It's a System Built to Fight for Your Freedom",
    description:
      "You're not lazy — the system is designed to steal your focus. Drop the magnetic totem on your desk to lock in deep work with zero subscriptions. Early access waitlist open.",
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
