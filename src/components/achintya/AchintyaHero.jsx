import React, { useState, useEffect } from 'react';
import Button from '../global/Button';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import AchintyaGroup from '../../assets/Achintya_Group.png';
import AchintyaGroupMobile from '../../assets/Achintya_Group_Mobile.jpeg';
import AchintyaGroupTablet from '../../assets/Achintya_Group_Tablet.png';

const AchintyaHero = () => {
  const sectionRef = useScrollAnimation('fade-in');
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkDeviceType = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width <= 1024);
    };
    checkDeviceType();
    window.addEventListener('resize', checkDeviceType);
    return () => window.removeEventListener('resize', checkDeviceType);
  }, []);

  const bgImage = isMobile
    ? AchintyaGroupMobile
    : isTablet
      ? AchintyaGroupTablet
      : AchintyaGroup;

  return (
    <section className="relative h-[560px] md:h-[620px] overflow-hidden flex items-center justify-center">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-700"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Multi-layer overlay for depth */}
      {/* Bottom-up dark gradient so lower portion is richer */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
      {/* Subtle warm tint in the middle */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a3d2b]/20 to-transparent" />
      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, transparent 35%, rgba(5,15,10,0.75) 100%)',
        }}
      />
      {/* Grain */}
      <div className="absolute inset-0 bg-grain opacity-[0.15] pointer-events-none" />

      {/* Horizontal rule accents */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Content — centered, full-width */}
      <div
        ref={sectionRef}
        className="relative z-10 w-full flex flex-col items-center text-center px-6 animate"
      >
        {/* Eyebrow */}
        <span className="inline-flex items-center gap-2 px-5 py-1.5 mb-6 bg-white/10 backdrop-blur-md border border-white/15 rounded-full text-white/80 text-[10px] font-bold tracking-[0.2em] uppercase">
          <span className="w-1 h-1 rounded-full bg-[#C25E7A] inline-block"></span>
          An Initiative under Shohojatri
          <span className="w-1 h-1 rounded-full bg-[#C25E7A] inline-block"></span>
        </span>

        {/* Giant headline */}
        <h1
          className="font-mercury italic text-white leading-none mb-4"
          style={{
            fontSize: 'clamp(4.5rem, 12vw, 9rem)',
            textShadow: '0 4px 40px rgba(0,0,0,0.5)',
            letterSpacing: '-0.02em',
          }}
        >
          Achintya
        </h1>

        {/* Decorative divider */}
        <div className="flex items-center gap-4 mb-5">
          <span className="block w-16 md:w-24 h-px bg-gradient-to-r from-transparent to-[#9ae600]/50" />
          <span className="text-[#C25E7A] text-lg">✦</span>
          <span className="block w-16 md:w-24 h-px bg-gradient-to-l from-transparent to-[#9ae600]/50" />
        </div>

        {/* Tagline */}
        <p
          className="apple-garamond italic text-white/75 mb-8"
          style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
            letterSpacing: '0.04em',
            textShadow: '0 2px 12px rgba(0,0,0,0.4)',
          }}
        >
          Where Art Meets the Soul
        </p>

        {/* CTA */}
        <Button
          variant="primary"
          href="/contact"
          className="bg-[#C25E7A] hover:bg-[#a14b62] shadow-[0_0_30px_rgba(194,94,122,0.3)] hover:shadow-[0_0_40px_rgba(194,94,122,0.5)] transition-all duration-300"
        >
          Book a Workshop →
        </Button>
      </div>
    </section>
  );
};

export default AchintyaHero;