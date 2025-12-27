import React from 'react';
import { motion } from 'framer-motion';
import { researchData } from '../data/projects';
import { FaScroll } from 'react-icons/fa';

const Research = () => {
    // If researchData is not available separately, ensure it is exported from projects.js or similar
    // Assuming structure based on previous extraction
    if (!researchData || researchData.length === 0) return null;

    return (
        <div className="w-full">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-widest mb-2 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-gradient-to-r from-blue-900 to-blue-700"></span>
                04. Research
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 tracking-tight">Academic Research</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {researchData.map((paper, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white border border-slate-200/80 rounded-xl p-8 hover:border-blue-900/20 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 group flex flex-col h-full"
                    >
                        <div className="flex items-start gap-5 mb-5">
                            <div className="p-3 bg-blue-900/10 rounded-xl border border-blue-900/10 text-blue-900 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                <FaScroll size={22} />
                            </div>
                            <div>
                                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">{paper.date} — {paper.university}</div>
                                <h3 className="text-lg font-bold text-slate-900 leading-tight group-hover:text-blue-900 transition-colors">
                                    <a href={paper.link} target="_blank" rel="noopener noreferrer" className="hover:underline decoration-blue-900/30 underline-offset-4">
                                        {paper.title}
                                    </a>
                                </h3>
                            </div>
                        </div>

                        <div className="flex-grow pl-[68px]">
                            <p className="text-sm text-slate-600 leading-relaxed mb-6">
                                {paper.description}
                            </p>
                        </div>

                        <div className="pl-[68px] mt-auto">
                            <a
                                href={paper.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-sm font-bold text-blue-900 hover:text-blue-700 transition-colors group/link"
                            >
                                Read Paper <span className="ml-1 transition-transform group-hover/link:translate-x-1">→</span>
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Research;
