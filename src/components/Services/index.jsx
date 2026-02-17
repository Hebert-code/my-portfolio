import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import { services } from "../../data/services";

const Services = () => {
    return (
        <section id="services" className="relative scroll-mt-26 bg-fundo py-24 font-grotesk overflow-hidden">
            
            <div className="absolute top-0 left-0 right-0 section-divider" />
            
            <SectionTitle title="SERVIÇOS" />

            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-30px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="glass-card glass-card-hover rounded-2xl overflow-hidden group"
                        >
                            {/* Image section */}
                            <div className="relative h-36 overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/60 to-transparent" />
                                <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-dourado-texto to-amber-500 flex items-center justify-center text-2xl shadow-lg shadow-dourado-texto/30">
                                    {service.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <h3 className="text-white text-lg font-bold mb-2">{service.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-4">{service.description}</p>
                                
                                {/* Rating bar */}
                                <div className="space-y-1.5">
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs text-slate-500">Proficiência</span>
                                        <span className="text-xs text-dourado-texto font-semibold">{Math.round(service.rating * 20)}%</span>
                                    </div>
                                    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${service.rating * 20}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                                            className="h-full rounded-full bg-gradient-to-r from-dourado-texto to-amber-400"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;