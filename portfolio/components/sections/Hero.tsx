"use client";
import { useEffect, useRef } from 'react';

const ticker = [
  "Full-Stack Dev", "·", "Cloud Computing", "·", "3 National Systems", "·",
  "Chrome Extension", "·", "Mobile Fintech", "·", "AI Integration", "·",
  "HPC Administration", "·", "UAT & QA", "·", "Full-Stack Dev", "·",
  "Cloud Computing", "·", "3 National Systems", "·", "Chrome Extension", "·",
  "Mobile Fintech", "·", "AI Integration", "·", "HPC Administration", "·", "UAT & QA", "·",
];

export default function Hero() {
  const revealRefs = useRef<HTMLElement[]>([]);
  useEffect(() => {
    const timer = setTimeout(() => {
      revealRefs.current.forEach((el, i) => {
        if (!el) return;
        setTimeout(() => el.classList.add("in"), i * 120);
      });
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  const ref = (i: number) => (el: HTMLElement | null) => {
    if (el) revealRefs.current[i] = el;
  };
  return (
    <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: "8rem", paddingBottom: "6rem", paddingLeft: "var(--pad)", paddingRight: "var(--pad)", overflow: "hidden", position: "relative" }}>

      {/* Ticker */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, overflow: "hidden", borderBottom: "1px solid var(--line-soft)", padding: "1.1rem 0", WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)", maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)" }}>
        <div style={{ display: "inline-flex", gap: "1.4rem", whiteSpace: "nowrap", fontFamily: "var(--font-mono)", fontSize: ".8rem", color: "var(--text-faint)", animation: "ticker 38s linear infinite", willChange: "transform" }}>
          {ticker.map((t, i) => <span key={i} style={{ color: t === "·" ? "var(--text-faint)" : "var(--text-dim)" }}>{t}</span>)}
        </div>
      </div>

      <div style={{ maxWidth: "var(--maxw)", margin: "0 auto", width: "100%" }}>

        {/* Eyebrow */}
        <p ref={ref(0)} className="reveal" style={{ fontFamily: "var(--font-mono)", fontSize: ".78rem", letterSpacing: ".12em", color: "var(--text-dim)", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: ".6rem", marginBottom: "1.6rem" }}>
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--signal)", boxShadow: "0 0 0 0 var(--glow)", animation: "pulse 2.4s infinite", display: "inline-block" }} />
          Available for select 2026 engagements
        </p>

        {/* Name */}
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: "clamp(3.4rem, 14vw, 11rem)", lineHeight: 0.86, letterSpacing: "-0.035em", marginBottom: "2rem" }}>
          <span ref={ref(1)} className="reveal" style={{ display: "block", overflow: "hidden" }}>
            <span style={{ display: "inline-block" }}>Tanyaradzwa</span>
          </span>
          <span ref={ref(2)} className="reveal" style={{ display: "block", overflow: "hidden" }}>
            <em style={{ fontStyle: "italic", color: "var(--signal)", textShadow: "0 0 60px var(--glow)", display: "inline-block", fontWeight: 300 }}>Manjengwa</em>
          </span>
        </h1>

        {/* Sub */}
        <p ref={ref(3)} className="reveal" style={{ maxWidth: "46ch", fontSize: "clamp(1.05rem, 2.2vw, 1.4rem)", color: "var(--text-dim)", lineHeight: 1.55, marginBottom: "2.6rem", fontWeight: 300 }}>
          Full-Stack Developer building <span className="hl">production-grade</span> web, mobile, and AI-integrated platforms — from national government systems to fintech apps.
        </p>

        {/* Actions */}
        <div ref={ref(4)} className="reveal" style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "3rem" }}>
          <a href="#work" className="magnetic" style={{ fontFamily: "var(--font-mono)", fontSize: ".82rem", letterSpacing: ".03em", padding: "1rem 1.7rem", borderRadius: "100px", border: "1px solid var(--signal)", background: "var(--signal)", color: "var(--ink)", position: "relative", overflow: "hidden", transition: "all .35s var(--ease)", display: "inline-block" }}>View the work</a>
          <a href="#contact" className="magnetic" style={{ fontFamily: "var(--font-mono)", fontSize: ".82rem", letterSpacing: ".03em", padding: "1rem 1.7rem", borderRadius: "100px", border: "1px solid var(--line)", color: "var(--text)", transition: "all .35s var(--ease)", display: "inline-block" }}>
            Let's talk →
          </a>
        </div>

        {/* Footer line */}
        <div ref={ref(5)} className="reveal" style={{ display: "flex", alignItems: "center", gap: "1.2rem", fontFamily: "var(--font-mono)", fontSize: ".76rem", color: "var(--text-faint)", flexWrap: "wrap" }}>
          <span>Harare, Zimbabwe · Remote-ready</span>
          <span style={{ width: "28px", height: "1px", background: "var(--line)", display: "inline-block" }} />
          <span>React · Node.js · Flask · PostgreSQL · Docker · Huawei Cloud</span>
        </div>
      </div>

      {/* Scroll cue */}
      <a href="#about" onClick={(e) => { e.preventDefault(); document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" }); }} style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: ".6rem", fontFamily: "var(--font-mono)", fontSize: ".64rem", letterSpacing: ".25em", textTransform: "uppercase", color: "var(--text-faint)" }}>
        <span>scroll</span>
        <span style={{ width: "1px", height: "46px", background: "linear-gradient(var(--signal), transparent)", position: "relative", overflow: "hidden", display: "block" }} />
      </a>

      <style>{`
        @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(0,212,200,.5); } 70% { box-shadow: 0 0 0 12px rgba(0,212,200,0); } 100% { box-shadow: 0 0 0 0 rgba(0,212,200,0); } }
      `}</style>
    </section>
  );
}