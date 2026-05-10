"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const barRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + "%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="progress" aria-hidden="true">
      <span ref={barRef} />
    </div>
  );
}