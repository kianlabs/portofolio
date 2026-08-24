import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SystemFrame from "@/components/SystemFrame";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  display: "swap",
});

const cozette = localFont({
  src: [
    { path: "./fonts/CozetteVector.woff2", weight: "400", style: "normal" },
    { path: "./fonts/CozetteVectorBold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-cozette",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KYAN.DEV // PERSONAL SYSTEM",
  description: "Ridzkyan — Web Developer. Personal portfolio system: projects, profile, lab.",
  keywords: ["web developer", "portfolio", "Next.js", "React", "fullstack"],
  authors: [{ name: "Ridzkyan" }],
  openGraph: {
    title: "KYAN.DEV // PERSONAL SYSTEM",
    description: "Ridzkyan — Web Developer",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable} ${cozette.variable}`}>
      <head />
      <body>
        <a
          href="#main-content"
          style={{ position: "absolute", left: "-9999px", top: "auto", width: "1px", height: "1px", overflow: "hidden" }}
        >
          Skip to main content
        </a>
        <SystemFrame>{children}</SystemFrame>
      </body>
    </html>
  );
}
