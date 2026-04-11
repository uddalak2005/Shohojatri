import React from 'react';
import { workshopSchedule } from '../../data/workshopSchedule';
import SectionHeader from '../global/SectionHeader';
import Button from '../global/Button';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const WorkshopSchedule = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section className="py-24 px-8 max-w-[1280px] mx-auto">
      <SectionHeader 
        label="Calendar"
        titleLine1="Upcoming"
        titleLine2="Sessions"
        italic={2}
        accentColor="#C25E7A"
      />
      
      <div ref={sectionRef} className="bg-white rounded-2xl overflow-hidden shadow-xl shadow-[#2e6a4f]/5 border border-[#2e6a4f]/5 animate">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-[#2e6a4f]/5 text-[#2e6a4f] uppercase text-[10px] tracking-[0.2em] font-bold">
              <tr>
                {['Date','Session','Venue','Duration','Action'].map(h => (
                  <th key={h} className="px-8 py-5">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2e6a4f]/5 apple-garamond text-xl">
              {workshopSchedule.map((item) => (
                <tr key={item.id} className="hover:bg-[#f8fdf8] transition-colors group">
                  <td className="px-8 py-6 text-[#2e6a4f]/70">{item.date}</td>
                  <td className="px-8 py-6 font-bold text-[#2e6a4f]">{item.session}</td>
                  <td className="px-8 py-6 text-[#3a3a3a]/70">{item.venue}</td>
                  <td className="px-8 py-6 text-[#3a3a3a]/70">{item.duration}</td>
                  <td className="px-8 py-6">
                    <Button variant="text" href="/contact" className="text-[#C25E7A] font-bold">
                      Register
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default WorkshopSchedule;
