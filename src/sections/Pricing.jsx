import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const plans = [
    {
        name: 'Starter',
        price: '₹15,000',
        period: 'per project',
        tagline: 'Perfect for small businesses & landing pages',
        features: [
            'Responsive Landing Page or Website',
            'Up to 5 Pages',
            'Contact Form Integration',
            'Basic SEO Setup',
            'Mobile Optimized',
            '1 Month Free Support',
        ],
        cta: 'Get Started',
        popular: false,
    },
    {
        name: 'Pro',
        price: '₹45,000',
        period: 'per project',
        tagline: 'For growing businesses & full-stack apps',
        features: [
            'Full-Stack Web Application',
            'Custom Admin Dashboard',
            'REST API + Database Design',
            'Payment Gateway Integration',
            'Authentication & User Roles',
            'Deployment on Cloud (AWS/GCP)',
            '3 Months Free Support',
        ],
        cta: 'Start Project',
        popular: true,
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        period: 'per quote',
        tagline: 'Tailored solutions for complex needs',
        features: [
            'Custom Software / ERP / Platform',
            'Mobile App (iOS & Android)',
            'Microservices Architecture',
            'CI/CD DevOps Pipeline',
            'Advanced Security & Compliance',
            'Dedicated Project Manager',
            '12 Months Priority Support',
        ],
        cta: 'Contact Us',
        popular: false,
    },
];

