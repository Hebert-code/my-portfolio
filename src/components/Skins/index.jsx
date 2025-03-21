import { FaPython, FaDocker, FaJava, FaGitAlt, FaReact } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import { SiSwift, SiFigma, SiHtml5, SiCss3, SiJavascript, SiTypescript, SiBootstrap, SiTailwindcss, SiC, SiCplusplus, SiPostgresql, SiMysql, SiReact } from "react-icons/si";
import SectionTitle from "../common/SectionTitle";

const skillCategories = [
  {
    title: "Desenvolvimento Web",
    skills: [
      { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Django", icon: <DiDjango className="text-green-600" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
      { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400" /> },
    ],
  },
  {
    title: "Desenvolvimento Mobile",
    skills: [
      { name: "Swift", icon: <SiSwift className="text-red-500" /> },
      { name: "React Native", icon: <SiReact className="text-cyan-400" /> },
    ],
  },
  {
    title: "Banco de Dados",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-800" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
    ],
  },
  {
    title: "Ferramentas & Versionamento",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-red-600" /> },
      { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
      { name: "Figma", icon: <SiFigma className="text-purple-600" /> },
    ],
  },
  {
    title: "Linguagens de Programação",
    skills: [
      { name: "Python", icon: <FaPython className="text-yellow-500" /> },
      { name: "Java", icon: <FaJava className="text-orange-600" /> },
      { name: "C", icon: <SiC className="text-blue-600" /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gradient-to-r from-[#17203a] to-[#0b1120] py-16 font-grotesk scroll-mt-26">

      <SectionTitle title="HABILIDADES"/>
      

      <div className=" h-9"></div>

      <div className="space-y-12 px-6 max-w-6xl mx-auto">
        {skillCategories.map((category, index) => (
          <div key={index} className="text-center">
            <h2 className="text-white text-xl font-semibold mb-4">{category.title}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
              {category.skills.map((skill, idx) => (
                <div 
                  key={idx} 
                  className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-lg w-32 h-32 transition-transform transform hover:scale-105"
                >
                  <div className="text-5xl">{skill.icon}</div>
                  <span className="text-lg font-medium mt-2 text-white">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Skills;