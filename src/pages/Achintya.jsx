import React from 'react';
import Navbar from '../components/global/Navbar';
import AchintyaHero from '../components/achintya/AchintyaHero';
import AboutAchintya from '../components/achintya/AboutAchintya';
import AchintyaServices from '../components/achintya/AchintyaServices';
import AchintyaGalleryStrip from '../components/achintya/AchintyaGalleryStrip';
import WorkshopSchedule from '../components/achintya/WorkshopSchedule';
import AchintyaTestimonials from '../components/achintya/AchintyaTestimonials';
import Footer from '../components/global/Footer';

export default function Achintya() {
  return (
    <div className="bg-background text-[#3a3a3a] font-body">
      <Navbar />
      <main>
        <div className='w-full h-[70px] bg-white'>

        </div>
        <AchintyaHero />
        <AboutAchintya />
        <AchintyaServices />
        <AchintyaGalleryStrip />
        <WorkshopSchedule />
        <AchintyaTestimonials />
      </main>
      <Footer />
    </div>
  );
}
