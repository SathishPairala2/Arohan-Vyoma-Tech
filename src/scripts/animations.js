/**
 * TECHMAWA - Animations
 * GSAP ScrollTrigger animations
 */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
    console.log('Initializing animations...');

    // Clear existing triggers to prevent duplicates on HMR
    ScrollTrigger.getAll().forEach(t => t.kill());

    // Fade in sections on scroll
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
        gsap.from(section, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: section,
                start: 'top 85%',
                once: true // Only animate once
            }
        });
    });

    // Service cards stagger animation
    const serviceCards = document.querySelectorAll('.service-card');
    const servicesGrid = document.querySelector('.services-grid');
    if (serviceCards.length > 0 && servicesGrid) {
        gsap.from(serviceCards, {
            opacity: 0,
            y: 40,
            stagger: 0.1,
            duration: 0.6,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: servicesGrid,
                start: 'top 80%',
                once: true
            }
        });
    }

    // Portfolio cards animation
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    const portfolioGrid = document.querySelector('.portfolio-grid');
    if (portfolioCards.length > 0 && portfolioGrid) {
        gsap.from(portfolioCards, {
            opacity: 0,
            y: 40,
            scale: 0.95,
            stagger: 0.1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
                trigger: portfolioGrid,
                start: 'top 80%',
                once: true
            }
        });
    }

    // Process steps animation
    const processSteps = document.querySelectorAll('.process-step');
    const processTimeline = document.querySelector('.process-timeline');
    if (processSteps.length > 0 && processTimeline) {
        gsap.from(processSteps, {
            opacity: 0,
            x: -30,
            stagger: 0.15,
            duration: 0.8,
            scrollTrigger: {
                trigger: processTimeline,
                start: 'top 80%',
                once: true
            }
        });
    }

    // Refresh ScrollTrigger after a short delay to ensure correct heights
    setTimeout(() => {
        ScrollTrigger.refresh();
        console.log('ScrollTrigger refreshed');
    }, 500);
}
