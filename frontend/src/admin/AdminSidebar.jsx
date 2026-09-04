import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Building2,
  Handshake,
  Mail,
  FileText,
  Quote,
  Settings,
  LogOut,
  ShieldCheck
} from 'lucide-react';

const AdminSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('dkm_admin_token');
    navigate('/admin/login');
  };

  const navItems = [
    { label: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
    { label: 'Business Enquiries', path: '/admin/business-enquiries', icon: Building2 },
    { label: 'Franchise Applications', path: '/admin/franchise-applications', icon: Handshake },
    { label: 'Contact Messages', path: '/admin/contact-messages', icon: Mail },
    { label: 'Resources & Case Studies', path: '/admin/resources', icon: FileText },
    { label: 'Success Stories / Reviews', path: '/admin/success-stories', icon: Quote },
    { label: 'Site Content Config', path: '/admin/site-content', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-navy-dark text-white min-h-screen flex flex-col justify-between p-4 shrink-0 border-r border-slate-800">
      <div className="space-y-6">
        
        {/* Admin Header Branding */}
        <div className="flex items-center gap-3 p-2">
          <div className="w-9 h-9 rounded-xl bg-purple-gradient flex items-center justify-center text-white">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-sans text-sm font-extrabold text-white leading-tight">
              DKM ADMIN
            </h2>
            <span className="text-[10px] font-mono text-purple-300">
              Digital Kerala Mission
            </span>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="space-y-1">
          {navItems.map((item) => {
            const IconComp = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-sans font-semibold transition-all ${
                    isActive
                      ? 'bg-primary-purple text-white shadow-md'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`
                }
              >
                <IconComp className="w-4 h-4 shrink-0" />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

      </div>

      {/* Footer / Logout */}
      <div className="pt-4 border-t border-slate-800 space-y-3">
        <NavLink
          to="/"
          className="block text-center text-xs font-sans text-slate-400 hover:text-white py-1 transition-colors"
        >
          ↗ View Public Website
        </NavLink>

        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-slate-800 hover:bg-rose-600 text-white text-xs font-semibold transition-colors cursor-pointer"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
