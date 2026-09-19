import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hardware Architecture | High-Performance Workspace Artifact",
  description:
    "Teardown of the Nexus Ring: 6061-T6 aerospace aluminum billet, 4x Hall-effect magnetic flux sensing array, ESP32-C3 RISC-V core, and resonant ceramic damping.",
  keywords: [
    "High-Performance Workspace Artifact",
    "6061-T6 CNC Aluminum",
    "Hall Effect Magnetic Sensor",
    "ESP32-C3 RISC-V",
    "Ceramic Acoustic Damping",
    "Tactile Discipline Engine",
  ],
  alternates: {
    canonical: "/hardware",
  },
  openGraph: {
    title: "Hardware Architecture | High-Performance Workspace Artifact",
    description:
      "Crafted with 5-axis CNC machining, N52 Neodymium magnetic vectors, and sub-1mm spatial accuracy.",
    url: "https://www.nexusring.tech/hardware",
  },
};

export default function HardwareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
