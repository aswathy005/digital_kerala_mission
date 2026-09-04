import React from 'react';
import SectionHeading from './SectionHeading';
import { Cpu, GraduationCap, CheckCircle2, Globe, ShieldCheck } from 'lucide-react';

const PartnersSection = () => {
  return (
    <section id="partners" className="py-20 md:py-28 bg-backwater text-ivory relative border-b border-kasavu/20 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeading
          kicker="STRATEGIC ECOSYSTEM PARTNERS"
          title="Engineered by Technology & Training Leaders"
          subtitle="Digital Kerala Mission combines software architecture and structured academy training to ensure zero-gap execution."
          theme="dark"
          className="mb-16"
        />

        {/* 2 Partner Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* PARTNER 1: DYNEXO IT SOLUTIONS */}
          <div className="bg-gradient-to-b from-palm/40 to-backwater/90 rounded-2xl p-8 border border-kasavu/40 shadow-2xl backdrop-blur-md flex flex-col justify-between hover:border-kasavu transition-all duration-300 kasavu-border-glow">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 rounded-2xl bg-kasavu text-backwater font-bold">
                  <Cpu className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-kasavu uppercase px-3 py-1 rounded-full bg-kasavu/10 border border-kasavu/30">
                  Technology Partner
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-ivory mb-2">
                Dynexo IT Solutions
              </h3>

              <p className="text-xs font-mono text-kasavu-soft mb-6">
                Enterprise AI Infrastructure & Software Architecture
              </p>

              <p className="text-sm font-sans text-ivory/85 mb-8 leading-relaxed">
                Powers the core technology stack of the AI Sales Engine. Dynexo IT manages cloud API integrations, LLM agent pipelines, WhatsApp Business API endpoints, and continuous system security.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm text-ivory/90">
                  <CheckCircle2 className="w-4 h-4 text-kasavu shrink-0" />
                  <span>AI Agent Knowledge Base & Engine Architecture</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-ivory/90">
                  <CheckCircle2 className="w-4 h-4 text-kasavu shrink-0" />
                  <span>WhatsApp API & Meta Integration Infrastructure</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-ivory/90">
                  <CheckCircle2 className="w-4 h-4 text-kasavu shrink-0" />
                  <span>Cloud Server Reliability & Data Privacy Compliance</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-kasavu/20 flex items-center justify-between text-xs font-mono text-ivory/70">
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-kasavu" /> dynexo.in
              </span>
              <span className="text-kasavu font-semibold">Tech Authorization ✓</span>
            </div>
          </div>

          {/* PARTNER 2: WHITESKETCH */}
          <div className="bg-gradient-to-b from-palm-soft/30 to-backwater/95 rounded-2xl p-8 border border-kasavu/40 shadow-2xl backdrop-blur-md flex flex-col justify-between hover:border-kasavu transition-all duration-300 kasavu-border-glow">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 rounded-2xl bg-palm text-kasavu font-bold border border-kasavu/30">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-kasavu-soft uppercase px-3 py-1 rounded-full bg-palm/40 border border-kasavu/30">
                  Training Partner
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-ivory mb-2">
                WhiteSketch
              </h3>

              <p className="text-xs font-mono text-kasavu-soft mb-6">
                Franchise Enablement & AI Marketing Certification
              </p>

              <p className="text-sm font-sans text-ivory/85 mb-8 leading-relaxed">
                Conducts rigorous training programs for business owners and franchise teams. WhiteSketch provides standardized playbooks, client onboarding workflows, and continuous AI skill workshops.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm text-ivory/90">
                  <CheckCircle2 className="w-4 h-4 text-kasavu shrink-0" />
                  <span>Franchise Partner Certification & Training</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-ivory/90">
                  <CheckCircle2 className="w-4 h-4 text-kasavu shrink-0" />
                  <span>Business Owner AI Onboarding Workshops</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-ivory/90">
                  <CheckCircle2 className="w-4 h-4 text-kasavu shrink-0" />
                  <span>District Support & Strategy Consultation</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-kasavu/20 flex items-center justify-between text-xs font-mono text-ivory/70">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-kasavu" /> whitesketch.in
              </span>
              <span className="text-kasavu font-semibold">Training Certification ✓</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
