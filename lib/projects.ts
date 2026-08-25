export type ProjectTag = "WEB" | "FULLSTACK" | "BACKEND" | "ML" | "EXPERIMENT";

export interface Project {
  id: string;
  slug: string;
  index: number;
  name: string;
  shortDesc: string;
  year: number;
  type: ProjectTag;
  stack: string[];
  status: "COMPLETED" | "IN PROGRESS" | "ARCHIVED";
  featured: boolean;
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  overview: string;
  problem: string;
  solution: string;
  architecture?: string;
  challenges: string;
  learned: string;
}

export const projects: Project[] = [
  {
    id: "001",
    slug: "umkm-finance-classifier",
    index: 1,
    name: "UMKM Finance Classifier",
    shortDesc:
      "Sistem klasifikasi kondisi keuangan UMKM menggunakan Gaussian Naïve Bayes.",
    year: 2026,
    type: "ML",
    stack: ["Python", "Flask", "Gaussian Naïve Bayes", "MySQL"],
    status: "COMPLETED",
    featured: true,
    image: "/umkm-finance.jpg",
    githubUrl: "https://github.com/kianlabs/skripsi",
    overview:
      "Aplikasi web untuk mengklasifikasikan kondisi keuangan UMKM menggunakan algoritma machine learning Gaussian Naïve Bayes. Dikembangkan sebagai proyek skripsi di Universitas Duta Bangsa Surakarta.",
    problem:
      "UMKM di Indonesia sering kesulitan mengevaluasi kondisi keuangan mereka secara objektif. Tidak ada tools sederhana yang dapat memberikan klasifikasi berdasarkan data keuangan aktual.",
    solution:
      "Membangun sistem berbasis web yang menerima input data keuangan UMKM, memproses menggunakan model Gaussian Naïve Bayes, dan menghasilkan klasifikasi kondisi keuangan beserta rekomendasi.",
    architecture:
      "Frontend form berbasis HTML/CSS menerima input pengguna. Data dikirim ke Flask backend yang menjalankan model GNB yang sudah ditraining. Hasil klasifikasi dikembalikan dan ditampilkan secara visual.",
    challenges:
      "Data keuangan UMKM sangat bervariasi dan tidak terstruktur. Feature engineering untuk memastikan model memberikan hasil yang akurat membutuhkan iterasi panjang.",
    learned:
      "Proses lengkap machine learning pipeline dari data collection, preprocessing, training, evaluasi, hingga deployment.",
  },
  {
    id: "002",
    slug: "kyandev-web-services",
    index: 2,
    name: "KyanDev Web Services",
    shortDesc:
      "Layanan jasa pembuatan website — landing page, company profile, web application, dan maintenance.",
    year: 2026,
    type: "WEB",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Laravel", "PostgreSQL"],
    status: "COMPLETED",
    featured: true,
    liveUrl: "https://kyanweb.vercel.app",
    overview:
      "Website bisnis untuk layanan jasa pembuatan website. Menampilkan daftar layanan, contoh pekerjaan, pricing transparan, FAQ, dan integrasi WhatsApp untuk konsultasi gratis.",
    problem:
      "Butuh platform profesional untuk menawarkan jasa pembuatan website — mulai dari landing page hingga web application — dengan pricing yang jelas dan cara kontak yang mudah.",
    solution:
      "Membangun website multi-halaman dengan section layanan (Landing Page, Company Profile, Web Application, Maintenance), pricing breakdown, selected work showcase, cara kerja, FAQ, dan form kontak + WhatsApp button.",
    challenges:
      "Menyusun pricing yang transparan dan meyakinkan. Mengelola konten yang cukup banyak (layanan, FAQ, pricing) agar tetap rapi dan cepat diakses.",
    learned:
      "Bagaimana membangun website bisnis yang efektif — dari struktur konten, pricing psychology, hingga integrasi WhatsApp sebagai channel utama komunikasi dengan klien.",
  },
  {
    id: "003",
    slug: "portfolio-v1",
    index: 3,
    name: "Portfolio v1",
    shortDesc: "Website portofolio personal versi pertama berbasis HTML/CSS/JS.",
    year: 2026,
    type: "WEB",
    stack: ["HTML", "CSS", "JavaScript"],
    status: "ARCHIVED",
    featured: false,
    githubUrl: "https://github.com/kianlabs",
    overview:
      "Portofolio personal pertama dengan terminal aesthetic, dibangun murni dengan HTML, CSS, dan vanilla JavaScript tanpa framework.",
    problem:
      "Butuh portofolio online yang mencerminkan kepribadian sebagai developer yang tertarik pada sistem dan terminal.",
    solution:
      "Single-page portfolio dengan terminal prompt aesthetic, JetBrains Mono, scanline effect, dan animasi typing sederhana.",
    challenges:
      "Membuat animasi yang smooth tanpa framework. Responsive design tanpa utility framework.",
    learned:
      "Fondasi HTML/CSS/JS yang kuat sebelum beralih ke framework.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
