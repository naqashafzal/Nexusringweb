import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software & Kernel Daemon | Zero-Latency Distraction Elimination",
  description:
    "Native OS webhooks and kernel-level distraction firewall for Windows, macOS, and Linux. Sub-24ms response, air-gapped on-device AI guardian, zero cloud telemetry.",
  keywords: [
    "Distraction Elimination System",
    "Kernel-Level Focus Lock",
    "Air-Gapped AI Guardian",
    "Zero Telemetry Privacy",
    "Windows PowerShell Kernel Hooks",
    "macOS pfctl Distraction Firewall",
  ],
  alternates: {
    canonical: "/software",
  },
  openGraph: {
    title: "Software & Kernel Daemon | Zero-Latency Distraction Elimination",
    description:
      "Native OS kernel hooks fire instantly upon ring placement. 100% air-gapped, zero cloud telemetry.",
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
