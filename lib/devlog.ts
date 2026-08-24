export interface DevlogEntry {
  id: string;
  date: string;
  title: string;
  tag: string;
  body: string[];
}

export const devlogEntries: DevlogEntry[] = [
  {
    id: "001",
    date: "2026-08-24",
    title: "Membangun ulang portfolio jadi IDE",
    tag: "BUILD",
    body: [
      "Portfolio versi pertama saya cuma HTML/CSS murni dengan efek typing sederhana. Kali ini saya rebuild total pakai Next.js + TypeScript, dengan konsep: situsnya sendiri harus terlihat seperti IDE yang sedang saya pakai coding.",
      "Hasilnya: file explorer sidebar, tab editor (home.tsx, profile.tsx), command palette Ctrl+K, sampai boot sequence ala BIOS. Semuanya pakai font pixel Cozette biar feel retro-terminalnya kuat.",
      "Pelajaran terbesar: konsistensi tema itu mahal harganya — satu keputusan kecil yang meleset (misal warna aksen beda tipis) bisa merusak kesan keseluruhan.",
    ],
  },
  {
    id: "002",
    date: "2026-08-20",
    title: "Klasifikasi keuangan UMKM dengan Gaussian Naive Bayes",
    tag: "AI",
    body: [
      "Proyek skripsi saya: sistem klasifikasi kondisi keuangan UMKM. Input-nya data keuangan, output-nya klasifikasi kondisi beserta rekomendasi.",
      "Kenapa Naive Bayes? Sederhana, cepat, dan cukup untuk dataset ukuran skripsi. Tantangan terbesarnya bukan modelnya, tapi data — keuangan UMKM itu beneran kacau dan tidak terstruktur.",
      "Berikutnya saya mau bandingkan hasilnya dengan model lain: logistic regression dan decision tree, biar ada pembanding objektif di sidang.",
    ],
  },
  {
    id: "003",
    date: "2026-08-14",
    title: "Ricing Arch Linux tanpa akhir",
    tag: "LINUX",
    body: [
      "Setup saya sekarang: Arch + Hyprland, terminal penuh warna abu-abu dengan satu aksen hijau. Font pixel Cozette untuk semuanya.",
      "Ricing tuh kelihatannya buang waktu — tapi justru dari situ saya paham cara kerja sistem: window manager, shell, dotfiles, service management. Setup sendiri = belajar sistem operasi secara paksa.",
      "Config lengkapnya ada di github.com/kianlabs/dotfiles. Selalu dalam keadaan work-in-progress, seperti hidup.",
    ],
  },
];
