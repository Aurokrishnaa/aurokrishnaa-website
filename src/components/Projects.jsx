import React, { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/projects';
import { FaFolder, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const INITIAL_DISPLAY_COUNT = 4;

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const [showAll, setShowAll] = useState(false);
    const sectionRef = useRef(null);

    const categories = useMemo(() => {
        const cats = ['All', ...new Set(projectsData.map(p => p.category).filter(Boolean))];
        return cats.slice(0, 6);
    }, []);

    const filteredProjects = projectsData.filter(p =>
        filter === 'All' ? true : p.category === filter
    );

    const displayedProjects = showAll
        ? filteredProjects
        : filteredProjects.slice(0, INITIAL_DISPLAY_COUNT);

    const remainingCount = filteredProjects.length - INITIAL_DISPLAY_COUNT;

    const handleToggleShowAll = () => {
        if (showAll) {
            // When collapsing, scroll back to the projects section smoothly
            setShowAll(false);
            setTimeout(() => {
                sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        } else {
            setShowAll(true);
        }
    };

    return (
        <div className="w-full" ref={sectionRef}>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
                <div>
                    <h2 className="text-sm font-bold text-blue-900 uppercase tracking-widest mb-2 flex items-center gap-3">
                        <span className="w-8 h-[2px] bg-gradient-to-r from-blue-900 to-blue-700"></span>
                        03. Portfolio
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Project Showcase</h3>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-2">
                    {categories.map(cat => (
                        <motion.button
                            key={cat}
                            onClick={() => {
                                setFilter(cat);
                                setShowAll(false);
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-all duration-300 border ${filter === cat
                                ? 'bg-blue-900 text-white border-blue-900 shadow-lg scale-105'
                                : 'bg-white text-slate-500 border-slate-200 hover:border-blue-900/30 hover:text-blue-900 shadow-card hover:shadow-card-hover'
                                }`}
                        >
                            {cat}
                        </motion.button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                <AnimatePresence mode="popLayout">
                    {displayedProjects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </AnimatePresence>
            </div>

            {/* Show More / Show Less Button */}
            {filteredProjects.length > INITIAL_DISPLAY_COUNT && (
                <motion.div
                    className="flex justify-center mt-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <button
                        onClick={handleToggleShowAll}
                        className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-full font-bold text-sm uppercase tracking-wide shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                        {showAll ? (
                            <>
                                <span>Show Less</span>
                                <FaChevronUp className="group-hover:-translate-y-1 transition-transform duration-300" />
                            </>
                        ) : (
                            <>
                                <span>View All Projects</span>
                                <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">
                                    +{remainingCount}
                                </span>
                                <FaChevronDown className="group-hover:translate-y-1 transition-transform duration-300" />
                            </>
                        )}
                    </button>
                </motion.div>
            )}
        </div>
    );
};

const ProjectCard = ({ project, index }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="bg-white border border-slate-200/80 rounded-2xl p-7 flex flex-col shadow-card hover:shadow-card-hover hover:-translate-y-1 hover:border-blue-900/20 transition-all duration-300 group"
        >
            <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-blue-900/10 border border-blue-900/10 text-blue-900 rounded-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <FaFolder size={22} />
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-slate-500 border border-slate-200 bg-slate-50 px-3 py-1.5 rounded-full">
                    {project.category || 'Finance'}
                </span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-blue-900 transition-colors">
                {project.title}
            </h3>

            <p className="text-xs font-bold text-slate-400 mb-5 uppercase tracking-wide">
                {project.course}
            </p>

            <div className="flex-grow">
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {project.description}
                </p>

                {/* Expandable Details Section */}
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden"
                        >
                            <p className="text-xs text-slate-500 leading-relaxed pt-3 border-t border-slate-100">
                                {project.details}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Expand/Collapse Button */}
                {project.details && (
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="flex items-center gap-2 mt-3 text-xs font-semibold text-blue-900 hover:text-blue-700 transition-colors"
                    >
                        <span>{isExpanded ? 'Show Less' : 'Read More'}</span>
                        <motion.span
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <FaChevronDown size={10} />
                        </motion.span>
                    </button>
                )}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                {project.tools?.slice(0, 4).map((tool, i) => (
                    <span key={i} className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200 group-hover:border-blue-900/20 group-hover:text-blue-900 transition-colors">
                        {tool}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

export default Projects;
