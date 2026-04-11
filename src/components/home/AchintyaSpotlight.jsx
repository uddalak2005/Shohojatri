import React from 'react';
import { Link } from 'react-router-dom';
import RibbonIcon from '../global/RibbonIcon';
import Button from '../global/Button';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const AchintyaSpotlight = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section className="mt-10 mx-8 mb-24 max-w-[1280px] lg:mx-auto bg-[#7e2844]/5 border-l-4 border-[#C25E7A] rounded-r-lg overflow-hidden">
      <div ref={sectionRef} className="px-12 py-16 flex flex-col md:flex-row justify-between items-center gap-12 animate">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <RibbonIcon size="xs" color="#C25E7A" />
            <span className="font-label text-xs text-[#C25E7A] uppercase tracking-widest">
              AN INITIATIVE UNDER SHOHOJATRI
            </span>
          </div>
          <h2 className="serif-italic text-6xl text-[#C25E7A]">Achintya</h2>
          <div className="flex flex-wrap gap-3">
            {['Artistic Healing', 'Deep Inquiry', 'Soul Resonance'].map(tag => (
              <span key={tag} className="bg-[#C25E7A]/10 text-[#C25E7A] px-4 py-1.5 rounded-full text-xs font-label">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="text-right">
          <Button variant="primary" href="/achintya" className="bg-[#C25E7A] hover:bg-[#a14b62]">
            Explore Achintya →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AchintyaSpotlight;
