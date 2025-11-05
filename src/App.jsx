import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import DesignandSkill from './components/DesignandSkill';
import LatestService from './components/LatestService';
import EduandExp from './components/EduandExp';
import Form from './components/Form';
import Footer from './components/Footer';
import About from './components/About';
import MainPage from './components/MainPage';
import Services from './components/Services';
import Contact from './components/Contact';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <Navbar />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<DesignandSkill />} />
        <Route path="/latestService" element={<LatestService />} />
        <Route path="/education" element={<EduandExp />} />
        <Route path="/contactus" element={<Form />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
