import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../sections/HeroSection';
import ValueStripSection from '../sections/ValueStripSection';
import WhySection from '../sections/WhySection';
import SalesEngineSection from '../sections/SalesEngineSection';
import OpportunitiesSection from '../sections/OpportunitiesSection';
import PartnersSection from '../sections/PartnersSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import CtaBannerSection from '../sections/CtaBannerSection';
import ContactFormsSection from '../components/ContactFormsSection';
import Footer from '../components/Footer';

const Home = () => {
  const scrollToContact = (tab = 'business') => {
    const el = document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-navy-dark flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        <HeroSection
          onBusinessClick={() => scrollToContact('business')}
          onPartnerClick={() => scrollToContact('franchise')}
        />

        <ValueStripSection />

        <WhySection />

        <SalesEngineSection />

        <OpportunitiesSection
          onBusinessClick={() => scrollToContact('business')}
          onPartnerClick={() => scrollToContact('franchise')}
        />

        <PartnersSection />

        <TestimonialsSection />

        <CtaBannerSection
          onCtaClick={() => scrollToContact('business')}
        />

        <ContactFormsSection />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
