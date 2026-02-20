import { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import ResumeOverlay from './components/ResumeOverlay';
import Preloader from './components/Preloader';
import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import './index.css';
import './App.css';

function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.5,
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {/* Preloader */}
      {showPreloader && (
        <Preloader onComplete={() => setShowPreloader(false)} />
      )}

      {/* Floating Action Elements */}
      <CustomCursor />
      <Navigation />
      <ResumeOverlay />
      <div className="app-container">
        {/* Hero Section with Parallax */}
        <div id="home">
          <Hero />
        </div>

        {/* Horizontal Scroll Work Section */}
        <div id="work">
          <Work />
        </div>

        {/* About Section */}
        <About />

        {/* Contact Section */}
        <Contact />
      </div>
    </>
  );
}

export default App;

