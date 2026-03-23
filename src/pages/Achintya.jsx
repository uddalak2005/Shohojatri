import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { Link } from 'react-router-dom';

const RibbonIcon = () => (
  <svg fill="#C25E7A" viewBox="0 0 24 24" width="16" height="16">
    <path d="M12,2L4,5V11C4,16.55 7.84,21.74 13,23C18.16,21.74 22,16.55 22,11V5L14,2H12Z" />
  </svg>
);

export default function Achintya() {
  return (
    <div className="bg-background text-[#3a3a3a] font-body">
      <Navbar />
      <main className="pt-[72px]">

        {/* Hero */}
        <section className="h-[480px] bg-[#2e6a4f] relative overflow-hidden flex items-center">
          <div className="absolute inset-0 grain-overlay opacity-30 pointer-events-none"></div>
          <div className="absolute inset-0 opacity-10 flex justify-center items-center scale-150">
            <svg className="stroke-white fill-none" style={{strokeWidth:'0.5'}} height="100%" viewBox="0 0 800 400" width="100%">
              <path d="M0,200 Q200,50 400,200 T800,200" /><path d="M0,250 Q150,100 350,250 T750,250" /><path d="M50,150 Q250,300 450,150 T850,150" />
            </svg>
          </div>
          <div className="max-w-[1280px] mx-auto w-full px-8 relative z-10 grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-[#C25E7A]/40 rounded-full text-white text-[11px] font-bold tracking-widest uppercase">An Initiative under Shohojatri</span>
              <h1 className="font-mercury italic text-7xl md:text-8xl text-white leading-none">Achintya</h1>
              <p className="apple-garamond text-2xl md:text-3xl text-[#a9e7c5]/80 italic">Where Art Meets the Soul</p>
              <Link to="/contact" className="inline-block bg-[#C25E7A] hover:bg-[#a14b62] text-white px-8 py-4 rounded-full text-sm font-bold transition-all hover:-translate-y-[2px] shadow-xl">Book a Workshop →</Link>
            </div>
            <div className="hidden md:flex justify-end">
              <div className="w-80 h-80 opacity-20 text-[#C25E7A]">
                <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12,2L4,5V11C4,16.55 7.84,21.74 13,23C18.16,21.74 22,16.55 22,11V5L14,2H12Z" /></svg>
              </div>
            </div>
          </div>
        </section>

        {/* About Achintya */}
        <section className="py-24 px-8 max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-1/2 space-y-8">
              <div className="flex items-center gap-3"><RibbonIcon /><span className="uppercase text-[11px] font-bold tracking-[0.2em] text-[#C25E7A]">The Foundation</span></div>
              <h2 className="font-mercury text-5xl md:text-6xl text-primary leading-tight">Art as a Language <br /><span className="italic text-[#C25E7A]">of Healing</span></h2>
              <div className="space-y-6 text-lg leading-relaxed apple-garamond text-on-surface-variant">
                <p>Achintya represents the beyond-thought, the unspoken realms where conventional language falls short. We believe that movement, color, and sound are not just aesthetic pursuits but vital pathways to the subconscious.</p>
                <p>Through our integrated approach, we facilitate spaces where trauma is processed through rhythm, and anxiety finds its release in the stroke of a brush. It is a sanctuary for the fragmented self to find wholeness.</p>
              </div>
            </div>
            <div className="md:w-1/2 bg-surface-container-low p-12 rounded-xl border-l-4 border-[#C25E7A] self-stretch flex flex-col justify-center">
              <h3 className="font-body font-bold text-xs uppercase tracking-widest text-primary mb-8">Focus Areas</h3>
              <ul className="space-y-6">
                {['Ecstatic Dance & Somatic Movement','Meditative Recitation & Breathwork','Therapeutic Music & Sound Baths','Visual Arts & Creative Expression','Integrated Arts for Mental Resilience'].map(item => (
                  <li key={item} className="ribbon-bullet apple-garamond text-2xl">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-24 bg-[#f8fdf8]">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="flex items-center gap-3 mb-12"><RibbonIcon /><span className="uppercase text-[11px] font-bold tracking-[0.2em] text-[#C25E7A]">Pathways</span></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon:'theater_comedy', title:'Performance Bookings', desc:'Curated artistic performances designed for awareness campaigns and corporate wellness.' },
                { icon:'school', title:'Workshop Programs', desc:'Intensive skill-based workshops blending art techniques with psychological wellbeing.' },
                { icon:'psychology', title:'Expressive Arts', desc:'One-on-one sessions utilizing creative mediums to explore personal narratives and trauma.' },
                { icon:'groups', title:'Outreach', desc:'Community-led initiatives bringing the healing power of art to marginalized populations.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="group bg-surface-container-lowest p-10 rounded-xl shadow-sm transition-all duration-500 hover:-translate-y-[8px] hover:border-l-4 hover:border-[#C25E7A] border-l-4 border-transparent">
                  <span className="material-symbols-outlined text-4xl text-primary mb-6">{icon}</span>
                  <h4 className="font-mercury text-2xl mb-4 group-hover:text-[#C25E7A] transition-colors">{title}</h4>
                  <p className="text-sm leading-relaxed text-on-surface-variant">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Strip */}
        <section className="py-24 overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-8 mb-12">
            <div className="flex items-center gap-3"><RibbonIcon /><span className="uppercase text-[11px] font-bold tracking-[0.2em] text-[#C25E7A]">Visual Journal</span></div>
          </div>
          <div className="flex space-x-6 overflow-x-auto px-8 no-scrollbar pb-10">
            {[
              'https://lh3.googleusercontent.com/aida-public/AB6AXuCsm-DjbHae4FMq0pHUSgXWH4F6IJZmfaiIg7aOEHXyP_IQWOFyvbaNdhtZ80q0eQYyXZ0RfKZjRjfdrGVVk98nHcIXjf4y2M2b_ZoadfP5x0oyg6ukbx_CVRjBYnPt0KmvLbPQ3rTIcy5p8kjvEiRhEO38wu1f1M-65ty-z8Q1nke9HTAHA7xls3iHsZwMRYLm2vT2qT8b87cB4-Bjm2w_M35YrGZc1IbfrJrvGRHafAHyfZcG3uNESM5ZXIHG2bqJyd35vMC18m8u',
              'https://lh3.googleusercontent.com/aida-public/AB6AXuBxr7BWmlH56dq-hvHlw6Hiix3vdquKyU0F5TWxvG8J8tABiQTL8AhdW2d7x0xSYRSR5IJFgo6OGF6PUdgb5_KMF_OpskxDf7ZBLi3gpfpAFJh-fEax5cIdW_nEPp22snoWt-AKEZCY4wiz9drYObAbcF1Y1Gh9vM4DVb96JUbpbzlTEur2mbHYQc6mQ0voU-QWxQ8RbiAVm-rOUtE8qPmGT3OjUMBwKCY9NmFZ5EecMd1A8VWn03jOH5_ahFQtyq8RHHu9MC1T0P_S',
              'https://lh3.googleusercontent.com/aida-public/AB6AXuDuyUrQ0-OqSG9VM4U_gTOVVJEq4x-Ybgg0mujmzc3kYoL0JrQIbhBHIk8PkDMRTLXg6tRoweDUKJ9gvGBTDQHafox6Wk0aNRnM7ywD53qc2Fqool4xPxd-qKPFqYOKCtrTaAfbFltUxHdl20-PtRhiVAGWFn3Cn-t195Q4I5oCI8Bnaz1I36zj0zYzteZ41NwTv-qW5GNCSJ3BzkSorHU5MRlQ9IVCzKqMjJtWwuhXuQcwiAzflUNgL9ksV8NYuhasxf9qFcv-qtzH',
              'https://lh3.googleusercontent.com/aida-public/AB6AXuCuYTf1YWMVw_JpE8l1poNcNW9yBU2T67QW_PcfGVf4OvMR7EYjX29Pi6A5NZb8KHmyXzHKpF02NUe_ApC_tw0n3_kMwKdCB5zRHlJT3YlV71qWVduXVltr5TCVfBDkt1K13ZXOOst5lp1bBr5fSTxcinKPCnwbGjsfPJRBki_ynP3gcwcHYBj-iM_JNtuRsNpyR7feVHBjxrq-hzqN0TZmzA3-DwWm5cD00yeKUBSLeXdXt9xZFyS2IXrVKhPlMMtnCOT_LWsTdbT4',
              'https://lh3.googleusercontent.com/aida-public/AB6AXuAJ_0RePtrGJiXG2kSFrNtyy47AG1O3JxX9zE2wc5tl_KAjA8mHr9v93tHkiiffyH-7h_PW3tU5iz8RrItnSv7olOt4xz5_L42nVrWqtRr70p_XxztE02BgMvidQQJDexO_aWq1zBF4blYPJL7xs6J7o_ztnlbN140f2j4L-jDjxITNTG1AizxUyIBFKvJRJp5cV0pdyseHvPN-FiD_m8E05Ld_5qUYiMZ_ukabn71ad301LsOwhXGHe2hPZOtZlzkiJ_HuEhZXaxr0',
              'https://lh3.googleusercontent.com/aida-public/AB6AXuCOcK2HvAT_s2hjpF-3_btr7aVn7RWjGHk9XwxS8Xi1UbW_3eeTshwK-fN_NSLDI0yTzOsNu5NdrBzLDrGd8NBQvx1tJrreUu6FQGmse8TMJW8cXEw7FUPtyNGg_IKEeGZNEXP1fhNgD1c9WyQxqsjGGZd8SQ_raiKeXJvgC0cB2oGO_h-c-0FweYGWx1OTH0svHeDneIWOx_4l7qIXBL7Bjk-cUH6D1_6gPumLxTczCjGffZpG4hoUAx40UDaZU80v4eYo3mbkoxPD',
            ].map((src, i) => (
              <div key={i} className="flex-none w-[280px] h-[200px] rounded-2xl bg-surface-container-high relative overflow-hidden group cursor-pointer">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={src} alt="Achintya gallery" />
                <div className="absolute inset-0 bg-[#C25E7A]/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Workshop Schedule */}
        <section className="py-24 px-8 max-w-[1280px] mx-auto">
          <div className="flex items-center gap-3 mb-12"><RibbonIcon /><span className="uppercase text-[11px] font-bold tracking-[0.2em] text-[#C25E7A]">Calendar</span></div>
          <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm border border-outline-variant/10">
            <table className="w-full text-left">
              <thead className="bg-surface-container-high text-primary uppercase text-[10px] tracking-[0.2em] font-bold">
                <tr>
                  {['Date','Session','Venue','Duration','Action'].map(h => <th key={h} className="px-8 py-5">{h}</th>)}
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10 apple-garamond text-xl">
                {[
                  {date:'Oct 12, 2025', session:'Movement as Medicine', venue:'The Sanctuary, Kolkata', dur:'3 Hours'},
                  {date:'Oct 20, 2025', session:'Colors of the Unconscious', venue:'Online (Interactive)', dur:'2 Hours'},
                  {date:'Nov 05, 2025', session:'Sound & Silence Retreat', venue:'Himalayan Base Camp', dur:'2 Days'},
                ].map(({ date, session, venue, dur }) => (
                  <tr key={date} className="hover:bg-surface transition-colors">
                    <td className="px-8 py-6">{date}</td>
                    <td className="px-8 py-6 font-bold">{session}</td>
                    <td className="px-8 py-6 text-on-surface-variant">{venue}</td>
                    <td className="px-8 py-6 text-on-surface-variant">{dur}</td>
                    <td className="px-8 py-6"><Link to="/contact" className="text-[#C25E7A] font-bold underline hover:text-primary transition-colors">Register</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-[rgba(194,94,122,0.06)] px-8">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex items-center gap-3 mb-16"><RibbonIcon /><span className="uppercase text-[11px] font-bold tracking-[0.2em] text-[#C25E7A]">Voices of Healing</span></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { quote: '"Through Achintya, I found the colors for the grief I couldn\'t speak. It saved me from the noise of my own mind."', name:'Aditi S.', role:'Artist & Educator' },
                { quote: '"The somatic movement sessions were a revelation. I never knew my body held so many stories waiting to be danced."', name:'Rahul K.', role:'Psychologist' },
                { quote: '"A sanctuary for the soul. Achintya doesn\'t just teach art; it teaches you how to feel again."', name:'Sreemoyee M.', role:'Corporate Consultant' },
              ].map(({ quote, name, role }) => (
                <div key={name} className="relative bg-white p-12 rounded-xl border-l-4 border-[#C25E7A] shadow-xl shadow-black/[0.02]">
                  <p className="apple-garamond text-2xl italic mb-8 leading-snug">{quote}</p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10"></div>
                    <div>
                      <p className="font-body font-bold text-sm">{name}</p>
                      <p className="font-body text-xs text-on-surface-variant uppercase tracking-widest">{role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
