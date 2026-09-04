import React from 'react';
import SectionHeading from './SectionHeading';
import Button from './Button';
import { CheckCircle2, ArrowRight, Sparkles, Building } from 'lucide-react';

const checklistItems = [
  'Consistent brand visibility',
  'Automated customer communication',
  'Lead nurturing and follow-up',
  'AI-assisted sales conversations',
  'Faster content production',
  'Multi-platform marketing workflows',
  'Customer-focused messaging',
  'Data-driven optimization',
  'A repeatable foundation for scaling',
];

const BusinessOwnersSection = ({ onBookConsultation }) => {
  return (
    <section id="business-owners" className="py-20 md:py-28 bg-ivory text-ink relative border-b border-kasavu/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-palm/10 text-palm border border-palm/20 text-xs font-mono font-semibold uppercase">
              <Building className="w-3.5 h-3.5" />
              <span>For Business Owners</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-backwater leading-tight">
              Transform Your Business into an Automated Growth Engine
            </h2>

            <p className="text-base sm:text-lg font-sans text-ink-soft leading-relaxed">
              Stop relying on unpredictable manual leads or unorganized social posts. The Digital Kerala Mission AI Sales Engine provides an enterprise-grade, automated marketing and sales foundation built specifically for local Kerala market dynamics.
            </p>

            <div className="pt-4">
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                onClick={onBookConsultation}
              >
                Book an AI Sales Engine Consultation
              </Button>
            </div>
          </div>

          {/* Right Column: 9-Item Checklist Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-kasavu/30 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-kasavu/10 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-kasavu" />
                  <h3 className="font-serif font-bold text-lg text-backwater">
                    What You Gain
                  </h3>
                </div>
                <span className="text-xs font-mono font-bold text-kasavu px-2.5 py-1 bg-kasavu/10 rounded-full">
                  9 Core Pillars
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {checklistItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-ivory-dim/40 border border-kasavu/20 hover:border-kasavu transition-all flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-kasavu shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-sans font-medium text-ink">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-kasavu/10 text-xs font-mono text-ink-soft text-center">
                ✨ Fully customized for your business category & target district.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BusinessOwnersSection;
