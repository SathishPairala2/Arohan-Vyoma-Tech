import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService = () => {
    return (
        <section className="py-24 relative min-h-screen">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass p-10 rounded-3xl border border-white/10"
                >
                    <h1 className="text-4xl font-bold mb-8">Terms of <span className="glow-text">Service</span></h1>
                    <div className="space-y-6 text-white/70 leading-relaxed">
                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
                            <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">2. Use License</h2>
                            <p>Permission is granted to temporarily download one copy of the materials (information or software) on Arohan Vyoma Tech's website for personal, non-commercial transitory viewing only.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">3. Disclaimer</h2>
                            <p>The materials on Arohan Vyoma Tech's website are provided on an 'as is' basis. Arohan Vyoma Tech makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">4. Limitations</h2>
                            <p>In no event shall Arohan Vyoma Tech or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Arohan Vyoma Tech's website.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">5. Governing Law</h2>
                            <p>These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TermsOfService;
