import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/profile';
import { smoothScrollTo } from '../utils/smoothScroll';

const Hero = memo(() => {
    // Custom smooth scroll handler for CTA buttons
    const handleScroll = (id) => {
        smoothScrollTo(id, 900, 80);
    };

    return (
        // Full-width Hero Stage - the "face" of the site (full viewport height)
        <div id="hero" className="relative min-h-screen overflow-hidden">

            {/* Background Layer - Full Width, Behind Everything */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Animated floating orbs - optimized: reduced from 5 to 3, lower blur intensity */}
                <div className="absolute top-[5%] right-[5%] w-[400px] h-[400px] bg-blue-800/8 rounded-full blur-[60px] animate-hero-orb-1 will-change-transform"></div>
                <div className="absolute bottom-[10%] right-[10%] w-[450px] h-[450px] bg-slate-400/5 rounded-full blur-[70px] animate-hero-orb-3 will-change-transform"></div>
                <div className="absolute top-[40%] left-[10%] w-[380px] h-[380px] bg-indigo-600/5 rounded-full blur-[65px] animate-hero-orb-5 will-change-transform"></div>
            </div>

            {/* Content Layer - Centered with max-width (matches other sections) */}
            <div className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-16 max-w-6xl mx-auto w-full h-full flex items-center">
                <div className="pt-24 pb-20 md:pt-32 md:pb-24 w-full">
                    <div className="flex flex-col xl:flex-row items-center gap-12 xl:gap-20">

                        {/* Profile Picture */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="shrink-0 relative order-first"
                        >
                            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-[6px] border-white shadow-premium relative z-10 ring-1 ring-slate-200/50 animate-breathing-glow">
                                <img
                                    src={profileData.image}
                                    alt={profileData.name}
                                    className="w-full h-full object-cover scale-105"
                                />
                            </div>
                            {/* Decorative navy gradient behind */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-slate-400/20 rounded-full scale-110 -z-0 translate-y-6 blur-xl animate-gradient-shift will-change-transform"></div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="max-w-3xl text-center xl:text-left"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-slate-200 shadow-card text-slate-800 text-xs font-bold tracking-widest uppercase rounded-full mb-6 mx-auto xl:mx-0">
                                <span className="w-2 h-2 rounded-full bg-blue-900"></span>
                                Finance & Analytics Professional
                            </div>

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tighter leading-[1.1] mb-6">
                                Hi, I'm <span className="text-navy-gradient">Auro</span>.
                            </h1>

                            {/* Quick Info Badges with shine effect */}
                            <div className="flex flex-wrap items-center justify-center xl:justify-start gap-3 mb-8">
                                <div className="group relative px-5 py-2 bg-slate-100 text-slate-800 text-sm font-bold rounded-full border border-slate-200 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5 cursor-default overflow-hidden">
                                    <span className="relative z-10">MS Finance - Quant</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                                </div>
                                <div className="group relative px-5 py-2 bg-slate-100 text-slate-800 text-sm font-bold rounded-full border border-slate-200 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5 cursor-default overflow-hidden">
                                    <span className="relative z-10">MBA Finance</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                                </div>
                                <div className="group relative px-5 py-2 bg-slate-100 text-slate-800 text-sm font-bold rounded-full border border-slate-200 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5 cursor-default overflow-hidden">
                                    <span className="relative z-10">MS Commerce</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                                </div>
                            </div>

                            <div className="space-y-5 text-lg md:text-xl text-slate-700 font-normal leading-relaxed max-w-2xl mx-auto xl:mx-0">
                                <p>
                                    I'm a <strong className="font-bold text-slate-900">Financial Analyst & Quantitative Researcher</strong> with deep expertise in financial modeling, derivatives pricing, fixed income analysis, portfolio construction, and data-driven investment research.
                                </p>
                                <p className="text-base md:text-lg text-slate-600">
                                    I work at the intersection of <span className="text-blue-900 font-semibold">finance, mathematics, and programming</span> to analyze markets, quantify risk, and build practical, insight-driven solutions.
                                </p>
                                <p className="text-base text-slate-500 font-medium italic">
                                    This site showcases my professional experience, selected finance/analytics projects, research papers, and my blog.
                                </p>
                            </div>

                            <div className="mt-10 flex items-center justify-center xl:justify-start gap-4">
                                <button
                                    onClick={() => handleScroll('education')}
                                    className="px-8 py-3.5 bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl magnetic-hover transition-all duration-300 text-sm tracking-wide flex items-center gap-2 active:scale-95"
                                >
                                    Explore Journey
                                </button>
                                <button
                                    onClick={() => handleScroll('contact')}
                                    className="flex items-center gap-2 px-6 py-3.5 bg-white border border-slate-200 rounded-full shadow-card hover:shadow-card-hover magnetic-hover transition-all duration-300 text-sm font-medium text-slate-600 hover:text-emerald-600 hover:border-emerald-200 active:scale-95"
                                >
                                    <span className="flex h-2.5 w-2.5 relative">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                                    </span>
                                    Open to Opportunities
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Bottom Divider Line - fills the space visually */}
            <div className="absolute bottom-12 left-0 right-0 px-4 sm:px-6 md:px-12 lg:px-16">
                <div className="max-w-6xl mx-auto w-full h-[2px] bg-gradient-to-r from-slate-200 via-slate-400 to-slate-200 rounded-full"></div>
            </div>
        </div>
    );
});

Hero.displayName = 'Hero';

export default Hero;

