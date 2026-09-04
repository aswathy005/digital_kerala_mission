import React from 'react';
import SectionHeading from './SectionHeading';
import { AlertTriangle, CheckCircle2, Clock, Flame, RefreshCw, Sparkles, TrendingUp, Zap } from 'lucide-react';

const ProblemSolution = () => {
  const problems = [
    {
      icon: Clock,
      title: 'Delayed Lead Responses',
      desc: 'Potential clients drop off within 5 minutes if WhatsApp or social media enquiries are not answered immediately.',
    },
    {
      icon: Flame,
      title: 'Manual Content Burnout',
      desc: 'Business owners spend exhausting hours creating posts and videos manually, leading to inconsistent brand visibility.',
    },
    {
      icon: AlertTriangle,
      title: 'Fragmented Marketing Tools',
      desc: 'Using disconnected software, random agency ads, and isolated spreadsheets with zero unified customer journey visibility.',
    },
    {
      icon: RefreshCw,
      title: 'No Systematic Follow-up',
      desc: 'Up to 80% of sales require 5 follow-ups, yet most businesses give up after 1 manual attempt due to lack of time.',
    },
  ];

  const solutions = [
    {
      icon: Zap,
      title: 'Instant 24/7 AI Automation',
      desc: 'AI agents respond immediately on WhatsApp and social channels, qualifying leads in seconds with hyper-relevant replies.',
    },
    {
      icon: Sparkles,
      title: 'Digital Twin & AI Content Engine',
      desc: 'Generate continuous high-converting video, image, and text content aligned with customer psychology automatically.',
    },
    {
      icon: TrendingUp,
      title: 'Unified Sales Engine',
      desc: '10 growth systems working together as one connected pipeline from initial attention to high-retention brand advocate.',
    },
    {
      icon: CheckCircle2,
      title: 'Automated 9-Stage Nurturing',
      desc: 'Systematic multi-touch point follow-ups that turn cold inquiries into trust-filled, repeat sales conversations.',
    },
  ];

  return (
    <section id="problem-solution" className="py-20 md:py-28 bg-ivory relative border-b border-kasavu/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          kicker="TRANSFORMING KERALA BUSINESSES"
          title="From Fragmented Efforts to an Automated AI Sales Engine"
          subtitle="Stop relying on manual hustle. Shift from isolated marketing tactics to a connected AI growth system."
          theme="light"
          className="mb-16"
        />

        {/* Two Column Layout: Problem vs Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* PROBLEM COLUMN */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-chilli/30 shadow-lg relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 left-0 right-0 h-2 bg-chilli"></div>
            
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-chilli/10 text-chilli text-xs font-mono font-semibold uppercase mb-4">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>The Traditional Problem</span>
              </div>

              <h3 className="text-2xl font-serif font-bold text-ink mb-4">
                "Marketing shouldn't depend on constant manual effort."
              </h3>

              <p className="text-sm font-sans text-ink-soft mb-8 leading-relaxed">
                Most Kerala business owners struggle with inconsistent leads because their marketing relies entirely on manual intervention, guesswork, and uncoordinated tools.
              </p>

              <div className="space-y-6">
                {problems.map((item, idx) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="p-2.5 rounded-xl bg-chilli/10 text-chilli shrink-0 mt-0.5">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-serif font-bold text-base text-ink">{item.title}</h4>
                        <p className="text-xs sm:text-sm font-sans text-ink-soft mt-0.5 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-100 text-xs font-mono text-chilli font-semibold flex items-center gap-2">
              <span>⚠️ Result: Wasted budget, missed sales & founder exhaustion.</span>
            </div>
          </div>

          {/* SOLUTION COLUMN */}
          <div className="bg-backwater rounded-2xl p-6 sm:p-8 border border-kasavu shadow-2xl text-ivory relative overflow-hidden flex flex-col justify-between kasavu-border-glow">
            <div className="absolute top-0 left-0 right-0 h-2 bg-kasavu-gradient"></div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-kasavu/10 rounded-full blur-2xl pointer-events-none"></div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kasavu/20 text-kasavu-soft text-xs font-mono font-semibold uppercase mb-4 border border-kasavu/30">
                <Sparkles className="w-3.5 h-3.5 text-kasavu" />
                <span>The AI Engine Solution</span>
              </div>

              <h3 className="text-2xl font-serif font-bold text-ivory mb-4">
                "One engine. Multiple AI-powered growth systems."
              </h3>

              <p className="text-sm font-sans text-ivory/80 mb-8 leading-relaxed">
                Digital Kerala Mission delivers a fully connected AI Sales Engine designed to capture, nurture, convert, and retain customers on autopilot.
              </p>

              <div className="space-y-6">
                {solutions.map((item, idx) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="p-2.5 rounded-xl bg-kasavu/20 text-kasavu shrink-0 mt-0.5 border border-kasavu/30">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-serif font-bold text-base text-ivory">{item.title}</h4>
                        <p className="text-xs sm:text-sm font-sans text-ivory/80 mt-0.5 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-kasavu/20 text-xs font-mono text-kasavu flex items-center justify-between">
              <span>✨ Advantage: Predictable, scalable brand growth.</span>
              <span className="font-bold">10 Systems Unified</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
