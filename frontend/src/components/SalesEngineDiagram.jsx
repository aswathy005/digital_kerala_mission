import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import {
  MessageSquare,
  Share2,
  UserCheck,
  Bot,
  Video,
  UserCheck2,
  Brain,
  HeartHandshake,
  Workflow,
  BarChart3,
  ArrowRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

const systemsData = [
  {
    id: 'whatsapp',
    number: '01',
    name: 'WhatsApp Automation',
    icon: MessageSquare,
    tagline: 'Instant 2-way conversing on Kerala’s #1 communication app',
    description: 'Automate customer greetings, product catalogs, FAQ handling, broadcast campaigns, and payment links with zero human delay.',
    benefits: ['Instant 3-second lead reply', 'Automated catalog messaging', 'Broadcast segmenting']
  },
  {
    id: 'social',
    number: '02',
    name: 'Social Media Automation',
    icon: Share2,
    tagline: 'Multi-channel publishing & comment-to-DM triggers',
    description: 'Auto-publish posts across Instagram, Facebook, LinkedIn, and YouTube Shorts while turning comments into private sales DMs automatically.',
    benefits: ['Auto DM on comment trigger', 'Multi-platform scheduling', 'Lead capture from stories']
  },
  {
    id: 'virtual-influencer',
    number: '03',
    name: 'Virtual Influencer',
    icon: UserCheck,
    tagline: 'Hyper-realistic AI brand ambassadors for continuous presence',
    description: 'Deploy photo-real Virtual AI Brand Ambassadors tailored for Malayalam & English audiences to present products without actor fees.',
    benefits: ['100% brand safety', 'Multilingual video output', 'Zero recurring actor production cost']
  },
  {
    id: 'ai-sales-agent',
    number: '04',
    name: 'AI Sales Agent',
    icon: Bot,
    tagline: '24/7 intelligent objection handling & deal closing',
    description: 'Train an AI agent on your exact business knowledge base to answer pricing, specs, availability, and close appointments around the clock.',
    benefits: ['Knowledge base trained', 'Human handover fallback', 'Context-aware deal closing']
  },
  {
    id: 'content-creation',
    number: '05',
    name: 'Content Creation Automation',
    icon: Video,
    tagline: 'High-volume graphic, caption, & short video creation',
    description: 'Generate hyper-converting visual assets, localized captions, ad copy, and reel scripts tailored to your target Kerala demographics.',
    benefits: ['Daily visual asset generation', 'Malayalam & English copy', 'SEO & hashtag optimization']
  },
  {
    id: 'digital-twin',
    number: '06',
    name: 'Digital Twin of Brand Owner',
    icon: UserCheck2,
    tagline: 'Clone the founder’s voice & video appearance',
    description: 'Create an AI avatar replica of the business owner to broadcast authentic video announcements and sales videos without spending days filming.',
    benefits: ['Founder voice cloning', 'High personal trust factor', 'Time-saving video creation']
  },
  {
    id: 'psychology',
    number: '07',
    name: 'Customer Psychology',
    icon: Brain,
    tagline: 'Behavioral profiling & buyer intent scoring',
    description: 'Analyze customer interest signals, buying triggers, and decision patterns to deliver hyper-targeted sales messaging at the exact right moment.',
    benefits: ['Lead scoring framework', 'Behavioral trigger mapping', 'Intent-based messaging']
  },
  {
    id: 'emotional-marketing',
    number: '08',
    name: 'Emotional Marketing',
    icon: HeartHandshake,
    tagline: 'Cultural resonance & trust-building storytelling',
    description: 'Craft brand narratives, festive hooks (Onam, Vishu, Wedding season), and Kerala-centric emotional touchpoints that build long-term loyalty.',
    benefits: ['Cultural resonance', 'High brand affinity', 'Festive campaign blueprints']
  },
  {
    id: 'marketing-automation',
    number: '09',
    name: 'Marketing Automation',
    icon: Workflow,
    tagline: 'Multi-touch point nurturing sequences',
    description: 'Automated email, SMS, and WhatsApp drip sequences that follow up with leads across 14 days, turning cold inquiries into warm sales.',
    benefits: ['14-day drip campaigns', 'Cross-channel synchronicity', 'Re-engagement triggers']
  },
  {
    id: 'analytics',
    number: '10',
    name: 'Analytics & Optimization',
    icon: BarChart3,
    tagline: 'Real-time ROI dashboard & AI conversion tuning',
    description: 'Monitor lead velocity, campaign conversion rates, cost per acquisition, and top-performing messaging with automatic AI self-optimization.',
    benefits: ['Real-time KPI metrics', 'Conversion bottleneck detection', 'Automated campaign tuning']
  }
];

const SalesEngineDiagram = () => {
  const [activeSystemId, setActiveSystemId] = useState('whatsapp');

  const activeSystem = systemsData.find((s) => s.id === activeSystemId) || systemsData[0];

  return (
    <section id="ai-sales-engine" className="py-20 md:py-28 bg-backwater text-ivory relative border-b border-kasavu/20 overflow-hidden">
      
      {/* Decorative background lights */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-kasavu/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-palm/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeading
          kicker="INTERACTIVE ENGINE ARCHITECTURE"
          title="Your business's AI-powered marketing & sales engine"
          subtitle="Explore how 10 specialized AI systems converge into a single automated pipeline that attracts, nurtures, and converts customers."
          theme="dark"
          className="mb-16"
        />

        {/* Interactive Ecosystem Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left / Center Grid of 10 Systems (7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-2 gap-3.5 sm:gap-4">
            {systemsData.map((sys) => {
              const IconComp = sys.icon;
              const isActive = sys.id === activeSystemId;

              return (
                <button
                  key={sys.id}
                  onClick={() => setActiveSystemId(sys.id)}
                  onMouseEnter={() => setActiveSystemId(sys.id)}
                  className={`p-4 rounded-xl text-left transition-all duration-200 border cursor-pointer relative group flex flex-col justify-between min-h-[110px] ${
                    isActive
                      ? 'bg-gradient-to-br from-palm to-backwater border-kasavu text-ivory shadow-xl ring-2 ring-kasavu/40 scale-[1.02]'
                      : 'bg-white/5 border-kasavu/20 text-ivory/80 hover:bg-white/10 hover:border-kasavu/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-mono font-bold ${isActive ? 'text-kasavu' : 'text-ivory/40'}`}>
                      {sys.number}
                    </span>
                    <div className={`p-2 rounded-lg ${isActive ? 'bg-kasavu text-backwater' : 'bg-white/10 text-kasavu'}`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="mt-3">
                    <h4 className={`text-xs sm:text-sm font-serif font-bold leading-tight ${isActive ? 'text-kasavu-soft' : 'text-ivory'}`}>
                      {sys.name}
                    </h4>
                  </div>

                  {isActive && (
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-kasavu animate-ping"></span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Detail Card - Converging Ecosystem Details (5 Cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-gradient-to-b from-palm-soft/30 to-backwater/95 rounded-2xl p-6 sm:p-8 border border-kasavu/40 shadow-2xl backdrop-blur-md kasavu-border-glow space-y-6">
              
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-kasavu/20 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-kasavu text-backwater font-bold">
                    <activeSystem.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-kasavu font-semibold uppercase tracking-wider">
                      SYSTEM {activeSystem.number} OF 10
                    </span>
                    <h3 className="text-xl font-serif font-bold text-ivory">
                      {activeSystem.name}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Tagline & Description */}
              <div>
                <p className="text-sm font-mono text-kasavu-soft mb-3 italic">
                  "{activeSystem.tagline}"
                </p>
                <p className="text-sm font-sans text-ivory/85 leading-relaxed">
                  {activeSystem.description}
                </p>
              </div>

              {/* Key System Capabilities */}
              <div className="space-y-2.5 pt-2">
                <h4 className="text-xs font-mono text-kasavu uppercase tracking-wider font-semibold">
                  Key Capabilities
                </h4>
                {activeSystem.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-sans text-ivory/90">
                    <CheckCircle2 className="w-4 h-4 text-kasavu shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Ecosystem Convergence Banner */}
              <div className="pt-4 border-t border-kasavu/20">
                <div className="p-3 rounded-xl bg-kasavu/10 border border-kasavu/30 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-kasavu" />
                    <span className="text-xs font-sans text-ivory/90">
                      Feeds directly into Customer Journey Funnel
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-kasavu animate-pulse" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SalesEngineDiagram;
