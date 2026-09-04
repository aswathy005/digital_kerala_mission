import React from 'react';
import { Target, Cpu, Clock, Layers, Users, TrendingUp } from 'lucide-react';

const valueItems = [
  {
    icon: Target,
    title: 'ONE MISSION',
    subtitle: 'For Kerala Businesses',
  },
  {
    icon: Cpu,
    title: 'AI-POWERED',
    subtitle: 'Marketing & Sales',
  },
  {
    icon: Clock,
    title: '24/7',
    subtitle: 'Automated Engagement',
  },
  {
    icon: Layers,
    title: 'ONE SYSTEM',
    subtitle: 'Multiple Growth Tools',
  },
  {
    icon: Users,
    title: 'CUSTOMER-FIRST',
    subtitle: 'Psychology + Emotion',
  },
  {
    icon: TrendingUp,
    title: 'BUILT TO SCALE',
    subtitle: 'Business → Brand',
  },
];

const ValueStripSection = () => {
  return (
    <section className="relative -mt-10 mb-16 z-30 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-soft-card border border-purple-100">
        
        {/* Header */}
        <div className="text-center space-y-2 mb-10">
          <h2 className="text-2xl sm:text-3xl font-sans font-extrabold text-navy-dark">
            A New Beginning for Kerala Businesses
          </h2>
          <p className="text-sm sm:text-base font-sans text-slate-body">
            One mission. One intelligent system. A bigger vision for every business in Kerala.
          </p>
        </div>

        {/* 6 Feature Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {valueItems.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center p-4 rounded-2xl hover:bg-purple-50/60 transition-colors duration-200 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-purple-100/70 text-primary-purple flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-primary-purple group-hover:text-white transition-all duration-300">
                  <IconComp className="w-6 h-6" />
                </div>
                <h4 className="text-xs font-mono font-extrabold text-navy-dark tracking-wider uppercase mb-1">
                  {item.title}
                </h4>
                <p className="text-xs font-sans text-slate-body font-medium">
                  {item.subtitle}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ValueStripSection;
