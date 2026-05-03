import React, { useState, useEffect } from 'react';
import Navbar from '../components/global/Navbar';
import BlogHero from '../components/blog/BlogHero';
import BlogGrid from '../components/blog/BlogGrid';
import Footer from '../components/global/Footer';
import { client } from '../utils/sanity';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = `*[_type == "blogPost"] | order(date desc)`;
        const data = await client.fetch(query);
        setPosts(data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-[#f8fdf8] font-body">
      <Navbar />
      <main className="pt-[72px]">
        <BlogHero />
        <BlogGrid posts={posts} loading={loading} />
      </main>
      <Footer />
    </div>
  );
}
