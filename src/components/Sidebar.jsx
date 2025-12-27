import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { profileData } from '../data/profile';
import { FaLinkedin, FaGithub, FaTwitter, FaGlobe, FaMapMarkerAlt, FaPhone, FaEnvelope, FaCopy, FaCheck } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { smoothScrollTo } from '../utils/smoothScroll';

const Sidebar = ({ isMobileOpen, setIsMobileOpen }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const isHome = location.pathname === '/' || location.pathname === '';

    // Navigation links for mobile drawer
    const navLinks = [
        { name: 'Home', id: 'hero' },
        { name: 'Education', id: 'education' },
        { name: 'Experience', id: 'experience' },
        { name: 'Projects', id: 'projects' },
        { name: 'Research', id: 'research' },
        { name: 'Contact', id: 'contact' },
    ];

    // Body scroll lock when mobile drawer is open
    useEffect(() => {
        if (isMobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileOpen]);

    // Handle navigation click - navigate to home if needed, then scroll to section
    const handleNavClick = (id) => {
        setIsMobileOpen(false);
        if (isHome) {
            // Already on home, just scroll
            setTimeout(() => {
                smoothScrollTo(id, 900, 80);
            }, 300);
        } else {
            // Navigate to home first, then scroll after page loads
            navigate('/');
            setTimeout(() => {
                smoothScrollTo(id, 900, 80);
            }, 400);
        }
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const sidebarContent = (
        <div className="h-full flex flex-col relative overflow-hidden bg-gradient-to-b from-white via-slate-50/95 to-slate-100/90 backdrop-blur-2xl border-r border-slate-200/80 shadow-[4px_0_30px_-12px_rgba(0,0,0,0.15)]">
            {/* Decorative Background Elements with ambient animation - subtle */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-900/8 rounded-full blur-3xl -mr-36 -mt-36 pointer-events-none animate-float-orb"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-400/12 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none animate-float-orb-delayed"></div>



            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #1e3a5f 1px, transparent 0)`,
                    backgroundSize: '24px 24px',
                }}
            ></div>

            <div className="relative h-full flex flex-col px-8 py-10 overflow-y-auto no-scrollbar">

                {/* Zone 1: Identity */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="flex flex-col items-center text-center w-full"
                >
                    <motion.div variants={itemVariants} className="relative group cursor-default">
                        {/* Subtle refined ring - lighter and more elegant */}
                        <div className="absolute -inset-1 bg-gradient-to-tr from-slate-300 via-blue-200 to-slate-300 rounded-full opacity-60 group-hover:opacity-80 transition duration-500"></div>
                        <div className="absolute -inset-0.5 bg-gradient-to-tr from-slate-200 via-blue-100 to-slate-200 rounded-full opacity-70"></div>
                        <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-premium">
                            <img
                                src={profileData.image}
                                alt={profileData.name}
                                className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
                            />
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="mt-6 space-y-3">
                        <h1 className="text-3xl font-bold tracking-tight leading-none text-navy-gradient">
                            {profileData.name}
                        </h1>
                        <p className="text-sm font-semibold text-blue-900 uppercase tracking-widest bg-blue-900/5 px-4 py-2 rounded-full inline-block border border-blue-900/10">
                            Finance & Analytics
                        </p>
                    </motion.div>
                </motion.div>

                {/* Subtle Divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="w-full h-px bg-gradient-to-r from-transparent via-blue-900/20 to-transparent my-8"
                ></motion.div>

                {/* Zone 2: Contact Details */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="flex flex-col gap-4 w-full"
                >
                    <ContactCard
                        icon={<FaMapMarkerAlt />}
                        label="Location"
                        text={profileData.location}
                    />
                    <ContactCard
                        icon={<FaPhone />}
                        label="Phone"
                        text={profileData.phone}
                        copyable
                    />
                    <ContactCard
                        icon={<FaEnvelope />}
                        label="Email"
                        text={profileData.email}
                        href={`mailto:${profileData.email}`}
                        copyable
                        smallText
                    />
                </motion.div>

                {/* Spacer */}
                <div className="flex-grow"></div>

                {/* Zone 3: Socials & Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-10"
                >
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center mb-4">
                        Connect
                    </h3>
                    <div className="flex items-center justify-between gap-2 px-1">
                        <SocialIcon href={profileData.linkedin} icon={<FaLinkedin size={24} />} label="LinkedIn" hoverClass="hover:bg-blue-800" />
                        <SocialIcon href={profileData.github} icon={<FaGithub size={24} />} label="GitHub" hoverClass="hover:bg-slate-800" />
                        <SocialIcon href={profileData.twitter} icon={<FaTwitter size={24} />} label="Twitter" hoverClass="hover:bg-sky-600" />
                        <SocialIcon href={profileData.blog} icon={<FaGlobe size={24} />} label="Website" hoverClass="hover:bg-blue-900" />
                    </div>

                    <div className="text-[10px] text-slate-400 text-center mt-8 font-medium tracking-wide">
                        DESIGNED BY AURO
                    </div>
                </motion.div>
            </div>
        </div>
    );

    return (
        <>
            {/* Desktop Sidebar (Fixed) */}
            <aside className="hidden lg:block fixed top-0 left-0 h-screen w-96 z-40">
                {sidebarContent}
            </aside>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isMobileOpen && (
                    <>
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="fixed inset-y-0 left-0 w-80 z-50 lg:hidden"
                        >
                            {/* Mobile Drawer Content */}
                            <div className="h-full flex flex-col relative overflow-hidden bg-gradient-to-b from-white via-slate-50/95 to-slate-100/90 backdrop-blur-2xl border-r border-slate-200/80 shadow-[4px_0_30px_-12px_rgba(0,0,0,0.15)]">
                                {/* Decorative Background Elements with ambient animation - subtle */}
                                <div className="absolute top-0 right-0 w-72 h-72 bg-blue-900/8 rounded-full blur-3xl -mr-36 -mt-36 pointer-events-none animate-float-orb"></div>
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-400/12 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none animate-float-orb-delayed"></div>



                                {/* Subtle pattern overlay */}
                                <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
                                    style={{
                                        backgroundImage: `radial-gradient(circle at 1px 1px, #1e3a5f 1px, transparent 0)`,
                                        backgroundSize: '24px 24px',
                                    }}
                                ></div>

                                {/* Close Button - Mobile Only */}
                                <button
                                    onClick={() => setIsMobileOpen(false)}
                                    className="absolute top-4 right-4 z-20 p-2.5 bg-white/90 hover:bg-slate-100 border border-slate-200 rounded-full shadow-card text-slate-500 hover:text-slate-700 transition-all duration-200 active:scale-95"
                                    aria-label="Close menu"
                                >
                                    <HiX size={20} />
                                </button>

                                <div className="relative h-full flex flex-col px-6 py-8 overflow-y-auto no-scrollbar">

                                    {/* Zone 1: Identity (Compact for Mobile) */}
                                    <motion.div
                                        initial="hidden"
                                        animate="visible"
                                        variants={containerVariants}
                                        className="flex flex-col items-center text-center w-full"
                                    >
                                        <motion.div variants={itemVariants} className="relative group cursor-default">
                                            <div className="absolute -inset-1 bg-gradient-to-tr from-slate-300 via-blue-200 to-slate-300 rounded-full opacity-60"></div>
                                            <div className="absolute -inset-0.5 bg-gradient-to-tr from-slate-200 via-blue-100 to-slate-200 rounded-full opacity-70"></div>
                                            <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-premium">
                                                <img
                                                    src={profileData.image}
                                                    alt={profileData.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </motion.div>

                                        <motion.div variants={itemVariants} className="mt-4 space-y-2">
                                            <h1 className="text-2xl font-bold tracking-tight leading-none text-navy-gradient">
                                                {profileData.name}
                                            </h1>
                                            <p className="text-xs font-semibold text-blue-900 uppercase tracking-widest bg-blue-900/5 px-3 py-1.5 rounded-full inline-block border border-blue-900/10">
                                                Finance & Analytics
                                            </p>
                                        </motion.div>
                                    </motion.div>

                                    {/* Divider */}
                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ delay: 0.3, duration: 0.6 }}
                                        className="w-full h-px bg-gradient-to-r from-transparent via-blue-900/20 to-transparent my-6"
                                    ></motion.div>

                                    {/* Zone 2: Navigation Links (Mobile Only) */}
                                    <motion.div
                                        initial="hidden"
                                        animate="visible"
                                        variants={containerVariants}
                                        className="flex flex-col gap-1 w-full"
                                    >
                                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">
                                            Navigate
                                        </h3>
                                        {navLinks.map((link) => (
                                            <motion.button
                                                key={link.id}
                                                variants={itemVariants}
                                                onClick={() => handleNavClick(link.id)}
                                                className="w-full px-4 py-3 text-left text-sm font-medium text-slate-700 hover:text-blue-900 hover:bg-blue-50/80 rounded-xl transition-all duration-200 active:scale-[0.98]"
                                            >
                                                {link.name}
                                            </motion.button>
                                        ))}
                                    </motion.div>

                                    {/* Divider */}
                                    <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent my-5"></div>

                                    {/* Zone 3: Contact Cards (Compact) */}
                                    <motion.div
                                        initial="hidden"
                                        animate="visible"
                                        variants={containerVariants}
                                        className="flex flex-col gap-2 w-full"
                                    >
                                        <ContactCard
                                            icon={<FaMapMarkerAlt />}
                                            label="Location"
                                            text={profileData.location}
                                            compact
                                        />
                                        <ContactCard
                                            icon={<FaPhone />}
                                            label="Phone"
                                            text={profileData.phone}
                                            compact
                                        />
                                        <ContactCard
                                            icon={<FaEnvelope />}
                                            label="Email"
                                            text={profileData.email}
                                            href={`mailto:${profileData.email}`}
                                            compact
                                            truncate
                                        />
                                    </motion.div>

                                    {/* Spacer */}
                                    <div className="flex-grow"></div>

                                    {/* Zone 4: Socials */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.5 }}
                                        className="mt-6"
                                    >
                                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center mb-3">
                                            Connect
                                        </h3>
                                        <div className="flex items-center justify-between gap-2">
                                            <SocialIcon href={profileData.linkedin} icon={<FaLinkedin size={20} />} label="LinkedIn" hoverClass="hover:bg-blue-800" />
                                            <SocialIcon href={profileData.github} icon={<FaGithub size={20} />} label="GitHub" hoverClass="hover:bg-slate-800" />
                                            <SocialIcon href={profileData.twitter} icon={<FaTwitter size={20} />} label="Twitter" hoverClass="hover:bg-sky-600" />
                                            <SocialIcon href={profileData.blog} icon={<FaGlobe size={20} />} label="Website" hoverClass="hover:bg-blue-900" />
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileOpen(false)}
                            className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 lg:hidden"
                        />
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

// Premium Contact Card Component
const ContactCard = ({ icon, label, text, href, copyable, smallText, compact, truncate }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = (e) => {
        e.preventDefault();
        e.stopPropagation();
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const Wrapper = href ? 'a' : 'div';
    const wrapperProps = href ? { href, className: "block" } : {};

    return (
        <Wrapper {...wrapperProps}>
            <div className={`group relative flex items-center ${compact ? 'p-3' : 'p-4'} bg-white/80 hover:bg-white border border-slate-200/80 hover:border-blue-900/20 ${compact ? 'rounded-xl' : 'rounded-2xl'} transition-all duration-300 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 backdrop-blur-sm cursor-default overflow-hidden`}>

                {/* Icon Box */}
                <div className={`flex-shrink-0 ${compact ? 'w-9 h-9' : 'w-11 h-11'} flex items-center justify-center bg-gradient-to-br from-slate-100 to-blue-50 text-blue-900 rounded-xl group-hover:scale-105 transition-transform duration-300 border border-slate-200/50`}>
                    {React.cloneElement(icon, { size: compact ? 14 : 17 })}
                </div>

                {/* Text Content */}
                <div className={`${compact ? 'ml-3' : 'ml-4'} flex-grow min-w-0 overflow-hidden`}>
                    <p className={`${compact ? 'text-[10px]' : 'text-[11px]'} uppercase font-bold text-slate-400 tracking-wider mb-0.5`}>
                        {label}
                    </p>
                    <p className={`${smallText || truncate ? 'text-xs' : compact ? 'text-sm' : 'text-base'} font-semibold text-slate-800 group-hover:text-blue-900 transition-colors ${truncate ? 'truncate' : 'break-all'}`}>
                        {text}
                    </p>
                </div>

                {/* Copy Button (Optional) - Always visible, small */}
                {copyable && !compact && (
                    <button
                        onClick={handleCopy}
                        className="p-1.5 ml-1 text-slate-300 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all"
                        title="Copy to clipboard"
                    >
                        {copied ? <FaCheck size={10} /> : <FaCopy size={10} />}
                    </button>
                )}
            </div>
        </Wrapper>
    );
};

// Premium Social Icon
const SocialIcon = ({ href, icon, label, hoverClass }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`relative group flex-1 p-4 flex items-center justify-center text-slate-500 hover:text-white transition-all duration-300 bg-white border border-slate-200/80 hover:border-transparent rounded-2xl shadow-card hover:shadow-card-hover hover:-translate-y-1 ${hoverClass}`}
        aria-label={label}
    >
        <span className="relative z-10 transform transition-transform duration-300 group-hover:scale-110">
            {icon}
        </span>
    </a>
);

export default Sidebar;
