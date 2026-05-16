"use client";
import { useEffect, useRef } from 'react';

const items = [
  { year: "2024 — 2026", title: "Resident Innovator · ZCHPC", desc: "Led QA on national government platforms including the Ministry of Home Affairs Border Management System and ZRP Biometric Information System. Engineered the ZCHPC AI Hub Platform and administered HPC cluster infrastructure." },
  { year: "2025 / 26", title: "Huawei ICT Competition — Regional Finalist", desc: "Architected and deployed end-to-end AI workflows on Huawei Cloud ModelArts using MindSpore and FunctionGraph. Designed resilient cloud-native architectures with Docker and Kubernetes." },
  { year: "2026", title: "IndabaX Zimbabwe Hackathon — 16th / 40", desc: "Engineered an end-to-end ML model on 38.9k+ rows of Zimbabwean banking data to classify loan default risk. Built robust preprocessing pipelines preventing data leakage." },
  { year: "2022 — 2026", title: "BSc Honours · Cloud Computing & IoT · University of Zimbabwe", desc: "Final-year student specialising in cloud-native systems, IoT architecture, and distributed computing. Capstone: SENTRY AI-driven phishing detection Chrome extension." },
  { year: "Nov 2025", title: "Professional Competence Certificate · Cyber Security & Forensics · ZCHPC", desc: "" },
  { year: "Nov 2023", title: "Certificate in Secure Software · Alison.com", desc: "" },
];

export default function Timeline() {
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
    <section id="timeline" style={{ padding: "clamp(5rem,12vh,9rem) var(--pad)", maxWidth: "var(--maxw)", margin: "0 auto" }}>
      <header ref={headRef as any} className="reveal" style={{ marginBottom: "clamp(2.5rem,6vw,4.5rem)" }}>
        <span className="sec-num">04</span>
        <h2 className="sec-title">The<br/><em>path</em> so far.</h2>
      </header>
      <ol style={{ listStyle: "none", position: "relative", paddingLeft: "0" }}>
        <div style={{ position: "absolute", left: "220px", top: "8px", bottom: "8px", width: "1px", background: "var(--line)" }} />
        {items.map((item, i) => (
          <li key={item.title} ref={(el) => { if (el) refs.current[i] = el as HTMLElement; }} className="reveal" style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: "2.5rem", padding: "1.6rem 0 1.6rem 2rem", position: "relative" }}>
            <div style={{ position: "absolute", left: "212px", top: "2.1rem", width: "9px", height: "9px", borderRadius: "50%", background: "var(--ink)", border: "1px solid var(--signal)", transition: "background .4s, box-shadow .4s" }} onMouseEnter={(e) => { e.currentTarget.style.background = "var(--signal)"; e.currentTarget.style.boxShadow = "0 0 14px var(--glow)"; }} onMouseLeave={(e) => { e.currentTarget.style.background = "var(--ink)"; e.currentTarget.style.boxShadow = "none"; }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: ".82rem", color: "var(--signal)", letterSpacing: ".04em", paddingTop: ".2rem" }}>{item.year}</span>
            <div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(1.2rem,2.6vw,1.6rem)", letterSpacing: "-0.01em", marginBottom: ".5rem" }}>{item.title}</h3>
              {item.desc && <p style={{ color: "var(--text-dim)", maxWidth: "56ch", fontSize: ".95rem" }}>{item.desc}</p>}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}