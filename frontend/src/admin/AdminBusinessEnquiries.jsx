import React, { useState, useEffect } from 'react';
import { getAdminEnquiries, updateAdminEnquiry } from '../services/apiServices';
import LoadingState from '../components/LoadingState';
import Toast from '../components/Toast';
import { Search } from 'lucide-react';

const AdminBusinessEnquiries = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const fetchEnquiries = async () => {
      setIsLoading(true);
      try {
        const res = await getAdminEnquiries();
        if (res?.data) setEnquiries(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchEnquiries();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    try {
      await updateAdminEnquiry(id, newStatus);
      setEnquiries(prev => prev.map(e => e.id === id ? { ...e, status: newStatus } : e));
      setToast({ type: 'success', message: `Enquiry status updated to ${newStatus}` });
    } catch (err) {
      setToast({ type: 'error', message: err.userMessage || 'Unable to update enquiry status.' });
    }
  };

  const filtered = enquiries.filter(e =>
    e.name.toLowerCase().includes(search.toLowerCase()) ||
    e.businessName.toLowerCase().includes(search.toLowerCase()) ||
    e.district.toLowerCase().includes(search.toLowerCase())
  );

  if (isLoading) return <LoadingState text="Loading Business Enquiries..." />;

  return (
    <div className="space-y-6">
      <Toast message={toast?.message} type={toast?.type} onClose={() => setToast(null)} />

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b pb-4">
        <div>
          <h1 className="text-2xl font-sans font-extrabold text-navy-dark">Business Owner Enquiries</h1>
          <p className="text-xs text-slate-body">Consultation requests submitted through the public website.</p>
        </div>

        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="Search business, name, district..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs bg-white text-navy-dark focus:outline-none focus:ring-2 focus:ring-primary-purple"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-purple-100 shadow-soft-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 text-xs font-mono text-slate-500 bg-slate-50">
                <th className="py-3.5 px-4">ID</th>
                <th className="py-3.5 px-4">Business & Owner</th>
                <th className="py-3.5 px-4">Contact Details</th>
                <th className="py-3.5 px-4">District & Category</th>
                <th className="py-3.5 px-4">Main Challenge</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs font-sans">
              {filtered.map(enq => (
                <tr key={enq.id} className="hover:bg-purple-50/40 transition-colors">
                  <td className="py-3.5 px-4 font-mono font-bold text-primary-purple">{enq.id}</td>
                  <td className="py-3.5 px-4">
                    <strong className="block text-navy-dark font-bold">{enq.businessName}</strong>
                    <span className="text-slate-500">{enq.name}</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <div>{enq.phone}</div>
                    <div className="text-slate-500">{enq.email}</div>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="font-semibold text-navy-dark">{enq.district}</span>
                    <div className="text-slate-500">{enq.category}</div>
                  </td>
                  <td className="py-3.5 px-4 max-w-xs truncate" title={enq.challenge}>
                    {enq.challenge}
                  </td>
                  <td className="py-3.5 px-4">
                    <span className={`px-2 py-1 rounded-md font-mono text-[10px] font-bold ${
                      enq.status === 'New' ? 'bg-purple-100 text-primary-purple' : 'bg-emerald-100 text-emerald-700'
                    }`}>
                      {enq.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4">
                    <select
                      value={enq.status}
                      onChange={(e) => handleStatusChange(enq.id, e.target.value)}
                      className="px-2 py-1 rounded-lg border border-slate-200 text-xs bg-white text-navy-dark cursor-pointer"
                    >
                      <option value="New">New</option>
                      <option value="Contacted">Contacted</option>
                      <option value="Qualified">Qualified</option>
                      <option value="Converted">Converted</option>
                      <option value="Closed">Closed</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminBusinessEnquiries;
