import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Layout, Cloud, Bot, Cpu, Target } from 'lucide-react';
import TiltCard from '../components/TiltCard';

const services = [
    {
        title: 'Web Development',
        description: 'Full-stack web applications using React, Next.js, Node.js, and modern frameworks. We build fast, responsive, and SEO-optimized websites.',
        icon: <Code size={32} />,
        color: 'from-blue-500 to-cyan-500',
    },
    {
        title: 'Mobile App Development',
        description: 'Native iOS and Android apps, plus cross-platform solutions using React Native and Flutter. Intuitive experience with smooth performance.',
        icon: <Smartphone size={32} />,
        color: 'from-purple-500 to-pink-500',
    },
    {
        title: 'UI/UX Design',
        description: 'User-centered design that combines aesthetics with functionality. We create wireframes, prototypes, and high-fidelity designs.',
        icon: <Layout size={32} />,
        color: 'from-indigo-500 to-blue-500',
    },
    {
        title: 'Cloud & DevOps',
        description: 'Deploy and scale on AWS, Google Cloud, or Azure. We handle CI/CD pipelines, containerization with Docker, and Kubernetes.',
        icon: <Cloud size={32} />,
        color: 'from-cyan-500 to-teal-500',
    },
    {
        title: 'Maintenance & Support',
        description: '24/7 monitoring, bug fixes, security updates, and performance optimization to keep your applications running smoothly.',
        icon: <Bot size={32} />,
        color: 'from-orange-500 to-red-500',
    },
    {
        title: 'Custom Software',
        description: 'Tailored enterprise software, booking systems, e-commerce platforms, and business automation tools that streamline operations.',
        icon: <Cpu size={32} />,
        color: 'from-green-500 to-emerald-500',
    },
    {
        title: 'Digital Marketing & SEO',
        description: 'Boost your online presence with data-driven marketing strategies and SEO optimization to reach your target audience.',
        icon: <Target size={32} />,
        color: 'from-red-500 to-orange-500',
    },
];

const Services = () => {
    return (
        <section id="services" className="section bg-dark-surface py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Our <span className="glow-text">Services</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-white/60 max-w-xl mx-auto"
                    >
                        We provide a wide range of technology services to help your business scale
                        and succeed in the digital era.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <TiltCard>
                                <div className="glass-card group h-full">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 mb-6 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-white/60 leading-relaxed">
                                        {service.description}
                                    </p>

                                    <div className="mt-8 flex items-center text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span>Learn more</span>
                                        <span className="ml-2">→</span>
                                    </div>
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
