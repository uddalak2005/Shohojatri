import React from 'react';
import Button from '../global/Button';
import Card from '../global/Card';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const ContactForm = () => {
  const sectionRef = useScrollAnimation();

  return (
    <Card ref={sectionRef} className="p-12 shadow-2xl shadow-[#2e6a4f]/5 border border-[#2e6a4f]/5 animate">
      <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="font-label text-xs uppercase tracking-widest text-[#2e6a4f]">Name</label>
            <input 
              type="text" 
              placeholder="Your name" 
              className="w-full bg-[#2e6a4f]/5 border-none rounded-lg p-4 font-label focus:ring-2 focus:ring-[#9ae600] transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="font-label text-xs uppercase tracking-widest text-[#2e6a4f]">Email</label>
            <input 
              type="email" 
              placeholder="your@email.com" 
              className="w-full bg-[#2e6a4f]/5 border-none rounded-lg p-4 font-label focus:ring-2 focus:ring-[#9ae600] transition-all"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="font-label text-xs uppercase tracking-widest text-[#2e6a4f]">Subject</label>
          <select className="w-full bg-[#2e6a4f]/5 border-none rounded-lg p-4 font-label focus:ring-2 focus:ring-[#9ae600] transition-all">
            <option>General Inquiry</option>
            <option>Book a Therapy Session</option>
            <option>Workshop Registration</option>
            <option>Achintya Inquiry</option>
            <option>Join the Team</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <label className="font-label text-xs uppercase tracking-widest text-[#2e6a4f]">Message</label>
          <textarea 
            rows="5" 
            placeholder="Tell us how we can help..." 
            className="w-full bg-[#2e6a4f]/5 border-none rounded-lg p-4 font-label focus:ring-2 focus:ring-[#9ae600] transition-all"
          ></textarea>
        </div>
        
        <Button variant="primary" className="w-full py-5 text-lg">
          Send Message →
        </Button>
      </form>
    </Card>
  );
};

export default ContactForm;
