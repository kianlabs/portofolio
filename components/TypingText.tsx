"use client";

import { useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  cursor?: boolean;
  onDone?: () => void;
}

export default function TypingText({
  text,
  speed = 45,
  delay = 0,
  className = "",
  style,
  cursor = true,
  onDone,
}: TypingTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let index = 0;
    setDisplayed("");
    setDone(false);

    let interval: ReturnType<typeof setInterval> | undefined;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        index += 1;
        setDisplayed(text.slice(0, index));
        if (index >= text.length) {
          clearInterval(interval);
          setDone(true);
          onDone?.();
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [text, speed, delay, onDone]);

  return (
    <span className={className} style={style}>
      {displayed}
      {cursor && !done && <span className="cursor-blink" />}
    </span>
  );
}
