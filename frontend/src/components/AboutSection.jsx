import React from 'react';
import SectionHeading from './SectionHeading';
import { Target, Award, Compass, ShieldCheck, CheckCircle2 } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-ivory text-ink relative border-b border-kasavu/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          kicker="ABOUT THE INITIATIVE"
          title="Digital Kerala Mission – Empowering Commerce Through AI"
          subtitle="Connecting Kerala's traditional business heritage with enterprise-grade artificial intelligence."
          theme="light"
          className="mb-16"
        />

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Mission Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-backwater leading-snug">
              Bridging local market wisdom with next-generation automated sales engines.
            </h3>

            <p className="text-base font-sans text-ink-soft leading-relaxed">
              Digital Kerala Mission is a landmark technology enablement initiative engineered to equip Kerala business owners and franchise partners with connected AI marketing and sales systems.
            </p>

            <p className="text-base font-sans text-ink-soft leading-relaxed">
              Rather than forcing businesses to master complex software or hire expensive, uncoordinated agencies, we provide a unified ecosystem: from WhatsApp automated conversations to Digital Twin founder videos and customer psychology nurturing.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white border border-kasavu/20 shadow-sm flex items-start gap-3">
                <Target className="w-5 h-5 text-kasavu shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-sm text-backwater">Focused Purpose</h4>
                  <p className="text-xs font-sans text-ink-soft mt-1">Driving measurable revenue scaling for 10,000+ local brands.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-kasavu/20 shadow-sm flex items-start gap-3">
                <Compass className="w-5 h-5 text-kasavu shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-sm text-backwater">14 District Reach</h4>
                  <p className="text-xs font-sans text-ink-soft mt-1">Empowering local franchise networks from Kasaragod to Thiruvananthapuram.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Values & Visual Accent Card */}
          <div className="lg:col-span-5">
            <div className="bg-backwater text-ivory rounded-2xl p-8 border border-kasavu shadow-2xl relative overflow-hidden kasavu-border-glow space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kasavu/20 text-kasavu-soft text-xs font-mono font-semibold uppercase">
                <Award className="w-3.5 h-3.5 text-kasavu" />
                <span>Mission Commitments</span>
              </div>

              <h4 className="text-xl font-serif font-bold text-ivory">
                Built on Integrity & Technological Excellence
              </h4>

              <div className="space-y-4 text-sm font-sans text-ivory/85">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-kasavu shrink-0 mt-0.5" />
                  <span>No fake metrics or deceptive income guarantees.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-kasavu shrink-0 mt-0.5" />
                  <span>Approved training & hands-on technical support.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-kasavu shrink-0 mt-0.5" />
                  <span>Tailored for Malayalam & English speaking buyer demographics.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-kasavu shrink-0 mt-0.5" />
                  <span>Continuous system upgrades aligned with AI advancement.</span>
                </div>
              </div>

              <div className="pt-4 border-t border-kasavu/20 text-xs font-mono text-kasavu flex items-center justify-between">
                <span>Digital Kerala Mission</span>
                <span>Established 2026</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
