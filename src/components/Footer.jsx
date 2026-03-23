import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full py-24 px-12 bg-[#115238] dark:bg-emerald-950 relative overflow-hidden">
      <div className="grid grid-cols-4 gap-12 w-full max-w-[1280px] mx-auto z-10 relative">
        <div className="col-span-4 lg:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="ribbon-xs ribbon-lime"></div>
            <span className="font-mercury italic text-2xl text-[#fbf9f8]">Shohojatri</span>
          </div>
          <p className="font-apple text-lg leading-relaxed text-[#fbf9f8]/80">
            A sanctuary for psychosocial welfare, bridging academic research and human compassion.
          </p>
        </div>

        <div className="col-span-2 lg:col-span-1">
          <h4 className="font-neue text-xs tracking-widest uppercase text-secondary-fixed mb-6 text-[#9ae600]">Quick Links</h4>
          <div className="flex flex-col gap-4 font-neue text-sm text-[#fbf9f8]/80">
            <Link className="hover:text-[#9ae600] transition-all underline-offset-4" to="/privacy">Privacy Policy</Link>
            <Link className="hover:text-[#9ae600] transition-all underline-offset-4" to="/report">Annual Report</Link>
            <Link className="hover:text-[#9ae600] transition-all underline-offset-4" to="/careers">Careers</Link>
          </div>
        </div>

        <div className="col-span-2 lg:col-span-1">
          <h4 className="font-neue text-xs tracking-widest uppercase text-secondary-fixed mb-6 text-[#9ae600]">Connect</h4>
          <div className="flex flex-col gap-4 font-neue text-sm text-[#fbf9f8]/80">
            <a className="hover:text-[#9ae600] transition-all underline-offset-4" href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a className="hover:text-[#9ae600] transition-all underline-offset-4" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <Link className="hover:text-[#9ae600] transition-all underline-offset-4" to="/contact">Contact Us</Link>
          </div>
        </div>

        <div className="col-span-4 lg:col-span-1">
          <h4 className="font-neue text-xs tracking-widest uppercase text-secondary-fixed mb-6 text-[#9ae600]">Our Location</h4>
          <p className="font-apple text-lg text-[#fbf9f8]/80">
            42/A Serene Avenue,<br />
            Peaceful Enclave, Dhaka.
          </p>
        </div>
      </div>

      <div className="w-full max-w-[1280px] mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="font-neue text-[10px] uppercase tracking-[0.2em] text-[#fbf9f8]/50">© 2024 Shohojatri Psychosocial Welfare. All rights reserved.</p>
        <div className="flex gap-8">
          <span className="material-symbols-outlined text-[#fbf9f8]/40 hover:text-[#9ae600] cursor-pointer transition-colors">eco</span>
          <span className="material-symbols-outlined text-[#fbf9f8]/40 hover:text-[#9ae600] cursor-pointer transition-colors">diversity_3</span>
          <span className="material-symbols-outlined text-[#fbf9f8]/40 hover:text-[#9ae600] cursor-pointer transition-colors">volunteer_activism</span>
        </div>
      </div>

      {/* Watermark Large Text */}
      <div className="font-['Mercury_Display'] text-[17vw] font-bold opacity-[0.03] text-[#fbf9f8] absolute right-[-1%] bottom-[-5%] pointer-events-none select-none tracking-tighter">
        SHOHOJATRI
      </div>
    </footer>
  );
}

