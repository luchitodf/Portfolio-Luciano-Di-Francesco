// src/components/Navbar.tsx
import React from 'react';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-4">
        <div className="text-2xl font-bold">Lucho Dev</div>
        <ul className="hidden md:flex space-x-8">
          <li>
            <a href="#hero" className="hover:text-cyan-500">Inicio</a>
          </li>
          <li>
            <a href="#about" className="hover:text-cyan-500">Sobre Mí</a>
          </li>
          <li>
            <a href="#skills" className="hover:text-cyan-500">Habilidades</a>
          </li>
          <li>
            <a href="#career" className="hover:text-cyan-500">Trayectoria</a>
          </li>
          <li>
            <a href="#testimonials" className="hover:text-cyan-500">Recomendaciones</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-cyan-500">Contacto</a>
          </li>
        </ul>
        <div className="md:hidden">
          {/* Aquí podrías añadir un icono de menú para dispositivos móviles */}
          <button type="button" className="text-2xl">
            ☰
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
