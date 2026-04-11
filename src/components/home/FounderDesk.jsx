import React from 'react';
import { members } from '../../data/members';
import SectionHeader from '../global/SectionHeader';
import RibbonIcon from '../global/RibbonIcon';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const FounderDesk = () => {
  const sectionRef = useScrollAnimation();
  const founder = members.find(m => m.role === 'Founder & Director');

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

          </div>
        </div>

      </div>
    </section>
  );
};

export default FounderDesk;