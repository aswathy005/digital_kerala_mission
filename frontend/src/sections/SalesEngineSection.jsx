import React from 'react';
import { MessageSquare, Share2, Bot, PenTool, Brain, Heart, Workflow, BarChart3, Cpu, Sparkles } from 'lucide-react';

const systems = [
  {
    id: 1,
    title: 'WhatsApp Automation',
    desc: 'Smart conversations, follow-ups and customer relationship management.',
    icon: MessageSquare,
    iconBg: 'bg-emerald-500 text-white',
  },
  {
    id: 2,
    title: 'Social Media Automation',
    desc: 'Automated content, publishing, engagement and lead generation on Facebook & Instagram.',
    icon: Share2,
    iconBg: 'bg-gradient-to-r from-blue-600 to-pink-600 text-white',
  },
  {
    id: 3,
    title: 'AI Sales Agent',
    desc: 'AI agents engage, qualify, inform, support and convert leads into customers—24x7.',
    icon: Bot,
    iconBg: 'bg-primary-purple text-white',
  },
  {
    id: 4,
    title: 'Virtual Influencer',
    desc: 'AI-powered influencers that represent your brand and connect with your audience.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 5,
    title: 'Content Creation Automation',
    desc: 'High-quality content for posts, videos, blogs, captions and more—automatically.',
    icon: PenTool,
    iconBg: 'bg-purple-100 text-primary-purple',
  },
  {
    id: 6,
    title: 'Digital Twin of Brand Owner',
    desc: 'Your AI digital twin communicates, educates and builds trust at scale, like you, 24x7.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 7,
    title: 'Customer Psychology',
    desc: 'We understand customer behaviour, motivations, objections and buying patterns.',
    icon: Brain,
    iconBg: 'bg-purple-100 text-primary-purple',
  },
  {
    id: 8,
    title: 'Emotional Marketing',
    desc: 'Create emotional connections that build trust, loyalty and long-term relationships.',
    icon: Heart,
    iconBg: 'bg-rose-500 text-white',
  },
  {
    id: 9,
    title: 'Marketing Automation',
    desc: 'End-to-end automation of your marketing, nurturing and sales workflows.',
    icon: Workflow,
    iconBg: 'bg-purple-100 text-primary-purple',
  },
  {
    id: 10,
    title: 'Analytics & Optimization',
    desc: 'Real-time insights and AI-driven optimization for better results and more growth.',
    icon: BarChart3,
    iconBg: 'bg-emerald-100 text-emerald-700',
  },
];

const SalesEngineSection = () => {
  return (
    <section id="ai-sales-engine" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 text-primary-purple text-xs font-mono font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI SALES ENGINE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-navy-dark">
            Everything Your Business Needs. In One Intelligent System.
          </h2>
        </div>

        {/* 10 System Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 mb-12">
          {systems.map((sys) => {
            const IconComp = sys.icon;
            return (
              <div
                key={sys.id}
                className="bg-white rounded-2xl p-6 border border-purple-100 shadow-soft-card hover:border-purple-300 hover:shadow-lg transition-all duration-300 flex items-start gap-4 group"
              >
                <div className="shrink-0 mt-0.5">
                  {sys.avatar ? (
                    <img
                      src={sys.avatar}
                      alt={sys.title}
                      className="w-12 h-12 rounded-2xl object-cover ring-2 ring-purple-200 group-hover:scale-105 transition-transform"
                    />
                  ) : (
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform ${sys.iconBg}`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                  )}
                </div>

                <div className="space-y-1">
                  <h3 className="font-sans font-bold text-base text-navy-dark group-hover:text-primary-purple transition-colors">
                    {sys.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-sans text-slate-body leading-relaxed">
                    {sys.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlighted Quote Banner with AI Chip Visual */}
        <div className="bg-navy-gradient rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left max-w-2xl">
            <span className="text-4xl font-serif text-purple-400 leading-none">“</span>
            <p className="text-xl sm:text-2xl font-sans font-bold text-white leading-snug">
              We don’t just automate marketing. <br />
              We build AI Sales Engines that make your business unstoppable.
            </p>
          </div>

          {/* Illuminated AI Microchip Graphic */}
          <div className="shrink-0 relative">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-purple-950 border-2 border-purple-500/50 flex items-center justify-center shadow-2xl shadow-purple-500/40 relative overflow-hidden group">
              <div className="absolute inset-0 bg-purple-600/20 animate-pulse"></div>
              <Cpu className="w-12 h-12 text-purple-300 relative z-10" />
              <span className="absolute bottom-1 font-mono text-[9px] text-purple-300 uppercase tracking-widest font-extrabold">
                AI ENGINE
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SalesEngineSection;
