import React from 'react';
import RibbonIcon from './RibbonIcon';

const SectionHeader = ({ 
  label, 
  titleLine1, 
  titleLine2, 
  italic = 0, 
  centered = false,
  color = 'var(--color-primary)',
  accentColor = 'var(--color-tertiary)'
}) => {
  return (
    <div className={`flex flex-col gap-4 ${centered ? 'items-center text-center' : ''} mb-16`}>
      <div className="flex items-center gap-2">
        <RibbonIcon size="xs" color={accentColor} />
        <span className="font-label text-xs uppercase tracking-[0.2em]" style={{ color: accentColor }}>
          {label}
        </span>
      </div>
      <h2 className="serif-regular text-5xl md:text-[56px] leading-[1.1]" style={{ color }}>
        <span className={italic === 1 ? 'serif-italic' : ''}>{titleLine1}</span>
        {titleLine2 && (
          <>
            <br />
            <span className={italic === 2 ? 'serif-italic' : ''}>{titleLine2}</span>
          </>
        )}
      </h2>
      <div className={`w-[48px] h-[2px] bg-secondary ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionHeader;
