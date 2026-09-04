import React, { useState } from 'react';
import FormField from '../components/FormField';
import Button from '../components/Button';
import Toast from '../components/Toast';

const AdminSiteContent = () => {
  const [siteContent, setSiteContent] = useState({
    heroHeadline: 'Every Business in Kerala, A Brand the World Trusts.',
    heroSubtext: 'We combine Technology, Customer Psychology and Emotional Marketing to build AI Sales Engines that attract, engage, convert and retain customers—automatically.',
    ctaBannerText: 'Your Business Has a Story. Let’s Build a Brand Around It.',
    contactEmail: 'hello@digitalkeralamission.com',
    contactPhone: '+91 9061 88 77 55'
  });

  const [toast, setToast] = useState(null);

  const handleSave = (e) => {
    e.preventDefault();
    setToast({ type: 'success', message: 'Site configuration saved successfully!' });
  };

  return (
    <div className="space-y-6 max-w-2xl">
      <Toast message={toast?.message} type={toast?.type} onClose={() => setToast(null)} />

      <div className="border-b pb-4">
        <h1 className="text-2xl font-sans font-extrabold text-navy-dark">Site Content Configuration</h1>
        <p className="text-xs text-slate-body">Update headlines, subtext, and contact info displayed across the frontend.</p>
      </div>

      <form onSubmit={handleSave} className="bg-white rounded-3xl p-8 border border-purple-100 shadow-soft-card space-y-4">
        <FormField
          label="Hero Headline"
          value={siteContent.heroHeadline}
          onChange={(e) => setSiteContent({ ...siteContent, heroHeadline: e.target.value })}
        />

        <FormField
          label="Hero Subtext"
          type="textarea"
          rows={3}
          value={siteContent.heroSubtext}
          onChange={(e) => setSiteContent({ ...siteContent, heroSubtext: e.target.value })}
        />

        <FormField
          label="CTA Banner Heading"
          value={siteContent.ctaBannerText}
          onChange={(e) => setSiteContent({ ...siteContent, ctaBannerText: e.target.value })}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            label="Helpline Phone"
            value={siteContent.contactPhone}
            onChange={(e) => setSiteContent({ ...siteContent, contactPhone: e.target.value })}
          />

          <FormField
            label="Support Email"
            value={siteContent.contactEmail}
            onChange={(e) => setSiteContent({ ...siteContent, contactEmail: e.target.value })}
          />
        </div>

        <Button
          type="submit"
          variant="purple"
          size="md"
          className="rounded-xl shadow-purple-glow mt-2"
        >
          Save Site Settings
        </Button>
      </form>
    </div>
  );
};

export default AdminSiteContent;
