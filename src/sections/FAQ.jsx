import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const faqs = [
    {
        question: 'What is ArohanVyomaTech?',
        answer: 'ArohanVyomaTech is a digital agency based in Hyderabad, dedicated to transforming businesses through innovative web, mobile, and custom software solutions. We specialize in creating high-performance digital products that drive growth and enhance user experience.',
    },
    {
        question: 'What services do you provide?',
        answer: 'We offer a comprehensive suite of services including Web Development (React, Next.js), Mobile App Development (iOS, Android, React Native), UI/UX Design, Cloud & DevOps, Digital Marketing, and Bespoke Enterprise Software.',
    },
    {
        question: 'How long does a typical project take?',
        answer: 'Timelines vary based on project complexity. A standard web application usually takes 4–8 weeks, while larger enterprise systems may take 3–6 months. We provide a detailed roadmap during our discovery phase.',
    },
    {
        question: 'Do you offer post-launch support?',
        answer: 'Yes! We provide ongoing maintenance and support packages to ensure your digital products remain secure, updated, and performant. Our team is available for bug fixes, updates, and feature enhancements.',
    },
    {
        question: 'How do I get started with a project?',
        answer: "Simply reach out via our contact form or the 'Get a Free Quote' button. We'll schedule a discovery call to understand your needs and provide a tailored proposal.",
    },
    {
        question: 'Can you help with existing projects?',
        answer: 'Absolutely. We often work with clients to modernize legacy systems, add new features to existing apps, or provide technical audits and performance optimization.',
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section
            id="faq"
            style={{
                background: 'var(--color-bg-light)',
                padding: 'var(--spacing-xl) 0',
            }}
        >
            <div className="container">
                {/* Two-column grid */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '5fr 7fr',
                        gap: '6rem',
                        alignItems: 'flex-start',
                    }}
                >
                    {/* Left — sticky heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ position: 'sticky', top: '100px' }}
                    >
                        <span style={{
                            display: 'inline-block',
                            fontFamily: 'var(--font-heading)',
                            fontSize: '0.7rem',
                            fontWeight: 700,
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            color: 'var(--color-accent)',
                            marginBottom: '1rem',
                        }}>
                            FAQs
                        </span>

                        <h2 style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                            fontWeight: 900,
                            color: 'var(--color-text-dark)',
                            lineHeight: 1.1,
                            marginBottom: '1.25rem',
                        }}>
                            Frequently<br />Asked<br />Questions
                        </h2>

                        <p style={{
                            color: 'var(--color-text-muted-dark)',
                            fontSize: '0.95rem',
                            lineHeight: 1.75,
                            marginBottom: '2rem',
                        }}>
                            Can't find the answer you're looking for? We're happy to help.
                        </p>

                        <Link
                            to="/contact"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.85rem 1.8rem',
                                borderRadius: '100px',
                                background: 'var(--color-text-dark)',
                                color: '#fff',
                                fontFamily: 'var(--font-heading)',
                                fontSize: '0.85rem',
                                fontWeight: 700,
                                textDecoration: 'none',
                                transition: 'all 0.25s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'var(--color-accent)';
                                e.currentTarget.style.boxShadow = 'var(--shadow-btn)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'var(--color-text-dark)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            Contact Support →
                        </Link>
                    </motion.div>

                    {/* Right — accordion */}
                    <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}>
                        {faqs.map((faq, i) => {
                            const isOpen = openIndex === i;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 12 }}
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
                                            padding: '1.5rem 0',
                                            background: 'none',
                                            border: 'none',
                                            cursor: 'pointer',
                                            textAlign: 'left',
                                            gap: '1.5rem',
                                        }}
                                    >
                                        <span style={{
                                            fontFamily: 'var(--font-heading)',
                                            fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
                                            fontWeight: 700,
                                            color: isOpen ? 'var(--color-accent)' : 'var(--color-text-dark)',
                                            transition: 'color 0.25s ease',
                                        }}>
                                            {faq.question}
                                        </span>

                                        <div style={{
                                            width: 32,
                                            height: 32,
                                            borderRadius: '50%',
                                            border: '1px solid rgba(0,0,0,0.15)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0,
                                            background: isOpen ? 'var(--color-text-dark)' : 'transparent',
                                            color: isOpen ? '#fff' : 'var(--color-text-dark)',
                                            fontSize: '1rem',
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
                                                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                                                style={{ overflow: 'hidden' }}
                                            >
                                                <p style={{
                                                    color: 'var(--color-text-muted-dark)',
                                                    fontSize: '0.95rem',
                                                    lineHeight: 1.8,
                                                    paddingBottom: '1.5rem',
                                                    margin: 0,
                                                    maxWidth: '540px',
                                                }}>
                                                    {faq.answer}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 900px) {
                    #faq .container > div {
                        grid-template-columns: 1fr !important;
                        gap: 3rem !important;
                    }
                    #faq .container > div > div:first-child {
                        position: static !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default FAQ;
