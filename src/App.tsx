import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;