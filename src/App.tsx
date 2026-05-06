import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Lenis from 'lenis';
import Cursor from './components/Cursor';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Terminal from './components/Terminal';
import RouteShutter from './components/RouteShutter';

// Pages
import Home from './pages/Home';
import Studio from './pages/Studio';
import Work from './pages/Work';
import ProjectDetail from './pages/ProjectDetail';
import ServicesPage from './pages/ServicesPage';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

import PageWrapper from './components/PageWrapper';

function AppContent({ loading, setLoading }: { loading: boolean; setLoading: (v: boolean) => void }) {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative bg-atmosphere min-h-screen">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-biolu/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-electric/10 blur-[150px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      <div className="noise-bg" />
      <Preloader onComplete={() => setLoading(false)} />
      <Cursor />
      <ScrollToTop />
      <Terminal />
      
      {!loading && (
        <>
          <Navbar />
          <AnimatePresence mode="wait">
            <RouteShutter key="shutter" />
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
              <Route path="/studio" element={<PageWrapper><Studio /></PageWrapper>} />
              <Route path="/work" element={<PageWrapper><Work /></PageWrapper>} />
              <Route path="/work/:id" element={<PageWrapper><ProjectDetail /></PageWrapper>} />
              <Route path="/services" element={<PageWrapper><ServicesPage /></PageWrapper>} />
              <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
              <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
        </>
      )}
    </main>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <AppContent loading={loading} setLoading={setLoading} />
    </Router>
  );
}

