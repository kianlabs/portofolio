import PageTransition from "@/components/PageTransition";
import SectionHeader from "@/components/SectionHeader";
import { pcSpecs } from "@/lib/specs";

function Ln({ n, children }: { n: number; children?: React.ReactNode }) {
  return (
    <div className="cl">
      <span className="ln">{String(n).padStart(2, "0")}</span>
      <span className="cl-body">{children}</span>
    </div>
  );
}

export default function SetupPage() {
  let n = 0;
  const line = () => ++n;

  return (
    <PageTransition>
      <div style={{ padding: "20px 20px", width: "100%" }}>
        <div style={{ marginBottom: "14px" }}>
          <span style={{ fontSize: "11px", letterSpacing: "0.14em", color: "var(--text-dim)" }}>DIRECTORY / SETUP</span>
        </div>

        <SectionHeader label="SETUP.TS" meta="hardware configuration" />

        <div className="codeblock fade-in">
          <Ln n={line()}>
            <span className="tok-kw">const</span> <span className="tok-var">setup</span> = {"{"}
          </Ln>
          {pcSpecs.map((s) => (
            <Ln n={line()} key={s.label}>
              <span className="tok-key">  {s.label.toLowerCase()}</span>
              : <span className="tok-str">&quot;{s.value}&quot;</span>,
            </Ln>
          ))}
          <Ln n={line()}>{"}"};</Ln>
          <Ln n={line()}></Ln>
          <Ln n={line()}>
            <span className="tok-kw">export default</span> <span className="tok-var">setup</span>;
          </Ln>
        </div>

        <p style={{ fontSize: "13px", color: "var(--text-dim)", letterSpacing: "0.06em", marginTop: "12px" }}>
          {"// compiled and running since 2024 — no errors found."}
        </p>
      </div>
    </PageTransition>
  );
}
