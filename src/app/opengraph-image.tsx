import { ImageResponse } from "next/og";

export const alt = "Nexus Ring | One physical move. Your workspace follows.";
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
          backgroundColor: "#080B12",
          padding: "64px 72px",
          fontFamily: "system-ui, sans-serif",
          color: "#F8FAFC",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow Effects */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255, 64, 90, 0.2) 0%, transparent 70%)",
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
              border: "4px solid #FF405A",
            }}
          />
          <span
            style={{
              fontSize: "24px",
              fontWeight: 800,
              letterSpacing: "3px",
              color: "#FFFFFF",
            }}
          >
            NEXUS RING
          </span>
          <span
            style={{
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "2px",
              color: "#FF405A",
              border: "1px solid rgba(255, 64, 90, 0.4)",
              backgroundColor: "rgba(255, 64, 90, 0.08)",
              padding: "6px 14px",
              borderRadius: "9999px",
              textTransform: "uppercase",
              marginLeft: "12px",
            }}
          >
            Physical Intent Computing
          </span>
        </div>

        {/* Main Headline & Value Proposition */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "980px" }}>
          <h1
            style={{
              fontSize: "58px",
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-2px",
              color: "#FFFFFF",
              margin: 0,
            }}
          >
            ONE PHYSICAL MOVE.<br />
            <span style={{ color: "#A5AFBF" }}>YOUR WORKSPACE FOLLOWS.</span>
          </h1>
          <p
            style={{
              fontSize: "24px",
              fontWeight: 400,
              lineHeight: 1.4,
              color: "#A5AFBF",
              margin: 0,
            }}
          >
            A desk-based physical interface designed to connect deliberate intention with digital workspace automation.
          </p>
        </div>

        {/* Bottom Metrics Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #283141",
            paddingTop: "28px",
          }}
        >
          <div style={{ display: "flex", gap: "48px" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p style={{ fontSize: "12px", color: "#64748B", margin: 0, textTransform: "uppercase", letterSpacing: "1px" }}>
                Modes
              </p>
              <p style={{ fontSize: "20px", fontWeight: 700, color: "#FF405A", margin: 0 }}>4 Dedicated States</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p style={{ fontSize: "12px", color: "#64748B", margin: 0, textTransform: "uppercase", letterSpacing: "1px" }}>
                Sensing
              </p>
              <p style={{ fontSize: "20px", fontWeight: 700, color: "#FFFFFF", margin: 0 }}>Contactless Hall-Effect</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p style={{ fontSize: "12px", color: "#64748B", margin: 0, textTransform: "uppercase", letterSpacing: "1px" }}>
                Execution
              </p>
              <p style={{ fontSize: "20px", fontWeight: 700, color: "#FFFFFF", margin: 0 }}>Local-First Daemon</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p style={{ fontSize: "12px", color: "#64748B", margin: 0, textTransform: "uppercase", letterSpacing: "1px" }}>
                Status
              </p>
              <p style={{ fontSize: "20px", fontWeight: 700, color: "#35C98A", margin: 0 }}>In Development</p>
            </div>
          </div>
          <span style={{ fontSize: "16px", color: "#64748B", letterSpacing: "1px", fontFamily: "monospace" }}>
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
