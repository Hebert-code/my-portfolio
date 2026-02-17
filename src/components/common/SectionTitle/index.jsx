import { motion } from "framer-motion";
import { useTheme } from "../../../contexts/ThemeContext";

const SectionTitle = ({ title }) => {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex flex-col items-center mb-16"
        >
            <div className="flex items-center gap-4 mb-3">
                <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-dourado-texto/50"></div>
                <h4 className="text-dourado-texto uppercase font-semibold text-sm tracking-[4px] relative z-10">
                    {title}
                </h4>
                <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-dourado-texto/50"></div>
            </div>
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="h-[2px] w-16 bg-gradient-to-r from-dourado-texto to-amber-600 rounded-full"
            />
            <h1 className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap ${isDark ? "text-white/[0.03]" : "text-black/[0.03]"} font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] leading-none max-w-full select-none pointer-events-none`}>
                {title}
            </h1>
        </motion.div>
    );
};

export default SectionTitle;