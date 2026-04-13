import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { heroData } from '../../data/home';
import Button from '../global/Button';
import RibbonIcon from '../global/RibbonIcon';
import Shohojatri from "../../assets/shohojatri.png"

// ── Mental Health Ribbon Watermark ────────────────────────────────────────
const RibbonWatermark = () => (
  <svg viewBox="0 0 200 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M100 15 C75 15 52 28 40 48 C28 68 28 92 40 110 C52 128 75 138 100 148"
      stroke="#2e6a4f" strokeWidth="22" strokeLinecap="round" fill="none" />
    <path d="M100 15 C125 15 148 28 160 48 C172 68 172 92 160 110 C148 128 125 138 100 148"
      stroke="#2e6a4f" strokeWidth="22" strokeLinecap="round" fill="none" />
    <path d="M100 148 C85 160 68 172 58 192 C50 208 52 228 62 242 C70 254 82 260 92 258"
      stroke="#2e6a4f" strokeWidth="22" strokeLinecap="round" fill="none" />
    <path d="M100 148 C115 160 132 172 142 192 C150 208 148 228 138 242 C130 254 118 260 108 258"
      stroke="#2e6a4f" strokeWidth="22" strokeLinecap="round" fill="none" />
  </svg>
);

// ── Drifting Blob ─────────────────────────────────────────────────────────
const Blob = ({ style, duration = 12, delay = 0 }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={style}
    animate={{ x: [0, 24, -16, 8, 0], y: [0, -16, 24, -8, 0], scale: [1, 1.04, 0.97, 1.02, 1] }}
    transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
  />
);

// ── Subtle Background Elements ────────────────────────────────────────────
const BackgroundElements = () => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">

    {/* ── Horizontal grid lines ── */}
    <div className="absolute inset-0 flex flex-col justify-between py-20 opacity-[0.045]">
      {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
        <div key={i} className="h-[1px] w-full" style={{ background: '#2e6a4f' }} />
      ))}
    </div>

    {/* ── Vertical grid lines ── */}
    <div className="absolute inset-0 flex flex-row justify-between px-[8%] opacity-[0.025]">
      {[0, 1, 2, 3, 4, 5].map(i => (
        <div key={i} className="w-[1px] h-full" style={{ background: '#2e6a4f' }} />
      ))}
    </div>

    {/* ── Grain texture ── */}
    <div className="absolute inset-0 opacity-[0.04]" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
      backgroundRepeat: 'repeat',
      backgroundSize: '128px 128px',
    }} />

    {/* ── Large faint SHOHOJATRI text watermark — bottom left ── */}
    <div
      className="absolute bottom-[-20px] left-[-10px] whitespace-nowrap select-none"
      style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(80px, 12vw, 160px)',
        color: '#2e6a4f',
        opacity: 0.028,
        lineHeight: 1,
        letterSpacing: '-0.02em',
        fontWeight: 700,
      }}
    >
      SHOHOJATRI
    </div>

    {/* ── Decorative large circle outline — top right ── */}
    <motion.div
      className="absolute rounded-full"
      style={{
        width: 700,
        height: 700,
        top: '-200px',
        right: '-200px',
        border: '1px solid rgba(46,106,79,0.06)',
      }}
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
    />

    {/* ── Second smaller circle — bottom left ── */}
    <motion.div
      className="absolute rounded-full"
      style={{
        width: 420,
        height: 420,
        bottom: '-120px',
        left: '-80px',
        border: '1px solid rgba(154,230,0,0.07)',
      }}
      animate={{ rotate: [360, 0] }}
      transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
    />

    {/* ── Dotted arc — top left ── */}
    <svg
      className="absolute top-[-40px] left-[-40px] opacity-[0.06]"
      width="320" height="320" viewBox="0 0 320 320" fill="none"
    >
      <circle cx="0" cy="0" r="280" stroke="#2e6a4f" strokeWidth="1"
        strokeDasharray="6 14" strokeLinecap="round" />
    </svg>

    {/* ── Small scattered dots — grid pattern ── */}
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.1]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.2" fill="#2e6a4f" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>

    {/* ── Diagonal accent line — top right to mid ── */}
    <svg
      className="absolute top-0 right-0 opacity-[0.04]"
      width="600" height="600" viewBox="0 0 600 600" fill="none"
    >
      <line x1="600" y1="0" x2="0" y2="600" stroke="#2e6a4f" strokeWidth="1" />
      <line x1="600" y1="80" x2="80" y2="600" stroke="#2e6a4f" strokeWidth="1" />
      <line x1="600" y1="160" x2="160" y2="600" stroke="#9ae600" strokeWidth="1" />
    </svg>

    {/* ── Lime accent corner glow — bottom right ── */}
    <div
      className="absolute bottom-0 right-0"
      style={{
        width: 300,
        height: 300,
        background: 'radial-gradient(circle at bottom right, rgba(154,230,0,0.07) 0%, transparent 70%)',
      }}
    />

    {/* ── Rose accent glow — top left ── */}
    <div
      className="absolute top-0 left-0"
      style={{
        width: 280,
        height: 280,
        background: 'radial-gradient(circle at top left, rgba(194,94,122,0.05) 0%, transparent 70%)',
      }}
    />

    {/* ── Small ribbon icons scattered — very faint ── */}
    {/* Top center */}
    <div className="absolute top-[8%] left-[48%] opacity-[0.1]">
      <RibbonIcon size="md" color="#2e6a4f" />
    </div>
    {/* Bottom left area */}
    <div className="absolute bottom-[15%] left-[18%] opacity-[0.1]" style={{ transform: 'rotate(-20deg)' }}>
      <RibbonIcon size="sm" color="#2e6a4f" />
    </div>
    {/* Mid right — behind floating cards */}
    <div className="absolute top-[40%] right-[6%] opacity-[0.1]" style={{ transform: 'rotate(15deg)' }}>
      <RibbonIcon size="sm" color="#9ae600" />
    </div>

  </div>
);

