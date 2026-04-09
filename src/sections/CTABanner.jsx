import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CTABanner = () => (
    <section
        style={{
            background: 'var(--color-bg-dark)',
            padding: 'var(--spacing-xl) 0',
            position: 'relative',
            overflow: 'hidden',
        }}
    >
        {/* Subtle purple radial glow */}
        <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '400px',
            background: 'radial-gradient(ellipse at center, rgba(104,63,191,0.18) 0%, transparent 70%)',
            pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            {/* Rounded dark card — like Magsmen's CTA container */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{
                    background: '#111111',
                    borderRadius: '24px',
                    padding: 'clamp(3rem, 6vw, 5rem) clamp(2rem, 6vw, 5rem)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* inner glow */}
                <div style={{
                    position: 'absolute', inset: 0,
                    background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(104,63,191,0.12) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }} />

                <motion.span
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        display: 'inline-block',
                        fontFamily: 'var(--font-heading)',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: 'var(--color-accent)',
                        marginBottom: '1.5rem',
                    }}
                >
                    Let's Build Together
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(2rem, 5vw, 3.8rem)',
                        fontWeight: 900,
                        color: '#fff',
                        lineHeight: 1.1,
                        marginBottom: '1.25rem',
                    }}
                >
                    Ready to Build Something<br />
                    <span style={{ color: 'var(--color-accent)' }}>Extraordinary?</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    style={{
                        color: 'rgba(255,255,255,0.45)',
                        fontSize: '1rem',
                        maxWidth: '520px',
                        margin: '0 auto 2.5rem',
                        lineHeight: 1.8,
                    }}
                >
                    From idea to deployment — we turn your vision into a high-performance
                    digital product. Let's start with a free consultation.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}
                >
                    <Link
                        to="/contact"
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                            padding: '1rem 2.2rem',
                            borderRadius: '100px',
                            background: 'var(--color-accent)',
                            color: '#fff',
                            fontFamily: 'var(--font-heading)',
                            fontSize: '0.9rem', fontWeight: 700,
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 4px 20px rgba(104,63,191,0.35)',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'var(--color-accent-hover)';
                            e.currentTarget.style.boxShadow = '0 6px 28px rgba(104,63,191,0.5)';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'var(--color-accent)';
                            e.currentTarget.style.boxShadow = '0 4px 20px rgba(104,63,191,0.35)';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        Get a Free Quote →
                    </Link>

                    <Link
                        to="/portfolio"
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                            padding: '1rem 2.2rem',
                            borderRadius: '100px',
                            background: 'transparent',
                            color: 'rgba(255,255,255,0.65)',
                            fontFamily: 'var(--font-heading)',
                            fontSize: '0.9rem', fontWeight: 700,
                            textDecoration: 'none',
                            border: '1px solid rgba(255,255,255,0.15)',
                            transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.color = '#fff';
                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.color = 'rgba(255,255,255,0.65)';
                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                        }}
                    >
                        View Our Work
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    </section>
);

export default CTABanner;
