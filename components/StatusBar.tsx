import SystemUptime from "./SystemUptime";

export default function StatusBar() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        backgroundColor: "var(--bg-panel)",
        padding: "6px 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexShrink: 0,
      }}
      role="contentinfo"
    >
      <span style={{ fontSize: "14px", letterSpacing: "0.12em", color: "var(--text-dim)", display: "flex", alignItems: "center", gap: "6px" }}>
        <span className="status-dot" />
        SYSTEM: ONLINE
      </span>
      <span className="hidden md:block" style={{ fontSize: "14px", letterSpacing: "0.14em", color: "var(--text-dim)" }}>
        git: main
      </span>
      <div className="flex items-center gap-4">
        <span className="hidden md:block" style={{ fontSize: "14px", letterSpacing: "0.06em", color: "var(--text-dim)" }}>
          TypeScript · UTF-8 · LF
        </span>
        <SystemUptime />
        <span style={{ fontSize: "14px", letterSpacing: "0.06em", color: "var(--text-dim)" }}>
          © 2026 RIDZKYAN
        </span>
      </div>
    </footer>
  );
}
