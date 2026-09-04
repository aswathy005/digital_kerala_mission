import React, { useState } from 'react';
import FormField from './FormField';
import Button from './Button';
import Toast from './Toast';
import { submitBusinessEnquiry, submitFranchiseApplication, submitContactMessage } from '../services/apiServices';
import { Building2, Handshake, Mail, Send, CheckCircle2, Sparkles } from 'lucide-react';

const keralaDistricts = [
  'Kasaragod', 'Kannur', 'Wayanad', 'Kozhikode', 'Malappuram',
  'Palakkad', 'Thrissur', 'Ernakulam', 'Idukki', 'Kottayam',
  'Alappuzha', 'Pathanamthitta', 'Kollam', 'Thiruvananthapuram'
];

const businessCategories = [
  'Retail & Shopping',
  'Hospitality, Hotel & Tourism',
  'Healthcare & Clinics',
  'Real Estate & Construction',
  'Education & Coaching Academies',
  'Manufacturing & Export',
  'Jewelry & Apparel',
  'Automotive & Dealerships',
  'Services & Consulting',
  'Other Category'
];

const digitalPresences = [
  'No Digital Presence Yet',
  'WhatsApp Only',
  'Social Media (Instagram/Facebook)',
  'Website & Social Media',
  'Active Paid Ads Campaigns'
];

const preferredTimes = [
  'Morning (9:00 AM - 12:00 PM)',
  'Afternoon (12:00 PM - 4:00 PM)',
  'Evening (4:00 PM - 8:00 PM)',
  'Anytime via WhatsApp'
];

const contactMethods = [
  'WhatsApp Message',
  'Direct Phone Call',
  'Email Correspondence',
  'In-Person Meeting at District Hub'
];

