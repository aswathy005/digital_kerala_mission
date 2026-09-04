import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import BusinessOwnerForm from './BusinessOwnerForm';
import FranchiseForm from './FranchiseForm';
import { Phone, Mail, MapPin, Building2, Handshake, Clock, ShieldCheck } from 'lucide-react';

const ContactSection = ({ defaultTab = 'business' }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <section id="contact" className="py-20 md:py-28 bg-backwater text-ivory relative border-b border-kasavu/20 overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-kasavu/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-palm/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeading
          kicker="GET IN TOUCH WITH MISSION ADVISORS"
          title="Connect with Digital Kerala Mission"
          subtitle="Choose your enquiry type below to connect directly with our business AI consultants or franchise advisors."
          theme="dark"
          className="mb-12"
        />

        {/* Tab Switcher Buttons */}
        <div className="flex items-center justify-center max-w-md mx-auto p-1.5 rounded-2xl bg-white/10 border border-kasavu/30 mb-12">
          <button
            onClick={() => setActiveTab('business')}
            className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-sans font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'business'
                ? 'bg-kasavu text-backwater shadow-lg'
                : 'text-ivory/80 hover:text-ivory hover:bg-white/5'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Business Owner Form</span>
          </button>

          <button
            onClick={() => setActiveTab('franchise')}
            className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-sans font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'franchise'
                ? 'bg-kasavu text-backwater shadow-lg'
                : 'text-ivory/80 hover:text-ivory hover:bg-white/5'
            }`}
          >
            <Handshake className="w-4 h-4" />
            <span>Franchise Partner Form</span>
          </button>
        </div>

        {/* Grid: Form (7 cols) + Contact Info (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Active Form Column */}
          <div className="lg:col-span-7">
            {activeTab === 'business' ? (
              <BusinessOwnerForm />
            ) : (
              <FranchiseForm />
            )}
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="bg-gradient-to-b from-palm/40 to-backwater/90 rounded-2xl p-6 sm:p-8 border border-kasavu/30 shadow-xl backdrop-blur-md space-y-6">
              <h3 className="text-xl font-serif font-bold text-ivory border-b border-kasavu/20 pb-4">
                Mission Headquarters & Hubs
              </h3>

              <div className="space-y-4 text-sm font-sans text-ivory/85">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-kasavu/20 text-kasavu shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-ivory font-semibold">State Coordination Hub</strong>
                    <span className="text-xs text-ivory/70">Kochi Infopark & Technopark Thiruvananthapuram, Kerala</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-kasavu/20 text-kasavu shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-ivory font-semibold">WhatsApp & Helpline</strong>
                    <span className="text-xs text-ivory/70">+91 484 290 1000 / +91 98470 00000</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-kasavu/20 text-kasavu shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-ivory font-semibold">Official Email</strong>
                    <span className="text-xs text-ivory/70">enquiry@digitalkerala.in</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-kasavu/20 text-kasavu shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-ivory font-semibold">Support Hours</strong>
                    <span className="text-xs text-ivory/70">Monday - Saturday: 9:00 AM to 6:00 PM IST</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-kasavu/20 text-xs font-mono text-kasavu flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Serving all 14 Districts of Kerala</span>
              </div>
            </div>

            {/* Partner Endorsements Card */}
            <div className="bg-white/5 rounded-2xl p-6 border border-kasavu/20 space-y-3">
              <h4 className="text-xs font-mono text-kasavu uppercase tracking-wider font-semibold">
                Ecosystem Verification
              </h4>
              <p className="text-xs font-sans text-ivory/80 leading-relaxed">
                Technology managed by <strong className="text-kasavu">Dynexo IT Solutions</strong>. Training and franchise enablement certified by <strong className="text-kasavu">WhiteSketch</strong>.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
