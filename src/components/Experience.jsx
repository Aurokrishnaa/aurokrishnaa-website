import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experienceData } from '../data/experience';
import { FaBriefcase, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Experience = () => {
    return (
        <div className="w-full">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-widest mb-2 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-gradient-to-r from-blue-900 to-blue-700"></span>
                02. Career
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 tracking-tight">Professional Experience</h3>

            <div className="relative pl-0 space-y-8">
                {/* Vertical Line - Animated draw effect */}
                <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="absolute left-[20px] top-4 bottom-10 w-[2px] bg-gradient-to-b from-blue-900 via-blue-700/50 to-transparent hidden md:block origin-top"
                ></motion.div>

                {experienceData.map((role, index) => (
                    <ExperienceItem key={index} role={role} index={index} />
                ))}
            </div>
        </div>
    );
};

const ExperienceItem = ({ role, index }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative md:pl-16 group"
        >
            {/* Timeline Node */}
            <div className="hidden md:flex absolute left-0 top-8 w-11 h-11 bg-white border-[3px] border-slate-200 rounded-full items-center justify-center text-slate-400 group-hover:border-blue-900 group-hover:text-blue-900 transition-all duration-300 z-10 shadow-card group-hover:shadow-card-hover group-hover:scale-110">
                <FaBriefcase size={14} />
            </div>

            <div
                className={`bg-white border rounded-2xl p-8 transition-all duration-300 cursor-pointer ${isOpen
                    ? 'border-blue-900/30 ring-1 ring-blue-900/10 shadow-card-hover'
                    : 'border-slate-200/80 hover:border-blue-900/20 shadow-card hover:shadow-card-hover hover:-translate-y-0.5'
                    }`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors tracking-tight">
                            {role.title}
                        </h3>
                        <div className="text-blue-900 font-bold mb-3 uppercase text-sm tracking-wide mt-1">{role.institution}</div>
                        <p className="text-xs font-bold text-slate-500 md:hidden mb-4 bg-slate-100 inline-block px-3 py-1 rounded-full uppercase tracking-wider border border-slate-200">{role.period}</p>

                        <p className="text-slate-600 leading-relaxed max-w-3xl text-lg">
                            {role.description}
                        </p>
                    </div>

                    <div className="hidden md:flex flex-col items-end gap-3 min-w-[140px]">
                        <span className="text-xs font-bold text-slate-500 bg-slate-100 px-4 py-1.5 rounded-full whitespace-nowrap border border-slate-200 uppercase tracking-wider">
                            {role.period}
                        </span>
                        <button className="mt-2 px-3 py-1.5 bg-blue-50 text-blue-900 border border-blue-200 text-xs font-semibold rounded-full flex items-center gap-1.5 transition-all duration-300 hover:bg-blue-100 hover:border-blue-300 uppercase tracking-wider">
                            {isOpen ? 'Hide Details' : 'View Details'}
                            {isOpen ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
                        </button>
                    </div>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <div className="pt-8 mt-6 border-t border-slate-100">
                                <ul className="space-y-4">
                                    {role.details.map((detail, i) => (
                                        <li key={i} className="flex gap-4 text-slate-600 text-[15px] leading-relaxed group/item">
                                            <span className="text-blue-900 mt-2 text-[10px] group-hover/item:text-blue-700 transition-colors">▶</span>
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default Experience;
