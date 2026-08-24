"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { index: "01", label: "HOME", href: "/" },
  { index: "02", label: "PROFILE", href: "/profile" },
  { index: "03", label: "WORK", href: "/work" },
  { index: "04", label: "LAB", href: "/lab" },
  { index: "05", label: "SETUP", href: "/setup" },
  { index: "06", label: "HOBBIES", href: "/hobbies" },
  { index: "07", label: "CONTACT", href: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* MOBILE TOGGLE */}
      <nav
        className="md:hidden flex items-center justify-between border-t"
        style={{ borderColor: "var(--border)", padding: "8px 12px", backgroundColor: "var(--bg-panel)" }}
      >
        <span style={{ fontSize: "15px", color: "var(--text-sec)", letterSpacing: "0.1em" }}>KYAN.DEV</span>
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
          style={{
            background: "none",
            border: "1px solid var(--border)",
            color: "var(--text-sec)",
            fontFamily: "var(--font-mono)",
            fontSize: "14px",
            letterSpacing: "0.1em",
            padding: "4px 10px",
            cursor: "pointer",
          }}
        >
          MENU
        </button>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {menuOpen && (
        <div className="mobile-nav" role="dialog" aria-label="Navigation menu" aria-modal="true">
          <div className="flex items-center justify-between mb-8">
            <span style={{ fontSize: "14px", color: "var(--text-dim)", letterSpacing: "0.12em" }}>KYAN.DEV // NAVIGATION</span>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close navigation menu"
              style={{
                background: "none",
                border: "1px solid var(--border)",
                color: "var(--text-sec)",
                fontFamily: "var(--font-mono)",
                fontSize: "14px",
                letterSpacing: "0.1em",
                padding: "4px 10px",
                cursor: "pointer",
              }}
            >
              CLOSE
            </button>
          </div>
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "14px 0",
                  borderBottom: "1px solid var(--border)",
                  textDecoration: "none",
                  color: isActive(item.href) ? "var(--text-main)" : "var(--text-sec)",
                  fontFamily: "var(--font-sans)",
                  fontSize: "17px",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                }}
              >
                <span style={{ color: "var(--text-dim)", fontSize: "14px" }}>[{item.index}]</span>
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-auto pt-8" style={{ borderTop: "1px solid var(--border)" }}>
            <span style={{ fontSize: "14px", color: "var(--text-dim)" }}>
              STATUS: <span style={{ color: "var(--online)" }}>● ONLINE</span>
            </span>
          </div>
        </div>
      )}
    </>
  );
}
