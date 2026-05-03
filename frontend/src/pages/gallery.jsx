import React, { useState, useEffect, useMemo } from 'react';
import Navbar from '../components/global/Navbar';
import GalleryHero from '../components/gallery/GalleryHero';
import GalleryFilters from '../components/gallery/GalleryFilters';
import GalleryGrid from '../components/gallery/GalleryGrid';
import Footer from '../components/global/Footer';
import { client } from '../utils/sanity';

export default function Gallery() {
  const [items, setItems] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
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

  const tags = useMemo(() => {
    const allTags = items.flatMap(item => item.tags || (item.tag ? [item.tag] : []));
    return ['All', ...new Set(allTags)];
  }, [items]);

  const filteredItems = useMemo(() => {
    if (activeFilter === 'All') return items;
    return items.filter(item => {
      const itemTags = item.tags || (item.tag ? [item.tag] : []);
      return itemTags.some(t => t.toLowerCase() === activeFilter.toLowerCase());
    });
  }, [items, activeFilter]);

  // Reset to first page when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const currentItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-background font-body">
      <Navbar />
      <main className="pt-[72px]">
        <GalleryHero />
        <GalleryFilters 
          tags={tags}
          activeFilter={activeFilter} 
          onFilterChange={setActiveFilter} 
        />
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
