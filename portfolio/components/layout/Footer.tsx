"use client";
export default function Footer() {
  return (
    <footer style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "2rem var(--pad)", borderTop: "1px solid var(--line)", fontFamily: "var(--font-mono)", fontSize: ".74rem", color: "var(--text-faint)", flexWrap: "wrap", gap: "1rem" }}>
      <span>2026 Tanyaradzwa Manjengwa</span>
      <span style={{ color: "var(--text-dim)" }}>Designed and built from scratch</span>
      <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--signal)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-faint)")} style={{ transition: "color .3s" }}>Back to top</a>
    </footer>
  );
}