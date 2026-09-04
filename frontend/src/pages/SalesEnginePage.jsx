import React from 'react';
import Navbar from '../components/Navbar';
import SalesEngineSection from '../sections/SalesEngineSection';
import ContactFormsSection from '../components/ContactFormsSection';
import Footer from '../components/Footer';

const SalesEnginePage = () => {
  return (
    <div className="min-h-screen bg-white text-navy-dark flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow pt-16">
        <SalesEngineSection />
        <ContactFormsSection defaultTab="business" />
      </main>
      <Footer />
    </div>
  );
};

export default SalesEnginePage;
