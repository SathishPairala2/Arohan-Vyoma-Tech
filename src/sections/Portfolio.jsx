import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import TiltCard from '../components/TiltCard';

const projects = [
    {
        id: 1,
        title: 'Ganesh Rest House',
        category: 'Web Development',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000',
        description: 'Modern hospitality booking website with a seamless reservation system.',
        link: 'https://ganeshresthouse.online/'
    },
    {
        id: 2,
        title: 'ACT Travel Company',
        category: 'Web Development',
        image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=1000',
        description: 'Comprehensive travel booking and management platform with payment integration.',
        link: 'https://acttravelcompany.online/'
    },
    {
        id: 3,
        title: "Eshwar's Dairy Portal",
        category: 'E-commerce',
        image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=1000',
        description: 'Fresh milk & groceries delivery platform with order tracking.',
        link: 'http://13.48.147.8/user/'
    },
    {
        id: 4,
        title: 'AVT Dashboard',
        category: 'SaaS',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
        description: 'Enterprise analytics and management solution for streamlined operations.',
        link: '#'
    },
    {
        id: 5,
        title: 'Dairy Admin Panel',
        category: 'Admin Panel',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
        description: 'Dairy booking management system with CRM and inventory tools.',
        link: 'http://13.48.147.8/admin/'
    },
    {
        id: 6,
        title: 'AI Exam Portal',
        category: 'Web Development',
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1000',
        description: 'Online examination and assessment platform with result analytics.',
        link: 'https://wzgaiexam.online/'
    },
];

const categories = ['All', 'Web Development', 'E-commerce', 'SaaS', 'Admin Panel'];

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = projects.filter(project =>
        activeCategory === 'All' || project.category === activeCategory
    );

    return (
        <section id="portfolio" className="section py-24 bg-dark-surface relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold mb-4"
                        >
                            Featured <span className="glow-text">Projects</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-white/60"
                        >
                            Excellence in every pixel, power in every line of code.
                        </motion.p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 border ${activeCategory === cat
                                    ? 'bg-primary border-primary text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                                    : 'bg-white/5 border-white/10 text-white/60 hover:border-white/30'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                            >
                                <TiltCard>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative rounded-2xl overflow-hidden glass border border-white/10 aspect-[4/3] h-full block"
                                    >
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                        />

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                            <div className="translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                                                <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2 block">
                                                    {project.category}
                                                </span>
                                                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                                <p className="text-white/70 text-sm mb-6 line-clamp-2">
                                                    {project.description}
                                                </p>
                                                <div className="flex gap-4">
                                                    <div className="p-2 rounded-full bg-white/10 group-hover:bg-primary/20 transition-colors border border-white/10">
                                                        <ExternalLink size={20} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </TiltCard>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Portfolio;
