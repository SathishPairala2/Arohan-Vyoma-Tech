import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Github, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-dark pt-20 pb-10 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <div className="flex items-center">
                            <img
                                src="/images/avt-logo.svg"
                                alt="Arohan Vyoma Tech"
                                className="h-14 w-auto brightness-110"
                            />
                        </div>
                        <p className="text-white/40 leading-relaxed text-sm max-w-xs">
                            We build scalable, high-performance websites and apps that help businesses grow.
                            From idea to deployment — your trusted digital partner.
                        </p>
                    </div>

                    <div className="flex flex-col items-start">
                        <h4 className="text-lg font-bold mb-8">Quick Links</h4>
                        <ul className="space-y-4 text-white/40 text-sm">
                            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
                            <li><Link to="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-start min-w-0">
                        <h4 className="text-lg font-bold mb-8">Contact Us</h4>
                        <ul className="space-y-4 text-white/40 text-sm w-full">
                            <li className="flex flex-col gap-1">
                                <span className="text-primary font-semibold">Email:</span>
                                <span className="break-all">infoarohanvyomatech@gmail.com</span>
                            </li>
                            <li className="flex flex-col gap-1">
                                <span className="text-primary font-semibold">Phone:</span>
                                <span>+91 6303974785</span>
                            </li>
                            <li className="flex flex-col gap-1">
                                <span className="text-primary font-semibold">Location:</span>
                                <span>Hyderabad, Telangana</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-8">Stay Connected</h4>
                        <div className="flex space-x-4">
                            {[
                                { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/company/arohan-vyoma-tech/" },
                                { icon: <Twitter size={20} />, href: "#" },
                                { icon: <Github size={20} />, href: "#" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300 border border-white/5"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm text-white/30 text-center md:text-left">
                        © 2026 Arohan Vyoma Tech. All rights reserved.
                    </p>
                    <div className="flex space-x-8">
                        <Link to="/privacy-policy" className="text-sm text-white/30 hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms-of-service" className="text-sm text-white/30 hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
