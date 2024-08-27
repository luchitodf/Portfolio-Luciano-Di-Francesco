import React from 'react';
import { motion } from 'framer-motion';

const Career: React.FC = () => {
  return (
    <section id="career" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold">Trayectoria</h2>
          <p className="text-gray-300">Aquí encontrarás más sobre mi camino en la tecnología y la educación.</p>
        </motion.div>

        {/* Educación */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Educación</h3>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-bold">Graduado en Análisis y Desarrollo de Sistemas</h4>
            <p className="text-gray-300">Instituto ABC - 2020</p>
            <p className="text-gray-400 mt-2">Aprendí sobre desarrollo de software, bases de datos, y metodologías ágiles.</p>
          </div>
        </div>

        {/* Proyectos Personales */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Proyectos Personales</h3>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-bold">Proyecto de Portafolio Personal</h4>
            <p className="text-gray-300">Un sitio web donde muestro mis habilidades y proyectos. Utilicé React, TypeScript, y Tailwind CSS.</p>
            <p className="text-gray-400 mt-2">Disponible en GitHub.</p>
          </div>
        </div>

        {/* Certificaciones */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Certificaciones</h3>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-bold">Certificado en JavaScript Avanzado</h4>
            <p className="text-gray-300">Platzi - 2023</p>
            <p className="text-gray-400 mt-2">Curso avanzado de JavaScript que cubre conceptos modernos y técnicas avanzadas.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
