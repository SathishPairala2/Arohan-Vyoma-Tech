import React from 'react';
import { motion } from 'framer-motion';
import { Search, Zap, Code2, Rocket } from 'lucide-react';

const steps = [
    {
        title: 'Discovery & Planning',
        description: 'We understand your requirements, goals, and target audience to create a comprehensive project roadmap.',
        icon: <Search size={28} />,
    },
    {
        title: 'Design & Prototyping',
        description: 'Creating wireframes and interactive prototypes to visualize the final product before development begins.',
        icon: <Zap size={28} />,
    },
    {
        title: 'Development',
        description: 'Building your solution with clean, scalable code using the latest technologies and best practices.',
        icon: <Code2 size={28} />,
    },
    {
        title: 'Testing & QA',
        description: 'Rigorous testing to ensure quality, performance, and security across all devices and platforms.',
        icon: <Search size={28} />,
    },
    {
        title: 'Deployment',
        description: 'Launching your application with proper setup, configuration, and optimization for production.',
        icon: <Rocket size={28} />,
    },
    {
        title: 'Support & Maintenance',
        description: 'Ongoing support, updates, and improvements to keep your application running at peak performance.',
        icon: <Zap size={28} />,
    },
];

const Process = () => {
    return (
        <section id="process" className="section py-24 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Our <span className="glow-text">Process</span>
                    </motion.h2>
                    <p className="text-white/60">How we turn your vision into a successful reality.</p>
                </div>

                <div className="relative">
                    {/* Timeline centered line - desktop only */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary via-secondary to-transparent hidden lg:block"></div>

                    <div className="space-y-12 lg:space-y-0">
                        {steps.map((step, index) => (
                            <div key={step.title} className={`flex flex-col lg:flex-row items-center justify-between lg:h-80 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                                {/* Content Side */}
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className="lg:w-[45%] glass-card text-center lg:text-left p-10"
                                >
                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${index % 2 === 0 ? 'from-primary to-secondary' : 'from-secondary to-accent'} flex items-center justify-center mb-6 mx-auto lg:mx-0 shadow-lg`}>
                                        {step.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                                    <p className="text-white/60 leading-relaxed">
                                        {step.description}
                                    </p>
                                </motion.div>

                                {/* Center Circle - desktop only */}
                                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-dark border-4 border-primary z-10 items-center justify-center">
                                    <span className="text-xs font-bold">{index + 1}</span>
                                </div>

                                {/* Empty Side for layout - desktop only */}
                                <div className="hidden lg:block lg:w-[45%]"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
