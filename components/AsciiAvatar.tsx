"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

const MAX_SHIFT = 4;

export default function AsciiAvatar() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 120, damping: 18, mass: 0.4 });
  const y = useSpring(my, { stiffness: 120, damping: 18, mass: 0.4 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !ref.current) return;
    if (typeof window !== "undefined" && !window.matchMedia("(hover: hover)").matches)
      return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const py = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    mx.set(Math.max(-1, Math.min(1, px)) * MAX_SHIFT);
    my.set(Math.max(-1, Math.min(1, py)) * MAX_SHIFT);
  };

  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x,
        y,
        width: "100%",
        maxWidth: "280px",
        aspectRatio: "1/1",
        border: "1px solid var(--border)",
        backgroundColor: "#ffffff",
        marginBottom: "14px",
        position: "relative",
        overflow: "hidden",
      }}
      className="profile-avatar"
      aria-label="1-bit dithered portrait of Kyan"
    >
      <Image
        src="/avatar-1bit.png"
        alt="Kyan — 1-bit dithered portrait"
        fill
        style={{
          objectFit: "contain",
          objectPosition: "center",
          imageRendering: "pixelated",
        }}
        sizes="280px"
        priority
      />
    </motion.div>
  );
}
