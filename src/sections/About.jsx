import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const Counter = ({ value, duration = 2 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = parseInt(value);
            if (start === end) return;

            let totalMiliseconds = duration * 1000;
            let incrementTime = (totalMiliseconds / end);

            let timer = setInterval(() => {
                start += 1;
                setCount(start);
                if (start === end) clearInterval(timer);
            }, incrementTime);

            return () => clearInterval(timer);
        }
    }, [isInView, value, duration]);

    return <span ref={ref}>{count}</span>;
};

const About = () => {
    const stats = [
        { label: 'Successful Projects', value: '50', suffix: '+' },
        { label: 'Happy Clients', value: '30', suffix: '+' },
        { label: 'Years Experience', value: '5', suffix: '+' },
        { label: 'Team Members', value: '10', suffix: '+' },
    ];

    return (
        <section id="about" className="section py-24 relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 group"
                    >
                        <div className="relative h-[500px] w-full">
                            <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                            <div className="relative h-full w-full bg-dark rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000"
                                    alt="Team Collaboration"
                                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition duration-1000 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100"
                                />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-60"></div>

                                {/* Floating Experience Card */}
                                <div className="absolute bottom-10 left-10 glass p-6 rounded-2xl border border-white/20 backdrop-blur-xl group-hover:scale-110 transition-transform duration-500">
                                    <p className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">5+</p>
                                    <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/60 mt-1">Years of Growth</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 inline-block">
                            About Arohan Vyoma Tech
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                            Transforming Ideas into <br />
                            <span className="glow-text">Powerful Digital Reality</span>
                        </h2>
                        <div className="space-y-6 text-white/60 text-lg mb-10 leading-relaxed">
                            <p>
                                We are a team of passionate developers and designers dedicated to crafting
                                exceptional digital solutions. With a focus on innovation, reliability, and
                                scalability, we transform ideas into powerful applications that drive business growth.
                            </p>
                            <p>
                                Our commitment to clean code, modern technologies, and client satisfaction
                                sets us apart in the competitive tech landscape.
                            </p>
                        </div>

                        {/* Why Choose Us */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 border-t border-white/5 pt-10">
                            {[
                                { title: 'Fast Delivery', desc: 'Quick turnaround without compromising quality', icon: '⚡' },
                                { title: 'Client-Focused', desc: 'Your vision and goals drive our development', icon: '🎯' },
                                { title: 'Innovative Solutions', desc: 'Cutting-edge technology and creative approaches', icon: '💡' },
                                { title: 'Long-Term Support', desc: 'Dedicated support even after project completion', icon: '✓' },
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * idx }}
                                    className="flex gap-4"
                                >
                                    <div className="text-2xl">{item.icon}</div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1">{item.title}</h4>
                                        <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
                            {stats.map((stat) => (
                                <div key={stat.label}>
                                    <p className="text-3xl font-bold mb-1">
                                        <Counter value={stat.value} />{stat.suffix}
                                    </p>
                                    <p className="text-sm text-white/40 uppercase tracking-widest">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