const ContactFormsSection = ({ defaultTab = 'business' }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [toast, setToast] = useState(null);

  // Business Form state
  const [bizData, setBizData] = useState({
    name: '', businessName: '', phone: '', email: '',
    district: '', category: '', digitalPresence: '', challenge: '', preferredTime: ''
  });
  const [bizSubmitting, setBizSubmitting] = useState(false);
  const [bizSuccess, setBizSuccess] = useState(false);

  // Franchise Form state
  const [franData, setFranData] = useState({
    name: '', phone: '', email: '', district: '',
    occupation: '', experience: '', reason: '', contactMethod: ''
  });
  const [franSubmitting, setFranSubmitting] = useState(false);
  const [franSuccess, setFranSuccess] = useState(false);

  // General Contact Form state
  const [msgData, setMsgData] = useState({
    name: '', email: '', phone: '', subject: '', message: ''
  });
  const [msgSubmitting, setMsgSubmitting] = useState(false);
  const [msgSuccess, setMsgSuccess] = useState(false);

  // Handlers
  const handleBizSubmit = async (e) => {
    e.preventDefault();
    if (!bizData.name || !bizData.phone || !bizData.email) return;
    setBizSubmitting(true);
    try {
      const res = await submitBusinessEnquiry(bizData);
      setBizSuccess(true);
      setToast({ type: 'success', message: res.message });
    } catch (err) {
      setToast({ type: 'error', message: err.userMessage || 'Failed to submit' });
    } finally {
      setBizSubmitting(false);
    }
  };

  const handleFranSubmit = async (e) => {
    e.preventDefault();
    if (!franData.name || !franData.phone || !franData.email) return;
    setFranSubmitting(true);
    try {
      const res = await submitFranchiseApplication(franData);
      setFranSuccess(true);
      setToast({ type: 'success', message: res.message });
    } catch (err) {
      setToast({ type: 'error', message: err.userMessage || 'Failed to submit' });
    } finally {
      setFranSubmitting(false);
    }
  };

  const handleMsgSubmit = async (e) => {
    e.preventDefault();
    if (!msgData.name || !msgData.email || !msgData.message) return;
    setMsgSubmitting(true);
    try {
      const res = await submitContactMessage(msgData);
      setMsgSuccess(true);
      setToast({ type: 'success', message: res.message });
    } catch (err) {
      setToast({ type: 'error', message: err.userMessage || 'Failed to send message' });
    } finally {
      setMsgSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50 relative border-t border-slate-100">
      <Toast message={toast?.message} type={toast?.type} onClose={() => setToast(null)} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 text-primary-purple text-xs font-mono font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CONNECT WITH US</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-navy-dark">
            Start Your AI Growth Journey Today
          </h2>
          <p className="text-slate-body font-sans text-sm sm:text-base">
            Select your query type below to get in touch with our Digital Kerala Mission advisors.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-2xl mx-auto p-1.5 rounded-2xl bg-white shadow-soft-card border border-purple-100">
          <button
            onClick={() => setActiveTab('business')}
            className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-sans font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'business'
                ? 'bg-primary-purple text-white shadow-md'
                : 'text-slate-body hover:bg-purple-50'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Business Owner Form</span>
          </button>

          <button
            onClick={() => setActiveTab('franchise')}
            className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-sans font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'franchise'
                ? 'bg-emerald-accent text-white shadow-md'
                : 'text-slate-body hover:bg-emerald-50'
            }`}
          >
            <Handshake className="w-4 h-4" />
            <span>Franchise Partner Form</span>
          </button>

          <button
            onClick={() => setActiveTab('contact')}
            className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-sans font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'contact'
                ? 'bg-navy-dark text-white shadow-md'
                : 'text-slate-body hover:bg-slate-100'
            }`}
          >
            <Mail className="w-4 h-4" />
            <span>General Enquiry</span>
          </button>
        </div>

        {/* Form Container */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-soft-card border border-purple-100">
          
          {/* TAB 1: BUSINESS OWNER FORM */}
          {activeTab === 'business' && (
            <div>
              <div className="border-b pb-4 mb-6">
                <h3 className="text-xl font-sans font-bold text-navy-dark">Business Owner AI Consultation</h3>
                <p className="text-xs text-slate-body">Book your free 1-on-1 strategy call with our AI Sales Engine team.</p>
              </div>

              {bizSuccess ? (
                <div className="py-12 text-center space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-primary-purple mx-auto animate-bounce" />
                  <h4 className="text-2xl font-bold text-navy-dark">Consultation Requested!</h4>
                  <p className="text-sm text-slate-body">Our team will reach out to you within 24 hours.</p>
                  <Button variant="outline" size="sm" onClick={() => setBizSuccess(false)}>
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleBizSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      label="Your Full Name"
                      value={bizData.name}
                      onChange={(e) => setBizData({ ...bizData, name: e.target.value })}
                      placeholder="e.g. Shajid Rahman"
                      required
                    />
                    <FormField
                      label="Business / Enterprise Name"
                      value={bizData.businessName}
                      onChange={(e) => setBizData({ ...bizData, businessName: e.target.value })}
                      placeholder="e.g. Calicut Furnishings"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      label="Phone / WhatsApp Number"
                      type="tel"
                      value={bizData.phone}
                      onChange={(e) => setBizData({ ...bizData, phone: e.target.value })}
                      placeholder="+91 98470 12345"
                      required
                    />
                    <FormField
                      label="Email Address"
                      type="email"
                      value={bizData.email}
                      onChange={(e) => setBizData({ ...bizData, email: e.target.value })}
                      placeholder="you@business.com"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      label="District in Kerala"
                      type="select"
                      value={bizData.district}
                      onChange={(e) => setBizData({ ...bizData, district: e.target.value })}
                      options={keralaDistricts}
                      required
                    />
                    <FormField
                      label="Business Category"
                      type="select"
                      value={bizData.category}
                      onChange={(e) => setBizData({ ...bizData, category: e.target.value })}
                      options={businessCategories}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      label="Current Digital Presence"
                      type="select"
                      value={bizData.digitalPresence}
                      onChange={(e) => setBizData({ ...bizData, digitalPresence: e.target.value })}
                      options={digitalPresences}
                    />
                    <FormField
                      label="Preferred Contact Time"
                      type="select"
                      value={bizData.preferredTime}
                      onChange={(e) => setBizData({ ...bizData, preferredTime: e.target.value })}
                      options={preferredTimes}
                    />
                  </div>

                  <FormField
                    label="Main Marketing or Sales Challenge"
                    type="textarea"
                    rows={3}
                    value={bizData.challenge}
                    onChange={(e) => setBizData({ ...bizData, challenge: e.target.value })}
                    placeholder="Describe your current lead or sales bottleneck..."
                    required
                  />

                  <Button
                    type="submit"
                    variant="purple"
                    size="lg"
                    className="w-full justify-center rounded-2xl mt-2"
                    isLoading={bizSubmitting}
                    icon={Send}
                  >
                    Book a Free Strategy Call
                  </Button>
                </form>
              )}
            </div>
          )}

          {/* TAB 2: FRANCHISE PARTNER FORM */}
          {activeTab === 'franchise' && (
            <div>
              <div className="border-b pb-4 mb-6">
                <h3 className="text-xl font-sans font-bold text-navy-dark">Franchise Partner Application</h3>
                <p className="text-xs text-slate-body">Become an approved Digital Kerala Mission franchisee in your district.</p>
              </div>

              {franSuccess ? (
                <div className="py-12 text-center space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-emerald-accent mx-auto animate-bounce" />
                  <h4 className="text-2xl font-bold text-navy-dark">Application Received!</h4>
                  <p className="text-sm text-slate-body">Our Franchise Advisor will review your profile and reach out.</p>
                  <Button variant="emerald" size="sm" onClick={() => setFranSuccess(false)}>
                    Submit Another Application
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleFranSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      label="Full Name"
                      value={franData.name}
                      onChange={(e) => setFranData({ ...franData, name: e.target.value })}
                      placeholder="e.g. Vineeth Kumar"
                      required
                    />
                    <FormField
                      label="Target Kerala District"
                      type="select"
                      value={franData.district}
                      onChange={(e) => setFranData({ ...franData, district: e.target.value })}
                      options={keralaDistricts}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      label="Phone / WhatsApp Number"
                      type="tel"
                      value={franData.phone}
                      onChange={(e) => setFranData({ ...franData, phone: e.target.value })}
                      placeholder="+91 94471 99887"
                      required
                    />
                    <FormField
                      label="Email Address"
                      type="email"
                      value={franData.email}
                      onChange={(e) => setFranData({ ...franData, email: e.target.value })}
                      placeholder="vineeth@example.com"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      label="Current Occupation / Business"
                      value={franData.occupation}
                      onChange={(e) => setFranData({ ...franData, occupation: e.target.value })}
                      placeholder="e.g. Retail Dealer / IT Agency"
                      required
                    />
                    <FormField
                      label="Preferred Contact Method"
                      type="select"
                      value={franData.contactMethod}
                      onChange={(e) => setFranData({ ...franData, contactMethod: e.target.value })}
                      options={contactMethods}
                    />
                  </div>

                  <FormField
                    label="Relevant Experience"
                    value={franData.experience}
                    onChange={(e) => setFranData({ ...franData, experience: e.target.value })}
                    placeholder="e.g. 5+ years in sales and client distribution..."
                  />

                  <FormField
                    label="Reason for Interest in Franchise"
                    type="textarea"
                    rows={3}
                    value={franData.reason}
                    onChange={(e) => setFranData({ ...franData, reason: e.target.value })}
                    placeholder="Why do you want to join the Digital Kerala Mission movement..."
                    required
                  />

                  <Button
                    type="submit"
                    variant="emerald"
                    size="lg"
                    className="w-full justify-center rounded-2xl mt-2"
                    isLoading={franSubmitting}
                    icon={Send}
                  >
                    Become a Partner
                  </Button>
                </form>
              )}
            </div>
          )}

          {/* TAB 3: GENERAL CONTACT FORM */}
          {activeTab === 'contact' && (
            <div>
              <div className="border-b pb-4 mb-6">
                <h3 className="text-xl font-sans font-bold text-navy-dark">General Enquiry</h3>
                <p className="text-xs text-slate-body">Have a general question or message for our team?</p>
              </div>

              {msgSuccess ? (
                <div className="py-12 text-center space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-navy-dark mx-auto animate-bounce" />
                  <h4 className="text-2xl font-bold text-navy-dark">Message Sent!</h4>
                  <p className="text-sm text-slate-body">Thank you for reaching out. We will get back to you soon.</p>
                  <Button variant="navy" size="sm" onClick={() => setMsgSuccess(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleMsgSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      label="Your Name"
                      value={msgData.name}
                      onChange={(e) => setMsgData({ ...msgData, name: e.target.value })}
                      placeholder="e.g. Anand Varma"
                      required
                    />
                    <FormField
                      label="Email Address"
                      type="email"
                      value={msgData.email}
                      onChange={(e) => setMsgData({ ...msgData, email: e.target.value })}
                      placeholder="anand@example.com"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      label="Phone Number"
                      type="tel"
                      value={msgData.phone}
                      onChange={(e) => setMsgData({ ...msgData, phone: e.target.value })}
                      placeholder="+91 98470 00000"
                    />
                    <FormField
                      label="Subject"
                      value={msgData.subject}
                      onChange={(e) => setMsgData({ ...msgData, subject: e.target.value })}
                      placeholder="Subject of enquiry..."
                    />
                  </div>

                  <FormField
                    label="Your Message"
                    type="textarea"
                    rows={4}
                    value={msgData.message}
                    onChange={(e) => setMsgData({ ...msgData, message: e.target.value })}
                    placeholder="Write your query or message here..."
                    required
                  />

                  <Button
                    type="submit"
                    variant="navy"
                    size="lg"
                    className="w-full justify-center rounded-2xl mt-2"
                    isLoading={msgSubmitting}
                    icon={Send}
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

export default ContactFormsSection;
