import { motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { useLanguage } from "../../contexts/LanguageContext";

const ProjectDetails = ({ project, close }) => {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const isDark = theme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-xl bg-black/60 p-4 font-grotesk"
      onClick={close}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="glass-card rounded-2xl shadow-2xl max-w-4xl w-full flex flex-col lg:flex-row overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className="w-full lg:w-1/2 relative">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-64 lg:h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-r from-transparent ${isDark ? "to-[#0f172a]/50" : "to-white/50"} hidden lg:block`} />
          <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? "from-[#0f172a]/80" : "from-white/80"} to-transparent lg:hidden`} />
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2 p-6 md:p-8 relative flex flex-col justify-between">
          <button
            className={`absolute top-4 right-4 w-8 h-8 rounded-lg ${isDark ? "bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10" : "bg-black/5 border-black/10 text-slate-500 hover:text-slate-800 hover:bg-black/10"} border flex items-center justify-center transition-all duration-300 cursor-pointer`}
            onClick={close}
            aria-label="Fechar"
          >
            <X className="w-4 h-4" />
          </button>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full bg-dourado-texto/10 text-dourado-texto text-xs font-medium border border-dourado-texto/20">
                {project.type}
              </span>
            </div>
            <h2 className={`text-2xl font-bold mb-3 ${isDark ? "text-white" : "text-slate-800"}`}>{project.title}</h2>
            <p className={`mb-6 text-sm leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>{project.description}</p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-slate-500 w-24 flex-shrink-0">{t("projects.languages")}</span>
                <div className="flex flex-wrap gap-1.5">
                  {project.languages.split(",").map((lang, i) => (
                    <span key={i} className={`px-2 py-0.5 rounded-md ${isDark ? "bg-white/5 text-slate-300 border-white/5" : "bg-black/5 text-slate-600 border-black/5"} text-xs border`}>
                      {lang.trim()}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-slate-500 w-24 flex-shrink-0">{t("projects.platform")}</span>
                <span className={isDark ? "text-slate-300" : "text-slate-600"}>{project.platform}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-slate-500 w-24 flex-shrink-0">{t("projects.country")}</span>
                <span className={isDark ? "text-slate-300" : "text-slate-600"}>{project.country}</span>
              </div>
            </div>

            {project.url && project.url !== "Não pode ser divulgado" && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-dourado-texto to-amber-500 text-fundo-darker font-semibold text-sm hover:shadow-lg hover:shadow-dourado-texto/20 transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4" />
                {t("projects.viewProject")}
              </a>
            )}
            {project.url === "Não pode ser divulgado" && (
              <p className="text-slate-500 text-xs italic">{t("projects.privateProject")}</p>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetails;
