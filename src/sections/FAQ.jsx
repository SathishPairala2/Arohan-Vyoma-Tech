import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';

const faqs = [
    {
        question: "What is ArohanVyomaTech?",
        answer: "ArohanVyomaTech is a leading digital agency dedicated to transforming businesses through innovative web, mobile, and custom software solutions. We specialize in creating high-performance digital products that drive growth and enhance user experience."
    },
    {
        question: "What services do you provide?",
        answer: "We offer a comprehensive suite of services including Web Development (React, Next.js), Mobile App Development (iOS, Android, React Native), UI/UX Design, Cloud & DevOps, Digital Marketing, and Bespoke Enterprise Software."
    },
    {
        question: "How long does a typical project take?",
        answer: "Timelines vary based on project complexity. A standard web application usually takes 4-8 weeks, while larger enterprise systems may take 3-6 months. we provide a detailed roadmap during our discovery phase."
    },
    {
        question: "Do you offer post-launch support?",
        answer: "Yes, we provide ongoing maintenance and support packages to ensure your digital products remain secure, updated, and performant. Our team is available for bug fixes, updates, and feature enhancements."
    },
    {
        question: "How do I get started with a project?",
        answer: "Simply reach out to us via our contact form or the 'Get a Free Quote' button. We'll schedule a discovery call to understand your needs, goals, and provide a tailored proposal for your project."
    },
    {
        question: "Can you help with existing projects?",
        answer: "Absolutely. We often work with clients to modernize legacy systems, add new features to existing apps, or provide technical audits and performance optimization for current platforms."
    }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-white/10 last:border-0 py-2">
            <button
                onClick={onClick}
                className="w-full py-6 flex items-center justify-between text-left group transition-all"
            >
                <span className={`text-lg md:text-xl font-medium transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-white group-hover:text-white/80'}`}>
                    {question}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`${isOpen ? 'text-primary' : 'text-white/40'}`}
                >
                    <ChevronDown size={24} />
                </motion.div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <div className="pb-8 text-white/60 leading-relaxed text-lg max-w-2xl">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(faqs.length - 1); // Set last item open by default like unjob.ai

    return (
        <section id="faq" className="section bg-black py-24 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                    {/* Left Column: Heading & Support */}
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                                Frequently Asked <br />
                                <span className="glow-text">Questions</span>
                            </h2>
                            <p className="text-white/40 text-xl mb-12">
                                Can't find the answer here?
                            </p>
                            <a
                                href="/contact"
                                className="inline-flex items-center gap-2 text-primary font-semibold text-lg hover:gap-3 transition-all duration-300 group"
                            >
                                <MessageCircle size={22} className="group-hover:scale-110 transition-transform" />
                                <span>Contact Support</span>
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Column: Accordion */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 backdrop-blur-sm rounded-3xl p-2 md:p-8 border border-white/10"
                        >
                            <div className="divide-y divide-white/10">
                                {faqs.map((faq, index) => (
                                    <FAQItem
                                        key={index}
                                        {...faq}
                                        isOpen={openIndex === index}
                                        onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
