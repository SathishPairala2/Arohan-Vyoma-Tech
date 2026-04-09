import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const year = new Date().getFullYear();

    const links = {
        Services: [
            { label: 'Web Development', href: '/services' },
            { label: 'Mobile Apps',     href: '/services' },
            { label: 'UI/UX Design',    href: '/services' },
            { label: 'Cloud & DevOps',  href: '/services' },
            { label: 'Custom Software', href: '/services' },
        ],
        Company: [
            { label: 'About Us',   href: '/about' },
            { label: 'Portfolio',  href: '/portfolio' },
            { label: 'Our Process',href: '/process' },
            { label: 'FAQ',        href: '/faq' },
        ],
        Legal: [
            { label: 'Privacy Policy',   href: '/privacy-policy' },
            { label: 'Terms of Service', href: '/terms-of-service' },
            { label: 'Contact Us',       href: '/contact' },
        ],
    };

    const social = [
        {
            label: 'Instagram',
            href: 'https://www.instagram.com/arohanvyomatech?igsh=bm15OTRoZHZydzli',
            icon: '📷',
        },
        {
            label: 'LinkedIn',
            href: '#',
            icon: 'in',
        },
        {
            label: 'WhatsApp',
            href: 'https://wa.me/917330763818',
            icon: '✉',
        },
    ];

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    {/* Brand Column */}
                    <div className="footer-section footer-brand">
                        <img
                            src="/images/avt-logo.svg"
                            alt="Arohan Vyoma Tech"
                            className="footer-logo-img"
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
                                fontSize: '1.25rem',
                                color: '#fff',
                                letterSpacing: '-0.01em',
                            }}
                        >
                            AROHAN<span style={{ color: 'var(--color-accent)' }}>.</span>
                        </span>

                        <p>
                            A passionate team of developers and designers dedicated to crafting
                            exceptional digital solutions in Hyderabad. We transform ideas into
                            powerful applications.
                        </p>

                        <div className="social-links" style={{ marginTop: '1.25rem' }}>
                            {social.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={s.label}
                                    title={s.label}
                                    style={{ fontSize: '0.85rem', fontWeight: 700, fontFamily: 'var(--font-heading)' }}
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services Links */}
                    <div className="footer-section footer-links">
                        <h4>Services</h4>
                        <ul>
                            {links.Services.map((l) => (
                                <li key={l.label}>
                                    <Link to={l.href}>{l.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div className="footer-section footer-links">
                        <h4>Company</h4>
                        <ul>
                            {links.Company.map((l) => (
                                <li key={l.label}>
                                    <Link to={l.href}>{l.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact / Legal */}
                    <div className="footer-section footer-links">
                        <h4>Contact</h4>
                        <ul>
                            <li>
                                <a href="mailto:info@arohanvyoma.com">
                                    infoarohanvyomatech@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+917330763818">
                                    +91 63039 74785
                                </a>
                            </li>
                            <li style={{ marginTop: '0.5rem' }}>
                                <a
                                    href="https://maps.google.com/?q=Hyderabad"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Hyderabad, Telangana
                                </a>
                            </li>
                        </ul>

                        <h4 style={{ marginTop: '1.5rem' }}>Legal</h4>
                        <ul>
                            {links.Legal.map((l) => (
                                <li key={l.label}>
                                    <Link to={l.href}>{l.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="footer-bottom">
                    <p>
                        © {year} Arohan Vyoma Tech. All rights reserved.
                    </p>
                    <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.78rem' }}>
                        Crafted with ❤️ in Hyderabad, India
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
