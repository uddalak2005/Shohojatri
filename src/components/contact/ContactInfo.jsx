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
          { icon: 'mail', label: 'Email Us', val: 'shohojatri.welfare@gmail.com', href: 'mailto:shohojatri.welfare@gmail.com' },
          { icon: 'call', label: 'Call Us (Shohojatri)', val: '+91 99034 91795 / +91 60037 14239' },
          { icon: 'mail_lock', label: 'Achintya Email', val: 'weareachintya@gmail.com', href: 'mailto:weareachintya@gmail.com' },
          { icon: 'phone_iphone', label: 'Achintya Mobile', val: '9875692385', href: 'tel:9875692385' }
        ].map((item) => (
          <div key={item.label} className="flex items-start gap-6 group">
            <div className="w-12 h-12 rounded-full bg-[#2e6a4f]/10 flex items-center justify-center text-[#2e6a4f] group-hover:bg-[#2e6a4f] group-hover:text-white transition-all">
              {item.href ? (
                <a href={item.href} className="flex items-center justify-center w-full h-full">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </a>
              ) : (
                <span className="material-symbols-outlined">{item.icon}</span>
              )}
            </div>
            <div className="space-y-1">
              <p className="font-label text-xs uppercase tracking-widest text-[#888888]">{item.label}</p>
              {item.href ? (
                <a href={item.href} className="apple-garamond text-2xl text-[#2e6a4f] hover:underline">{item.val}</a>
              ) : (
                <p className="apple-garamond text-2xl text-[#2e6a4f]">{item.val}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="pt-8 space-y-4">
        <p className="font-label text-xs uppercase tracking-widest text-[#2e6a4f] font-bold">Follow Our Journey</p>
        <div className="flex gap-4 cursor-default">
          <a href="https://www.instagram.com/shohojatri?igsh=NzJ2bjZ3eXpqbTF4" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#2e6a4f] text-white flex items-center justify-center hover:bg-[#9ae600] transition-colors" title="Shohojatri Instagram">
            <span className="material-symbols-outlined text-lg">photo_camera</span>
          </a>
          <a href="https://www.instagram.com/tabo.achintya?igsh=bjd2dGI0ZXg4Mmdt" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#2e6a4f] text-white flex items-center justify-center hover:bg-[#9ae600] transition-colors" title="Achintya Instagram">
            <span className="material-symbols-outlined text-lg">photo_camera</span>
          </a>
          <div className="w-10 h-10 rounded-full bg-[#2e6a4f] text-white flex items-center justify-center opacity-50 cursor-not-allowed" title="LinkedIn (Coming Soon)">
            <span className="material-symbols-outlined text-lg">work</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
