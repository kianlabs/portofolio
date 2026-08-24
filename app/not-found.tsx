import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100%",
        padding: "40px 24px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: "680px", margin: "0 auto", width: "100%" }}>
        <p className="panic-line" style={{ color: "var(--text-main)", fontWeight: 700, fontSize: "18px", letterSpacing: "0.04em" }}>
          Kernel panic - not syncing: Attempted to kill the page
        </p>
        <div style={{ height: "12px" }} />
        <pre
          aria-hidden="true"
          style={{
            fontSize: "12px",
            lineHeight: 1.7,
            color: "var(--text-dim)",
            whiteSpace: "pre-wrap",
            letterSpacing: "0.02em",
          }}
        >
{`CPU: 7 PID: 404 Comm: not_found
Hardware name: kyan.dev personal system
Call Trace:
  <TASK>
  render_page+0x42/0x88
  find_node+0xd3/0xff (path does not exist)
  navigate+0x1a/0x2b
  kyan_dev_browser_enter+0x5/0x7
  </TASK>
---[ end Kernel panic - not syncing ]---`}
        </pre>
        <div style={{ marginTop: "24px", display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
          <Link href="/" className="sys-btn sys-btn-active">[ REBOOT SYSTEM ]</Link>
          <span style={{ fontSize: "12px", color: "var(--text-dim)", letterSpacing: "0.08em" }}>
            error 404 — reboot returns you home
          </span>
        </div>
      </div>
    </div>
  );
}
