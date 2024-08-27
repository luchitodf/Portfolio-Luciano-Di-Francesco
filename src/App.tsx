// src/App.tsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Career from './components/Career';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About/>
      <Skills/>
      <Career/>
      <Testimonials/>
      <Contact/>

    </div>
  );
};

export default App;
