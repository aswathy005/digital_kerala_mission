import React from 'react';

const SectionHeading = ({
  kicker,
  title,
  subtitle,
  centered = true,
  theme = 'light', // 'light' or 'dark'
  className = '',
}) => {
  const isDark = theme === 'dark';

  return (
    <div className={`space-y-3 max-w-3xl ${centered ? 'mx-auto text-center' : ''} ${className}`}>
      {kicker && (
        <div className="inline-flex items-center gap-2">
          <span className="h-px w-6 bg-kasavu"></span>
          <span className="text-xs font-mono font-semibold tracking-widest uppercase text-kasavu">
            {kicker}
          </span>
          <span className="h-px w-6 bg-kasavu"></span>
        </div>
      )}

      {title && (
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-serif font-bold leading-tight ${
          isDark ? 'text-ivory' : 'text-backwater'
        }`}>
          {title}
        </h2>
      )}

      {subtitle && (
        <p className={`text-base sm:text-lg font-sans leading-relaxed ${
          isDark ? 'text-ivory/80' : 'text-ink-soft'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
