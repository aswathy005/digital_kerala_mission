import React, { useState, useEffect } from 'react';
import { getResources } from '../services/apiServices';
import LoadingState from '../components/LoadingState';
import Button from '../components/Button';
import Toast from '../components/Toast';

const AdminResources = () => {
  const [resources, setResources] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const fetchResourcesData = async () => {
      setIsLoading(true);
      try {
        const res = await getResources('All');
        if (res?.data) setResources(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchResourcesData();
  }, []);

  if (isLoading) return <LoadingState text="Loading Resources..." />;

  return (
    <div className="space-y-6">
      <Toast message={toast?.message} type={toast?.type} onClose={() => setToast(null)} />

      <div className="flex items-center justify-between border-b pb-4">
        <div>
          <h1 className="text-2xl font-sans font-extrabold text-navy-dark">Resources & Case Studies</h1>
          <p className="text-xs text-slate-body">Manage public guides, case studies, and articles.</p>
        </div>
        <Button
          variant="purple"
          size="sm"
          onClick={() => setToast({ type: 'success', message: 'Resource manager modal ready for API!' })}
        >
          + Add Resource
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map(res => (
          <div key={res.id} className="bg-white rounded-3xl p-6 border border-purple-100 shadow-soft-card space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold uppercase bg-purple-100 text-primary-purple px-2.5 py-0.5 rounded-md">
                {res.category}
              </span>
              <span className="text-[10px] text-slate-400">{res.date}</span>
            </div>

            <h3 className="font-sans font-bold text-base text-navy-dark leading-snug">
              {res.title}
            </h3>

            <p className="text-xs font-sans text-slate-500 line-clamp-3">
              {res.description}
            </p>

            <div className="pt-3 border-t flex items-center justify-between text-xs text-slate-400">
              <span>{res.author}</span>
              <span className="font-mono text-primary-purple">{res.readTime}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminResources;
