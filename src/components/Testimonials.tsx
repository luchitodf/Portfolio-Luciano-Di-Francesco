import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Recomendaciones</h2>
        <div className="flex justify-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md text-center">
            <FaQuoteLeft className="text-cyan-500 text-3xl mb-4 inline" />
            <p className="text-gray-300 italic">
              "Henrique es un profesional dedicado, siempre buscando aprender más y mejorar sus habilidades. Es un placer trabajar con él."
            </p>
            <FaQuoteRight className="text-cyan-500 text-3xl mt-4 inline" />
            <p className="text-cyan-500 font-semibold mt-4">Romário Lima</p>
            <p className="text-gray-400">Ingeniero de Computación</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
