import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        text: "Arohan Vyoma Tech delivered our hotel booking website ahead of schedule. The design is stunning, performance is excellent, and the admin panel is incredibly easy to use. Highly recommended!",
        author: "PONNAM GANESH",
        role: "Owner, Ganesh Rest House",
    },
    {
        text: "They built a complete travel booking platform with payment integration and an admin panel. The team was professional, responsive, and delivered top-notch quality. Will work with them again!",
        author: "CHENNAKESAVA NAIDU",
        role: "CEO, ACT Travel Company",
    },
    {
        text: "Our dairy delivery portal was built perfectly — intuitive user interface, reliable order tracking, and an admin dashboard that makes managing everything a breeze. Exceptional work!",
        author: "Eshwar Reddy",
        role: "Founder, Eshwar's Dairy",
    },
];

const Testimonials = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
    const next = () => setIndex((i) => (i + 1) % testimonials.length);

    return (
        <section
            id="testimonials"
            style={{
                background: 'var(--color-bg-light)',
                padding: 'var(--spacing-xl) 0',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <div className="container">
                {/* Header row */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '5rem',
                    flexWrap: 'wrap',
                    gap: '2rem',
                }}>
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                                fontWeight: 900,
                                color: 'var(--color-text-dark)',
                                lineHeight: 1.1,
                                margin: '0 0 0.5rem 0',
                            }}
                        >
                            What Our Clients Say
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            style={{
                                color: 'var(--color-text-muted-dark)',
                                fontSize: '0.95rem',
                                margin: 0,
                            }}
                        >
                            Hear directly from the businesses we've helped grow.
                        </motion.p>
                    </div>

                    {/* Nav arrows */}
                    <div style={{ display: 'flex', gap: '0.6rem', paddingTop: '0.25rem' }}>
                        {[{ fn: prev, label: '←' }, { fn: next, label: '→' }].map(({ fn, label }) => (
                            <button
                                key={label}
                                onClick={fn}
                                style={{
                                    width: 44, height: 44,
                                    border: '1px solid rgba(0,0,0,0.15)',
                                    borderRadius: '50%',
                                    background: 'transparent',
                                    cursor: 'pointer',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '1.1rem',
                                    color: 'var(--color-text-dark)',
                                    transition: 'all 0.25s ease',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'var(--color-text-dark)';
                                    e.currentTarget.style.color = '#fff';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'transparent';
                                    e.currentTarget.style.color = 'var(--color-text-dark)';
                                }}
                                aria-label={label === '←' ? 'Previous testimonial' : 'Next testimonial'}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Testimonial card */}
                <div style={{ position: 'relative', minHeight: '220px' }}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 60 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -60 }}
                            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                            style={{
                                maxWidth: '760px',
                            }}
                        >
                            {/* Big quote mark */}
                            <p style={{
                                fontFamily: 'Georgia, serif',
                                fontSize: '5rem',
                                lineHeight: 0.5,
                                color: 'var(--color-accent)',
                                marginBottom: '1.5rem',
                                opacity: 0.4,
                            }}>"</p>

                            <p style={{
                                fontFamily: 'var(--font-body)',
                                fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                                lineHeight: 1.75,
                                color: 'var(--color-text-dark)',
                                fontStyle: 'italic',
                                marginBottom: '2rem',
                            }}>
                                {testimonials[index].text}
                            </p>

                            <div>
                                <p style={{
                                    fontFamily: 'var(--font-heading)',
                                    fontSize: '0.85rem',
                                    fontWeight: 800,
                                    letterSpacing: '0.1em',
                                    color: 'var(--color-text-dark)',
                                    textTransform: 'uppercase',
                                    margin: 0,
                                }}>
                                    {testimonials[index].author}
                                </p>
                                <p style={{
                                    fontFamily: 'var(--font-body)',
                                    fontSize: '0.82rem',
                                    color: 'var(--color-text-muted-dark)',
                                    margin: '0.25rem 0 0',
                                }}>
                                    {testimonials[index].role}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Dot indicators */}
                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '3rem' }}>
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            style={{
                                height: '3px',
                                width: i === index ? '32px' : '16px',
                                borderRadius: '2px',
                                background: i === index ? 'var(--color-text-dark)' : 'rgba(0,0,0,0.18)',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                padding: 0,
                            }}
                            aria-label={`Go to testimonial ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
