import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hardware Architecture",
  description:
    "Engineering architecture of the Nexus Ring: dual-shell prototype chassis, 4-quadrant Hall-effect magnetic sensor array, ESP32-C3 RISC-V controller, and 360° ambient optical diffuser.",
  keywords: [
    "Nexus Ring Hardware",
    "Hall Effect Magnetic Sensor",
    "ESP32-C3 Controller",
    "Desk Controller Hardware",
    "Calm Technology",
  ],
  alternates: {
    canonical: "/hardware",
  },
  openGraph: {
    title: "Hardware Architecture | Nexus Ring",
    description:
      "Engineering architecture of the Nexus Ring: dual-shell prototype chassis, 4-quadrant Hall-effect magnetic sensor array, ESP32-C3 RISC-V controller, and 360° ambient optical diffuser.",
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
