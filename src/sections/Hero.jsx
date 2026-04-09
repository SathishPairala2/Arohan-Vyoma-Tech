import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../styles/hero.css';

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
    const yContent = useTransform(scrollYProgress, [0, 1], [0, 60]);

    return (
        <section ref={containerRef} className="hero-section">

            <motion.div
                style={{ y: yContent, opacity }}
                className="hero-content-wrapper"
            >
                {/* Eyebrow badge */}
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
                    initial={{ opacity: 0, y: 36 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.75, delay: 0.2 }}
                >
                    A great app is nice.{' '}
                    <br />
                    <span className="hero-title-accent">Smart tech is better.</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    className="hero-subtitle"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.35 }}
                >
                    We study your users and build scalable, modern digital solutions
                    so your product doesn't just look good — it works brilliantly.
                </motion.p>

                {/* Dual CTAs */}
                <motion.div
                    className="hero-cta-row"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                >
                    <Link to="/contact" className="hero-cta-btn">
                        Book a Free Discovery Call &rsaquo;
                    </Link>

                    <Link to="/portfolio" className="hero-cta-btn-outline">
                        See Our Work &rsaquo;
                    </Link>
                </motion.div>
            </motion.div>


        </section>
    );
};

export default Hero;
