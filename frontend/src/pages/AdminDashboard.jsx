import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FormField from '../components/FormField';
import Button from '../components/Button';
import Toast from '../components/Toast';
import LoadingState from '../components/LoadingState';
import {
  adminLogin,
  getAdminEnquiries,
  getAdminFranchiseApps,
  getResources
} from '../api/services';
import {
  ShieldCheck,
  Building2,
  Handshake,
  MessageSquare,
  FileText,
  Settings,
  LogOut,
  Search,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Users,
  TrendingUp,
  Lock
} from 'lucide-react';

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return !!localStorage.getItem('dkm_admin_token');
  });

  // Login form state
  const [loginForm, setLoginForm] = useState({ username: 'admin@digitalkerala.in', password: '' });
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);

  // Admin Dashboard Active Tab
  const [activeTab, setActiveTab] = useState('overview');

  // Data states
  const [enquiries, setEnquiries] = useState([]);
  const [franchiseApps, setFranchiseApps] = useState([]);
  const [resources, setResources] = useState([]);
  const [loadingData, setLoadingData] = useState(false);
  const [toast, setToast] = useState(null);

  // Filter & Search states
  const [searchTerm, setSearchTerm] = useState('');

  // Editable site content preview
  const [siteContent, setSiteContent] = useState({
    announcement: 'Empowering 10,000+ Kerala Businesses with Enterprise AI Automation',
    heroHeadline: 'Build Your AI Sales Engine. Scale Your Business. Build Your Brand.'
  });

  useEffect(() => {
    if (isAuthenticated) {
      fetchAdminData();
    }
  }, [isAuthenticated]);

  const fetchAdminData = async () => {
    setLoadingData(true);
    try {
      const [enqRes, franRes, resRes] = await Promise.all([
        getAdminEnquiries(),
        getAdminFranchiseApps(),
        getResources('All')
      ]);

      if (enqRes?.data) setEnquiries(enqRes.data);
      if (franRes?.data) setFranchiseApps(franRes.data);
      if (resRes?.data) setResources(resRes.data);
    } catch (err) {
      console.error('Failed to fetch admin data', err);
    } finally {
      setLoadingData(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    setLoginLoading(true);

    try {
      await adminLogin(loginForm);
      setIsAuthenticated(true);
      setToast({ type: 'success', message: 'Welcome back, Mission Administrator!' });
    } catch (err) {
      setLoginError(err.userMessage || 'Invalid admin credentials');
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('dkm_admin_token');
    setIsAuthenticated(false);
    setToast({ type: 'success', message: 'Logged out of admin panel' });
  };

  // Status update helpers
  const handleUpdateStatus = (id, newStatus, type) => {
    if (type === 'enquiry') {
      setEnquiries(prev => prev.map(item => item.id === id ? { ...item, status: newStatus } : item));
    } else {
      setFranchiseApps(prev => prev.map(item => item.id === id ? { ...item, status: newStatus } : item));
    }
    setToast({ type: 'success', message: `Status updated to ${newStatus}` });
  };

  // Filtered lists
  const filteredEnquiries = enquiries.filter(e =>
    e.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    e.businessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    e.district.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredFranchiseApps = franchiseApps.filter(f =>
    f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    f.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
    f.occupation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // If NOT Authenticated, show Login Form
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-backwater flex items-center justify-center p-4 text-ivory relative">
        <Toast message={toast?.message} type={toast?.type} onClose={() => setToast(null)} />
        
        <div className="max-w-md w-full bg-gradient-to-b from-palm/40 to-backwater/95 rounded-2xl p-8 border border-kasavu/40 shadow-2xl backdrop-blur-md kasavu-border-glow">
          <div className="text-center space-y-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-kasavu/20 text-kasavu flex items-center justify-center mx-auto border border-kasavu/40">
              <Lock className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-serif font-bold text-ivory">Admin Authentication</h2>
            <p className="text-xs font-mono text-kasavu">Digital Kerala Mission Internal Portal</p>
          </div>

          {loginError && (
            <div className="p-3 mb-4 rounded-lg bg-chilli/20 border border-chilli text-xs text-ivory font-sans flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-chilli shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <FormField
              label="Admin Username / Email"
              name="username"
              value={loginForm.username}
              onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
              required
            />

            <FormField
              label="Password"
              name="password"
              type="password"
              value={loginForm.password}
              onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
              placeholder="Enter password..."
              required
            />

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full justify-center mt-2"
              isLoading={loginLoading}
            >
              Sign In to Admin Panel
            </Button>
          </form>

          <div className="mt-6 pt-4 border-t border-kasavu/20 text-center">
            <Link to="/" className="text-xs font-mono text-kasavu hover:underline">
              ← Return to Main Public Website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // AUTHENTICATED ADMIN DASHBOARD
  return (
    <div className="min-h-screen bg-ivory text-ink flex flex-col font-sans">
      <Toast message={toast?.message} type={toast?.type} onClose={() => setToast(null)} />

      {/* Admin Top Header */}
      <header className="bg-backwater text-ivory py-4 px-6 border-b border-kasavu/30 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-palm flex items-center justify-center border border-kasavu/40">
              <ShieldCheck className="w-5 h-5 text-kasavu" />
            </div>
            <div>
              <h1 className="font-serif text-lg font-bold text-ivory leading-tight">
                Digital Kerala Mission – Admin Portal
              </h1>
              <p className="text-[10px] font-mono text-kasavu">
                Connected to Axios API Layer
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="hidden sm:inline-block text-xs font-sans text-ivory/80 hover:text-kasavu"
            >
              View Public Website ↗
            </Link>

            <button
              onClick={handleLogout}
              className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-chilli text-ivory text-xs font-mono transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Admin Content Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow w-full">
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-kasavu/20 pb-4 mb-8">
          {[
            { id: 'overview', label: 'Overview Dashboard', icon: TrendingUp },
            { id: 'enquiries', label: `Business Enquiries (${enquiries.length})`, icon: Building2 },
            { id: 'franchise', label: `Franchise Applications (${franchiseApps.length})`, icon: Handshake },
            { id: 'resources', label: `Resources & Content (${resources.length})`, icon: FileText },
            { id: 'site-content', label: 'Site Content Config', icon: Settings }
          ].map(tab => {
            const IconComp = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-sans font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-backwater text-kasavu shadow-md border border-kasavu'
                    : 'bg-white text-ink-soft hover:bg-ivory-dim border border-kasavu/10'
                }`}
              >
                <IconComp className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {loadingData ? (
          <LoadingState text="Loading Admin Management Data..." />
        ) : (
          <>
            {/* TAB 1: OVERVIEW */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Metric Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white rounded-2xl p-6 border border-kasavu/30 shadow-sm flex items-center justify-between">
                    <div>
                      <span className="text-xs font-mono text-ink-soft uppercase tracking-wider">Business Enquiries</span>
                      <h3 className="text-3xl font-serif font-bold text-backwater mt-1">{enquiries.length}</h3>
                      <span className="text-[11px] font-mono text-palm">Ready for Consultation</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-palm/10 text-palm">
                      <Building2 className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 border border-kasavu/30 shadow-sm flex items-center justify-between">
                    <div>
                      <span className="text-xs font-mono text-ink-soft uppercase tracking-wider">Franchise Applications</span>
                      <h3 className="text-3xl font-serif font-bold text-backwater mt-1">{franchiseApps.length}</h3>
                      <span className="text-[11px] font-mono text-kasavu">District Hub Applicants</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-kasavu/10 text-kasavu">
                      <Handshake className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 border border-kasavu/30 shadow-sm flex items-center justify-between">
                    <div>
                      <span className="text-xs font-mono text-ink-soft uppercase tracking-wider">Active Resources</span>
                      <h3 className="text-3xl font-serif font-bold text-backwater mt-1">{resources.length}</h3>
                      <span className="text-[11px] font-mono text-ink-soft">Published Articles & Guides</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-palm-soft/10 text-palm-soft">
                      <FileText className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 border border-kasavu/30 shadow-sm flex items-center justify-between">
                    <div>
                      <span className="text-xs font-mono text-ink-soft uppercase tracking-wider">District Coverage</span>
                      <h3 className="text-3xl font-serif font-bold text-backwater mt-1">14 / 14</h3>
                      <span className="text-[11px] font-mono text-kasavu">State-wide Network</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-kasavu/10 text-kasavu">
                      <Sparkles className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* Quick Recent Activity Tables */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Recent Business Consultations */}
                  <div className="bg-white rounded-2xl p-6 border border-kasavu/30 shadow-sm space-y-4">
                    <div className="flex items-center justify-between border-b pb-3">
                      <h4 className="font-serif font-bold text-base text-backwater">Recent Business Consultations</h4>
                      <button onClick={() => setActiveTab('enquiries')} className="text-xs font-mono text-kasavu hover:underline">View All →</button>
                    </div>

                    <div className="space-y-3">
                      {enquiries.slice(0, 3).map(enq => (
                        <div key={enq.id} className="p-3 rounded-xl bg-ivory-dim/30 border border-kasavu/10 flex items-center justify-between">
                          <div>
                            <h5 className="font-serif font-bold text-sm text-backwater">{enq.businessName}</h5>
                            <p className="text-xs text-ink-soft">{enq.name} • {enq.district}</p>
                          </div>
                          <span className="px-2 py-1 rounded text-[10px] font-mono bg-kasavu/20 text-kasavu font-semibold">
                            {enq.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recent Franchise Applications */}
                  <div className="bg-white rounded-2xl p-6 border border-kasavu/30 shadow-sm space-y-4">
                    <div className="flex items-center justify-between border-b pb-3">
                      <h4 className="font-serif font-bold text-base text-backwater">Recent Franchise Applications</h4>
                      <button onClick={() => setActiveTab('franchise')} className="text-xs font-mono text-kasavu hover:underline">View All →</button>
                    </div>

                    <div className="space-y-3">
                      {franchiseApps.slice(0, 3).map(f => (
                        <div key={f.id} className="p-3 rounded-xl bg-ivory-dim/30 border border-kasavu/10 flex items-center justify-between">
                          <div>
                            <h5 className="font-serif font-bold text-sm text-backwater">{f.name}</h5>
                            <p className="text-xs text-ink-soft">{f.district} • {f.occupation}</p>
                          </div>
                          <span className="px-2 py-1 rounded text-[10px] font-mono bg-palm/20 text-palm font-semibold">
                            {f.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: BUSINESS ENQUIRIES */}
            {activeTab === 'enquiries' && (
              <div className="bg-white rounded-2xl p-6 border border-kasavu/30 shadow-sm space-y-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b pb-4">
                  <div>
                    <h3 className="font-serif font-bold text-xl text-backwater">Business Owner Consultations</h3>
                    <p className="text-xs font-sans text-ink-soft">Manage incoming business AI engine requests</p>
                  </div>

                  <div className="relative w-full sm:w-64">
                    <input
                      type="text"
                      placeholder="Search name, district..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 rounded-lg border border-kasavu/30 text-xs text-ink bg-ivory focus:outline-none focus:ring-2 focus:ring-kasavu"
                    />
                    <Search className="w-4 h-4 text-ink-soft absolute left-3 top-2.5" />
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-kasavu/20 text-xs font-mono text-ink-soft bg-ivory-dim/50">
                        <th className="py-3 px-4">ID</th>
                        <th className="py-3 px-4">Business & Contact</th>
                        <th className="py-3 px-4">District</th>
                        <th className="py-3 px-4">Category</th>
                        <th className="py-3 px-4">Challenge</th>
                        <th className="py-3 px-4">Status</th>
                        <th className="py-3 px-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-xs font-sans">
                      {filteredEnquiries.map(enq => (
                        <tr key={enq.id} className="hover:bg-ivory-dim/30 transition-colors">
                          <td className="py-3 px-4 font-mono font-bold text-kasavu">{enq.id}</td>
                          <td className="py-3 px-4">
                            <strong className="block text-backwater font-semibold">{enq.businessName}</strong>
                            <span className="text-ink-soft">{enq.name} ({enq.phone})</span>
                          </td>
                          <td className="py-3 px-4 font-medium">{enq.district}</td>
                          <td className="py-3 px-4">{enq.category}</td>
                          <td className="py-3 px-4 max-w-xs truncate" title={enq.challenge}>{enq.challenge}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-0.5 rounded font-mono font-semibold text-[10px] ${
                              enq.status === 'New' ? 'bg-chilli/20 text-chilli' : 'bg-palm/20 text-palm'
                            }`}>
                              {enq.status}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <select
                              value={enq.status}
                              onChange={(e) => handleUpdateStatus(enq.id, e.target.value, 'enquiry')}
                              className="px-2 py-1 rounded border border-kasavu/30 text-xs bg-white text-ink cursor-pointer"
                            >
                              <option value="New">New</option>
                              <option value="Contacted">Contacted</option>
                              <option value="Consultation Scheduled">Scheduled</option>
                              <option value="Onboarded">Onboarded</option>
                            </select>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* TAB 3: FRANCHISE APPLICATIONS */}
            {activeTab === 'franchise' && (
              <div className="bg-white rounded-2xl p-6 border border-kasavu/30 shadow-sm space-y-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b pb-4">
                  <div>
                    <h3 className="font-serif font-bold text-xl text-backwater">Franchise Applications</h3>
                    <p className="text-xs font-sans text-ink-soft">Review district hub franchisee candidates</p>
                  </div>

                  <div className="relative w-full sm:w-64">
                    <input
                      type="text"
                      placeholder="Search candidate, district..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 rounded-lg border border-kasavu/30 text-xs text-ink bg-ivory focus:outline-none focus:ring-2 focus:ring-kasavu"
                    />
                    <Search className="w-4 h-4 text-ink-soft absolute left-3 top-2.5" />
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-kasavu/20 text-xs font-mono text-ink-soft bg-ivory-dim/50">
                        <th className="py-3 px-4">ID</th>
                        <th className="py-3 px-4">Applicant</th>
                        <th className="py-3 px-4">District</th>
                        <th className="py-3 px-4">Occupation / Experience</th>
                        <th className="py-3 px-4">Reason for Interest</th>
                        <th className="py-3 px-4">Status</th>
                        <th className="py-3 px-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-xs font-sans">
                      {filteredFranchiseApps.map(f => (
                        <tr key={f.id} className="hover:bg-ivory-dim/30 transition-colors">
                          <td className="py-3 px-4 font-mono font-bold text-kasavu">{f.id}</td>
                          <td className="py-3 px-4">
                            <strong className="block text-backwater font-semibold">{f.name}</strong>
                            <span className="text-ink-soft">{f.phone} • {f.email}</span>
                          </td>
                          <td className="py-3 px-4 font-medium">{f.district}</td>
                          <td className="py-3 px-4">
                            <strong className="block">{f.occupation}</strong>
                            <span className="text-ink-soft">{f.experience}</span>
                          </td>
                          <td className="py-3 px-4 max-w-xs truncate" title={f.reason}>{f.reason}</td>
                          <td className="py-3 px-4">
                            <span className="px-2 py-0.5 rounded font-mono font-semibold text-[10px] bg-kasavu/20 text-kasavu">
                              {f.status}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <select
                              value={f.status}
                              onChange={(e) => handleUpdateStatus(f.id, e.target.value, 'franchise')}
                              className="px-2 py-1 rounded border border-kasavu/30 text-xs bg-white text-ink cursor-pointer"
                            >
                              <option value="Under Review">Under Review</option>
                              <option value="Interview Scheduled">Interview Scheduled</option>
                              <option value="Approved">Approved</option>
                              <option value="Rejected">Rejected</option>
                            </select>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* TAB 4: RESOURCES & CONTENT */}
            {activeTab === 'resources' && (
              <div className="bg-white rounded-2xl p-6 border border-kasavu/30 shadow-sm space-y-6">
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <h3 className="font-serif font-bold text-xl text-backwater">Resource Management</h3>
                    <p className="text-xs font-sans text-ink-soft">Published case studies, guides, and articles</p>
                  </div>
                  <Button variant="primary" size="sm">
                    + Add New Resource
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {resources.map(res => (
                    <div key={res.id} className="p-4 rounded-xl border border-kasavu/20 bg-ivory-dim/30 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase bg-palm/10 text-palm px-2 py-0.5 rounded">
                          {res.category}
                        </span>
                        <span className="text-[10px] text-ink-soft">{res.date}</span>
                      </div>
                      <h4 className="font-serif font-bold text-sm text-backwater">{res.title}</h4>
                      <p className="text-xs text-ink-soft line-clamp-2">{res.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 5: SITE CONTENT CONFIG */}
            {activeTab === 'site-content' && (
              <div className="bg-white rounded-2xl p-6 border border-kasavu/30 shadow-sm space-y-6 max-w-2xl">
                <div className="border-b pb-4">
                  <h3 className="font-serif font-bold text-xl text-backwater">Editable Site Content Configuration</h3>
                  <p className="text-xs font-sans text-ink-soft">Update live headlines and announcements across the website</p>
                </div>

                <div className="space-y-4">
                  <FormField
                    label="Global Announcement Banner"
                    value={siteContent.announcement}
                    onChange={(e) => setSiteContent({ ...siteContent, announcement: e.target.value })}
                  />

                  <FormField
                    label="Hero Section Headline"
                    type="textarea"
                    rows={2}
                    value={siteContent.heroHeadline}
                    onChange={(e) => setSiteContent({ ...siteContent, heroHeadline: e.target.value })}
                  />

                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => setToast({ type: 'success', message: 'Site content settings saved successfully!' })}
                  >
                    Save Changes to API
                  </Button>
                </div>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
