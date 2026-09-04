import React from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

const Toast = ({ message, type = 'success', onClose }) => {
  if (!message) return null;

  const isSuccess = type === 'success';

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 max-w-md w-full p-4 rounded-xl shadow-2xl border backdrop-blur-md transition-all duration-300 transform translate-y-0 flex items-start gap-3 ${
        isSuccess
          ? 'bg-backwater/95 text-ivory border-kasavu'
          : 'bg-chilli/95 text-ivory border-white/30'
      }`}
    >
      <div className="shrink-0 mt-0.5">
        {isSuccess ? (
          <CheckCircle2 className="w-5 h-5 text-kasavu" />
        ) : (
          <AlertCircle className="w-5 h-5 text-white" />
        )}
      </div>

      <div className="flex-1 text-sm font-sans">
        <h4 className="font-serif font-bold text-base mb-0.5">
          {isSuccess ? 'Submission Successful' : 'Action Required'}
        </h4>
        <p className="opacity-90">{message}</p>
      </div>

      <button
        onClick={onClose}
        className="shrink-0 p-1 rounded-md text-ivory/70 hover:text-ivory hover:bg-white/10 transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Toast;
