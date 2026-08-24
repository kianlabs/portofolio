import { notFound } from "next/navigation";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import SectionHeader from "@/components/SectionHeader";
import SystemField from "@/components/SystemField";
import { getProjectBySlug, projects } from "@/lib/projects";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "NOT FOUND" };
  return {
    title: `${project.name.toUpperCase()} — KYAN.DEV`,
    description: project.shortDesc,
  };
}

const contentSections = [
  { key: "overview",     label: "01 / OVERVIEW" },
  { key: "problem",      label: "02 / PROBLEM" },
  { key: "solution",     label: "03 / SOLUTION" },
  { key: "architecture", label: "04 / ARCHITECTURE" },
  { key: "challenges",   label: "05 / CHALLENGES" },
  { key: "learned",      label: "06 / WHAT I LEARNED" },
];

export default function WorkDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <PageTransition>
      <div style={{ padding: "20px 20px", margin: "0 auto", width: "100%" }}>

        {/* breadcrumb */}
        <div style={{ marginBottom: "14px", display: "flex", alignItems: "center", gap: "8px" }}>
          <Link href="/work" style={{ fontSize: "14px", letterSpacing: "0.14em", color: "var(--text-dim)", textDecoration: "none" }}>
            DIRECTORY / WORK
          </Link>
          <span style={{ fontSize: "14px", color: "var(--text-dim)" }}>/</span>
          <span style={{ fontSize: "14px", letterSpacing: "0.14em", color: "var(--text-sec)" }}>
            {project.slug.toUpperCase()}
          </span>
        </div>

        {/* project header */}
        <div style={{ marginBottom: "14px" }}>
          <div style={{ fontSize: "14px", color: "var(--text-dim)", letterSpacing: "0.12em", marginBottom: "8px", display: "flex", flexDirection: "column", gap: "2px" }}>
            <span>PROJECT_ID : {project.id}</span>
            <span>STATUS     : {project.status}</span>
            <span>YEAR       : {project.year}</span>
          </div>

          <h1 style={{ fontSize: "clamp(22px, 3.5vw, 30px)", fontWeight: 600, letterSpacing: "0.02em", color: "var(--text-main)", lineHeight: 1.1, marginBottom: "16px" }}>
            {project.name}
          </h1>

          <div className="divider" style={{ marginBottom: "14px" }} />

          <div style={{ display: "flex", flexDirection: "column" }}>
            <SystemField label="TYPE" value={project.type} />
            <SystemField label="STACK" value={project.stack.join(" / ")} />
            <SystemField label="STATUS" value={project.status} />
            {project.githubUrl && (
              <SystemField
                label="SOURCE"
                value={
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-sec)", textDecoration: "none", fontSize: "16px" }}>
                    {project.githubUrl} ↗
                  </a>
                }
              />
            )}
          </div>

          <div style={{ display: "flex", gap: "8px", marginTop: "20px", flexWrap: "wrap" }}>
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="sys-btn">SOURCE CODE ↗</a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="sys-btn">LIVE DEMO ↗</a>
            )}
            <Link href="/work" className="sys-btn">← BACK TO WORK</Link>
          </div>
        </div>

        {/* screenshot */}
        <div
          style={{
            border: "1px solid var(--border)",
            backgroundColor: "var(--bg-secondary)",
            aspectRatio: "16/9",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "24px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {project.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.image}
              alt={`${project.name} screenshot`}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <span style={{ fontSize: "11px", color: "var(--text-dim)", letterSpacing: "0.1em" }}>SCREENSHOT / INTERFACE</span>
          )}
        </div>

        {/* content sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {contentSections.map(({ key, label }) => {
            const content = project[key as keyof typeof project] as string | undefined;
            if (!content) return null;
            return (
              <section key={key} aria-label={label}>
                <SectionHeader label={label} />
                <p style={{ fontSize: "18px", color: "var(--text-sec)", lineHeight: "1.8", maxWidth: "640px" }}>{content}</p>
              </section>
            );
          })}

          {/* technology */}
          <section aria-label="Technology">
            <SectionHeader label="07 / TECHNOLOGY" />
            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
              {project.stack.map((s) => (
                <span key={s} style={{ fontSize: "15px", color: "var(--text-sec)", border: "1px solid var(--border)", padding: "4px 12px", letterSpacing: "0.06em" }}>{s}</span>
              ))}
            </div>
          </section>
        </div>

      </div>
    </PageTransition>
  );
}
