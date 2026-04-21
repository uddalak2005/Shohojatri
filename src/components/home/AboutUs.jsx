import React, { useEffect, useRef, useState } from 'react';
import { aboutData } from '../../data/home';
import Button from '../global/Button';
import SectionHeader from '../global/SectionHeader';
import useScrollAnimation from '../../hooks/useScrollAnimation';

/*
 * ── Video source ──────────────────────────────────────────────────────────
 * Swap this URL to your CDN link when the video is uploaded.
 * Formats supported: .mp4 (H.264), .webm — portrait orientation (9:16).
 */
// const ABOUT_VIDEO_URL = 'https://your-cdn.example.com/shohojatri-about.mp4';
const ABOUT_VIDEO_URL = '/about-video.mp4';

// ── Soft ambient orb — watercolour wash behind the video ───────────────────
const Orb = ({ size, top, left, right, bottom, color, blur }) => (
  <div
    aria-hidden="true"
    style={{
      position: 'absolute',
      width: size,
      height: size,
      top, left, right, bottom,
      borderRadius: '50%',
      background: color,
      filter: `blur(${blur})`,
      pointerEvents: 'none',
    }}
  />
);

// ── Tiny drifting dot — scattered organically around the frame ─────────────
const Dot = ({ size, top, left, right, bottom, color }) => (
  <div
    aria-hidden="true"
    style={{
      position: 'absolute',
      width: size,
      height: size,
      top, left, right, bottom,
      borderRadius: '50%',
      background: color,
      pointerEvents: 'none',
    }}
  />
);

