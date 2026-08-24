import Link from "next/link";
import PageTransition from "@/components/PageTransition";

export default function NotFound() {
  return (
    <PageTransition>
      <div style={{ padding: "20px 20px", maxWidth: "600px", margin: "0 auto", width: "100%", display: "flex", flexDirection: "column", gap: "16px" }}>
        <div style={{ fontSize: "13px", letterSpacing: "0.14em", color: "var(--text-dim)" }}>ERROR / 404</div>
        <div style={{ borderTop: "1px solid var(--border)", paddingTop: "20px" }}>
          <h1 style={{ fontSize: "48px", fontWeight: 700, letterSpacing: "0.06em", color: "var(--text-main)", lineHeight: 1, marginBottom: "8px" }}>
            404
          </h1>
          <p style={{ fontSize: "14px", color: "var(--text-dim)", letterSpacing: "0.12em", marginBottom: "14px" }}>
            NODE NOT FOUND
          </p>
          <p style={{ fontSize: "17px", color: "var(--text-sec)", lineHeight: "1.7", marginBottom: "14px" }}>
            Halaman yang kamu cari tidak ada atau sudah dipindahkan.
          </p>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            <Link href="/" className="sys-btn">← BACK TO HOME</Link>
            <Link href="/work" className="sys-btn">[03] WORK</Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}