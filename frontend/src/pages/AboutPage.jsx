import React from 'react';
import Navbar from '../components/Navbar';
import WhySection from '../sections/WhySection';
import ValueStripSection from '../sections/ValueStripSection';
import ContactFormsSection from '../components/ContactFormsSection';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white text-navy-dark flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow pt-16">
        <WhySection />
        <ValueStripSection />
        <ContactFormsSection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
