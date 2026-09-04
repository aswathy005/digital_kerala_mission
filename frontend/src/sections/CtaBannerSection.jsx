import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../components/Button';

const CtaBannerSection = ({ onCtaClick }) => {
  return (
    <section className="py-12 bg-white relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl overflow-hidden shadow-2xl p-8 sm:p-14 text-white kerala-cta-bg flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Headline & Subtitle */}
        <div className="space-y-3 text-center md:text-left max-w-2xl relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-white leading-tight">
            Your Business Has a Story. <br />
            Let’s Build a Brand Around It.
          </h2>
          <p className="text-base sm:text-lg font-sans text-purple-200">
            Start your AI-powered growth journey today.
          </p>
        </div>

        {/* Right CTA Button */}
        <div className="relative z-10 shrink-0">
          <Button
            variant="white"
            size="lg"
            className="rounded-full px-8 py-4 text-primary-purple font-extrabold shadow-2xl hover:scale-105 transition-transform"
            icon={ArrowRight}
            iconPosition="right"
            onClick={onCtaClick}
          >
            Book a Free Consultation
          </Button>
        </div>

      </div>
    </section>
  );
};

export default CtaBannerSection;
