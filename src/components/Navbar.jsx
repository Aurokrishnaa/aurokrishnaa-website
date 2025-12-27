import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { profileData } from '../data/profile';
import { HiMenu } from 'react-icons/hi';
import { FaExternalLinkAlt, FaDownload } from 'react-icons/fa';
import { smoothScrollTo } from '../utils/smoothScroll';

const Navbar = ({ toggleMobileSidebar }) => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Track active section for highlighting
            if (!isHome) return;

            const sections = ['hero', 'education', 'experience', 'projects', 'research', 'contact'];
            const scrollPosition = window.scrollY + 150;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHome]);

    const scrollToSection = (id) => {
        if (!isHome) return;
        smoothScrollTo(id, 900, 80); // 900ms duration, 80px offset for header
    };

    const navLinks = [
        { name: 'Home', id: 'hero' },
        { name: 'Education', id: 'education' },
        { name: 'Experience', id: 'experience' },
        { name: 'Projects', id: 'projects' },
        { name: 'Research', id: 'research' },
        { name: 'Contact', id: 'contact' },
    ];

    return (
        <header className={`fixed top-0 right-0 left-0 lg:left-96 z-50 flex justify-center py-6 pointer-events-none transition-all duration-500 ${scrolled ? 'py-4' : ''}`}>
            {/* 
               We use pointer-events-none on the wrapper so clicks pass through to the page below.
               "lg:left-80" ensures that on desktop, the center point is calculated 
               relative to the remaining space (Viewport Width - Sidebar Width).
            */}

            <div className="w-full max-w-5xl px-4 lg:px-6 pointer-events-auto flex items-center justify-between lg:justify-center">

                {/* Mobile: Hamburger (Triggers Sidebar) */}
                <button
                    onClick={toggleMobileSidebar}
                    className="lg:hidden p-3 bg-white/95 backdrop-blur-md border border-slate-200 rounded-full shadow-card text-slate-600 hover:text-blue-900 hover:border-blue-900/20 transition-all duration-300 active:scale-95"
                >
                    <HiMenu size={22} />
                </button>

                {/* Mobile: Right Side Resume Button */}
                <Link
                    to="/resume"
                    className="lg:hidden flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-900 to-blue-800 text-white text-sm font-semibold rounded-full shadow-card active:scale-95 transition-all"
                    aria-label="View Resume"
                >
                    <FaDownload size={14} />
                    Resume
                </Link>

                {/* Desktop: Unified Floating Dock */}
                <nav className={`hidden lg:flex items-center gap-1 p-1.5 bg-white/90 backdrop-blur-xl border border-slate-200/80 rounded-full transition-all duration-500 ${scrolled ? 'shadow-premium' : 'shadow-card'}`}>

                    {/* Section Links */}
                    {isHome ? (
                        <div className="flex items-center">
                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => scrollToSection(link.id)}
                                    className={`relative px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 magnetic-hover ${activeSection === link.id
                                        ? 'text-blue-900 bg-blue-50/80'
                                        : 'text-slate-600 hover:text-blue-900 hover:bg-blue-50/50'
                                        }`}
                                >
                                    {link.name}
                                </button>
                            ))}
                        </div>
                    ) : (
                        <Link to="/" className="px-5 py-2.5 text-sm font-bold text-slate-700 hover:text-blue-900 hover:bg-blue-50/80 rounded-full transition-all flex items-center gap-2">
                            ← Portfolio
                        </Link>
                    )}

                    {/* Divider */}
                    <div className="w-px h-5 bg-slate-200 mx-2"></div>

                    {/* Right Side: Actions */}
                    <div className="flex items-center gap-1">
                        <a
                            href={profileData.blog}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-blue-900 hover:bg-blue-50/50 rounded-full transition-all flex items-center gap-2"
                        >
                            Auronomics
                            <FaExternalLinkAlt size={9} className="opacity-40" />
                        </a>

                        <Link
                            to="/resume"
                            className="ml-1 px-5 py-2.5 bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white text-xs font-bold tracking-wide uppercase rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
                        >
                            Resume
                            <FaDownload size={10} className="opacity-80" />
                        </Link>
                    </div>

                </nav>
            </div>
        </header >
    );
};

export default Navbar;
