import React from 'react';
import { Cpu, GraduationCap, Sparkles } from 'lucide-react';

const PartnersSection = () => {
  return (
    <section id="partners" className="py-20 md:py-28 bg-slate-50 relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 text-primary-purple text-xs font-mono font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ECOSYSTEM ARCHITECTURE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-navy-dark">
            OUR TECHNOLOGY & TRAINING PARTNERS
          </h2>
        </div>

        {/* 2 Clean Partner Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Partner 1: Dynexo IT Solutions */}
          <div className="bg-white rounded-3xl p-8 border border-purple-100 shadow-soft-card flex items-start gap-6 hover:shadow-lg transition-all duration-300 group">
            <div className="w-16 h-16 rounded-2xl bg-purple-100 text-primary-purple flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Cpu className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-primary-purple uppercase tracking-wider">
                Technology Partner
              </span>
              <h3 className="text-2xl font-sans font-extrabold text-navy-dark">
                DYNEXO IT SOLUTIONS
              </h3>
              <p className="text-sm font-sans text-slate-body leading-relaxed">
                Powering the AI Sales Engine with robust technology, automations and intelligent systems.
              </p>
            </div>
          </div>

          {/* Partner 2: WhiteSketch */}
          <div className="bg-white rounded-3xl p-8 border border-purple-100 shadow-soft-card flex items-start gap-6 hover:shadow-lg transition-all duration-300 group">
            <div className="w-16 h-16 rounded-2xl bg-purple-100 text-primary-purple flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-primary-purple uppercase tracking-wider">
                Training Partner
              </span>
              <h3 className="text-2xl font-sans font-extrabold text-navy-dark">
                WhiteSketch
              </h3>
              <p className="text-sm font-sans text-slate-body leading-relaxed">
                Empowering entrepreneurs and partners with the right knowledge, training and implementation support.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
