"use client";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const categories = ["All", "Branding", "Logo Design", "UI/UX", "Print & Marketing"];

type Motif = "wave" | "stack" | "mark" | "type" | "grid" | "orbit";

type Work = {
  title: string;
  cat: string;
  year: string;
  role: string;
  desc: string;
  tags: string[];
  motif: Motif;
  bg: [string, string];
  ink: string;
  accent: string;
  ratio: string;
  featured?: boolean;
};

const works: Work[] = [
  {
    title: "ZimFix Brand Identity",
    cat: "Branding", year: "2025", role: "Identity · System",
    desc: "Full brand identity for the ZimFix local-services marketplace — logotype, colour system, and a UI component language built to scale across web and mobile.",
    tags: ["Figma", "Brand System", "Logo"], motif: "wave",
    bg: ["#0f3d3a", "#0a2c2a"], ink: "#eafdfb", accent: "#2ee6c8", ratio: "4 / 5", featured: true,
  },
  {
    title: "RoundRedu Mobile UI",
    cat: "UI/UX", year: "2025", role: "Product Design",
    desc: "End-to-end mobile UI/UX for the RoundRedu fintech app — onboarding, dashboards, and group-contribution flows designed for trust and clarity.",
    tags: ["UI/UX", "Mobile", "Fintech"], motif: "stack",
    bg: ["#3a2d72", "#221a4d"], ink: "#efeaff", accent: "#a78bfa", ratio: "4 / 5",
  },
  {
    title: "SENTRY Extension UI",
    cat: "UI/UX", year: "2024", role: "Interface Design",
    desc: "Chrome-extension popup and in-page Gmail alert UI for the SENTRY phishing-detection system — security made legible at a glance.",
    tags: ["UI/UX", "Extension", "Security"], motif: "grid",
    bg: ["#0b1120", "#070d18"], ink: "#e6f9f7", accent: "#00d4c8", ratio: "1 / 1",
  },
  {
    title: "Logo Suite — Parent & Subsidiaries",
    cat: "Logo Design", year: "2024", role: "Marque Design",
    desc: "A multi-tier logo family for a parent company and its subsidiaries — distinct marks held together by one disciplined geometric grammar.",
    tags: ["Corel Draw", "Logo", "Marque"], motif: "mark",
    bg: ["#b8472f", "#7d2c1c"], ink: "#fff3ee", accent: "#ffd9c7", ratio: "4 / 5",
  },
  {
    title: "Corporate Branding Package",
    cat: "Print & Marketing", year: "2023", role: "Identity · Print",
    desc: "Complete corporate identity — letterhead, cards, signatures, and a guidelines document — a typographic system that reads as premium across every touchpoint.",
    tags: ["Photoshop", "Print", "Guidelines"], motif: "type",
    bg: ["#1a1814", "#0d0c0a"], ink: "#f3e9d2", accent: "#d4af37", ratio: "1 / 1",
  },
  {
    title: "ZCHPC AI Hub — UI Mockups",
    cat: "UI/UX", year: "2025", role: "Platform Design",
    desc: "Interface mockups for the ZCHPC AI Hub — a unified workspace giving researchers access to AI tooling and HPC compute through one calm, dense dashboard.",
    tags: ["UI/UX", "Dashboard", "Research"], motif: "orbit",
    bg: ["#10314f", "#0a2036"], ink: "#e7f3ff", accent: "#5eb3ff", ratio: "4 / 5",
  },
];

const tools = ["Figma", "Adobe Photoshop", "Corel Draw", "Canva", "Illustrator", "Brand Systems", "Design Tokens", "Prototyping"];

const stats = [
  { n: "6+", l: "Identity & product systems" },
  { n: "4", l: "Tools mastered end-to-end" },
  { n: "100%", l: "Of what I build, I design" },
  { n: "5★", l: "Engineer who designs" },
];

