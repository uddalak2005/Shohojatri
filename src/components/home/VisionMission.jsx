import React from 'react';
import { visionMission } from '../../data/home';
import RibbonIcon from '../global/RibbonIcon';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const VisionMission = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section className="bg-[#2e6a4f] py-24 px-8">
      <div ref={sectionRef} className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 animate">
        <div className="md:col-span-5 space-y-8 border-b md:border-b-0 md:border-r border-white/10 pb-16 md:pb-0 md:pr-16">
          <div className="flex items-center gap-2">
            <RibbonIcon size="xs" color="#ffffff" />
            <span className="font-label text-xs text-white uppercase tracking-[0.2em]">
              {visionMission[0].label}
            </span>
          </div>
          <h3 className="serif-italic text-4xl text-white leading-tight">
            {visionMission[0].title}
          </h3>
          <p className="serif-italic text-lg text-white/80 leading-relaxed">
            We envision a world where mental health is prioritized as a fundamental human right, and every individual possesses the tools to navigate their internal landscape with grace.
          </p>
        </div>
        
        <div className="md:col-span-7 space-y-10">
          <div className="flex items-center gap-2">
            <RibbonIcon size="xs" color="#ffffff" />
            <span className="font-label text-xs text-white uppercase tracking-[0.2em]">
              {visionMission[1].label}
            </span>
          </div>
          <h3 className="serif-regular text-4xl text-white">
            {visionMission[1].title}
          </h3>
          <ul className="space-y-6">
            {[
              'Advancing mental health literacy through evidence-based outreach programs.',
              'Integrating creative arts as a core therapeutic intervention for diverse groups.',
              'Providing professional psychometric assessments with academic precision.',
              'Fostering community resilience through collaborative workshop models.',
              'Ensuring inclusivity in therapy for marginalized and underserved populations.',
            ].map(item => (
              <li key={item} className="flex items-start gap-4 text-white/80 font-light">
                <RibbonIcon size="xs" color="rgba(255,255,255,0.4)" className="pt-1" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
