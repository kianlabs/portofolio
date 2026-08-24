import Image from "next/image";
import LocalClock from "./LocalClock";

export default function SystemHeader() {
  return (
    <header style={{ backgroundColor: "var(--bg-panel)", borderBottom: "1px solid var(--border)", flexShrink: 0 }}>
      <div className="sys-header-inner">
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Image
            src="/archlinux.svg"
            alt="Arch Linux"
            width={16}
            height={16}
            style={{ filter: "grayscale(1) contrast(1.15)", opacity: 0.9 }}
          />
          <span className="sys-header-title">KYAN.DEV // PERSONAL SYSTEM</span>
        </div>
        <div className="sys-header-meta">
          <LocalClock />
          <span className="header-id">ID: KYAN_01</span>
        </div>
      </div>
    </header>
  );
}
