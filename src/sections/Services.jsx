import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Smartphone, Layout, Cloud, Bot, Cpu, Target, X, CheckCircle } from 'lucide-react';
import TiltCard from '../components/TiltCard';

const services = [
    {
        title: 'Web Development',
        description: 'Scalable full-stack applications & modern landing pages.',
        icon: <Code size={24} />,
        color: 'from-blue-500 to-cyan-500',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
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
        title: 'Mobile Apps',
        description: 'Native & cross-platform mobile experiences for iOS and Android.',
        icon: <Smartphone size={24} />,
        color: 'from-purple-500 to-pink-500',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800',
        details: {
            overview: 'We build mobile applications that feel native on every platform. Our team delivers smooth user experiences whether you need iOS-only, Android-only, or cross-platform solutions.',
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
        title: 'UI/UX Design',
        description: 'Aesthetics meets functionality. Stunning user-centered interfaces.',
        icon: <Layout size={24} />,
        color: 'from-indigo-500 to-blue-500',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
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
        title: 'Cloud & DevOps',
        description: 'Scalable cloud infrastructure & reliable deployment pipelines.',
        icon: <Cloud size={24} />,
        color: 'from-cyan-500 to-teal-500',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
        details: {
            overview: 'We build resilient cloud infrastructure that scales with your business. Our DevOps practices ensure reliable deployments, minimal downtime, and optimized cloud costs.',
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
        title: 'Maintenance',
        description: '24/7 monitoring, security updates, and performance tuning.',
        icon: <Bot size={24} />,
        color: 'from-orange-500 to-red-500',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800',
        details: {
            overview: 'We keep your applications healthy after launch. Our support plans include proactive monitoring, rapid bug resolution, and continuous improvements.',
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
        title: 'Custom Software',
        description: 'Bespoke enterprise tools crafted for your specific workflows.',
        icon: <Cpu size={24} />,
        color: 'from-green-500 to-emerald-500',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
        details: {
            overview: 'Off-the-shelf software rarely fits perfectly. We build bespoke software solutions designed around your exact workflows, giving your business a competitive edge.',
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
        title: 'Digital Marketing',
        description: 'Data-driven growth strategies and technical SEO optimization.',
        icon: <Target size={24} />,
        color: 'from-red-500 to-orange-500',
        image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800',
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

// ─── Modal Component ─────────────────────────────────────────────────────────
const ServiceModal = ({ service, onClose }) => {
    if (!service) return null;

    return (
        <AnimatePresence>
            {/* Backdrop – inline style guarantees it covers everything including navbar */}
            <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                style={{
                    position: 'fixed',
                    top: 0, left: 0, right: 0, bottom: 0,
                    zIndex: 9999,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '24px',
                    background: 'rgba(0,0,0,0.82)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                }}
            >
                {/* Modal panel */}
                <motion.div
                    key="panel"
                    initial={{ opacity: 0, scale: 0.92, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.92, y: 50 }}
                    transition={{ type: 'spring', stiffness: 280, damping: 26 }}
                    onClick={(e) => e.stopPropagation()}
                    style={{
                        position: 'relative',
                        width: '100%',
                        maxWidth: '680px',
                        maxHeight: '82vh',
                        overflowY: 'auto',
                        borderRadius: '24px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        background: 'linear-gradient(145deg, #13131e, #1a1a2e)',
                        boxShadow: '0 30px 80px rgba(0,0,0,0.6), 0 0 40px rgba(168,85,247,0.15)',
                    }}
                >
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-5 right-5 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    >
                        <X size={20} />
                    </button>

                    {/* Header */}
                    <div className="p-8 pb-4">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} p-3.5 flex items-center justify-center text-white shadow-lg mb-5`}>
                            {service.icon}
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-2">{service.title}</h2>
                        <p className="text-white/60 leading-relaxed">{service.details.overview}</p>
                    </div>

                    {/* Features */}
                    <div className="px-8 py-4">
                        <h3 className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-4">What's Included</h3>
                        <ul className="space-y-3">
                            {service.details.features.map((feat, i) => (
                                <li key={i} className="flex items-start gap-3 text-white/80 text-sm">
                                    <CheckCircle size={17} className="mt-0.5 flex-shrink-0 text-primary" />
                                    {feat}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tech stack */}
                    <div className="px-8 py-6">
                        <h3 className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-4">Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                            {service.details.tech.map((t) => (
                                <span
                                    key={t}
                                    className="px-3 py-1 rounded-full text-xs font-medium border border-white/10 bg-white/5 text-white/70"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="px-8 pb-8">
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white transition-all"
                            style={{
                                background: 'linear-gradient(135deg, #a855f7, #3b82f6)',
                                boxShadow: '0 0 24px rgba(168,85,247,0.4)',
                            }}
                        >
                            Get a Free Quote →
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

// ─── Main Section ─────────────────────────────────────────────────────────────
const Services = () => {
    const [activeService, setActiveService] = useState(null);

    return (
        <>
            <section id="services" className="section bg-dark-surface py-24 relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

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

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                onClick={() => setActiveService(service)}
                                className={`group relative h-72 rounded-3xl overflow-hidden cursor-pointer border border-white/5 shadow-xl ${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
                                    }`}
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0 w-full h-full">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out brightness-75 group-hover:brightness-100"
                                    />
                                </div>

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />

                                {/* Hover Glow Border */}
                                <div className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} style={{ WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', padding: '2px' }} />

                                {/* Content */}
                                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${service.color} p-2 flex items-center justify-center text-white shadow-lg mb-4 opacity-80 group-hover:opacity-100 transition-opacity`}>
                                            {service.icon}
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                                            {service.title}
                                        </h3>
                                        <p className="text-white/60 text-sm line-clamp-2 pr-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                            {service.description}
                                        </p>
                                    </div>

                                    {/* Action Icon */}
                                    <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500 delay-100">
                                        <span className="text-xl font-light leading-none">+</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            {activeService && (
                <ServiceModal
                    service={activeService}
                    onClose={() => setActiveService(null)}
                />
            )}
        </>
    );
};

export default Services;
