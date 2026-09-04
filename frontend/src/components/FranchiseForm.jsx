import React, { useState } from 'react';
import FormField from './FormField';
import Button from './Button';
import Toast from './Toast';
import { submitFranchiseApplication } from '../api/services';
import { Handshake, Send, CheckCircle2, ShieldAlert } from 'lucide-react';

const keralaDistricts = [
  'Kasaragod', 'Kannur', 'Wayanad', 'Kozhikode', 'Malappuram',
  'Palakkad', 'Thrissur', 'Ernakulam', 'Idukki', 'Kottayam',
  'Alappuzha', 'Pathanamthitta', 'Kollam', 'Thiruvananthapuram'
];

const contactMethods = [
  'WhatsApp Message',
  'Direct Phone Call',
  'Email Correspondence',
  'In-Person Meeting at District Hub'
];

const FranchiseForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    district: '',
    occupation: '',
    experience: '',
    reason: '',
    contactMethod: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Full Name is required';

    const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]{8,15}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone / WhatsApp number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.district) newErrors.district = 'Please select target Kerala district';
    if (!formData.occupation.trim()) newErrors.occupation = 'Current Occupation/Business is required';
    if (!formData.reason.trim()) newErrors.reason = 'Please provide your reason for interest in the franchise';

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
      const response = await submitFranchiseApplication(formData);
      setIsSubmitted(true);
      setToast({ type: 'success', message: response.message || 'Franchise Application submitted successfully!' });
      setFormData({
        name: '', phone: '', email: '', district: '',
        occupation: '', experience: '', reason: '', contactMethod: ''
      });
    } catch (err) {
      setToast({ type: 'error', message: err.userMessage || 'Failed to submit application. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="franchise-form" className="bg-gradient-to-b from-palm-soft/30 to-backwater/95 rounded-2xl p-6 sm:p-8 border border-kasavu/40 shadow-2xl backdrop-blur-md relative kasavu-border-glow">
      
      {/* Toast Alert */}
      <Toast
        message={toast?.message}
        type={toast?.type}
        onClose={() => setToast(null)}
      />

      {/* Header */}
      <div className="flex items-center gap-3 border-b border-kasavu/20 pb-4 mb-6">
        <div className="p-3 rounded-xl bg-palm text-kasavu font-bold border border-kasavu/30">
          <Handshake className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-ivory">
            Franchise Partner Application
          </h3>
          <p className="text-xs font-mono text-kasavu-soft">
            Operate an approved Digital Kerala Mission district hub
          </p>
        </div>
      </div>

      {isSubmitted ? (
        <div className="py-12 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-kasavu/20 text-kasavu flex items-center justify-center mx-auto border border-kasavu/40">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-2xl font-serif font-bold text-ivory">Application Received!</h4>
          <p className="text-sm font-sans text-ivory/80 max-w-md mx-auto leading-relaxed">
            Thank you! Your Franchise Partnership Application has been submitted to Digital Kerala Mission. Our District Franchise Advisor will review your profile and reach out.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsSubmitted(false)}
            className="text-kasavu border-kasavu/40 hover:bg-kasavu hover:text-backwater"
          >
            Submit Another Application
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Siddharth Menon"
              required
              error={errors.name}
            />

            <FormField
              label="Target District"
              name="district"
              type="select"
              value={formData.district}
              onChange={handleChange}
              options={keralaDistricts}
              required
              error={errors.district}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              label="Phone / WhatsApp Number"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 94471 99887"
              required
              error={errors.phone}
            />

            <FormField
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="siddharth@example.com"
              required
              error={errors.email}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              label="Current Occupation / Business"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              placeholder="e.g. IT Consultant / Agency Owner"
              required
              error={errors.occupation}
            />

            <FormField
              label="Preferred Contact Method"
              name="contactMethod"
              type="select"
              value={formData.contactMethod}
              onChange={handleChange}
              options={contactMethods}
            />
          </div>

          <FormField
            label="Relevant Business / Sales Experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            placeholder="e.g. 5+ years in B2B sales and digital client onboarding in Thrissur..."
          />

          <FormField
            label="Reason for Franchise Interest"
            name="reason"
            type="textarea"
            rows={3}
            value={formData.reason}
            onChange={handleChange}
            placeholder="e.g. We want to bring WhiteSketch certified AI automation tools to local businesses..."
            required
            error={errors.reason}
          />

          <div className="pt-2">
            <Button
              type="submit"
              variant="outline"
              size="lg"
              className="w-full justify-center text-ivory border-kasavu/60 hover:bg-kasavu hover:text-backwater shadow-lg"
              isLoading={isSubmitting}
              icon={Send}
              iconPosition="right"
            >
              Apply for District Franchise Partnership
            </Button>
          </div>

          <div className="pt-2 text-[11px] font-sans text-ivory/60 flex items-start gap-2">
            <ShieldAlert className="w-3.5 h-3.5 text-kasavu shrink-0 mt-0.5" />
            <span>Enablement framework submission. No guaranteed earnings claims implied.</span>
          </div>
        </form>
      )}
    </div>
  );
};

export default FranchiseForm;
