import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialLinks } from "../../data/socialLinks";
import { ArrowUp } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { useLanguage } from "../../contexts/LanguageContext";

const sectionIds = ["home", "about", "skills", "experience", "projects", "contact"];

const Footerp = () => {
    const { theme } = useTheme();
    const { t } = useLanguage();
    const isDark = theme === "dark";

    return (
        <footer className={`relative ${isDark ? "bg-fundo-darker" : "bg-slate-100"} pt-16 pb-8 font-grotesk`}>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dourado-texto/30 to-transparent" />
            
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 mb-12">
                    
                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <h2 className={`text-2xl font-bold mb-2 ${isDark ? "text-white" : "text-slate-800"}`}>
                            Hebert<span className="text-dourado-texto">.</span>
                        </h2>
                        <p className="text-slate-500 text-sm max-w-xs">
                            {t("footer.tagline")}
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="flex flex-wrap justify-center gap-6">
                        {sectionIds.map((id) => (
                            <a
                                key={id}
                                href={`#${id}`}
                                className="text-slate-500 text-sm hover:text-dourado-texto transition-colors duration-300"
                            >
                                {t(`footer.nav.${id}`)}
                            </a>
                        ))}
                    </div>

                    {/* Social */}
                    <div className="flex gap-3">
                        {socialLinks.map(({ href, icon, label }, index) => (
                            <a
                                key={index}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className={`w-10 h-10 rounded-lg ${isDark ? "bg-white/5 border-white/5" : "bg-black/5 border-black/5"} border flex items-center justify-center text-slate-500 hover:text-dourado-texto hover:border-dourado-texto/20 transition-all duration-300`}
                            >
                                <FontAwesomeIcon icon={icon} className="text-sm" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className={`h-px ${isDark ? "bg-white/5" : "bg-black/5"} mb-6`} />

                {/* Bottom */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className={`text-xs ${isDark ? "text-slate-600" : "text-slate-400"}`}>
                        © 2025 Hebert Henrique. {t("footer.rights")}
                    </p>
                    <a
                        href="#home"
                        className={`w-9 h-9 rounded-lg ${isDark ? "bg-white/5 border-white/5" : "bg-black/5 border-black/5"} border flex items-center justify-center text-slate-500 hover:text-dourado-texto hover:border-dourado-texto/20 transition-all duration-300`}
                        aria-label={t("footer.backToTop")}
                    >
                        <ArrowUp className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footerp;
