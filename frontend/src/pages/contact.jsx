import React, { useState, useEffect } from 'react';
import Navbar from '../components/global/Navbar';
import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import Footer from '../components/global/Footer';
import { client } from '../utils/sanity';

export default function Contact() {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "contactSettings"][0]`;
      const data = await client.fetch(query);
      setSettings(data);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-background font-body">
      <Navbar />
      <main className="pt-[72px]">
        <ContactHero />
        <section className="py-24 px-12 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5">
            <ContactInfo data={settings} />
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </section>
        
        <section className="h-[400px] w-full bg-[#2e6a4f]/5 overflow-hidden rounded-t-[100px] relative">
          <iframe
            title="Location Map"
            src={settings?.mapUrl || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.33439927705!2d88.2649514755106!3d22.53540637453472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 grayscale contrast-125 opacity-80"
          ></iframe>
        </section>
      </main>
      <Footer />
    </div>
  );
}
