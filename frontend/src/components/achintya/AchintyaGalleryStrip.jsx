import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { urlFor } from '../../utils/sanity';

const AchintyaGalleryStrip = ({ data }) => {
  const sectionRef = useScrollAnimation();

  if (!data || data.length === 0) return null;

  const getPhotoUrl = (photo) => {
    if (!photo) return '';
    if (typeof photo === 'string') return photo;
    if (photo.asset) return urlFor(photo).url();
    return '';
  };

  return (
    <section className="py-24 overflow-hidden">
      <div ref={sectionRef} className="flex space-x-6 overflow-x-auto px-8 no-scrollbar pb-10 animate">
        {data.map((item, i) => (
          <div key={item._id || i} className="flex-none w-[280px] h-[200px] rounded-2xl bg-[#2e6a4f]/5 relative overflow-hidden group cursor-pointer shadow-sm">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              src={getPhotoUrl(item.image)} 
              alt={item.caption || `Achintya gallery ${i}`}
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-[#C25E7A]/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AchintyaGalleryStrip;
