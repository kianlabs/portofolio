"use client";

import { useEffect, useState, useRef } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  /** how often glitch fires in ms, default 3000 */
  interval?: number;
  /** glitch duration in ms, default 400 */
  duration?: number;
}

const GLITCH_CHARS = "!<>-_\\/[]{}—=+*^?#@$%&";

function randomChar() {
  return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
}

function glitchString(original: string, intensity: number): string {
  return original
    .split("")
    .map((char) => {
      if (char === " ") return " ";
      return Math.random() < intensity ? randomChar() : char;
    })
    .join("");
}

export default function GlitchText({
  text,
  className = "",
  style,
  interval = 3200,
  duration = 380,
}: GlitchTextProps) {
  const [display, setDisplay] = useState(text);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const frameRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    function startGlitch() {
      let elapsed = 0;
      const step = 40;

      frameRef.current = setInterval(() => {
        elapsed += step;
        const progress = elapsed / duration;
        // intensity peaks at middle then fades
        const intensity = progress < 0.5
          ? progress * 0.8
          : (1 - progress) * 0.8;

        if (elapsed >= duration) {
          clearInterval(frameRef.current!);
          setDisplay(text);
          // schedule next glitch
          timerRef.current = setTimeout(startGlitch, interval);
        } else {
          setDisplay(glitchString(text, intensity));
        }
      }, step);
    }

    // first glitch after short delay
    timerRef.current = setTimeout(startGlitch, interval * 0.4);

    return () => {
      clearTimeout(timerRef.current!);
      clearInterval(frameRef.current!);
    };
  }, [text, interval, duration]);

  return (
    <span
      className={className}
      style={{
        ...style,
        fontVariantNumeric: "tabular-nums",
        display: "inline-block",
      }}
      aria-label={text}
    >
      {display}
    </span>
  );
}
