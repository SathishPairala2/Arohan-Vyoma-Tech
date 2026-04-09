import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const whyItems = [
    {
        percent: '75%',
        title: 'Strategic Depth',
        desc: 'Clear technical evaluation and focused direction that uncovers real opportunities for digital growth.',
    },
    {
        percent: '85%',
        title: 'Impact Performance',
        desc: 'Smart systems that convert visitors into users — and users into long-term advocates.',
    },
    {
        percent: '100%',
        title: 'Sustainable Expansion',
        desc: 'Growth-ready architectures built to scale responsibly while staying true to your product core.',
    },
];

const About = () => {
    return (
        <section
            id="about"
            style={{
                background: 'var(--color-bg-dark)',
                padding: 'var(--spacing-xl) 0',
            }}
        >
            <div className="container">
                {/* Eyebrow */}
                <motion.span
                    initial={{ opacity: 0, y: 16 }}
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
                        marginBottom: '1.25rem',
                    }}
                >
                    Why Choose Us
                </motion.span>

                {/* Two-column header */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '4rem',
                        alignItems: 'flex-start',
                        marginBottom: '5rem',
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                            fontWeight: 900,
                            color: '#fff',
                            lineHeight: 1.15,
                            margin: 0,
                        }}>
                            We don't just build apps.{' '}
                            <span style={{ color: 'var(--color-accent)' }}>We set the Standard.</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                    >
                        <p style={{
                            color: 'rgba(255,255,255,0.5)',
                            lineHeight: 1.8,
                            fontSize: '0.95rem',
                            margin: '0 0 2rem 0',
                        }}>
                            We are a passionate team of developers and designers dedicated to
                            crafting exceptional digital solutions in Hyderabad. With a focus
                            on innovation, reliability, and scalability — we transform ideas into
                            powerful applications that drive business growth.
                        </p>
                        <Link
                            to="/about"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                fontFamily: 'var(--font-heading)',
                                fontSize: '0.85rem',
                                fontWeight: 700,
                                color: '#fff',
                                textDecoration: 'none',
                                borderBottom: '1px solid rgba(255,255,255,0.25)',
                                paddingBottom: '2px',
                                transition: 'border-color 0.2s ease, color 0.2s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = 'var(--color-accent)';
                                e.currentTarget.style.borderColor = 'var(--color-accent)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = '#fff';
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)';
                            }}
                        >
                            About Us →
                        </Link>
                    </motion.div>
                </div>

                {/* Why Choose Us — Stats Cards */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '1.5rem',
                }}>
                    {whyItems.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.12 }}
                            style={{
                                background: 'var(--color-bg-dark-card)',
                                border: '1px solid rgba(255,255,255,0.07)',
                                borderRadius: '16px',
                                padding: '2.5rem 2rem',
                            }}
                        >
                            <p style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: '3.5rem',
                                fontWeight: 900,
                                color: 'var(--color-accent)',
                                lineHeight: 1,
                                marginBottom: '1rem',
                            }}>
                                {item.percent}
                            </p>
                            <h4 style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: '1rem',
                                fontWeight: 800,
                                color: '#fff',
                                marginBottom: '0.65rem',
                            }}>
                                {item.title}
                            </h4>
                            <p style={{
                                color: 'rgba(255,255,255,0.4)',
                                fontSize: '0.85rem',
                                lineHeight: 1.7,
                                margin: 0,
                            }}>
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Responsive */}
            <style>{`
                @media (max-width: 768px) {
                    #about .container > div:nth-child(2) {
                        grid-template-columns: 1fr !important;
                        gap: 2rem !important;
                    }
                    #about .container > div:last-child {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default About;
