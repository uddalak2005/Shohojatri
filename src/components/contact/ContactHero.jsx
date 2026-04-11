import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const ContactHero = () => {
  const sectionRef = useScrollAnimation('fade-in');

  return (
    <section className="h-[400px] bg-[#f8fdf8] relative overflow-hidden flex items-center px-12">
      <div ref={sectionRef} className="max-w-[1280px] mx-auto w-full z-10 animate">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-[12px] h-[18px] bg-[#2e6a4f] rounded-t-full"></div>
          <span className="font-label text-xs tracking-[0.2em] uppercase text-[#2e6a4f]/60">
            Reach Out
          </span>
        </div>
        <h1 className="font-mercury text-7xl md:text-[90px] leading-[0.9] text-[#2e6a4f] tracking-tighter">
          Start Your <br /> <span className="italic font-light">Journey Today</span>
        </h1>
        <p className="font-label font-light text-[18px] text-[#2e6a4f]/80 mt-6 max-w-xl">
          Whether you have a question, want to book a workshop, or just need to talk, we're here to walk with you.
        </p>
      </div>
      
      {/* Decorative Wave */}
      <div className="absolute right-0 bottom-0 w-full h-24 bg-[#2e6a4f]/5 rotate-2 translate-y-12"></div>
    </section>
  );
};

export default ContactHero;
