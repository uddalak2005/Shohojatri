import React from 'react';
import { services } from '../../data/services';
import SectionHeader from '../global/SectionHeader';
import Card from '../global/Card';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Services = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section className="py-24 px-8 max-w-[1280px] mx-auto">
      <SectionHeader 
        label="What We Do"
        titleLine1="Our Services &"
        titleLine2="Interventions"
        italic={2}
        centered={true}
      />
      
      <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate">
        {services.map((item) => (
          <Card key={item.id} className="p-10 relative group border-l-0 hover:border-l-[3px] border-[#9ae600]">
            <span className="serif-regular text-8xl text-[#2e6a4f]/5 absolute -top-4 right-4 pointer-events-none">
              {item.number}
            </span>
            <span className="material-symbols-outlined text-4xl text-[#2e6a4f] mb-8 block">
              {item.icon}
            </span>
            <h4 className="serif-regular text-2xl text-[#2e6a4f] mb-4">
              {item.title}
            </h4>
            <p className="text-sm font-light leading-relaxed text-[#3a3a3a]">
              {item.description}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
