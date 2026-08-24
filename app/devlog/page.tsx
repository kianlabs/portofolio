import PageTransition from "@/components/PageTransition";
import SectionHeader from "@/components/SectionHeader";
import { devlogEntries } from "@/lib/devlog";

function Ln({ n, children }: { n: number; children?: React.ReactNode }) {
  return (
    <div className="cl">
      <span className="ln">{String(n).padStart(2, "0")}</span>
      <span className="cl-body">{children}</span>
    </div>
  );
}

export default function DevlogPage() {
  return (
    <PageTransition>
      <div style={{ padding: "20px 20px", width: "100%" }}>
        <div style={{ marginBottom: "14px" }}>
          <span style={{ fontSize: "11px", letterSpacing: "0.14em", color: "var(--text-dim)" }}>DIRECTORY / DEVLOG</span>
        </div>

        <SectionHeader label="DEVLOG.LOG" meta="$ git log --oneline life" />

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {devlogEntries.map((entry, idx) => (
            <section
              key={entry.id}
              aria-label={entry.title}
              className="fade-in"
              style={{ ["--d" as string]: `${idx * 120}ms`, border: "1px solid var(--border)" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "10px",
                  flexWrap: "wrap",
                  borderBottom: "1px solid var(--border)",
                  backgroundColor: "var(--bg-secondary)",
                  padding: "8px 14px",
                }}
              >
                <span style={{ fontSize: "13px", color: "var(--text-main)", letterSpacing: "0.06em", fontWeight: 600 }}>
                  {entry.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.md
                </span>
                <span style={{ fontSize: "11px", color: "var(--text-dim)", letterSpacing: "0.08em" }}>
                  {entry.tag} · {entry.date}
                </span>
              </div>

              <div className="codeblock" style={{ border: "none" }}>
                <Ln n={1}>
                  <span className="tok-kw">#</span> <span className="tok-var">{entry.title}</span>
                </Ln>
                <Ln n={2}></Ln>
                {entry.body.map((para, i) => (
                  <Ln n={3 + i} key={i}>
                    <span className="tok-str">{para}</span>
                  </Ln>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p style={{ fontSize: "13px", color: "var(--text-dim)", letterSpacing: "0.06em", marginTop: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
          {"// more entries will be appended as life keeps compiling."} <span className="cursor-blink" />
        </p>
      </div>
    </PageTransition>
  );
}
