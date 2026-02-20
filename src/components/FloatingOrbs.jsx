import React from 'react';
import { motion } from 'framer-motion';

const FloatingOrbs = () => {
    const orbs = [
        { size: 'w-64 h-64', color: 'bg-primary/20', top: '10%', left: '10%', duration: 20 },
        { size: 'w-96 h-96', color: 'bg-secondary/20', top: '60%', left: '70%', duration: 25 },
        { size: 'w-48 h-48', color: 'bg-accent/20', top: '40%', left: '30%', duration: 18 },
    ];

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {orbs.map((orb, i) => (
                <motion.div
                    key={i}
                    className={`absolute rounded-full blur-[100px] ${orb.size} ${orb.color}`}
                    initial={{ x: 0, y: 0 }}
                    animate={{
                        x: [0, 100, -50, 0],
                        y: [0, -80, 120, 0],
                    }}
                    transition={{
                        duration: orb.duration,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{
                        top: orb.top,
                        left: orb.left,
                    }}
                />
            ))}
        </div>
    );
};

export default FloatingOrbs;
