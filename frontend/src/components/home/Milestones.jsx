import React, { useRef, useState, useEffect } from 'react';
import { milestones } from '../../data/milestones';
import RibbonIcon from '../global/RibbonIcon';
import Button from '../global/Button';
import SectionHeader from '../global/SectionHeader';

const Milestones = ({ data }) => {
  const containerRef = useRef(null);
  const spineRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState({});
  const [closingVisible, setClosingVisible] = useState(false);
  const timelineRef = useRef(null);

  const displayMilestones = data && data.length > 0 ? data : milestones;

  // Scroll-driven spine grow
  useEffect(() => {
    let ticking = false;

    const updateSpine = () => {
      if (!timelineRef.current || !spineRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Start when timeline enters viewport
      const start = rect.top - viewportHeight * 0.6;

      // End before timeline fully leaves viewport
      const end = rect.bottom - viewportHeight * 0.3;

      const total = end - start;

      // Progress calculation (stable for all screen sizes)
      let progress =
        (viewportHeight - rect.top - viewportHeight * 0.4) / total;

      // Clamp between 0 → 1
      progress = Math.max(0, Math.min(1, progress));

      spineRef.current.style.height = `${progress * 100}%`;

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateSpine);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateSpine(); // run once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for card + node entrance
  useEffect(() => {
    if (!containerRef.current) return;
    const options = { threshold: 0.25 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('data-milestone-id');
          if (id === 'closing') {
            setClosingVisible(true);
          } else {
            setVisibleItems(prev => ({ ...prev, [id]: true }));
          }
          observer.unobserve(entry.target); // fire once
        }
      });
    }, options);

    const elements = containerRef.current.querySelectorAll('[data-milestone-id]');
    elements.forEach(el => observer.observe(el));
    return () => elements.forEach(el => observer.unobserve(el));
  }, [displayMilestones]);

  return (
    <section
      ref={containerRef}
      className="w-full py-[96px] pb-[120px] relative overflow-hidden"
      style={{ backgroundColor: 'rgba(46,106,79,0.025)' }}
    >
      {/* Watermark */}
      <div className="absolute top-[40px] left-0 w-full text-center pointer-events-none select-none z-0 overflow-hidden"
        style={{ opacity: 0.025 }}
      >
        <span
          className="whitespace-nowrap uppercase leading-none"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(80px, 12vw, 180px)',
            color: '#2e6a4f',
          }}
        >
          OUR JOURNEY
        </span>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-10 relative z-10">

        {/* Section Header */}
        <SectionHeader
          label="Our Journey"
          titleLine1="Milestones That"
          titleLine2="Shaped Us"
          italic={2}
          centered={true}
        />

        {/* Timeline */}
        <div ref={timelineRef} className="relative mt-20">

          {/* ── Spine track (faint bg line) ──
              Mobile:  left-[43px]  = center of 88px node (44px - 1px for 2px spine)
              Desktop: left-1/2 centered in container
          */}

          {/* Spine track (background line) */}
          <div
            className="absolute top-0 w-[2px] h-full z-0
  left-[43px] md:left-1/2 md:-translate-x-1/2"
            style={{ background: 'rgba(46,106,79,0.08)' }}
          />

          {/* Animated spine (SINGLE element for all screens) */}
          <div
            ref={spineRef}
            className="absolute top-0 w-[2px] z-[1] origin-top
  left-[43px] md:left-1/2 md:-translate-x-1/2"
            style={{
              height: '0%',
              background:
                'linear-gradient(to bottom, #2e6a4f, rgba(46,106,79,0.4), rgba(46,106,79,0.1))',
              transition: 'height 0.08s linear',
            }}
          />

          {/* ── Milestone items ── */}
          <div className="space-y-[40px] md:space-y-0">
            {displayMilestones.map((item, index) => {
              const uniqueId = String(item._id || item.id || `milestone-${index}`);
              const isVisible = visibleItems[uniqueId];
              const isAchintya = item.accent === 'rose';
              const isImpact = item.accent === 'lime';

              // If 'side' doesn't exist (e.g. from Sanity), alternate based on index
              const isLeft = item.side ? item.side === 'LEFT' : index % 2 === 0;

              // Node colors
              const nodeColor = isAchintya ? '#C25E7A' : '#2e6a4f';
              const nodeShadow = isAchintya
                ? '0 4px_20px rgba(194,94,122,0.3)'
                : '0 4px 20px rgba(46,106,79,0.3)';
              const ribbonColor = isImpact ? '#9ae600' : '#ffffff';

              // Card entrance direction
              const cardEnter = isVisible
                ? 'opacity-100 translate-x-0 translate-y-0'
                : isLeft
                  ? 'opacity-0 md:-translate-x-[40px] -translate-y-[16px] md:translate-y-0'
                  : 'opacity-0 md:translate-x-[40px] -translate-y-[16px] md:translate-y-0';

              return (
                <div
                  key={uniqueId}
                  data-milestone-id={uniqueId}
                  className={`
                    relative flex items-center min-h-[200px]
                    ${isLeft ? 'justify-start' : 'justify-start md:justify-end'}
                    ${index > 0 ? 'md:-mt-[120px]' : ''}
                  `}
                >
                  {/* ── Triple Ring Node ──
                      Mobile:  left-0 (node fills 88px, center at 44px = matches spine at 43px)
                      Desktop: left-1/2 -translate-x-1/2
                  */}
                  <div
                    className={`
                      absolute z-10 flex items-center justify-center
                      left-0 md:left-1/2 md:-translate-x-1/2
                      transition-all duration-700 delay-100
                      ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}
                    `}
                  >
                    {/* Outer halo */}
                    <div
                      className="w-[88px] h-[88px] rounded-full flex items-center justify-center"
                      style={{ border: '1px solid rgba(46,106,79,0.08)' }}
                    >
                      {/* Middle ring */}
                      <div
                        className="w-[72px] h-[72px] rounded-full flex items-center justify-center"
                        style={{
                          border: '1px solid rgba(46,106,79,0.12)',
                          background: 'rgba(46,106,79,0.06)',
                        }}
                      >
                        {/* Inner filled circle */}
                        <div
                          className="w-[52px] h-[52px] rounded-full flex items-center justify-center group cursor-default"
                          style={{
                            backgroundColor: nodeColor,
                            boxShadow: `0 4px 20px ${isAchintya ? 'rgba(194,94,122,0.3)' : 'rgba(46,106,79,0.3)'}${isImpact ? ', 0 0 0 3px rgba(154,230,0,0.2)' : ''}`,
                          }}
                        >
                          <RibbonIcon
                            size="sm"
                            color={ribbonColor}
                            className="transition-transform duration-300 group-hover:rotate-12"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ── Content Card ──
                      Mobile:  ml-[100px] — starts after full 88px node + 12px gap
                      Desktop: calc(50% - 56px) wide, no margin
                  */}
                  <div
                    className={`
                      relative overflow-hidden
                      w-[calc(100%-100px)] ml-[100px]
                      md:w-[calc(50%-56px)] md:ml-0
                      bg-white rounded-[24px] p-7 sm:p-9
                      border border-[#2e6a4f]/[0.06]
                      transition-all duration-700 delay-[250ms]
                      ${cardEnter}
                    `}
                    style={{
                      boxShadow: '0 4px 32px rgba(46,106,79,0.07)',
                    }}
                  >
                    {/* Top accent line */}
                    <div
                      className="absolute top-0 left-0 w-full h-[3px] rounded-t-[24px]"
                      style={{
                        background: isAchintya
                          ? 'linear-gradient(to right, #C25E7A, rgba(194,94,122,0.1))'
                          : isImpact
                            ? 'linear-gradient(to right, #9ae600, rgba(154,230,0,0.1))'
                            : 'linear-gradient(to right, #2e6a4f, rgba(46,106,79,0.1))',
                      }}
                    />

                    {/* Decorative year watermark — FIX: reduced from 120px to 80px */}
                    <div
                      className="absolute -bottom-[10px] right-[14px] pointer-events-none select-none leading-none"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '80px',
                        color: 'rgba(46,106,79,0.04)',
                      }}
                    >
                      {item.year}
                    </div>

                    {/* Connector arrow pointing toward spine */}
                    {/* Mobile: points left toward spine */}
                    <div
                      className="absolute top-1/2 -translate-y-1/2 -left-[11px] md:hidden"
                      style={{
                        width: 0,
                        height: 0,
                        borderTop: '8px solid transparent',
                        borderBottom: '8px solid transparent',
                        borderRight: '12px solid rgba(46,106,79,0.06)',
                      }}
                    />
                    {/* Desktop left card: arrow points right */}
                    {isLeft && (
                      <div
                        className="absolute top-1/2 -translate-y-1/2 -right-[11px] hidden md:block"
                        style={{
                          width: 0,
                          height: 0,
                          borderTop: '8px solid transparent',
                          borderBottom: '8px solid transparent',
                          borderLeft: '12px solid rgba(46,106,79,0.06)',
                        }}
                      />
                    )}
                    {/* Desktop right card: arrow points left */}
                    {!isLeft && (
                      <div
                        className="absolute top-1/2 -translate-y-1/2 -left-[11px] hidden md:block"
                        style={{
                          width: 0,
                          height: 0,
                          borderTop: '8px solid transparent',
                          borderBottom: '8px solid transparent',
                          borderRight: '12px solid rgba(46,106,79,0.06)',
                        }}
                      />
                    )}

                    {/* Year pill */}
                    <div
                      className={`
                        inline-flex items-center rounded-full px-4 py-1.5 mb-4
                        transition-all duration-500 delay-[400ms]
                        ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
                      `}
                      style={{
                        background: 'rgba(194,94,122,0.08)',
                        border: '1px solid rgba(194,94,122,0.2)',
                        fontFamily: 'var(--font-body)',
                        fontSize: '11px',
                        fontWeight: 500,
                        color: '#C25E7A',
                        letterSpacing: '0.12em',
                      }}
                    >
                      {item.year}
                    </div>

                    {/* Title */}
                    <h3
                      className="leading-[1.2] mb-3"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontStyle: 'italic',
                        fontSize: 'clamp(22px, 2.5vw, 30px)',
                        color: isAchintya ? '#C25E7A' : '#2e6a4f',
                      }}
                    >
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="leading-[1.85] mb-5 text-[#3a3a3a]"
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontWeight: 300,
                        fontSize: 'clamp(14px, 1.2vw, 16px)',
                      }}
                    >
                      {item.description}
                    </p>

                    {/* Tag chip */}
                    <div
                      className="inline-flex items-center rounded-full px-3.5 py-1 uppercase"
                      style={{
                        background: 'rgba(154,230,0,0.1)',
                        border: '1px solid rgba(154,230,0,0.25)',
                        fontFamily: 'var(--font-body)',
                        fontSize: '10px',
                        fontWeight: 500,
                        color: '#2e6a4f',
                        letterSpacing: '0.1em',
                      }}
                    >
                      {item.tag}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Closing Moment ── */}
        <div
          data-milestone-id="closing"
          className="mt-[96px] flex flex-col items-center text-center pb-8"
        >
          {/* Closing node */}
          <div
            className={`
                w-[80px] h-[80px] rounded-full flex items-center justify-center
                transition-all duration-700
                ${closingVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
              `}
            style={{
              backgroundColor: '#2e6a4f',
              boxShadow: '0 8px 32px rgba(46,106,79,0.25), 0 0 0 4px rgba(154,230,0,0.15)',
            }}
          >
            <RibbonIcon size="md" color="#ffffff" />
          </div>

          {/* Closing text */}
          <div className="mt-8 space-y-2">
            <p
              className={`
                  text-[#2e6a4f] transition-all duration-500 delay-100
                  ${closingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                `}
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: 'clamp(18px, 2vw, 22px)',
              }}
            >
              And the journey continues...
            </p>
            <p
              className={`
                  text-[#888888] uppercase tracking-[0.08em] transition-all duration-500 delay-200
                  ${closingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                `}
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 300,
                fontSize: '12px',
              }}
            >
              Every step forward is a step taken together.
            </p>
          </div>

          {/* CTA */}
          <div
            className={`
                mt-10 transition-all duration-500 delay-300
                ${closingVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
              `}
          >
            <Button variant="primary" href="/contact">
              Walk With Us →
            </Button>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Milestones;