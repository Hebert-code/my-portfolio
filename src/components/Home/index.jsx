import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialLinks } from "../../data/socialLinks";
import HebertImage from '../../assets/img/principais/img_1.jpg';
import Buttom from "../common/Buttom";
import { useTheme } from "../../contexts/ThemeContext";
import { useLanguage } from "../../contexts/LanguageContext";

const Home = () => {
    const { theme } = useTheme();
    const { t } = useLanguage();
    const isDark = theme === "dark";
    const roles = t("hero.roles");

    const [displayText, setDisplayText] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        setDisplayText("");
        setCharIndex(0);
        setIsDeleting(false);
        setRoleIndex(0);
    }, [roles]);

    useEffect(() => {
        if (!Array.isArray(roles) || roles.length === 0) return;
        const currentRole = roles[roleIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setDisplayText(currentRole.slice(0, charIndex + 1));
                setCharIndex(charIndex + 1);
                if (charIndex + 1 === currentRole.length) {
                    setTimeout(() => setIsDeleting(true), 1800);
                }
            } else {
                setDisplayText(currentRole.slice(0, charIndex - 1));
                setCharIndex(charIndex - 1);
                if (charIndex - 1 === 0) {
                    setIsDeleting(false);
                    setRoleIndex((roleIndex + 1) % roles.length);
                }
            }
        }, isDeleting ? 40 : 80);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, roleIndex, roles]);

    const containerVariants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <div id="home" className="scroll-mt-26 relative min-h-screen hero-mesh bg-fundo flex items-center px-6 xl:px-12 pt-20 xl:pt-24 overflow-hidden">
            
            {/* Decorative elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-dourado-texto/5 rounded-full blur-3xl animate-blob" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-blob" style={{ animationDelay: "2s" }} />
            <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
            
            <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between relative z-[11] gap-12">
                
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="w-full xl:w-1/2 text-center xl:text-left"
                >
                    <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dourado-texto/10 border border-dourado-texto/20 mb-6">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-dourado-texto text-sm font-medium">{t("hero.badge")}</span>
                    </motion.div>

                    <motion.h3 variants={itemVariants} className={`${isDark ? "text-slate-400" : "text-slate-500"} text-lg sm:text-xl mb-3 font-light`}>
                        {t("hero.greeting")}
                    </motion.h3>

                    <motion.h1 variants={itemVariants} className={`font-extrabold text-5xl sm:text-6xl xl:text-7xl mb-4 leading-[1.1] ${isDark ? "text-white" : "text-slate-800"}`}>
                        Hebert
                        <br />
                        <span className="text-gradient-gold">Henrique</span>
                    </motion.h1>

                    <motion.h2 variants={itemVariants} className={`${isDark ? "text-slate-400" : "text-slate-500"} font-light mb-8 text-xl sm:text-2xl xl:text-3xl h-[1.5em]`}>
                        {displayText}
                        <span className="inline-block w-[3px] h-[1em] bg-dourado-texto ml-1 align-middle" style={{ animation: "typewriter-cursor 0.8s infinite" }} />
                    </motion.h2>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center sm:gap-6 gap-4">
                        <Buttom Link={"#contact"} inf={t("hero.cta")} />
                        <div className="flex gap-3">
                            {socialLinks.map(({href, icon, label}, index) => (
                                <motion.a
                                    key={index}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    whileHover={{ scale: 1.15, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`w-11 h-11 rounded-xl glass-card flex items-center justify-center ${isDark ? "text-slate-400" : "text-slate-500"} hover:text-dourado-texto hover:border-dourado-texto/30 transition-colors duration-300`}
                                >
                                    <FontAwesomeIcon icon={icon} className="text-lg" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Hero image - desktop only */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="hidden xl:flex w-[45%] justify-center items-center relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-dourado-texto/20 to-purple-500/10 rounded-3xl blur-3xl scale-75 animate-pulse-glow" />
                    <div className="relative">
                        <div className="w-[400px] h-[500px] rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-black/40">
                            <img
                                src={HebertImage}
                                alt="Foto de Hebert"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border border-dourado-texto/20 -z-10" />
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs text-slate-500 tracking-widest uppercase">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className={`w-5 h-8 rounded-full border-2 ${isDark ? "border-slate-600" : "border-slate-300"} flex justify-center pt-1.5`}
                >
                    <div className="w-1 h-1.5 rounded-full bg-dourado-texto" />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Home;
