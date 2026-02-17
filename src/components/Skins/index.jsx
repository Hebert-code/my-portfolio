import { FaPython, FaDocker, FaJava, FaGitAlt, FaReact, FaNodeJs, FaPhp, FaLaravel } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import { SiSwift, SiFigma, SiHtml5, SiCss3, SiJavascript, SiTypescript, SiBootstrap, SiTailwindcss, SiC, SiCplusplus, SiPostgresql, SiMysql, SiReact, SiGraphql, SiOpenai } from "react-icons/si";
import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import { useTheme } from "../../contexts/ThemeContext";
import { useLanguage } from "../../contexts/LanguageContext";

const categoryKeys = ["backend", "frontend", "infra", "database", "tools", "languages"];

const skillsByCategory = {
  backend: [
    { name: "Laravel", icon: <FaLaravel />, color: "#FF2D20" },
    { name: "Django", icon: <DiDjango />, color: "#44B78B" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#68A063" },
    { name: "GraphQL", icon: <SiGraphql />, color: "#E535AB" },
    { name: "PHP", icon: <FaPhp />, color: "#8993BE" },
  ],
  frontend: [
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
    { name: "React Native", icon: <SiReact />, color: "#61DAFB" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F0DB4F" },
    { name: "TailwindCSS", icon: <SiTailwindcss />, color: "#38BDF8" },
    { name: "HTML", icon: <SiHtml5 />, color: "#E44D26" },
    { name: "CSS", icon: <SiCss3 />, color: "#2965F1" },
    { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" },
    { name: "Swift", icon: <SiSwift />, color: "#FA7343" },
  ],
  infra: [
    { name: "Docker", icon: <FaDocker />, color: "#2496ED" },
    { name: "LLMs / IA", icon: <SiOpenai />, color: "#10A37F" },
  ],
  database: [
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
    { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
  ],
  tools: [
    { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
    { name: "Figma", icon: <SiFigma />, color: "#A259FF" },
  ],
  languages: [
    { name: "Python", icon: <FaPython />, color: "#FFD43B" },
    { name: "Java", icon: <FaJava />, color: "#ED8B00" },
    { name: "C", icon: <SiC />, color: "#5C6BC0" },
    { name: "C++", icon: <SiCplusplus />, color: "#00599C" },
  ],
};

const Skills = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const isDark = theme === "dark";

  return (
    <section id="skills" className="relative bg-fundo py-24 font-grotesk scroll-mt-26 overflow-hidden">
      
      <div className="absolute top-0 left-0 right-0 section-divider" />
      
      <SectionTitle title={t("skills.title")} />

      <div className="space-y-16 px-6 max-w-6xl mx-auto">
        {categoryKeys.map((catKey, catIndex) => (
          <motion.div
            key={catKey}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            className="text-center"
          >
            <h2 className={`${isDark ? "text-white" : "text-slate-800"} text-lg font-semibold mb-6 tracking-wide`}>
              <span className="text-dourado-texto">— </span>
              {t(`skills.categories.${catKey}`)}
              <span className="text-dourado-texto"> —</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {skillsByCategory[catKey].map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIndex * 0.1 + idx * 0.05 }}
                  whileHover={{ y: -6, scale: 1.05 }}
                  className="glass-card glass-card-hover rounded-2xl p-5 w-28 h-28 flex flex-col items-center justify-center gap-2 group cursor-default"
                >
                  <div
                    className="text-4xl transition-all duration-300 group-hover:drop-shadow-lg"
                    style={{ color: skill.color, filter: `drop-shadow(0 0 0px ${skill.color}00)` }}
                    onMouseEnter={(e) => e.currentTarget.style.filter = `drop-shadow(0 0 12px ${skill.color}80)`}
                    onMouseLeave={(e) => e.currentTarget.style.filter = `drop-shadow(0 0 0px ${skill.color}00)`}
                  >
                    {skill.icon}
                  </div>
                  <span className={`text-xs font-medium ${isDark ? "text-slate-400 group-hover:text-white" : "text-slate-500 group-hover:text-slate-800"} transition-colors duration-300`}>
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;