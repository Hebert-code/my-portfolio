import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialLinks } from "../../data/socialLinks";
import HebertImage from '../../assets/img/principais/img_1.jpg';
import Buttom from "../common/Buttom";

const Home = () => {
    return (
        <div id="home" className="scroll-mt-26 relative min-h-screen bg-gradient-to-l from-[#0b1120] to-[#17203a] flex items-center px-6 xl:px-9 pt-12 xl:pt-24">
            <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between relative z-[11] space-y-10 xl:space-y-0">
                
                <div className="w-full lg:w-1/2 text-center xl:text-left px-3.5 xl:pr-12 ">
                    <div className="flex items-center xl:items-start flex-col xl:flex-col">
                        <h3 className="text-dourado-texto text-lg sm:text-xl xl:text-2xl mb-2.5 font-light">
                            Olá, eu sou
                        </h3>
                        <h1 className="font-extrabold text-4xl sm:text-6xl xl:text-7xl mb-6 leading-none text-white">
                            Hebert
                            <br />
                            Henrique
                        </h1>
                        <h2 className="text-texto-secundario font-light mb-8 text-xl sm:text-2xl xl:text-3xl">
                            Desenvolvedor de Software
                        </h2>

                        <div className="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-4 sm:space-y-0">
                            <Buttom Link={"#contact"} inf={"Entre em Contato"} />
                            <div className="flex space-x-4">
                                {socialLinks.map(({href, icon, label}, index) => (
                                    <a  key={index}
                                        href={href}
                                        aria-label={label}
                                        className="text-dourado-texto flex items-center justify-center w-10 h-10 border-2 border-dourado-texto rounded-full transition-all duration-300 hover:bg-dourado-texto hover:text-black"
                                    >
                                        <FontAwesomeIcon icon={icon} className="text-xl" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute right-[4%] top-0 h-full w-[45%] z-10 hidden md:hidden xl:block">
                <img src={HebertImage} alt="Foto de Hebert" className="h-full w-full object-cover"/>
            </div>
        </div>
    );
};

export default Home;
