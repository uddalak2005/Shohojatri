import React from 'react';
import Navbar from '../components/global/Navbar';
import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import Footer from '../components/global/Footer';

export default function Contact() {
  return (
    <div className="bg-background font-body">
      <Navbar />
      <main className="pt-[72px]">
        <ContactHero />
        <section className="py-24 px-12 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </section>
        
        <section className="h-[400px] w-full bg-[#2e6a4f]/5 overflow-hidden rounded-t-[100px] relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="font-mercury italic text-4xl text-[#2e6a4f]/20">Map Integration Placeholder</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
