"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const menus = [
  { label: "HOME", href: "/" },
  { label: "PROFILE", href: "/profile" },
  { label: "WORK", href: "/work" },
  { label: "LAB", href: "/lab" },
  { label: "SETUP", href: "/setup" },
  { label: "HOBBIES", href: "/hobbies" },
  { label: "DEVLOG", href: "/devlog" },
  { label: "TERMINAL", href: "/terminal" },
  { label: "CONTACT", href: "/contact" },
];

export default function MenuBar() {
  const pathname = usePathname();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canSwipe, setCanSwipe] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const check = () =>
      setCanSwipe(el.scrollWidth > el.clientWidth + 8 && el.scrollLeft < 24);
    check();
    el.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      el.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav aria-label="Primary navigation" className={`menubar-wrap${canSwipe ? "" : " no-fade"}`}>
      <div ref={scrollRef} className="menubar-scroll">
        {menus.map((m) => (
          <Link
            key={m.href}
            href={m.href}
            className={`menubar-item${isActive(m.href) ? " active" : ""}`}
            aria-current={isActive(m.href) ? "page" : undefined}
          >
            {m.label}
          </Link>
        ))}
        <span
          aria-hidden="true"
          className="menubar-path"
          style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "10px", fontSize: "12px", color: "var(--text-dim)", letterSpacing: "0.08em" }}
        >
          ~/kyan.dev/src/app
          <button
            className="menubar-k"
            onClick={() => window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", ctrlKey: true }))}
            aria-label="Open command palette (Ctrl+K)"
          >
            Ctrl+K
          </button>
        </span>
      </div>
      {canSwipe && (
        <span aria-hidden="true" className="menubar-swipe">
          ›
        </span>
      )}
    </nav>
  );
}
