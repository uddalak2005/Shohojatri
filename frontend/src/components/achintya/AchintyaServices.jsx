import React, { useRef } from 'react';
import SectionHeader from '../global/SectionHeader';
import Card from '../global/Card';
import { achintyaPathways } from '../../data/achintya';
import { motion, useInView } from 'framer-motion';

const AchintyaServices = () => {
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });
  const gridInView = useInView(gridRef, { once: true, margin: '-60px' });

  return (
    <section className="py-24 bg-[#f8fdf8] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-8">

        {/* Header reveal */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeader
            label="Pathways"
            titleLine1="Healing Methods"
            titleLine2="& Practices"
            italic={2}
            accentColor="#C25E7A"
          />
        </motion.div>

        {/* Cards grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achintyaPathways.map(({ id, icon, title, desc }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 60, filter: 'blur(6px)' }}
              animate={gridInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: i * 0.12,
              }}
              whileHover={{ y: -8, transition: { duration: 0.3, ease: 'easeOut' } }}
              className="group"
            >
              <Card className="p-10 border-l-4 border-transparent hover:border-[#C25E7A] h-full relative overflow-hidden">

                {/* Card shimmer on hover */}
                <motion.div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
                  style={{
                    background: 'linear-gradient(135deg, rgba(194,94,122,0.04) 0%, transparent 60%)',
                    transition: 'opacity 0.4s ease',
                  }}
                />

                {/* Icon — spins + scales in */}
                <motion.span
                  className="material-symbols-outlined text-4xl text-[#2e6a4f] mb-6 block"
                  initial={{ scale: 0, rotate: -30, opacity: 0 }}
                  animate={gridInView ? { scale: 1, rotate: 0, opacity: 1 } : {}}
                  transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 18,
                    delay: 0.2 + i * 0.12,
                  }}
                  whileHover={{ rotate: [0, -12, 12, 0], scale: 1.2, transition: { duration: 0.5 } }}
                >
                  {icon}
                </motion.span>

                {/* Title */}
                <motion.h4
                  className="font-mercury text-2xl mb-4 text-[#2e6a4f] group-hover:text-[#C25E7A] transition-colors relative"
                  initial={{ opacity: 0, x: -16 }}
                  animate={gridInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.25 + i * 0.12 }}
                >
                  {title}
                  {/* Underline swipe */}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-px bg-[#C25E7A]/50"
                    initial={{ width: '0%' }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.35 }}
                  />
                </motion.h4>

                {/* Description */}
                <motion.p
                  className="text-sm leading-relaxed text-[#3a3a3a] font-light"
                  initial={{ opacity: 0 }}
                  animate={gridInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.35 + i * 0.12 }}
                >
                  {desc}
                </motion.p>

                {/* Bottom accent line that grows on hover */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#C25E7A]/60 to-transparent"
                  initial={{ width: '0%' }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchintyaServices;