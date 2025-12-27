import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { educationData } from '../data/education';
import { FaGraduationCap, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Education = () => {
    // Renders education history list
    return (
        <div className="w-full">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-widest mb-2 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-gradient-to-r from-blue-900 to-blue-700"></span>
                01. Journey
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 tracking-tight">Academic Background</h3>

            <div className="grid grid-cols-1 gap-6">
                {educationData.map((edu, index) => (
                    <EducationItem key={index} edu={edu} index={index} />
                ))}
            </div>
        </div>
    );
};

const EducationItem = ({ edu, index }) => {
    const [isOpen, setIsOpen] = useState(false);
    const hasCoursework = edu.coursework && Object.keys(edu.coursework).length > 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white border border-slate-200/80 rounded-2xl p-8 hover:border-blue-900/20 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 group"
        >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2.5 bg-blue-900/10 text-blue-900 rounded-xl group-hover:scale-110 transition-transform duration-300">
                            <FaGraduationCap size={18} />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">{edu.degree}</h3>
                    </div>

                    {edu.specialization && (
                        <p className="text-blue-900 font-medium ml-[52px] text-sm tracking-wide uppercase">{edu.specialization}</p>
                    )}
                    <p className="text-slate-500 ml-[52px] mt-1 text-lg font-medium">{edu.institution}</p>
                </div>

                <div className="flex flex-col items-start md:items-end gap-3 ml-[52px] md:ml-0 mt-2 md:mt-0">
                    <span className="inline-block px-4 py-1.5 bg-slate-100 text-slate-600 text-xs font-bold tracking-wider uppercase rounded-full whitespace-nowrap border border-slate-200">
                        {edu.period}
                    </span>
                    {hasCoursework && (
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="px-4 py-2 bg-blue-50 text-blue-900 border border-blue-200 text-xs font-semibold rounded-full flex items-center gap-2 transition-all duration-300 hover:bg-blue-100 hover:border-blue-300 uppercase tracking-wider"
                        >
                            <span className="hidden sm:inline">{isOpen ? 'Close Coursework' : 'View Program Coursework'}</span>
                            <span className="sm:hidden">{isOpen ? 'Close' : 'View Coursework'}</span>
                            {isOpen ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
                        </button>
                    )}
                </div>
            </div>

            <AnimatePresence>
                {isOpen && hasCoursework && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="pt-6 mt-4 border-t border-slate-100 ml-8">
                            <div className="space-y-6">
                                {Object.entries(edu.coursework).map(([category, courses]) => (
                                    <div key={category} className="border-l-2 border-blue-900/20 pl-4">
                                        <h5 className="text-xs font-bold text-blue-900 mb-3 uppercase tracking-wider">{category}</h5>
                                        <ul className="space-y-2">
                                            {courses.map((course, i) => (
                                                <li key={i} className="text-sm text-slate-600 flex items-start gap-3">
                                                    <span className="text-blue-900 mt-1.5 text-[6px] shrink-0">●</span>
                                                    <span>{course}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Education;
