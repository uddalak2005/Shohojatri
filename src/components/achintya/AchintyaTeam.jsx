import React from 'react';
import { achintyaMembers } from '../../data/achintya';
import SectionHeader from '../global/SectionHeader';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const AchintyaTeam = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section className="py-24 px-8 max-w-[1280px] mx-auto">
      <SectionHeader 
        label="Our Team"
        titleLine1="The Faces Behind"
        titleLine2="Achintya"
        italic={2}
        centered={true}
        accentColor="#C25E7A"
      />

      <div ref={sectionRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 animate">
        {achintyaMembers.map((member) => (
          <div key={member.id} className="text-center space-y-4 group">
            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto bg-gray-200 grayscale group-hover:grayscale-0 transition-all duration-500 ring-2 ring-transparent group-hover:ring-[#C25E7A]/40 ring-offset-4 shadow-lg">
              {member.photo && <img className="w-full h-full object-cover" src={member.photo} alt={member.name} />}
            </div>
            <div className="space-y-1">
              <h4 className="serif-regular text-xl text-[#3a3a3a]">{member.name}</h4>
              <p className="font-label text-xs font-light text-[#888888] uppercase tracking-wider">{member.role}</p>
            </div>
            <div className="h-[1px] w-0 group-hover:w-full bg-[#C25E7A] mx-auto transition-all duration-700"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AchintyaTeam;
