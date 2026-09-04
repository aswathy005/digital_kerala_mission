import React from 'react';
import { ArrowRight, Sparkles, MessageSquare, Share2, Bot, Video, UserCheck, PenTool, BarChart3 } from 'lucide-react';
import Button from '../components/Button';

const HeroSection = ({ onBusinessClick, onPartnerClick }) => {
  return (
    <section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-24 bg-hero-lavender relative overflow-hidden">
      
      {/* Soft background light blurred circles */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-100/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: HERO CONTENT */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100/80 text-primary-purple text-xs font-mono font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OUR MISSION</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold text-navy-dark leading-[1.12] tracking-tight">
              Every Business in Kerala, <br />
              <span className="text-purple-gradient">A Brand</span> the World Trusts.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg font-sans text-slate-body leading-relaxed max-w-xl mx-auto lg:mx-0">
              We combine Technology, Customer Psychology and Emotional Marketing to build AI Sales Engines that attract, engage, convert and retain customers—automatically.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button
                variant="purple"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                onClick={onBusinessClick}
                className="w-full sm:w-auto shadow-purple-glow flex flex-col items-center py-3.5 px-7"
              >
                <div className="flex items-center gap-2">
                  <span>I’m a Business Owner</span>
                </div>
                <span className="text-[11px] font-normal opacity-90 -mt-0.5">Scale My Business →</span>
              </Button>

              <Button
                variant="white"
                size="lg"
                onClick={onPartnerClick}
                className="w-full sm:w-auto border border-purple-200 text-navy-dark hover:border-primary-purple hover:bg-purple-50/50 flex flex-col items-center py-3.5 px-7"
              >
                <div className="flex items-center gap-2">
                  <span>I Want to Partner</span>
                </div>
                <span className="text-[11px] font-normal text-slate-500 -mt-0.5">Be a Part of the Mission →</span>
              </Button>
            </div>

            {/* Social Proof / Avatars Row */}
            <div className="pt-6 flex items-center justify-center lg:justify-start gap-3">
              <div className="flex -space-x-2 overflow-hidden">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Kerala Founder" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Kerala Business Owner" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80" alt="Kerala Entrepreneur" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="Partner" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Founder" />
              </div>
              <span className="text-xs font-sans font-medium text-slate-600">
                A mission for businesses across Kerala
              </span>
            </div>

          </div>

          {/* RIGHT COLUMN: KERALA BACKWATER + ORBITAL ECOSYSTEM GRAPHIC */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-square flex items-center justify-center p-6 bg-slate-900">
              
              {/* Backwater Sunset Background Image */}
              <img
                src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80"
                alt="Kerala Backwater Sunset Houseboat"
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />

              {/* Soft purple overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-black/30"></div>

              {/* Central Glowing AI Engine Circle */}
              <div className="relative z-20 w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-white/95 backdrop-blur-md shadow-2xl p-4 flex flex-col items-center justify-center text-center border-4 border-purple-300 ring-8 ring-purple-500/20 transform hover:scale-105 transition-transform duration-300">
                <span className="text-3xl sm:text-4xl font-extrabold text-primary-purple tracking-tighter">
                  AI
                </span>
                <span className="font-extrabold text-xs sm:text-sm text-navy-dark tracking-tight leading-tight mt-0.5">
                  SALES ENGINE
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono text-slate-500 mt-1 max-w-[110px] leading-tight">
                  Your 24x7 AI Growth System
                </span>
              </div>

              {/* Orbital System Nodes */}

              {/* Node 1: WhatsApp Automation (Top Center) */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg border border-emerald-200 flex items-center gap-2 animate-bounce duration-1000">
                <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                  <MessageSquare className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] font-bold text-navy-dark">WhatsApp Automation</span>
              </div>

              {/* Node 2: Social Media Automation (Top Left) */}
              <div className="absolute top-16 left-3 sm:left-6 z-20 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg border border-purple-200 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-pink-600 text-white flex items-center justify-center">
                  <Share2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] font-bold text-navy-dark">Social Media</span>
              </div>

              {/* Node 3: AI Sales Agent (Top Right) */}
              <div className="absolute top-16 right-3 sm:right-6 z-20 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg border border-purple-200 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-primary-purple text-white flex items-center justify-center">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] font-bold text-navy-dark">AI Sales Agent</span>
              </div>

              {/* Node 4: Virtual Influencer (Bottom Left) */}
              <div className="absolute bottom-16 left-3 sm:left-6 z-20 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg border border-purple-200 flex items-center gap-2">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" className="w-6 h-6 rounded-full object-cover" alt="Virtual Influencer" />
                <span className="text-[11px] font-bold text-navy-dark">Virtual Influencer</span>
              </div>

              {/* Node 5: Digital Twin (Bottom Right) */}
              <div className="absolute bottom-16 right-3 sm:right-6 z-20 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg border border-purple-200 flex items-center gap-2">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" className="w-6 h-6 rounded-full object-cover" alt="Digital Twin" />
                <span className="text-[11px] font-bold text-navy-dark">Digital Twin</span>
              </div>

              {/* Node 6: Content Creation (Bottom Center Left) */}
              <div className="absolute bottom-4 left-1/4 z-20 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg border border-purple-200 flex items-center gap-1.5">
                <PenTool className="w-3.5 h-3.5 text-primary-purple" />
                <span className="text-[10px] font-bold text-navy-dark">Content Creation</span>
              </div>

              {/* Node 7: Analytics (Bottom Center Right) */}
              <div className="absolute bottom-4 right-1/4 z-20 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg border border-purple-200 flex items-center gap-1.5">
                <BarChart3 className="w-3.5 h-3.5 text-primary-purple" />
                <span className="text-[10px] font-bold text-navy-dark">Analytics & Optimization</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
