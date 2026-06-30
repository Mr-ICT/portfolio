"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';

const links = [
  { href: '#about', label: 'About', num: '01' },
  { href: '#skills', label: 'Skills', num: '02' },
  { href: '#work', label: 'Work', num: '03' },
  { href: '#timeline', label: 'Path', num: '04' },
  { href: '#contact', label: 'Contact', num: '05' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) return;
    e.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 150, display: "flex", alignItems: "center", justifyContent: "space-between", padding: scrolled ? "1rem var(--pad)" : "1.4rem var(--pad)", background: scrolled || open ? "rgba(6,11,20,0.92)" : "transparent", backdropFilter: scrolled || open ? "blur(14px)" : "none", borderBottom: scrolled || open ? "1px solid var(--line)" : "1px solid transparent", transition: "all 0.4s var(--ease)" }}>
      <a href="#top" style={{ display: "flex", alignItems: "baseline", gap: ".6rem" }}>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.4rem", letterSpacing: ".02em" }}>TM</span>
        <span className="navtag" style={{ fontFamily: "var(--font-mono)", fontSize: ".68rem", color: "var(--signal)", letterSpacing: ".05em" }}>_/ full-stack.dev</span>
      </a>

      {/* Desktop nav */}
      <nav className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={(e) => handleAnchor(e, link.href)} style={{ fontFamily: "var(--font-mono)", fontSize: ".74rem", letterSpacing: ".04em", color: "var(--text-dim)", transition: "color .3s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-dim)")}>
            <span style={{ color: "var(--signal)", fontSize: ".62rem", marginRight: ".35rem", fontFamily: "var(--font-mono)" }}>{link.num}</span>
            {link.label}
          </a>
        ))}
        <Link href="/design-vault" style={{ fontFamily: "var(--font-mono)", fontSize: ".74rem", color: "var(--text)", border: "1px solid var(--line)", padding: ".5rem .9rem", borderRadius: "100px", transition: "all .3s var(--ease)" }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--signal)"; e.currentTarget.style.background = "rgba(0,212,200,.06)"; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--line)"; e.currentTarget.style.background = "transparent"; }}>
          Graphic Design Vault
        </Link>
      </nav>

      {/* Mobile toggle */}
      <button className="nav-toggle" onClick={() => setOpen(!open)} style={{ display: "none", background: "none", border: "1px solid var(--line)", borderRadius: "6px", width: "38px", height: "38px", color: "var(--text)", fontFamily: "var(--font-mono)", fontSize: "1rem", alignItems: "center", justifyContent: "center" }}>
        {open ? "✕" : "☰"}
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="nav-mobile-panel" style={{ position: "fixed", top: "64px", left: 0, right: 0, bottom: 0, background: "var(--ink)", display: "flex", flexDirection: "column", padding: "2rem var(--pad)", gap: "1.8rem", zIndex: 140, overflowY: "auto" }}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => handleAnchor(e, link.href)} style={{ fontFamily: "var(--font-mono)", fontSize: "1.1rem", color: "var(--text)", display: "flex", alignItems: "center", gap: ".8rem" }}>
              <span style={{ color: "var(--signal)", fontSize: ".8rem" }}>{link.num}</span>
              {link.label}
            </a>
          ))}
          <Link href="/design-vault" onClick={() => setOpen(false)} style={{ fontFamily: "var(--font-mono)", fontSize: "1.1rem", color: "var(--signal)", marginTop: "1rem" }}>
            Graphic Design Vault →
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 880px) {
          .nav-desktop { display: none !important; }
          .nav-toggle { display: flex !important; }
          .navtag { display: none !important; }
        }
      `}</style>
    </header>
  );
}