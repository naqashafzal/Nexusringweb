import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vision & Founder | The Discipline Engine",
  description:
    "Meet the visionary behind Nexus Desktop Art Inc. Founded by Naqash Afzal with a single obsession: engineering physical artifacts that accelerate human potential and discipline.",
  keywords: [
    "Success & Discipline Engine",
    "Nexus Ring Founder",
    "Naqash Afzal",
    "High-Performance Workspace Artifact",
    "Nexus Desktop Art Inc",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "Vision & Founders | The Discipline Engine",
    description:
      "Engineering the tools that turn personal discipline from a daily struggle into an effortless physical ritual.",
    url: "https://www.nexusring.tech/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
