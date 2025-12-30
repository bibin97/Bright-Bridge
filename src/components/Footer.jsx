import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Linkedin, ArrowRight } from 'lucide-react';
import footerLogo from '../assets/bright_bridge.png';
import { useModal } from '../context/ModalContext';

const Footer = () => {
    const { openModal } = useModal();
    return (
        <footer className="border-t border-gray-100 pt-16 pb-8 px-6 lg:px-24 w-full relative z-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

                {/* 1️⃣ BRAND SECTION (Left - Wider) */}
                <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
                    {/* Logo Area */}
                    <div className="flex items-center gap-2">
                        <img src={footerLogo} alt="Bright Bridge" className="h-10 w-auto object-contain bg-blend-multiply" />
                    </div>

                    <p className="text-black font-medium leading-relaxed max-w-sm">
                        Bridging students to clarity, confidence, and academic success.
                    </p>

                    <div className="flex items-center gap-2 bg-yellow-50 px-4 py-2 rounded-full border border-yellow-100">
                        <span className="text-black text-sm">⭐</span>
                        <span className="text-xs font-bold text-black uppercase tracking-wide">Trusted by parents across Kerala</span>
                    </div>

                    {/* Socials */}
                    <div className="flex gap-4 pt-2">
                        <SocialIcon icon={<Instagram size={18} />} href="https://www.instagram.com/mashmagic_/" />
                        <SocialIcon icon={<WhatsAppIcon size={18} />} href="https://wa.me/918281832158" />
                    </div>
                </div>

                {/* 2️⃣ PROGRAM & COMPANY LINKS (Middle) */}
                <div className="lg:col-span-4 grid grid-cols-2 gap-8 text-center lg:text-left">
                    {/* Program Column */}
                    <div className="space-y-6">
                        <h4 className="font-bold text-gray-900 text-lg">Program</h4>
                        <ul className="space-y-4">
                            <FooterLink text="1:1 Mentored Learning" />
                            <FooterLink text="Exam-Focused Practice" />
                            <FooterLink text="Scientific Revision" />
                            <FooterLink text="Performance Tracking" />
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div className="space-y-6">
                        <h4 className="font-bold text-gray-900 text-lg">Company</h4>
                        <ul className="space-y-4">
                            <FooterLink text="Home" href="#home" />
                            <FooterLink text="About" href="#about" />
                            <FooterLink text="Features" href="#features" />
                            <FooterLink text="Results" href="#results" />
                            <FooterLink text="Reviews" href="#reviews" />
                            <FooterLink text="FAQ" href="#faq" />
                        </ul>
                    </div>
                </div>

                {/* 3️⃣ CONVERSION CTA SECTION (Right - Card Style) */}
                <div className="lg:col-span-4 flex justify-center lg:justify-end">
                    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 w-full max-w-sm shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="space-y-4 text-center lg:text-left">
                            <h4 className="font-bold text-black text-xl">Ready to Cross the Bridge?</h4>
                            <p className="text-black text-sm font-medium leading-relaxed">
                                Join 100+ families who chose clarity over confusion.
                            </p>
                            <motion.button
                                onClick={openModal}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-yellow-400 text-black py-3 rounded-full font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#008080] hover:text-white transition-colors shadow-lg shadow-teal-900/10 cursor-pointer"
                            >
                                Book Free Session <ArrowRight size={16} />
                            </motion.button>
                        </div>
                    </div>
                </div>

            </div>

            {/* COPYRIGHT */}
            <div className="mt-16 border-t border-gray-100 pt-8 text-center">
                <p className="text-sm text-black font-medium">
                    © {new Date().getFullYear()} Bright Bridge Learning Platform. <br className="lg:hidden" />
                    <span className="opacity-50">Crafting Academic Clarity.</span>
                </p>
            </div>
        </footer>
    );
};

// --- Sub-components ---

const FooterLink = ({ text, href = "#" }) => (
    <li>
        <a href={href} className="text-black font-medium hover:text-[#008080] hover:translate-x-1 transition-all duration-300 inline-block text-sm">
            {text}
        </a>
    </li>
);

const SocialIcon = ({ icon, href }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#008080] hover:text-white transition-all duration-300"
    >
        {icon}
    </a>
);

const WhatsAppIcon = ({ size = 18 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    </svg>
);

export default Footer;
