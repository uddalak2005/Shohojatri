import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const BlogHero = () => {
  const sectionRef = useScrollAnimation('fade-in');

  return (
    <section className="h-[400px] bg-[#f8fdf8] relative overflow-hidden flex items-center px-12">
      <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none"></div>
      <div ref={sectionRef} className="max-w-[1280px] mx-auto w-full z-10 animate">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-[12px] h-[18px] bg-[#9ae600] rounded-t-full"></div>
          <span className="font-label text-xs tracking-[0.2em] uppercase text-[#2e6a4f]">
            Insights & Reflections
          </span>
        </div>
        <h1 className="font-mercury text-7xl md:text-[96px] leading-[0.9] text-[#2e6a4f] tracking-tighter">
          Words That <br /> <span className="italic font-light">Heal & Inspire</span>
        </h1>
        <p className="font-label font-light text-[18px] text-[#2e6a4f]/80 mt-6 max-w-xl">
          Exploring the intersections of clinical psychology, creative expression, and community resilience.
        </p>
      </div>

      {/* Abstract Shapes */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-[#C25E7A]/5 -rotate-12 translate-x-1/4"></div>
    </section>
  );
};

export default BlogHero;
