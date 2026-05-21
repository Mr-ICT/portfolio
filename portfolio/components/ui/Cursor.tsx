"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ring = ringRef.current;
    const dot  = dotRef.current;
    if (!ring || !dot) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my;
    let animId: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
    };

    function loop() {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ring) ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      animId = requestAnimationFrame(loop);
    }

    window.addEventListener("mousemove", onMove);
    loop();

    const targets = document.querySelectorAll("a, button, .magnetic, .tag-cloud span, .project, .stat");
    const enter = () => ring.classList.add("hover");
    const leave = () => ring.classList.remove("hover");
    targets.forEach(t => { t.addEventListener("mouseenter", enter); t.addEventListener("mouseleave", leave); });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMove);
      targets.forEach(t => { t.removeEventListener("mouseenter", enter); t.removeEventListener("mouseleave", leave); });
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor" aria-hidden="true" />
      <div ref={dotRef}  className="cursor-dot" aria-hidden="true" />
    </>
  );
}