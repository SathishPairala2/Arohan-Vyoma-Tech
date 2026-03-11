import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, Star, Building2 } from 'lucide-react';

const plans = [
    {
        name: 'Starter',
        icon: <Zap size={24} />,
        price: '₹15,000',
        period: 'project',
        tagline: 'Perfect for small businesses & landing pages',
        color: 'from-cyan-500 to-blue-500',
        borderColor: 'border-cyan-500/20',
        glowColor: 'rgba(6,182,212,0.2)',
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
        icon: <Star size={24} />,
        price: '₹45,000',
        period: 'project',
        tagline: 'For growing businesses & full-stack apps',
        color: 'from-primary to-secondary',
        borderColor: 'border-primary/40',
        glowColor: 'rgba(168,85,247,0.3)',
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
        icon: <Building2 size={24} />,
        price: 'Custom',
        period: 'quote',
        tagline: 'Tailored solutions for complex needs',
        color: 'from-orange-500 to-red-500',
        borderColor: 'border-orange-500/20',
        glowColor: 'rgba(249,115,22,0.2)',
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
        <section id="pricing" className="section py-24 bg-dark-surface relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold tracking-widest uppercase text-sm mb-4 inline-block"
                    >
                        Transparent Pricing
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Choose Your <span className="glow-text">Plan</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/50 max-w-xl mx-auto text-lg"
                    >
                        No hidden fees. No surprises. Just quality work that delivers results.
                    </motion.p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="relative"
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                                    <span className="px-5 py-1.5 rounded-full text-xs font-bold text-white"
                                        style={{ background: 'linear-gradient(135deg, #a855f7, #3b82f6)' }}>
                                        ⚡ Most Popular
                                    </span>
                                </div>
                            )}

                            <div
                                className={`h-full flex flex-col rounded-3xl border ${plan.borderColor} bg-white/3 backdrop-blur-sm p-8 transition-all duration-300 hover:-translate-y-2`}
                                style={{
                                    background: plan.popular
                                        ? 'linear-gradient(145deg, rgba(168,85,247,0.08), rgba(59,130,246,0.08))'
                                        : 'rgba(255,255,255,0.03)',
                                    boxShadow: plan.popular
                                        ? `0 0 60px ${plan.glowColor}, inset 0 0 40px rgba(168,85,247,0.03)`
                                        : `0 0 40px ${plan.glowColor}`,
                                }}
                            >
                                {/* Icon + Name */}
                                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center text-white mb-6 shadow-lg`}>
                                    {plan.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                                <p className="text-white/40 text-sm mb-6">{plan.tagline}</p>

                                {/* Price */}
                                <div className="mb-8 pb-8 border-b border-white/10">
                                    <span className="text-5xl font-extrabold">{plan.price}</span>
                                    {plan.price !== 'Custom' && (
                                        <span className="text-white/40 text-sm ml-2">/ {plan.period}</span>
                                    )}
                                </div>

                                {/* Features */}
                                <ul className="space-y-3 flex-1 mb-10">
                                    {plan.features.map((feat) => (
                                        <li key={feat} className="flex items-start gap-3 text-white/70 text-sm">
                                            <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-primary" />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <Link
                                    to="/contact"
                                    className={`block text-center py-3.5 px-6 rounded-full font-bold text-sm transition-all duration-300 ${plan.popular
                                            ? 'text-white hover:opacity-90 hover:scale-105 active:scale-95'
                                            : 'border border-white/20 text-white hover:border-white/50 hover:bg-white/5'
                                        }`}
                                    style={plan.popular ? {
                                        background: 'linear-gradient(135deg, #a855f7, #3b82f6)',
                                        boxShadow: '0 0 30px rgba(168,85,247,0.4)',
                                    } : {}}
                                >
                                    {plan.cta}
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
                    className="text-center text-white/30 text-sm mt-12"
                >
                    All prices are starting estimates. Final quote based on project scope. {' '}
                    <Link to="/contact" className="text-primary hover:underline">Contact us</Link> for a custom proposal.
                </motion.p>
            </div>
        </section>
    );
};

export default Pricing;
