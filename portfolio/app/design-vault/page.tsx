"use client";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Constellation from '@/components/canvas/Constellation';

const categories = ["All", "Branding", "Logo Design", "UI/UX", "Print & Marketing"];

const works = [
  { title: "ZimFix Brand Identity", cat: "Branding", desc: "Full brand identity for the ZimFix local services marketplace — logo, colour system, and UI component language.", tags: ["Canva", "Figma", "Brand Design"] },
  { title: "RoundRedu Mobile UI", cat: "UI/UX", desc: "End-to-end mobile UI/UX design for the RoundRedu fintech app — onboarding flows, dashboards, and contribution screens.", tags: ["UI/UX", "Mobile", "Fintech"] },
  { title: "SENTRY Extension UI", cat: "UI/UX", desc: "Chrome extension popup and Gmail in-page alert UI design for the SENTRY phishing detection system.", tags: ["UI/UX", "Chrome Extension", "Security"] },
  { title: "Logo Suite — Parent & Subsidiaries", cat: "Logo Design", desc: "Multi-tier logo design for a parent company and its subsidiary brands, maintaining visual coherence across the family.", tags: ["Corel Draw", "Logo Design", "Brand"] },
  { title: "Corporate Branding Package", cat: "Branding", desc: "Full corporate identity package including letterhead, business cards, email signature, and brand guidelines document.", tags: ["Adobe Photoshop", "Print", "Corporate"] },
  { title: "ZCHPC AI Hub UI Mockups", cat: "UI/UX", desc: "UI mockups and component designs for the ZCHPC AI Hub Platform — a unified interface for researchers to access AI tooling and compute resources.", tags: ["UI/UX", "Dashboard", "Research Platform"] },
];

