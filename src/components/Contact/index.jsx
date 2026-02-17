import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { socialLinks } from "../../data/socialLinks";
import InputField from "../common/InputField";
import ContactItem from "../common/ContactItem";
import SectionTitle from "../common/SectionTitle";
import emailjs from "emailjs-com";
import { Send, Loader2 } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { useLanguage } from "../../contexts/LanguageContext";

const Contact = () => {
    const [messageStatus, setMessageStatus] = useState(null);
    const [isSending, setIsSending] = useState(false);
    const form = useRef(null);
    const { theme } = useTheme();
    const { t } = useLanguage();
    const isDark = theme === "dark";

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);
        setMessageStatus(null);

        emailjs.sendForm(
            "service_atte6xv",
            "template_pxqn2vs",
            form.current,
            "7q2TTh_KAlVKd9mL1"
        )
        .then(() => {
            setMessageStatus({ type: "success", text: t("contact.success") });
            form.current.reset();
        })
        .catch(() => {
            setMessageStatus({ type: "error", text: t("contact.error") });
        })
        .finally(() => {
            setIsSending(false);
        });
    };

    return (
        <section id="contact" className="relative py-24 bg-fundo text-white scroll-mt-26 overflow-hidden">
            
            <div className="absolute top-0 left-0 right-0 section-divider" />
            
            <SectionTitle title={t("contact.title")} />

            <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-12">
                
                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="w-full lg:w-1/2"
                >
                    <div className="glass-card rounded-2xl p-8">
                        <h3 className={`text-2xl font-bold mb-2 ${isDark ? "text-white" : "text-slate-800"}`}>{t("contact.heading")}</h3>
                        <p className={`text-sm mb-6 ${isDark ? "text-slate-500" : "text-slate-500"}`}>{t("contact.subtitle")}</p>
                        <form ref={form} onSubmit={sendEmail}>
                            <InputField type="text" placeholder={t("contact.name")} required={true} ariaLabel="Nome" name="user_name" />
                            <InputField type="email" placeholder={t("contact.email")} required={true} ariaLabel="Email" name="user_email" />
                            <InputField type="text" placeholder={t("contact.subject")} required={true} ariaLabel="Assunto" name="user_subject" />
                            <div className="mb-5">
                                <textarea
                                    required
                                    placeholder={t("contact.message")}
                                    aria-label="Mensagem"
                                    className={`w-full resize-none p-4 border rounded-xl focus:outline-none input-glow transition-all duration-300 h-32 ${
                                        isDark
                                            ? "text-slate-200 bg-white/5 border-white/10 placeholder:text-slate-500 hover:border-white/20"
                                            : "text-slate-700 bg-black/5 border-black/10 placeholder:text-slate-400 hover:border-black/20"
                                    }`}
                                    name="user_message"
                                ></textarea>
                            </div>
                            <motion.button
                                type="submit"
                                disabled={isSending}
                                whileHover={{ scale: isSending ? 1 : 1.03 }}
                                whileTap={{ scale: isSending ? 1 : 0.97 }}
                                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-dourado-texto to-amber-500 text-fundo-darker py-3.5 px-6 rounded-xl font-bold text-base shadow-lg shadow-dourado-texto/20 hover:shadow-dourado-texto/40 transition-shadow duration-300 disabled:opacity-70 cursor-pointer"
                            >
                                {isSending ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        {t("contact.sending")}
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        {t("contact.send")}
                                    </>
                                )}
                            </motion.button>
                            {messageStatus && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`mt-4 text-center text-sm font-medium ${
                                        messageStatus.type === "success" ? "text-green-400" : "text-red-400"
                                    }`}
                                >
                                    {messageStatus.text}
                                </motion.p>
                            )}
                        </form>
                    </div>
                </motion.div>

                {/* Contact info */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full lg:w-1/2 flex flex-col justify-between"
                >
                    <div>
                        <h3 className={`text-2xl font-bold mb-2 ${isDark ? "text-white" : "text-slate-800"}`}>{t("contact.infoTitle")}</h3>
                        <p className={`text-sm mb-8 ${isDark ? "text-slate-500" : "text-slate-500"}`}>
                            {t("contact.infoSubtitle")}
                        </p>

                        <div className="space-y-4 mb-8">
                            <ContactItem icon={faEnvelope} title={t("contact.emailLabel")} content="hebert.hb.brito@gmail.com" />
                            <ContactItem icon={faPhone} title={t("contact.phoneLabel")} content="+55 (74) 99991-3867" />
                            <ContactItem icon={faLocationDot} title={t("contact.locationLabel")} content="Juazeiro, Bahia" />
                        </div>
                    </div>

                    <div>
                        <h3 className={`text-sm font-semibold mb-4 uppercase tracking-wider ${isDark ? "text-slate-400" : "text-slate-500"}`}>{t("contact.connect")}</h3>
                        <div className="flex gap-3">
                            {socialLinks.map(({ href, icon, label }, index) => (
                                <motion.a
                                    key={index}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`w-12 h-12 rounded-xl glass-card flex items-center justify-center ${isDark ? "text-slate-400" : "text-slate-500"} hover:text-dourado-texto hover:border-dourado-texto/30 transition-colors duration-300`}
                                >
                                    <FontAwesomeIcon icon={icon} className="text-lg" />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
