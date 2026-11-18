import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press Kit & Media Assets — Nexus Ring",
  description:
    "Official press fact sheet, real working prototype photos, live app recording GIFs, production design visuals, and brand logos for Nexus Ring: The Physical Off-Switch for Distractions.",
  keywords: [
    "Nexus Ring Press Kit",
    "Nexus Ring Media Assets",
    "Kickstarter Gadgets Press",
    "Physical Focus Switch",
  ],
  alternates: {
    canonical: "/press",
  },
  openGraph: {
    title: "Press Kit & Media Assets | Nexus Ring",
    description:
      "Official press fact sheet, real prototype photos, live demo GIFs, and reward details for Nexus Ring on Kickstarter.",
    url: "https://www.nexusring.tech/press",
  },
};

export default function PressLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
