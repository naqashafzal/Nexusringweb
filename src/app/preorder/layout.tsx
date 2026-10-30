import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Early Access Registration",
  description:
    "Register interest for Nexus Ring early access. Follow prototype milestones and receive early backer notification with no payment required.",
  keywords: [
    "Nexus Ring Early Access",
    "Physical Workspace Controller",
    "Focus Hardware",
    "Waitlist Registration",
    "Prototype Updates",
  ],
  alternates: {
    canonical: "/preorder",
  },
  openGraph: {
    title: "Early Access Registration | Nexus Ring",
    description:
      "Register interest for Nexus Ring early access. Follow prototype milestones and receive early backer notification with no payment required.",
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
