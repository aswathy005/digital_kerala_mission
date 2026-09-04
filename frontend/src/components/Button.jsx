import React from 'react';
import { Loader2 } from 'lucide-react';

const Button = ({
  children,
  variant = 'purple',
  size = 'md',
  isLoading = false,
  disabled = false,
  className = '',
  icon: Icon = null,
  iconPosition = 'right',
  onClick,
  type = 'button',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer';

  const variants = {
    purple: 'bg-primary-purple text-white hover:bg-purple-dark shadow-md shadow-purple-500/20 active:scale-95',
    emerald: 'bg-emerald-accent text-white hover:bg-emerald-700 shadow-md shadow-emerald-500/20 active:scale-95',
    outline: 'border-2 border-primary-purple text-primary-purple hover:bg-primary-purple hover:text-white active:scale-95',
    white: 'bg-white text-navy-dark hover:bg-slate-50 shadow-md border border-slate-100 active:scale-95',
    navy: 'bg-navy-dark text-white hover:bg-navy-deep active:scale-95',
    ghost: 'text-navy-dark hover:bg-purple-50 hover:text-primary-purple',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs rounded-lg space-x-1.5',
    md: 'px-5 py-2.5 text-sm rounded-xl space-x-2',
    lg: 'px-7 py-3.5 text-base rounded-full space-x-2.5 font-bold',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {isLoading ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          <span>Processing...</span>
        </>
      ) : (
        <>
          {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
          <span>{children}</span>
          {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
        </>
      )}
    </button>
  );
};

export default Button;
