"use client";

import { useEffect, useRef } from "react";

export default function Constellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d")!;
    let w: number, h: number, dpr: number;
    let nodes: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
    const mouse = { x: -9999, y: -9999 };
    let animId: number;

    function size() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas!.width = window.innerWidth * dpr;
      h = canvas!.height = window.innerHeight * dpr;
      canvas!.style.width = window.innerWidth + "px";
      canvas!.style.height = window.innerHeight + "px";
      buildNodes();
    }

    function buildNodes() {
      const count = Math.min(90, Math.floor((window.innerWidth * window.innerHeight) / 16000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.18 * dpr,
        vy: (Math.random() - 0.5) * 0.18 * dpr,
        r: (Math.random() * 1.4 + 0.4) * dpr,
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      const linkDist = 130 * dpr;
      const mxd = mouse.x * dpr;
      const myd = mouse.y * dpr;

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,212,200,0.55)";
        ctx.fill();

        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          const dx = n.x - m.x;
          const dy = n.y - m.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < linkDist) {
            const a = (1 - d / linkDist) * 0.18;
            ctx.strokeStyle = `rgba(150,200,255,${a})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.stroke();
          }
        }

        const dmx = n.x - mxd;
        const dmy = n.y - myd;
        const dm = Math.sqrt(dmx * dmx + dmy * dmy);
        const mDist = 180 * dpr;
        if (dm < mDist) {
          const a = (1 - dm / mDist) * 0.5;
          ctx.strokeStyle = `rgba(0,212,200,${a})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(mxd, myd);
          ctx.stroke();
        }
      }
      animId = requestAnimationFrame(draw);
    }

    const onMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onOut  = () => { mouse.x = -9999; mouse.y = -9999; };
    let rt: ReturnType<typeof setTimeout>;
    const onResize = () => { clearTimeout(rt); rt = setTimeout(size, 200); };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onOut);
    window.addEventListener("resize", onResize);

    size();
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onOut);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -2,
        pointerEvents: "none",
      }}
      aria-hidden="true"
    />
  );
}