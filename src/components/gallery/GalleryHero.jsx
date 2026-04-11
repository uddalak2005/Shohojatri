import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const GalleryHero = () => {
  const sectionRef = useScrollAnimation('fade-in');

  return (
    <section className="h-[320px] bg-[#f8fdf8] flex items-center px-12 relative overflow-hidden">
      <div ref={sectionRef} className="max-w-[1280px] mx-auto w-full z-10 animate">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-[12px] h-[18px] bg-[#C25E7A] rounded-t-full"></div>
          <span className="font-label text-xs tracking-[0.2em] uppercase text-[#2e6a4f]/60">
            The Visual Archive
          </span>
        </div>
        <h1 className="font-mercury text-7xl md:text-[96px] leading-[0.9] text-[#2e6a4f] tracking-tighter">
          Moments of <br /> <span className="italic font-light">Togetherness</span>
        </h1>
        <p className="font-label font-light text-[18px] text-[#2e6a4f]/80 mt-6 max-w-xl">
          Every image tells a story of healing, community, and growth.
        </p>
      </div>
      <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#9ae600]/10 rounded-full blur-[100px]"></div>
    </section>
  );
};

export default GalleryHero;
