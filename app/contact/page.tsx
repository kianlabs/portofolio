"use client";

import { useState, FormEvent } from "react";
import PageTransition from "@/components/PageTransition";
import SectionHeader from "@/components/SectionHeader";

const channels = [
  { label: "EMAIL", value: "ridzkyan0504@gmail.com", href: "mailto:ridzkyan0504@gmail.com" },
  { label: "GITHUB", value: "github.com/kianlabs", href: "https://github.com/kianlabs" },
  { label: "LINKEDIN", value: "linkedin.com/in/ridzkyan", href: "https://linkedin.com/in/ridzkyan" },
];

const WEB3FORMS_KEY = "1da9b48a-72df-46c2-b7ae-5f22a26ee058";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [honeypot, setHoneypot] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (honeypot) return;
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
          from_name: "kyandev.vercel.app",
          subject: `New transmission from ${form.name}`,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <PageTransition>
      <div style={{ padding: "20px 20px", margin: "0 auto", width: "100%" }}>
        <div style={{ marginBottom: "14px" }}>
          <span style={{ fontSize: "14px", letterSpacing: "0.14em", color: "var(--text-dim)" }}>DIRECTORY / CONTACT</span>
        </div>

        <div style={{ marginBottom: "14px" }}>
          <div style={{ fontSize: "14px", color: "var(--online)", letterSpacing: "0.12em", marginBottom: "8px", display: "flex", alignItems: "center", gap: "6px" }}>
            <span className="status-dot" />STATUS: ACCEPTING CONNECTIONS
          </div>
          <h1 style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "0.08em", color: "var(--text-main)", lineHeight: 1.2, textTransform: "uppercase" }}>
            LET&apos;S BUILD<br />SOMETHING USEFUL.
          </h1>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "26px" }} className="md:grid-cols-[1fr_320px]">
          {/* FORM */}
          <div>
            <SectionHeader label="TRANSMIT MESSAGE" />
            {status === "sent" ? (
              <div style={{ padding: "18px", border: "1px solid var(--border)", backgroundColor: "var(--bg-secondary)" }}>
                <div style={{ fontSize: "14px", color: "var(--online)", letterSpacing: "0.12em", marginBottom: "8px", display: "flex", alignItems: "center", gap: "6px" }}>
                  <span className="status-dot" />TRANSMISSION SUCCESSFUL
                </div>
                <p style={{ fontSize: "16px", color: "var(--text-sec)", lineHeight: "1.7", marginBottom: "14px" }}>
                  Pesan kamu sudah masuk ke inbox saya. Saya akan membalas secepatnya.
                </p>
                <button className="sys-btn" onClick={() => setStatus("idle")}>[ SEND ANOTHER ]</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <input
                  type="checkbox"
                  name="botcheck"
                  checked={honeypot === "1"}
                  onChange={(e) => setHoneypot(e.target.checked ? "1" : "")}
                  tabIndex={-1}
                  aria-hidden="true"
                  style={{ position: "absolute", left: "-9999px", opacity: 0 }}
                />
                {status === "error" && (
                  <div style={{ fontSize: "14px", color: "#a05252", letterSpacing: "0.08em", border: "1px solid #a05252", padding: "10px 14px" }}>
                    ✕ TRANSMISSION FAILED — cek koneksi kamu atau kirim langsung ke ridzkyan0504@gmail.com
                  </div>
                )}
                <div>
                  <label htmlFor="name" style={{ display: "block", fontSize: "14px", color: "var(--text-dim)", letterSpacing: "0.12em", marginBottom: "8px" }}>NAME</label>
                  <div style={{ fontSize: "15px", color: "var(--text-dim)", marginBottom: "4px" }}>&gt; ---</div>
                  <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} className="sys-input" placeholder="Nama kamu" autoComplete="name" />
                </div>
                <div>
                  <label htmlFor="email" style={{ display: "block", fontSize: "14px", color: "var(--text-dim)", letterSpacing: "0.12em", marginBottom: "8px" }}>EMAIL</label>
                  <div style={{ fontSize: "15px", color: "var(--text-dim)", marginBottom: "4px" }}>&gt; ---</div>
                  <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className="sys-input" placeholder="email@domain.com" autoComplete="email" />
                </div>
                <div>
                  <label htmlFor="message" style={{ display: "block", fontSize: "14px", color: "var(--text-dim)", letterSpacing: "0.12em", marginBottom: "8px" }}>MESSAGE</label>
                  <div style={{ fontSize: "15px", color: "var(--text-dim)", marginBottom: "4px" }}>&gt; ---</div>
                  <textarea id="message" name="message" required rows={5} value={form.message} onChange={handleChange} className="sys-input" placeholder="Tulis pesanmu di sini..." />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="sys-btn"
                  style={{ alignSelf: "flex-start", opacity: status === "sending" ? 0.5 : 1, cursor: status === "sending" ? "not-allowed" : "pointer" }}
                >
                  {status === "sending" ? "TRANSMITTING..." : "[ TRANSMIT MESSAGE ]"}
                </button>
              </form>
            )}
          </div>

          {/* CHANNELS */}
          <div>
            <SectionHeader label="COMMUNICATION CHANNEL" />
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {channels.map((ch, i) => (
                <div key={ch.label} style={{ padding: "12px 0", borderBottom: i < channels.length - 1 ? "1px solid var(--border)" : "none" }}>
                  <div style={{ fontSize: "9px", color: "var(--text-dim)", letterSpacing: "0.14em", marginBottom: "4px" }}>{ch.label}</div>
                  <a href={ch.href} target={ch.href.startsWith("mailto") ? undefined : "_blank"} rel={ch.href.startsWith("mailto") ? undefined : "noopener noreferrer"} style={{ fontSize: "16px", color: "var(--text-sec)", textDecoration: "none", letterSpacing: "0.04em" }}>
                    {ch.value} ↗
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
