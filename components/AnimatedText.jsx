"use client";

import { useEffect, useMemo, useState } from "react";

export default function AnimatedText({
  text = "",
  speed = 55,
  pause = 1200,
  loop = true,
  className = "",
}) {
  const chars = useMemo(() => String(text), [text]);
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!chars.length) return;

    let t;

    // typing forward
    if (!deleting) {
      if (i < chars.length) {
        t = setTimeout(() => setI((v) => v + 1), speed);
      } else {
        // reached end
        if (!loop) return;
        t = setTimeout(() => setDeleting(true), pause);
      }
    } else {
      // deleting backward
      if (i > 0) {
        t = setTimeout(() => setI((v) => v - 1), Math.max(25, speed - 20));
      } else {
        t = setTimeout(() => setDeleting(false), 250);
      }
    }

    return () => clearTimeout(t);
  }, [chars, i, deleting, speed, pause, loop]);

  return (
    <span className={className}>
      {chars.slice(0, i)}
      <span className="inline-block w-[10px] align-baseline animate-pulse">|</span>
    </span>
  );
}