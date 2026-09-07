import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAdminDashboard, getAdminResources } from '../services/apiServices';
import LoadingState from '../components/LoadingState';
import { Building2, Handshake, Mail, FileText, TrendingUp, Sparkles } from 'lucide-react';

const AdminDashboardPage = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [franchiseApps, setFranchiseApps] = useState([]);
  const [messages, setMessages] = useState([]);
  const [resources, setResources] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [dashboardRes, resRes] = await Promise.all([getAdminDashboard(), getAdminResources()]);
        if (dashboardRes?.data) {
          setEnquiries((dashboardRes.data.recentEnquiries || []).map((item) => ({ ...item, id: item.id || item._id, category: item.category || item.businessCategory })));
          setFranchiseApps((dashboardRes.data.recentFranchiseApplications || []).map((item) => ({ ...item, id: item.id || item._id, occupation: item.occupation || item.currentOccupation })));
          setMessages((dashboardRes.data.recentMessages || []).map((item) => ({ ...item, id: item.id || item._id, submittedAt: item.submittedAt || item.createdAt })));
        }
        if (resRes?.data) setResources(resRes.data);
      } catch (err) {
        console.error('Failed to load admin overview', err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) return <LoadingState text="Loading Admin Dashboard Overview..." />;

  return (
    <div className="space-y-8">
      
      {/* Page Header */}
      <div className="flex items-center justify-between border-b pb-4">
        <div>
          <h1 className="text-2xl font-sans font-extrabold text-navy-dark">
            Admin Overview Dashboard
          </h1>
          <p className="text-xs text-slate-body">
            Real-time analytics and submission counts across Kerala districts.
          </p>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-primary-purple text-xs font-mono font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>System Online</span>
        </div>
      </div>

      {/* 4 Overview Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div className="bg-white rounded-2xl p-6 border border-purple-100 shadow-soft-card flex items-center justify-between">
          <div>
            <span className="text-xs font-mono font-bold text-slate-500 uppercase">Business Enquiries</span>
            <h3 className="text-3xl font-sans font-extrabold text-navy-dark mt-1">{enquiries.length}</h3>
            <span className="text-[11px] text-primary-purple font-semibold">Consultations Requested</span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-purple-100 text-primary-purple flex items-center justify-center">
            <Building2 className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-purple-100 shadow-soft-card flex items-center justify-between">
          <div>
            <span className="text-xs font-mono font-bold text-slate-500 uppercase">Franchise Applications</span>
            <h3 className="text-3xl font-sans font-extrabold text-navy-dark mt-1">{franchiseApps.length}</h3>
            <span className="text-[11px] text-emerald-accent font-semibold">District Hub Applicants</span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-accent flex items-center justify-center">
            <Handshake className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-purple-100 shadow-soft-card flex items-center justify-between">
          <div>
            <span className="text-xs font-mono font-bold text-slate-500 uppercase">Contact Messages</span>
            <h3 className="text-3xl font-sans font-extrabold text-navy-dark mt-1">{messages.length}</h3>
            <span className="text-[11px] text-slate-600 font-semibold">Direct Queries</span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center">
            <Mail className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-purple-100 shadow-soft-card flex items-center justify-between">
          <div>
            <span className="text-xs font-mono font-bold text-slate-500 uppercase">Total Resources</span>
            <h3 className="text-3xl font-sans font-extrabold text-navy-dark mt-1">{resources.length}</h3>
            <span className="text-[11px] text-primary-purple font-semibold">Published Content</span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-purple-100 text-primary-purple flex items-center justify-center">
            <FileText className="w-6 h-6" />
          </div>
        </div>

      </div>

      {/* Recent Submission Summary Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Recent Consultations */}
        <div className="bg-white rounded-2xl p-6 border border-purple-100 shadow-soft-card space-y-4">
          <div className="flex items-center justify-between border-b pb-3">
            <h3 className="font-sans font-bold text-base text-navy-dark">Recent Business Consultations</h3>
            <Link to="/admin/business-enquiries" className="text-xs font-mono text-primary-purple hover:underline">
              View All →
            </Link>
          </div>

          <div className="space-y-3">
            {enquiries.slice(0, 3).map((enq) => (
              <div key={enq.id} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-sans font-bold text-sm text-navy-dark">{enq.businessName}</h4>
                  <p className="text-xs text-slate-500">{enq.name} • {enq.district}</p>
                </div>
                <span className="px-2.5 py-1 rounded text-[10px] font-mono font-bold bg-purple-100 text-primary-purple">
                  {enq.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Franchise Applicants */}
        <div className="bg-white rounded-2xl p-6 border border-purple-100 shadow-soft-card space-y-4">
          <div className="flex items-center justify-between border-b pb-3">
            <h3 className="font-sans font-bold text-base text-navy-dark">Recent Franchise Applications</h3>
            <Link to="/admin/franchise-applications" className="text-xs font-mono text-emerald-accent hover:underline">
              View All →
            </Link>
          </div>

          <div className="space-y-3">
            {franchiseApps.slice(0, 3).map((f) => (
              <div key={f.id} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-sans font-bold text-sm text-navy-dark">{f.name}</h4>
                  <p className="text-xs text-slate-500">{f.district} • {f.occupation}</p>
                </div>
                <span className="px-2.5 py-1 rounded text-[10px] font-mono font-bold bg-emerald-100 text-emerald-700">
                  {f.status}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};

export default AdminDashboardPage;
