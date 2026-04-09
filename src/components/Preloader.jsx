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
                    setTimeout(() => setLoading(false), 400);
                    return 100;
                }
                return prev + 2;
            });
        }, 18);
        return () => clearInterval(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 9999,
                        background: '#F5F5F5',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '2rem',
                    }}
                >
                    {/* Logo mark */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '0.75rem',
                        }}
                    >
                        {/* Animated logo box */}
                        <div style={{
                            width: 72,
                            height: 72,
                            borderRadius: '18px',
                            background: 'var(--color-text-dark)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            overflow: 'hidden',
                            position: 'relative',
                        }}>
                            {/* Purple fill rising with progress */}
                            <motion.div
                                initial={{ scaleY: 0 }}
                                animate={{ scaleY: progress / 100 }}
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'var(--color-accent)',
                                    transformOrigin: 'bottom',
                                }}
                            />
                            <span style={{
                                fontFamily: 'var(--font-heading)',
                                fontWeight: 900,
                                fontSize: '1.3rem',
                                color: '#fff',
                                letterSpacing: '-0.02em',
                                position: 'relative',
                                zIndex: 1,
                            }}>
                                AVT
                            </span>
                        </div>

                        {/* Brand name */}
                        <p style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '0.7rem',
                            fontWeight: 700,
                            letterSpacing: '0.25em',
                            textTransform: 'uppercase',
                            color: 'var(--color-text-muted-dark)',
                        }}>
                            Arohan Vyoma Tech
                        </p>
                    </motion.div>

                    {/* Progress bar */}
                    <div style={{
                        width: '200px',
                        height: '2px',
                        background: 'rgba(0,0,0,0.08)',
                        borderRadius: '2px',
                        overflow: 'hidden',
                    }}>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            style={{
                                height: '100%',
                                background: 'var(--color-accent)',
                                borderRadius: '2px',
                            }}
                        />
                    </div>

                    {/* % label */}
                    <p style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: 'var(--color-text-muted-dark)',
                        marginTop: '-1rem',
                    }}>
                        Loading {progress}%
                    </p>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
