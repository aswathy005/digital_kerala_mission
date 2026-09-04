import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Zap, TrendingUp, CheckCircle2 } from 'lucide-react';
import Button from './Button';

const Hero = ({ onBuildClick, onFranchiseClick }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-backwater-radial text-ivory border-b border-kasavu/20">
      
      {/* Kerala Backwater / Wave Decorative Background Overlay */}
      <div className="absolute inset-0 opacity-15 pointer-events-none kerala-river-pattern"></div>
      
      {/* Organic River Wave SVG shape in background */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-kasavu/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-palm-soft/20 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Content Column */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Top Mission Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-palm/60 border border-kasavu/40 backdrop-blur-sm text-xs font-mono tracking-wider uppercase text-kasavu-soft shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-kasavu animate-pulse" />
              <span>Digital Kerala Mission Initiative</span>
              <span className="w-1.5 h-1.5 rounded-full bg-kasavu"></span>
              <span className="text-ivory/80">AI Sales Engine</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-ivory leading-[1.15] tracking-tight">
              Build Your <span className="text-kasavu-gradient">AI Sales Engine.</span> <br className="hidden sm:inline" />
              Scale Your Business. <br className="hidden sm:inline" />
              Build Your Brand.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg md:text-xl font-sans text-ivory/85 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Your business needs more than digital tools. It needs a connected system that attracts the right customers, builds trust, starts conversations, follows up, supports sales and keeps your brand visible — automatically.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                onClick={onBuildClick}
                className="w-full sm:w-auto"
              >
                Build My AI Sales Engine
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={onFranchiseClick}
                className="w-full sm:w-auto text-ivory border-kasavu/50 hover:bg-kasavu/10 hover:text-kasavu"
              >
                Explore Franchise Partnership
              </Button>
            </div>

            {/* Quick Feature Badges */}
            <div className="pt-6 border-t border-kasavu/15 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-kasavu shrink-0" />
                <span className="text-xs font-mono text-ivory/80">10 AI Systems</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-kasavu shrink-0" />
                <span className="text-xs font-mono text-ivory/80">14 Districts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-kasavu shrink-0" />
                <span className="text-xs font-mono text-ivory/80">Backend API Ready</span>
              </div>
            </div>

          </div>

          {/* Right Visual Card - Interactive Preview Diagram Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl bg-gradient-to-b from-palm/40 to-backwater/90 border border-kasavu/30 p-6 shadow-2xl backdrop-blur-md kasavu-border-glow">
              
              {/* Backwater Wave Graphic Accent */}
              <div className="flex items-center justify-between border-b border-kasavu/20 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-chilli"></div>
                  <div className="w-3 h-3 rounded-full bg-kasavu"></div>
                  <div className="w-3 h-3 rounded-full bg-palm-soft"></div>
                </div>
                <span className="text-xs font-mono text-kasavu tracking-widest uppercase">
                  Engine Flow v2.4
                </span>
              </div>

              {/* Graphic Flow Nodes */}
              <div className="space-y-4">
                <div className="p-3.5 rounded-xl bg-white/5 border border-kasavu/20 flex items-center justify-between hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-kasavu/20 text-kasavu">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold font-serif text-ivory">Lead Generation & Capture</h4>
                      <p className="text-xs font-sans text-ivory/70">WhatsApp + Social Media Automation</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-kasavu/20 text-kasavu border border-kasavu/30">Active</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-kasavu/20 flex items-center justify-between hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-palm-soft/30 text-kasavu-soft">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold font-serif text-ivory">AI Sales Agent & Psychology</h4>
                      <p className="text-xs font-sans text-ivory/70">Emotional Marketing & Nurturing</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-palm/40 text-kasavu-soft border border-kasavu/20">System 04</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-kasavu/20 flex items-center justify-between hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-kasavu/20 text-kasavu">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold font-serif text-ivory">Conversion & Brand Royalty</h4>
                      <p className="text-xs font-sans text-ivory/70">Digital Twin & Multi-Touch Retargeting</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-kasavu/20 text-kasavu border border-kasavu/30">Automated</span>
                </div>
              </div>

              {/* Bottom Partner Endorsement */}
              <div className="mt-6 pt-4 border-t border-kasavu/20 flex items-center justify-between text-xs font-mono text-ivory/70">
                <span>Technology: Dynexo IT</span>
                <span>Training: WhiteSketch</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
