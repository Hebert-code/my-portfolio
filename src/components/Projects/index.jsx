import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import { projects } from "../../data/projects";
import ProjectDetails from "../ProjectDetails";
import SwiperNavigation from "../common/SwiperNavigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useTheme } from "../../contexts/ThemeContext";
import { useLanguage } from "../../contexts/LanguageContext";

const Projects = () => {
    const [activeProject, setActiveProject] = useState(null);
    const { theme } = useTheme();
    const { t } = useLanguage();
    const isDark = theme === "dark";

    return (
        <section id="projects" className="relative bg-fundo py-24 font-grotesk scroll-mt-26 overflow-hidden">

            <div className="absolute top-0 left-0 right-0 section-divider" />

            <SectionTitle title={t("projects.title")} />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={24}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="mySwiper pb-14"
                >
                    {projects.map((project, index) => (
                        <SwiperSlide key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -6 }}
                                className="glass-card glass-card-hover rounded-2xl overflow-hidden group cursor-pointer h-full"
                                onClick={() => setActiveProject(project)}
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? "from-[#0a0f1a]" : "from-white"} via-transparent to-transparent`} />
                                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-dourado-texto/10 text-dourado-texto text-[10px] font-semibold border border-dourado-texto/20 backdrop-blur-sm">
                                        {project.category}
                                    </span>
                                </div>
                                <div className="p-5">
                                    <h3 className={`text-lg font-bold mb-2 ${isDark ? "text-white" : "text-slate-800"}`}>{project.title}</h3>
                                    <p className={`text-sm leading-relaxed line-clamp-2 mb-3 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {project.languages.split(",").map((lang, i) => (
                                            <span key={i} className={`px-2 py-0.5 rounded-md ${isDark ? "bg-white/5 text-slate-400 border-white/5" : "bg-black/5 text-slate-500 border-black/5"} text-[10px] border`}>
                                                {lang.trim()}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                    <SwiperNavigation />
                </Swiper>
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
