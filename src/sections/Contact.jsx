import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Check, Send } from 'lucide-react';

const serviceOptions = [
    'Website Development',
    'Web Application',
    'E-commerce Website',
    'Mobile App',
    'UI/UX Design',
    'Digital Marketing',
    'Cloud & DevOps',
    'Other',
];

const Contact = () => {
    const [status, setStatus] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        services: [],
        budget: '',
        timeline: '',
        message: '',
        agreement: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleServiceToggle = (service) => {
        setFormData(prev => ({
            ...prev,
            services: prev.services.includes(service)
                ? prev.services.filter(s => s !== service)
                : [...prev.services, service],
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        await new Promise(r => setTimeout(r, 1500));
        setStatus('success');
        setFormData({
            name: '', email: '', phone: '', company: '',
            services: [], budget: '', timeline: '', message: '', agreement: false,
        });
        setTimeout(() => setStatus(''), 5000);
    };

    // ── shared input style ────────────────────────────────────────────────────
    const inputStyle = {
        width: '100%',
        padding: '0.9rem 1.2rem',
        border: '1px solid rgba(0,0,0,0.14)',
        borderRadius: '12px',
        background: '#ffffff',
        fontFamily: 'var(--font-body)',
        fontSize: '0.92rem',
        color: 'var(--color-text-dark)',
        outline: 'none',
        transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
        boxSizing: 'border-box',
    };

    const labelStyle = {
        display: 'block',
        fontFamily: 'var(--font-heading)',
        fontSize: '0.68rem',
        fontWeight: 700,
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        color: 'var(--color-text-muted-dark)',
        marginBottom: '0.5rem',
    };

    const handleFocus = (e) => {
        e.target.style.borderColor = 'var(--color-accent)';
        e.target.style.boxShadow = '0 0 0 3px rgba(104,63,191,0.1)';
    };
    const handleBlur = (e) => {
        e.target.style.borderColor = 'rgba(0,0,0,0.14)';
        e.target.style.boxShadow = 'none';
    };

    return (
        <section
            id="contact"
            style={{
                background: 'var(--color-bg-light)',
                padding: 'var(--spacing-xl) 0',
            }}
        >
            <div className="container">
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 2fr',
                        gap: '5rem',
                        alignItems: 'flex-start',
                    }}
                >
                    {/* ── Left: Info ──────────────────────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ position: 'sticky', top: '100px' }}
                    >
                        <span style={{
                            display: 'inline-block',
                            fontFamily: 'var(--font-heading)',
                            fontSize: '0.7rem',
                            fontWeight: 700,
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            color: 'var(--color-accent)',
                            marginBottom: '1rem',
                        }}>
                            Get In Touch
                        </span>

                        <h2 style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                            fontWeight: 900,
                            color: 'var(--color-text-dark)',
                            lineHeight: 1.1,
                            marginBottom: '1.25rem',
                        }}>
                            Let's Build<br />Something<br />
                            <span style={{ color: 'var(--color-accent)' }}>Extraordinary</span>
                        </h2>

                        <p style={{
                            color: 'var(--color-text-muted-dark)',
                            fontSize: '0.92rem',
                            lineHeight: 1.8,
                            marginBottom: '2.5rem',
                        }}>
                            Have a project in mind? Let's discuss how we can help you turn
                            your vision into a high-performance digital product.
                        </p>

                        {/* Contact Details */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            {[
                                { icon: <Mail size={18} />, label: 'Email', value: 'infoarohanvyomatech@gmail.com', href: 'mailto:infoarohanvyomatech@gmail.com' },
                                { icon: <Phone size={18} />, label: 'Phone', value: '+91 6303 974 785', href: 'tel:+916303974785' },
                                { icon: <MapPin size={18} />, label: 'Location', value: 'Hyderabad, Telangana, India', href: 'https://maps.google.com/?q=Hyderabad' },
                            ].map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    target={item.href.startsWith('http') ? '_blank' : undefined}
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '1rem',
                                        textDecoration: 'none',
                                        color: 'inherit',
                                    }}
                                >
                                    <div style={{
                                        width: 40, height: 40,
                                        borderRadius: '10px',
                                        background: 'rgba(104,63,191,0.08)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--color-accent)',
                                        flexShrink: 0,
                                    }}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p style={{
                                            fontFamily: 'var(--font-heading)',
                                            fontSize: '0.65rem',
                                            fontWeight: 700,
                                            letterSpacing: '0.15em',
                                            textTransform: 'uppercase',
                                            color: 'var(--color-text-muted-dark)',
                                            margin: '0 0 0.2rem',
                                        }}>
                                            {item.label}
                                        </p>
                                        <p style={{
                                            fontFamily: 'var(--font-body)',
                                            fontSize: '0.9rem',
                                            color: 'var(--color-text-dark)',
                                            fontWeight: 500,
                                            margin: 0,
                                        }}>
                                            {item.value}
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* ── Right: Form ──────────────────────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                    >
                        <form
                            onSubmit={handleSubmit}
                            style={{
                                background: '#ffffff',
                                border: '1px solid rgba(0,0,0,0.07)',
                                borderRadius: '20px',
                                padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                                boxShadow: 'var(--shadow-card-light)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.5rem',
                            }}
                        >
                            {/* Name + Email */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                                <div>
                                    <label style={labelStyle}>Your Name *</label>
                                    <input
                                        type="text" name="name" required
                                        value={formData.name} onChange={handleChange}
                                        placeholder="Enter your name"
                                        style={inputStyle}
                                        onFocus={handleFocus} onBlur={handleBlur}
                                    />
                                </div>
                                <div>
                                    <label style={labelStyle}>Email Address *</label>
                                    <input
                                        type="email" name="email" required
                                        value={formData.email} onChange={handleChange}
                                        placeholder="you@example.com"
                                        style={inputStyle}
                                        onFocus={handleFocus} onBlur={handleBlur}
                                    />
                                </div>
                            </div>

                            {/* Phone + Company */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                                <div>
                                    <label style={labelStyle}>Phone Number *</label>
                                    <input
                                        type="tel" name="phone" required
                                        value={formData.phone} onChange={handleChange}
                                        placeholder="+91 XXXXX XXXXX"
                                        style={inputStyle}
                                        onFocus={handleFocus} onBlur={handleBlur}
                                    />
                                </div>
                                <div>
                                    <label style={labelStyle}>Company Name</label>
                                    <input
                                        type="text" name="company"
                                        value={formData.company} onChange={handleChange}
                                        placeholder="Your company"
                                        style={inputStyle}
                                        onFocus={handleFocus} onBlur={handleBlur}
                                    />
                                </div>
                            </div>

                            {/* Services */}
                            <div>
                                <label style={labelStyle}>Services Required *</label>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(2, 1fr)',
                                    gap: '0.6rem',
                                    marginTop: '0.2rem',
                                }}>
                                    {serviceOptions.map((s) => {
                                        const checked = formData.services.includes(s);
                                        return (
                                            <label
                                                key={s}
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '0.65rem',
                                                    cursor: 'pointer',
                                                    padding: '0.65rem 0.9rem',
                                                    borderRadius: '10px',
                                                    border: `1px solid ${checked ? 'var(--color-accent)' : 'rgba(0,0,0,0.1)'}`,
                                                    background: checked ? 'rgba(104,63,191,0.06)' : '#fff',
                                                    transition: 'all 0.2s ease',
                                                    userSelect: 'none',
                                                }}
                                                onClick={() => handleServiceToggle(s)}
                                            >
                                                <div style={{
                                                    width: 18, height: 18,
                                                    borderRadius: '5px',
                                                    border: `1.5px solid ${checked ? 'var(--color-accent)' : 'rgba(0,0,0,0.2)'}`,
                                                    background: checked ? 'var(--color-accent)' : '#fff',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    flexShrink: 0,
                                                    transition: 'all 0.2s ease',
                                                }}>
                                                    {checked && <Check size={11} color="#fff" strokeWidth={3} />}
                                                </div>
                                                <span style={{
                                                    fontFamily: 'var(--font-body)',
                                                    fontSize: '0.84rem',
                                                    color: checked ? 'var(--color-accent)' : 'var(--color-text-mid)',
                                                    fontWeight: checked ? 600 : 400,
                                                    transition: 'color 0.2s ease',
                                                }}>
                                                    {s}
                                                </span>
                                            </label>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Budget + Timeline */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                                <div>
                                    <label style={labelStyle}>Project Budget *</label>
                                    <select
                                        name="budget" required
                                        value={formData.budget} onChange={handleChange}
                                        style={{ ...inputStyle, cursor: 'pointer' }}
                                        onFocus={handleFocus} onBlur={handleBlur}
                                    >
                                        <option value="" disabled>Select Budget</option>
                                        <option>₹5,000 – ₹10,000</option>
                                        <option>₹10,000 – ₹25,000</option>
                                        <option>₹25,000 – ₹50,000</option>
                                        <option>₹50,000+</option>
                                        <option>Not sure</option>
                                    </select>
                                </div>
                                <div>
                                    <label style={labelStyle}>Timeline *</label>
                                    <select
                                        name="timeline" required
                                        value={formData.timeline} onChange={handleChange}
                                        style={{ ...inputStyle, cursor: 'pointer' }}
                                        onFocus={handleFocus} onBlur={handleBlur}
                                    >
                                        <option value="" disabled>Select Timeline</option>
                                        <option>Urgent (1–3 days)</option>
                                        <option>1 week</option>
                                        <option>2–4 weeks</option>
                                        <option>1–3 months</option>
                                        <option>Flexible</option>
                                    </select>
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label style={labelStyle}>Message / Project Details *</label>
                                <textarea
                                    name="message" required rows={5}
                                    value={formData.message} onChange={handleChange}
                                    placeholder="Tell us about your project…"
                                    style={{ ...inputStyle, resize: 'none' }}
                                    onFocus={handleFocus} onBlur={handleBlur}
                                />
                            </div>

                            {/* Agreement */}
                            <label
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    cursor: 'pointer',
                                    userSelect: 'none',
                                }}
                                onClick={() => setFormData(prev => ({ ...prev, agreement: !prev.agreement }))}
                            >
                                <div style={{
                                    width: 20, height: 20,
                                    borderRadius: '5px',
                                    border: `1.5px solid ${formData.agreement ? 'var(--color-accent)' : 'rgba(0,0,0,0.2)'}`,
                                    background: formData.agreement ? 'var(--color-accent)' : '#fff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                    transition: 'all 0.2s ease',
                                }}>
                                    {formData.agreement && <Check size={12} color="#fff" strokeWidth={3} />}
                                </div>
                                <span style={{
                                    fontFamily: 'var(--font-body)',
                                    fontSize: '0.85rem',
                                    color: 'var(--color-text-muted-dark)',
                                }}>
                                    I agree to be contacted via Email / Phone / WhatsApp
                                </span>
                            </label>

                            {/* Submit */}
                            <motion.button
                                whileHover={{ scale: 1.015 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={!formData.agreement || status === 'sending'}
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    borderRadius: '100px',
                                    border: 'none',
                                    background: status === 'success'
                                        ? '#22c55e'
                                        : !formData.agreement || status === 'sending'
                                            ? 'rgba(0,0,0,0.2)'
                                            : 'var(--color-text-dark)',
                                    color: '#fff',
                                    fontFamily: 'var(--font-heading)',
                                    fontSize: '0.92rem',
                                    fontWeight: 700,
                                    letterSpacing: '0.05em',
                                    cursor: !formData.agreement || status === 'sending' ? 'not-allowed' : 'pointer',
                                    transition: 'all 0.3s ease',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.6rem',
                                }}
                            >
                                {status === 'sending' ? (
                                    'Sending...'
                                ) : status === 'success' ? (
                                    <><Check size={18} /> Message Sent Successfully!</>
                                ) : (
                                    <><Send size={17} /> Send Message</>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>

            <style>{`
                @media (max-width: 900px) {
                    #contact .container > div {
                        grid-template-columns: 1fr !important;
                        gap: 3rem !important;
                    }
                    #contact .container > div > div:first-child {
                        position: static !important;
                    }
                    #contact form > div:first-child,
                    #contact form > div:nth-child(2),
                    #contact form > div:nth-child(5) {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Contact;
