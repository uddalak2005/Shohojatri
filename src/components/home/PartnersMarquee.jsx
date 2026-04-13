import React from 'react';

const partnersList = [
  { id: 1, name: "Community Partner A" },
  { id: 2, name: "Wellness Org B" },
  { id: 3, name: "Global Outreach C" },
  { id: 4, name: "Mental Health Foundation" },
  { id: 5, name: "Arts Therapy Institute" },
  { id: 6, name: "Academic Collaborator" },
];

const PartnersMarquee = () => {
  return (
    <section className="py-12 bg-white border-y border-[#2e6a4f]/5 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 mb-6">
        <p className="font-body text-[#888888] text-xs uppercase tracking-[0.2em] text-center font-bold">
          Our Partners & Collaborators
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[...partnersList, ...partnersList].map((partner, index) => (
            <div 
              key={`marquee-${index}`} 
              className="mx-8 bg-[#2e6a4f]/5 px-8 py-4 rounded-xl inline-flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity whitespace-nowrap"
            >
              <span className="font-display text-[#2e6a4f] text-lg font-medium">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersMarquee;
