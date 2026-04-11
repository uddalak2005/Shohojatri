import React from 'react';
import SectionHeader from '../global/SectionHeader';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const ContactInfo = () => {
  const sectionRef = useScrollAnimation();

  return (
    <div ref={sectionRef} className="space-y-12 animate">
      <SectionHeader 
        label="Connect"
        titleLine1="Healing is a"
        titleLine2="Co-created Space"
        italic={2}
      />
      
      <div className="space-y-8">
        {[
          { icon: 'mail', label: 'Email Us', val: 'shohojatri.official@gmail.com' },
          { icon: 'call', label: 'Call Us', val: '+91 98300 00000' },
          { icon: 'location_on', label: 'Visit Us', val: 'Kolkata, West Bengal, India' },
        ].map((item) => (
          <div key={item.label} className="flex items-start gap-6 group">
            <div className="w-12 h-12 rounded-full bg-[#2e6a4f]/10 flex items-center justify-center text-[#2e6a4f] group-hover:bg-[#2e6a4f] group-hover:text-white transition-all">
              <span className="material-symbols-outlined">{item.icon}</span>
            </div>
            <div className="space-y-1">
              <p className="font-label text-xs uppercase tracking-widest text-[#888888]">{item.label}</p>
              <p className="apple-garamond text-2xl text-[#2e6a4f]">{item.val}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="pt-8 space-y-4">
        <p className="font-label text-xs uppercase tracking-widest text-[#2e6a4f] font-bold">Follow Our Journey</p>
        <div className="flex gap-4">
          {['facebook', 'instagram', 'linkedin', 'youtube'].map(social => (
            <a key={social} href="#" className="w-10 h-10 rounded-full bg-[#2e6a4f] text-white flex items-center justify-center hover:bg-[#9ae600] transition-colors">
              <span className="material-symbols-outlined text-lg">public</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
