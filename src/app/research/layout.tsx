import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research & Design Principles",
  description:
    "Design principles, environmental psychology hypotheses, and behavioral research guiding the development of Nexus Ring.",
  keywords: [
    "Nexus Ring Research",
    "Cognitive Ergonomics",
    "Physical Intent Computing",
    "Environmental Cues",
    "Workflow Design",
  ],
  alternates: {
    canonical: "/research",
  },
  openGraph: {
    title: "Research & Design Principles | Nexus Ring",
    description:
      "Design principles, environmental psychology hypotheses, and behavioral research guiding the development of Nexus Ring.",
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
