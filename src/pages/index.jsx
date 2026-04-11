import React from 'react';
import Navbar from '../components/global/Navbar';
import Hero from '../components/home/Hero';
import AboutUs from '../components/home/AboutUs';
import VisionMission from '../components/home/VisionMission';
import Services from '../components/home/Services';
import FounderDesk from '../components/home/FounderDesk';
import Milestones from '../components/home/Milestones';
import AchintyaSpotlight from '../components/home/AchintyaSpotlight';
import BlogPreview from '../components/home/BlogPreview';
import Members from '../components/home/Members';
import Footer from '../components/global/Footer';

export default function Home() {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <VisionMission />
        <Services />
        <FounderDesk />
        <Milestones />
        <AchintyaSpotlight />
        <BlogPreview />
        <Members />
      </main>
      <Footer />
    </div>
  );
}
