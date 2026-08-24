"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const STATIC_LABELS: Record<string, string> = {
  "/": "home.tsx",
  "/profile": "profile.tsx",
  "/work": "work/index.tsx",
  "/lab": "lab.tsx",
  "/setup": "setup.tsx",
  "/hobbies": "hobbies.tsx",
  "/devlog": "devlog.log",
  "/terminal": "terminal.sh",
  "/contact": "contact.tsx",
};

function labelFor(path: string) {
  if (STATIC_LABELS[path]) return STATIC_LABELS[path];
  if (path.startsWith("/work/")) return `work/${path.split("/")[2]}.tsx`;
  return path;
}

const STORAGE_KEY = "kyan-ide-tabs";

export default function TabBar() {
  const pathname = usePathname();
  const router = useRouter();
  const [tabs, setTabs] = useState<string[]>(["/"]);

  useEffect(() => {
    let stored: string[] = ["/"];
    try {
      stored = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || '["/"]');
    } catch {
      stored = ["/"];
    }
    if (!Array.isArray(stored) || stored.length === 0) stored = ["/"];
    if (!stored.includes(pathname)) stored.push(pathname);
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
    setTabs(stored);
  }, [pathname]);

  const closeTab = (e: React.MouseEvent, tab: string) => {
    e.preventDefault();
    e.stopPropagation();
    const next = tabs.filter((t) => t !== tab);
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setTabs(next);
    if (tab === pathname) router.push("/");
  };

  return (
    <div className="ide-tabbar" role="tablist" aria-label="Open editor tabs">
      {tabs.map((tab) => (
        <Link
          key={tab}
          href={tab}
          role="tab"
          aria-selected={tab === pathname}
          className={`ide-tab${tab === pathname ? " active" : ""}`}
        >
          <span>{labelFor(tab)}</span>
          <button
            className="ide-tab-close"
            onClick={(e) => closeTab(e, tab)}
            aria-label={`Close tab ${labelFor(tab)}`}
          >
            ×
          </button>
        </Link>
      ))}
    </div>
  );
}
