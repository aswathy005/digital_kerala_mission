import React, { useState, useEffect } from 'react';
import { Quote, Sparkles } from 'lucide-react';
import { getTestimonials } from '../services/apiServices';
import LoadingState from '../components/LoadingState';

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadTestimonials = async () => {
      try {
        const res = await getTestimonials();
        if (Array.isArray(res?.data)) {
          setTestimonials(res.data);
        }
      } catch (err) {
        setError(err.userMessage || 'Unable to load success stories right now.');
      } finally {
        setIsLoading(false);
      }
    };
    loadTestimonials();
  }, []);

  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 text-primary-purple text-xs font-mono font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>REAL RESULTS & REVIEWS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-navy-dark">
            WHAT BUSINESS OWNERS SAY
          </h2>
        </div>

        {isLoading ? (
          <LoadingState text="Loading success stories..." />
        ) : error ? (
          <p className="text-center text-sm text-slate-body py-12">{error}</p>
        ) : testimonials.length === 0 ? (
          <p className="text-center text-sm text-slate-body py-12">Success stories will appear here soon.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-purple-50/50 rounded-3xl p-8 border border-purple-100 shadow-soft-card flex flex-col justify-between hover:shadow-lg transition-all duration-300 relative group"
            >
              <div>
                <Quote className="w-10 h-10 text-primary-purple/30 mb-4 group-hover:text-primary-purple/50 transition-colors" />
                <p className="text-sm font-sans font-medium text-navy-dark leading-relaxed mb-6 italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-purple-100">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-primary-purple/30"
                />
                <div>
                  <h4 className="font-sans font-bold text-sm text-navy-dark">{item.name}</h4>
                  <p className="text-xs font-sans text-slate-body">{item.role}, {item.location}</p>
                </div>
              </div>
            </div>
            ))}
          </div>
        )}

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-primary-purple"></span>
          <span className="w-2 h-2 rounded-full bg-purple-200"></span>
          <span className="w-2 h-2 rounded-full bg-purple-200"></span>
          <span className="w-2 h-2 rounded-full bg-purple-200"></span>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
