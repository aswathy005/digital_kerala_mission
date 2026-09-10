import React, { useState, useEffect } from 'react';
import { getAdminFranchiseApps, updateAdminFranchiseApp } from '../services/apiServices';
import LoadingState from '../components/LoadingState';
import Toast from '../components/Toast';
import { Search } from 'lucide-react';

const AdminFranchiseApplications = () => {
  const [franchiseApps, setFranchiseApps] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const fetchApps = async () => {
      setIsLoading(true);
      try {
        const res = await getAdminFranchiseApps();
        if (res?.data) setFranchiseApps(res.data);
      } catch (err) {
        setToast({ type: 'error', message: err.userMessage || 'Unable to load franchise applications.' });
      } finally {
        setIsLoading(false);
      }
    };
    fetchApps();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    try {
      await updateAdminFranchiseApp(id, newStatus);
      setFranchiseApps(prev => prev.map(f => f.id === id ? { ...f, status: newStatus } : f));
      setToast({ type: 'success', message: `Franchise Application status updated to ${newStatus}` });
    } catch (err) {
      setToast({ type: 'error', message: err.userMessage || 'Unable to update application status.' });
    }
  };

  const filtered = franchiseApps.filter(f =>
    f.name.toLowerCase().includes(search.toLowerCase()) ||
    f.district.toLowerCase().includes(search.toLowerCase()) ||
    f.occupation.toLowerCase().includes(search.toLowerCase())
  );

  if (isLoading) return <LoadingState text="Loading Franchise Applications..." />;

  return (
    <div className="space-y-6">
      <Toast message={toast?.message} type={toast?.type} onClose={() => setToast(null)} />

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b pb-4">
        <div>
          <h1 className="text-2xl font-sans font-extrabold text-navy-dark">Franchise Partner Applications</h1>
          <p className="text-xs text-slate-body">District hub franchisee candidates across Kerala.</p>
        </div>

        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="Search candidate, district..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs bg-white text-navy-dark focus:outline-none focus:ring-2 focus:ring-emerald-accent"
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
                <th className="py-3.5 px-4">Applicant Name</th>
                <th className="py-3.5 px-4">Contact</th>
                <th className="py-3.5 px-4">District</th>
                <th className="py-3.5 px-4">Occupation & Experience</th>
                <th className="py-3.5 px-4">Reason for Interest</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs font-sans">
              {filtered.map(f => (
                <tr key={f.id} className="hover:bg-emerald-50/40 transition-colors">
                  <td className="py-3.5 px-4 font-mono font-bold text-emerald-accent">{f.id}</td>
                  <td className="py-3.5 px-4 font-bold text-navy-dark">{f.name}</td>
                  <td className="py-3.5 px-4">
                    <div>{f.phone}</div>
                    <div className="text-slate-500">{f.email}</div>
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-navy-dark">{f.district}</td>
                  <td className="py-3.5 px-4">
                    <strong className="block">{f.occupation}</strong>
                    <span className="text-slate-500">{f.experience}</span>
                  </td>
                  <td className="py-3.5 px-4 max-w-xs truncate" title={f.reason}>{f.reason}</td>
                  <td className="py-3.5 px-4">
                    <span className="px-2 py-1 rounded-md font-mono text-[10px] font-bold bg-emerald-100 text-emerald-800">
                      {f.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4">
                    <select
                      value={f.status}
                      onChange={(e) => handleStatusChange(f.id, e.target.value)}
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

export default AdminFranchiseApplications;
