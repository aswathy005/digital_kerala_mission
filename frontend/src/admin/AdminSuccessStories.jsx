import React, { useState, useEffect } from 'react';
import { getAdminSuccessStories } from '../services/apiServices';
import LoadingState from '../components/LoadingState';
import Toast from '../components/Toast';
import Button from '../components/Button';

const AdminSuccessStories = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const fetchStories = async () => {
      setIsLoading(true);
      try {
        const res = await getAdminSuccessStories();
        if (res?.data) setTestimonials(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchStories();
  }, []);

  if (isLoading) return <LoadingState text="Loading Success Stories & Testimonials..." />;

  return (
    <div className="space-y-6">
      <Toast message={toast?.message} type={toast?.type} onClose={() => setToast(null)} />

      <div className="flex items-center justify-between border-b pb-4">
        <div>
          <h1 className="text-2xl font-sans font-extrabold text-navy-dark">Success Stories & Reviews</h1>
          <p className="text-xs text-slate-body">Client testimonials shown on the home page.</p>
        </div>
        <Button
          variant="purple"
          size="sm"
          onClick={() => setToast({ type: 'success', message: 'Testimonial creator ready for backend API!' })}
        >
          + Add Testimonial
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map(item => (
          <div key={item.id} className="bg-white rounded-3xl p-6 border border-purple-100 shadow-soft-card space-y-4">
            <p className="text-xs text-slate-600 italic">"{item.quote}"</p>

            <div className="flex items-center gap-3 pt-3 border-t">
              <img src={item.avatar} alt={item.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-primary-purple/20" />
              <div>
                <h4 className="font-bold text-xs text-navy-dark">{item.name}</h4>
                <p className="text-[11px] text-slate-500">{item.role}, {item.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminSuccessStories;
