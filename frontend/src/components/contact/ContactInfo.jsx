import React from 'react';
import SectionHeader from '../global/SectionHeader';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const ContactInfo = ({ data }) => {
  const sectionRef = useScrollAnimation();

  const shohojatriEmail = data?.email || 'shohojatri.welfare@gmail.com';
  const shohojatriPhone = data?.phone || '+91 99034 91795 / +91 60037 14239';
  const achintyaEmail = data?.achintyaEmail || 'weareachintya@gmail.com';
  const achintyaPhone = data?.achintyaPhone || '9875692385';
  const address = data?.address || 'D25- Rajdanga, Nabapally, Post Office EKTP (East KolkataTownship), Kolkata, 700107. Opposite Acropolis Mall, Kasba.';

  const socialLinks = data?.socialLinks || [
    { platform: 'Instagram (Shohojatri)', href: 'https://www.instagram.com/shohojatri?igsh=NzJ2bjZ3eXpqbTF4', icon: 'photo_camera' },
    { platform: 'Instagram (Achintya)', href: 'https://www.instagram.com/tabo.achintya?igsh=bjd2dGI0ZXg4Mmdt', icon: 'photo_camera' }
  ];

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
          { icon: 'location_on', label: 'Address', val: address },
          { icon: 'mail', label: 'Email Us', val: shohojatriEmail, href: `mailto:${shohojatriEmail}` },
          { icon: 'call', label: 'Call Us (Shohojatri)', val: shohojatriPhone },
          { icon: 'mail_lock', label: 'Achintya Email', val: achintyaEmail, href: `mailto:${achintyaEmail}` },
          { icon: 'phone_iphone', label: 'Achintya Mobile', val: achintyaPhone, href: `tel:${achintyaPhone}` }
        ].map((item) => (
          <div key={item.label} className="flex items-start gap-6 group">
            <div className="w-12 h-12 shrink-0 rounded-full bg-[#2e6a4f]/10 flex items-center justify-center text-[#2e6a4f] group-hover:bg-[#2e6a4f] group-hover:text-white transition-all">
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
          {socialLinks.map((social, idx) => (
            <a 
              key={idx} 
              href={social.href || '#'} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-[#2e6a4f] text-white flex items-center justify-center hover:bg-[#9ae600] transition-colors" 
              title={social.platform}
            >
              <span className="material-symbols-outlined text-lg">{social.icon || 'link'}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
