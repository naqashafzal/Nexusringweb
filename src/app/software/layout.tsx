import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nexus Companion Software",
  description:
    "Nexus Companion desktop software connects physical totem mode selections to local workspace automations for Windows, macOS, and Linux.",
  keywords: [
    "Nexus Companion",
    "Desktop Workspace Daemon",
    "Local Automation",
    "Productivity Software",
    "Focus Automation",
  ],
  alternates: {
    canonical: "/software",
  },
  openGraph: {
    title: "Nexus Companion Software | Nexus Ring",
    description:
      "Nexus Companion desktop software connects physical totem mode selections to local workspace automations for Windows, macOS, and Linux.",
    url: "https://www.nexusring.tech/software",
  },
};

export default function SoftwareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
