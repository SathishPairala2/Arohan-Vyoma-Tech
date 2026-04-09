import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
    {
        num: '01',
        title: 'Discovery & Planning',
        description: 'We understand your requirements, goals, and target audience to create a comprehensive project roadmap that sets the foundation for success.',
    },
    {
        num: '02',
        title: 'Design & Prototyping',
        description: 'Creating wireframes and interactive prototypes to visualize the final product before a single line of code is written.',
    },
    {
        num: '03',
        title: 'Development',
        description: 'Building your solution with clean, scalable code using the latest technologies and industry best practices.',
    },
    {
        num: '04',
        title: 'Testing & Quality Assurance',
        description: 'Rigorous testing to ensure quality, performance, and security across all devices and platforms.',
    },
    {
        num: '05',
        title: 'Deployment',
        description: 'Launching your application with proper setup, configuration, and optimization for production environments.',
    },
    {
        num: '06',
        title: 'Support & Growth',
        description: 'Ongoing support, updates, and improvements to keep your application running at peak performance long after launch.',
    },
];

const Process = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section
            id="process"
            style={{
                background: 'var(--color-bg-light)',
                padding: 'var(--spacing-xl) 0',
            }}
        >
            <div className="container">
                {/* Header */}
                <div style={{ marginBottom: '4rem' }}>
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
                            marginBottom: '1rem',
                        }}
                    >
                        How We Work
                    </motion.span>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '3rem',
                        alignItems: 'flex-end',
                    }}>
                        <motion.h2
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: 'clamp(2rem, 4vw, 3rem)',
                                fontWeight: 900,
                                color: 'var(--color-text-dark)',
                                lineHeight: 1.1,
                                margin: 0,
                            }}
                        >
                            Your Brand's Secret Weapon —<br />
                            <span style={{ color: 'var(--color-accent)' }}>The Right Process.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            style={{
                                color: 'var(--color-text-muted-dark)',
                                fontSize: '0.95rem',
                                lineHeight: 1.8,
                                margin: 0,
                            }}
                        >
                            We follow a structured approach to every project — from the first
                            discovery call to post-launch support — ensuring clarity and quality
                            at every step.
                        </motion.p>
                    </div>
                </div>

                {/* Steps accordion */}
                <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}>
                    {steps.map((step, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <motion.div
                                key={step.num}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.06 }}
                                style={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : i)}
                                    style={{
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        padding: '1.75rem 0',
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        textAlign: 'left',
                                        gap: '2rem',
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flex: 1 }}>
                                        <span style={{
                                            fontFamily: 'var(--font-heading)',
                                            fontSize: '0.72rem',
                                            fontWeight: 700,
                                            color: 'var(--color-accent)',
                                            minWidth: '1.8rem',
                                            letterSpacing: '0.05em',
                                        }}>
                                            {step.num}
                                        </span>
                                        <h3 style={{
                                            fontFamily: 'var(--font-heading)',
                                            fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                                            fontWeight: 800,
                                            color: isOpen ? 'var(--color-accent)' : 'var(--color-text-dark)',
                                            margin: 0,
                                            transition: 'color 0.25s ease',
                                        }}>
                                            {step.title}
                                        </h3>
                                    </div>

                                    {/* Toggle icon */}
                                    <div style={{
                                        width: 36,
                                        height: 36,
                                        borderRadius: '50%',
                                        border: '1px solid rgba(0,0,0,0.15)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0,
                                        background: isOpen ? 'var(--color-text-dark)' : 'transparent',
                                        color: isOpen ? '#fff' : 'var(--color-text-dark)',
                                        fontSize: '1.1rem',
                                        transition: 'all 0.25s ease',
                                        transform: isOpen ? 'rotate(45deg)' : 'none',
                                    }}>
                                        +
                                    </div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
                                            style={{ overflow: 'hidden' }}
                                        >
                                            <p style={{
                                                color: 'var(--color-text-muted-dark)',
                                                fontSize: '1rem',
                                                lineHeight: 1.8,
                                                paddingBottom: '1.75rem',
                                                paddingLeft: '3.3rem',
                                                margin: 0,
                                                maxWidth: '640px',
                                            }}>
                                                {step.description}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    #process .container > div:nth-child(1) > div {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Process;
