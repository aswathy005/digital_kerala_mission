import React from 'react';
import Navbar from '../components/Navbar';
import ResourcesSection from '../components/ResourcesSection';
import ContactFormsSection from '../components/ContactFormsSection';
import Footer from '../components/Footer';

const ResourcesPage = () => {
  return (
    <div className="min-h-screen bg-white text-navy-dark flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow pt-16">
        <ResourcesSection />
        <ContactFormsSection />
      </main>
      <Footer />
    </div>
  );
};

export default ResourcesPage;
