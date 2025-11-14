

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Upti from './components/Upti';
import MentalHealth from './components/MentalHealth';
import Units from './components/Units';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import Blog from './components/Blog';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-transparent text-gray-200 antialiased relative z-10">
      <Header />
      <main>
        <Hero scrollY={scrollY} />
        <Partners />
        <About />
        <Services />
        <Upti />
        <MentalHealth />
        <Units />
        <Team />
        <Testimonials />
        <Blog />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;