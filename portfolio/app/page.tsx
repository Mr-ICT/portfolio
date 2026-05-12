import Constellation from '@/components/canvas/Constellation';
import Cursor from '@/components/ui/Cursor';
import ScrollProgress from '@/components/ui/ScrollProgress';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';

export default function Home() {
  return (
    <>
      <Constellation />
      <Cursor />
      <ScrollProgress />
      <Navbar />
      <main id="top">
        <Hero />
      </main>
      <Footer />
    </>
  );
}