import React from 'react';
import Navbar from '../components/Navbar';
import FranchiseSection from '../components/FranchiseSection';
import PartnersSection from '../components/PartnersSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const FranchisePage = () => {
  const scrollToForm = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-ivory text-ink flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow pt-20">
        <FranchiseSection
          onApplyClick={scrollToForm}
          onRequestDetailsClick={scrollToForm}
          onTalkAdvisorClick={scrollToForm}
        />
        <PartnersSection />
        <ContactSection defaultTab="franchise" />
      </main>
      <Footer />
    </div>
  );
};

export default FranchisePage;
