import PageTransition from "@/components/PageTransition";
import SectionHeader from "@/components/SectionHeader";

const hobbies = [
  "Ricing Linux & tweaking terminal configs",
  "Gaming",
  "Watching movies",
  "Listening to music while coding",
  "Reading random tech documentation",
];

export default function HobbiesPage() {
  return (
    <PageTransition>
      <div style={{ padding: "20px 20px", maxWidth: "800px", margin: "0 auto", width: "100%" }}>
        <div style={{ marginBottom: "14px" }}>
          <span style={{ fontSize: "12px", letterSpacing: "0.14em", color: "var(--text-dim)" }}>DIRECTORY / HOBBIES</span>
        </div>

        <section aria-label="Hobbies">
          <SectionHeader label="HOBBIES" />
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {hobbies.map((item, i) => (
              <div key={i} style={{ fontSize: "15px", color: "var(--text-sec)", display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ color: "var(--text-dim)", fontSize: "13px" }}>[{String(i + 1).padStart(2, "0")}]</span>
                {item}
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