// ── Stat Card ─────────────────────────────────────────────────────────────
const StatCard = ({ value, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay, ease: [0.25, 0.8, 0.25, 1] }}
    className="flex flex-col px-5 py-5 rounded-[20px]"
    style={{
      background: 'rgba(255,255,255,0.75)',
      backdropFilter: 'blur(16px)',
      border: '1px solid rgba(46,106,79,0.08)',
      boxShadow: '0 4px 24px rgba(46,106,79,0.06)',
    }}
  >
    <span style={{
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(28px, 3vw, 40px)',
      fontWeight: 400,
      color: '#2e6a4f',
      lineHeight: 1,
    }}>
      {value}+
    </span>
    <span style={{
      fontFamily: 'var(--font-body)',
      fontSize: '10px',
      fontWeight: 500,
      color: '#888',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      marginTop: '8px',
    }}>
      {label}
    </span>
  </motion.div>
);

// ── Scroll Indicator ──────────────────────────────────────────────────────
const ScrollIndicator = () => (
  <motion.div
    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.4, duration: 0.8 }}
  >
    <span style={{
      fontFamily: 'var(--font-body)',
      fontSize: '10px',
      color: '#aaa',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
    }}>
      Scroll
    </span>
    <div className="relative w-[1px] h-[56px] overflow-hidden rounded-full"
      style={{ background: 'rgba(46,106,79,0.12)' }}>
      <motion.div
        className="absolute top-0 left-0 w-full rounded-full"
        style={{ background: '#9ae600', height: '45%' }}
        animate={{ y: ['0%', '240%'] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.3 }}
      />
    </div>
  </motion.div>
);

