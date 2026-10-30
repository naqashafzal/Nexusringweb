import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comparisons & Architecture Matrix",
  description:
    "Compare the Nexus Ring physical controller approach against software app blockers (Opal, Freedom) and traditional desk timers.",
  keywords: [
    "Nexus Ring Comparisons",
    "Nexus Ring vs Opal",
    "Nexus Ring vs Freedom",
    "Nexus Ring vs Pomodoro",
    "Physical Focus Tools",
    "Desk Controller Comparison",
  ],
  alternates: {
    canonical: "/compare",
  },
  openGraph: {
    title: "Comparisons & Architecture Matrix | Nexus Ring",
    description:
      "Compare the Nexus Ring physical controller approach against software app blockers (Opal, Freedom) and traditional desk timers.",
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
