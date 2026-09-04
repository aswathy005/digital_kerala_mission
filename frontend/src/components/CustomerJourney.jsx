import React from 'react';
import SectionHeading from './SectionHeading';
import { Eye, MessageCircle, ShieldCheck, UserPlus, MessageSquareMore, CheckCircle, RefreshCw, Heart, Crown } from 'lucide-react';

const stages = [
  {
    step: '01',
    title: 'Attention',
    icon: Eye,
    desc: 'AI Content Engine & Social Media Automation grab targeted local audience interest.',
  },
  {
    step: '02',
    title: 'Engagement',
    icon: MessageCircle,
    desc: 'Interactive reels, stories, and Virtual Influencer videos trigger high-intent comments.',
  },
  {
    step: '03',
    title: 'Trust',
    icon: ShieldCheck,
    desc: 'Digital Twin videos and Emotional Marketing build immediate founder credibility.',
  },
  {
    step: '04',
    title: 'Lead',
    icon: UserPlus,
    desc: 'Automated comment-to-DM & landing forms instantly capture verified buyer details.',
  },
  {
    step: '05',
    title: 'Conversation',
    icon: MessageSquareMore,
    desc: 'WhatsApp AI Sales Agent initiates 24/7 personalized, context-aware dialogue.',
  },
  {
    step: '06',
    title: 'Conversion',
    icon: CheckCircle,
    desc: 'Automated objection handling, catalog links, and instant checkout close the deal.',
  },
  {
    step: '07',
    title: 'Follow-up',
    icon: RefreshCw,
    desc: 'Multi-touch point nurturing keeps post-purchase communication warm automatically.',
  },
  {
    step: '08',
    title: 'Repeat Customer',
    icon: Heart,
    desc: 'Customer Psychology triggers re-order reminders, upsells, and loyalty rewards.',
  },
  {
    step: '09',
    title: 'Brand',
    icon: Crown,
    desc: 'Satisfied buyers turn into organic brand advocates, compounding digital word-of-mouth.',
  },
];

const CustomerJourney = () => {
  return (
    <section id="customer-journey" className="py-20 md:py-28 bg-ivory text-ink relative border-b border-kasavu/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          kicker="AUTOMATED PIPELINE FLOW"
          title="The 9-Stage Customer Growth Journey"
          subtitle="How the AI Sales Engine guides every potential buyer from initial curiosity to loyal brand advocate."
          theme="light"
          className="mb-16"
        />

        {/* Horizontal Scroll Container for Desktop & Mobile */}
        <div className="relative">
          
          {/* Subtle Connector Line behind items on desktop */}
          <div className="hidden xl:block absolute top-12 left-8 right-8 h-1 bg-gradient-to-r from-kasavu-soft via-palm to-kasavu z-0"></div>

          <div className="flex xl:grid xl:grid-cols-9 gap-4 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-kasavu scrollbar-track-ivory-dim">
            {stages.map((stage) => {
              const IconComp = stage.icon;
              return (
                <div
                  key={stage.step}
                  className="snap-center shrink-0 w-64 xl:w-auto bg-white rounded-2xl p-5 border border-kasavu/30 shadow-md hover:shadow-xl hover:border-kasavu transition-all duration-300 relative z-10 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Step Number Badge & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-kasavu px-2 py-0.5 rounded bg-kasavu/10 border border-kasavu/20">
                        {stage.step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-palm/10 text-palm flex items-center justify-center group-hover:bg-kasavu group-hover:text-backwater transition-colors">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Stage Title */}
                    <h4 className="text-base font-serif font-bold text-backwater mb-2 group-hover:text-kasavu transition-colors">
                      {stage.title}
                    </h4>

                    {/* Stage Description */}
                    <p className="text-xs font-sans text-ink-soft leading-relaxed">
                      {stage.desc}
                    </p>
                  </div>

                  {/* Step Connector Indicator */}
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[10px] font-mono text-ink-soft/60">
                    <span>Stage {stage.step}</span>
                    <span className="text-kasavu font-bold group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CustomerJourney;
