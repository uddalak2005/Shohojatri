import React from 'react';
import { Link } from 'react-router-dom';
import RibbonIcon from './RibbonIcon';

const Footer = () => {
  return (
    <footer className="w-full py-24 px-12 bg-[#115238] relative overflow-hidden">
      {/* Background Watermark */}
      <div
        className="
    absolute left-0 w-full text-center pointer-events-none select-none z-0 overflow-hidden opacity-[0.03]
    bottom-[40px] sm:bottom-[60px] md:bottom-auto md:top-[60px] lg:top-[40px]
  "
      >
        <h2 className="font-mercury text-[16.5vw] text-white leading-none whitespace-nowrap uppercase tracking-tighter">
          SHOHOJATRI
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-full max-w-[1280px] mx-auto z-10 relative">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <RibbonIcon size="xs" color="#9ae600" />
            <span className="serif-italic text-2xl text-white">Shohojatri</span>
          </div>
          <p className="font-label font-light text-lg leading-relaxed text-white/70">
            A sanctuary for psychosocial welfare, bridging academic research and human compassion.
          </p>
        </div>

        <div>
          <h4 className="font-label text-xs tracking-widest uppercase text-[#9ae600] mb-8 font-bold">Navigate</h4>
          <div className="flex flex-col gap-4 font-label text-sm text-white/70">
            <Link className="hover:text-[#9ae600] transition-all" to="/">Home</Link>
            <Link className="hover:text-[#9ae600] transition-all" to="/achintya">Achintya</Link>
            <Link className="hover:text-[#9ae600] transition-all" to="/gallery">Gallery</Link>
            <Link className="hover:text-[#9ae600] transition-all" to="/blog">Blog</Link>
          </div>
        </div>

        <div>
          <h4 className="font-label text-xs tracking-widest uppercase text-[#9ae600] mb-8 font-bold">Reach Us</h4>
          <p className="font-label text-sm text-white/70 leading-relaxed">
            <a href="mailto:shohojatri.welfare@gmail.com" className="hover:text-white">shohojatri.welfare@gmail.com</a><br/>
            +91 99034 91795<br/>
            +91 60037 14239
          </p>
          <h4 className="font-label text-xs tracking-widest uppercase text-[#9ae600] mt-8 mb-4 font-bold">Achintya</h4>
          <p className="font-label text-sm text-white/70 leading-relaxed">
            <a href="mailto:weareachintya@gmail.com" className="hover:text-white">weareachintya@gmail.com</a><br/>
            <a href="tel:9875692385" className="hover:text-white">9875692385</a>
          </p>
        </div>

        <div>
          <h4 className="font-label text-xs tracking-widest uppercase text-[#9ae600] mb-8 font-bold">Follow Us</h4>
          <div className="flex flex-col gap-4 font-label text-sm text-white/70">
            <a className="hover:text-[#9ae600] transition-all" href="https://www.instagram.com/shohojatri?igsh=NzJ2bjZ3eXpqbTF4" target="_blank" rel="noopener noreferrer">Shohojatri Instagram</a>
            <a className="hover:text-[#9ae600] transition-all" href="https://www.instagram.com/tabo.achintya?igsh=bjd2dGI0ZXg4Mmdt" target="_blank" rel="noopener noreferrer">Achintya Instagram</a>
            <a className="hover:text-[#9ae600] transition-all" href="#" style={{pointerEvents: 'none', opacity: 0.5}} target="_blank" rel="noopener noreferrer">LinkedIn (Coming Soon)</a>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1280px] mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        <p className="font-label text-[10px] uppercase tracking-[0.2em] text-white/40">
          © 2024 Shohojatri Psychosocial Welfare. All rights reserved.
        </p>
        <div className="flex gap-8">
          <RibbonIcon size="sm" color="rgba(255,255,255,0.2)" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
