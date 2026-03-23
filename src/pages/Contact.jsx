import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', reason:'General Inquiry', message:'' });

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.id || e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
  };

  return (
    <div className="bg-surface font-body text-on-surface">
      <Navbar />
      <main className="pt-[72px]">

        {/* Hero */}
        <section className="h-[280px] flex items-center relative overflow-hidden px-8 md:px-16 max-w-[1440px] mx-auto">
          <div className="w-full relative z-10">
            <h1 className="font-headline italic text-6xl md:text-7xl text-primary-container leading-tight">Let's Walk Together</h1>
            <p className="mt-4 text-lg md:text-xl text-on-surface-variant max-w-xl">Reach out. We're here to listen, support, and connect.</p>
          </div>
          <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 opacity-[0.08] rotate-[15deg] select-none pointer-events-none">
            <span className="material-symbols-outlined text-[320px] ribbon-icon" style={{fontVariationSettings:"'FILL' 1"}}>reminder</span>
          </div>
        </section>

        {/* Main Content */}
        <section className="max-w-[1440px] mx-auto px-8 md:px-16 py-24">
          <div className="grid grid-cols-1 md:grid-cols-10 gap-16 md:gap-24 items-start">

            {/* Left: Contact Info */}
            <div className="md:col-span-4 space-y-12">
              <div className="space-y-8">
                <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest text-accent-rose uppercase">
                  <span className="material-symbols-outlined text-sm ribbon-icon" style={{fontVariationSettings:"'FILL' 1"}}>reminder</span>
                  FIND US
                </span>
                <div className="space-y-10">
                  {[
                    { icon:'mail', label:'Email', val:<a href="mailto:info@shohojatri.org" className="text-lg font-medium text-primary-container hover:text-accent-rose transition-colors">info@shohojatri.org</a> },
                    { icon:'location_on', label:'Location', val:<p className="text-lg font-medium text-primary-container leading-snug">Department of Psychology, SNU, <br />West Bengal, India</p> },
                    { icon:'call', label:'Phone', val:<p className="text-lg font-medium text-primary-container">+91 XXXXXXXXXX</p> },
                  ].map(({ icon, label, val }) => (
                    <div key={label} className="flex items-start gap-5">
                      <span className="material-symbols-outlined mt-1 text-primary ribbon-icon" style={{fontVariationSettings:"'FILL' 1"}}>{icon}</span>
                      <div>
                        <p className="text-xs text-outline font-semibold mb-1 uppercase tracking-tighter">{label}</p>
                        {val}
                      </div>
                    </div>
                  ))}
                  {/* Socials */}
                  <div className="flex items-start gap-5">
                    <span className="material-symbols-outlined mt-1 text-primary ribbon-icon" style={{fontVariationSettings:"'FILL' 1"}}>share</span>
                    <div>
                      <p className="text-xs text-outline font-semibold mb-1 uppercase tracking-tighter">Social</p>
                      <div className="flex gap-6 mt-2">
                        {[
                          'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
                          'M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-8.74h-2.94v-3.403h2.94v-2.511c0-2.91 1.777-4.495 4.375-4.495 1.242 0 2.311.092 2.622.134v3.04l-1.799.001c-1.411 0-1.685.671-1.685 1.655v2.176h3.366l-.438 3.403h-2.928v8.74h6.052c.733 0 1.325-.593 1.325-1.324v-21.351c0-.732-.592-1.325-1.325-1.325z',
                          'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
                        ].map((path, i) => (
                          <a key={i} className="text-primary-container hover:text-accent-rose transition-all hover:scale-110" href="#">
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d={path} /></svg>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-px w-full bg-primary/10"></div>
              <div className="border border-primary rounded-xl p-5 inline-flex items-center gap-4 bg-surface-container-low/50">
                <span className="material-symbols-outlined text-primary ribbon-icon" style={{fontVariationSettings:"'FILL' 1"}}>workspace_premium</span>
                <span className="text-[13px] font-medium text-primary">Proud Life Member of InSPA</span>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="md:col-span-6">
              <div className="bg-surface-container-lowest editorial-shadow rounded-[24px] p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-10">
                  {[
                    { id:'name', label:'Name *', type:'text', required:true },
                    { id:'email', label:'Email *', type:'email', required:true },
                    { id:'phone', label:'Phone', type:'tel', required:false },
                  ].map(({ id, label, type, required }) => (
                    <div key={id} className="relative floating-label-input group">
                      <input
                        id={id}
                        type={type}
                        required={required}
                        placeholder={label}
                        value={form[id]}
                        onChange={handleChange}
                        className="peer w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 focus:ring-0 focus:border-primary transition-all text-on-surface placeholder-transparent outline-none"
                      />
                      <label className="absolute left-0 top-3 text-outline transition-all peer-placeholder-shown:text-outline peer-focus:text-primary peer-focus:-translate-y-6 peer-focus:scale-85 peer-[&:not(:placeholder-shown)]:-translate-y-6 peer-[&:not(:placeholder-shown)]:scale-85" htmlFor={id}>{label}</label>
                    </div>
                  ))}
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold tracking-widest text-outline uppercase">Reason for contacting</label>
                    <select
                      name="reason"
                      value={form.reason}
                      onChange={handleChange}
                      className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 focus:ring-0 focus:border-primary transition-all text-primary-container font-medium appearance-none outline-none"
                    >
                      {['General Inquiry','Workshop Booking','Media & Press','Collaboration','Other'].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <div className="relative floating-label-input group">
                    <textarea
                      id="message"
                      required
                      placeholder="Message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      className="peer w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 focus:ring-0 focus:border-primary transition-all text-on-surface placeholder-transparent resize-none outline-none"
                    />
                    <label className="absolute left-0 top-3 text-outline transition-all peer-placeholder-shown:text-outline peer-focus:text-primary peer-focus:-translate-y-6 peer-focus:scale-85 peer-[&:not(:placeholder-shown)]:-translate-y-6 peer-[&:not(:placeholder-shown)]:scale-85" htmlFor="message">Message *</label>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary-container text-white rounded-full py-5 px-8 font-medium text-[13px] tracking-wide flex items-center justify-center gap-2 hover:shadow-[0_4px_24px_rgba(154,230,0,0.4)] transition-all group active:scale-[0.98]"
                  >
                    Send a Message
                    <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
