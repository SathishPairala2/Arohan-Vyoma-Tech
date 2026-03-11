import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
    { value: 50, suffix: '+', label: 'Projects Delivered' },
    { value: 30, suffix: '+', label: 'Happy Clients' },
    { value: 5, suffix: '+', label: 'Years Experience' },
    { value: 100, suffix: '%', label: 'Client Satisfaction' },
];

const AnimatedCounter = ({ value, suffix, duration = 2 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;
        let start = 0;
        const end = value;
        const totalMs = duration * 1000;
        const stepTime = Math.max(totalMs / end, 20);
        const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= end) clearInterval(timer);
        }, stepTime);
        return () => clearInterval(timer);
    }, [isInView, value, duration]);

    return (
        <span ref={ref}>
            {count}{suffix}
        </span>
    );
};

const StatsBar = () => (
    <section className="relative py-14 overflow-hidden bg-dark-surface border-y border-white/5">
        {/* subtle glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 pointer-events-none" />

        <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-white/10">
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex flex-col items-center text-center px-6 py-4"
                    >
                        <p className="text-5xl md:text-6xl font-extrabold glow-text mb-2 tabular-nums">
                            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                        </p>
                        <p className="text-sm text-white/40 uppercase tracking-widest font-medium">
                            {stat.label}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default StatsBar;
