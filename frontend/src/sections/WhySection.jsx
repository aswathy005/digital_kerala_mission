import React from 'react';
import { Play, Heart, Users, Star, Sparkles } from 'lucide-react';

const WhySection = () => {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT COLUMN: Kerala Backwater Image with Play Button */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-xl group min-h-[320px] lg:min-h-[440px]">
            <img
              src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80"
              alt="Kerala Backwater Mission Video"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-navy-dark/30 group-hover:bg-navy-dark/20 transition-colors"></div>

            {/* Circular Purple Play Button Overlay */}
            <button
              aria-label="Play Mission Video"
              className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-primary-purple text-white flex items-center justify-center shadow-2xl shadow-purple-900/50 hover:scale-110 active:scale-95 transition-all duration-300 ring-8 ring-white/30 cursor-pointer"
            >
              <Play className="w-8 h-8 fill-white ml-1" />
            </button>
          </div>

          {/* RIGHT COLUMN: Dark Navy / Purple Gradient Panel */}
          <div className="lg:col-span-7 bg-navy-gradient rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col justify-between relative overflow-hidden">
            
            {/* Background ambient light */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>

            <div className="space-y-6 relative z-10">
              
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-purple-300 text-xs font-mono font-bold uppercase tracking-widest border border-white/10">
                <Sparkles className="w-3.5 h-3.5" />
                <span>OUR MISSION</span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-white">
                Why Digital Kerala Mission?
              </h2>

              {/* Main Narrative */}
              <p className="text-base font-sans text-purple-100/90 leading-relaxed max-w-xl">
                We are on a mission to transform the way businesses grow, connect and build brands in the digital era. Technology is our tool. People are our focus. Growth is our promise.
              </p>

              {/* 3 Mini Cards Inside Panel */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                
                <div className="p-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-purple-500/30 text-purple-300 flex items-center justify-center">
                    <Heart className="w-4 h-4" />
                  </div>
                  <h4 className="font-sans font-bold text-sm text-white">Build the System.</h4>
                  <p className="text-xs text-purple-200/80 leading-relaxed">
                    Powerful technology that works for you.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-purple-500/30 text-purple-300 flex items-center justify-center">
                    <Users className="w-4 h-4" />
                  </div>
                  <h4 className="font-sans font-bold text-sm text-white">Connect With People.</h4>
                  <p className="text-xs text-purple-200/80 leading-relaxed">
                    Meaningful connections that create trust.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-purple-500/30 text-purple-300 flex items-center justify-center">
                    <Star className="w-4 h-4" />
                  </div>
                  <h4 className="font-sans font-bold text-sm text-white">Become a Brand.</h4>
                  <p className="text-xs text-purple-200/80 leading-relaxed">
                    A brand that inspires and lasts.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default WhySection;
