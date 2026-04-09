import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
    { label: 'Home',      href: '/' },
    { label: 'Services',  href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'About',     href: '/about' },
    { label: 'Process',   href: '/process' },
    { label: 'FAQ',       href: '/faq' },
    { label: 'Contact',   href: '/contact' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close drawer on route change
    useEffect(() => { setOpen(false); }, [location]);

    // Lock body scroll when drawer is open
    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [open]);

    return (
        <>
            <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
                <div className="nav-container">
                    {/* Logo */}
                    <Link to="/" aria-label="Arohan Vyoma Tech Home">
                        <img
                            src="/images/avt-logo.svg"
                            alt="Arohan Vyoma Tech"
                            className="logo-img"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'block';
                            }}
                        />
                        <span
                            style={{
                                display: 'none',
                                fontFamily: 'var(--font-heading)',
                                fontWeight: 900,
                                fontSize: '1.2rem',
                                color: 'var(--color-text-dark)',
                                letterSpacing: '-0.01em',
                            }}
                        >
                            AROHAN<span style={{ color: 'var(--color-accent)' }}>.</span>
                        </span>
                    </Link>

                    {/* Hamburger */}
                    <button
                        className={`hamburger${open ? ' open' : ''}`}
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle navigation menu"
                        aria-expanded={open}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '6px',
                            padding: '6px',
                            zIndex: 1001,
                        }}
                    >
                        <span
                            style={{
                                display: 'block',
                                width: '26px',
                                height: '2px',
                                background: scrolled || open ? 'var(--color-text-dark)' : 'var(--color-text-dark)',
                                borderRadius: '2px',
                                transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
                                transform: open ? 'translateY(8px) rotate(45deg)' : 'none',
                            }}
                        />
                        <span
                            style={{
                                display: 'block',
                                width: '26px',
                                height: '2px',
                                background: scrolled || open ? 'var(--color-text-dark)' : 'var(--color-text-dark)',
                                borderRadius: '2px',
                                transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
                                opacity: open ? 0 : 1,
                            }}
                        />
                        <span
                            style={{
                                display: 'block',
                                width: '26px',
                                height: '2px',
                                background: scrolled || open ? 'var(--color-text-dark)' : 'var(--color-text-dark)',
                                borderRadius: '2px',
                                transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
                                transform: open ? 'translateY(-8px) rotate(-45deg)' : 'none',
                            }}
                        />
                    </button>
                </div>
            </nav>

            {/* Full-screen Drawer */}
            <div
                style={{
                    position: 'fixed',
                    inset: 0,
                    zIndex: 999,
                    background: 'var(--color-bg-light)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0',
                    transform: open ? 'translateX(0)' : 'translateX(100%)',
                    transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)',
                    pointerEvents: open ? 'all' : 'none',
                }}
                aria-hidden={!open}
            >
                <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
                    {navLinks.map((link, i) => (
                        <Link
                            key={link.href}
                            to={link.href}
                            style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: 'clamp(2rem, 5vw, 3rem)',
                                fontWeight: 900,
                                color: location.pathname === link.href
                                    ? 'var(--color-accent)'
                                    : 'var(--color-text-dark)',
                                textDecoration: 'none',
                                padding: '0.4rem 1rem',
                                display: 'block',
                                transition: 'color 0.2s ease',
                                lineHeight: 1.2,
                                transform: open ? 'translateY(0)' : 'translateY(20px)',
                                opacity: open ? 1 : 0,
                                transitionDelay: open ? `${i * 0.06}s` : '0s',
                                transitionProperty: 'color, transform, opacity',
                                transitionDuration: open ? '0.4s' : '0.2s',
                                transitionTimingFunction: 'cubic-bezier(0.4,0,0.2,1)',
                            }}
                            onMouseEnter={(e) => {
                                if (location.pathname !== link.href)
                                    e.target.style.color = 'var(--color-accent)';
                            }}
                            onMouseLeave={(e) => {
                                if (location.pathname !== link.href)
                                    e.target.style.color = 'var(--color-text-dark)';
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Social & Contact strip */}
                <div style={{
                    position: 'absolute',
                    bottom: '2.5rem',
                    display: 'flex',
                    gap: '2rem',
                    opacity: open ? 1 : 0,
                    transform: open ? 'translateY(0)' : 'translateY(16px)',
                    transition: 'all 0.4s ease 0.3s',
                }}>
                    <a href="mailto:info@arohanvyoma.com"
                       style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--color-text-muted-dark)', letterSpacing: '0.05em' }}>
                        info@arohanvyoma.com
                    </a>
                    <span style={{ color: 'var(--color-text-muted-dark)', opacity: 0.3 }}>|</span>
                    <a href="https://www.instagram.com/arohanvyomatech" target="_blank" rel="noopener noreferrer"
                       style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--color-accent)', letterSpacing: '0.05em' }}>
                        Instagram
                    </a>
                </div>
            </div>
        </>
    );
};

export default Navbar;
