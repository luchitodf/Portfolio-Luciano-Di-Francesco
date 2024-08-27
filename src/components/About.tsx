import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Sobre Mí</h2>
          <p className="text-lg text-gray-300 mb-8">
            Soy Lucho, un desarrollador web con una pasión por la tecnología y el diseño. Me encanta crear experiencias web intuitivas y elegantes que resuelvan problemas reales y mejoren la vida de las personas.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex justify-center"
        >
          <img
            src="https://via.placeholder.com/150"
            alt="Foto de Lucho"
            className="rounded-full w-40 h-40 object-cover shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
