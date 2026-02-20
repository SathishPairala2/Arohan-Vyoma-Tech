import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';

const Contact = () => {
    const [status, setStatus] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        website: '',
        services: [],
        budget: '',
        timeline: '',
        message: '',
        agreement: false
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (service) => {
        setFormData(prev => {
            const services = prev.services.includes(service)
                ? prev.services.filter(s => s !== service)
                : [...prev.services, service];
            return { ...prev, services };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        // Simulate API call
        console.log('Form Data Submitted:', formData);
        await new Promise(resolve => setTimeout(resolve, 1500));

        setStatus('success');
        setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            website: '',
            services: [],
            budget: '',
            timeline: '',
            message: '',
            agreement: false
        });

        setTimeout(() => setStatus(''), 5000);
    };

    const serviceOptions = [
        'Website Development',
        'Web Application',
        'E-commerce Website',
        'Portfolio Website',
        'UI/UX Design',
        'Mobile App',
        'Website Maintenance',
        'Other'
    ];

    return (
        <section id="contact" className="section py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/3"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">
                            Let's <span className="glow-text">Connect</span>
                        </h2>
                        <p className="text-white/60 mb-12 text-lg">
                            Have a project in mind? Let's discuss how we can help you build something extraordinary.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center space-x-6 group">
                                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-white/40 uppercase tracking-widest mb-1 font-semibold">Email Us</p>
                                    <p className="text-lg font-medium group-hover:text-primary transition-colors cursor-pointer">infoarohanvyomatech@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-6 group">
                                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-white/40 uppercase tracking-widest mb-1 font-semibold">Call Us</p>
                                    <p className="text-lg font-medium group-hover:text-secondary transition-colors cursor-pointer">+91 6303974785</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-6 group">
                                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-white/40 uppercase tracking-widest mb-1 font-semibold">Visit Us</p>
                                    <p className="text-lg font-medium group-hover:text-accent transition-colors">Hyderabad, Telangana</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-2/3"
                    >
                        <form onSubmit={handleSubmit} className="glass p-8 md:p-10 rounded-3xl border border-white/10 space-y-8 relative">
                            {/* Contact Info Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-white/60 ml-1 uppercase tracking-wider">Your Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                        className="w-full bg-white/5 border border-white/10 focus:border-primary focus:shadow-[0_0_15px_rgba(168,85,247,0.2)] p-4 rounded-xl outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-white/60 ml-1 uppercase tracking-wider">Email Address *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        className="w-full bg-white/5 border border-white/10 focus:border-primary focus:shadow-[0_0_15px_rgba(168,85,247,0.2)] p-4 rounded-xl outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-white/60 ml-1 uppercase tracking-wider">Phone Number *</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+91 XXXXX XXXXX"
                                    className="w-full bg-white/5 border border-white/10 focus:border-primary focus:shadow-[0_0_15px_rgba(168,85,247,0.2)] p-4 rounded-xl outline-none transition-all"
                                />
                            </div>

                            {/* Business Info Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-white/60 ml-1 uppercase tracking-wider">Company Name</label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Your company"
                                        className="w-full bg-white/5 border border-white/10 focus:border-primary focus:shadow-[0_0_15px_rgba(168,85,247,0.2)] p-4 rounded-xl outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-white/60 ml-1 uppercase tracking-wider">Website URL</label>
                                    <input
                                        type="url"
                                        name="website"
                                        value={formData.website}
                                        onChange={handleChange}
                                        placeholder="https://example.com"
                                        className="w-full bg-white/5 border border-white/10 focus:border-primary focus:shadow-[0_0_15px_rgba(168,85,247,0.2)] p-4 rounded-xl outline-none transition-all"
                                    />
                                </div>
                            </div>

                            {/* Service Checkboxes */}
                            <div className="space-y-4">
                                <label className="text-sm font-semibold text-white/60 ml-1 uppercase tracking-wider block">Services Required *</label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {serviceOptions.map((service) => (
                                        <label
                                            key={service}
                                            className="flex items-center space-x-3 cursor-pointer group"
                                        >
                                            <div
                                                onClick={() => handleCheckboxChange(service)}
                                                className={`w-6 h-6 rounded border flex items-center justify-center transition-all ${formData.services.includes(service)
                                                    ? 'bg-primary border-primary shadow-[0_0_10px_rgba(168,85,247,0.4)]'
                                                    : 'border-white/20 group-hover:border-primary/50'
                                                    }`}
                                            >
                                                {formData.services.includes(service) && <Check size={14} className="text-white" />}
                                            </div>
                                            <span className="text-sm text-white/70 group-hover:text-white transition-colors">
                                                {service}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Project Details Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-white/60 ml-1 uppercase tracking-wider">Project Budget *</label>
                                    <select
                                        name="budget"
                                        required
                                        value={formData.budget}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 focus:border-primary p-4 rounded-xl outline-none transition-all appearance-none cursor-pointer"
                                    >
                                        <option value="" disabled className="bg-dark">Select Budget</option>
                                        <option value="₹5,000 – ₹10,000" className="bg-dark">₹5,000 – ₹10,000</option>
                                        <option value="₹10,000 – ₹25,000" className="bg-dark">₹10,000 – ₹25,000</option>
                                        <option value="₹25,000 – ₹50,000" className="bg-dark">₹25,000 – ₹50,000</option>
                                        <option value="₹50,000+" className="bg-dark">₹50,000+</option>
                                        <option value="Not sure" className="bg-dark">Not sure</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-white/60 ml-1 uppercase tracking-wider">Timeline *</label>
                                    <select
                                        name="timeline"
                                        required
                                        value={formData.timeline}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 focus:border-primary p-4 rounded-xl outline-none transition-all appearance-none cursor-pointer"
                                    >
                                        <option value="" disabled className="bg-dark">Select Timeline</option>
                                        <option value="Urgent (1–3 days)" className="bg-dark">Urgent (1–3 days)</option>
                                        <option value="1 week" className="bg-dark">1 week</option>
                                        <option value="2–4 weeks" className="bg-dark">2–4 weeks</option>
                                        <option value="Flexible" className="bg-dark">Flexible</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-white/60 ml-1 uppercase tracking-wider">Message / Project Details *</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your project requirements..."
                                    className="w-full bg-white/5 border border-white/10 focus:border-primary focus:shadow-[0_0_15px_rgba(168,85,247,0.2)] p-4 rounded-xl outline-none transition-all resize-none"
                                ></textarea>
                            </div>

                            <div className="flex items-center space-x-3 cursor-pointer group pt-2 pb-4">
                                <div
                                    onClick={() => setFormData(prev => ({ ...prev, agreement: !prev.agreement }))}
                                    className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${formData.agreement
                                        ? 'bg-primary border-primary'
                                        : 'border-white/20 group-hover:border-primary/50'
                                        }`}
                                >
                                    {formData.agreement && <Check size={12} className="text-white" />}
                                </div>
                                <span className="text-sm text-white/50 group-hover:text-white transition-colors">
                                    I agree to be contacted via Email / Phone / WhatsApp
                                </span>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                disabled={status === 'sending' || !formData.agreement}
                                className={`btn-primary w-full flex items-center justify-center space-x-3 py-4 text-lg font-bold uppercase tracking-widest ${(!formData.agreement || status === 'sending') ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                <span>{status === 'sending' ? 'Sending...' : status === 'success' ? 'Sent Successfully!' : 'Send Message'}</span>
                                {status === 'success' ? <Check size={20} /> : <Send size={20} />}
                            </motion.button>

                            {status === 'success' && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-center text-primary font-semibold text-sm mt-4"
                                >
                                    Thank you! We'll get back to you within 24 hours.
                                </motion.p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
