import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Globe } from "lucide-react";
import logo from "../../assets/img/principais/logo.jpg";
import Buttom from "../common/Buttom";
import { useTheme } from "../../contexts/ThemeContext";
import { useLanguage } from "../../contexts/LanguageContext";

const sectionIds = ["home", "about", "skills", "experience", "projects", "contact"];

const Navbar = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useLanguage();

  const menuItems = sectionIds.map((id) => ({
    id,
    label: t(`nav.${id}`),
  }));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickFora = (event) => {
      if (!event.target.closest(".menu-container")) {
        setMenuAberto(false);
      }
    };
    if (menuAberto) {
      document.addEventListener("click", handleClickFora);
    }
    return () => document.removeEventListener("click", handleClickFora);
  }, [menuAberto]);

  const isDark = theme === "dark";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? `${isDark ? "bg-fundo/80" : "bg-white/80"} backdrop-blur-xl shadow-lg ${isDark ? "shadow-black/20" : "shadow-black/5"} py-3`
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 xl:px-8">
        
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative">
            <img src={logo} alt="Logo" className="w-11 h-11 rounded-full ring-2 ring-dourado-texto/30 group-hover:ring-dourado-texto/60 transition-all duration-300" />
            <div className="absolute inset-0 rounded-full bg-dourado-texto/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <span className={`text-lg font-bold tracking-wide ${isDark ? "text-white" : "text-slate-800"}`}>
            Hebert<span className="text-dourado-texto">.</span>
          </span>
        </a>

        <ul className="hidden xl:flex items-center gap-1">
          {menuItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`relative px-4 py-2 text-xs font-medium tracking-[2px] uppercase transition-all duration-300 rounded-full ${
                  activeSection === item.id
                    ? "text-dourado-texto"
                    : `${isDark ? "text-slate-400 hover:text-white" : "text-slate-500 hover:text-slate-800"}`
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-dourado-texto/10 rounded-full border border-dourado-texto/20"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden xl:flex items-center gap-3">
          {/* Language toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleLang}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold tracking-wide transition-all duration-300 cursor-pointer ${
              isDark
                ? "bg-white/5 border border-white/10 text-slate-300 hover:text-dourado-texto hover:border-dourado-texto/30"
                : "bg-black/5 border border-black/10 text-slate-600 hover:text-dourado-texto hover:border-dourado-texto/30"
            }`}
            aria-label="Toggle language"
          >
            <Globe className="w-3.5 h-3.5" />
            {lang === "pt" ? "EN" : "PT"}
          </motion.button>

          {/* Theme toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className={`w-9 h-9 flex items-center justify-center rounded-xl transition-all duration-300 cursor-pointer ${
              isDark
                ? "bg-white/5 border border-white/10 text-slate-300 hover:text-dourado-texto hover:border-dourado-texto/30"
                : "bg-black/5 border border-black/10 text-slate-600 hover:text-dourado-texto hover:border-dourado-texto/30"
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </motion.button>

          <Buttom Link={"#contact"} inf={t("nav.cta")} />
        </div>

        <div className="xl:hidden flex items-center gap-2">
          {/* Mobile language */}
          <button
            onClick={toggleLang}
            className={`text-xs font-bold px-2.5 py-1.5 rounded-lg cursor-pointer ${
              isDark ? "bg-white/5 text-slate-300" : "bg-black/5 text-slate-600"
            }`}
          >
            {lang === "pt" ? "EN" : "PT"}
          </button>
          {/* Mobile theme */}
          <button
            onClick={toggleTheme}
            className={`w-9 h-9 flex items-center justify-center rounded-lg cursor-pointer ${
              isDark ? "bg-white/5 text-slate-300" : "bg-black/5 text-slate-600"
            }`}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          {/* Mobile menu hamburger */}
          <button
            className={`w-10 h-10 flex items-center justify-center rounded-xl glass menu-container cursor-pointer ${isDark ? "text-white" : "text-slate-700"}`}
            onClick={() => setMenuAberto(!menuAberto)}
            aria-label="Menu"
          >
            <FontAwesomeIcon icon={menuAberto ? faTimes : faBars} className="w-5 h-5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuAberto && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="xl:hidden overflow-hidden menu-container"
          >
            <div className={`${isDark ? "bg-fundo/95 border-white/5" : "bg-white/95 border-black/5"} backdrop-blur-xl border-t px-6 py-6`}>
              <ul className="flex flex-col gap-2">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <a
                      href={`#${item.id}`}
                      className={`block py-3 px-4 rounded-xl text-sm font-medium tracking-widest uppercase transition-all duration-300 ${
                        activeSection === item.id
                          ? "text-dourado-texto bg-dourado-texto/10"
                          : `${isDark ? "text-slate-400 hover:text-white hover:bg-white/5" : "text-slate-500 hover:text-slate-800 hover:bg-black/5"}`
                      }`}
                      onClick={() => setMenuAberto(false)}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
