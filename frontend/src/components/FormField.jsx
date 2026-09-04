import React from 'react';

const FormField = ({
  label,
  id,
  name,
  type = 'text',
  value,
  onChange,
  placeholder = '',
  required = false,
  error = '',
  helperText = '',
  options = [],
  rows = 4,
  disabled = false,
  className = '',
}) => {
  const inputBaseStyles = `w-full px-4 py-2.5 rounded-lg border transition-all duration-200 focus:outline-none text-ink bg-white/90 placeholder-ink-soft/50 text-sm font-sans ${
    error
      ? 'border-chilli text-chilli focus:ring-2 focus:ring-chilli/30'
      : 'border-kasavu/30 focus:border-kasavu focus:ring-2 focus:ring-kasavu/30'
  } ${disabled ? 'bg-gray-100 opacity-60 cursor-not-allowed' : ''}`;

  return (
    <div className={`space-y-1.5 ${className}`}>
      {label && (
        <label htmlFor={id || name} className="block text-xs font-mono font-medium tracking-wider uppercase text-ivory/90">
          {label} {required && <span className="text-chilli font-bold">*</span>}
        </label>
      )}

      {type === 'select' ? (
        <select
          id={id || name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          className={`${inputBaseStyles} appearance-none bg-no-repeat bg-[right_1rem_center] cursor-pointer`}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%3C175E4C' %3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
            backgroundSize: '1.25rem',
          }}
        >
          <option value="" disabled>
            Select {label || 'option'}...
          </option>
          {options.map((opt) => (
            <option
              key={typeof opt === 'string' ? opt : opt.value}
              value={typeof opt === 'string' ? opt : opt.value}
              className="text-ink bg-ivory"
            >
              {typeof opt === 'string' ? opt : opt.label}
            </option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea
          id={id || name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          rows={rows}
          disabled={disabled}
          className={inputBaseStyles}
        />
      ) : (
        <input
          type={type}
          id={id || name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className={inputBaseStyles}
        />
      )}

      {error ? (
        <p className="text-xs font-sans text-chilli font-medium mt-1 flex items-center gap-1">
          <span>⚠️</span> {error}
        </p>
      ) : helperText ? (
        <p className="text-xs font-sans text-ivory/60 mt-1">{helperText}</p>
      ) : null}
    </div>
  );
};

export default FormField;
