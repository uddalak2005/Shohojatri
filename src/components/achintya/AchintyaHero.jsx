import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import Button from '../global/Button';
import RibbonIcon from '../global/RibbonIcon';
import AchintyaGroup from '../../assets/Achintya_Group.png';

// ── Background Elements (Same as Hero) ────────────────────────────────────
const Blob = ({ style, duration = 12, delay = 0 }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={style}
    animate={{ x: [0, 24, -16, 8, 0], y: [0, -16, 24, -8, 0], scale: [1, 1.04, 0.97, 1.02, 1] }}
    transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
  />
);

const BackgroundElements = () => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
    {/* Grid lines */}
    <div className="absolute inset-0 flex flex-col justify-between py-20 opacity-[0.045]">
      {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
        <div key={i} className="h-[1px] w-full" style={{ background: '#C25E7A' }} />
      ))}
    </div>
    <div className="absolute inset-0 flex flex-row justify-between px-[8%] opacity-[0.025]">
      {[0, 1, 2, 3, 4, 5].map(i => (
        <div key={i} className="w-[1px] h-full" style={{ background: '#C25E7A' }} />
      ))}
    </div>
    {/* Grain texture */}
    <div className="absolute inset-0 opacity-[0.04]" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
      backgroundRepeat: 'repeat',
      backgroundSize: '128px 128px',
    }} />
    {/* Large faint ACHINTYA text watermark */}
    <div
      className="absolute bottom-[-20px] left-[-10px] whitespace-nowrap select-none"
      style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(80px, 12vw, 160px)',
        color: '#C25E7A',
        opacity: 0.028,
        lineHeight: 1,
        letterSpacing: '-0.02em',
        fontWeight: 700,
      }}
    >
      ACHINTYA
    </div>
  </div>
);

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
      style={{ background: 'rgba(194,94,122,0.12)' }}>
      <motion.div
        className="absolute top-0 left-0 w-full rounded-full"
        style={{ background: '#C25E7A', height: '45%' }}
        animate={{ y: ['0%', '240%'] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.3 }}
      />
    </div>
  </motion.div>
);

const HeroRight = ({ isInView }) => (
  <motion.div
    className="lg:col-span-5 relative hidden lg:flex flex-col items-center justify-center min-h-[560px]"
    initial={{ opacity: 0 }}
    animate={isInView ? { opacity: 1 } : {}}
    transition={{ duration: 0.6, delay: 0.4 }}
  >
    <motion.div
      className="relative flex items-center justify-center"
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <motion.div className="absolute rounded-full" style={{
        width: 320, height: 320,
        background: 'radial-gradient(circle, rgba(194,94,122,0.08) 0%, rgba(194,94,122,0) 70%)',
      }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div className="absolute rounded-full" style={{
        width: 420, height: 420,
        border: '1px solid rgba(194,94,122,0.08)',
      }}
        animate={{ scale: [1, 1.06, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />
      
      <div className="w-80 h-80 rounded-full overflow-hidden border border-[#C25E7A]/20 shadow-2xl relative z-10 bg-white/50 backdrop-blur-sm p-4">
        <div className="w-full h-full rounded-full overflow-hidden">
          <img
            src={AchintyaGroup}
            alt="Achintya Group"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </motion.div>

    {/* Mission pill — bottom left */}
    <motion.div
      className="absolute bottom-[10%] left-[5%] flex items-center gap-3 px-5 py-3 rounded-full"
      style={{
        background: 'rgba(194,94,122,0.07)',
        border: '1px solid rgba(194,94,122,0.12)',
        backdropFilter: 'blur(12px)',
      }}
      initial={{ opacity: 0, x: -20, y: 12 }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 1.0, ease: [0.25, 0.8, 0.25, 1] }}
      whileHover={{ y: -3, transition: { duration: 0.3 } }}
    >
      <RibbonIcon size="xs" color="#C25E7A" />
      <span style={{ fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 500, color: '#C25E7A', letterSpacing: '0.06em' }}>
        Art Meets The Soul
      </span>
    </motion.div>
  </motion.div>
);

const AchintyaHero = () => {
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
      <BackgroundElements />

      <motion.div className="absolute inset-0 z-[1] pointer-events-none" style={{ y: sBlobY }}>
        <Blob style={{ top: '-8%', right: '-8%', width: 560, height: 560, background: 'rgba(194,94,122,0.07)', filter: 'blur(110px)' }} duration={14} />
      </motion.div>

      <motion.div
        className="relative z-10 w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-10
          grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        style={{ y: sContentY }}
      >
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.34, 1.56, 0.64, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{ background: 'rgba(194,94,122,0.07)', border: '1px solid rgba(194,94,122,0.14)' }}
          >
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 500, color: '#C25E7A', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              An Initiative under Shohojatri
            </span>
          </motion.div>

          <div className="flex flex-col gap-0 overflow-hidden mb-6">
            <div style={{ overflow: 'hidden' }}>
              <motion.span
                initial={{ y: '110%', opacity: 0 }}
                animate={isInView ? { y: '0%', opacity: 1 } : {}}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(44px, 6.5vw, 92px)', color: '#3a3a3a', lineHeight: 1.05, display: 'block' }}
              >
                Achintya
              </motion.span>
            </div>
            <div style={{ overflow: 'hidden' }}>
              <motion.span
                initial={{ y: '110%', opacity: 0 }}
                animate={isInView ? { y: '0%', opacity: 1 } : {}}
                transition={{ duration: 0.9, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
                style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 56px)', color: '#3a3a3a', lineHeight: 1.05, display: 'block' }}
              >
                Where Art Meets the Soul
              </motion.span>
            </div>
          </div>

          <motion.div
            style={{ height: '2px', width: '64px', borderRadius: '999px', background: 'linear-gradient(to right, #C25E7A, rgba(194,94,122,0.15))', originX: 0, marginBottom: '20px' }}
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 0.8, 0.25, 1] }}
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.54 }}
            style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 'clamp(16px, 1.4vw, 20px)', color: '#4a4a4a', lineHeight: 1.85, maxWidth: '480px', marginBottom: '36px' }}
          >
            A dedicated platform exploring the transformative power of performative and expressive arts for community healing and personal growth.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.64 }}
          >
            <Button variant="primary" href="mailto:weareachintya@gmail.com">Book a Workshop</Button>
            <a href="tel:9875692385" className="w-[52px] h-[52px] rounded-full border border-[#C25E7A]/20 flex items-center justify-center text-[#C25E7A] hover:bg-[#C25E7A] hover:text-white transition-all shadow-sm">
                <span className="material-symbols-outlined text-[24px]">call</span>
            </a>
          </motion.div>
        </div>

        {/* Right Content */}
        <HeroRight isInView={isInView} />
      </motion.div>

      <ScrollIndicator />
    </section>
  );
};

export default AchintyaHero;