import Image from "next/image";
import LocalClock from "./LocalClock";

export default function SystemHeader() {
  return (
    <header style={{ backgroundColor: "var(--bg-panel)", borderBottom: "1px solid var(--border)", flexShrink: 0 }}>
      <div style={{ padding: "5px 12px", display: "flex", alignItems: "center", gap: "14px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Image
            src="/archlinux.svg"
            alt="Arch Linux"
            width={16}
            height={16}
            style={{ filter: "grayscale(1) contrast(1.15)", opacity: 0.9 }}
          />
          <span style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.12em", color: "var(--text-main)", fontFamily: "var(--font-mono)" }}>
            KYAN.DEV // PERSONAL SYSTEM
          </span>
        </div>
        <div style={{ marginLeft: "auto", display: "flex", flexDirection: "row", alignItems: "center", gap: "14px" }}>
          <LocalClock />
          <span style={{ fontSize: "13px", letterSpacing: "0.1em", color: "var(--text-dim)" }}>ID: KYAN_01</span>
        </div>
      </div>
    </header>
  );
}