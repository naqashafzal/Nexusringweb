import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nexus Ring Hardware | Magnetic Focus Controller",
  description:
    "Explore the engineering behind Nexus Ring, including magnetic position sensing, ESP32-C3 prototype architecture, and tactile workspace control.",
  keywords: [
    "Nexus Ring Hardware",
    "Magnetic Focus Controller",
    "Hall Effect Magnetic Sensor",
    "ESP32-C3 Controller",
    "Desk Controller Hardware",
    "Calm Technology",
  ],
  alternates: {
    canonical: "https://www.nexusring.tech/hardware",
  },
  openGraph: {
    title: "Nexus Ring Hardware | Magnetic Focus Controller",
    description:
      "Explore the engineering behind Nexus Ring, including magnetic position sensing, ESP32-C3 prototype architecture, and tactile workspace control.",
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
