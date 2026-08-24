"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import SystemField from "@/components/SystemField";
import { projects, type ProjectTag } from "@/lib/projects";

type Filter = "ALL" | ProjectTag;

const filters: { label: string; value: Filter }[] = [
  { label: "ALL", value: "ALL" },
  { label: "WEB", value: "WEB" },
  { label: "FULLSTACK", value: "FULLSTACK" },
  { label: "BACKEND", value: "BACKEND" },
  { label: "ML", value: "ML" },
  { label: "EXPERIMENT", value: "EXPERIMENT" },
];

export default function WorkPage() {
  const [active, setActive] = useState<Filter>("ALL");
  const filtered = active === "ALL" ? projects : projects.filter((p) => p.type === active);

  return (
    <PageTransition>
      <div style={{ padding: "20px 20px", margin: "0 auto", width: "100%" }}>

        <div style={{ marginBottom: "14px" }}>
          <span style={{ fontSize: "14px", letterSpacing: "0.14em", color: "var(--text-dim)" }}>DIRECTORY / WORK</span>
        </div>

        <div style={{ marginBottom: "14px" }}>
          <h1 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 600, letterSpacing: "0.04em", color: "var(--text-main)", marginBottom: "6px" }}>PROJECT DIRECTORY</h1>
          <div style={{ display: "flex", gap: "16px" }}>
            <span style={{ fontSize: "14px", color: "var(--text-dim)", letterSpacing: "0.1em" }}>NODES: {projects.length}</span>
            <span style={{ fontSize: "14px", color: "var(--online)", letterSpacing: "0.1em", display: "flex", alignItems: "center", gap: "4px" }}>
              <span className="status-dot" style={{ width: "5px", height: "5px" }} />AVAILABLE
            </span>
          </div>
        </div>

        {/* FILTER */}
        <div role="group" aria-label="Filter projects" style={{ display: "flex", gap: "4px", flexWrap: "wrap", marginBottom: "14px" }}>
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={active === f.value ? "sys-btn sys-btn-active" : "sys-btn"}
              aria-pressed={active === f.value}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="divider" style={{ marginBottom: "16px" }} />

        {/* PROJECT LIST */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="project-row" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px", flexWrap: "wrap" }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
                      <span style={{ fontSize: "14px", color: "var(--text-dim)", letterSpacing: "0.08em" }}>[{String(project.index).padStart(2, "0")}]</span>
                      <h2 style={{ fontSize: "19px", fontWeight: 600, letterSpacing: "0.04em", color: "var(--text-main)" }}>{project.name}</h2>
                    </div>
                    <span style={{ fontSize: "15px", color: "var(--text-dim)", letterSpacing: "0.06em" }}>{project.year}</span>
                  </div>
                  <p style={{ fontSize: "16px", color: "var(--text-sec)", lineHeight: "1.6", maxWidth: "600px" }}>{project.shortDesc}</p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
                    <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
                      <SystemField label="TYPE" value={project.type} />
                      <SystemField label="STATUS" value={project.status} />
                    </div>
                    <Link href={`/work/${project.slug}`} className="sys-btn" style={{ fontSize: "14px" }}>OPEN PROJECT ↗</Link>
                  </div>
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                    {project.stack.map((s) => (
                      <span key={s} style={{ fontSize: "14px", color: "var(--text-dim)", border: "1px solid var(--border)", padding: "2px 8px", letterSpacing: "0.06em" }}>{s}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {filtered.length === 0 && (
            <div style={{ padding: "32px 0", textAlign: "center" }}>
              <span style={{ fontSize: "15px", color: "var(--text-dim)", letterSpacing: "0.1em" }}>NO NODES FOUND</span>
            </div>
          )}
        </div>

      </div>
    </PageTransition>
  );
}
