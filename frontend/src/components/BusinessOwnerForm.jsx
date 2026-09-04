import React, { useState } from 'react';
import FormField from './FormField';
import Button from './Button';
import Toast from './Toast';
import { submitBusinessEnquiry } from '../api/services';
import { Building2, Send, CheckCircle2 } from 'lucide-react';

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

const BusinessOwnerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    email: '',
    district: '',
    category: '',
    digitalPresence: '',
    challenge: '',
    preferredTime: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Full Name is required';
    if (!formData.businessName.trim()) newErrors.businessName = 'Business Name is required';

    // Phone validation
    const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]{8,15}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone / WhatsApp number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number (e.g. +91 98470 12345)';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.district) newErrors.district = 'Please select your Kerala district';
    if (!formData.category) newErrors.category = 'Please select your business category';
    if (!formData.challenge.trim()) newErrors.challenge = 'Please specify your main marketing or sales challenge';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const response = await submitBusinessEnquiry(formData);
      setIsSubmitted(true);
      setToast({ type: 'success', message: response.message || 'Consultation request submitted successfully!' });
      setFormData({
        name: '', businessName: '', phone: '', email: '',
        district: '', category: '', digitalPresence: '', challenge: '', preferredTime: ''
      });
    } catch (err) {
      setToast({ type: 'error', message: err.userMessage || 'Failed to submit enquiry. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="business-owner-form" className="bg-gradient-to-b from-palm/40 to-backwater/95 rounded-2xl p-6 sm:p-8 border border-kasavu/40 shadow-2xl backdrop-blur-md relative kasavu-border-glow">
      
      {/* Toast Alert */}
      <Toast
        message={toast?.message}
        type={toast?.type}
        onClose={() => setToast(null)}
      />

      {/* Header */}
      <div className="flex items-center gap-3 border-b border-kasavu/20 pb-4 mb-6">
        <div className="p-3 rounded-xl bg-kasavu text-backwater font-bold">
          <Building2 className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-ivory">
            Business Owner AI Consultation
          </h3>
          <p className="text-xs font-mono text-kasavu">
            Attract, nurture & close more deals automatically
          </p>
        </div>
      </div>

      {isSubmitted ? (
        <div className="py-12 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-kasavu/20 text-kasavu flex items-center justify-center mx-auto border border-kasavu/40">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-2xl font-serif font-bold text-ivory">Consultation Requested!</h4>
          <p className="text-sm font-sans text-ivory/80 max-w-md mx-auto leading-relaxed">
            Thank you! Your AI Sales Engine consultation request has been registered with Digital Kerala Mission. Our advisor will reach out to you shortly.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsSubmitted(false)}
            className="text-kasavu border-kasavu/40 hover:bg-kasavu hover:text-backwater"
          >
            Submit Another Business Request
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              label="Your Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. K. V. Abdul Rahman"
              required
              error={errors.name}
            />

            <FormField
              label="Business / Enterprise Name"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              placeholder="e.g. Malabar Spices & Organics"
              required
              error={errors.businessName}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              label="Phone / WhatsApp Number"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98470 12345"
              required
              error={errors.phone}
            />

            <FormField
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@business.com"
              required
              error={errors.email}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              label="Kerala District"
              name="district"
              type="select"
              value={formData.district}
              onChange={handleChange}
              options={keralaDistricts}
              required
              error={errors.district}
            />

            <FormField
              label="Business Category"
              name="category"
              type="select"
              value={formData.category}
              onChange={handleChange}
              options={businessCategories}
              required
              error={errors.category}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              label="Current Digital Presence"
              name="digitalPresence"
              type="select"
              value={formData.digitalPresence}
              onChange={handleChange}
              options={digitalPresences}
            />

            <FormField
              label="Preferred Contact Time"
              name="preferredTime"
              type="select"
              value={formData.preferredTime}
              onChange={handleChange}
              options={preferredTimes}
            />
          </div>

          <FormField
            label="Main Challenge or Goal"
            name="challenge"
            type="textarea"
            rows={3}
            value={formData.challenge}
            onChange={handleChange}
            placeholder="e.g. We get WhatsApp inquiries but can't follow up fast enough during busy hours..."
            required
            error={errors.challenge}
          />

          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full justify-center shadow-lg"
              isLoading={isSubmitting}
              icon={Send}
              iconPosition="right"
            >
              Book AI Sales Engine Consultation
            </Button>
          </div>

          <p className="text-[11px] font-mono text-ivory/60 text-center">
            🔒 Your data is stored securely and processed exclusively for Digital Kerala Mission consultation.
          </p>
        </form>
      )}
    </div>
  );
};

export default BusinessOwnerForm;
