import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vision & Founder",
  description:
    "The vision behind Nexus Ring: founded by Naqash Afzal to bridge deliberate physical action with digital workspace focus.",
  keywords: [
    "Nexus Ring Vision",
    "Physical Intent Computing",
    "Naqash Afzal",
    "Focus Hardware",
    "Calm Computing",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "Vision & Founder | Nexus Ring",
    description:
      "The vision behind Nexus Ring: founded by Naqash Afzal to bridge deliberate physical action with digital workspace focus.",
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
