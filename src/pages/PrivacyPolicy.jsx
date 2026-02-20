import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
    return (
        <section className="py-24 relative min-h-screen">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass p-10 rounded-3xl border border-white/10"
                >
                    <h1 className="text-4xl font-bold mb-8">Privacy <span className="glow-text">Policy</span></h1>
                    <div className="space-y-6 text-white/70 leading-relaxed">
                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">1. Information We Collect</h2>
                            <p>We collect information you provide directly to us, such as when you fill out our contact form, including your name, email address, phone number, and any project details you shared.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">2. How We Use Your Information</h2>
                            <p>We use the information we collect to communicate with you about your projects, provide services, and improve our website and customer experience.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">3. Data Security</h2>
                            <p>We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">4. Cookies</h2>
                            <p>We use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">5. Contact Us</h2>
                            <p>If there are any questions regarding this privacy policy, you may contact us at infoarohanvyomatech@gmail.com</p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;
