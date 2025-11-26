import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageLoader from './components/PageLoader';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { SiteDataProvider } from "./context/SiteDataContext";

import MainPage from './components/MainPage';
import About from './components/About';
import Services from './components/Services';
import Project from "./components/Project";
import Contact from './components/Contact';
import DesignandSkill from './components/DesignandSkill';
import LatestService from './components/LatestService';
import EduandExp from './components/EduandExp';
import Form from './components/Form';

function App() {

  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
    });
  }, []);  
  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); 

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <SiteDataProvider>

        <Navbar />

        {loading ? (
          <PageLoader />
        ) : (
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<DesignandSkill />} />
            <Route path="/latestService" element={<LatestService />} />
            <Route path="/education" element={<EduandExp />} />
            <Route path="/contactus" element={<Form />} />
          </Routes>
        )}

        <Footer />

      </SiteDataProvider>
    </div>
  );
}

export default App;
