import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import { projects } from "../../data/projects";
import ProjectDetails from "../ProjectDetails";
import { ExternalLink, Eye } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { useLanguage } from "../../contexts/LanguageContext";

const Projects = () => {
    const [activeProject, setActiveProject] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const { theme } = useTheme();
    const { t } = useLanguage();
    const isDark = theme === "dark";

    return (
        <section id="projects" className="relative bg-fundo py-24 font-grotesk scroll-mt-26 overflow-hidden">

            <div className="absolute top-0 left-0 right-0 section-divider" />

            <SectionTitle title={t("projects.title")} />

            <div className="max-w-6xl mx-auto px-6">
                {/* Featured project — first one takes full width */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <div
                        className="glass-card glass-card-hover rounded-2xl overflow-hidden cursor-pointer group relative"
                        onClick={() => setActiveProject(projects[0])}
                        onMouseEnter={() => setHoveredIndex(-1)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className="flex flex-col lg:flex-row">
                            <div className="lg:w-3/5 relative overflow-hidden p-6 flex items-center justify-center">
                                <div className="w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                                    <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                    </div>
                                    <img
                                        src={projects[0].image}
                                        alt={projects[0].title}
                                        className="w-full h-56 lg:h-72 object-contain bg-white transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                            <div className="lg:w-2/5 p-6 lg:p-8 flex flex-col justify-center">
                                <span className="inline-block self-start px-3 py-1 rounded-full bg-dourado-texto/10 text-dourado-texto text-xs font-semibold border border-dourado-texto/20 mb-3">
                                    {projects[0].category}
                                </span>
                                <h3 className={`text-2xl lg:text-3xl font-bold mb-3 ${isDark ? "text-white" : "text-slate-800"}`}>
                                    {projects[0].title}
                                </h3>
                                <p className={`text-sm leading-relaxed mb-5 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                                    {projects[0].description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-5">
                                    {projects[0].languages.split(",").map((lang, i) => (
                                        <span key={i} className={`px-2.5 py-1 rounded-lg ${isDark ? "bg-white/5 text-slate-300 border-white/10" : "bg-black/5 text-slate-600 border-black/10"} text-xs border font-medium`}>
                                            {lang.trim()}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center gap-3">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={(e) => { e.stopPropagation(); setActiveProject(projects[0]); }}
                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-dourado-texto to-amber-500 text-fundo-darker font-semibold text-sm shadow-lg shadow-dourado-texto/20 hover:shadow-dourado-texto/40 transition-shadow duration-300 cursor-pointer"
                                    >
                                        <Eye className="w-4 h-4" />
                                        {t("projects.viewDetails")}
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Grid for remaining projects */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {projects.slice(1).map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-30px" }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group"
                        >
                            <div
                                className="glass-card glass-card-hover rounded-2xl overflow-hidden cursor-pointer h-full flex flex-col relative"
                                onClick={() => setActiveProject(project)}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-contain bg-black/40 transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? "from-[#0a0f1a]" : "from-white"} via-transparent to-transparent opacity-60`} />
                                    
                                    {/* Overlay on hover */}
                                    <motion.div
                                        initial={false}
                                        animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                                        className="absolute inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm"
                                    >
                                        <motion.div
                                            initial={false}
                                            animate={{ scale: hoveredIndex === index ? 1 : 0.5 }}
                                            className="w-12 h-12 rounded-full bg-dourado-texto/90 flex items-center justify-center shadow-xl"
                                        >
                                            <Eye className="w-5 h-5 text-fundo-darker" />
                                        </motion.div>
                                    </motion.div>

                                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/30 text-white text-[10px] font-semibold backdrop-blur-md border border-white/10">
                                        {project.category}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="p-5 flex-1 flex flex-col">
                                    <h3 className={`text-base font-bold mb-2 ${isDark ? "text-white" : "text-slate-800"} group-hover:text-dourado-texto transition-colors duration-300`}>
                                        {project.title}
                                    </h3>
                                    <p className={`text-xs leading-relaxed line-clamp-2 mb-4 flex-1 ${isDark ? "text-slate-500" : "text-slate-500"}`}>
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {project.languages.split(",").slice(0, 3).map((lang, i) => (
                                            <span key={i} className={`px-2 py-0.5 rounded-md ${isDark ? "bg-dourado-texto/5 text-dourado-texto/70 border-dourado-texto/10" : "bg-dourado-texto/10 text-amber-700 border-dourado-texto/15"} text-[10px] border font-medium`}>
                                                {lang.trim()}
                                            </span>
                                        ))}
                                        {project.languages.split(",").length > 3 && (
                                            <span className={`px-2 py-0.5 rounded-md text-[10px] ${isDark ? "text-slate-500" : "text-slate-400"}`}>
                                                +{project.languages.split(",").length - 3}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {activeProject && (
                    <ProjectDetails project={activeProject} close={() => setActiveProject(null)} />
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
