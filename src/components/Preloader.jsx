import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => setLoading(false), 500);
                    return 100;
                }
                return prev + 1;
            });
        }, 20);
        return () => clearInterval(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative mb-8"
                    >
                        <div className="w-24 h-24 border-4 border-white/5 rounded-2xl flex items-center justify-center font-bold text-3xl overflow-hidden">
                            <motion.div
                                initial={{ y: 100 }}
                                animate={{ y: 0 }}
                                className="bg-gradient-to-br from-primary to-secondary absolute inset-0 flex items-center justify-center"
                            >
                                AVT
                            </motion.div>
                        </div>
                        {/* Pulsing effect */}
                        <div className="absolute inset-0 border-4 border-primary rounded-2xl animate-ping opacity-20"></div>
                    </motion.div>

                    <div className="w-64 h-1 bg-white/5 rounded-full overflow-hidden relative">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-secondary"
                        />
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-4 text-xs tracking-[0.5em] uppercase text-white/40 font-semibold"
                    >
                        Initializing Reality... {progress}%
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
