"use client";
import { useEffect, useRef, useState } from 'react';

const ticker = [
  "Full-Stack Dev", "·", "Cloud Computing", "·", "3 National Systems", "·",
  "Chrome Extension", "·", "Mobile Fintech", "·", "AI Integration", "·",
  "HPC Administration", "·", "UAT & QA", "·", "Full-Stack Dev", "·",
  "Cloud Computing", "·", "3 National Systems", "·", "Chrome Extension", "·",
  "Mobile Fintech", "·", "AI Integration", "·", "HPC Administration", "·", "UAT & QA", "·",
];

const roles = ["Full-Stack Developer", "Cloud Engineer", "AI Integrator", "Systems Builder"];

const proof = [
  { v: "3", l: "national-scale systems shipped" },
  { v: "0.903", l: "F1 — SENTRY AI phishing detector" },
  { v: "1", l: "mobile fintech app in production" },
];

export default function Hero() {
  const revealRefs = useRef<HTMLElement[]>([]);
  const [role, setRole] = useState(0);
  const [clock, setClock] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      revealRefs.current.forEach((el, i) => {
        if (!el) return;
        setTimeout(() => el.classList.add("in"), i * 110);
      });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // cycle the role line
  useEffect(() => {
    const id = setInterval(() => setRole((r) => (r + 1) % roles.length), 2300);
    return () => clearInterval(id);
  }, []);

  // live Harare time (client-only to avoid hydration mismatch)
  useEffect(() => {
    const fmt = () => new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Africa/Harare" }).format(new Date());
    setClock(fmt());
    const id = setInterval(() => setClock(fmt()), 15000);
    return () => clearInterval(id);
  }, []);

  const ref = (i: number) => (el: HTMLElement | null) => {
    if (el) revealRefs.current[i] = el;
  };

  return (
    <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: "9.5rem", paddingBottom: "6rem", paddingLeft: "var(--pad)", paddingRight: "var(--pad)", overflow: "hidden", position: "relative" }}>

      {/* Ticker */}
      <div style={{ position: "absolute", top: "72px", left: 0, right: 0, overflow: "hidden", borderBottom: "1px solid var(--line-soft)", padding: "0.9rem 0", WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)", maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)" }}>
        <div style={{ display: "inline-flex", gap: "1.4rem", whiteSpace: "nowrap", fontFamily: "var(--font-mono)", fontSize: ".8rem", color: "var(--text-faint)", animation: "ticker 38s linear infinite", willChange: "transform" }}>
          {ticker.map((t, i) => <span key={i} style={{ color: t === "·" ? "var(--text-faint)" : "var(--text-dim)" }}>{t}</span>)}
        </div>
      </div>

      {/* Oversized ghost wordmark */}
      <div aria-hidden="true" style={{ position: "absolute", right: "-2%", bottom: "4%", fontFamily: "var(--font-display)", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(8rem, 26vw, 24rem)", lineHeight: 0.8, letterSpacing: "-.04em", color: "transparent", WebkitTextStroke: "1px rgba(0,212,200,0.06)", userSelect: "none", pointerEvents: "none", whiteSpace: "nowrap", zIndex: 0 }}>TM</div>

      <div style={{ maxWidth: "var(--maxw)", margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>

        {/* Eyebrow row: status + live clock */}
        <div ref={ref(0)} className="reveal" style={{ display: "flex", alignItems: "center", gap: "1.2rem", flexWrap: "wrap", marginBottom: "1.8rem" }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: ".78rem", letterSpacing: ".12em", color: "var(--text-dim)", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: ".6rem", margin: 0 }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--signal)", boxShadow: "0 0 0 0 var(--glow)", animation: "pulse 2.4s infinite", display: "inline-block" }} />
            Available for select 2026 engagements
          </p>
          <span style={{ width: "24px", height: "1px", background: "var(--line)", display: "inline-block" }} />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: ".72rem", letterSpacing: ".08em", color: "var(--text-faint)", textTransform: "uppercase", minHeight: "1em" }}>
            Harare {clock ?? "—:—"} · GMT+2
          </span>
        </div>

        {/* Name */}
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: "clamp(3.4rem, 14vw, 11rem)", lineHeight: 0.86, letterSpacing: "-0.035em", marginBottom: "1.2rem" }}>
          <span ref={ref(1)} className="reveal" style={{ display: "block", overflow: "hidden" }}>
            <span style={{ display: "inline-block" }}>Tanyaradzwa</span>
          </span>
          <span ref={ref(2)} className="reveal" style={{ display: "block", overflow: "hidden" }}>
            <em style={{ fontStyle: "italic", color: "var(--signal)", textShadow: "0 0 60px var(--glow)", display: "inline-block", fontWeight: 300 }}>Manjengwa</em>
          </span>
        </h1>

        {/* Rotating role line */}
        <div ref={ref(3)} className="reveal" style={{ display: "flex", alignItems: "center", gap: ".7rem", fontFamily: "var(--font-mono)", fontSize: "clamp(.95rem, 2vw, 1.3rem)", color: "var(--text)", marginBottom: "2rem", minHeight: "1.6em" }}>
          <span style={{ color: "var(--text-faint)" }}>{"{"}</span>
          <span key={role} className="role-rotate" style={{ color: "var(--signal)", fontWeight: 500 }}>{roles[role]}</span>
          <span style={{ width: "10px", height: "1.05em", background: "var(--signal)", display: "inline-block", animation: "blink 1.1s step-end infinite", transform: "translateY(.12em)" }} />
          <span style={{ color: "var(--text-faint)" }}>{"}"}</span>
        </div>

        {/* Sub */}
        <p ref={ref(4)} className="reveal" style={{ maxWidth: "48ch", fontSize: "clamp(1.05rem, 2.2vw, 1.4rem)", color: "var(--text-dim)", lineHeight: 1.55, marginBottom: "2.4rem", fontWeight: 300 }}>
          I build <span className="hl">production-grade</span> web, mobile, and AI-integrated platforms — from national government systems to fintech in your pocket.
        </p>

        {/* Proof chips — markets from first look */}
        <div ref={ref(5)} className="reveal" style={{ display: "flex", gap: ".8rem", flexWrap: "wrap", marginBottom: "2.8rem" }}>
          {proof.map((p) => (
            <div key={p.l} className="proof-chip" style={{ display: "inline-flex", alignItems: "baseline", gap: ".6rem", padding: ".7rem 1.1rem", border: "1px solid var(--line)", borderRadius: "100px", background: "rgba(11,17,32,0.5)", backdropFilter: "blur(8px)", transition: "border-color .3s var(--ease), transform .3s var(--ease)" }}>
              <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "1.25rem", color: "var(--signal)", lineHeight: 1 }}>{p.v}</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: ".72rem", color: "var(--text-dim)", letterSpacing: ".02em" }}>{p.l}</span>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div ref={ref(6)} className="reveal" style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2.8rem" }}>
          <a href="#work" className="magnetic" style={{ fontFamily: "var(--font-mono)", fontSize: ".82rem", letterSpacing: ".03em", padding: "1rem 1.7rem", borderRadius: "100px", border: "1px solid var(--signal)", background: "var(--signal)", color: "var(--ink)", fontWeight: 600, position: "relative", overflow: "hidden", transition: "all .35s var(--ease)", display: "inline-block", boxShadow: "0 0 30px rgba(0,212,200,0.25)" }} onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 0 50px rgba(0,212,200,0.45)"; }} onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 0 30px rgba(0,212,200,0.25)"; }}>View the work</a>
          <a href="#contact" className="magnetic" style={{ fontFamily: "var(--font-mono)", fontSize: ".82rem", letterSpacing: ".03em", padding: "1rem 1.7rem", borderRadius: "100px", border: "1px solid var(--line)", color: "var(--text)", transition: "all .35s var(--ease)", display: "inline-block" }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--signal)"; e.currentTarget.style.color = "var(--signal)"; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--line)"; e.currentTarget.style.color = "var(--text)"; }}>
            Let&apos;s talk →
          </a>
        </div>

        {/* Footer line */}
        <div ref={ref(7)} className="reveal" style={{ display: "flex", alignItems: "center", gap: "1.2rem", fontFamily: "var(--font-mono)", fontSize: ".76rem", color: "var(--text-faint)", flexWrap: "wrap" }}>
          <span>Remote-ready</span>
          <span style={{ width: "28px", height: "1px", background: "var(--line)", display: "inline-block" }} />
          <span>React · Node.js · Flask · PostgreSQL · Docker · Huawei Cloud</span>
        </div>
      </div>

      {/* Scroll cue */}
      <a href="#about" onClick={(e) => { e.preventDefault(); document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" }); }} style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: ".6rem", fontFamily: "var(--font-mono)", fontSize: ".64rem", letterSpacing: ".25em", textTransform: "uppercase", color: "var(--text-faint)", zIndex: 1 }}>
        <span>scroll</span>
        <span style={{ width: "1px", height: "46px", background: "linear-gradient(var(--signal), transparent)", position: "relative", overflow: "hidden", display: "block" }} />
      </a>

      <style>{`
        @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(0,212,200,.5); } 70% { box-shadow: 0 0 0 12px rgba(0,212,200,0); } 100% { box-shadow: 0 0 0 0 rgba(0,212,200,0); } }
        @keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes roleIn { from { opacity: 0; transform: translateY(0.5em); } to { opacity: 1; transform: none; } }
        .role-rotate { animation: roleIn .5s var(--ease); }
        .proof-chip:hover { border-color: var(--signal) !important; transform: translateY(-2px); }
        @media (prefers-reduced-motion: reduce) {
          .role-rotate { animation: none; }
        }
      `}</style>
    </section>
  );
}
