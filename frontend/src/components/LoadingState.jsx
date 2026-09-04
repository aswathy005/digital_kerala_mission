import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingState = ({ text = 'Loading AI Engine Data...' }) => {
  return (
    <div className="py-12 flex flex-col items-center justify-center text-center space-y-3">
      <div className="p-3 bg-kasavu/10 rounded-full border border-kasavu/30">
        <Loader2 className="w-8 h-8 text-kasavu animate-spin" />
      </div>
      <p className="text-sm font-mono text-ink-soft/80 tracking-wide uppercase">{text}</p>
    </div>
  );
};

export default LoadingState;
