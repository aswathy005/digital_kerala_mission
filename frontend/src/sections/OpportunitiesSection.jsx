import React from 'react';
import { CheckCircle2, ArrowRight, TrendingUp, MapPin, Sparkles } from 'lucide-react';
import Button from '../components/Button';

const OpportunitiesSection = ({ onBusinessClick, onPartnerClick }) => {
  return (
    <section id="opportunities" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 text-primary-purple text-xs font-mono font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TWO POWERFUL OPPORTUNITIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-navy-dark">
            Tailored Pathways for Business Owners & Partners
          </h2>
        </div>

        {/* Two Large Side-by-Side Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* CARD 1: FOR BUSINESS OWNERS */}
          <div className="bg-purple-50/70 rounded-3xl p-8 sm:p-10 border border-purple-200 shadow-soft-card flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
            
            <div className="space-y-6">
              
              {/* Header Tag & 3D Chart Illustration */}
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-mono font-extrabold text-primary-purple tracking-widest uppercase">
                    FOR BUSINESS OWNERS
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-sans font-extrabold text-navy-dark mt-2 leading-tight">
                    Scale. Automate. <br />
                    Build a Powerful Brand.
                  </h3>
                </div>

                {/* 3D Purple Bar Chart Visual */}
                <div className="w-16 h-16 rounded-2xl bg-primary-purple/10 text-primary-purple flex items-center justify-center shrink-0">
                  <TrendingUp className="w-8 h-8" />
                </div>
              </div>

              {/* Checklist */}
              <div className="space-y-3 pt-2">
                {[
                  'AI-Powered & Automated Marketing',
                  'More Leads, More Sales, More Growth',
                  'Build a Strong & Trusted Brand',
                  'Data-Driven Decision Making',
                  'Continuous Optimization & Support'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm font-sans font-semibold text-navy-dark">
                    <CheckCircle2 className="w-5 h-5 text-primary-purple shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* CTA */}
            <div className="pt-8">
              <Button
                variant="purple"
                size="lg"
                className="w-full justify-center rounded-2xl shadow-purple-glow"
                icon={ArrowRight}
                iconPosition="right"
                onClick={onBusinessClick}
              >
                Book a Free Strategy Call
              </Button>
            </div>

          </div>

          {/* CARD 2: FOR FRANCHISE PARTNERS */}
          <div className="bg-emerald-50/70 rounded-3xl p-8 sm:p-10 border border-emerald-200 shadow-soft-card flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
            
            <div className="space-y-6">
              
              {/* Header Tag & Kerala Map Network Illustration */}
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-mono font-extrabold text-emerald-accent tracking-widest uppercase">
                    FOR FRANCHISE PARTNERS
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-sans font-extrabold text-navy-dark mt-2 leading-tight">
                    Learn. Implement. <br />
                    Earn.
                  </h3>
                </div>

                {/* Kerala Network Map Visual */}
                <div className="w-16 h-16 rounded-2xl bg-emerald-accent/10 text-emerald-accent flex items-center justify-center shrink-0">
                  <MapPin className="w-8 h-8" />
                </div>
              </div>

              {/* Checklist */}
              <div className="space-y-3 pt-2">
                {[
                  'Complete Training & Certification',
                  'Ready-to-Use AI Sales Engine System',
                  'Business Implementation Support',
                  'High Income Potential',
                  'Be a Part of Kerala’s Digital Movement'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm font-sans font-semibold text-navy-dark">
                    <CheckCircle2 className="w-5 h-5 text-emerald-accent shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* CTA */}
            <div className="pt-8">
              <Button
                variant="emerald"
                size="lg"
                className="w-full justify-center rounded-2xl shadow-emerald-500/20"
                icon={ArrowRight}
                iconPosition="right"
                onClick={onPartnerClick}
              >
                Become a Partner
              </Button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default OpportunitiesSection;
