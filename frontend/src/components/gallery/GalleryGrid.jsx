import React from 'react';
import { urlFor } from '../../utils/sanity';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import Card from '../global/Card';

const GalleryGrid = ({ items, loading, currentPage = 1, totalPages = 1, onPageChange }) => {
  const sectionRef = useScrollAnimation();

  const getPhotoUrl = (photo) => {
    if (!photo) return '';
    if (typeof photo === 'string') return photo;
    if (photo.asset) return urlFor(photo).url();
    return '';
  };

  if (!items || items.length === 0) {
    return (
      <div className="px-12 py-24 flex justify-center">
        <div className="text-[#888888] font-label text-sm uppercase tracking-widest">No images available yet. Check back soon.</div>
      </div>
    );
  }

  return (
    <section className="px-12 py-24 max-w-[1280px] mx-auto">
      <div ref={sectionRef} className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 animate">
        {items.map((item) => (
          <div key={item._id || item.id} className="break-inside-avoid">
            <Card className="group relative cursor-pointer" hover={true}>
              <img 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.04]" 
                src={item.image ? getPhotoUrl(item.image) : getPhotoUrl(item.src)} 
                alt={item.caption || item.alt}
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2e6a4f]/90 via-[#2e6a4f]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <h3 className="apple-garamond italic text-2xl text-white">
                  {item.title || item.caption}
                </h3>
              </div>
            </Card>
          </div>
        ))}
      </div>
      
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-24 flex items-center justify-center gap-6 font-label text-sm tracking-widest text-[#2e6a4f]/60">
          <button 
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
            className={`transition-colors ${currentPage === 1 ? 'opacity-30 cursor-not-allowed' : 'hover:text-[#2e6a4f]'}`}
          >
            ← PREV
          </button>
          
          <div className="flex items-center gap-4">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <span 
                key={page}
                onClick={() => onPageChange(page)}
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center font-bold cursor-pointer transition-all
                  ${currentPage === page 
                    ? 'bg-[#2e6a4f] text-white shadow-lg' 
                    : 'hover:text-[#2e6a4f] hover:bg-[#2e6a4f]/5'}
                `}
              >
                {page}
              </span>
            ))}
          </div>

          <button 
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
            className={`transition-colors ${currentPage === totalPages ? 'opacity-30 cursor-not-allowed' : 'hover:text-[#2e6a4f]'}`}
          >
            NEXT →
          </button>
        </div>
      )}
    </section>
  );
};

export default GalleryGrid;
