import React from 'react';
import { Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';
import footerLogo from '../assets/bright_bridge.png';
import { useModal } from '../context/ModalContext';

const Footer = () => {
    const { openModal } = useModal();

    return (
        <footer className="bg-white border-t border-gray-100 pt-20 pb-10 px-6 lg:px-24 w-full font-sans">
            <div className="max-w-7xl mx-auto">

                {/* 4-COLUMN GRID LAYOUT */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 items-start">

                    {/* COLUMN 1: BRAND */}
                    <div className="flex flex-col space-y-6">
                        {/* Logo */}
                        <div className="flex items-center">
                            <img src={footerLogo} alt="Bright Bridge" className="h-9 w-auto object-contain" />
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 font-medium leading-relaxed text-sm max-w-xs">
                            Bridging students to clarity, confidence, and academic success.
                        </p>

                        {/* Trust Badge */}
                        <div className="inline-flex items-center gap-2 bg-yellow-50 px-3 py-1.5 rounded-full border border-yellow-100 w-fit">
                            <span className="text-black text-xs">⭐</span>
                            <span className="text-[11px] font-bold text-black uppercase tracking-wide">Trusted by parents across Kerala</span>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-3 pt-1">
                            <SocialIcon icon={<Instagram size={18} />} href="https://www.instagram.com/mashmagic_/" />
                            <SocialIcon icon={<WhatsAppIcon size={18} />} href="https://wa.me/918281832158" />
                        </div>
                    </div>

                    {/* COLUMN 2: PROGRAM */}
                    <div className="flex flex-col space-y-6">
                        <h4 className="font-bold text-black text-base">Program</h4>
                        <ul className="space-y-3">
                            <FooterLink text="1:1 Mentored Learning" />
                            <FooterLink text="Exam-Focused Practice" />
                            <FooterLink text="Scientific Revision" />
                            <FooterLink text="Performance Tracking" />
                        </ul>
                    </div>

                    {/* COLUMN 3: COMPANY */}
                    <div className="flex flex-col space-y-6">
                        <h4 className="font-bold text-black text-base">Company</h4>
                        <ul className="space-y-3">
                            <FooterLink text="Home" href="#home" />
                            <FooterLink text="About" href="#about" />
                            <FooterLink text="Features" href="#features" />
                            <FooterLink text="Results" href="#results" />
                            <FooterLink text="Reviews" href="#reviews" />
                            <FooterLink text="FAQ" href="#faq" />
                        </ul>
                    </div>

                    {/* COLUMN 4: CONTACT US */}
                    <div className="flex flex-col space-y-6">
                        <h4 className="font-bold text-black text-base">Contact Us</h4>

                        <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                            <div>
                                <h5 className="font-bold text-black uppercase tracking-wide text-xs mb-1">MASH MAGIC</h5>
                                <p>10/1744, 1st Floor, Suite #1012</p>
                                <p>Sowbhagya Building, Athani, Kakkanad,</p>
                                <p>Kusumagiri P.O, Kochi – 682030</p>
                            </div>

                            <div className="space-y-2 pt-1">
                                <p className="flex flex-col sm:flex-row sm:gap-1">
                                    <span className="text-black font-semibold text-xs uppercase tracking-wide">Email:</span>
                                    <a href="mailto:hellomashmagic@gmail.com" className="hover:text-[#008080] transition-colors">hellomashmagic@gmail.com</a>
                                </p>
                                <p className="flex flex-col sm:flex-row sm:gap-1">
                                    <span className="text-black font-semibold text-xs uppercase tracking-wide">Phone:</span>
                                    <a href="tel:7012128756" className="hover:text-[#008080] transition-colors">7012-128756</a>
                                </p>
                                <p className="flex flex-col sm:flex-row sm:gap-1">
                                    <span className="text-black font-semibold text-xs uppercase tracking-wide">Website:</span>
                                    <a href="https://www.mashmagicedu.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#008080] transition-colors">www.mashmagicedu.com</a>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* BOTTOM BAR: COPYRIGHT */}
                <div className="mt-16 border-t border-gray-100 pt-8 text-center">
                    <p className="text-sm text-gray-500 font-medium">
                        © 2026 Bright Bridge Learning Platform. <span className="opacity-70">Crafting Academic Clarity.</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

// --- Sub-components ---

const FooterLink = ({ text, href = "#" }) => (
    <li>
        <a href={href} className="text-gray-600 font-medium hover:text-[#008080] transition-colors duration-200 text-sm block">
            {text}
        </a>
    </li>
);

const SocialIcon = ({ icon, href }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#008080] hover:text-white hover:border-[#008080] transition-all duration-300"
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
