import React, { useState, useEffect } from 'react';
import Navbar from '../components/global/Navbar';
import GalleryHero from '../components/gallery/GalleryHero';
import GalleryGrid from '../components/gallery/GalleryGrid';
import Footer from '../components/global/Footer';
import Loader from '../components/global/Loader';
import { client } from '../utils/sanity';

export default function Gallery() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = `*[_type == "galleryItem"] | order(_createdAt desc)`;
        const data = await client.fetch(query);
        setItems(data);
      } catch (error) {
        console.error("Error fetching gallery items:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const currentItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-background font-body">
      <Navbar />
      <main className="pt-[72px]">
        <GalleryHero />
        <GalleryGrid 
          items={currentItems} 
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

