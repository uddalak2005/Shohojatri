import React from 'react';
import SectionHeader from '../global/SectionHeader';
import { achintyaTestimonials } from '../../data/achintya';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const AchintyaTestimonials = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section className="py-24 bg-[rgba(194,94,122,0.06)] px-8">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader 
          label="Voices of Healing"
          titleLine1="Stories of"
          titleLine2="Transformation"
          italic={2}
          accentColor="#C25E7A"
        />
        
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-3 gap-12 animate">
          {achintyaTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="relative bg-white p-12 rounded-xl border-l-4 border-[#C25E7A] shadow-xl shadow-black/[0.02] hover:-translate-y-2 transition-transform duration-300">
              <span className="material-symbols-outlined text-4xl text-[#C25E7A]/20 absolute top-6 right-8">
                format_quote
              </span>
              <p className="apple-garamond text-2xl italic mb-8 leading-snug text-[#3a3a3a]">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#2e6a4f]/10"></div>
                <div>
                  <p className="font-label font-bold text-sm text-[#2e6a4f]">{testimonial.name}</p>
                  <p className="font-label text-xs text-[#888888] uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchintyaTestimonials;
