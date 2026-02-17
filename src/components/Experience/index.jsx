import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import { experiences } from "../../data/experienceData";
import { useTheme } from "../../contexts/ThemeContext";
import { useLanguage } from "../../contexts/LanguageContext";

const Experience = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const isDark = theme === "dark";

  return (
    <section id="experience" className="relative bg-fundo py-24 px-4 font-grotesk scroll-mt-26 overflow-hidden">
      
      <div className="absolute top-0 left-0 right-0 section-divider" />
      
      <SectionTitle title={t("experience.title")} />

      <div className="max-w-4xl mx-auto relative">
        {/* Timeline line - hidden on mobile */}
        <div className="timeline-line hidden md:block" />

        <div className="space-y-12 md:space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="timeline-dot hidden md:block" style={{ top: "50%" }} />
              
              {/* Card */}
              <div className={`w-full md:w-[calc(50%-40px)] ${index % 2 === 0 ? "md:text-right" : ""}`}>
                <div className="glass-card glass-card-hover rounded-2xl p-6 relative">
                  <div className="flex items-start gap-4">
                    {exp.image && (
                      <img 
                        src={exp.image} 
                        alt={exp.company} 
                        className="w-12 h-12 rounded-xl object-cover ring-1 ring-white/10 flex-shrink-0"
                      />
                    )}
                    <div className="flex-1">
                      <span className="inline-block px-3 py-1 rounded-full bg-dourado-texto/10 text-dourado-texto text-xs font-semibold border border-dourado-texto/20 mb-2">
                        {exp.year}
                      </span>
                      <h3 className={`text-lg font-bold mb-1 ${isDark ? "text-white" : "text-slate-800"}`}>{exp.title}</h3>
                      <h4 className="text-dourado-texto/80 text-sm font-medium mb-3">{exp.company}</h4>
                      <p className={`text-sm leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>{exp.description}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Spacer for the opposite side */}
              <div className="hidden md:block w-[calc(50%-40px)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
