"use client";

import { useEffect, useState } from "react";

export default function LocalClock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const dateStr = now
    ? now.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "2-digit",
      })
    : "--- --- --";

  const timeStr = now
    ? now.toLocaleTimeString("id-ID", {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      })
    : "--:--:--";

  return (
    <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", letterSpacing: "0.08em", color: "var(--text-dim)", fontVariantNumeric: "tabular-nums", textTransform: "uppercase" }}>
      <span className="clock-date">{dateStr}</span>
      <span className="clock-time">{timeStr} WIB</span>
    </span>
  );
}
