import PageTransition from "@/components/PageTransition";
import SectionHeader from "@/components/SectionHeader";

const hobbies = [
  "Ricing Linux & tweaking terminal configs",
  "Gaming",
  "Watching movies",
  "Listening to music while coding",
  "Reading random tech documentation",
];

function Ln({ n, children }: { n: number; children?: React.ReactNode }) {
  return (
    <div className="cl">
      <span className="ln">{String(n).padStart(2, "0")}</span>
      <span className="cl-body">{children}</span>
    </div>
  );
}

export default function HobbiesPage() {
  let n = 0;
  const line = () => ++n;

  return (
    <PageTransition>
      <div style={{ padding: "20px 20px", width: "100%" }}>
        <div style={{ marginBottom: "14px" }}>
          <span style={{ fontSize: "11px", letterSpacing: "0.14em", color: "var(--text-dim)" }}>DIRECTORY / HOBBIES</span>
        </div>

        <SectionHeader label="HOBBIES.TS" meta="runtime interests" />

        <div className="codeblock fade-in">
          <Ln n={line()}>
            <span className="tok-kw">const</span> <span className="tok-var">hobbies</span>: <span className="tok-kw">string</span>[] = [
          </Ln>
          {hobbies.map((h) => (
            <Ln n={line()} key={h}>
              <span className="tok-str">  &quot;{h}&quot;</span>,
            </Ln>
          ))}
          <Ln n={line()}>{"]"};</Ln>
          <Ln n={line()}></Ln>
          <Ln n={line()}>
            <span className="tok-var">hobbies</span>.<span className="tok-fn">forEach</span>(<span className="tok-var">h</span> =&gt; <span className="tok-var">life</span>.<span className="tok-fn">enjoy</span>(h));
          </Ln>
        </div>

        <p style={{ fontSize: "13px", color: "var(--text-dim)", letterSpacing: "0.06em", marginTop: "12px" }}>
          {"// executed daily with zero exceptions."}
        </p>
      </div>
    </PageTransition>
  );
}
