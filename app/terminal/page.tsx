"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import SectionHeader from "@/components/SectionHeader";

interface HistoryEntry {
  cmd: string;
  output: React.ReactNode;
}

const BANNER = (
  <div>
    <div style={{ color: "var(--online)" }}>
      kyandev shell v2.6 — type &quot;help&quot; to list available commands.
    </div>
    <div style={{ color: "var(--text-dim)", marginTop: "4px" }}>
      tip: try &quot;sudo hire-me&quot;
    </div>
  </div>
);

const COMMANDS: Record<string, () => React.ReactNode> = {
  help: () => (
    <div>
      <div>Available commands:</div>
      {[
        ["whoami", "who is kyan"],
        ["about", "short bio"],
        ["projects", "list of projects"],
        ["skills", "current capabilities"],
        ["contact", "how to reach me"],
        ["social", "social links"],
        ["date", "current datetime"],
        ["arch", "?"],
        ["clear", "clear terminal"],
        ["sudo hire-me", "??? "],
      ].map(([cmd, desc]) => (
        <div key={cmd} style={{ display: "flex", gap: "12px" }}>
          <span style={{ color: "var(--online)", minWidth: "120px" }}>{cmd}</span>
          <span style={{ color: "var(--text-dim)" }}>{desc}</span>
        </div>
      ))}
    </div>
  ),
  whoami: () => <div>Ridzkyan — a.k.a Kyan. Web developer from Kartasura, Sukoharjo.</div>,
  about: () => (
    <div style={{ lineHeight: 1.8 }}>
      Web developer yang suka mengubah ide jadi produk nyata. Fokus full-stack,
      jalan Arch Linux, dan sedang mendalami AI/ML.
    </div>
  ),
  projects: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <div>
        → <Link href="/work/umkm-finance-classifier" style={{ color: "var(--online)" }}>umkm-finance-classifier</Link>{" "}
        <span style={{ color: "var(--text-dim)" }}>— GNB classifier untuk UMKM</span>
      </div>
      <div>
        → <Link href="/work/portfolio-v1" style={{ color: "var(--online)" }}>portfolio-v1</Link>{" "}
        <span style={{ color: "var(--text-dim)" }}>— versi pertama situs ini</span>
      </div>
      <div style={{ color: "var(--text-dim)" }}>tip: klik link di atas untuk membuka case study.</div>
    </div>
  ),
  skills: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
      <div>frontend   [██████████████░░░░] 82%</div>
      <div>environment[█████████████░░░░░░] 78%</div>
      <div>backend    [████████████░░░░░░░] 68%</div>
      <div>database   [███████████░░░░░░░░] 62%</div>
    </div>
  ),
  contact: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <div>email    : ridzkyan0504@gmail.com</div>
      <div>
        github   :{" "}
        <a href="https://github.com/kianlabs" target="_blank" rel="noopener noreferrer" style={{ color: "var(--online)" }}>
          github.com/kianlabs
        </a>
      </div>
      <div>
        form     :{" "}
        <Link href="/contact" style={{ color: "var(--online)" }}>
          /contact
        </Link>{" "}
        <span style={{ color: "var(--text-dim)" }}>(or just run: sudo hire-me)</span>
      </div>
    </div>
  ),
  social: () => COMMANDS.contact(),
  date: () => <div>{new Date().toString()}</div>,
  arch: () => (
    <div style={{ color: "var(--online)" }}>
      Arch Linux is my daily driver. btw.
    </div>
  ),
  "sudo hire-me": () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <div style={{ color: "var(--online)" }}>[sudo] password for guest: ********</div>
      <div>access granted. opening transmission channel...</div>
      <div>
        → <Link href="/contact" style={{ color: "var(--online)" }}>go to /contact</Link>
      </div>
    </div>
  ),
};

export default function TerminalPage() {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [input, setInput] = useState("");
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const bootedRef = useRef(false);

  useEffect(() => {
    if (!bootedRef.current) {
      bootedRef.current = true;
      setHistory([{ cmd: "", output: BANNER }]);
    }
  }, []);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history]);

  function run(raw: string) {
    const cmd = raw.trim().toLowerCase();
    const output = cmd === "clear" ? null : COMMANDS[cmd]
      ? COMMANDS[cmd]()
      : raw.trim()
      ? <div style={{ color: "#a05252" }}>command not found: {raw} — type &quot;help&quot;</div>
      : null;

    setHistory((prev) => {
      if (cmd === "clear") return [];
      return [...prev, { cmd: raw, output: output ?? "" }];
    });
  }

  return (
    <PageTransition>
      <div style={{ padding: "20px 20px", width: "100%", height: "100%" }}>
        <div style={{ marginBottom: "14px" }}>
          <span style={{ fontSize: "11px", letterSpacing: "0.14em", color: "var(--text-dim)" }}>DIRECTORY / TERMINAL</span>
        </div>

        <SectionHeader label="GUEST SHELL" meta="guest@kyandev: ~" />

        <div className="codeblock" ref={bodyRef} style={{ maxHeight: "60vh", overflowY: "auto" }}>
          {history.map((h, i) => (
            <div key={i} style={{ marginBottom: h.output ? "10px" : "0" }}>
              {h.cmd && (
                <div className="cl">
                  <span className="ln">››</span>
                  <span className="cl-body">
                    <span style={{ color: "var(--online)" }}>guest@kyandev:~$ </span>
                    {h.cmd}
                  </span>
                </div>
              )}
              {h.output && <div className="cl-body" style={{ padding: "2px 0 2px 44px" }}>{h.output}</div>}
            </div>
          ))}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            run(input);
            setInput("");
          }}
          style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "12px" }}
        >
          <span style={{ color: "var(--online)", fontSize: "16px", whiteSpace: "nowrap" }}>guest@kyandev:~$</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
            aria-label="Terminal command input"
            style={{
              flex: 1,
              minWidth: 0,
              background: "none",
              border: "none",
              outline: "none",
              color: "var(--text-main)",
              fontFamily: "inherit",
              fontSize: "16px",
              letterSpacing: "0.04em",
              borderBottom: "1px solid var(--border)",
              paddingBottom: "4px",
            }}
          />
        </form>
      </div>
    </PageTransition>
  );
}
