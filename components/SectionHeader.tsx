interface SectionHeaderProps {
  label: string;
  meta?: string;
  className?: string;
}

export default function SectionHeader({ label, meta, className = "" }: SectionHeaderProps) {
  return (
    <div className={`mb-3 ${className}`}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "6px" }}>
        <span style={{ fontSize: "15px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-sec)", fontWeight: 500 }}>
          {label}
        </span>
        {meta && (
          <span style={{ fontSize: "14px", color: "var(--text-dim)", letterSpacing: "0.08em" }}>{meta}</span>
        )}
      </div>
      <div className="divider" />
    </div>
  );
}
