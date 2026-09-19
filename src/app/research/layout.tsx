import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cognitive Science & Research | Time & Focus Optimization",
  description:
    "Whitepaper and cognitive research on ego depletion mitigation, spatial muscle memory triggers, and tactile intervention in digital addiction. Led by Dr. Evelyn Vance (MIT).",
  keywords: [
    "Time & Focus Optimization",
    "Cognitive Psychology Research",
    "Ego Depletion Mitigation",
    "Spatial Memory Habit Formation",
    "Digital Distraction Science",
  ],
  alternates: {
    canonical: "/research",
  },
  openGraph: {
    title: "Cognitive Science & Research | Time & Focus Optimization",
    description:
      "Why willpower fails and physical consequence succeeds: A scientific investigation into spatial focus anchors.",
    url: "https://www.nexusring.tech/research",
  },
};

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
