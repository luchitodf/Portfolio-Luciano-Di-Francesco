import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Contacto</h2>
        <p className="text-xl mb-8">¡Vamos a conversar! Puedes contactarme a través de los siguientes medios:</p>
        
        <div className="flex justify-center gap-8">
          <a href="mailto:henriquesousa.dev@gmail.com" className="text-cyan-500 hover:text-cyan-300 text-3xl">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:text-cyan-300 text-3xl">
            <FaLinkedin />
          </a>
          <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:text-cyan-300 text-3xl">
            <FaGithub />
          </a>
        </div>

        <p className="text-gray-400 mt-4">henriquesousa.dev@gmail.com</p>
      </div>
    </section>
  );
};

export default Contact;
