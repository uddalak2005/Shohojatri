import React from 'react';
import RibbonIcon from './RibbonIcon';

const Loader = ({ fullScreen = true }) => {
  return (
    <div className={`${fullScreen ? 'fixed inset-0 z-50 bg-[#f8fdf8]' : 'w-full min-h-[50vh] bg-transparent'} flex flex-col items-center justify-center transition-all duration-500`}>
      <div className="relative flex flex-col items-center">
        {/* Animated Ribbon */}
        <div className="animate-bounce">
          <div className="animate-pulse">
            <RibbonIcon size="lg" color="#2e6a4f" className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-md" />
          </div>
        </div>
        
        {/* Loading text */}
        <h3 className="mt-8 serif-italic text-3xl text-[#2e6a4f] tracking-wide animate-pulse">
          Shohojatri
        </h3>
        <p className="mt-3 font-label text-[10px] uppercase tracking-[0.4em] text-[#888888] animate-pulse">
          Loading Experiences
        </p>
      </div>
    </div>
  );
};

export default Loader;