// ── Right Side Composition ────────────────────────────────────────────────
const HeroRight = ({ isInView }) => (
  <motion.div
    className="lg:col-span-5 relative hidden lg:flex flex-col items-center justify-center min-h-[560px]"
    initial={{ opacity: 0 }}
    animate={isInView ? { opacity: 1 } : {}}
    transition={{ duration: 0.6, delay: 0.4 }}
  >
    {/* Central ribbon */}
    <motion.div
      className="relative flex items-center justify-center"
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <motion.div className="absolute rounded-full" style={{
        width: 320, height: 320,
        background: 'radial-gradient(circle, rgba(46,106,79,0.08) 0%, rgba(46,106,79,0) 70%)',
      }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div className="absolute rounded-full" style={{
        width: 420, height: 420,
        border: '1px solid rgba(46,106,79,0.08)',
      }}
        animate={{ scale: [1, 1.06, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />
      <motion.div className="absolute rounded-full" style={{
        width: 500, height: 500,
        border: '1px dashed rgba(154,230,0,0.14)',
      }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      />
      {/* Extra outermost subtle ring */}
      <motion.div className="absolute rounded-full" style={{
        width: 580, height: 580,
        border: '1px solid rgba(194,94,122,0.05)',
      }}
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
      />
      <div
        style={{
          width: 180,
          height: 252,
          position: 'relative',
          zIndex: 2,
        }}
      >
        <img
          src={Shohojatri}
          alt="Shohojatri Logo"
          className="w-full h-full object-contain scale-[2.5]"
          style={{
            filter: 'drop-shadow(0 10px 30px rgba(46,106,79,0.15))',
          }}
        />
      </div>
    </motion.div>



    {/* InSPA badge — top right */}
    <motion.div
      className="absolute top-[6%] right-[0%] px-4 py-3 rounded-[16px]"
      style={{
        background: 'rgba(255,255,255,0.88)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(46,106,79,0.1)',
        boxShadow: '0 4px 20px rgba(46,106,79,0.07)',
      }}
      initial={{ opacity: 0, x: 24, y: 12 }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.85, ease: [0.25, 0.8, 0.25, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
    >
      <span style={{ fontFamily: 'var(--font-body)', fontSize: '9px', fontWeight: 500, color: '#888', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
        Recognised by
      </span>
      <span style={{ fontFamily: 'var(--font-display)', fontSize: '18px', color: '#2e6a4f', fontWeight: 600, letterSpacing: '0.05em' }}>
        InSPA
      </span>
      <span style={{ fontFamily: 'var(--font-body)', fontSize: '9px', color: '#888', display: 'block', marginTop: '2px' }}>
        Life Member
      </span>
    </motion.div>

    {/* Mission pill — bottom left */}
    <motion.div
      className="absolute bottom-[8%] left-[0%] flex items-center gap-3 px-5 py-3 rounded-full"
      style={{
        background: 'rgba(46,106,79,0.07)',
        border: '1px solid rgba(46,106,79,0.12)',
        backdropFilter: 'blur(12px)',
      }}
      initial={{ opacity: 0, x: -20, y: 12 }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 1.0, ease: [0.25, 0.8, 0.25, 1] }}
      whileHover={{ y: -3, transition: { duration: 0.3 } }}
    >
      <RibbonIcon size="xs" color="#2e6a4f" />
      <span style={{ fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 500, color: '#2e6a4f', letterSpacing: '0.06em' }}>
        Psychosocial Welfare & Empowerment
      </span>
    </motion.div>

    {/* SNU tag removed as requested */}

  </motion.div>
);

// ── Hero ──────────────────────────────────────────────────────────────────
const Hero = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-5%' });

  const { scrollY } = useScroll();
  const blobY = useTransform(scrollY, [0, 600], [0, -60]);
  const contentY = useTransform(scrollY, [0, 500], [0, -24]);
  const sBlobY = useSpring(blobY, { stiffness: 50, damping: 18 });
  const sContentY = useSpring(contentY, { stiffness: 70, damping: 22 });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ paddingTop: '72px' }}
    >

      {/* ── All background elements in one component ── */}
      <BackgroundElements />

      {/* ── Drifting blobs — on top of bg elements ── */}
      <motion.div className="absolute inset-0 z-[1] pointer-events-none" style={{ y: sBlobY }}>
        <Blob style={{ top: '-8%', right: '-8%', width: 560, height: 560, background: 'rgba(46,106,79,0.07)', filter: 'blur(110px)' }} duration={14} />
        <Blob style={{ bottom: '-4%', left: '4%', width: 380, height: 380, background: 'rgba(154,230,0,0.05)', filter: 'blur(90px)' }} duration={11} delay={2} />
        <Blob style={{ top: '25%', left: '38%', width: 280, height: 280, background: 'rgba(194,94,122,0.04)', filter: 'blur(70px)' }} duration={17} delay={5} />
      </motion.div>

      {/* ── Main Grid ── */}
      <motion.div
        className="relative z-10 w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-10
          grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        style={{ y: sContentY }}
      >
        {/* Left */}
        <div className="lg:col-span-6 flex flex-col items-start">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.34, 1.56, 0.64, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{ background: 'rgba(46,106,79,0.07)', border: '1px solid rgba(46,106,79,0.14)' }}
          >
            <RibbonIcon size="xs" color="#2e6a4f" />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 500, color: '#2e6a4f', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              {heroData.badge || 'A Debangana Bhattacharya Initiative'}
            </span>
          </motion.div>

          {/* Headline */}
          <div className="flex flex-col gap-0 overflow-hidden mb-6">
            {[
              { text: heroData.titleLine1 || 'Walking Together', italic: true, delay: 0.2, size: 'clamp(40px, 6vw, 80px)' },
              { text: heroData.titleLine2 || 'Toward Wellbeing', italic: false, delay: 0.32, size: 'clamp(28px, 4.5vw, 56px)' },
            ].map(({ text, italic, delay, size }) => (
              <div key={text} style={{ overflow: 'hidden' }}>
                <motion.span
                  initial={{ y: '110%', opacity: 0 }}
                  animate={isInView ? { y: '0%', opacity: 1 } : {}}
                  transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: italic ? 'italic' : 'normal',
                    fontSize: size, // 👈 different sizes
                    color: '#2e6a4f',
                    lineHeight: 1.05,
                    display: 'block'
                  }}
                >
                  {text}
                </motion.span>
              </div>
            ))}
          </div>

          {/* Lime rule */}
          <motion.div
            style={{ height: '2px', width: '64px', borderRadius: '999px', background: 'linear-gradient(to right, #9ae600, rgba(154,230,0,0.15))', originX: 0, marginBottom: '20px' }}
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 0.8, 0.25, 1] }}
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.44 }}
            style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(22px, 2.2vw, 32px)', fontWeight: 600, color: '#C25E7A', marginBottom: '16px', letterSpacing: '0.02em' }}
          >
            The Journey of Togetherness
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.54 }}
            style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 'clamp(16px, 1.4vw, 20px)', color: '#4a4a4a', lineHeight: 1.85, maxWidth: '480px', marginBottom: '36px' }}
          >
            {heroData.description || `Shohojatri is a psychosocial welfare initiative dedicated to walking alongside individuals and communities toward mental wellbeing, resilience, and emotional empowerment.`}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.64 }}
          >
            <Button variant="primary" href="/contact">Begin the Journey</Button>
            <Button variant="ghost" href="#about">Discover More ↓</Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mt-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {(heroData.stats || [
              { value: '500', label: 'Lives Touched' },
              { value: '30', label: 'Workshops' },
              { value: '5', label: 'Years' },
            ]).map((stat, i) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} delay={0.85 + i * 0.08} />
            ))}
          </motion.div>

        </div>

        {/* Right */}
        <HeroRight isInView={isInView} />

      </motion.div>

      <ScrollIndicator />

    </section>
  );
};

export default Hero;