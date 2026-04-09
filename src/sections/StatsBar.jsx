import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
    { value: 6,  suffix: '+',  label: 'Projects Delivered' },
    { value: 6,  suffix: '+',  label: 'Happy Clients' },
    { value: 2,   suffix: '+',  label: 'Years Experience' },
    { value: 100, suffix: '%',  label: 'Client Satisfaction' },
];

const AnimatedCounter = ({ value, suffix, duration = 2 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-60px' });

    useEffect(() => {
        if (!isInView) return;
        let start = 0;
        const end = value;
        const totalMs = duration * 1000;
        const stepTime = Math.max(totalMs / end, 16);
        const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= end) clearInterval(timer);
        }, stepTime);
        return () => clearInterval(timer);
    }, [isInView, value, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
};

const StatsBar = () => (
    <section
        style={{
            background: '#ffffff',
            padding: '5rem 0',
            borderTop: '1px solid rgba(0,0,0,0.06)',
            borderBottom: '1px solid rgba(0,0,0,0.06)',
        }}
    >
        <div className="container">
            <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--color-text-muted-dark)',
                    textAlign: 'center',
                    marginBottom: '3rem',
                }}
            >
                Trusted by Industry Leaders — Results that speak for themselves
            </motion.p>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '0',
                }}
            >
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.55 }}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            padding: '1.5rem 2rem',
                            borderLeft: i > 0 ? '1px solid rgba(0,0,0,0.08)' : 'none',
                        }}
                    >
                        <p
                            style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: 'clamp(2.8rem, 5vw, 4rem)',
                                fontWeight: 900,
                                color: 'var(--color-accent)',
                                lineHeight: 1,
                                marginBottom: '0.5rem',
                            }}
                        >
                            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                        </p>
                        <p
                            style={{
                                fontFamily: 'var(--font-body)',
                                fontSize: '0.82rem',
                                fontWeight: 500,
                                color: 'var(--color-text-muted-dark)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.12em',
                                margin: 0,
                            }}
                        >
                            {stat.label}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* Responsive */}
        <style>{`
            @media (max-width: 768px) {
                .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
            }
        `}</style>
    </section>
);

export default StatsBar;
