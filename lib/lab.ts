export interface LabItem {
  id: string;
  index: number;
  name: string;
  desc: string;
  category: "CONFIG" | "UI" | "TOOL" | "EXPERIMENT" | "OPEN SOURCE";
  year: number;
  url?: string;
  status: "ACTIVE" | "ARCHIVED" | "WIP";
}

export const labItems: LabItem[] = [
  {
    id: "lab-001",
    index: 1,
    name: "dotfiles",
    desc: "Konfigurasi personal untuk Arch Linux + Hyprland + Kitty + p10k.",
    category: "CONFIG",
    year: 2026,
    url: "https://github.com/kianlabs",
    status: "ACTIVE",
  },
  {
    id: "lab-002",
    index: 2,
    name: "terminal-portfolio-v1",
    desc: "Eksperimen portfolio berbasis HTML/CSS/JS murni dengan terminal aesthetic.",
    category: "EXPERIMENT",
    year: 2026,
    url: "https://github.com/kianlabs",
    status: "ARCHIVED",
  },
  {
    id: "lab-003",
    index: 3,
    name: "kyan.dev",
    desc: "Portfolio system ini sendiri. Next.js 14, TypeScript, Framer Motion.",
    category: "OPEN SOURCE",
    year: 2026,
    url: "https://github.com/kianlabs",
    status: "ACTIVE",
  },
];
