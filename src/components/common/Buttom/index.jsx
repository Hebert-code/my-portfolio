import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Button = ({ Link, inf, className = "" }) => {
    return (
        <motion.a
            href={Link}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className={`group relative inline-flex items-center gap-2 bg-gradient-to-r from-dourado-texto to-amber-500 text-fundo-darker py-3 px-7 rounded-full text-base font-bold transition-all duration-300 shadow-lg shadow-dourado-texto/20 hover:shadow-dourado-texto/40 ${className}`}
        >
            {inf}
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </motion.a>
    );
};

export default Button;
