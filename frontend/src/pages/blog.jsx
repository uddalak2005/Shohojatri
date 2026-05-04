import React, { useState, useEffect } from 'react';
import Navbar from '../components/global/Navbar';
import BlogHero from '../components/blog/BlogHero';
import BlogGrid from '../components/blog/BlogGrid';
import Footer from '../components/global/Footer';
import Loader from '../components/global/Loader';
import { client } from '../utils/sanity';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

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

  const totalPages = Math.ceil(posts.length / itemsPerPage);
  const currentItems = posts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-[#f8fdf8] font-body">
      <Navbar />
      <main className="pt-[72px]">
        <BlogHero />
        <BlogGrid 
          posts={currentItems} 
          loading={loading} 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </main>
      <Footer />
    </div>
  );
}