const Pricing = () => {
    return (
        <section
            id="pricing"
            style={{
                background: 'var(--color-bg-light)',
                padding: 'var(--spacing-xl) 0',
            }}
        >
            <div className="container">
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
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
                            marginBottom: '1rem',
                        }}
                    >
                        Transparent Pricing
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                            fontWeight: 900,
                            color: 'var(--color-text-dark)',
                            lineHeight: 1.1,
                            marginBottom: '1rem',
                        }}
                    >
                        Choose Your Plan
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{
                            color: 'var(--color-text-muted-dark)',
                            maxWidth: '480px',
                            margin: '0 auto',
                            fontSize: '1rem',
                            lineHeight: 1.75,
                        }}
                    >
                        No hidden fees. No surprises. Just quality work that delivers results.
                    </motion.p>
                </div>

                {/* Cards */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '1.5rem',
                        alignItems: 'stretch',
                    }}
                >
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.12 }}
                            style={{ position: 'relative' }}
                        >
                            {plan.popular && (
                                <div style={{
                                    position: 'absolute',
                                    top: '-14px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    zIndex: 10,
                                }}>
                                    <span style={{
                                        background: 'var(--color-accent)',
                                        color: '#fff',
                                        fontFamily: 'var(--font-heading)',
                                        fontSize: '0.68rem',
                                        fontWeight: 800,
                                        letterSpacing: '0.08em',
                                        padding: '0.35rem 1rem',
                                        borderRadius: '100px',
                                        textTransform: 'uppercase',
                                        whiteSpace: 'nowrap',
                                        boxShadow: 'var(--shadow-btn)',
                                    }}>
                                        ⚡ Most Popular
                                    </span>
                                </div>
                            )}

                            <div
                                style={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    background: plan.popular ? 'var(--color-text-dark)' : '#ffffff',
                                    border: plan.popular
                                        ? '2px solid var(--color-text-dark)'
                                        : '1px solid rgba(0,0,0,0.09)',
                                    borderRadius: '20px',
                                    padding: '2.5rem 2rem',
                                    boxShadow: plan.popular
                                        ? '0 12px 40px rgba(0,0,0,0.2)'
                                        : 'var(--shadow-card-light)',
                                    transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                                }}
                                onMouseEnter={(e) => {
                                    if (!plan.popular) {
                                        e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)';
                                        e.currentTarget.style.transform = 'translateY(-4px)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (!plan.popular) {
                                        e.currentTarget.style.boxShadow = 'var(--shadow-card-light)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }
                                }}
                            >
                                {/* Plan name */}
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <h3 style={{
                                        fontFamily: 'var(--font-heading)',
                                        fontSize: '1rem',
                                        fontWeight: 800,
                                        color: plan.popular ? 'rgba(255,255,255,0.6)' : 'var(--color-text-muted-dark)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.12em',
                                        marginBottom: '0.4rem',
                                    }}>
                                        {plan.name}
                                    </h3>
                                    <p style={{
                                        color: plan.popular ? 'rgba(255,255,255,0.5)' : 'var(--color-text-muted-dark)',
                                        fontSize: '0.85rem',
                                        margin: 0,
                                        lineHeight: 1.5,
                                    }}>
                                        {plan.tagline}
                                    </p>
                                </div>

                                {/* Price */}
                                <div style={{
                                    borderTop: `1px solid ${plan.popular ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
                                    borderBottom: `1px solid ${plan.popular ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
                                    padding: '1.5rem 0',
                                    marginBottom: '1.75rem',
                                }}>
                                    <span style={{
                                        fontFamily: 'var(--font-heading)',
                                        fontSize: 'clamp(2.2rem, 4vw, 3rem)',
                                        fontWeight: 900,
                                        color: plan.popular ? '#fff' : 'var(--color-text-dark)',
                                        lineHeight: 1,
                                    }}>
                                        {plan.price}
                                    </span>
                                    {plan.price !== 'Custom' && (
                                        <span style={{
                                            fontFamily: 'var(--font-body)',
                                            fontSize: '0.82rem',
                                            color: plan.popular ? 'rgba(255,255,255,0.4)' : 'var(--color-text-muted-dark)',
                                            marginLeft: '0.5rem',
                                        }}>
                                            / {plan.period}
                                        </span>
                                    )}
                                </div>

                                {/* Features */}
                                <ul style={{
                                    listStyle: 'none',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '0.75rem',
                                    flex: 1,
                                    marginBottom: '2rem',
                                }}>
                                    {plan.features.map((feat) => (
                                        <li key={feat} style={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: '0.7rem',
                                            fontSize: '0.88rem',
                                            color: plan.popular ? 'rgba(255,255,255,0.75)' : 'var(--color-text-mid)',
                                            lineHeight: 1.5,
                                        }}>
                                            <CheckCircle
                                                size={15}
                                                style={{
                                                    color: plan.popular ? 'var(--color-accent)' : 'var(--color-accent)',
                                                    marginTop: 2,
                                                    flexShrink: 0,
                                                }}
                                            />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <Link
                                    to="/contact"
                                    style={{
                                        display: 'block',
                                        textAlign: 'center',
                                        padding: '0.9rem 1.5rem',
                                        borderRadius: '100px',
                                        fontFamily: 'var(--font-heading)',
                                        fontSize: '0.88rem',
                                        fontWeight: 800,
                                        textDecoration: 'none',
                                        transition: 'all 0.25s ease',
                                        ...(plan.popular ? {
                                            background: 'var(--color-accent)',
                                            color: '#fff',
                                            boxShadow: 'var(--shadow-btn)',
                                        } : {
                                            background: 'transparent',
                                            color: 'var(--color-text-dark)',
                                            border: '2px solid var(--color-text-dark)',
                                        }),
                                    }}
                                    onMouseEnter={(e) => {
                                        if (plan.popular) {
                                            e.currentTarget.style.background = 'var(--color-accent-hover)';
                                            e.currentTarget.style.transform = 'translateY(-2px)';
                                        } else {
                                            e.currentTarget.style.background = 'var(--color-text-dark)';
                                            e.currentTarget.style.color = '#fff';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (plan.popular) {
                                            e.currentTarget.style.background = 'var(--color-accent)';
                                            e.currentTarget.style.transform = 'translateY(0)';
                                        } else {
                                            e.currentTarget.style.background = 'transparent';
                                            e.currentTarget.style.color = 'var(--color-text-dark)';
                                        }
                                    }}
                                >
                                    {plan.cta} →
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footnote */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{
                        textAlign: 'center',
                        color: 'var(--color-text-muted-dark)',
                        fontSize: '0.82rem',
                        marginTop: '2.5rem',
                    }}
                >
                    All prices are starting estimates. Final quote based on project scope.{' '}
                    <Link to="/contact" style={{ color: 'var(--color-accent)', fontWeight: 600 }}>
                        Contact us
                    </Link>{' '}
                    for a custom proposal.
                </motion.p>
            </div>

            <style>{`
                @media (max-width: 900px) {
                    #pricing .container > div:nth-child(2) {
                        grid-template-columns: 1fr !important;
                        max-width: 480px;
                        margin: 0 auto;
                    }
                }
            `}</style>
        </section>
    );
};

export default Pricing;
