import React, { useState, useEffect } from 'react';
import { getAdminContactMessages } from '../services/apiServices';
import LoadingState from '../components/LoadingState';
import Toast from '../components/Toast';

const AdminContactMessages = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMsgs = async () => {
      setIsLoading(true);
      try {
        const res = await getAdminContactMessages();
        if (res?.data) setMessages(res.data);
      } catch (err) {
        setError(err.userMessage || 'Unable to load contact messages.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchMsgs();
  }, []);

  if (isLoading) return <LoadingState text="Loading Contact Messages..." />;

  return (
    <div className="space-y-6">
      <Toast message={error} type="error" onClose={() => setError('')} />
      <div className="border-b pb-4">
        <h1 className="text-2xl font-sans font-extrabold text-navy-dark">Contact Form Messages</h1>
        <p className="text-xs text-slate-body">Direct user messages from the Contact Us page.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {messages.length === 0 ? (
          <p className="text-sm text-slate-body">No contact messages found.</p>
        ) : messages.map(msg => (
          <div key={msg.id} className="bg-white rounded-3xl p-6 border border-purple-100 shadow-soft-card space-y-3">
            <div className="flex items-center justify-between border-b pb-2">
              <span className="font-mono text-xs text-primary-purple font-bold">{msg.id}</span>
              <span className="text-[11px] font-mono text-slate-400">
                {new Date(msg.submittedAt).toLocaleDateString()}
              </span>
            </div>

            <div>
              <h3 className="font-sans font-bold text-base text-navy-dark">{msg.name}</h3>
              <p className="text-xs text-slate-500">{msg.email} • {msg.phone}</p>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="block font-sans font-semibold text-xs text-navy-dark mb-1">
                Subject: {msg.subject}
              </span>
              <p className="text-xs font-sans text-slate-600 leading-relaxed">
                "{msg.message}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminContactMessages;
