import { ImageResponse } from "next/og";

export const alt = "Nexus Ring | Reclaim Your Attention. Force Your Focus.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#080A0E",
          padding: "64px 72px",
          fontFamily: "system-ui, sans-serif",
          color: "#F5F6F8",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle Glow Effects */}
        <div
          style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(216, 58, 80, 0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Top Header Badge */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <div
          style={{
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            border: "4px solid #D83A50",
          }}
        />
        <span
          style={{
            fontSize: "24px",
            fontWeight: 800,
            letterSpacing: "3px",
            color: "#F5F6F8",
          }}
        >
          NEXUS RING
        </span>
        <span
          style={{
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "2px",
            color: "#D83A50",
            border: "1px solid rgba(216, 58, 80, 0.35)",
            backgroundColor: "rgba(216, 58, 80, 0.08)",
            padding: "6px 14px",
            borderRadius: "9999px",
            textTransform: "uppercase",
            marginLeft: "12px",
          }}
        >
          Physical Intent Interface
        </span>
      </div>

      {/* Main Headline & Value Proposition */}
      <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "980px" }}>
        <h1
          style={{
            fontSize: "56px",
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: "-2px",
            color: "#F5F6F8",
            margin: 0,
          }}
        >
          FORCE YOUR FOCUS.<br />
          <span style={{ color: "#A5AFBD" }}>ENGINEER SUCCESS.</span>
        </h1>
        <p
          style={{
            fontSize: "22px",
            fontWeight: 400,
            lineHeight: 1.4,
            color: "#A5AFBD",
            margin: 0,
          }}
        >
          A desk-based physical interface designed to connect deliberate physical actions with digital workspace automation.
        </p>
      </div>

      {/* Bottom Metrics Bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "1px solid #303A48",
          paddingTop: "28px",
        }}
      >
        <div style={{ display: "flex", gap: "48px" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p style={{ fontSize: "12px", color: "#778292", margin: 0, textTransform: "uppercase", letterSpacing: "1px" }}>
              Modes
            </p>
            <p style={{ fontSize: "20px", fontWeight: 700, color: "#D83A50", margin: 0 }}>4 Intent States</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p style={{ fontSize: "12px", color: "#778292", margin: 0, textTransform: "uppercase", letterSpacing: "1px" }}>
              Sensing
            </p>
            <p style={{ fontSize: "20px", fontWeight: 700, color: "#F5F6F8", margin: 0 }}>Contactless Hall-Effect</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p style={{ fontSize: "12px", color: "#778292", margin: 0, textTransform: "uppercase", letterSpacing: "1px" }}>
              Architecture
            </p>
            <p style={{ fontSize: "20px", fontWeight: 700, color: "#F5F6F8", margin: 0 }}>Local-First Daemon</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p style={{ fontSize: "12px", color: "#778292", margin: 0, textTransform: "uppercase", letterSpacing: "1px" }}>
              Stage
            </p>
            <p style={{ fontSize: "20px", fontWeight: 700, color: "#35C98A", margin: 0 }}>Functional Prototype</p>
          </div>
        </div>
        <span style={{ fontSize: "16px", color: "#778292", letterSpacing: "1px", fontFamily: "monospace" }}>
          nexusring.tech
        </span>
      </div>
    </div>
  ),
  {
    ...size,
  }
);
}
