import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Send, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput('');
    }
  };

  return (
    <footer className="bg-navy-dark text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Logo & Mission Intro */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2.5 inline-flex">
              <div className="w-10 h-10 rounded-xl bg-purple-gradient flex items-center justify-center text-white">
                <span className="font-sans text-xs font-black tracking-tighter">DKM</span>
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-sm font-extrabold text-white tracking-tight leading-none">
                  DIGITAL KERALA
                </span>
                <span className="font-sans text-[10px] font-bold text-primary-purple tracking-widest leading-none mt-1">
                  MISSION
                </span>
              </div>
            </Link>

            <p className="text-xs font-sans text-slate-400 leading-relaxed">
              Our mission is to make all businesses in Kerala a brand through technology integration and emotional marketing by customer psychology.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-primary-purple text-white flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-primary-purple text-white flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-primary-purple text-white flex items-center justify-center transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-primary-purple text-white flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-sans font-bold text-sm text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-sans text-slate-400">
              <li><Link to="/" className="hover:text-primary-purple transition-colors">Home</Link></li>
              <li><Link to="/ai-sales-engine" className="hover:text-primary-purple transition-colors">AI Sales Engine</Link></li>
              <li><Link to="/business-owners" className="hover:text-primary-purple transition-colors">For Business Owners</Link></li>
              <li><Link to="/partners" className="hover:text-primary-purple transition-colors">For Partners</Link></li>
              <li><Link to="/about" className="hover:text-primary-purple transition-colors">About Us</Link></li>
              <li><Link to="/resources" className="hover:text-primary-purple transition-colors">Resources</Link></li>
            </ul>
          </div>

          {/* Col 3: For Business Owners */}
          <div className="space-y-3">
            <h4 className="font-sans font-bold text-sm text-white uppercase tracking-wider">
              For Business Owners
            </h4>
            <ul className="space-y-2 text-xs font-sans text-slate-400">
              <li><a href="#hero" className="hover:text-primary-purple transition-colors">Overview</a></li>
              <li><a href="#ai-sales-engine" className="hover:text-primary-purple transition-colors">How It Works</a></li>
              <li><a href="#resources" className="hover:text-primary-purple transition-colors">Case Studies</a></li>
              <li><a href="#opportunities" className="hover:text-primary-purple transition-colors">Pricing & Plans</a></li>
              <li><a href="#why-us" className="hover:text-primary-purple transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Col 4: For Partners */}
          <div className="space-y-3">
            <h4 className="font-sans font-bold text-sm text-white uppercase tracking-wider">
              For Partners
            </h4>
            <ul className="space-y-2 text-xs font-sans text-slate-400">
              <li><a href="#opportunities" className="hover:text-primary-purple transition-colors">Overview</a></li>
              <li><a href="#opportunities" className="hover:text-primary-purple transition-colors">Partner Benefits</a></li>
              <li><a href="#partners" className="hover:text-primary-purple transition-colors">Training & Certification</a></li>
              <li><a href="#opportunities" className="hover:text-primary-purple transition-colors">Become a Partner</a></li>
              <li><a href="#contact" className="hover:text-primary-purple transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Col 5: Contact & Stay Updated */}
          <div className="space-y-4">
            <h4 className="font-sans font-bold text-sm text-white uppercase tracking-wider">
              Contact Us
            </h4>

            <div className="space-y-2 text-xs font-sans text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-primary-purple shrink-0" />
                <span>+91 7907106605</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-primary-purple shrink-0" />
                <span>info@dynexoit.com</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-primary-purple shrink-0" />
                <span>calicut, Kerala, India</span>
              </div>
            </div>

            {/* Newsletter Stay Updated */}
            <div className="pt-2">
              <span className="block text-xs font-sans font-semibold text-white mb-2">
                Stay Updated
              </span>
              <p className="text-[11px] text-slate-400 mb-2">
                Get the latest updates and growth tips for your business.
              </p>

              {subscribed ? (
                <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-mono text-center">
                  ✓ Subscribed successfully!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-center gap-1">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    required
                    className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-primary-purple"
                  />
                  <button
                    type="submit"
                    className="p-2 rounded-lg bg-primary-purple hover:bg-purple-dark text-white shrink-0 transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-slate-500">
          <p>© 2026 Digital Kerala Mission. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link to="/" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-slate-300 transition-colors">Terms & Conditions</Link>
            <Link to="/admin/login" className="font-mono text-primary-purple hover:underline">Admin Login</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
