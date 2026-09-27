import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comparisons & Alternatives | Physical Anchor vs Software Blockers",
  description:
    "See how the Nexus Ring Physical Attention Operating System compares to digital app blockers (Opal, Freedom), passive Pomodoro timers, and NFC phone lockers.",
  keywords: [
    "Nexus Ring Alternatives",
    "Nexus Ring vs Opal",
    "Nexus Ring vs Freedom",
    "Nexus Ring vs Pomodoro Timer",
    "Best Physical Focus Tools",
    "Hardware Distraction Elimination",
    "ADHD Desk Focus Artifact",
  ],
  alternates: {
    canonical: "/compare",
  },
  openGraph: {
    title: "Nexus Ring Comparisons & Competitor Matrix",
    description:
      "Physical consequence vs digital friction. Discover why top software engineers and founders replace app blockers with the Nexus Ring.",
    url: "https://www.nexusring.tech/compare",
  },
};

export default function CompareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
