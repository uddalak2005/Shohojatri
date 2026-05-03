import React from 'react';

const GalleryFilters = ({ tags, activeFilter, onFilterChange }) => {
  const filters = tags && tags.length > 0 ? tags : ['All', 'Workshops', 'Events', 'Achintya', 'Community', 'Outreach'];

  return (
    <div className="sticky top-[72px] z-40 bg-[#f8fdf8]/80 backdrop-blur-md border-b border-[#2e6a4f]/10 py-6 px-12">
      <div className="max-w-[1280px] mx-auto flex flex-wrap gap-3 items-center">
        {filters.map((f) => (
          <button 
            key={f} 
            onClick={() => onFilterChange(f)}
            className={`
              px-6 py-2.5 rounded-full flex items-center gap-2 text-sm font-label font-medium transition-all
              ${activeFilter === f 
                ? 'bg-[#2e6a4f] text-white shadow-lg shadow-[#2e6a4f]/20' 
                : 'bg-[#2e6a4f]/5 text-[#2e6a4f]/70 hover:bg-[#2e6a4f]/10'}
            `}
          >
            <div className={`w-[6px] h-[9px] ${activeFilter === f ? 'bg-[#9ae600]' : 'bg-[#C25E7A]/40'} rounded-t-full`}></div>
            {f}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GalleryFilters;
