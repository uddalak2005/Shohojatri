import React, { useState, useEffect } from 'react';
import { members } from '../../data/members';
import SectionHeader from '../global/SectionHeader';
import RibbonIcon from '../global/RibbonIcon';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const bioText = [
  "Dr. Debangana Bhattacharya, PhD and Consultant Psychologist, Assistant Professor of Psychology. She has experience of working in the field of Psychology since 2013. She has previously worked in a teaching position at George Group of Colleges, MAKAUT, and University of Calcutta. She has experience working as a Clinical Psychologist and Researcher position in different International Psychological Projects under the Indian Council of Medical Research and the University of Calcutta. She has also worked as a psychologist and counsellor at Department of Psychology, University of Calcutta.",
  "She earned her academic training and degrees in Psychology from the Department of Psychology, Rajabazar Science Clg, University of Calcutta. She qualified in the UGC-NET examination. Her doctoral thesis was submitted in 2025. She is a founder of Psychological Wellness Foundation (Shohojatri) and in collaboration as an Academic Head with other Mental Health Organization.",
  "Her teaching and research integrate Developmental, Clinical, and Positive psychology perspectives, with a strong emphasis on research methodology, Psychoanalysis, psychometrics, and statistical analysis.",
  "Her scholarly work has addressed issues of identity development, family environment, stress, resilience, Sexual Identity development, Positive psychological capital, stress management, resilience, personality. Her clinical work spans diverse populations such as LGBTQ, Female Sex Workers, Police Officers, Special community Population, Tribal population, Coal mine workers, parenting styles, workplace harassment, and different mental health related issues across diverse populations.",
  "She has published in national and international peer-reviewed journals, UGC and Scopus indexed, National and International journals and has presented papers at UGC-funded and UGC care indexed national and international conferences. She has received best paper awards at UGC conferences. She received 2 Awards from International Academic forums. She has a UGC best paper book proceeding. Additionally, she had conducted workshops on Psychoanalysis, Research methodology and statistical analysis, Psychological Disorders and different workshops contributing to the capacity building and evidence-based psychological practice. Her work reflects a sustained commitment to empirical research, inclusive psychological practice, and interdisciplinary engagement."
];

