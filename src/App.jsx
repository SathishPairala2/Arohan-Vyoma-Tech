import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';

// Component Imports
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Services from './sections/Services';
import About from './sections/About';
import Portfolio from './sections/Portfolio';
import Process from './sections/Process';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Preloader from './components/Preloader';
import MouseGlow from './components/MouseGlow';
import FloatingOrbs from './components/FloatingOrbs';
import WhatsAppButton from './components/WhatsAppButton';

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function App() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
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
        <div className="relative min-h-screen bg-black text-white selection:bg-primary selection:text-white overflow-x-hidden">
            <ScrollToTop />
            <Preloader />
            <MouseGlow />
            <FloatingOrbs />

            <Navbar />

            <main className="relative z-10">
                <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route path="/services" element={<div className="pt-20"><Services /></div>} />
                    <Route path="/about" element={<div className="pt-20"><About /></div>} />
                    <Route path="/portfolio" element={<div className="pt-20"><Portfolio /></div>} />
                    <Route path="/process" element={<div className="pt-20"><Process /></div>} />
                    <Route path="/contact" element={<div className="pt-20"><Contact /></div>} />
                    <Route path="/privacy-policy" element={<div className="pt-20"><PrivacyPolicy /></div>} />
                    <Route path="/terms-of-service" element={<div className="pt-20"><TermsOfService /></div>} />
                </Routes>
            </main>

            <Footer />
            <WhatsAppButton />
        </div>
    );
}

export default App;
