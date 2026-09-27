import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pre-Order Nexus Ring | Protect Your Potential",
  description:
    "Reserve your Nexus Ring Batch 01. A Physical Attention Operating System built to protect your focus and environment.",
  keywords: [
    "Protect Your Potential",
    "Pre-Order Nexus Ring",
    "Time & Focus Optimization",
    "High-Performance Workspace Artifact",
    "Batch 01 Reservation",
  ],
  alternates: {
    canonical: "/preorder",
  },
  openGraph: {
    title: "Pre-Order Nexus Ring | Protect Your Potential",
    description:
      "Lock in your Batch 01 reservation. Eliminate distractions and achieve higher quality output in a fraction of the time.",
    url: "https://www.nexusring.tech/preorder",
  },
};

export default function PreorderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
