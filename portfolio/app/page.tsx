import Constellation   from "@/components/canvas/Constellation";
import Cursor          from "@/components/ui/Cursor";
import ScrollProgress  from "@/components/ui/ScrollProgress";
import Navbar          from "@/components/layout/Navbar";
import Footer          from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Constellation />
      <Cursor />
      <ScrollProgress />
      <Navbar />
      <main id="top">
        {/* sections coming next */}
        <div style={{ minHeight: "200vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <p style={{ fontFamily: "var(--font-mono)", color: "var(--signal)" }}>Building...</p>
        </div>
      </main>
      <Footer />
    </>
  );
}