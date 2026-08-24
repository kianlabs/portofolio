"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { pcSpecs } from "@/lib/specs";

const SECRET = "arch";

export default function EasterEgg() {
  const [open, setOpen] = useState(false);
  const [buffer, setBuffer] = useState("");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.length !== 1) return;
      setBuffer((prev) => {
        const next = (prev + e.key.toLowerCase()).slice(-SECRET.length);
        return next;
      });
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (buffer === SECRET) setOpen(true);
  }, [buffer]);

  if (!open) return null;

  return (
    <div className="egg-overlay" onClick={() => setOpen(false)} role="dialog" aria-label="neofetch easter egg">
      <div className="egg-panel" onClick={(e) => e.stopPropagation()}>
        <div className="egg-head">
          <Image src="/archlinux.svg" alt="Arch Linux" width={44} height={44} style={{ filter: "grayscale(1)" }} />
          <div>
            <div style={{ color: "var(--text-main)", fontWeight: 700, letterSpacing: "0.08em" }}>guest@kyan.dev</div>
            <div style={{ color: "var(--text-dim)", fontSize: "13px", letterSpacing: "0.06em" }}>----------------</div>
          </div>
        </div>
        <div className="egg-specs">
          {pcSpecs.map((s) => (
            <div key={s.label}>
              <span style={{ color: "var(--text-dim)" }}>{s.label}: </span>
              <span>{s.value}</span>
            </div>
          ))}
          <div style={{ marginTop: "8px", color: "var(--text-dim)", fontSize: "13px", letterSpacing: "0.06em" }}>
            you found the easter egg. btw, i use arch.
          </div>
        </div>
        <button className="egg-close" onClick={() => setOpen(false)}>
          close [esc]
        </button>
      </div>
    </div>
  );
}
