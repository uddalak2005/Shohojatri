import React from 'react';
import Card from '../global/Card';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const GalleryGrid = ({ items }) => {
  const sectionRef = useScrollAnimation();

  return (
    <section className="px-12 py-24 max-w-[1280px] mx-auto">
      <div ref={sectionRef} className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 animate">
        {items.map((item) => (
          <div key={item.id} className="break-inside-avoid">
            <Card className="group relative cursor-pointer" hover={true}>
              <img 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.04]" 
                src={item.src} 
                alt={item.caption}
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2e6a4f]/90 via-[#2e6a4f]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-[#9ae600] text-xs font-label uppercase tracking-widest mb-1">
                  {item.tag}
                </span>
                <h3 className="apple-garamond italic text-2xl text-white">
                  {item.caption}
                </h3>
              </div>
            </Card>
          </div>
        ))}
      </div>
      
      {/* Pagination Placeholder */}
      <div className="mt-24 flex items-center justify-center gap-6 font-label text-sm tracking-widest text-[#2e6a4f]/60">
        <button className="hover:text-[#2e6a4f] transition-colors">← PREV</button>
        <div className="flex items-center gap-4">
          <span className="w-10 h-10 rounded-full bg-[#2e6a4f] text-white flex items-center justify-center font-bold">1</span>
          <span className="hover:text-[#2e6a4f] cursor-pointer transition-colors">2</span>
          <span className="hover:text-[#2e6a4f] cursor-pointer transition-colors">3</span>
        </div>
        <button className="hover:text-[#2e6a4f] transition-colors">NEXT →</button>
      </div>
    </section>
  );
};

export default GalleryGrid;
