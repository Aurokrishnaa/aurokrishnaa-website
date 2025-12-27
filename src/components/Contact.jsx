import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaGlobe, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { profileData } from '../data/profile';

const Contact = () => {
    const socialLinks = [
        {
            href: profileData.linkedin,
            icon: <FaLinkedin size={20} />,
            label: 'LinkedIn',
            hoverColor: 'hover:text-blue-800 hover:border-blue-800/30'
        },
        {
            href: profileData.github,
            icon: <FaGithub size={20} />,
            label: 'GitHub',
            hoverColor: 'hover:text-slate-800 hover:border-slate-800/30'
        },
        {
            href: profileData.twitter,
            icon: <FaTwitter size={20} />,
            label: 'X / Twitter',
            hoverColor: 'hover:text-sky-600 hover:border-sky-600/30'
        },
        {
            href: profileData.blog,
            icon: <FaGlobe size={20} />,
            label: 'Auronomics',
            hoverColor: 'hover:text-blue-900 hover:border-blue-900/30'
        },
    ];


    return (
        <div className="w-full">
            {/* Main Footer Container */}
            <div className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50/50 rounded-3xl border border-slate-200 shadow-premium">

                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-blue-900/5 rounded-full blur-3xl -mr-36 -mt-36 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-400/10 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none"></div>

                {/* Content Grid */}
                <div className="relative px-8 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                        {/* Left Column - Identity & Message */}
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-2">
                                    <span className="block">Aurokrishnaa</span>
                                    <span className="block">Ravindran Lakshmi</span>
                                </h2>
                                <p className="text-sm font-semibold text-blue-900 uppercase tracking-widest">
                                    Finance and Quantitative Analytics
                                </p>
                            </div>

                            {/* Subtle Divider */}
                            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-900 to-blue-700 rounded-full"></div>

                            <p className="text-slate-600 leading-relaxed max-w-md text-base">
                                I work in financial analytics and quantitative finance, applying modeling, data analysis, and technology to better understand markets, manage risk, and support informed decision-making.
                            </p>
                            <p className="text-slate-600 leading-relaxed max-w-md text-base mt-4">
                                I'm currently exploring full-time opportunities in financial analytics, investment research, and quantitative roles. If my background aligns with what you're looking for, or if you'd like to connect and discuss potential collaborations, feel free to reach out.
                            </p>
                        </div>

                        {/* Right Column - Contact Details (Centered) */}
                        <div className="space-y-6 lg:justify-self-end lg:w-full lg:max-w-sm">

                            {/* Contact Info */}
                            <div className="space-y-6">

                                {/* Location */}
                                <div className="flex items-center gap-5 group">
                                    <div className="w-14 h-14 flex items-center justify-center bg-white rounded-xl border border-slate-200 text-slate-400 group-hover:text-blue-900 group-hover:border-blue-900/30 transition-all duration-300 shadow-card">
                                        <FaMapMarkerAlt size={22} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Location</p>
                                        <p className="text-lg text-slate-800 font-semibold">New York, USA</p>
                                    </div>
                                </div>

                                {/* Email */}
                                <a
                                    href="mailto:aurokrishnaa2000@gmail.com"
                                    className="flex items-center gap-5 group"
                                >
                                    <div className="w-14 h-14 flex items-center justify-center bg-white rounded-xl border border-slate-200 text-slate-400 group-hover:text-blue-900 group-hover:border-blue-900/30 transition-all duration-300 shadow-card">
                                        <FaEnvelope size={22} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Email</p>
                                        <p className="text-lg text-slate-800 font-semibold group-hover:text-blue-900 transition-colors">aurokrishnaa2000@gmail.com</p>
                                    </div>
                                </a>

                                {/* Phone */}
                                <a
                                    href="tel:+17164658491"
                                    className="flex items-center gap-5 group"
                                >
                                    <div className="w-14 h-14 flex items-center justify-center bg-white rounded-xl border border-slate-200 text-slate-400 group-hover:text-emerald-600 group-hover:border-emerald-600/30 transition-all duration-300 shadow-card">
                                        <FaPhone size={22} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Phone</p>
                                        <p className="text-lg text-slate-800 font-semibold group-hover:text-emerald-600 transition-colors">+1 (716) 465-8491</p>
                                    </div>
                                </a>
                            </div>

                            {/* Subtle Divider */}
                            <div className="w-full h-px bg-gradient-to-r from-slate-200 via-slate-300/50 to-transparent"></div>

                            {/* Social Icons with labels */}
                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Let's Connect</p>
                                <p className="text-sm text-slate-500 mb-4">I'm always open to a conversation</p>
                                <div className="grid grid-cols-4 gap-2">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`group relative flex flex-col items-center gap-2 p-3 bg-white rounded-xl border border-slate-200 text-slate-400 ${social.hoverColor} hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300`}
                                            aria-label={social.label}
                                        >
                                            <span className="absolute inset-0 rounded-xl bg-blue-900/10 scale-0 group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                                            <span className="relative z-10">{social.icon}</span>
                                            <span className="relative z-10 text-[10px] font-semibold text-slate-500 group-hover:text-inherit transition-colors">{social.label}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Divider */}
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mt-12 lg:mt-16"></div>

                    {/* Copyright */}
                    <div className="mt-8 text-center">
                        <p className="text-sm text-slate-400 font-medium tracking-wide">
                            © 2025 Aurokrishnaa Ravindran Lakshmi
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
