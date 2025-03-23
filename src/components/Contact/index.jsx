import { useState, useRef  } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { socialLinks } from "../../data/socialLinks";
import InputField from "../common/InputField";
import ContactItem from "../common/ContactItem";
import SectionTitle from "../common/SectionTitle";
import emailjs from "emailjs-com";

const Contact = () => {
    const [messageStatus, setMessageStatus] = useState(null); // Estado para exibir mensagem de feedback
    const form = useRef(null); // Referência para o formulário

    const sendEmail = (e) => {
        e.preventDefault(); 
    
        // Verificar os dados antes de enviar
        const formData = new FormData(form.current);
        for (const pair of formData.entries()) {
            console.log(pair[0] + ": " + pair[1]);
        }
    
        emailjs.sendForm(
            "service_atte6xv",
            "template_pxqn2vs",
            form.current,
            "7q2TTh_KAlVKd9mL1"
        )
        .then((response) => {
            console.log("E-mail enviado com sucesso!", response);
            setMessageStatus({ type: "success", text: "Mensagem enviada com sucesso!" });
            form.current.reset(); 
        })
        .catch((error) => {
            console.error("Erro ao enviar e-mail:", error);
            setMessageStatus({ type: "error", text: "Erro ao enviar a mensagem. Tente novamente." });
        });
    };
    

    return (
        <section id="contact" className="py-16 bg-gradient-to-r from-[#17203a] to-[#0b1120] text-white scroll-mt-26">
            <SectionTitle title="CONTATO" />

            <div className="container mx-auto px-4 md:px-16 flex flex-col md:flex-row gap-12 sm:w-full">
                <div className="w-full md:w-1/2 bg-gray-900 p-8 rounded-lg shadow-lg">
                    <h3 className="text-3xl font-semibold mb-6 text-center md:text-left">Diga Olá</h3>
                    <form ref={form} onSubmit={sendEmail}>
                        <InputField 
                            type="text" 
                            placeholder="Seu Nome" 
                            required={true} 
                            ariaLabel="Nome" 
                            name="user_name" 
                        />
                        <InputField 
                            type="email" 
                            placeholder="Seu Email" 
                            required={true} 
                            ariaLabel="Email" 
                            name="user_email" 
                        />
                        <InputField 
                            type="text" 
                            placeholder="Seu Assunto" 
                            required={true} 
                            ariaLabel="Assunto" 
                            name="user_subject" 
                        />
                        <div className="mb-5">
                            <textarea
                                required
                                placeholder="Sua Mensagem"
                                aria-label="Mensagem"
                                className="w-full resize-none text-gray-300 p-3 border border-gray-700 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-dourado-texto h-32 transition-all duration-300 hover:bg-dourado-texto-dark"
                                name="user_message"
                            ></textarea>
                        </div>
                        <div className="text-center md:text-left">
                            <button 
                                type="submit" 
                                className="bg-dourado-texto text-black px-6 py-3 rounded-md font-semibold text-lg transition-all hover:bg-dourado-texto-dark focus:outline-none active:bg-dourado-texto-dark active:scale-95"
                            >
                                Enviar mensagem
                            </button>
                        </div>
                        {messageStatus && (
                            <p 
                                className={`mt-4 text-center text-lg ${
                                    messageStatus.type === "success" ? "text-green-400" : "text-red-400"
                                }`}
                            >
                                {messageStatus.text}
                            </p>
                        )}
                    </form>
                </div>

                <div className="w-full md:w-1/2">
                    <h3 className="text-3xl font-semibold mb-6 text-center md:text-left">Informações de Contato</h3>
                    <p className="text-gray-400 mb-6 text-justify md:text-left">
                        Estou sempre aberto a novas oportunidades, colaborações e conversas! Entre em contato e vamos explorar juntos soluções inovadoras em tecnologia. Além disso, estou disponível para oferecer serviços especializados e ajudar a transformar suas ideias em realidade.
                    </p>

                    <div className="space-y-6">
                        <ContactItem
                            icon={faEnvelope}
                            title="Email"
                            content="hebert.hb.brito@gmail.com"
                        />
                        <ContactItem
                            icon={faPhone}
                            title="Telefone"
                            content="+55 (74) 99991-3867"
                        />
                        <ContactItem
                            icon={faLocationDot}
                            title="Endereço"
                            content="Juazeiro, Bahia"
                        />
                    </div>

                    <div className="mt-8 text-center md:text-left">
                        <h3 className="text-xl font-medium mb-4">Visite meu perfil e se conecte</h3>
                        <div className="flex space-x-4 justify-center md:justify-start">
                            {socialLinks.map(({ href, icon, label }, index) => (
                                <a key={index}
                                    href={href}
                                    aria-label={label}
                                    className="border-2 border-dourado-texto rounded-full w-14 h-14 flex items-center justify-center text-dourado-texto text-2xl hover:bg-dourado-texto hover:text-black transition"
                                >
                                    <FontAwesomeIcon icon={icon} className="text-xl" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
