import { motion } from "framer-motion";
import HebertImage from '../../assets/img/principais/img_2.jpg';
import SectionTitle from '../common/SectionTitle';
import { Download } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { useLanguage } from "../../contexts/LanguageContext";

const infoKeys = ["birthday", "phone", "email", "from", "living", "education", "language", "availability"];
const infoValues = ["16 de Set, 2003", "+55 (74) 99991-3867", "hebert.hb.brito@gmail.com", "Jussara - BA", "Juazeiro - BA", "Eng. da Computação - UNIVASF", "Português (Nativo), Inglês (Básico)", "Remoto / Presencial"];

const About = () => {
    const { theme } = useTheme();
    const { t } = useLanguage();
    const isDark = theme === "dark";

    return (
        <section id="about" className="relative bg-fundo py-24 xl:py-28 font-grotesk scroll-mt-26 overflow-hidden">
            
            <div className="absolute top-0 left-0 right-0 section-divider" />
            
            <SectionTitle title={t("about.title")} />

            <div className="flex flex-col md:flex-row items-center md:items-start max-w-6xl mx-auto px-6 md:px-12 lg:px-20 gap-12">
                
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="w-full md:w-5/12 flex justify-center"
                >
                    <div className="relative group">
                        <div className="absolute -inset-2 bg-gradient-to-br from-dourado-texto/20 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10">
                            <img 
                                src={HebertImage} 
                                alt="Foto de Hebert" 
                                className="w-full max-w-sm h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-fundo/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="w-full md:w-7/12"
                >
                    <h2 className={`text-3xl md:text-4xl font-bold mb-2 ${isDark ? "text-white" : "text-slate-800"}`}>
                        {t("about.hello")} <span className="text-gradient-gold">Hebert Henrique</span>
                    </h2>
                    <h4 className="text-dourado-texto/80 font-light text-lg md:text-xl mb-6">
                        {t("about.subtitle")}
                    </h4>
                    <p className={`${isDark ? "text-slate-400" : "text-slate-600"} leading-relaxed mb-8 text-base text-justify`}>
                        {t("about.bio")}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                        {infoKeys.map((key, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="glass-card rounded-xl px-4 py-3 flex flex-col"
                            >
                                <span className="text-dourado-texto text-xs font-semibold uppercase tracking-wider">{t(`about.info.${key}`)}</span>
                                <span className={`text-sm mt-0.5 ${isDark ? "text-slate-300" : "text-slate-700"}`}>{infoValues[i]}</span>
                            </motion.div>
                        ))}
                    </div>

                    <motion.a
                        href="/Curriculo.pdf"
                        download
                        whileHover={{ scale: 1.03, x: 4 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-dourado-texto to-amber-500 text-fundo-darker px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-dourado-texto/20 hover:shadow-dourado-texto/40 transition-shadow duration-300"
                    >
                        <Download className="w-4 h-4" />
                        {t("about.download")}
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
