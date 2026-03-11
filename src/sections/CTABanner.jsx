import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTABanner = () => (
    <section className="relative py-32 overflow-hidden">
        {/* Large background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-black to-secondary/10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[140px] rounded-full pointer-events-none" />

        {/* Decorative grid */}
        <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
            }}
        />

        <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold mb-8">
                    <Sparkles size={16} />
                    <span>Let's Build Together</span>
                </div>

                <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
                    Ready to Build Something <br />
                    <span className="glow-text">Extraordinary?</span>
                </h2>

                <p className="text-xl text-white/50 max-w-2xl mx-auto mb-14 leading-relaxed">
                    From idea to deployment — we turn your vision into a high-performance
                    digital product. Let's start with a free consultation.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold text-lg text-white transition-all"
                            style={{
                                background: 'linear-gradient(135deg, #a855f7, #3b82f6)',
                                boxShadow: '0 0 40px rgba(168,85,247,0.5)',
                            }}
                        >
                            Get a Free Quote
                            <ArrowRight size={20} />
                        </Link>
                    </motion.div>

                    <Link
                        to="/portfolio"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white/70 hover:text-white border border-white/10 hover:border-white/30 transition-all"
                    >
                        View Our Work
                    </Link>
                </div>
            </motion.div>
        </div>
    </section>
);

export default CTABanner;
