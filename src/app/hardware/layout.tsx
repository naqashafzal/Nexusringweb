import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hardware Architecture | High-Performance Workspace Artifact",
  description:
    "Teardown of the Nexus Ring: Precision 3D-printed V1 chassis (with Bambu Lab & Prusa 3MF profiles), 4x Hall-effect magnetic flux sensing array, ESP32-C3 RISC-V core, and resonant ceramic damping.",
  keywords: [
    "High-Performance Workspace Artifact",
    "3D-Printed Focus Artifact",
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
      "Engineered with sub-millimeter 3D printing tolerances, N52 Neodymium magnetic vectors, and sub-1mm spatial accuracy.",
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
