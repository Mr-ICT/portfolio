"use client";
import { useEffect, useRef } from 'react';

const data = [
  {
    index: "P/01",
    cat: "AI · Security · Chrome Extension",
    title: "SENTRY",
    desc: "AI-driven phishing detection platform deployed as a Chrome extension for Gmail. A two-stage FAISS + GPT-4 pipeline encodes emails into 1,536-dimensional embeddings, returning a confidence-weighted verdict and natural-language threat explanation injected directly into the Gmail interface.",
    stack: ["Python", "FastAPI", "FAISS", "GPT-4", "Sentence Transformers", "JavaScript", "Manifest V3"],
    stat: "0.82", statLabel: "cosine threshold",
    note: "Also designed the UI/UX and extension branding",
  },
  {
    index: "P/02",
    cat: "Fintech · Mobile · React Native",
    title: "RoundRedu",
    desc: "Full-stack mobile fintech app digitizing traditional African rotating savings circles (Mukando/Stokvel) across Southern Africa. Features OTP auth, WhatsApp & QR invitation flows, contribution tracking with proof-of-payment image upload, and real-time group dashboards.",
    stack: ["React Native", "Expo", "Node.js", "Supabase", "PostgreSQL"],
    stat: "∞", statLabel: "trust, digitized",
    note: "Designed the full mobile UI/UX and brand identity",
  },
  {
    index: "P/03",
    cat: "Marketplace · Full-Stack · Flask",
    title: "ZimFix",
    desc: "Local services marketplace connecting users across 20+ trade categories with verified technicians and businesses in Zimbabwe. Features session-based auth, OTP phone verification, WhatsApp-integrated job request flows, and a structured rating and feedback system.",
    stack: ["Flask", "PostgreSQL", "SQLAlchemy", "Python", "WhatsApp API"],
    stat: "20+", statLabel: "trade categories",
    note: "Designed the full product UI/UX and brand identity",
  },
  {
    index: "P/04",
    cat: "Government · QA · National Scale",
    title: "OBMS — Border Management",
    desc: "End-to-end UAT for the Ministry of Home Affairs Online Border Management System. Authored the full Test Plan, UAT manuals, and requirement traceability matrix. Conducted on-site testing across multiple national border entry and exit points including airports and land crossings.",
    stack: ["Selenium", "Django", "PostgreSQL", "Python", "UAT"],
    stat: "✓", statLabel: "govt go-live approved",
    note: "",
  },
];

export default function Projects() {
  const refs = useRef<HTMLElement[]>([]);
  const headRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    if (headRef.current) io.observe(headRef.current);
    refs.current.forEach(el => el && io.observe(el));
    return () => io.disconnect();
  }, []);
  return (
    <section id="work" style={{ padding: "clamp(5rem,12vh,9rem) var(--pad)", maxWidth: "var(--maxw)", margin: "0 auto" }}>
      <header ref={headRef as any} className="reveal" style={{ marginBottom: "clamp(2.5rem,6vw,4.5rem)" }}>
        <span className="sec-num">03</span>
        <h2 className="sec-title">Selected<br/><em>work.</em></h2>
      </header>
      <div style={{ borderTop: "1px solid var(--line)" }}>
        {data.map((p, i) => (
          <article key={p.title} ref={(el) => { if (el) refs.current[i] = el as HTMLElement; }} className="reveal project" style={{ display: "grid", gridTemplateColumns: "90px 1fr auto", gap: "clamp(1rem,4vw,3rem)", alignItems: "center", padding: "clamp(2rem,4vw,3rem) 0", borderBottom: "1px solid var(--line)", position: "relative", transition: "padding-left .45s var(--ease)" }} onMouseEnter={(e) => { e.currentTarget.style.paddingLeft = "1.5rem"; }} onMouseLeave={(e) => { e.currentTarget.style.paddingLeft = "0"; }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: ".78rem", color: "var(--text-faint)", letterSpacing: ".08em" }}>{p.index}</div>
            <div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: ".7rem", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--signal)", display: "block", marginBottom: ".7rem" }}>{p.cat}</span>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(1.6rem,3.6vw,2.6rem)", letterSpacing: "-0.02em", lineHeight: 1, marginBottom: ".8rem", transition: "color .35s" }}>{p.title}</h3>
              <p style={{ color: "var(--text-dim)", maxWidth: "52ch", fontSize: ".98rem", marginBottom: "1rem" }}>{p.desc}</p>
              {p.note && <p style={{ fontFamily: "var(--font-mono)", fontSize: ".7rem", color: "var(--signal)", opacity: 0.7, marginBottom: "1rem" }}>✦ {p.note}</p>}
              <div style={{ display: "flex", flexWrap: "wrap", gap: ".45rem" }}>
                {p.stack.map(s => <span key={s} style={{ fontFamily: "var(--font-mono)", fontSize: ".68rem", color: "var(--text-faint)", padding: ".25rem .6rem", border: "1px solid var(--line-soft)", borderRadius: "4px" }}>{s}</span>)}
              </div>
            </div>
            <div style={{ textAlign: "right", display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
              <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2rem,5vw,3.4rem)", color: "var(--signal)", lineHeight: 1, letterSpacing: "-0.02em" }}>{p.stat}</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: ".68rem", textTransform: "uppercase", letterSpacing: ".1em", color: "var(--text-faint)", marginTop: ".4rem" }}>{p.statLabel}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}