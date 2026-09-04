import React from 'react';
import SectionHeading from './SectionHeading';
import Button from './Button';
import { ArrowRight, Building2, Handshake, CheckCircle2, Sparkles, Award } from 'lucide-react';

const PathwayCards = ({ onBusinessClick, onFranchiseClick }) => {
  return (
    <section id="pathways" className="py-20 md:py-28 bg-backwater text-ivory relative border-b border-kasavu/20 overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-palm/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-kasavu/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeading
          kicker="CHOOSE YOUR PATHWAY"
          title="Two Ways to Partner with Digital Kerala Mission"
          subtitle="Whether you want to transform your own business or launch an approved district franchise, we provide full support."
          theme="dark"
          className="mb-16"
        />

        {/* Two Pathway Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* PATHWAY 1: BUSINESS OWNERS */}
          <div className="bg-gradient-to-b from-palm/40 to-backwater/90 rounded-2xl p-8 border border-kasavu/40 shadow-2xl backdrop-blur-md flex flex-col justify-between hover:border-kasavu transition-all duration-300 kasavu-border-glow group">
            <div>
              {/* Header Pill & Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 rounded-2xl bg-kasavu text-backwater font-bold">
                  <Building2 className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-semibold tracking-wider text-kasavu uppercase px-3 py-1 rounded-full bg-kasavu/10 border border-kasavu/30">
                  Pathway 01
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-ivory mb-4 group-hover:text-kasavu-soft transition-colors">
                For Business Owners
              </h3>

              <p className="text-base font-sans text-ivory/85 mb-8 leading-relaxed">
                Implement the AI Sales Engine to create a systematic approach to marketing, sales and brand growth.
              </p>

              {/* Highlights */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm text-ivory/90">
                  <CheckCircle2 className="w-4 h-4 text-kasavu shrink-0" />
                  <span>24/7 Automated WhatsApp & Social Sales</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-ivory/90">
                  <CheckCircle2 className="w-4 h-4 text-kasavu shrink-0" />
                  <span>Founder Digital Twin & Video Content</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-ivory/90">
                  <CheckCircle2 className="w-4 h-4 text-kasavu shrink-0" />
                  <span>Repeatable Foundation for Scaling</span>
                </div>
              </div>
            </div>

            {/* Action */}
            <div className="pt-6 border-t border-kasavu/20">
              <Button
                variant="primary"
                size="lg"
                className="w-full justify-center"
                icon={ArrowRight}
                iconPosition="right"
                onClick={onBusinessClick}
              >
                Grow My Business
              </Button>
            </div>
          </div>

          {/* PATHWAY 2: FRANCHISE PARTNERS */}
          <div className="bg-gradient-to-b from-palm-soft/30 to-backwater/95 rounded-2xl p-8 border border-kasavu/40 shadow-2xl backdrop-blur-md flex flex-col justify-between hover:border-kasavu transition-all duration-300 kasavu-border-glow group">
            <div>
              {/* Header Pill & Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 rounded-2xl bg-palm text-kasavu font-bold border border-kasavu/30">
                  <Handshake className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-semibold tracking-wider text-kasavu-soft uppercase px-3 py-1 rounded-full bg-palm/40 border border-kasavu/30">
                  Pathway 02
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-ivory mb-4 group-hover:text-kasavu-soft transition-colors">
                For Franchise Partners
              </h3>

              <p className="text-base font-sans text-ivory/85 mb-8 leading-relaxed">
                Learn the system, receive approved training and support, and explore operating through the Digital Kerala Mission franchise partnership model.
              </p>

              {/* Highlights */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm text-ivory/90">
                  <Award className="w-4 h-4 text-kasavu shrink-0" />
                  <span>WhiteSketch Training & Certification</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-ivory/90">
                  <Sparkles className="w-4 h-4 text-kasavu shrink-0" />
                  <span>Dynexo IT Infrastructure & Tech Stack</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-ivory/90">
                  <CheckCircle2 className="w-4 h-4 text-kasavu shrink-0" />
                  <span>Approved District Network Authorization</span>
                </div>
              </div>
            </div>

            {/* Action */}
            <div className="pt-6 border-t border-kasavu/20">
              <Button
                variant="outline"
                size="lg"
                className="w-full justify-center text-ivory border-kasavu/60 hover:bg-kasavu hover:text-backwater"
                icon={ArrowRight}
                iconPosition="right"
                onClick={onFranchiseClick}
              >
                Become a Franchise Partner
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PathwayCards;
