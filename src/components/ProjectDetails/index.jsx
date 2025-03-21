import React from "react";

const ProjectDetails = ({ project, close }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-lg bg-black/50 p-4 font-grotesk"
      onClick={close}
    >
      <div
        className="bg-white rounded-lg shadow-lg max-w-5xl w-full flex flex-col lg:flex-row overflow-hidden gap-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full xl:ml-5 flex justify-center items-center xl:w-1/2">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 p-6 md:p-8 relative flex flex-col justify-between">
          <button
            className="absolute top-4 right-4 text-gray-500 text-2xl hover:text-gray-800 transition"
            onClick={close}
            aria-label="Fechar"
          >
            &times;
          </button>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black">{project.title}</h2>
            <p className="text-gray-600 mb-4 text-justify">{project.description}</p>
          </div>

          <div className="space-y-2 text-sm text-gray-700"> 
            <p>
              <strong>Tipo:</strong> {project.type}
            </p>
            <p>
              <strong>Linguagens:</strong> {project.languages}
            </p>
            <p>
              <strong>Plataforma:</strong> {project.platform}
            </p>
            <p>
              <strong>País:</strong> {project.country}
            </p>
            <p>
              <strong>Live URL:</strong>
              <a href={project.url} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                {project.url}
              </a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
