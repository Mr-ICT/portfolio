"use client";
import { useEffect, useRef } from 'react';

export default function About() {
  const refs = useRef<HTMLElement[]>([]);
  const r = (i: number) => (el: HTMLElement | null) => { if (el) refs.current[i] = el; };
  useEffect(() => {
    if (!("IntersectionObserver" in window)) { refs.current.forEach(el => el?.classList.add("in")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    refs.current.forEach(el => el && io.observe(el));
    return () => io.disconnect();
  }, []);
  return (
    <section id="about" style={{ padding: "clamp(5rem,12vh,9rem) var(--pad)", maxWidth: "var(--maxw)", margin: "0 auto" }}>
      <header style={{ marginBottom: "clamp(2.5rem,6vw,4.5rem)" }}>
        <span className="sec-num">01</span>
        <h2 className="sec-title">A developer, not just<br/><em>a coder.</em></h2>
      </header>
      <div style={{ display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: "clamp(2rem,6vw,5rem)", alignItems: "start" }}>

        {/* Portrait card */}
        <div ref={r(0)} className="reveal" style={{ position: "sticky", top: "8rem" }}>
          <div style={{ position: "relative" }}>
            <div style={{ aspectRatio: "4/5", border: "1px solid var(--line)", borderRadius: "6px", background: "linear-gradient(135deg, var(--ink-3), var(--ink-2))", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(var(--line-soft) 1px, transparent 1px), linear-gradient(90deg, var(--line-soft) 1px, transparent 1px)", backgroundSize: "28px 28px", opacity: 0.6 }} />
              <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(4rem,10vw,7rem)", fontStyle: "italic", fontWeight: 300, color: "var(--signal)", textShadow: "0 0 50px var(--glow)", zIndex: 1 }}>TM</span>
              <div style={{ position: "absolute", left: 0, right: 0, top: 0, height: "120px", background: "linear-gradient(transparent, rgba(0,212,200,0.14), transparent)", animation: "scan 5s ease-in-out infinite" }} />
            </div>
            <div style={{ position: "absolute", bottom: "1rem", left: "1rem", background: "rgba(6,11,20,0.8)", backdropFilter: "blur(8px)", border: "1px solid var(--line)", borderRadius: "4px", padding: ".5rem .75rem", display: "flex", flexDirection: "column", zIndex: 2 }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: ".56rem", letterSpacing: ".15em", textTransform: "uppercase", color: "var(--text-faint)" }}>subject</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: ".82rem", color: "var(--signal)" }}>T. Manjengwa</span>
            </div>
            <div style={{ position: "absolute", top: "1rem", right: "1rem", background: "rgba(6,11,20,0.8)", backdropFilter: "blur(8px)", border: "1px solid var(--line)", borderRadius: "4px", padding: ".5rem .75rem", display: "flex", flexDirection: "column", zIndex: 2 }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: ".56rem", letterSpacing: ".15em", textTransform: "uppercase", color: "var(--text-faint)" }}>status</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: ".82rem", color: "var(--signal)" }}>Available</span>
            </div>
          </div>
        </div>

        {/* Copy */}
        <div>
          <p ref={r(1)} className="reveal" style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: "clamp(1.5rem,3.4vw,2.3rem)", lineHeight: 1.25, letterSpacing: "-0.01em", color: "var(--text)", marginBottom: "2rem" }}>
            I build things that work at scale — from national border systems to mobile fintech apps.
          </p>
          <p ref={r(2)} className="reveal" style={{ color: "var(--text-dim)", marginBottom: "1.3rem", maxWidth: "56ch" }}>
            I'm Tanya — a final-year BSc Cloud Computing & IoT student and Resident Innovator at the Zimbabwe Centre of High Performance Computing (ZCHPC). My work spans full-stack development, cloud-native architecture, AI integration, and quality assurance on <span style={{ color: "var(--text)" }}>national-scale government platforms</span>.
          </p>
          <p ref={r(3)} className="reveal" style={{ color: "var(--text-dim)", marginBottom: "1.3rem", maxWidth: "56ch" }}>
            I've led UAT on the Ministry of Home Affairs Border Management System, shipped a Chrome AI phishing detector, built a mobile fintech app digitizing rotating savings circles, and administered HPC clusters — all while finishing my degree.
          </p>
          <ul ref={r(4)} className="reveal" style={{ listStyle: "none", marginTop: "2.5rem", borderTop: "1px solid var(--line)" }}>
            {[
              { k: "Focus", v: "Full-Stack · Cloud · AI/ML · QA" },
              { k: "Stack", v: "React · Node.js · Flask · PostgreSQL · Docker" },
              { k: "Cloud", v: "Huawei Cloud · AWS · ZCHPC HPC" },
              { k: "Style", v: "Shipped, scalable, user-centred" },
            ].map((item) => (
              <li key={item.k} style={{ display: "flex", gap: "1.5rem", padding: "1rem 0", borderBottom: "1px solid var(--line)", fontFamily: "var(--font-mono)", fontSize: ".82rem" }}>
                <span style={{ color: "var(--text-faint)", textTransform: "uppercase", letterSpacing: ".12em", fontSize: ".68rem", minWidth: "70px", paddingTop: ".15rem" }}>{item.k}</span>
                <span style={{ color: "var(--text)" }}>{item.v}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <style>{`
        @keyframes scan { 0%,100% { transform: translateY(-120px); opacity: 0; } 50% { opacity: 1; } 90% { transform: translateY(440px); opacity: 0; } }
        @media (max-width: 880px) { #about > div > div:first-of-type { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}