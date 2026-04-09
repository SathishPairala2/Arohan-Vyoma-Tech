import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Component Imports
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import Hero from './sections/Hero';
import StatsBar from './sections/StatsBar';
import Services from './sections/Services';
import Portfolio from './sections/Portfolio';
import About from './sections/About';
import Process from './sections/Process';
import Testimonials from './sections/Testimonials';

import FAQ from './sections/FAQ';
import Contact from './sections/Contact';
import CTABanner from './sections/CTABanner';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

function App() {
    return (
        <div style={{ background: 'var(--color-bg-light)', minHeight: '100vh' }}>
            <Preloader />
            <ScrollToTop />
            <Navbar />

            <main>
                <Routes>
                    {/* ── Homepage: full scroll experience ── */}
                    <Route path="/" element={
                        <>
                            <Hero />
                            <StatsBar />
                            <Services />
                            <Portfolio />
                            <About />
                            <Process />
                            <Testimonials />

                            <FAQ />
                        </>
                    } />

                    {/* ── Sub-pages ── */}
                    <Route path="/services"  element={<div className="pt-20"><Services /></div>} />
                    <Route path="/about"     element={<div className="pt-20"><About /></div>} />
                    <Route path="/portfolio" element={<div className="pt-20"><Portfolio /></div>} />
                    <Route path="/process"   element={<div className="pt-20"><Process /></div>} />

                    <Route path="/faq"       element={<div className="pt-20"><FAQ /></div>} />
                    <Route path="/contact"   element={<div className="pt-20"><Contact /></div>} />
                    <Route path="/privacy-policy"   element={<div className="pt-20"><PrivacyPolicy /></div>} />
                    <Route path="/terms-of-service" element={<div className="pt-20"><TermsOfService /></div>} />
                </Routes>
            </main>

            <CTABanner />
            <Footer />
            <WhatsAppButton />
        </div>
    );
}

export default App;
