import PageTransition from "@/components/PageTransition";
import SectionHeader from "@/components/SectionHeader";
import { labItems } from "@/lib/lab";

const categoryColors: Record<string, string> = {
  CONFIG: "var(--text-dim)",
  UI: "var(--text-dim)",
  TOOL: "var(--text-dim)",
  EXPERIMENT: "var(--text-dim)",
  "OPEN SOURCE": "var(--text-dim)",
};

export default function LabPage() {
  return (
    <PageTransition>
      <div style={{ padding: "20px 20px", margin: "0 auto", width: "100%" }}>
        <div style={{ marginBottom: "14px" }}>
          <span style={{ fontSize: "14px", letterSpacing: "0.14em", color: "var(--text-dim)" }}>DIRECTORY / LAB</span>
        </div>

        <div style={{ marginBottom: "14px" }}>
          <h1 style={{ fontSize: "19px", fontWeight: 700, letterSpacing: "0.12em", color: "var(--text-main)", marginBottom: "4px" }}>
            KYAN LABORATORY
          </h1>
          <p style={{ fontSize: "15px", color: "var(--text-dim)", letterSpacing: "0.1em" }}>EXPERIMENTAL NODES</p>
        </div>

        {/* note */}
        <div style={{ border: "1px solid var(--border)", padding: "12px 16px", marginBottom: "14px", backgroundColor: "var(--bg-secondary)" }}>
          <p style={{ fontSize: "15px", color: "var(--text-sec)", lineHeight: "1.7" }}>
            <span style={{ color: "var(--text-dim)" }}>NOTE:</span> Lab berisi eksperimen, konfigurasi, dan project kecil yang tidak masuk ke daftar WORK utama. Beberapa masih dalam progress.
          </p>
        </div>

        <SectionHeader label="ALL NODES" meta={`COUNT: ${labItems.length}`} />

        {/* lab items */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {labItems.map((item, i) => (
            <div
              key={item.id}
              className="fade-in"
              style={{
                ["--d" as string]: `${i * 100}ms`,
                padding: "16px 0",
                borderBottom: i < labItems.length - 1 ? "1px solid var(--border)" : "none",
                display: "grid",
                gridTemplateColumns: "32px minmax(0, 1fr) auto",
                gap: "0 16px",
                alignItems: "start",
              }}
            >
              <span style={{ fontSize: "14px", color: "var(--text-dim)", letterSpacing: "0.06em", paddingTop: "2px" }}>
                [{String(item.index).padStart(2, "0")}]
              </span>
              <div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "4px", flexWrap: "wrap" }}>
                  <h2 style={{ fontSize: "19px", fontWeight: 600, letterSpacing: "0.04em", color: "var(--text-main)", textTransform: "lowercase" }}>
                    {item.name}
                  </h2>
                  <span style={{ fontSize: "9px", color: categoryColors[item.category], letterSpacing: "0.1em", border: "1px solid var(--border)", padding: "1px 6px" }}>
                    {item.category}
                  </span>
                  <span style={{ fontSize: "9px", color: item.status === "ACTIVE" ? "var(--online)" : "var(--text-dim)", letterSpacing: "0.1em" }}>
                    {item.status}
                  </span>
                </div>
                <p style={{ fontSize: "16px", color: "var(--text-sec)", lineHeight: "1.6", maxWidth: "560px" }}>{item.desc}</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "6px" }}>
                <span style={{ fontSize: "14px", color: "var(--text-dim)", letterSpacing: "0.06em" }}>{item.year}</span>
                {item.url && (
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="sys-btn" style={{ fontSize: "9px", padding: "2px 8px" }}>
                    OPEN ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
