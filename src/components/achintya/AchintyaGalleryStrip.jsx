import React from 'react';
import SectionHeader from '../global/SectionHeader';
import { achintyaGalleryStrip } from '../../data/achintya';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const AchintyaGalleryStrip = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-8 mb-12">
        <SectionHeader 
          label="Visual Journal"
          titleLine1="Moments of"
          titleLine2="Expression"
          italic={2}
          accentColor="#C25E7A"
        />
      </div>
      
      <div ref={sectionRef} className="flex space-x-6 overflow-x-auto px-8 no-scrollbar pb-10 animate">
        {achintyaGalleryStrip.map((src, i) => (
          <div key={i} className="flex-none w-[280px] h-[200px] rounded-2xl bg-[#2e6a4f]/5 relative overflow-hidden group cursor-pointer shadow-sm">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              src={src} 
              alt={`Achintya gallery ${i}`} 
            />
            <div className="absolute inset-0 bg-[#C25E7A]/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AchintyaGalleryStrip;
