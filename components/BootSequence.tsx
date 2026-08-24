"use client";

import { useEffect, useState } from "react";

const BOOT_LINES = [
  "kyan.dev BIOS v2.6 — initializing",
  "[  OK  ] mounted /dev/portfolio",
  "[  OK  ] loaded modules: react, next, cozette",
  "[  OK  ] established uplink to kyan.dev",
  "[  OK  ] starting personal system...",
  "",
  "welcome, guest.",
];

export default function BootSequence() {
  const [visible, setVisible] = useState(true);
  const [lineCount, setLineCount] = useState(0);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    BOOT_LINES.forEach((_, i) => {
      timers.push(setTimeout(() => setLineCount(i + 1), i * 260));
    });
    const total = BOOT_LINES.length * 260 + 700;
    timers.push(setTimeout(() => setVisible(false), total));

    const skip = () => {
      timers.forEach(clearTimeout);
      setVisible(false);
    };
    window.addEventListener("keydown", skip);
    window.addEventListener("click", skip);

    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("keydown", skip);
      window.removeEventListener("click", skip);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="boot-overlay" aria-hidden="true">
      <div style={{ padding: "24px" }}>
        {BOOT_LINES.slice(0, lineCount).map((line, i) => (
          <div key={i} className="boot-line">
            {line}
          </div>
        ))}
        <span className="cursor-blink" />
      </div>
    </div>
  );
}
