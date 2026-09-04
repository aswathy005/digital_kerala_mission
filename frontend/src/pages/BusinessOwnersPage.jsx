import React from 'react';
import Navbar from '../components/Navbar';
import OpportunitiesSection from '../sections/OpportunitiesSection';
import ValueStripSection from '../sections/ValueStripSection';
import ContactFormsSection from '../components/ContactFormsSection';
import Footer from '../components/Footer';

const BusinessOwnersPage = () => {
  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-navy-dark flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow pt-16">
        <OpportunitiesSection
          onBusinessClick={scrollToContact}
          onPartnerClick={scrollToContact}
        />
        <ValueStripSection />
        <ContactFormsSection defaultTab="business" />
      </main>
      <Footer />
    </div>
  );
};

export default BusinessOwnersPage;
