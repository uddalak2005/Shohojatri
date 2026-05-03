import React, { useState, useEffect } from 'react';
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
import PartnersMarquee from '../components/home/PartnersMarquee';
import Footer from '../components/global/Footer';
import Loader from '../components/global/Loader';
import { client, urlFor } from '../utils/sanity';

export default function Home() {
  const [homeData, setHomeData] = useState(null);
  const [milestones, setMilestones] = useState([]);
  const [members, setMembers] = useState([]);
  const [partners, setPartners] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch home page settings, milestones, members, partners, and blogs
    const fetchData = async () => {
      setLoading(true);
      const homeQuery = `*[_type == "homePage"][0]{
        ...,
        "aboutVideo": aboutVideo.asset->url
      }`;
      const milestonesQuery = `*[_type == "milestone"] | order(year asc)`;
      const membersQuery = `*[_type == "member" && department == "Shohojatri Team"] | order(_createdAt asc)`;
      const partnersQuery = `*[_type == "partner"] | order(_createdAt asc)`;
      const blogsQuery = `*[_type == "blogPost"] | order(_createdAt desc)[0...3]`;

      const [home, ms, mems, pts, blgs] = await Promise.all([
        client.fetch(homeQuery),
        client.fetch(milestonesQuery),
        client.fetch(membersQuery),
        client.fetch(partnersQuery),
        client.fetch(blogsQuery)
      ]);

      setHomeData(home);
      setMilestones(ms);
      setMembers(mems);
      setPartners(pts);
      setBlogs(blgs);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-background text-on-surface font-body selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      <Navbar />
      <main>
        <Hero data={homeData?.heroData} videoUrl={homeData?.heroVideo} founderImage={homeData?.founderImage} />
        <AboutUs data={homeData?.aboutData} videoUrl={homeData?.aboutVideo} />
        <VisionMission />
        <Services />
        <FounderDesk founderImage={homeData?.founderImage ? urlFor(homeData.founderImage).url() : null} />
        <Milestones data={milestones} />
        <AchintyaSpotlight />
        <BlogPreview data={blogs} />
        <Members data={members} />
        <PartnersMarquee data={partners} />
      </main>
      <Footer />
    </div>
  );
}
