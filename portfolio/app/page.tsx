import Constellation from '@/components/canvas/Constellation';
import Cursor from '@/components/ui/Cursor';
import ScrollProgress from '@/components/ui/ScrollProgress';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Stats from '@/components/sections/Stats';
import Skills from '@/components/sections/Skills';

export default function Home() {
  return (
    <>
      <Constellation />
      <Cursor />
      <ScrollProgress />
      <Navbar />
      <main id="top">
        <Hero />
        <About />
        <Stats />
        <Skills />
      </main>
      <Footer />
    </>
  );
}