import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'Ganesh Rest House',
        category: 'Web Development',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
        description: 'Modern hospitality booking website with a seamless reservation system and real-time availability.',
        link: 'https://ganeshresthouse.online/',
    },
    {
        id: 2,
        title: 'ACT Travel Company',
        category: 'Web Development',
        image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=800',
        description: 'Comprehensive travel booking and management platform with full payment integration.',
        link: 'https://acttravelcompany.online/',
    },
    {
        id: 3,
        title: "Eshwar's Dairy Portal",
        category: 'E-commerce',
        image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=800',
        description: 'Fresh milk & groceries delivery platform with order tracking and subscription management.',
        link: 'http://13.48.147.8/user/',
    },
    {
        id: 4,
        title: 'AVT Dashboard',
        category: 'SaaS',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
        description: 'Enterprise analytics and management solution for streamlined business operations.',
        link: '#',
    },
    {
        id: 5,
        title: 'AI Exam Portal',
        category: 'Web Development',
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800',
        description: 'Online examination and assessment platform with AI-powered result analytics.',
        link: 'https://wzgaiexam.online/',
    },
    {
        id: 6,
        title: 'Dairy Admin Panel',
        category: 'Admin Panel',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        description: 'Dairy booking management system with CRM, inventory tools, and reporting dashboards.',
        link: 'http://13.48.147.8/admin/',
    },
];

const categories = ['All', 'Web Development', 'E-commerce', 'SaaS', 'Admin Panel'];

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filtered = projects.filter(p =>
        activeCategory === 'All' || p.category === activeCategory
    );

    return (
        <section
            id="portfolio"
            style={{
                background: 'var(--color-bg-light)',
                padding: 'var(--spacing-xl) 0',
            }}
        >
            <div className="container">
                {/* Header */}
                <div style={{ marginBottom: '3.5rem' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                            fontWeight: 900,
                            color: 'var(--color-text-dark)',
                            lineHeight: 1.05,
                            marginBottom: '0.5rem',
                        }}
                    >
                        Success
                        <br />
                        Stories
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        style={{
                            color: 'var(--color-text-muted-dark)',
                            fontSize: '1rem',
                            maxWidth: '480px',
                            marginTop: '1rem',
                        }}
                    >
                        Real digital products we've built that drive real results.
                    </motion.p>
                </div>

                {/* Category Filters */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem' }}>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            style={{
                                padding: '0.45rem 1.1rem',
                                borderRadius: '100px',
                                border: `1px solid ${activeCategory === cat ? 'var(--color-text-dark)' : 'rgba(0,0,0,0.15)'}`,
                                background: activeCategory === cat ? 'var(--color-text-dark)' : 'transparent',
                                color: activeCategory === cat ? '#fff' : 'var(--color-text-muted-dark)',
                                fontFamily: 'var(--font-heading)',
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                letterSpacing: '0.05em',
                                cursor: 'pointer',
                                transition: 'all 0.25s ease',
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Project Grid */}
                <motion.div
                    layout
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '1.5rem',
                    }}
                >
                    <AnimatePresence mode="popLayout">
                        {filtered.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.35 }}
                                style={{
                                    background: '#ffffff',
                                    borderRadius: '20px',
                                    border: '1px solid rgba(0,0,0,0.07)',
                                    overflow: 'hidden',
                                    boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                                    transition: 'box-shadow 0.3s ease',
                                }}
                                whileHover={{ boxShadow: '0 8px 40px rgba(0,0,0,0.12)' }}
                            >
                                {/* Image */}
                                <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '14px', margin: '1rem 1rem 0' }}>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        style={{
                                            width: '100%',
                                            height: '220px',
                                            objectFit: 'cover',
                                            borderRadius: '14px',
                                            display: 'block',
                                            transition: 'transform 0.5s ease',
                                        }}
                                        onMouseEnter={(e) => e.target.style.transform = 'scale(1.04)'}
                                        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                    />
                                    {/* Category badge */}
                                    <span style={{
                                        position: 'absolute', top: '0.75rem', left: '0.75rem',
                                        background: 'rgba(255,255,255,0.9)',
                                        backdropFilter: 'blur(6px)',
                                        padding: '0.3rem 0.75rem',
                                        borderRadius: '100px',
                                        fontFamily: 'var(--font-heading)',
                                        fontSize: '0.68rem',
                                        fontWeight: 700,
                                        color: 'var(--color-text-dark)',
                                        letterSpacing: '0.06em',
                                    }}>
                                        {project.category}
                                    </span>
                                </div>

                                {/* Content */}
                                <div style={{ padding: '1.25rem 1.25rem 1.5rem' }}>
                                    <p style={{
                                        color: 'var(--color-text-mid)',
                                        fontSize: '0.88rem',
                                        lineHeight: 1.65,
                                        marginBottom: '1.25rem',
                                    }}>
                                        {project.description}
                                    </p>

                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <strong style={{
                                            fontFamily: 'var(--font-heading)',
                                            fontSize: '1rem',
                                            fontWeight: 800,
                                            color: 'var(--color-text-dark)',
                                        }}>
                                            {project.title}
                                        </strong>

                                        {project.link !== '#' && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                                                    padding: '0.6rem 1.4rem',
                                                    borderRadius: '100px',
                                                    background: 'var(--color-text-dark)',
                                                    color: '#fff',
                                                    fontFamily: 'var(--font-heading)',
                                                    fontSize: '0.8rem', fontWeight: 700,
                                                    textDecoration: 'none',
                                                    transition: 'all 0.25s ease',
                                                    flexShrink: 0,
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
                                                Visit
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Responsive */}
            <style>{`
                @media (max-width: 640px) {
                    #portfolio .container > div:last-child {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Portfolio;
