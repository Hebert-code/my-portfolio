import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useTheme } from "../../../contexts/ThemeContext";

const ContactItem = ({ icon, title, content }) => {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-5 glass-card rounded-xl p-5 glass-card-hover"
        >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-dourado-texto/20 to-amber-600/10 flex items-center justify-center flex-shrink-0 border border-dourado-texto/20">
                <FontAwesomeIcon icon={icon} className="text-dourado-texto w-6 h-6" />
            </div>
            <div>
                <h4 className={`font-semibold text-base ${isDark ? "text-white" : "text-slate-800"}`}>{title}</h4>
                <p className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}>{content}</p>
            </div>
        </motion.div>
    );
};

export default ContactItem;
