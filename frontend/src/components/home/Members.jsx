import React from 'react';
import { members } from '../../data/members';
import SectionHeader from '../global/SectionHeader';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { urlFor } from '../../utils/sanity';

const Members = ({ data }) => {
  const sectionRef = useScrollAnimation();
  const displayMembers = data && data.length > 0 ? data : members;

  const getPhotoUrl = (photo) => {
    if (!photo) return '/placeholder-member.png';
    if (typeof photo === 'string') return photo;
    if (photo.asset) return urlFor(photo).url();
    return '/placeholder-member.png';
  };

  return (
    <section className="py-24 px-8 max-w-[1280px] mx-auto">
      <SectionHeader 
        label="Our People"
        titleLine1="The Faces Behind"
        titleLine2="Shohojatri"
        italic={2}
        centered={true}
      />

      <div ref={sectionRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 animate">
        {displayMembers.map((member, index) => (
          <div key={member._id || member.id || `member-${index}`} className="text-center space-y-4 group">
            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto grayscale group-hover:grayscale-0 transition-all duration-500 ring-2 ring-transparent group-hover:ring-[#9ae600]/40 ring-offset-4 shadow-lg">
              <img className="w-full h-full object-cover" src={getPhotoUrl(member.photo)} alt={member.name} loading="lazy" decoding="async" />
            </div>
            <div className="space-y-1">
              <h4 className="serif-regular text-xl text-[#2e6a4f]">{member.name}</h4>
              <p className="font-label text-xs font-light text-[#888888] uppercase tracking-wider">{member.role}</p>
              <p className="text-[#C25E7A] text-[11px] font-medium tracking-widest uppercase">{member.department}</p>
            </div>
            <div className="h-[1px] w-0 group-hover:w-full bg-[#9ae600] mx-auto transition-all duration-700"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Members;
