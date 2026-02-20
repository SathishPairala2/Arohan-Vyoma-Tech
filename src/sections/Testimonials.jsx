import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        text: "Arohan Vyoma Tech delivered our hotel booking website ahead of schedule. The design is stunning, performance is excellent, and the admin panel is incredibly easy to use. Highly recommended!",
        author: "PONNAM GANESH",
        role: "Owner, Ganesh Rest House",
    },
    {
        text: "They built a complete travel booking platform with payment integration and an admin panel. The team was professional, responsive, and delivered top-notch quality. Will work with them again!",
        author: "CHENNAKESAVA NAIDU",
        role: "CEO, ACT Travel Company",
    },
    {
        text: "Our dairy delivery portal was built perfectly — intuitive user interface, reliable order tracking, and an admin dashboard that makes managing everything a breeze. Exceptional work!",
        author: "Eshwar Reddy",
        role: "Founder, Eshwar's Dairy",
    },
];

const Testimonials = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="section py-24 bg-dark-surface relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        What Our <span className="glow-text">Clients Say</span>
                    </motion.h2>
                </div>

                <div className="max-w-4xl mx-auto relative h-[300px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9, x: 100 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            exit={{ opacity: 0, scale: 0.9, x: -100 }}
                            transition={{ duration: 0.6, ease: "anticipate" }}
                            className="glass p-12 rounded-3xl border border-white/10 relative text-center"
                        >
                            <Quote className="absolute -top-6 left-12 text-primary opacity-20" size={80} />
                            <p className="text-xl md:text-2xl text-white/80 italic mb-8 leading-relaxed">
                                "{testimonials[index].text}"
                            </p>
                            <h4 className="text-xl font-bold text-primary">{testimonials[index].author}</h4>
                            <p className="text-white/40 uppercase tracking-widest text-xs mt-1">{testimonials[index].role}</p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex justify-center mt-12 gap-3">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${i === index ? 'bg-primary w-8 shadow-[0_0_10px_rgba(168,85,247,0.5)]' : 'bg-white/20'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
