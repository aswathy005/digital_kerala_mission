import React from 'react';
import Navbar from '../components/Navbar';
import PartnersSection from '../sections/PartnersSection';
import OpportunitiesSection from '../sections/OpportunitiesSection';
import ContactFormsSection from '../components/ContactFormsSection';
import Footer from '../components/Footer';

const PartnersPage = () => {
  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-navy-dark flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow pt-16">
        <PartnersSection />
        <OpportunitiesSection
          onBusinessClick={scrollToContact}
          onPartnerClick={scrollToContact}
        />
        <ContactFormsSection defaultTab="franchise" />
      </main>
      <Footer />
    </div>
  );
};

export default PartnersPage;
