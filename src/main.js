/**
 * TECHMAWA - Main Application
 * Initializes all modules and interactions
 */

import { Scene3D } from './scripts/3d-scene.js';
import { initAnimations } from './scripts/animations.js';
import { initForm } from './scripts/form.js';
import './styles/main.css';
import './styles/hero.css';
import './styles/sections.css';
import './styles/services.css';
import './styles/portfolio.css';
import './styles/responsive.css';

class App {
  constructor() {
    this.init();
  }

  init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setup());
    } else {
      this.setup();
    }
    console.log('App initialized on page:', window.location.pathname);
  }

  setup() {
    try {
      console.log('Setting up app components...');

      // Initialize 3D scene
      this.scene3D = new Scene3D('hero-canvas');

      // Initialize scroll animations
      initAnimations();

      // Initialize form
      initForm();

      // Initialize navigation
      this.initNavigation();

      // Initialize testimonials slider
      this.initTestimonials();

      // Initialize smooth scroll
      this.initSmoothScroll();

      console.log('App setup complete');
    } catch (error) {
      console.error('App initialization failed:', error);
      // Fallback: Ensure everything is visible
      document.body.classList.add('js-ready');
    }
  }

  initNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  initTestimonials() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');

    if (testimonialCards.length === 0) return;

    let currentIndex = 0;

    const showTestimonial = (index) => {
      testimonialCards.forEach(card => card.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));

      if (testimonialCards[index]) {
        testimonialCards[index].classList.add('active');
      }
      if (dots[index]) {
        dots[index].classList.add('active');
      }
      currentIndex = index;
    };

    // Dot click handlers
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => showTestimonial(index));
    });

    // Auto-rotate testimonials
    setInterval(() => {
      if (testimonialCards.length > 0) {
        const nextIndex = (currentIndex + 1) % testimonialCards.length;
        showTestimonial(nextIndex);
      }
    }, 5000);
  }

  initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
          const offsetTop = target.offsetTop - 80; // Account for fixed navbar
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }
}

// Initialize app
new App();
