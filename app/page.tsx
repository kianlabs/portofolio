"use client";

import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import SectionHeader from "@/components/SectionHeader";
import SystemField from "@/components/SystemField";
import AsciiAvatar from "@/components/AsciiAvatar";
import GlitchText from "@/components/GlitchText";
import TypingText from "@/components/TypingText";
import { projects } from "@/lib/projects";

const focusItems = [
  "Full-stack web development",
  "Modern frontend engineering",
  "Backend architecture",
  "Linux environment",
];

export default function Home() {
  const featured = projects.find((p) => p.featured);

  return (
    <PageTransition>
      <div style={{ padding: "20px 20px", margin: "0 auto", width: "100%" }}>
        <div style={{ marginBottom: "14px" }}>
          <span style={{ fontSize: "14px", letterSpacing: "0.14em", color: "var(--text-dim)" }}>DIRECTORY / HOME</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr]" style={{ gap: "26px" }}>
          {/* LEFT: IDENTITY BLOCK */}
          <div>
            <SectionHeader label="USER PROFILE" meta="SYS_01" />
            <AsciiAvatar />
            <div className="fade-in" style={{ flexDirection: "column", display: "flex", ["--d" as string]: "0ms" }}>
              <SystemField label="USER_ID" value="KYAN_01" />
              <SystemField
                label="STATUS"
                value={
                  <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span className="status-dot" />
                    <span style={{ color: "var(--online)" }}>ONLINE</span>
                  </span>
                }
              />
              <SystemField label="LOCATION" value="Kartasura, Sukoharjo" />
              <SystemField label="FOCUS" value="Web Development" />
              <SystemField label="SYSTEM" value="Arch Linux" />
            </div>
          </div>

          {/* RIGHT: HERO + INTRO */}
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>

            {/* ── HERO NAME BLOCK ── */}
            <div className="fade-in" style={{ borderBottom: "1px solid var(--border)", paddingBottom: "16px", ["--d" as string]: "80ms" }}>
              {/* big name */}
              <h1
                style={{
                  fontSize: "clamp(30px, 9vw, 72px)",
                  fontWeight: 700,
                  letterSpacing: "0.03em",
                  color: "var(--text-main)",
                  lineHeight: 1,
                  marginBottom: "10px",
                  textTransform: "uppercase",
                }}
              >
                <GlitchText text="RIDZKYAN" interval={4000} duration={350} />
              </h1>

              {/* callsign */}
              <div
                style={{
                  fontSize: "18px",
                  color: "var(--text-dim)",
                  letterSpacing: "0.12em",
                  marginBottom: "14px",
                }}
              >
                U CAN CALL ME{" "}
                <span style={{ color: "var(--text-sec)", fontWeight: 700 }}>KYAN</span>
              </div>

              {/* role */}
              <div
                style={{
                  display: "inline-block",
                  fontSize: "16px",
                  color: "var(--text-dim)",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  border: "1px solid var(--border)",
                  padding: "4px 12px",
                }}
              >
                <GlitchText text="WEB DEVELOPER" interval={5500} duration={280} />
              </div>
            </div>

            {/* ── WHOAMI ── */}
            <div className="fade-in" style={{ ["--d" as string]: "160ms" }}>
              <div
                style={{
                  fontSize: "15px",
                  color: "var(--text-dim)",
                  letterSpacing: "0.08em",
                  marginBottom: "8px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span style={{ color: "var(--text-dim)" }}>$</span>
                <span style={{ color: "var(--text-sec)" }}>
                  <TypingText text="whoami" speed={80} delay={400} cursor={false} />
                </span>
              </div>
              <p style={{ fontSize: "18px", color: "var(--text-main)", lineHeight: "1.8", maxWidth: "520px" }}>
                <TypingText
                  text="Saya Ridzkyan, biasa dipanggil Kyan."
                  speed={28}
                  delay={1100}
                  cursor={false}
                />
              </p>
              <p style={{ fontSize: "18px", color: "var(--text-sec)", lineHeight: "1.8", maxWidth: "520px", marginTop: "8px" }}>
                <TypingText
                  text="Saya membangun aplikasi web dan menikmati proses mengubah sebuah ide menjadi produk yang dapat digunakan."
                  speed={16}
                  delay={2400}
                  cursor={false}
                />
              </p>
            </div>

            {/* ── CURRENT FOCUS ── */}
            <div className="fade-in" style={{ ["--d" as string]: "240ms" }}>
              <div
                style={{
                  fontSize: "15px",
                  color: "var(--text-dim)",
                  letterSpacing: "0.08em",
                  marginBottom: "8px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span style={{ color: "var(--text-dim)" }}>$</span>
                <span style={{ color: "var(--text-sec)" }}>
                  <TypingText text="current_focus" speed={65} delay={4400} cursor={false} />
                </span>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
                {focusItems.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      fontSize: "16px",
                      color: "var(--text-sec)",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <span style={{ fontSize: "14px", color: "var(--text-dim)", letterSpacing: "0.06em", minWidth: "28px" }}>
                      [{String(i + 1).padStart(2, "0")}]
                    </span>
                    <TypingText
                      text={item}
                      speed={22}
                      delay={5200 + i * 380}
                      cursor={i === focusItems.length - 1}
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* ── QUICK LINKS ── */}
            <div
              className="fade-in"
              style={{
                ["--d" as string]: "320ms",
                display: "flex",
                gap: "8px",
                flexWrap: "wrap",
                paddingTop: "8px",
                borderTop: "1px solid var(--border)",
                marginTop: "auto",
              }}
            >
              <Link href="/work" className="sys-btn">[03] VIEW WORK</Link>
              <Link href="/contact" className="sys-btn">[05] CONTACT</Link>
              <a
                href="https://github.com/kianlabs"
                target="_blank"
                rel="noopener noreferrer"
                className="sys-btn"
              >
                GITHUB ↗
              </a>
            </div>
          </div>
        </div>

        {/* ── FEATURED PROJECT ── */}
        {featured && (
          <div className="fade-in" style={{ marginTop: "28px", ["--d" as string]: "200ms" }}>
            <SectionHeader label="FEATURED_NODE / 01" />
            <div style={{ border: "1px solid var(--border)", padding: "18px" }}>
                <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "24px" }}>
                <div>
                  <div style={{ fontSize: "14px", color: "var(--text-dim)", letterSpacing: "0.12em", marginBottom: "8px" }}>
                    PROJECT_ID : {featured.id}
                  </div>
                  <h2
                    style={{
                      fontSize: "clamp(18px, 2.4vw, 22px)",
                      fontWeight: 600,
                      letterSpacing: "0.02em",
                      color: "var(--text-main)",
                      lineHeight: 1.25,
                      marginBottom: "16px",
                    }}
                  >
                    <GlitchText text={featured.name} interval={6000} duration={300} />
                  </h2>
                  <p style={{ fontSize: "18px", color: "var(--text-sec)", lineHeight: "1.7", marginBottom: "14px" }}>
                    {featured.shortDesc}
                  </p>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <SystemField label="TYPE" value={featured.type} />
                    <SystemField label="YEAR" value={String(featured.year)} />
                    <SystemField label="STACK" value={featured.stack.join(" / ")} />
                    <SystemField label="STATUS" value={featured.status} />
                  </div>
                  <div style={{ display: "flex", gap: "8px", marginTop: "20px", flexWrap: "wrap" }}>
                    <Link href={`/work/${featured.slug}`} className="sys-btn">VIEW CASE STUDY</Link>
                    {featured.githubUrl && (
                      <a href={featured.githubUrl} target="_blank" rel="noopener noreferrer" className="sys-btn">
                        SOURCE CODE ↗
                      </a>
                    )}
                  </div>
                </div>
                <div
                  style={{
                    border: "1px solid var(--border)",
                    backgroundColor: "var(--bg-secondary)",
                    display: "flex",
                    alignItems: "stretch",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {featured.image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={featured.image}
                      alt={`${featured.name} screenshot`}
                      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </PageTransition>
  );
}
