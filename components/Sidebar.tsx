"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { projects } from "@/lib/projects";

export default function Sidebar() {
  const pathname = usePathname();
  const [workOpen, setWorkOpen] = useState(true);

  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path) && !(path === "/work" && pathname !== "/work");

  return (
    <aside className="hidden md:flex ide-sidebar" aria-label="File explorer">
      <div className="ide-explorer-label">Explorer</div>

      <Link href="/" className={`ide-row ide-indent-0${isActive("/") ? " active" : ""}`}>
        <span className="ide-chevron"> </span>home.tsx
      </Link>
      <Link href="/profile" className={`ide-row ide-indent-0${isActive("/profile") ? " active" : ""}`}>
        <span className="ide-chevron"> </span>profile.tsx
      </Link>

      <button
        className="ide-row ide-indent-0"
        onClick={() => setWorkOpen((o) => !o)}
        aria-expanded={workOpen}
      >
        <span className="ide-chevron">{workOpen ? "▾" : "▸"}</span>work/
      </button>
      {workOpen && (
        <>
          <Link href="/work" className={`ide-row ide-indent-1${isActive("/work") ? " active" : ""}`}>
            <span className="ide-chevron"> </span>index.tsx
          </Link>
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/work/${p.slug}`}
              className={`ide-row ide-indent-1${pathname === `/work/${p.slug}` ? " active" : ""}`}
            >
              <span className="ide-chevron"> </span>{p.slug}.tsx
            </Link>
          ))}
        </>
      )}

      <Link href="/lab" className={`ide-row ide-indent-0${isActive("/lab") ? " active" : ""}`}>
        <span className="ide-chevron"> </span>lab.tsx
      </Link>
      <Link href="/devlog" className={`ide-row ide-indent-0${isActive("/devlog") ? " active" : ""}`}>
        <span className="ide-chevron"> </span>devlog.log
      </Link>
      <Link href="/terminal" className={`ide-row ide-indent-0${isActive("/terminal") ? " active" : ""}`}>
        <span className="ide-chevron"> </span>terminal.sh
      </Link>
      <Link href="/setup" className={`ide-row ide-indent-0${isActive("/setup") ? " active" : ""}`}>
        <span className="ide-chevron"> </span>setup.tsx
      </Link>
      <Link href="/hobbies" className={`ide-row ide-indent-0${isActive("/hobbies") ? " active" : ""}`}>
        <span className="ide-chevron"> </span>hobbies.tsx
      </Link>
      <Link href="/contact" className={`ide-row ide-indent-0${isActive("/contact") ? " active" : ""}`}>
        <span className="ide-chevron"> </span>contact.tsx
      </Link>
    </aside>
  );
}
