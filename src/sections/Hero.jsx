import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const yContent = useTransform(scrollYProgress, [0, 1], [0, 100]);

    return (
        <section ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background elements with Zoom effect */}
            <motion.div
                style={{ scale, opacity }}
                className="absolute inset-0 z-0"
            >
                {/* Video Background with dynamic fallback */}
                <div className="absolute inset-0 z-0 bg-black">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-black to-secondary/5"></div>
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-40 grayscale brightness-75 contrast-125"
                    >
                        <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-lines-and-dots-in-blue-23267-large.mp4" type="video/mp4" />
                    </video>
                    {/* Dark gradient overlay for readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
                </div>

                <div className="absolute top-1/4 -left-1/4 w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-1/4 -right-1/4 w-[50%] h-[50%] bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>

                {/* Animated grid lines pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle, #ffffff11 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                </div>
            </motion.div>

            <motion.div
                style={{ y: yContent, opacity }}
                className="container mx-auto px-6 relative z-10 text-center"
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest uppercase mb-6 inline-block backdrop-blur-sm">
                        Future-Ready Technology Solutions
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 mt-4">
                        Transforming Ideas into <br />
                        <span className="glow-text tracking-tight italic">Digital Reality</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/70 mb-10 leading-relaxed">
                        We build scalable, modern, and intelligent digital solutions for forward-thinking businesses.
                        From conceptualization to deployment, we are your engineering partners.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                to="/contact"
                                className="btn-primary group flex items-center space-x-2 px-10 py-4 shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                            >
                                <span className="text-lg font-bold uppercase tracking-wider">Get Started</span>
                                <ArrowRight size={22} className="transition-transform group-hover:translate-x-1" />
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>

        </section>
    );
};

export default Hero;
