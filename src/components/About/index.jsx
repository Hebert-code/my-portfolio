import HebertImage from '../../assets/img/principais/image.jpg';
import Buttom from '../common/Buttom';
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
                        Sou um jovem que venho do interior da Bahia, apaixonado por tecnologia e inovação. Gosto de resolver problemas e desafios do mundo real utilizando meu conhecimento. E, mesmo quando não tenho todas as respostas, corro atrás, sempre buscando evoluir e ajudar as pessoas.
                    </p>

                    <ul className="text-left inline-block space-y-3 text-gray-400 text-sm md:text-base xl:text-sm 2xl:text-[16px]">
                    {personalInfo.map((item, index) => (
                        <li key={index}>
                            <strong className="text-white">{item.label}:</strong> {item.value}
                        </li>
                    ))}
                    </ul>

                    <div className="mt-8">
                        <Buttom link={"#"} inf={"Baixar CV"}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
