import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import '../styles/hero.css';

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const yContent = useTransform(scrollYProgress, [0, 1], [0, 80]);

    return (
        <section ref={containerRef} className="hero-section">

            {/* Background */}
            <div className="hero-bg">
                {/* Deep dark base */}
                <div className="hero-bg-base" />
                {/* Purple glow - top left corner */}
                <div className="hero-glow hero-glow-left" />
                {/* Blue/teal glow - top right corner */}
                <div className="hero-glow hero-glow-right" />
                {/* Bottom dark fade */}
                <div className="hero-bg-bottom-fade" />
            </div>

            {/* Content */}
            <motion.div
                style={{ y: yContent, opacity }}
                className="hero-content-wrapper"
            >
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <span className="hero-badge">
                        Future-Ready Technology Solutions
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                >
                    Transforming Ideas into
                    <br />
                    <span className="hero-title-gradient">Digital Reality</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    className="hero-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    We build scalable, modern, and intelligent digital solutions for
                    forward-thinking businesses. From conceptualization to
                    deployment, we are your engineering partners.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.55 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                >
                    <Link to="/contact" className="hero-cta-btn">
                        <span>Get Started</span>
                        <ArrowRight size={20} />
                    </Link>
                </motion.div>
            </motion.div>

            {/* Bottom fade to next section */}
            <div className="hero-bottom-fade" />
        </section>
    );
};

export default Hero;