/* ---------- Generative poster art ---------- */
function Poster({ w }: { w: Work }) {
  const { motif, bg, ink, accent } = w;
  const id = w.title.replace(/[^a-z0-9]/gi, "");
  return (
    <div style={{ position: "relative", aspectRatio: w.ratio, background: `linear-gradient(150deg, ${bg[0]}, ${bg[1]})`, overflow: "hidden" }}>
      {/* fine grid wash */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(${ink}0a 1px, transparent 1px), linear-gradient(90deg, ${ink}0a 1px, transparent 1px)`, backgroundSize: "26px 26px", maskImage: "radial-gradient(120% 120% at 50% 0%, #000, transparent 80%)" }} />
      <svg viewBox="0 0 400 460" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        <defs>
          <linearGradient id={`g${id}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={accent} stopOpacity="0.95" />
            <stop offset="1" stopColor={accent} stopOpacity="0.35" />
          </linearGradient>
        </defs>

        {motif === "wave" && (
          <g fill="none" stroke={accent} strokeOpacity="0.55">
            {Array.from({ length: 9 }).map((_, i) => (
              <path key={i} d={`M-20 ${120 + i * 36} C 90 ${60 + i * 36}, 300 ${260 + i * 36}, 430 ${120 + i * 36}`} strokeWidth={i % 2 ? 1 : 2} />
            ))}
            <circle cx="300" cy="150" r="58" fill={`url(#g${id})`} stroke="none" />
          </g>
        )}

        {motif === "stack" && (
          <g>
            {[0, 1, 2].map((i) => (
              <rect key={i} x={70 + i * 18} y={90 + i * 46} width="220" height="150" rx="16" fill={ink} fillOpacity={0.06 + i * 0.05} stroke={accent} strokeOpacity="0.5" />
            ))}
            <rect x="106" y="182" width="150" height="12" rx="6" fill={accent} fillOpacity="0.9" />
            <rect x="106" y="206" width="96" height="10" rx="5" fill={ink} fillOpacity="0.35" />
            <circle cx="250" cy="305" r="26" fill={`url(#g${id})`} />
          </g>
        )}

        {motif === "mark" && (
          <g fill="none" stroke={accent}>
            <circle cx="200" cy="210" r="120" strokeOpacity="0.35" strokeWidth="2" />
            <circle cx="200" cy="210" r="78" strokeOpacity="0.6" strokeWidth="2" />
            <path d="M150 250 L200 140 L250 250 M168 214 L232 214" stroke={accent} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        )}

        {motif === "type" && (
          <g>
            <text x="200" y="270" textAnchor="middle" fontFamily="Fraunces, Georgia, serif" fontSize="240" fontStyle="italic" fill={`url(#g${id})`}>Aa</text>
            <line x1="40" y1="290" x2="360" y2="290" stroke={ink} strokeOpacity="0.25" />
            <line x1="40" y1="150" x2="360" y2="150" stroke={ink} strokeOpacity="0.12" />
          </g>
        )}

        {motif === "grid" && (
          <g fill="none" stroke={accent} strokeOpacity="0.55">
            {[0, 1, 2].map((r) => [0, 1, 2].map((c) => (
              <rect key={`${r}${c}`} x={70 + c * 90} y={120 + r * 90} width="70" height="70" rx="10" fill={(r + c) % 2 ? accent : "none"} fillOpacity="0.16" />
            )))}
            <circle cx="105" cy="155" r="10" fill={accent} stroke="none" />
          </g>
        )}

        {motif === "orbit" && (
          <g fill="none" stroke={accent}>
            <circle cx="200" cy="220" r="130" strokeOpacity="0.18" />
            <circle cx="200" cy="220" r="92" strokeOpacity="0.3" />
            <circle cx="200" cy="220" r="54" strokeOpacity="0.5" />
            <circle cx="200" cy="90" r="9" fill={accent} stroke="none" />
            <circle cx="292" cy="220" r="7" fill={ink} fillOpacity="0.5" stroke="none" />
            <circle cx="200" cy="220" r="22" fill={`url(#g${id})`} stroke="none" />
          </g>
        )}
      </svg>

      {/* category chip + index */}
      <div style={{ position: "absolute", top: "1rem", left: "1rem", fontFamily: "var(--font-mono)", fontSize: ".64rem", letterSpacing: ".12em", textTransform: "uppercase", color: ink, opacity: 0.9, padding: ".3rem .6rem", border: `1px solid ${ink}33`, borderRadius: "100px", backdropFilter: "blur(4px)" }}>{w.cat}</div>
      <div style={{ position: "absolute", bottom: "1rem", right: "1.1rem", fontFamily: "var(--font-mono)", fontSize: ".7rem", color: ink, opacity: 0.6 }}>{w.year}</div>
    </div>
  );
}

export default function DesignVault() {
  const [active, setActive] = useState("All");
  const rootRef = useRef<HTMLDivElement>(null);
  const filtered = active === "All" ? works : works.filter(w => w.cat === active);

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    rootRef.current?.querySelectorAll(".dv-reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [active]);

  return (
    <div ref={rootRef} style={{ fontFamily: "var(--font-body)", color: "#161412" }}>

      {/* Nav */}
      <header style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(245,244,240,0.72)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(0,0,0,0.07)", padding: "1.1rem clamp(1.25rem,5vw,6rem)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: ".8rem" }}>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.2rem", letterSpacing: "-.02em" }}>TM</span>
          <span style={{ fontSize: ".72rem", color: "#9a948a", letterSpacing: ".08em", fontFamily: "var(--font-mono)" }}>design.vault</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1.4rem" }}>
          <span style={{ fontSize: ".72rem", color: "#9a948a", fontFamily: "var(--font-mono)" }} className="dv-hide-sm">Branding · UI/UX · Logo · Print</span>
          <Link href="/" style={{ fontFamily: "var(--font-mono)", fontSize: ".76rem", padding: ".5rem 1rem", border: "1px solid rgba(0,0,0,0.16)", borderRadius: "100px", color: "#161412", transition: "all .3s var(--ease)" }} onMouseEnter={(e) => { e.currentTarget.style.background = "#161412"; e.currentTarget.style.color = "#f5f4f0"; }} onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#161412"; }}>
            ← Portfolio
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section style={{ padding: "clamp(3.5rem,8vw,7rem) clamp(1.25rem,5vw,6rem) 2.5rem", maxWidth: "1240px", margin: "0 auto" }}>
        <div className="dv-reveal" style={{ display: "flex", alignItems: "center", gap: ".9rem", marginBottom: "1.8rem" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: ".74rem", letterSpacing: ".18em", textTransform: "uppercase", color: "#c0392b" }}>★★★★★</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: ".72rem", letterSpacing: ".14em", textTransform: "uppercase", color: "#9a948a" }}>Selected design work · 2023—2025</span>
        </div>
        <h1 className="dv-reveal" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.8rem,9vw,7rem)", fontWeight: 300, lineHeight: 0.92, letterSpacing: "-.035em", marginBottom: "1.8rem" }}>
          Where logic meets<br /><em style={{ fontStyle: "italic", color: "#c0392b" }}>aesthetics.</em>
        </h1>
        <p className="dv-reveal" style={{ maxWidth: "54ch", color: "#5b554c", fontSize: "clamp(1rem,1.6vw,1.18rem)", lineHeight: 1.65, fontWeight: 300 }}>
          A rare pairing — deep backend engineering and a designer's eye in one person. Every product I ship, I also <em style={{ fontStyle: "italic", color: "#161412" }}>design</em>: the identity, the interface, the smallest pixel. This is the creative half of the equation.
        </p>
      </section>

      {/* Tools marquee */}
      <div className="dv-reveal" style={{ borderTop: "1px solid rgba(0,0,0,0.08)", borderBottom: "1px solid rgba(0,0,0,0.08)", overflow: "hidden", padding: "1rem 0", WebkitMaskImage: "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)", maskImage: "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)" }}>
        <div style={{ display: "inline-flex", gap: "2.4rem", whiteSpace: "nowrap", animation: "dvmarquee 32s linear infinite", willChange: "transform" }}>
          {[...tools, ...tools].map((t, i) => (
            <span key={i} style={{ fontFamily: "var(--font-mono)", fontSize: ".82rem", letterSpacing: ".05em", color: "#7a746a", display: "inline-flex", alignItems: "center", gap: "2.4rem" }}>
              {t}<span style={{ color: "#c0392b" }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Stat band */}
      <section className="dv-reveal" style={{ maxWidth: "1240px", margin: "0 auto", padding: "3rem clamp(1.25rem,5vw,6rem)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "1.5rem" }}>
        {stats.map((s) => (
          <div key={s.l}>
            <div style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "clamp(2.4rem,5vw,3.4rem)", fontWeight: 300, color: "#161412", lineHeight: 1 }}>{s.n}</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: ".72rem", letterSpacing: ".04em", color: "#9a948a", marginTop: ".6rem" }}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* Filter tabs */}
      <div style={{ position: "sticky", top: "62px", zIndex: 50, background: "rgba(245,244,240,0.82)", backdropFilter: "blur(12px)", borderTop: "1px solid rgba(0,0,0,0.06)", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ padding: ".9rem clamp(1.25rem,5vw,6rem)", maxWidth: "1240px", margin: "0 auto", display: "flex", gap: ".6rem", flexWrap: "wrap", alignItems: "center" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: ".68rem", letterSpacing: ".1em", textTransform: "uppercase", color: "#b3aca1", marginRight: ".4rem" }}>Filter /</span>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)} style={{ fontFamily: "var(--font-mono)", fontSize: ".75rem", padding: ".45rem 1rem", borderRadius: "100px", border: `1px solid ${active === cat ? "#161412" : "rgba(0,0,0,0.14)"}`, background: active === cat ? "#161412" : "transparent", color: active === cat ? "#f5f4f0" : "#5b554c", cursor: "pointer", transition: "all .25s var(--ease)" }}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <main style={{ padding: "2.5rem clamp(1.25rem,5vw,6rem) 5rem", maxWidth: "1240px", margin: "0 auto", columns: "3 300px", columnGap: "1.6rem" }}>
        {filtered.map((work, i) => (
          <article key={work.title} className="dv-reveal dv-card" style={{ breakInside: "avoid", marginBottom: "1.6rem", background: "#fff", borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(0,0,0,0.06)", transition: "transform .4s var(--ease), box-shadow .4s var(--ease)", cursor: "pointer", transitionDelay: `${(i % 3) * 60}ms` }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 22px 60px rgba(0,0,0,0.14)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
            <Poster w={work} />
            <div style={{ padding: "1.5rem 1.5rem 1.7rem" }}>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "1rem", marginBottom: ".7rem" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "1.18rem", letterSpacing: "-.01em", lineHeight: 1.15 }}>{work.title}</h3>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: ".64rem", color: "#b3aca1", whiteSpace: "nowrap" }}>{String(i + 1).padStart(2, "0")}</span>
              </div>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: ".66rem", letterSpacing: ".08em", textTransform: "uppercase", color: "#c0392b", marginBottom: ".9rem" }}>{work.role}</p>
              <p style={{ fontSize: ".9rem", color: "#5b554c", lineHeight: 1.6, marginBottom: "1.2rem", fontWeight: 300 }}>{work.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: ".4rem" }}>
                {work.tags.map(tag => (
                  <span key={tag} style={{ fontFamily: "var(--font-mono)", fontSize: ".66rem", padding: ".28rem .6rem", background: "rgba(0,0,0,0.04)", borderRadius: "6px", color: "#7a746a" }}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </main>

      {/* CTA */}
      <section className="dv-reveal" style={{ borderTop: "1px solid rgba(0,0,0,0.08)", padding: "clamp(4rem,9vw,7rem) clamp(1.25rem,5vw,6rem)", maxWidth: "1240px", margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: ".74rem", letterSpacing: ".16em", textTransform: "uppercase", color: "#9a948a", marginBottom: "1.4rem" }}>Have something to build?</p>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: "clamp(2.2rem,6vw,4.2rem)", lineHeight: 1, letterSpacing: "-.03em", marginBottom: "2.2rem" }}>
          Let&apos;s design it <em style={{ fontStyle: "italic", color: "#c0392b" }}>right.</em>
        </h2>
        <Link href="/#contact" style={{ display: "inline-block", fontFamily: "var(--font-mono)", fontSize: ".85rem", letterSpacing: ".03em", padding: "1rem 2.2rem", borderRadius: "100px", background: "#161412", color: "#f5f4f0", transition: "all .35s var(--ease)" }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "#c0392b"; e.currentTarget.style.transform = "translateY(-3px)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "#161412"; e.currentTarget.style.transform = "none"; }}>
          Start a conversation →
        </Link>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: ".7rem", color: "#b3aca1", marginTop: "2.5rem" }}>Harare, ZW · Remote-ready · Designing &amp; engineering since 2023</p>
      </section>

      <style>{`
        @keyframes dvmarquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .dv-reveal { opacity: 0; transform: translateY(30px); transition: opacity .8s var(--ease), transform .8s var(--ease); }
        .dv-reveal.in { opacity: 1; transform: none; }
        @media (max-width: 620px) { .dv-hide-sm { display: none !important; } }
        @media (prefers-reduced-motion: reduce) {
          .dv-reveal { opacity: 1 !important; transform: none !important; }
          [style*="dvmarquee"] { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
