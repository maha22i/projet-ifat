import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Features } from './components/sections/Features';
import { Team } from './components/sections/Team';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;