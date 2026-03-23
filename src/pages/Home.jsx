import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { Link } from 'react-router-dom';
import React from 'react';

export default function Home() {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      <Navbar />
      <main>
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex items-center overflow-hidden pt-[72px]">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#2e6a4f]/5 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-5%] left-[5%] w-[400px] h-[400px] bg-[#9ae600]/4 rounded-full blur-[100px]"></div>
            <div className="absolute top-[20%] left-[40%] w-[300px] h-[300px] bg-[#C25E7A]/4 rounded-full blur-[80px]"></div>
            <div className="absolute inset-0 bg-grain opacity-[0.035]"></div>
            <div className="absolute inset-0 flex flex-col justify-between py-24 opacity-[0.04]">
              {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className="h-[1px] bg-[#2e6a4f] w-full"></div>)}
            </div>
            <div className="absolute right-[-100px] top-1/2 -translate-y-1/2 opacity-[0.07] rotate-[15deg] pointer-events-none">
              <span className="material-symbols-outlined text-[600px] text-[#2e6a4f]" style={{ fontVariationSettings: "'wght' 100" }}>reminder</span>
            </div>
          </div>
          <div className="relative z-10 max-w-[1280px] mx-auto w-full px-8 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 bg-[#2e6a4f]/5 px-4 py-1.5 rounded-full">
                <span className="material-symbols-outlined text-xs text-[#2e6a4f]" style={{ fontVariationSettings: "'FILL' 1" }}>reminder</span>
                <span className="font-label text-[12px] uppercase tracking-[0.1em] text-[#2e6a4f]">A Debangana Bhattacharya Initiative</span>
              </div>
              <h1 className="flex flex-col gap-0">
                <span className="serif-italic text-7xl md:text-[96px] leading-none text-[#2e6a4f]">Walking Together</span>
                <span className="serif-regular text-7xl md:text-[96px] leading-tight text-[#2e6a4f]">Toward Wellbeing.</span>
              </h1>
              <p className="font-label text-lg text-[#3a3a3a] leading-[1.7] max-w-[520px] font-light">
                Shohojatri is a psychosocial welfare initiative dedicated to emotional empowerment, resilience, and the journey of healing — together.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/contact" className="bg-[#115238] text-white px-8 py-4 rounded-full font-label text-base hover:shadow-xl transition-all">Begin the Journey</Link>
                <a href="#about" className="border border-[#115238] text-[#115238] px-8 py-4 rounded-full font-label text-base hover:bg-[#115238]/5 transition-all">Our Story ↓</a>
              </div>
              <div className="pt-12">
                <div className="h-[1px] bg-outline-variant/30 w-full mb-4"></div>
                <div className="flex items-center gap-6 text-[12px] uppercase tracking-[0.1em] text-outline font-label">
                  <span>500+ Lives Touched</span>
                  <span className="material-symbols-outlined text-[8px] text-[#2e6a4f]" style={{ fontVariationSettings: "'FILL' 1" }}>reminder</span>
                  <span>30+ Workshops</span>
                  <span className="material-symbols-outlined text-[8px] text-[#2e6a4f]" style={{ fontVariationSettings: "'FILL' 1" }}>reminder</span>
                  <span>Est. 2020</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-5 flex justify-end">
              <div className="bg-white/80 backdrop-blur-xl p-10 rounded-xl shadow-2xl shadow-[#2e6a4f]/5 border border-white max-w-sm rotate-2 hover:rotate-0 transition-transform duration-500">
                <span className="font-label text-[11px] uppercase tracking-widest text-outline mb-4 block">Latest from Shohojatri</span>
                <h3 className="serif-italic text-3xl text-[#2e6a4f] mb-6 leading-tight">Finding resonance in silence: A guide to self-reflection.</h3>
                <Link to="/blog" className="text-[#7e2844] font-label text-sm font-medium flex items-center gap-2 group">
                  Read More <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
            <span className="font-label text-[11px] uppercase tracking-[0.15em] text-outline">Scroll to explore</span>
            <span className="material-symbols-outlined text-secondary animate-bounce">arrow_downward</span>
          </div>
        </section>

        {/* ABOUT US */}
        <section id="about" className="py-24 px-8 max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-20 items-center">
          <div className="md:col-span-7 space-y-8">
            <div className="flex flex-col gap-2">
              <span className="text-tertiary font-label text-sm uppercase tracking-widest flex items-center gap-2">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>reminder</span>
                About Us
              </span>
              <h2 className="serif-regular text-5xl md:text-6xl text-primary leading-tight">A Companion <br /> <span className="serif-italic">in Your Journey</span></h2>
            </div>
            <div className="space-y-6 max-w-xl">
              <p className="font-light text-[#3a3a3a] leading-relaxed">Shohojatri believes that mental health is not a solitary struggle but a shared human experience. Our approach integrates clinical expertise with deep cultural empathy to create a sanctuary for healing.</p>
              <p className="font-light text-[#3a3a3a] leading-relaxed">Founded by Dr. Debangana Bhattacharya, we bridge the gap between academic psychology and lived experience, ensuring that every individual finds their path to resilience.</p>
              <p className="font-light text-[#3a3a3a] leading-relaxed">Our programs are designed to empower communities, foster awareness, and provide tangible interventions for those navigating the complexities of emotional wellbeing.</p>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 text-tertiary font-medium group">
              Explore our services <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
          <div className="md:col-span-5">
            <div className="bg-primary p-12 rounded-lg grid grid-cols-2 gap-8 relative overflow-hidden">
              {[['500+', 'Lives Touched'], ['30+', 'Workshops'], ['5+', 'Years Impact'], ['12+', 'Programs']].map(([num, label]) => (
                <div key={label} className="space-y-1">
                  <span className="serif-regular text-5xl text-white block">{num}</span>
                  <span className="font-label text-xs text-white/60 uppercase tracking-widest">{label}</span>
                </div>
              ))}
              <span className="material-symbols-outlined text-[120px] text-white/5 absolute -bottom-4 -right-4">reminder</span>
            </div>
          </div>
        </section>

        {/* VISION & MISSION */}
        <section className="bg-primary py-24 px-8">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-5 space-y-8 border-b md:border-b-0 md:border-r border-white/10 pb-16 md:pb-0 md:pr-16">
              <span className="font-label text-xs text-white uppercase tracking-[0.2em] flex items-center gap-2">
                <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>reminder</span>
                OUR VISION
              </span>
              <h3 className="serif-italic text-4xl text-white leading-tight">To nurture a society where empathy is instinctive and healing is accessible.</h3>
              <p className="serif-italic text-lg text-white/80 leading-relaxed">We envision a world where mental health is prioritized as a fundamental human right, and every individual possesses the tools to navigate their internal landscape with grace.</p>
            </div>
            <div className="md:col-span-7 space-y-10">
              <span className="font-label text-xs text-white uppercase tracking-[0.2em] flex items-center gap-2">
                <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>reminder</span>
                OUR MISSION
              </span>
              <h3 className="serif-regular text-4xl text-white">Democratizing wellness through research and empathy.</h3>
              <ul className="space-y-6">
                {[
                  'Advancing mental health literacy through evidence-based outreach programs.',
                  'Integrating creative arts as a core therapeutic intervention for diverse groups.',
                  'Providing professional psychometric assessments with academic precision.',
                  'Fostering community resilience through collaborative workshop models.',
                  'Ensuring inclusivity in therapy for marginalized and underserved populations.',
                ].map(item => (
                  <li key={item} className="flex items-start gap-4 text-white/80 font-light">
                    <span className="material-symbols-outlined text-sm pt-1 text-white" style={{ fontVariationSettings: "'FILL' 1" }}>reminder</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-24 px-8 max-w-[1280px] mx-auto">
          <div className="text-center space-y-4 mb-20">
            <span className="text-tertiary font-label text-sm uppercase tracking-widest">What We Do</span>
            <h2 className="serif-regular text-5xl text-primary">Our Services & <br /> <span className="serif-italic">Interventions</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: '01', icon: 'eco', title: 'Mental Health Awareness', desc: 'Destigmatizing conversations through educational advocacy and public engagement.' },
              { num: '02', icon: 'theater_comedy', title: 'Creative Arts Therapy', desc: 'Using expression as a bridge to subconscious healing and emotional release.' },
              { num: '03', icon: 'assignment', title: 'Psychometric Assessment', desc: 'Standardized scientific tools to understand cognitive and emotional profiles.' },
              { num: '04', icon: 'groups', title: 'Community Workshops', desc: 'Collaborative group dynamics designed to foster shared resilience and support.' },
            ].map(({ num, icon, title, desc }) => (
              <div key={num} className="bg-white p-10 rounded-lg relative overflow-hidden group hover:-translate-y-2 transition-all border-l-0 hover:border-l-[3px] border-secondary">
                <span className="serif-regular text-8xl text-primary/5 absolute -top-4 right-4 pointer-events-none">{num}</span>
                <span className="material-symbols-outlined text-4xl text-primary mb-8 block">{icon}</span>
                <h4 className="serif-regular text-2xl text-primary mb-4">{title}</h4>
                <p className="text-sm font-light leading-relaxed text-[#3a3a3a]">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FOUNDER'S DESK */}
        <section className="py-24 px-8 max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-20 items-center">
          <div className="md:col-span-5 relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 border-2 border-[#9ae600] rounded-full scale-105"></div>
              <div className="w-full h-full rounded-full overflow-hidden">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFiUlCk50JBirgTHRYsvdVjORVSmJkBDOk51KxTEu7L-K7rvSWLo2nmrANUyq8xEMkUvMS42qPWwFbvey7DdRyCAfKQICQuwTWKJsaESRJDDLz6_tlJ42GgYhyRM1q1kv3VPkIb276HKedv_vJg5poe5RaomVC_JwmBEO4owQOUPL9ZJhT5JMDr3W9cTh-cCBDffyNN1TF4-9mLATkTXXCnRxk3IwpmxkG3GSAQfYs9l3C8P0-iUXp6K828WQp7lZVAsCV4j61HnAc" alt="Dr. Debangana Bhattacharya" />
              </div>
            </div>
          </div>
          <div className="md:col-span-7 space-y-8 relative">
            <span className="material-symbols-outlined text-[120px] text-secondary-fixed/30 absolute -top-16 -left-12 pointer-events-none select-none">format_quote</span>
            <div className="flex flex-col gap-2">
              <span className="text-tertiary font-label text-xs uppercase tracking-widest flex items-center gap-2">
                <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>reminder</span>
                FROM THE FOUNDER'S DESK
              </span>
              <blockquote className="serif-italic text-3xl text-primary leading-tight py-4">
                "Healing is not a destination, but a courageous way of being in the world. At Shohojatri, we don't just provide therapy; we build sanctuaries where the human spirit can flourish."
              </blockquote>
              <div className="pt-6 space-y-2">
                <h4 className="serif-regular text-2xl text-primary">Dr. Debangana Bhattacharya</h4>
                <div className="font-label text-sm text-outline flex flex-col">
                  <span>Clinical Psychologist &amp; Researcher</span>
                  <span className="text-tertiary">Founder, Shohojatri Initiative</span>
                </div>
                <div className="h-[2px] w-16 bg-secondary mt-4"></div>
              </div>
            </div>
          </div>
        </section>

        {/* PREMIUM MILESTONES SECTION */}
        <PremiumMilestones />


        {/* ACHINTYA SPOTLIGHT */}
        <section className="mx-8 mb-24 max-w-[1280px] lg:mx-auto bg-[#7e2844]/5 border-l-4 border-tertiary rounded-r-lg overflow-hidden">
          <div className="px-12 py-16 flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="space-y-6">
              <span className="font-label text-xs text-tertiary uppercase tracking-widest flex items-center gap-2">
                <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>reminder</span>
                AN INITIATIVE UNDER SHOHOJATRI
              </span>
              <h2 className="serif-italic text-6xl text-tertiary">Achintya</h2>
              <div className="flex flex-wrap gap-3">
                {['Artistic Healing', 'Deep Inquiry', 'Soul Resonance'].map(tag => (
                  <span key={tag} className="bg-tertiary/10 text-tertiary px-4 py-1.5 rounded-full text-xs font-label">{tag}</span>
                ))}
              </div>
            </div>
            <div className="text-right">
              <Link to="/achintya" className="inline-block bg-tertiary text-white px-8 py-4 rounded-full font-label text-base hover:shadow-xl hover:bg-tertiary-container transition-all">Explore Achintya →</Link>
            </div>
          </div>
        </section>

        {/* BLOG PREVIEW */}
        <section className="py-24 px-8 max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="space-y-4">
              <span className="text-tertiary font-label text-sm uppercase tracking-widest">From Our Blog</span>
              <h2 className="serif-regular text-5xl text-primary">Words That <br /> <span className="serif-italic">Heal</span></h2>
            </div>
            <Link to="/blog" className="text-primary font-label text-sm font-medium border-b border-primary/20 pb-1">View All Posts</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDO4KuA9GTK7hGLhp4SyQRtNgzoyJnQGJjf_2S8ZUWNMr2FQVSkaArnPC9sUtgTIMwV5us3MzVziVnabvc6H7iNBbUZZiNaywQdwhO62i2lgVvyMCJxrgR9FYapekJZ8dUbasEdhdVcro5IhvIFNKPkb9xd8CZa7ODyBZXdyV895N0n4ChosH0bwuLzfQxE5NWUSVFz6MPidmLpkc0c4pDjFVXIct3MLJxpXyCWb6P6Ip4rMQm8h21KBPmYaIQzvT4OR3uI8FrlRqXw', tag: 'Resilience', title: 'The art of letting go: Finding peace in transitions.' },
              { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABoq49IRdUpvhBxkcb-f26pGm8eKdwVfcS2LDcfUk0DVWccTDDc9NA3Vt_m-hK1RTARV3Xnpq31lKFqgNmos4C--pxdRS57DH-rEf1KD6IGZeKdp4IwnejgiPw6XG2bX0zOrI9dhPXE_gHI1uuzMd2n505pr1R6xTcAcoC3oCOaPGCvHIykbHiljG-iJ0V9kluUa9VApCXW1uL7_T5aW5rFj6W8nto_LK2pdBWGuABffekEjwMF-qTTz8PKFpV4DUjwiuoh5DFbzOB', tag: 'Mindfulness', title: 'Quietening the mind: Why silence is essential today.' },
              { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWF2QoiHAZNS74-BxZ0deeMwdIIN7sDfCx65QSoNIEWazknmZn2g6tpEGodWuL9USclsjYV8Enpq8A3fEdhsLitz1x2AiQdUbXnT6jlBwJo8T1XH0IiIk8BUW6RHgMITr9wSdB2hmq9xdaZv-6n-NpOctZRCKcfvIw3nSx7abeu36tOFPJkjGaV1zdb_ie4ILiqETEzh5Zoq03O2IvGJqe3fZSwMH6cJRJKpFUvuagLweGOGJNi_0pr5vQGvi9RYTWb8i19GWm6mWk', tag: 'Community', title: 'Collective healing: The power of shared stories.' },
            ].map(({ img, tag, title }) => (
              <article key={title} className="space-y-6 group cursor-pointer">
                <div className="aspect-[4/3] rounded-lg overflow-hidden bg-surface-container relative">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src={img} alt={title} />
                  <span className="absolute top-4 left-4 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold">{tag}</span>
                </div>
                <h3 className="serif-italic text-2xl text-primary leading-tight group-hover:text-tertiary transition-colors">{title}</h3>
                <Link to="/blog" className="text-tertiary font-label text-sm flex items-center gap-2 group/link">
                  Read More <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* TEAM */}
        <section className="py-24 px-8 max-w-[1280px] mx-auto">
          <div className="text-center mb-20 space-y-4">
            <span className="text-tertiary font-label text-sm uppercase tracking-widest">Our People</span>
            <h2 className="serif-regular text-5xl text-primary">The Faces Behind <br /> <span className="serif-italic">Shohojatri</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAie6v99h_G6EJeh6zA2-nShVZW0-LoARsqhN8FkqMa8SsSDl3pTmLc-QT02Uf-f1RBhEg_D8fiuQ0mvoKpR_pC-C_mo0dOooJ8-nqa99s_acW_ZPO_406OK4DniL20BBGdj6sV-zQs-HIMc_CvCh9s0cWP6ol8ZXsgsNYKpGxDyEkqYrZ0o6pKlc9tG3T_GO61NVw-SG2SUI3OZU4V76_9EN6ruqJTuHW9chCZeLJkU47tGoMzL8vnT9wxliyxOkjdwTvp4jM_8R_', name: 'Ananya Sen', role: 'Lead Counselor', dept: 'Clinical Dept' },
              { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlPXNnh4PsxMvo4jMTnh1lMj0SjOIZl_VRC8ysxBRoauRI6hXRMnjHmZZEmiRt-jC30C2YSCdgqYuy75vamF6HWpzrXhSck7NTTDpD1ZZyxd4zBX33ModClf889grsa8z64KC3YARiD5iaX0jCQc6hLD5KzSCYnlsjTJym_zJoSgmRaTUYdny9NYLyCMMgITy4dHqw-UNuNG6DKp1Xq10qVR91X4UmDvH1Nwbr6DdXDNvE9n6o6goEzsVDNhzjBuh2x_MMdlG1FMNY', name: 'Rahul Das', role: 'Research Associate', dept: 'Academia' },
              { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGPFh-kReAow5G2-kOH4kq-KyQ-a0Kp-KpjAFVeh8Lr1U9HqAAcQIeYQMlpcehuydONSzlAn7CfZPpI389YeS90mmudkrMvPFjn0AgTDepHknrGnsm1iJmLf9aIkWMyK2fUexKRsgkH8y7UBp5AErRJbADCkPfvKgtPv1B3coQ9SYH8DK4_ddmAJTl5qM3S3-T7dCvPBy1FSozBWQ8sN4sO5JmYivJSRGVjBXDNF-qWnULPZtJavpU9BkUA7cXdokxSyAAEj6zIIfS', name: 'Meghna Roy', role: 'Arts Therapist', dept: 'Creative Initiatives' },
              { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUgOEzmf4pLIYHqqd-o2GH44nTCwYdaDGyZExgpnDTVapVINgwKtZjg2ym-r4bA1Nm3sN8hMsQqWpDaXXEJNrOXVZpSn3TT8anayslfsyE0e_glxGCnHPYLqXh4Om9qFKZZrsfYOwmHeRwTk7gX7bqxk5UTDngnwzc1VJh-FqKrkW3gFSK_jfanBi9VGMQ96VucE_bx3dBpfWgMU4_CwoagbI4oy867vA3j8NPIw4WSivJOxT8AG9VDiroIt3zDpKjDoFayeHaiqFf', name: 'Soma Dutta', role: 'Community Outreach', dept: 'Impact Programs' },
            ].map(({ img, name, role, dept }) => (
              <div key={name} className="text-center space-y-4 group">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto grayscale group-hover:grayscale-0 transition-all duration-500 ring-2 ring-transparent group-hover:ring-secondary/40 ring-offset-4">
                  <img className="w-full h-full object-cover" src={img} alt={name} />
                </div>
                <div className="space-y-1">
                  <h4 className="serif-regular text-xl text-primary">{name}</h4>
                  <p className="font-label text-xs font-light text-outline uppercase tracking-wider">{role}</p>
                  <p className="text-tertiary text-[11px] font-medium tracking-widest uppercase">{dept}</p>
                </div>
                <div className="h-[1px] w-0 group-hover:w-full bg-secondary mx-auto transition-all duration-700"></div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

const RibbonIcon = ({ className, color = 'currentColor', width = 18, height = 26 }) => (
  <svg
    viewBox="0 0 24 32"
    width={width}
    height={height}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C8.68629 2 6 4.68629 6 8C6 11.3137 8.68629 14 12 14C15.3137 14 18 11.3137 18 8C18 4.68629 15.3137 2 12 2Z"
      fill={color}
    />
    <path
      d="M12 14L4 28H10L14 20L18 28H24L16 14L12 14Z"
      fill={color}
    />
  </svg>
);

function PremiumMilestones() {
  const containerRef = React.useRef(null);
  const spineRef = React.useRef(null);
  const [visibleItems, setVisibleItems] = React.useState({});
  const [closingVisible, setClosingVisible] = React.useState(false);

  React.useEffect(() => {
    let ticking = false;

    const updateSpine = () => {
      if (!containerRef.current || !spineRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const start = rect.top - viewportHeight / 2;
      const length = rect.height;

      const progress = Math.max(0, Math.min(1, -start / (length - viewportHeight / 2)));
      spineRef.current.style.height = `${progress * 100}%`;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateSpine);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    const options = { threshold: 0.3 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('data-milestone-id');
          if (id === 'closing') {
            setClosingVisible(true);
          } else {
            setVisibleItems(prev => ({ ...prev, [id]: true }));
          }
        }
      });
    }, options);

    const elements = containerRef.current.querySelectorAll('[data-milestone-id]');
    elements.forEach(el => observer.observe(el));
    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  const milestones = [
    { year: '2020', title: 'Shohojatri Founded', desc: 'Born out of a vision to bridge clinical psychology and human compassion, Dr. Debangana Bhattacharya established Shohojatri as a sanctuary for psychosocial welfare, creating West Bengal\'s first community-led mental health initiative of its kind.', tag: 'FOUNDING', side: 'LEFT' },
    { year: '2021', title: 'Workshop Series Launch', desc: 'Beginning our outreach with community-led workshops across West Bengal — focusing on mental health literacy, emotional resilience and breaking the stigma around psychological wellbeing in schools and local communities.', tag: 'OUTREACH', side: 'RIGHT' },
    { year: '2022', title: 'Achintya Initiative Launched', desc: 'Introducing our integrated arts and somatic healing vertical — merging dance, recitation, music and creative expression with therapeutic depth. Achintya became the creative soul of Shohojatri\'s healing practice.', tag: 'CREATIVE ARTS', side: 'LEFT', special: 'ACHINTYA' },
    { year: '2023', title: 'InSPA Membership & Recognition', desc: 'Dr. Debangana Bhattacharya\'s work received formal recognition through Life Membership of InSPA — the Indian Society of Professional Psychologists — affirming Shohojatri\'s commitment to evidence-based, ethical psychological practice.', tag: 'RECOGNITION', side: 'RIGHT' },
    { year: '2024', title: '500+ Lives Impacted', desc: 'Crossing a landmark milestone — over five hundred individuals across communities, schools and workplaces have walked alongside Shohojatri on their journey toward emotional wellbeing, resilience and self-discovery.', tag: 'IMPACT', side: 'LEFT', special: 'IMPACT_2024' },
  ];

  return (
    <section ref={containerRef} className="py-[96px] pb-[120px] bg-[rgba(46,106,79,0.025)] relative overflow-hidden">
      {/* Watermark */}
      <div className="absolute top-[40px] left-0 w-full text-center pointer-events-none select-none z-0 overflow-hidden opacity-[0.025]">
        <h2 className="font-mercury text-[180px] text-[#2e6a4f] leading-none whitespace-nowrap uppercase">OUR JOURNEY</h2>
      </div>

      <div className="max-w-[1280px] mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-[80px]">
          <div className="flex items-center justify-center gap-2 mb-4">
            <RibbonIcon color="#C25E7A" width={12} height={18} />
            <span className="font-neue text-[11px] font-bold uppercase tracking-[0.2em] text-[#C25E7A]">OUR JOURNEY</span>
          </div>
          <h2 className="serif-regular text-5xl md:text-[56px] text-[#2e6a4f] leading-[1.1] mb-2">
            Milestones That <br /> <span className="serif-italic">Shaped Us</span>
          </h2>
          <div className="w-[48px] h-[2px] bg-[#9ae600] mx-auto"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Spine */}
          <div className="absolute left-[31px] md:left-1/2 md:-translate-x-1/2 top-0 w-[2px] h-full bg-primary/5 z-0"></div>
          <div
            ref={spineRef}
            className="absolute left-[31px] md:left-1/2 md:-translate-x-1/2 top-0 w-[2px] bg-gradient-to-b from-[#2e6a4f] via-[#2e6a4f]/40 to-[#2e6a4f]/10 z-1 origin-top transition-[height] duration-75"
            style={{ height: '0%' }}
          ></div>

          <div className="space-y-[64px] md:space-y-[120px]">
            {milestones.map((item) => {
              const isVisible = visibleItems[item.year];
              const isAchintya = item.special === 'ACHINTYA';
              const isImpact = item.special === 'IMPACT_2024';
              const side = item.side;

              return (
                <div key={item.year} data-milestone-id={item.year} className={`relative min-h-[220px] flex items-center ${side === 'LEFT' ? 'justify-start' : 'md:justify-end'}`}>

                  {/* Triple Ring Node */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center z-10">
                    <div className={`w-[88px] h-[88px] rounded-full border border-[#2e6a4f]/8 flex items-center justify-center transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                      <div className={`w-[72px] h-[72px] rounded-full border border-[#2e6a4f]/12 bg-[#2e6a4f]/6 flex items-center justify-center`}>
                        <div
                          className={`w-[52px] h-[52px] rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group hover:rotate-12 ${isAchintya ? 'bg-[#C25E7A] shadow-[0_4px_20px_rgba(194,94,122,0.3)]' : 'bg-[#2e6a4f] shadow-[0_4px_20px_rgba(46,106,79,0.3)]'} ${isImpact ? 'ring-[3px] ring-[rgba(154,230,0,0.2)]' : ''}`}
                        >
                          <RibbonIcon color={isImpact ? '#9ae600' : '#ffffff'} width={18} height={26} className="transition-transform duration-300 group-hover:rotate-12" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Card (Wider: increased md:w to calc(50%-56px) from calc(50%-80px)) */}
                  <div
                    className={`
                      w-full md:w-[calc(50%-56px)] ml-[64px] md:ml-0
                      bg-white rounded-[24px] p-9 md:px-11 md:py-10
                      blog-card-shadow border border-[#2e6a4f]/6
                      relative overflow-hidden transition-all duration-700 delay-250
                      ${isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${side === 'LEFT' ? 'md:-translate-x-[40px] -translate-x-[30px]' : 'md:translate-x-[40px] -translate-x-[30px]'}`}
                    `}
                  >
                    {/* Card Accent */}
                    <div className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${isAchintya ? 'from-[#C25E7A] to-[#C25E7A]/10' : isImpact ? 'from-[#9ae600] to-[#9ae600]/10' : 'from-[#2e6a4f] to-[#2e6a4f]/10'}`}></div>

                    {/* Deco Year */}
                    <div className="absolute -bottom-[20px] right-[16px] font-mercury text-[120px] text-[#2e6a4f]/4 pointer-events-none select-none leading-none">
                      {item.year}
                    </div>

                    {/* Connector Arrow */}
                    <div
                      className={`
                        absolute top-1/2 -translate-y-1/2 w-0 h-0 
                        border-t-[8px] border-t-transparent 
                        border-b-[8px] border-b-transparent
                        ${side === 'LEFT' ? 'md:right-0 md:translate-x-full md:border-l-[12px] md:border-l-[#2e6a4f]/8' : 'md:left-0 md:-translate-x-full md:border-r-[12px] md:border-r-[#2e6a4f]/8'}
                        hidden md:block
                      `}
                    ></div>
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[12px] border-r-[#2e6a4f]/8 md:hidden"></div>

                    {/* Meta */}
                    <div className={`inline-flex bg-[#C25E7A]/8 border border-[#C25E7A]/20 rounded-full px-4 py-1.5 font-neue text-[12px] font-medium text-[#C25E7A] tracking-[0.12em] mb-4 transition-all duration-500 delay-400 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                      {item.year}
                    </div>

                    <h3 className={`serif-italic text-[32px] md:text-[36px] leading-[1.2] mb-3 ${isAchintya ? 'text-[#C25E7A]' : 'text-[#2e6a4f]'}`}>
                      {item.title}
                    </h3>

                    <p className="font-neue font-light text-[16px] md:text-[17px] leading-[1.85] text-[#3a3a3a] mb-5">
                      {item.desc}
                    </p>

                    <div className="inline-flex bg-[#9ae600]/10 border border-[#9ae600]/25 rounded-full px-3.5 py-1 font-neue text-[10px] font-medium text-[#2e6a4f] tracking-[0.1em] uppercase">
                      {item.tag}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Closing Moment */}
          <div data-milestone-id="closing" className="mt-[120px] text-center pb-24">
            <div className={`mx-auto w-[80px] h-[80px] rounded-full bg-[#2e6a4f] flex items-center justify-center shadow-[0_8px_32px_rgba(46,106,79,0.25)] ring-[4px] ring-[#9ae600]/15 transition-all duration-700 ${closingVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
              <RibbonIcon color="#ffffff" width={28} height={40} />
            </div>

            <div className="mt-8 space-y-2">
              <p className={`apple-garamond italic text-[22px] text-[#2e6a4f] transition-all duration-500 delay-100 ${closingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                And the journey continues...
              </p>
              <p className={`font-neue font-light text-[14px] text-stone-500 tracking-[0.05em] uppercase transition-all duration-500 delay-200 ${closingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                Every step forward is a step taken together.
              </p>
            </div>

            <div className={`mt-10 transition-all duration-500 delay-300 ${closingVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <Link to="/contact" className="inline-flex items-center justify-center bg-[#2e6a4f] text-white font-neue font-medium text-[14px] px-9 py-3.5 rounded-full hover:bg-transparent hover:text-[#2e6a4f] hover:border-[#2e6a4f] border-[1.5px] border-transparent transition-all shadow-[0_4px_24px_rgba(46,106,79,0.15)] hover:shadow-[0_0_0_4px_rgba(154,230,0,0.15)] active:scale-[0.98]">
                Walk With Us →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
