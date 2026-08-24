import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "KYAN.DEV // PERSONAL SYSTEM — Ridzkyan, Web Developer";
export const size = { width: 1200, height: 630 };

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#050505",
          padding: 60,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 14,
              height: 14,
              background: "#4a7c59",
              borderRadius: 999,
              display: "flex",
            }}
          />
          <div style={{ color: "#555555", fontSize: 28, letterSpacing: 4 }}>
            SYSTEM ONLINE
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              color: "#D8D8D2",
              fontSize: 96,
              fontWeight: 700,
              letterSpacing: -2,
              display: "flex",
            }}
          >
            KYAN.DEV
          </div>
          <div style={{ color: "#858585", fontSize: 40, display: "flex" }}>
            $ whoami → <span style={{ color: "#4a7c59", marginLeft: 12 }}>Ridzkyan — Web Developer</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #292929",
            paddingTop: 24,
            color: "#555555",
            fontSize: 26,
          }}
        >
          <div style={{ display: "flex" }}>kyandev.vercel.app</div>
          <div style={{ display: "flex" }}>Arch Linux btw</div>
        </div>
      </div>
    ),
    size
  );
}
