interface SystemFieldProps {
  label: string;
  value: React.ReactNode;
}

export default function SystemField({ label, value }: SystemFieldProps) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "0 8px", fontSize: "16px", lineHeight: "1.8" }}>
      <span style={{ color: "var(--text-dim)", letterSpacing: "0.06em" }}>{label}</span>
      <span style={{ color: "var(--text-main)" }}>{value}</span>
    </div>
  );
}