export default function DesignVault() {
  const [active, setActive] = useState("All");
  const [fadeProgress, setFadeProgress] = useState(0);
  const filtered = active === "All" ? works : works.filter(w => w.cat === active);

  useEffect(() => {
    const onScroll = () => {
      const progress = Math.min(window.scrollY / 500, 1);
      setFadeProgress(progress);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const textColor = fadeProgress > 0.5 ? "#1a1a1a" : "#e6edf7";
  const textDim = fadeProgress > 0.5 ? "#555" : "#8fa0bd";
  const textFaint = fadeProgress > 0.5 ? "#888" : "#4d6080";
  const borderColor = fadeProgress > 0.5 ? "rgba(0,0,0,0.10)" : "rgba(180,220,255,0.10)";
  const cardBg = fadeProgress > 0.5 ? "#fff" : "rgba(11,17,32,0.85)";
  const navBg = fadeProgress > 0.5 ? `rgba(245,244,240,${0.85 + fadeProgress * 0.15})` : `rgba(6,11,20,${0.72 + fadeProgress * 0.2})`;

  return (
    <div style={{ minHeight: "100vh", position: "relative", cursor: "auto" }}>

      {/* Dark constellation layer — fades out on scroll */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0, opacity: 1 - fadeProgress, transition: "opacity 0.05s linear", pointerEvents: "none" }}>
        <div style={{ position: "absolute", inset: 0, background: "var(--ink)" }} />
        <Constellation />
        <div className="grain" aria-hidden="true" />
      </div>

      {/* Light vault layer — fades in on scroll */}
      <div style={{ position: "fixed", inset: 0, zIndex: 1, opacity: fadeProgress, background: "#f5f4f0", transition: "opacity 0.05s linear", pointerEvents: "none" }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2 }}>

        {/* Nav */}
        <header style={{ position: "sticky", top: 0, zIndex: 100, background: navBg, backdropFilter: "blur(14px)", borderBottom: `1px solid ${borderColor}`, padding: "1.2rem clamp(1.25rem,5vw,6rem)", display: "flex", alignItems: "center", justifyContent: "space-between", transition: "background 0.3s, border-color 0.3s" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: ".8rem" }}>
            <span style={{ fontWeight: 700, fontSize: "1.1rem", letterSpacing: "-.01em", fontFamily: "var(--font-display)", color: textColor, transition: "color 0.3s" }}>TM</span>
            <span style={{ fontSize: ".75rem", color: "var(--signal)", fontFamily: "var(--font-mono)", letterSpacing: ".08em" }}>_/ design.vault</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <span className="vault-tools" style={{ fontSize: ".75rem", color: textDim, fontFamily: "var(--font-mono)", transition: "color 0.3s" }}>Canva · Photoshop · Corel Draw</span>
            <Link href="/" style={{ fontFamily: "var(--font-mono)", fontSize: ".78rem", padding: ".45rem .9rem", border: `1px solid ${borderColor}`, borderRadius: "100px", color: textColor, transition: "all .3s", background: "transparent" }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--signal)"; e.currentTarget.style.color = "var(--signal)"; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = borderColor; e.currentTarget.style.color = textColor; }}>
              ← Portfolio
            </Link>
          </div>
        </header>

        {/* Hero — sits in the dark zone */}
        <section style={{ padding: "5rem clamp(1.25rem,5vw,6rem) 3rem", maxWidth: "1240px", margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: ".78rem", letterSpacing: ".15em", textTransform: "uppercase", color: "var(--signal)", marginBottom: "1rem" }}>Design Vault</p>
          <h1 style={{ fontSize: "clamp(2.4rem,7vw,5rem)", fontWeight: 300, lineHeight: 0.95, letterSpacing: "-.03em", marginBottom: "1.5rem", fontFamily: "var(--font-display)", color: "#e6edf7" }}>
            Where logic meets<br/><em style={{ fontStyle: "italic", color: "var(--signal)", textShadow: "0 0 40px var(--glow)" }}>aesthetics.</em>
          </h1>
          <p style={{ maxWidth: "52ch", color: "#8fa0bd", fontSize: "1.05rem", lineHeight: 1.6, marginBottom: "1rem" }}>
            A rare combination — deep backend engineering paired with visual design sensibility. Every project I build, I also design.
          </p>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: ".78rem", color: "var(--signal)", opacity: 0.7, letterSpacing: ".05em" }}>↓ scroll to enter the vault</p>
        </section>

        {/* Spacer to trigger scroll fade */}
        <div style={{ height: "30vh" }} />

        {/* Vault content — appears as light bg fades in */}
        <div style={{ background: "#f5f4f0", borderRadius: "24px 24px 0 0", padding: "3rem clamp(1.25rem,5vw,6rem) 6rem", maxWidth: "100%" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto" }}>

            {/* Filter tabs */}
            <div style={{ display: "flex", gap: ".6rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
              {categories.map(cat => (
                <button key={cat} onClick={() => setActive(cat)} style={{ fontFamily: "var(--font-mono)", fontSize: ".76rem", padding: ".45rem 1rem", borderRadius: "100px", border: `1px solid ${active === cat ? "#1a1a1a" : "rgba(0,0,0,0.15)"}`, background: active === cat ? "#1a1a1a" : "transparent", color: active === cat ? "#f5f4f0" : "#555", cursor: "pointer", transition: "all .25s" }}>
                  {cat}
                </button>
              ))}
            </div>

            {/* Masonry grid */}
            <div style={{ columns: "3 280px", gap: "1.5rem" }}>
              {filtered.map((work) => (
                <div key={work.title} style={{ breakInside: "avoid", marginBottom: "1.5rem", background: "#fff", borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(0,0,0,0.06)", transition: "transform .3s, box-shadow .3s", cursor: "pointer" }} onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.10)"; }} onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
                  <div style={{ aspectRatio: "4/3", background: "linear-gradient(135deg, #e8e4dc, #d4cfc6)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                    <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                    <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "1.1rem", color: "rgba(0,0,0,0.25)", zIndex: 1 }}>{work.cat}</span>
                  </div>
                  <div style={{ padding: "1.4rem" }}>
                    <h3 style={{ fontWeight: 600, fontSize: "1rem", marginBottom: ".5rem", letterSpacing: "-.01em", color: "#1a1a1a" }}>{work.title}</h3>
                    <p style={{ fontSize: ".88rem", color: "#666", lineHeight: 1.55, marginBottom: "1rem" }}>{work.desc}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: ".4rem" }}>
                      {work.tags.map(tag => (
                        <span key={tag} style={{ fontFamily: "var(--font-mono)", fontSize: ".68rem", padding: ".25rem .6rem", background: "rgba(0,0,0,0.05)", borderRadius: "4px", color: "#555" }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}