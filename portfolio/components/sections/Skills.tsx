"use client";
import { useEffect, useRef } from 'react';

const bars = [
  { label: "Full-Stack Web & Mobile Development", level: 92 },
  { label: "Cloud Architecture & DevOps", level: 85 },
  { label: "AI / ML Integration", level: 80 },
  { label: "System Testing & QA Automation", level: 90 },
  { label: "Database Design & Optimisation", level: 87 },
];

const tags = [
  "Python", "JavaScript", "TypeScript", "Java", "HTML", "CSS",
  "React Native", "Expo", "Node.js", "Flask", "Django", "Bootstrap",
  "PostgreSQL", "MySQL", "Supabase", "FAISS", "Docker", "Git",
  "Huawei Cloud", "AWS", "Linux", "Selenium", "Postman",
  "TensorFlow", "PyTorch", "Sentence Transformers", "OCR",
  "Canva", "Adobe Photoshop", "Corel Draw",
];

export default function Skills() {
  const barRefs = useRef<HTMLElement[]>([]);
  const headRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    if (headRef.current) io.observe(headRef.current);
    const sio = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const fill = e.target.querySelector(".fill") as HTMLElement;
        if (fill) fill.style.width = fill.dataset.level + "%";
        sio.unobserve(e.target);
      });
    }, { threshold: 0.4 });
    barRefs.current.forEach(el => el && sio.observe(el));
    return () => { io.disconnect(); sio.disconnect(); };
  }, []);
  return (
    <section id="skills" style={{ padding: "clamp(5rem,12vh,9rem) var(--pad)", maxWidth: "var(--maxw)", margin: "0 auto" }}>
      <header ref={headRef as any} className="reveal" style={{ marginBottom: "clamp(2.5rem,6vw,4.5rem)" }}>
        <span className="sec-num">02</span>
        <h2 className="sec-title">What I am<br/><em>fluent</em> in.</h2>
      </header>
      <div style={{ display: "grid", gridTemplateColumns: "1.3fr 0.7fr", gap: "clamp(2rem,6vw,5rem)" }}>

        {/* Skill bars */}
        <div>
          {bars.map((bar, i) => (
            <div key={bar.label} ref={(el) => { if (el) barRefs.current[i] = el as HTMLElement; }} style={{ marginBottom: "1.8rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: ".7rem" }}>
                <span style={{ fontSize: ".98rem", color: "var(--text)" }}>{bar.label}</span>
                <span style={{ fontFamily: "var(--font-mono)", color: "var(--signal)", fontSize: ".82rem" }}>{bar.level}</span>
              </div>
              <div style={{ height: "2px", background: "var(--line)", position: "relative", overflow: "hidden" }}>
                <span className="fill" data-level={bar.level} style={{ position: "absolute", inset: 0, width: "0%", background: "linear-gradient(90deg, var(--signal-dim), var(--signal))", boxShadow: "0 0 10px var(--glow)", transition: "width 1.4s var(--ease)", display: "block" }} />
              </div>
            </div>
          ))}
        </div>

        {/* Tag cloud */}
        <div>
          <h3 style={{ fontFamily: "var(--font-mono)", fontWeight: 400, fontSize: ".76rem", letterSpacing: ".15em", textTransform: "uppercase", color: "var(--text-faint)", marginBottom: "1.2rem" }}>Toolbox</h3>
          <div className="tag-cloud" style={{ display: "flex", flexWrap: "wrap", gap: ".5rem" }}>
            {tags.map((tag) => (
              <span key={tag} style={{ fontFamily: "var(--font-mono)", fontSize: ".76rem", padding: ".4rem .8rem", border: "1px solid var(--line)", borderRadius: "100px", color: "var(--text-dim)", transition: "all .3s var(--ease)", cursor: "default" }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--signal)"; e.currentTarget.style.color = "var(--signal)"; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.background = "rgba(0,212,200,.05)"; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--line)"; e.currentTarget.style.color = "var(--text-dim)"; e.currentTarget.style.transform = "none"; e.currentTarget.style.background = "transparent"; }}>
              {tag}
            </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}