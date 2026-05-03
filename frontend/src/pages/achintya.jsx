import React, { useState, useEffect } from 'react';
import Navbar from '../components/global/Navbar';
import AchintyaHero from '../components/achintya/AchintyaHero';
import AboutAchintya from '../components/achintya/AboutAchintya';
import AchintyaServices from '../components/achintya/AchintyaServices';
import AchintyaGalleryStrip from '../components/achintya/AchintyaGalleryStrip';
import WorkshopSchedule from '../components/achintya/WorkshopSchedule';
import AchintyaTeam from '../components/achintya/AchintyaTeam';
import Footer from '../components/global/Footer';
import Loader from '../components/global/Loader';
import { client } from '../utils/sanity';

export default function Achintya() {
  const [settings, setSettings] = useState(null);
  const [members, setMembers] = useState([]);
  const [events, setEvents] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const settingsQuery = `*[_type == "achintyaPage"][0]`;
      const membersQuery = `*[_type == "member" && department == "Achintya Team"] | order(_createdAt asc)`;
      const eventsQuery = `*[_type == "event"] | order(date asc)`;
      const galleryQuery = `*[_type == "galleryItem"] | order(_createdAt desc)[0...10]`;

      const [s, m, e, g] = await Promise.all([
        client.fetch(settingsQuery),
        client.fetch(membersQuery),
        client.fetch(eventsQuery),
        client.fetch(galleryQuery)
      ]);

      setSettings(s);
      setMembers(m);
      setEvents(e);
      setGallery(g);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-background text-[#3a3a3a] font-body">
      <Navbar />
      <main>
        <div className='w-full h-[70px] bg-white'>

        </div>
        <AchintyaHero />
        <AboutAchintya />
        <AchintyaServices />
        <AchintyaGalleryStrip data={gallery} />
        <WorkshopSchedule
          events={events}
          email={settings?.workshopEmail}
          phone={settings?.phoneNumber}
        />
        <AchintyaTeam data={members} />
      </main>
      <Footer />
    </div>
  );
}