// ── About Video Frame ───────────────────────────────────────────────────────
const AboutVideoFrame = () => {
  const videoRef   = useRef(null);
  const wrapperRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true); // start muted — browser policy

  /* Play (muted) when ≥35% visible, pause when scrolled away */
  useEffect(() => {
    const video   = videoRef.current;
    const wrapper = wrapperRef.current;
    if (!video || !wrapper) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {
              // If play fails (e.g. strict autoplay policy), force fallback to muted
              if (!video.muted) {
                video.muted = true;
                setIsMuted(true);
                video.play().catch(() => {});
              }
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(wrapper);
    return () => observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Toggle mute/unmute — syncs React state with the video element */
  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    const next = !video.muted;
    video.muted = next;
    setIsMuted(next);
  };

  return (
    /*
     * Outer wrapper — gives orbs plenty of breathing room so they
     * float softly beyond the video edge without clipping.
     */
    <div
      ref={wrapperRef}
      style={{ position: 'relative', padding: '44px 20px 52px 12px' }}
    >

      {/* ── Watercolour blooms — soft ambient light ───────────────── */}

      {/* Main deep-green bloom — top-left, largest */}
      <Orb
        size="320px" top="-70px" left="-50px"
        color="radial-gradient(circle, rgba(46,106,79,0.16) 0%, transparent 68%)"
        blur="48px"
      />

      {/* Rose blush — bottom-right, gentle */}
      <Orb
        size="200px" bottom="-30px" right="-30px"
        color="radial-gradient(circle, rgba(194,94,122,0.12) 0%, transparent 65%)"
        blur="36px"
      />

      {/* Lime whisper — top-right, barely-there */}
      <Orb
        size="130px" top="20px" right="10px"
        color="radial-gradient(circle, rgba(154,230,0,0.10) 0%, transparent 60%)"
        blur="28px"
      />

      {/* ── Tiny scattered dots — like petals or dew drops ────────── */}

      {/* Top-left cluster */}
      <Dot size="16px" top="16px" left="2px" color="rgba(46,106,79,0.20)" />
      <Dot size="9px" top="38px" left="20px" color="rgba(154,230,0,0.25)" />
      <Dot size="6px" top="56px" left="6px" color="rgba(194,94,122,0.18)" />

      {/* Bottom-left, loose */}
      <Dot size="12px" bottom="34px" left="8px" color="rgba(46,106,79,0.16)" />
      <Dot size="7px" bottom="18px" left="24px" color="rgba(154,230,0,0.20)" />

      {/* Top-right, sparse */}
      <Dot size="10px" top="10px" right="14px" color="rgba(46,106,79,0.18)" />
      <Dot size="5px" top="28px" right="30px" color="rgba(194,94,122,0.22)" />

      {/* Bottom-right, even sparser */}
      <Dot size="8px" bottom="40px" right="10px" color="rgba(154,230,0,0.18)" />

      {/*
       * ── The video — shaped like a smooth river stone ─────────────
       *
       * CSS border-radius with 8 values (horizontal / vertical per corner)
       * makes each corner unique — organic, not constructed.
       *
       *  top-left  | top-right | bottom-right | bottom-left
       *  ────────────────────────────────────────────────────
       *  / vertical counterparts
       *
       * The result feels like something nature drew, not a designer.
       */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          borderRadius: '60% 40% 52% 48% / 54% 46% 62% 38%',
          overflow: 'hidden',
          aspectRatio: '3 / 4',
          /*
           * Layered shadow — soft, diffuse, warm.
           * No hard outlines. Like the shape is resting on the page.
           */
          boxShadow: `
            0 6px 32px rgba(46,106,79,0.15),
            0 2px 10px rgba(46,106,79,0.09),
            0 0 0 5px rgba(46,106,79,0.06)
          `,
          /*
           * Fixes for Safari/Chrome bug where video elements ignore 
           * parent border-radius and overflow: hidden
           */
          transform: 'translateZ(0)',
          maskImage: 'radial-gradient(white, black)',
          WebkitMaskImage: '-webkit-radial-gradient(white, black)',
        }}
      >
        {/*
         * Gentle vignette — very subtle darkening toward the bottom
         * so the video blends softly into the white page.
         */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, transparent 50%, rgba(17,52,36,0.22) 100%)',
          zIndex: 2,
          pointerEvents: 'none',
        }} />

        {/*
         * VIDEO — starts muted (browser policy).
         * User taps the sound button to unmute.
         */}
        <video
          ref={videoRef}
          src={ABOUT_VIDEO_URL}
          loop
          playsInline
          muted={isMuted}
          preload="none"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            borderRadius: 'inherit',
          }}
        />

        {/*
         * ── Mute / Unmute toggle button ────────────────────────────
         * Large pill, highly visible, centered at the bottom.
         */}
        <button
          onClick={toggleMute}
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
          style={{
            position: 'absolute',
            bottom: '24px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 4,
            height: '44px',
            padding: '0 24px',
            borderRadius: '999px',
            border: '1px solid rgba(255,255,255,0.25)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            justifyContent: 'center',
            background: 'rgba(46,106,79,0.75)',
            backdropFilter: 'blur(12px)',
            transition: 'background 0.3s ease, transform 0.2s ease',
            color: '#fff',
            fontFamily: 'var(--font-body)',
            fontWeight: 500,
            fontSize: '14px',
            letterSpacing: '0.04em',
            boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(46,106,79,0.95)';
            e.currentTarget.style.transform = 'translateX(-50%) scale(1.02)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'rgba(46,106,79,0.75)';
            e.currentTarget.style.transform = 'translateX(-50%) scale(1)';
          }}
        >
          {isMuted ? (
            <>
              {/* Volume off icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M11 5L6 9H2v6h4l5 4V5z" fill="#ffffff" />
                <line x1="23" y1="9" x2="17" y2="15" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                <line x1="17" y1="9" x2="23" y2="15" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span>Tap to Unmute</span>
            </>
          ) : (
            <>
              {/* Volume on icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M11 5L6 9H2v6h4l5 4V5z" fill="#ffffff" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span>Mute</span>
            </>
          )}
        </button>
      </div>

      {/*
       * ── Caption — calm, serif italic, sits below ─────────────────
       *
       * Not a badge or a pill. Just a quiet line of text,
       * the way a photographer signs a print.
       */}
      <p style={{
        marginTop: '20px',
        textAlign: 'center',
        fontFamily: 'var(--font-display)',
        fontStyle: 'italic',
        fontWeight: 400,
        fontSize: '13px',
        color: 'var(--color-primary)',
        letterSpacing: '0.03em',
        opacity: 0.68,
        lineHeight: 1.5,
      }}>
        A Debangana Bhattacharya Initiative
      </p>

    </div>
  );
};

// ── About Us Section ────────────────────────────────────────────────────────
const AboutUs = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section id="about" className="w-full py-24 px-6 sm:px-8 lg:px-10">
      <div
        className="
          max-w-[1280px] mx-auto
          grid grid-cols-1 items-center gap-16
          lg:grid-cols-12 lg:gap-20
        "
      >

        {/* ── Left — Text Content ── */}
        <div ref={sectionRef} className="animate lg:col-span-7 space-y-8">
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
                  fontSize: 'clamp(16px, 1.35vw, 20px)',
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

        {/* ── Right — Peaceful Video Frame ── */}
        <div className="lg:col-span-5">
          <AboutVideoFrame />
        </div>

      </div>
    </section>
  );
};

export default AboutUs;