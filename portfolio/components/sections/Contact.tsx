"use client";
import { useEffect, useRef } from 'react';

export default function Contact() {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <section id="contact" style={{ textAlign: "center", padding: "clamp(6rem,16vh,11rem) var(--pad)" }}>
      <div ref={ref} className="reveal" style={{ maxWidth: "900px", margin: "0 auto" }}>
        <span className="sec-num" style={{ display: "block", marginBottom: "1.5rem" }}>05</span>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: "clamp(2.2rem,7vw,5.2rem)", lineHeight: 1.0, letterSpacing: "-0.03em", marginBottom: "1.6rem" }}>
          Have a system that needs<br/>building from <em style={{ fontStyle: "italic", color: "var(--signal)", textShadow: "0 0 60px var(--glow)" }}>scratch?</em>
        </h2>
        <p style={{ color: "var(--text-dim)", maxWidth: "48ch", margin: "0 auto 2.8rem", fontSize: "1.05rem" }}>
          Tell me what you are trying to build. I will tell you how to ship it — and then actually ship it.
        </p>
        <a href="mailto:tmanjengwa2@gmail.com" style={{ fontFamily: "var(--font-mono)", fontSize: "clamp(1rem,3.4vw,1.7rem)", color: "var(--text)", borderBottom: "1px solid var(--line)", paddingBottom: ".35rem", transition: "color .35s, border-color .35s, letter-spacing .35s", display: "inline-block" }} onMouseEnter={(e) => { e.currentTarget.style.color = "var(--signal)"; e.currentTarget.style.borderColor = "var(--signal)"; e.currentTarget.style.letterSpacing = ".02em"; }} onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.borderColor = "var(--line)"; e.currentTarget.style.letterSpacing = "normal"; }}>
          tmanjengwa2@gmail.com
        </a>
        <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginTop: "3rem", flexWrap: "wrap" }}>
          {[
            { label: "LinkedIn", href: "https://linkedin.com/in/tanyaradzwamanjengwa" },
            { label: "GitHub", href: "https://github.com/Mr-ICT" },
            { label: "Design Vault", href: "/design-vault" },
            { label: "Resume", href: "#" },
          ].map((link) => (
            <a key={link.label} href={link.href} style={{ fontFamily: "var(--font-mono)", fontSize: ".82rem", color: "var(--text-dim)", position: "relative", transition: "color .3s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--signal)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-dim)")}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}