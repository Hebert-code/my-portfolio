import { FaArrowRight} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useState, useRef } from "react";
import { projects } from "../../data/projects";
import ProjectDetails from "../ProjectDetails"; 
import SectionTitle from "../common/SectionTitle";
import SwiperNavigation from "../common/SwiperNavigation";


const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const swiperRef = useRef(null);
  const [zoomedImage, setZoomedImage] = useState(null);


  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();

  return (
    <section id="projects" className=" scroll-mt-26 block bg-gradient-to-br from-[#07233b] to-[#040c16] py-16 font-grotesk">
      
      <SectionTitle title={"PROJETOS"}/>
      
      <div className="container mx-auto px-6 xl:px-12 relative">
        <Swiper 
          slidesPerView={1}
          spaceBetween={30} 
          loop={true}
          pagination={{ clickable: true }} 
          modules={[Pagination]} 
          className="mySwiper"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white text-black rounded-2xl overflow-hidden shadow-lg relative group max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover p-2 rounded-4xl transition-transform duration-300 group-hover:opacity-80 cursor-pointer"
                  onClick={() => setZoomedImage(project.image)}
                />
                <div className="p-4 flex justify-between items-center">
                  <div className="p-4">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <p className="text-gray-600">{project.category}</p>
                  </div>
                  <div className="flex justify-end">
                    <button 
                      className="bg-dourado-texto text-white p-3 rounded-full transition-all duration-300 transform hover:scale-150 cursor-pointer"
                      onClick={() => setExpandedProject(project)}
                    >
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <SwiperNavigation onPrev={handlePrev} onNext={handleNext}/>

      </div>

      {expandedProject && (
        <ProjectDetails 
          project={expandedProject} 
          close={() => setExpandedProject(null)}
        />
      )}

      {zoomedImage && (
        <div 
          className="fixed inset-0 backdrop-blur-lg bg-black/50 flex justify-center items-center z-50"
          onClick={() => setZoomedImage(null)}
        >
          <img src={zoomedImage} alt="Zoomed" className="max-w-3/4 max-h-3/4 rounded-lg shadow-lg" />
        </div>
      )}
    </section>
  );
};

export default Projects;
