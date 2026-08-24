import PageTransition from "@/components/PageTransition";
import SectionHeader from "@/components/SectionHeader";
import SystemField from "@/components/SystemField";

const capabilities = [
  { index: "01", label: "FRONTEND", items: "React / Next.js / TypeScript / Tailwind CSS", level: 82 },
  { index: "02", label: "BACKEND", items: "Laravel / Node.js / Express", level: 68 },
  { index: "03", label: "DATABASE", items: "MySQL / PostgreSQL", level: 62 },
  { index: "04", label: "ENVIRONMENT", items: "Linux / Git / Arch", level: 78 },
];

const learning = [
  "AI & machine learning",
  "Advanced React patterns & performance",
  "TypeScript deep dive",
  "Backend architecture & API design",
  "System administration & Linux internals",
];

export default function ProfilePage() {
  return (
    <PageTransition>
      <div style={{ padding: "20px 20px", margin: "0 auto", width: "100%" }}>

        <div style={{ marginBottom: "14px" }}>
          <span style={{ fontSize: "14px", letterSpacing: "0.14em", color: "var(--text-dim)" }}>DIRECTORY / PROFILE</span>
        </div>

        {/* GITHUB — HERO */}
        <section aria-label="GitHub" style={{ marginBottom: "20px" }}>
          <SectionHeader label="GITHUB" meta="main node ↗" />
          <a
            href="https://github.com/kianlabs"
            target="_blank"
            rel="noopener noreferrer"
            className="github-hero"
          >
            <span className="github-hero-handle">github.com/<strong>kianlabs</strong></span>
            <span className="github-hero-arrow" aria-hidden="true">↗</span>
          </a>
        </section>

        {/* IDENTITY */}
        <section aria-label="Identity" style={{ marginBottom: "14px" }}>
          <SectionHeader label="IDENTITY" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <SystemField label="NAME" value="Ridzkyan" />
            <SystemField label="ALIAS" value="Kyan" />
            <SystemField label="LOCATION" value="Kartasura, Sukoharjo" />
            <SystemField label="ROLE" value="Web Developer" />
            <SystemField
              label="STATUS"
              value={
                <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span className="status-dot" />
                  <span style={{ color: "var(--online)" }}>Available</span>
                </span>
              }
            />
            <SystemField label="EDUCATION" value="Universitas Duta Bangsa Surakarta" />
          </div>
        </section>

        {/* ABOUT */}
        <section aria-label="About" style={{ marginBottom: "14px" }}>
          <SectionHeader label="ABOUT" />
          <div style={{ fontSize: "15px", color: "var(--text-dim)", letterSpacing: "0.08em", marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}>
            <span>$</span><span style={{ color: "var(--text-sec)" }}>cat about.txt</span>
          </div>
          <div style={{ maxWidth: "600px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "18px", color: "var(--text-main)", lineHeight: "1.8" }}>
              Saya Ridzkyan, web developer dari Indonesia yang sedang membangun fondasi teknis yang kuat sambil mengerjakan proyek nyata.
            </p>
            <p style={{ fontSize: "18px", color: "var(--text-sec)", lineHeight: "1.8" }}>
              Saat ini fokus pada full-stack web development — dari membangun interface yang bersih di frontend sampai merancang backend yang solid. Saya menikmati proses debugging, eksplorasi sistem, dan mengubah sebuah ide menjadi sesuatu yang benar-benar berjalan.
            </p>
            <p style={{ fontSize: "18px", color: "var(--text-sec)", lineHeight: "1.8" }}>
              Di luar coding, saya menjalankan Arch Linux, bereksperimen dengan konfigurasi terminal, dan belajar sesuatu yang baru setiap hari.
            </p>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section aria-label="Capabilities" style={{ marginBottom: "14px" }}>
          <SectionHeader label="CAPABILITIES" meta="$ skill --list" />
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            {capabilities.map((cap, i) => (
              <div key={cap.index} className="fade-in" style={{ ["--d" as string]: `${i * 120}ms` }}>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px", marginBottom: "6px", flexWrap: "wrap" }}>
                  <span style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
                    <span style={{ fontSize: "13px", color: "var(--text-dim)" }}>[{cap.index}]</span>
                    <span style={{ fontSize: "15px", color: "var(--text-main)", letterSpacing: "0.1em", fontWeight: 600 }}>{cap.label}</span>
                  </span>
                  <span style={{ fontSize: "13px", color: "var(--online)", fontVariantNumeric: "tabular-nums" }}>{cap.level}%</span>
                </div>
                <p style={{ fontSize: "14px", color: "var(--text-sec)", lineHeight: "1.5", margin: "0 0 8px 0" }}>{cap.items}</p>
                <div className="cap-bar">
                  <div className="cap-bar-fill" style={{ ["--w" as string]: `${cap.level}%`, ["--d" as string]: `${i * 150}ms` }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CURRENTLY LEARNING */}
        <section aria-label="Currently learning">
          <SectionHeader label="CURRENTLY LEARNING" meta="$ tail -f learning.log" />
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {learning.map((item, i) => (
              <div
                key={i}
                className="learn-row fade-in"
                style={{ ["--d" as string]: `${300 + i * 100}ms`, fontSize: "16px", color: "var(--text-sec)", display: "flex", alignItems: "center", gap: "10px" }}
              >
                <span style={{ color: "var(--text-dim)", fontSize: "14px" }}>[{String(i + 1).padStart(2, "0")}]</span>
                {item}
              </div>
            ))}
            <div style={{ fontSize: "16px", color: "var(--text-dim)", display: "flex", alignItems: "center", gap: "10px", marginTop: "4px" }}>
              <span>$</span> <span className="cursor-blink" />
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
