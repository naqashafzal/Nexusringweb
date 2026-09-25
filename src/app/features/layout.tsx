import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flow State Catalyst & Features",
  description:
    "Explore the 4 spatial focus modes of the Nexus Ring: Deep Work Protocol, Meeting Isolation, Creative Flow, and Cognitive Reset. Built for time and focus optimization.",
  keywords: [
    "Flow State Catalyst",
    "Distraction Elimination System",
    "Deep Work Protocol",
    "Spatial Memory Focus",
    "Kernel-Level Focus Lock",
    "ADHD Workspace Hardware",
  ],
  alternates: {
    canonical: "/features",
  },
  openGraph: {
    title: "Flow State Catalyst & Features | Nexus Ring",
    description:
      "4 physical modes to ruthlessly eliminate digital distractions and anchor your mind into deep work.",
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
