import React from 'react';
import { FaReact, FaJs, FaHtml5, FaCss3, FaGit, FaGithub, FaNode, FaPython, FaDocker, FaVuejs } from 'react-icons/fa';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Tecnologías y Habilidades</h2>
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Techs que uso día a día:</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <FaReact size={50} className="text-cyan-500 mb-2" />
              <span>React</span>
            </div>
            <div className="flex flex-col items-center">
              <FaJs size={50} className="text-yellow-400 mb-2" />
              <span>JavaScript</span>
            </div>
            <div className="flex flex-col items-center">
              <FaHtml5 size={50} className="text-orange-500 mb-2" />
              <span>HTML5</span>
            </div>
            <div className="flex flex-col items-center">
              <FaCss3 size={50} className="text-blue-500 mb-2" />
              <span>CSS3</span>
            </div>
            <div className="flex flex-col items-center">
              <FaGit size={50} className="text-red-500 mb-2" />
              <span>Git</span>
            </div>
            <div className="flex flex-col items-center">
              <FaGithub size={50} className="text-gray-500 mb-2" />
              <span>GitHub</span>
            </div>
            <div className="flex flex-col items-center">
              <FaNode size={50} className="text-green-500 mb-2" />
              <span>Node.js</span>
            </div>
            <div className="flex flex-col items-center">
              <FaPython size={50} className="text-blue-400 mb-2" />
              <span>Python</span>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Otras techs con las que he realizado proyectos:</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <FaDocker size={50} className="text-blue-300 mb-2" />
              <span>Docker</span>
            </div>
            <div className="flex flex-col items-center">
              <FaVuejs size={50} className="text-green-400 mb-2" />
              <span>Vue.js</span>
            </div>
            {/* Añadir más tecnologías si es necesario */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
