import SectionTitle from "../common/SectionTitle";
import { services } from "../../data/services";

const Services = () => {
    return (
        <section id="services" className=" scroll-mt-26 block bg-gradient-to-r from-[#0b1120] to-[#17203a] py-16 xl:min-h-screen font-grotesk">

            <SectionTitle title="SERVIÇOS"/>

            <div className='md:h-4'></div>

            <div className="container mx-auto">

                <div className="grid grid-cols-1 m-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ">
                    {services.map((service, index) => (
                        <div 
                            key={index} 
                            className="relative bg-cover bg-center rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105" 
                            style={{ backgroundImage: `url(${service.image})`}}
                        >
                            
                            <div className="absolute inset-0 bg-black/85"></div>
                            
                            <div className="absolute top-4 left-4 bg-blue-500 text-white text-xl p-2 rounded-lg">
                                {service.icon}
                            </div>

                            <div className="relative p-6 mt-24 " >
                                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                                <p className="text-gray-300 text-sm text-justify">{service.description}</p>

                                
                                <div className="flex mt-3">
                                    {Array.from({ length: 5 }, (_, i) => (
                                        <span key={i} className={`text-yellow-400 text-lg ${i + 1 > service.rating ? "opacity-50" : ""}`}>
                                            ★
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;