const FounderDesk = ({ founderData }) => {
  const sectionRef = useScrollAnimation();
  const [isBioOpen, setIsBioOpen] = useState(false);
  const founder = founderData || members.find(m => m.role === 'Founder & Director');

  useEffect(() => {
    if (isBioOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isBioOpen]);

  if (!founder) return null;

  return (
    // ✅ FIX 2: Section is full-width wrapper, inner div handles container + grid
    <section id="founder" className="w-full py-24 px-6 sm:px-8 lg:px-10">
      <div
        className="
          max-w-[1280px] mx-auto
          grid grid-cols-1 items-center gap-16

          /* ✅ FIX 1 + 9: lg breakpoint — tablets stay vertical */
          lg:grid-cols-12 lg:gap-20
        "
      >

        {/* ── Left — Portrait ── */}
        <div
          ref={sectionRef}
          className="animate lg:col-span-5 flex justify-center"
        >
          {/* ✅ FIX 4: Constrain image size on mobile so it doesn't dominate */}
          {/* ✅ FIX 5: Parent has overflow-visible so ring doesn't clip,
                       but ring uses outline trick to stay in-flow */}
          <div className="relative w-full max-w-[360px] lg:max-w-full">

            {/* Outer decorative ring — positioned slightly outside */}
            {/* ✅ FIX 5: Using inset negative value instead of scale to avoid overflow */}
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                inset: '-8px',
                border: '2px solid rgba(154,230,0,0.6)',
                borderRadius: '50%',
              }}
            />

            {/* Second softer ring for depth */}
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                inset: '-16px',
                border: '1px solid rgba(154,230,0,0.2)',
                borderRadius: '50%',
              }}
            />

            {/* Photo */}
            {/* ✅ FIX 7: Replaced shadow-2xl with spec-correct soft shadow */}
            <div
              className="w-full aspect-square rounded-full overflow-hidden"
              style={{
                boxShadow: '0 16px 56px rgba(46,106,79,0.18), 0 4px 16px rgba(46,106,79,0.1)',
              }}
            >
              <img
                className="w-full h-full object-cover"
                src={founder.photo}
                alt={founder.name}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Decorative ribbon — bottom left of portrait */}
            <div
              className="absolute -bottom-4 -left-4 pointer-events-none select-none"
              style={{ opacity: 0.12 }}
            >
              <RibbonIcon size="md" color="#2e6a4f" />
            </div>

          </div>
        </div>

        {/* ── Right — Content ── */}
        {/* ✅ FIX 6 + 9: col-span only at lg */}
        <div className="lg:col-span-7 space-y-8 relative">

          {/* ✅ FIX 3: Pure CSS quote mark — zero external dependencies */}
          <span
            className="absolute -top-10 -left-4 pointer-events-none select-none leading-none"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(80px, 12vw, 140px)',
              color: 'rgba(46,106,79,0.06)',
              lineHeight: 1,
              userSelect: 'none',
            }}
            aria-hidden="true"
          >
            "
          </span>

          <SectionHeader
            label="From the Founder's Desk"
            titleLine1="A Legacy of"
            titleLine2="Empathy"
            italic={2}
          />

          {/* ✅ FIX 8: clamp() for fluid blockquote size across all screens */}
          <blockquote
            className="text-[#2e6a4f] leading-[1.55] py-2"
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 'clamp(18px, 2.2vw, 26px)',
            }}
          >
            "Healing is not a destination, but a courageous way of being
            in the world. At Shohojatri, we don't just provide therapy —
            we build sanctuaries where the human spirit can flourish."
          </blockquote>

          {/* Founder details */}
          <div className="space-y-3 pt-2">

            {/* Signature line */}
            <div
              className="h-[2px] w-16"
              style={{
                background: 'linear-gradient(to right, #9ae600, rgba(154,230,0,0.2))',
              }}
            />

            <h4
              className="text-[#2e6a4f]"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(20px, 2vw, 24px)',
                fontWeight: 400,
              }}
            >
              {founder.name}
            </h4>

            <div
              className="flex flex-col gap-[6px]"
              style={{ fontFamily: 'var(--font-body)', fontSize: '14px' }}
            >
              <span className="text-[#888888]">{founder.role}</span>
              <span className="text-[#888888]">{founder.department}</span>
              <span
                className="text-[#C25E7A]"
                style={{ fontWeight: 500 }}
              >
                {founder.affiliation}
              </span>
              <span
                className="text-[#2e6a4f]"
                style={{ fontWeight: 500 }}
              >
                {founder.initiative}
              </span>
            </div>
            
            {/* Read Full Bio Button */}
            <div className="pt-5">
              <button 
                onClick={() => setIsBioOpen(true)}
                className="text-[#2e6a4f] hover:text-[#1a4231] transition-all inline-flex items-center gap-2 group"
                style={{ fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 500 }}
              >
                Read Full Bio 
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* ── Bio Modal Overlay ── */}
      {isBioOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 opacity-0 animate-in fade-in duration-300"
          style={{ background: 'rgba(17,52,36,0.6)', backdropFilter: 'blur(8px)', opacity: 1 }}
          onClick={() => setIsBioOpen(false)}
        >
          <div 
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative translate-y-4 animate-in slide-in-from-bottom-4 duration-300"
            style={{ border: '1px solid rgba(46,106,79,0.1)', transform: 'translateY(0)' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              onClick={() => setIsBioOpen(false)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 flex items-center justify-center rounded-full bg-[#2e6a4f]/5 text-[#2e6a4f] hover:bg-[#2e6a4f]/10 transition-colors z-10"
              aria-label="Close bio"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <div className="p-8 sm:p-12 relative overflow-hidden">
              {/* Decorative background watermark inside modal */}
              <div className="absolute -top-10 -left-10 opacity-[0.03] pointer-events-none transform -rotate-12 scale-150">
                <RibbonIcon size="lg" color="#2e6a4f" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-2">
                  <div className="h-[2px] w-12" style={{ background: 'linear-gradient(to right, #9ae600, rgba(154,230,0,0.2))' }} />
                  <span className="text-[#C25E7A] tracking-widest text-xs uppercase font-medium" style={{ fontFamily: 'var(--font-body)' }}>
                    Founder & Director
                  </span>
                </div>
                
                <h3 
                  className="text-[#2e6a4f] mb-8"
                  style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 400, lineHeight: 1.2 }}
                >
                  Dr. Debangana Bhattacharya
                </h3>
                
                <div className="space-y-6 text-[#4a4a4a] leading-[1.85]" style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(15px, 1.2vw, 16px)', fontWeight: 300 }}>
                  {bioText.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default FounderDesk;