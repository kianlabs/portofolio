"use client";

import { useEffect, useState } from "react";

export default function LocalClock() {
  const [time, setTime] = useState("--:--:--");

  useEffect(() => {
    const fmt = () =>
      new Date().toLocaleTimeString("id-ID", {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span style={{ color: "var(--text-dim)", fontSize: "14px", letterSpacing: "0.06em", fontVariantNumeric: "tabular-nums" }}>
      LOCAL: {time}
    </span>
  );
}
