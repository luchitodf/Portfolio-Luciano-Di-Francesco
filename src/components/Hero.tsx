import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="h-screen flex items-center justify-center bg-gradient-to-b from-cyan-500 to-blue-500">
      <div className="text-center">
        <motion.h1
          className="text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          ¡Hola, soy Lucho!
        </motion.h1>
        <motion.p
          className="text-xl text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Desarrollador Web con pasión por la tecnología y el diseño.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
