import { ImageResponse } from "next/og";

export const alt = "Nexus Ring | Physical Intent. Digital Execution.";
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
          backgroundColor: "#030508",
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
            background: "radial-gradient(circle, rgba(0, 255, 157, 0.25) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-150px",
            left: "-50px",
            width: "450px",
            height: "450px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0, 229, 255, 0.2) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />

        {/* Top Header Badge */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              backgroundColor: "#00FF9D",
              boxShadow: "0 0 24px #00FF9D",
            }}
          />
          <span
            style={{
              fontSize: "24px",
              fontWeight: 800,
              letterSpacing: "4px",
              color: "#FFFFFF",
            }}
          >
            NEXUS RING
          </span>
          <span
            style={{
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "2px",
              color: "#00FF9D",
              border: "1px solid rgba(0, 255, 157, 0.4)",
              backgroundColor: "rgba(0, 255, 157, 0.08)",
              padding: "6px 14px",
              borderRadius: "9999px",
              textTransform: "uppercase",
              marginLeft: "12px",
            }}
          >
            Physical Intent. Digital Execution.
          </span>
        </div>

        {/* Main Hook & Value Proposition */}
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
            ONE PHYSICAL ACTION.<br/>
            <span style={{ color: "#00FF9D" }}>YOUR DIGITAL WORLD CHANGES WITH YOU.</span>
          </h1>
          <p
            style={{
              fontSize: "24px",
              fontWeight: 400,
              lineHeight: 1.4,
              color: "#94A3B8",
              margin: 0,
            }}
          >
            Drop the Nexus Totem into a mode and your workspace automatically adapts.
          </p>
        </div>

        {/* Bottom Metrics Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #151D2A",
            paddingTop: "28px",
          }}
        >
          <div style={{ display: "flex", gap: "40px" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p style={{ fontSize: "14px", color: "#64748B", margin: 0, textTransform: "uppercase", letterSpacing: "1px" }}>
                Modes
              </p>
              <p style={{ fontSize: "22px", fontWeight: 700, color: "#00FF9D", margin: 0 }}>4 Physical States</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p style={{ fontSize: "14px", color: "#64748B", margin: 0, textTransform: "uppercase", letterSpacing: "1px" }}>
                Execution
              </p>
              <p style={{ fontSize: "22px", fontWeight: 700, color: "#FFFFFF", margin: 0 }}>Local-First</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p style={{ fontSize: "14px", color: "#64748B", margin: 0, textTransform: "uppercase", letterSpacing: "1px" }}>
                Automation
              </p>
              <p style={{ fontSize: "22px", fontWeight: 700, color: "#00E5FF", margin: 0 }}>Desktop OS Integrations</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p style={{ fontSize: "14px", color: "#64748B", margin: 0, textTransform: "uppercase", letterSpacing: "1px" }}>
                Status
              </p>
              <p style={{ fontSize: "22px", fontWeight: 700, color: "#B026FF", margin: 0 }}>Early Access</p>
            </div>
          </div>
          <span style={{ fontSize: "18px", color: "#64748B", letterSpacing: "1px" }}>nexusring.tech</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
