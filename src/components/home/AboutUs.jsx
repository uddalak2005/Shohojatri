import React from 'react';
import { aboutData } from '../../data/home';
import Button from '../global/Button';
import SectionHeader from '../global/SectionHeader';
import RibbonIcon from '../global/RibbonIcon';
import useCountUp from '../../hooks/useCountUp';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const stats = [
  { value: 500, suffix: '+', label: 'Lives Touched' },
  { value: 30, suffix: '+', label: 'Workshops Conducted' },
  { value: 5, suffix: '+', label: 'Years of Impact' },
  { value: 12, suffix: '+', label: 'Community Programs' },
];

// ── Stat Item ──────────────────────────────────────────────────────────────
const StatItem = ({ value, suffix, label, statsRef }) => {
  const count = useCountUp(value, statsRef);

  return (
    <div className="flex flex-col gap-1 py-6 
      border-b border-white/10 last:border-b-0
      [&:nth-child(odd)]:border-r [&:nth-child(odd)]:border-white/10
      [&:nth-child(odd)]:pr-8 [&:nth-child(even)]:pl-8"
    >
      <span
        className="text-white leading-none"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(40px, 4vw, 56px)',
          fontWeight: 400,
        }}
      >
        {count}{suffix}
      </span>
      <span
        className="text-white/60 uppercase tracking-[0.15em]"
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '11px',
          fontWeight: 500,
        }}
      >
        {label}
      </span>
    </div>
  );
};

// ── About Us ───────────────────────────────────────────────────────────────
const AboutUs = () => {
  const sectionRef = useScrollAnimation();
  const statsRef = React.useRef(null);

  return (
    // ✅ FIX 2: Container and section are now separate concerns
    // section = full width, bg, padding
    // inner div = max-width container + grid
    <section id="about" className="w-full py-24 px-6 sm:px-8 lg:px-10">
      <div
        className="
          max-w-[1280px] mx-auto
          grid grid-cols-1 items-center gap-16

          /* ✅ FIX 1: lg (1024px) not md (768px) — tablets stay vertical */
          lg:grid-cols-12 lg:gap-20
        "
      >

        {/* ── Left — Text Content ── */}
        {/* ✅ FIX 5: col-span only applied at lg, not md */}
        <div
          ref={sectionRef}
          className="animate lg:col-span-7 space-y-8"
        >
          <SectionHeader
            label={aboutData.label}
            titleLine1={aboutData.titleLine1}
            titleLine2={aboutData.titleLine2}
            italic={2}
          />

          <div className="space-y-5 max-w-xl">
            {aboutData.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-[#3a3a3a] leading-[1.85]"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 300,
                  fontSize: '16px',
                }}
              >
                {p}
              </p>
            ))}
          </div>

          <Button variant="text" href="/contact">
            Explore our services →
          </Button>
        </div>

        {/* ── Right — Stats Card ── */}
        {/* ✅ FIX 5: col-span only at lg */}
        <div
          ref={statsRef}
          className="lg:col-span-5"
        >
          <div
            className="
              relative overflow-hidden
              bg-[#2e6a4f] p-10 sm:p-12
              rounded-[32px]
              min-h-[320px]
              grid grid-cols-2
            "
          >
            {/* Accent line top */}
            <div
              className="absolute top-0 left-0 w-full h-[3px] rounded-t-[32px]"
              style={{
                background: 'linear-gradient(to right, #9ae600, rgba(154,230,0,0.1))',
              }}
            />

            {/* Stats grid */}
            {stats.map((stat) => (
              <StatItem
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                statsRef={statsRef}
              />
            ))}

            {/* ✅ FIX 4: Replaced material-symbols icon with ribbon SVG — no external dep */}
            <div
              className="absolute -bottom-4 -right-4 pointer-events-none select-none"
              style={{ opacity: 0.06 }}
            >
              <RibbonIcon size="lg" color="#ffffff" />
            </div>
          </div>

          {/* Founder tag below card */}
          <p
            className="mt-4 text-center italic text-[#C25E7A]"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '11px',
              letterSpacing: '0.1em',
            }}
          >
            A Debangana Bhattacharya Initiative
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;