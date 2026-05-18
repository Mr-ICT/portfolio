"use client";
import { useState } from 'react';
import Link from 'next/link';

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
  const filtered = active === "All" ? works : works.filter(w => w.cat === active);
  return (
    <div style={{ fontFamily: "system-ui, sans-serif" }}>

      {/* Nav */}
      <header style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(245,244,240,0.85)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(0,0,0,0.08)", padding: "1.2rem clamp(1.25rem,5vw,6rem)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: ".8rem" }}>
          <span style={{ fontWeight: 700, fontSize: "1.1rem", letterSpacing: "-.01em" }}>TM</span>
          <span style={{ fontSize: ".75rem", color: "#888", letterSpacing: ".08em", fontFamily: "monospace" }}>_/ design.vault</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <span style={{ fontSize: ".75rem", color: "#888", fontFamily: "monospace" }}>Canva · Photoshop · Corel Draw</span>
          <Link href="/" style={{ fontFamily: "monospace", fontSize: ".78rem", padding: ".45rem .9rem", border: "1px solid rgba(0,0,0,0.15)", borderRadius: "100px", color: "#1a1a1a", transition: "all .3s" }} onMouseEnter={(e) => { e.currentTarget.style.background = "#1a1a1a"; e.currentTarget.style.color = "#f5f4f0"; }} onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#1a1a1a"; }}>
            ← Back to Portfolio
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section style={{ padding: "5rem clamp(1.25rem,5vw,6rem) 3rem", maxWidth: "1240px", margin: "0 auto" }}>
        <p style={{ fontFamily: "monospace", fontSize: ".78rem", letterSpacing: ".15em", textTransform: "uppercase", color: "#888", marginBottom: "1rem" }}>Design Vault</p>
        <h1 style={{ fontSize: "clamp(2.4rem,7vw,5rem)", fontWeight: 300, lineHeight: 0.95, letterSpacing: "-.03em", marginBottom: "1.5rem", fontFamily: "Georgia, serif" }}>
          Where logic meets<br/><em style={{ fontStyle: "italic", color: "#c0392b" }}>aesthetics.</em>
        </h1>
        <p style={{ maxWidth: "52ch", color: "#555", fontSize: "1.05rem", lineHeight: 1.6 }}>
          A rare combination — deep backend engineering paired with visual design sensibility. Every project I build, I also design. Here is the creative side of that equation.
        </p>
      </section>

      {/* Filter tabs */}
      <div style={{ padding: "0 clamp(1.25rem,5vw,6rem) 2rem", maxWidth: "1240px", margin: "0 auto", display: "flex", gap: ".6rem", flexWrap: "wrap" }}>
        {categories.map(cat => (
          <button key={cat} onClick={() => setActive(cat)} style={{ fontFamily: "monospace", fontSize: ".76rem", padding: ".45rem 1rem", borderRadius: "100px", border: `1px solid ${active === cat ? "#1a1a1a" : "rgba(0,0,0,0.15)"}`, background: active === cat ? "#1a1a1a" : "transparent", color: active === cat ? "#f5f4f0" : "#555", cursor: "pointer", transition: "all .25s" }}>
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry grid */}
      <main style={{ padding: "0 clamp(1.25rem,5vw,6rem) 6rem", maxWidth: "1240px", margin: "0 auto", columns: "3 280px", gap: "1.5rem" }}>
        {filtered.map((work) => (
          <div key={work.title} style={{ breakInside: "avoid", marginBottom: "1.5rem", background: "#fff", borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(0,0,0,0.06)", transition: "transform .3s, box-shadow .3s", cursor: "pointer" }} onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.10)"; }} onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
            {/* Placeholder image area */}
            <div style={{ aspectRatio: "4/3", background: `linear-gradient(135deg, #e8e4dc, #d4cfc6)`, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
              <span style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: "1.1rem", color: "rgba(0,0,0,0.25)", zIndex: 1 }}>{work.cat}</span>
            </div>
            <div style={{ padding: "1.4rem" }}>
              <h3 style={{ fontWeight: 600, fontSize: "1rem", marginBottom: ".5rem", letterSpacing: "-.01em" }}>{work.title}</h3>
              <p style={{ fontSize: ".88rem", color: "#666", lineHeight: 1.55, marginBottom: "1rem" }}>{work.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: ".4rem" }}>
                {work.tags.map(tag => (
                  <span key={tag} style={{ fontFamily: "monospace", fontSize: ".68rem", padding: ".25rem .6rem", background: "rgba(0,0,0,0.05)", borderRadius: "4px", color: "#555" }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </main>

      {/* Upload prompt */}
      <div style={{ textAlign: "center", padding: "0 2rem 6rem", color: "#888", fontSize: ".88rem", fontFamily: "monospace" }}>
        [ Drop your design images into public/images/design/ and they will appear here ]
      </div>
    </div>
  );
}