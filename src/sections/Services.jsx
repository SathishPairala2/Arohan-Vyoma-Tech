import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, CheckCircle } from 'lucide-react';

const services = [
    {
        id: 'web-dev',
        title: 'Web Development',
        tagline: 'Scalable full-stack applications & modern landing pages.',
        details: {
            overview: 'We craft high-performance web applications tailored to your business needs. From simple landing pages to complex enterprise platforms, our team delivers pixel-perfect, scalable solutions.',
            features: [
                'React, Next.js, Vue.js, and Angular frontends',
                'Node.js, Express, FastAPI, and Spring Boot backends',
                'RESTful APIs and GraphQL integration',
                'SEO optimization and Core Web Vitals performance',
                'Responsive design across all devices',
                'Database design with PostgreSQL, MongoDB, MySQL',
            ],
            tech: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB'],
        },
    },
    {
        id: 'mobile-apps',
        title: 'Mobile Apps',
        tagline: 'Native & cross-platform experiences for iOS and Android.',
        details: {
            overview: 'We build mobile applications that feel native on every platform — smooth, fast, and delightful.',
            features: [
                'Native iOS (Swift/SwiftUI) development',
                'Native Android (Kotlin/Jetpack Compose) development',
                'Cross-platform React Native & Flutter apps',
                'App Store & Google Play deployment',
                'Push notifications and offline support',
                'Integration with device APIs (camera, GPS, etc.)',
            ],
            tech: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Expo'],
        },
    },
    {
        id: 'ui-ux',
        title: 'UI/UX Design',
        tagline: 'Aesthetics meets functionality — user-centered interfaces.',
        details: {
            overview: 'Design that converts. We blend stunning visuals with deep UX research to create interfaces that delight users and drive business outcomes.',
            features: [
                'User research and persona development',
                'Information architecture and user flows',
                'Wireframing and low-fidelity prototypes',
                'High-fidelity Figma designs',
                'Interactive prototypes for user testing',
                'Design systems and component libraries',
            ],
            tech: ['Figma', 'Adobe XD', 'Framer', 'Principle', 'Storybook', 'Zeplin'],
        },
    },
    {
        id: 'cloud-devops',
        title: 'Cloud & DevOps',
        tagline: 'Scalable infrastructure & reliable deployment pipelines.',
        details: {
            overview: 'We build resilient cloud infrastructure that scales with your business. Our DevOps practices ensure reliable deployments and optimized cloud costs.',
            features: [
                'AWS, Google Cloud, and Azure setup & management',
                'CI/CD pipeline setup (GitHub Actions, GitLab CI)',
                'Docker containerization and Kubernetes orchestration',
                'Infrastructure as Code with Terraform',
                'Monitoring and alerting with Grafana, Datadog',
                'Cloud cost optimization and security audits',
            ],
            tech: ['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'Terraform'],
        },
    },
    {
        id: 'maintenance',
        title: 'Support & Maintenance',
        tagline: '24/7 monitoring, security updates, and performance tuning.',
        details: {
            overview: 'We keep your applications healthy after launch — proactive monitoring, rapid bug resolution, and continuous improvements.',
            features: [
                '24/7 uptime monitoring and alerting',
                'Rapid bug fixes with SLA guarantees',
                'Regular security patches and dependency updates',
                'Performance audits and optimization',
                'Monthly reports with usage analytics',
                'Dedicated support channel (Slack / email)',
            ],
            tech: ['Sentry', 'Datadog', 'PagerDuty', 'New Relic', 'LogRocket', 'Jira'],
        },
    },
    {
        id: 'custom-software',
        title: 'Custom Software',
        tagline: 'Bespoke enterprise tools crafted for your specific workflows.',
        details: {
            overview: "Off-the-shelf software rarely fits perfectly. We build bespoke solutions designed around your exact workflows, giving your business a competitive edge.",
            features: [
                'Enterprise resource planning (ERP) systems',
                'Custom booking and scheduling platforms',
                'E-commerce with payment gateway integration',
                'Business process automation (BPA)',
                'CRM and internal tooling development',
                'Legacy system migration and modernization',
            ],
            tech: ['Java', 'Python', 'Go', 'Stripe', 'Razorpay', 'PostgreSQL'],
        },
    },
    {
        id: 'digital-marketing',
        title: 'Digital Marketing',
        tagline: 'Data-driven growth strategies and technical SEO optimization.',
        details: {
            overview: 'Visibility drives growth. We combine technical SEO, content strategy, and performance marketing to bring the right customers to your digital doorstep.',
            features: [
                'Technical SEO audits and on-page optimization',
                'Keyword research and content strategy',
                'Google Ads and Meta Ads campaign management',
                'Social media strategy and content creation',
                'Link building and domain authority growth',
                'Analytics setup and monthly performance reports',
            ],
            tech: ['Google Analytics', 'SEMrush', 'Ahrefs', 'Google Ads', 'Meta Ads', 'HubSpot'],
        },
    },
];

// ─── Service Detail Modal ──────────────────────────────────────────────────────
const ServiceModal = ({ service, onClose }) => {
    if (!service) return null;

    return (
        <AnimatePresence>
            <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                style={{
                    position: 'fixed',
                    inset: 0,
                    zIndex: 9999,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '24px',
                    background: 'rgba(0,0,0,0.75)',
                    backdropFilter: 'blur(10px)',
                }}
            >
                <motion.div
                    key="panel"
                    initial={{ opacity: 0, scale: 0.94, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.94, y: 40 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                    onClick={(e) => e.stopPropagation()}
                    style={{
                        position: 'relative',
                        width: '100%',
                        maxWidth: '640px',
                        maxHeight: '82vh',
                        overflowY: 'auto',
                        borderRadius: '20px',
                        background: '#f5f5f5',
                        boxShadow: '0 30px 80px rgba(0,0,0,0.3)',
                    }}
                >
                    {/* Close */}
                    <button
                        onClick={onClose}
                        style={{
                            position: 'absolute', top: '1.25rem', right: '1.25rem',
                            background: 'rgba(0,0,0,0.08)', border: 'none',
                            borderRadius: '50%', width: 36, height: 36,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            cursor: 'pointer', color: 'var(--color-text-dark)',
                            transition: 'background 0.2s',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.15)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.08)'}
                    >
                        <X size={18} />
                    </button>

                    <div style={{ padding: '2rem' }}>
                        {/* Accent bar */}
                        <div style={{
                            width: 40, height: 4, background: 'var(--color-accent)',
                            borderRadius: 4, marginBottom: '1.25rem',
                        }} />

                        <h2 style={{
                            fontFamily: 'var(--font-heading)', fontSize: '1.7rem',
                            fontWeight: 900, color: 'var(--color-text-dark)', marginBottom: '0.75rem',
                        }}>
                            {service.title}
                        </h2>
                        <p style={{ color: 'var(--color-text-muted-dark)', lineHeight: 1.8, marginBottom: '2rem' }}>
                            {service.details.overview}
                        </p>

                        <h3 style={{
                            fontFamily: 'var(--font-heading)', fontSize: '0.7rem',
                            fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase',
                            color: 'var(--color-text-muted-dark)', marginBottom: '1rem',
                        }}>
                            What's Included
                        </h3>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem' }}>
                            {service.details.features.map((feat, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--color-text-mid)', fontSize: '0.9rem' }}>
                                    <CheckCircle size={16} style={{ color: 'var(--color-accent)', marginTop: 3, flexShrink: 0 }} />
                                    {feat}
                                </li>
                            ))}
                        </ul>

                        <h3 style={{
                            fontFamily: 'var(--font-heading)', fontSize: '0.7rem',
                            fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase',
                            color: 'var(--color-text-muted-dark)', marginBottom: '0.75rem',
                        }}>
                            Technologies
                        </h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                            {service.details.tech.map((t) => (
                                <span key={t} style={{
                                    padding: '0.35rem 0.85rem', borderRadius: '100px',
                                    background: 'rgba(104,63,191,0.08)', color: 'var(--color-accent)',
                                    fontSize: '0.8rem', fontWeight: 600,
                                    border: '1px solid rgba(104,63,191,0.2)',
                                    fontFamily: 'var(--font-heading)',
                                }}>
                                    {t}
                                </span>
                            ))}
                        </div>

                        <Link
                            to="/contact"
                            onClick={onClose}
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                padding: '0.9rem 2rem', borderRadius: '100px',
                                background: 'var(--color-text-dark)', color: '#fff',
                                fontFamily: 'var(--font-heading)', fontWeight: 700,
                                fontSize: '0.88rem', textDecoration: 'none',
                                transition: 'all 0.3s ease',
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
                            Get a Quote →
                        </Link>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

// ─── Main Section ──────────────────────────────────────────────────────────────
const Services = () => {
    const [active, setActive] = useState(null);

    return (
        <>
            <section
                id="services"
                style={{
                    background: 'var(--color-bg-dark)',
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
                                fontSize: '0.7rem', fontWeight: 700,
                                letterSpacing: '0.2em', textTransform: 'uppercase',
                                color: 'var(--color-accent)', marginBottom: '1rem',
                            }}
                        >
                            What We Do
                        </motion.span>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem' }}>
                            <motion.h2
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                style={{
                                    fontFamily: 'var(--font-heading)',
                                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                                    fontWeight: 900, color: '#ffffff',
                                    lineHeight: 1.1, margin: 0,
                                    maxWidth: '520px',
                                }}
                            >
                                From sharpening your brand's<br/>core narrative to delivering it<br/>consistently.
                            </motion.h2>

                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                style={{ maxWidth: '320px' }}
                            >
                                <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, fontSize: '0.95rem', margin: 0 }}>
                                    We ensure your digital product stands out with intention
                                    and scales with clarity.
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Service Rows — Magsmen arrow list style */}
                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                        {services.map((service, i) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.07 }}
                                onClick={() => setActive(service)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    padding: '1.5rem 0',
                                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                                    cursor: 'pointer',
                                    gap: '2rem',
                                    transition: 'all 0.25s ease',
                                }}
                                whileHover={{ paddingLeft: '0.5rem' }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flex: 1 }}>
                                    <span style={{
                                        fontFamily: 'var(--font-heading)',
                                        fontSize: '0.72rem', fontWeight: 700,
                                        color: 'var(--color-accent)', minWidth: '1.5rem',
                                        letterSpacing: '0.05em',
                                    }}>
                                        0{i + 1}
                                    </span>
                                    <h3 style={{
                                        fontFamily: 'var(--font-heading)',
                                        fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                                        fontWeight: 800, color: '#ffffff',
                                        margin: 0, lineHeight: 1.2,
                                    }}>
                                        {service.title}
                                    </h3>
                                </div>

                                <p style={{
                                    color: 'rgba(255,255,255,0.4)',
                                    fontSize: '0.88rem',
                                    max: '320px',
                                    flex: '0 1 280px',
                                    margin: 0,
                                    lineHeight: 1.5,
                                    display: 'none',
                                }}
                                    className="service-tagline"
                                >
                                    {service.tagline}
                                </p>

                                {/* Arrow */}
                                <div style={{
                                    width: 40, height: 40,
                                    border: '1px solid rgba(255,255,255,0.15)',
                                    borderRadius: '50%',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: '#fff', fontSize: '1.1rem',
                                    flexShrink: 0,
                                    transition: 'all 0.25s ease',
                                }}>
                                    ↗
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ marginTop: '3rem' }}
                    >
                        <Link
                            to="/contact"
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                                padding: '0.9rem 2rem', borderRadius: '100px',
                                border: '1px solid rgba(255,255,255,0.2)',
                                color: '#fff', background: 'transparent',
                                fontFamily: 'var(--font-heading)', fontWeight: 700,
                                fontSize: '0.88rem', textDecoration: 'none',
                                transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'var(--color-accent)';
                                e.currentTarget.style.borderColor = 'var(--color-accent)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'transparent';
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                            }}
                        >
                            Get a Free Consultation →
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Modal */}
            {active && (
                <ServiceModal service={active} onClose={() => setActive(null)} />
            )}
        </>
    );
};

export default Services;
