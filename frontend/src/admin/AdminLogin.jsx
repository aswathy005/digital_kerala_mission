import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import FormField from '../components/FormField';
import Button from '../components/Button';
import Toast from '../components/Toast';
import { adminLogin } from '../services/apiServices';
import { ShieldCheck, Lock, AlertCircle } from 'lucide-react';

const AdminLogin = () => {
  const [form, setForm] = useState({ username: 'admin@digitalkerala.in', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await adminLogin(form);
      setToast({ type: 'success', message: 'Signed in successfully!' });
      setTimeout(() => {
        navigate('/admin/dashboard');
      }, 500);
    } catch (err) {
      setError(err.userMessage || 'Invalid admin credentials');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-navy-dark flex items-center justify-center p-4 text-white relative">
      <Toast message={toast?.message} type={toast?.type} onClose={() => setToast(null)} />

      <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-2xl text-navy-dark space-y-6">
        
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-purple-gradient text-white flex items-center justify-center mx-auto shadow-md">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-sans font-extrabold text-navy-dark">Admin Authentication</h2>
          <p className="text-xs font-mono text-primary-purple">Digital Kerala Mission Portal</p>
        </div>

        {error && (
          <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-600 font-sans flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <FormField
            label="Admin Username / Email"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            required
          />

          <FormField
            label="Password"
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            placeholder="Enter password..."
            required
          />

          <Button
            type="submit"
            variant="purple"
            size="lg"
            className="w-full justify-center rounded-2xl shadow-purple-glow"
            isLoading={isLoading}
            icon={Lock}
          >
            Sign In to Dashboard
          </Button>
        </form>

        <div className="pt-4 border-t border-slate-100 text-center">
          <Link to="/" className="text-xs font-sans text-slate-500 hover:text-primary-purple">
            ← Return to Public Website
          </Link>
        </div>

      </div>
    </div>
  );
};

export default AdminLogin;
