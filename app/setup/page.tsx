import PageTransition from "@/components/PageTransition";
import SectionHeader from "@/components/SectionHeader";
import SystemField from "@/components/SystemField";

const pcSpecs = [
  { label: "CPU", value: "Intel Core i7-9700K @ 3.60GHz (8 Core)" },
  { label: "GPU", value: "NVIDIA GeForce RTX 2060 SUPER" },
  { label: "RAM", value: "16GB" },
  { label: "STORAGE", value: "NVMe SSD + 1TB HDD" },
  { label: "OS", value: "Arch Linux + Hyprland (btw)" },
  { label: "EDITOR", value: "VS Code" },
];

export default function SetupPage() {
  return (
    <PageTransition>
      <div style={{ padding: "20px 20px", maxWidth: "800px", margin: "0 auto", width: "100%" }}>
        <div style={{ marginBottom: "14px" }}>
          <span style={{ fontSize: "12px", letterSpacing: "0.14em", color: "var(--text-dim)" }}>DIRECTORY / SETUP</span>
        </div>

        <section aria-label="PC specifications">
          <SectionHeader label="PC SPECS" meta="$ neofetch" />
          <div style={{ display: "flex", flexDirection: "column", maxWidth: "560px" }}>
            {pcSpecs.map((spec) => (
              <SystemField key={spec.label} label={spec.label} value={spec.value} />
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
