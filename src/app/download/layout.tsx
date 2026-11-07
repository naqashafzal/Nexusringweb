import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download Nexus Ring Core Engine | Windows & Android",
  description:
    "Download the official Nexus Ring Core Engine for Windows 10/11 and Android companion app. 100% offline, zero-latency desktop orchestration.",
  keywords: [
    "Download Nexus Ring",
    "Nexus Ring Windows Setup",
    "Nexus Ring APK",
    "Desktop Focus Daemon",
    "Tangible Productivity Software",
    "Hardware Focus Controller",
  ],
  alternates: {
    canonical: "/download",
  },
  openGraph: {
    title: "Download Nexus Ring Core Engine | Windows & Android",
    description:
      "Physical focus meets zero-latency desktop orchestration. Download the official installer for Windows 10/11 and Android companion app.",
    url: "https://www.nexusring.tech/download",
  },
};

export default function DownloadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
