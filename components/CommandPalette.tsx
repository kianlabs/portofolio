"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const commands = [
  { label: "home.tsx", desc: "Go to Home", path: "/" },
  { label: "profile.tsx", desc: "Go to Profile", path: "/profile" },
  { label: "work/index.tsx", desc: "Go to Work directory", path: "/work" },
  { label: "lab.tsx", desc: "Go to Lab", path: "/lab" },
  { label: "setup.tsx", desc: "View PC setup & specs", path: "/setup" },
  { label: "hobbies.tsx", desc: "View Hobbies", path: "/hobbies" },
  { label: "contact.tsx", desc: "Go to Contact", path: "/contact" },
  { label: "devlog.log", desc: "Read devlog entries", path: "/devlog" },
  { label: "terminal.sh", desc: "Open interactive shell", path: "/terminal" },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) {
      setQuery("");
      const t = setTimeout(() => inputRef.current?.focus(), 0);
      return () => clearTimeout(t);
    }
  }, [open]);

  const q = query.toLowerCase();
  const results = commands.filter(
    (c) => c.label.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q)
  );

  const go = (path: string) => {
    router.push(path);
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="cmdk-overlay" onClick={() => setOpen(false)}>
      <div
        className="cmdk"
        role="dialog"
        aria-label="Command palette"
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px 12px", borderBottom: "1px solid var(--border)" }}>
          <span style={{ color: "var(--text-dim)", fontSize: "14px" }}>$</span>
          <input
            ref={inputRef}
            className="cmdk-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="type a file or command..."
            aria-label="Search commands"
          />
          <span className="cmdk-key">ESC</span>
        </div>
        <div className="cmdk-list">
          {results.map((c) => (
            <button key={c.path} className="cmdk-item" onClick={() => go(c.path)}>
              <span>{c.label}</span>
              <span className="cmdk-desc">{c.desc}</span>
            </button>
          ))}
          {results.length === 0 && (
            <div className="cmdk-empty">no matching files</div>
          )}
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px", padding: "5px 12px", borderTop: "1px solid var(--border)" }}>
          <span style={{ fontSize: "12px", color: "var(--text-dim)", letterSpacing: "0.06em" }}>↑↓ navigate · ↵ open</span>
        </div>
      </div>
    </div>
  );
}
