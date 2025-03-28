import HebertImage from '../../assets/img/principais/img_2.jpg';
import SectionTitle from '../common/SectionTitle';
import { personalInfo } from "../../data/personalInfo";

const About = () => {
    return (
        <section id="about" className="block bg-gradient-to-r from-[#0b1120] to-[#17203a] py-16 xl:py-20 xl:min-h-screen font-grotesk scroll-mt-26">
        
            <SectionTitle title="SOBRE MIM"/>
            
            <div className='md:h-7'></div>
            
            <div className="flex flex-col md:flex-row items-center md:items-start max-w-6xl mx-auto px-6 md:px-12 lg:px-20 gap-10">
                
                <div className="w-full md:w-1/2 flex justify-center">
                    <img 
                        src={HebertImage} 
                        alt="Foto de Hebert" 
                        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-4xl h-auto rounded-lg shadow-lg"
                    />
                </div>

                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-white font-semibold text-3xl md:text-4xl xl:text-3xl 2xl:text-5xl mb-4">
                        Olá! Eu sou <span className="text-dourado-texto">Hebert Henrique</span>
                    </h2>
                    <h4 className="text-dourado-texto font-light text-xl md:text-2xl xl:text-2xl 2xl:text-3xl mb-4">
                        Desenvolvedor de Software
                    </h4>
                    <p className="text-gray-300 leading-relaxed mb-6 text-base md:text-lg xl:text-[16px] 2xl:text-lg text-justify">
                        Sou um entusiasta da tecnologia e da inovação, vindo do interior da Bahia, movido pela curiosidade e pela vontade de transformar desafios em soluções. Minha paixão está em resolver problemas do mundo real por meio da tecnologia, sempre aprendendo, evoluindo e buscando impactar positivamente a vida das pessoas. Mesmo quando não tenho todas as respostas, persisto, estudo e encontro caminhos para fazer a diferença.
                    </p>

                    <ul className="text-left inline-block space-y-3 text-gray-400 text-sm md:text-base xl:text-sm 2xl:text-[16px]">
                    {personalInfo.map((item, index) => (
                        <li key={index}>
                            <strong className="text-white">{item.label}:</strong> {item.value}
                        </li>
                    ))}
                    </ul>

                    <div className="mt-8">
                        <a
                            href="/Hebert.pdf"
                            download
                            className="bg-dourado-texto text-backgroud-buttom py-2 px-6 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 hover:bg-[#e0a931]"
                        >
                            Baixar CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
