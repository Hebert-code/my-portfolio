import React from "react";
import SectionTitle from "../common/SectionTitle";
import { experiences } from "../../data/experienceData";

const Experience = () => {
  return (
    <section id="experience" className="block bg-gradient-to-r from-[#0b1120] to-[#17203a] py-16 px-4 font-grotesk scroll-mt-26">
      <SectionTitle  title="EXPERIÊNCIA"/>

      <div className="h-9"></div>

      <div className="max-w-4xl mx-auto space-y-12">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center md:items-start bg-[#1a2332] p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105"
          >

            <div className="w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 flex-shrink-0 mb-4 md:mb-0 md:mr-7">
              <img
                src={exp.image}
                alt={exp.company}
                className="w-full h-full object-contain rounded-lg"
              />
            </div>

            <div className="text-center md:text-left flex-1">
              <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
              <h4 className="text-dourado-texto text-lg">{exp.company}</h4>
              <span className="block text-gray-400 mb-2">{exp.year}</span>
              <p className="text-gray-300">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
