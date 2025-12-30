import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/bright_bridge.png';
import { useModal } from '../context/ModalContext';

const Navbar = () => {
    const { openModal } = useModal();
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Handle Scroll Effect
    useEffect(() => {
        const handleScroll = () => {
            // Toggle Navbar background
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            // Determine active section
            const sections = ['home', 'about', 'features', 'results', 'reviews', 'faq'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top >= -100 && rect.top < 300) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Smooth Scroll Function
    const scrollToSection = (id) => {
        setMobileMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80, // Adjust for navbar height
                behavior: 'smooth',
            });
            setActiveSection(id);
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${isScrolled
                ? 'bg-white/95 backdrop-blur-md shadow-sm py-4'
                : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-6 lg:px-20 flex items-center justify-between">
                {/* LOGO */}
                <div
                    className="cursor-pointer select-none"
                    onClick={() => scrollToSection('home')}
                >
                    <img src={logo} alt="Bright Bridge" className="h-10 w-auto object-contain" />
                </div>

                {/* DESKTOP NAV LINKS */}
                <div className="hidden lg:flex items-center gap-8">
                    {['Home', 'About', 'Features', 'Results', 'Reviews', 'FAQ'].map((item) => {
                        const id = item.toLowerCase();
                        const isActive = activeSection === id;
                        return (
                            <button
                                key={item}
                                onClick={() => scrollToSection(id)}
                                className={`relative text-base font-medium transition-all duration-300 ${isActive ? 'text-[#008080]' : 'text-black hover:text-[#008080]'
                                    } hover:-translate-y-0.5`}
                            >
                                {item}
                                {/* Animated Underline */}
                                <span
                                    className={`absolute bottom-[-4px] left-1/2 -translate-x-1/2 h-[2px] bg-[#008080] transition-all duration-300 ease-out ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`}
                                />
                                {/* Hover underline for non-active items */}
                                {!isActive && (
                                    <span className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 h-[2px] w-0 bg-[#008080] transition-all duration-300 ease-out group-hover:w-full"></span>
                                )}
                            </button>
                        );
                    })}
                </div>

                <div className="hidden lg:block">
                    <button
                        onClick={openModal}
                        className="bg-yellow-400 text-black px-6 py-2.5 rounded-full text-sm font-semibold shadow-md hover:bg-[#008080] hover:text-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                    >
                        Free Diagnostic Session
                    </button>
                </div>

                {/* MOBILE MENU TOGGLE */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-black focus:outline-none"
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* MOBILE NAVBAR */}
            <div
                className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${mobileMenuOpen ? 'max-h-[450px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="flex flex-col items-center gap-6 py-8">
                    {['Home', 'About', 'Features', 'Results', 'Reviews', 'FAQ'].map((item) => {
                        const id = item.toLowerCase();
                        const isActive = activeSection === id;
                        return (
                            <button
                                key={item}
                                onClick={() => scrollToSection(id)}
                                className={`text-lg font-medium transition-colors ${isActive ? 'text-[#008080]' : 'text-black'
                                    }`}
                            >
                                {item}
                            </button>
                        );
                    })}
                    <button
                        onClick={() => {
                            setMobileMenuOpen(false);
                            openModal();
                        }}
                        className="bg-yellow-400 text-black px-8 py-3 rounded-full text-base font-semibold shadow-md hover:bg-[#008080] hover:text-white active:scale-95 transition-all duration-300"
                    >
                        Free Diagnostic Session
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
