"use client";
import { useEffect, useRef } from 'react';

const data = [
  { num: 3, suffix: "", label: "National systems shipped" },
  { num: 20, suffix: "+", label: "Trade categories — ZimFix" },
  { num: 2, suffix: " yrs", label: "Industry experience" },
  { num: 100, suffix: "%", label: "Degree completion" },
];

export default function Stats() {
  const refs = useRef<HTMLSpanElement[]>([]);
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target as HTMLSpanElement;
        const target = parseFloat(el.dataset.count || "0");
        const suffix = el.dataset.suffix || "";
        const dur = 1600;
        let start: number | null = null;
        const step = (ts: number) => {
          if (!start) start = ts;
          const p = Math.min((ts - start) / dur, 1);
          const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
          el.textContent = Math.round(target * eased) + suffix;
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        io.unobserve(el);
      });
    }, { threshold: 0.6 });
    refs.current.forEach(el => el && io.observe(el));
    return () => io.disconnect();
  }, []);
  return (
    <section style={{ padding: "0 var(--pad)", maxWidth: "var(--maxw)", margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1px", background: "var(--line)", border: "1px solid var(--line)", borderRadius: "8px", overflow: "hidden" }}>
        {data.map((item, i) => (
          <div key={item.label} className="stat" style={{ background: "var(--ink-2)", padding: "clamp(1.6rem,4vw,2.6rem)", display: "flex", flexDirection: "column", gap: ".4rem", transition: "background .4s" }} onMouseEnter={(e) => (e.currentTarget.style.background = "var(--ink-3)")} onMouseLeave={(e) => (e.currentTarget.style.background = "var(--ink-2)")}>
            <span ref={(el) => { if (el) refs.current[i] = el; }} data-count={item.num} data-suffix={item.suffix} style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: "clamp(2.4rem,5vw,3.6rem)", lineHeight: 1, color: "var(--signal)", letterSpacing: "-0.02em" }}>0{item.suffix}</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: ".72rem", letterSpacing: ".06em", color: "var(--text-dim)", textTransform: "uppercase" }}>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}