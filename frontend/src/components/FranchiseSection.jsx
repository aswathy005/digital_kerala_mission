import React from 'react';
import SectionHeading from './SectionHeading';
import Button from './Button';
import {
  BookOpen,
  GraduationCap,
  Wrench,
  Rocket,
  Users,
  Layers,
  TrendingUp,
  Maximize2,
  ShieldAlert,
  ArrowRight,
  Handshake,
  CheckCircle2
} from 'lucide-react';

const steps = [
  { step: '01', title: 'Learn', icon: BookOpen, desc: 'Master the AI Sales Engine framework & district market opportunities.' },
  { step: '02', title: 'Train', icon: GraduationCap, desc: 'Receive official certification through WhiteSketch training modules.' },
  { step: '03', title: 'Get Enabled', icon: Wrench, desc: 'Access approved Dynexo IT technological infrastructure & dashboard.' },
  { step: '04', title: 'Launch', icon: Rocket, desc: 'Establish your authorized Digital Kerala Mission franchise in your district.' },
  { step: '05', title: 'Acquire Clients', icon: Users, desc: 'Deploy proven client acquisition playbooks to onboard local businesses.' },
  { step: '06', title: 'Deliver the System', icon: Layers, desc: 'Setup automated marketing & AI sales engines for local clients seamlessly.' },
  { step: '07', title: 'Grow', icon: TrendingUp, desc: 'Expand monthly recurring service revenue and local client satisfaction.' },
  { step: '08', title: 'Scale', icon: Maximize2, desc: 'Scale team operations across neighboring taluks and districts.' },
];

const FranchiseSection = ({ onApplyClick, onRequestDetailsClick, onTalkAdvisorClick }) => {
  return (
    <section id="franchise" className="py-20 md:py-28 bg-backwater text-ivory relative border-b border-kasavu/20 overflow-hidden">
      
      {/* Glow overlays */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-palm/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-kasavu/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeading
          kicker="FRANCHISE PARTNERSHIP MODEL"
          title="The 8-Step Franchise Enablement Framework"
          subtitle="Empowering district entrepreneurs to own and operate an authorized Digital Kerala Mission AI consultancy."
          theme="dark"
          className="mb-16"
        />

        {/* 8 Step Framework Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.step}
                className="bg-white/5 border border-kasavu/20 hover:border-kasavu rounded-2xl p-6 transition-all duration-300 hover:bg-white/10 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-kasavu px-2.5 py-1 rounded bg-kasavu/10 border border-kasavu/30">
                      STEP {item.step}
                    </span>
                    <div className="p-2.5 rounded-xl bg-kasavu/20 text-kasavu group-hover:bg-kasavu group-hover:text-backwater transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <h4 className="text-lg font-serif font-bold text-ivory mb-2 group-hover:text-kasavu-soft transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-xs sm:text-sm font-sans text-ivory/80 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-kasavu/10 text-[10px] font-mono text-kasavu flex items-center justify-between">
                  <span>Authorized Process</span>
                  <span>✓ Verified</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Official Partners Card Banner */}
        <div className="bg-gradient-to-r from-palm/50 via-backwater to-palm/50 rounded-2xl p-6 sm:p-8 border border-kasavu/30 mb-12 backdrop-blur-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs font-mono text-kasavu font-semibold uppercase tracking-wider">
                Official Ecosystem Partners
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-ivory">
                Backing Every Franchise Operator
              </h3>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="px-5 py-3 rounded-xl bg-white/10 border border-kasavu/30 text-center">
                <span className="text-xs font-mono text-kasavu block">WhiteSketch</span>
                <span className="text-xs font-sans text-ivory/90 font-medium">Training Partner</span>
              </div>

              <div className="px-5 py-3 rounded-xl bg-white/10 border border-kasavu/30 text-center">
                <span className="text-xs font-mono text-kasavu block">Dynexo IT Solutions</span>
                <span className="text-xs font-sans text-ivory/90 font-medium">Technology Partner</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            variant="primary"
            size="lg"
            icon={ArrowRight}
            iconPosition="right"
            onClick={onApplyClick}
            className="w-full sm:w-auto"
          >
            Apply for Franchise Partnership
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={onRequestDetailsClick}
            className="w-full sm:w-auto text-ivory border-kasavu/50 hover:bg-kasavu/10 hover:text-kasavu"
          >
            Request Franchise Details
          </Button>

          <Button
            variant="ghost"
            size="lg"
            onClick={onTalkAdvisorClick}
            className="w-full sm:w-auto text-kasavu hover:bg-white/10"
          >
            Talk to a Partnership Advisor
          </Button>
        </div>

        {/* Compliance & Non-Earnings Disclaimer */}
        <div className="p-4 sm:p-5 rounded-xl bg-black/30 border border-kasavu/20 flex items-start gap-3 max-w-4xl mx-auto">
          <ShieldAlert className="w-5 h-5 text-kasavu shrink-0 mt-0.5" />
          <p className="text-xs font-sans text-ivory/70 leading-relaxed">
            <strong className="text-kasavu font-semibold">Compliance Notice: </strong>
            Digital Kerala Mission franchise model is an enablement and technology access framework. Do not make or rely on guaranteed income, profit, or instant success claims. Partner results depend on district execution, local market adoption, and commitment.
          </p>
        </div>

      </div>
    </section>
  );
};

export default FranchiseSection;
