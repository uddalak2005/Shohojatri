import React from 'react';
import SectionHeader from '../global/SectionHeader';
import { achintyaFocusAreas } from '../../data/achintya';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutAchintya = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, { once: true, margin: '-60px' });

  return (
    <section className="py-24 px-8 max-w-[1280px] mx-auto overflow-hidden">
      <div ref={sectionRef} className="flex flex-col md:flex-row gap-16 items-start">

        {/* LEFT — text block */}
        <div className="md:w-1/2 space-y-8">
          {/* SectionHeader reveal */}
          <motion.div
            initial={{ opacity: 0, y: 48 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionHeader
              label="The Foundation"
              titleLine1="Art as a Language"
              titleLine2="of Healing"
              italic={2}
              accentColor="#C25E7A"
            />
          </motion.div>

          {/* Paragraphs — staggered word-by-word blur reveal */}
          {[
            "Achintya represents the beyond-thought, the unspoken realms where conventional language falls short. We believe that movement, color, and sound are not just aesthetic pursuits but vital pathways to the subconscious.",
            "Through our integrated approach, we facilitate spaces where trauma is processed through rhythm, and anxiety finds its release in the stroke of a brush. It is a sanctuary for the fragmented self to find wholeness.",
          ].map((para, pi) => (
            <motion.p
              key={pi}
              className="text-lg leading-relaxed apple-garamond text-[#3a3a3a]"
              initial={{ opacity: 0, filter: 'blur(8px)', y: 20 }}
              animate={isInView ? { opacity: 1, filter: 'blur(0px)', y: 0 } : {}}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.3 + pi * 0.18,
              }}
            >
              {para}
            </motion.p>
          ))}
        </div>

        {/* RIGHT — focus areas card */}
        <motion.div
          ref={cardRef}
          className="md:w-1/2 bg-[#2e6a4f]/5 p-12 rounded-xl border-l-4 border-[#C25E7A] self-stretch flex flex-col justify-center shadow-sm relative overflow-hidden"
          initial={{ opacity: 0, x: 80, rotateY: 12 }}
          animate={cardInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          style={{ transformPerspective: 1000 }}
        >
          {/* Animated background shimmer */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(120deg, transparent 0%, rgba(194,94,122,0.06) 40%, transparent 60%)',
              backgroundSize: '200% 100%',
            }}
            animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
          />

          <motion.h3
            className="font-label font-bold text-xs uppercase tracking-widest text-[#2e6a4f] mb-8"
            initial={{ opacity: 0, letterSpacing: '0.4em' }}
            animate={cardInView ? { opacity: 1, letterSpacing: '0.2em' } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Focus Areas
          </motion.h3>

          <ul className="space-y-6">
            {achintyaFocusAreas.map((item, i) => (
              <motion.li
                key={item}
                className="flex items-center gap-4 apple-garamond text-2xl text-[#2e6a4f] relative"
                initial={{ opacity: 0, x: -32, filter: 'blur(4px)' }}
                animate={cardInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
                transition={{
                  duration: 0.65,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.5 + i * 0.1,
                }}
                whileHover={{ x: 8, transition: { duration: 0.25 } }}
              >
                {/* Dot — pulses on hover */}
                <motion.span
                  className="w-1.5 h-1.5 rounded-full bg-[#C25E7A] flex-shrink-0"
                  initial={{ scale: 0 }}
                  animate={cardInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.6 + i * 0.1, type: 'spring', stiffness: 400 }}
                  whileHover={{ scale: 2.5, transition: { duration: 0.2 } }}
                />
                {/* Underline swipe on hover */}
                <span className="relative">
                  {item}
                  <motion.span
                    className="absolute bottom-0 left-0 h-px bg-[#C25E7A]/40"
                    initial={{ width: '0%' }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutAchintya;