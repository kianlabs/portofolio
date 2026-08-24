"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
  { label: "HOME", href: "/" },
  { label: "PROFILE", href: "/profile" },
  { label: "WORK", href: "/work" },
  { label: "LAB", href: "/lab" },
  { label: "SETUP", href: "/setup" },
  { label: "HOBBIES", href: "/hobbies" },
  { label: "CONTACT", href: "/contact" },
];

export default function MenuBar() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav
      aria-label="Primary navigation"
      className="hidden md:flex menubar"
    >
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
    </nav>
  );
}
