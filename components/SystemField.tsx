interface SystemFieldProps {
  label: string;
  value: React.ReactNode;
}

export default function SystemField({ label, value }: SystemFieldProps) {
  return (
    <div className="field-row">
      <span className="field-label">{label}</span>
      <span style={{ color: "var(--text-main)", minWidth: 0 }}>{value}</span>
    </div>
  );
}
