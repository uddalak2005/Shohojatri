import React, { useState } from 'react';
import Navbar from '../components/global/Navbar';
import GalleryHero from '../components/gallery/GalleryHero';
import GalleryFilters from '../components/gallery/GalleryFilters';
import GalleryGrid from '../components/gallery/GalleryGrid';
import Footer from '../components/global/Footer';
import { galleryItems } from '../data/galleryItems';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.tag.toLowerCase() === activeFilter.toLowerCase());

  return (
    <div className="bg-background font-body">
      <Navbar />
      <main className="pt-[72px]">
        <GalleryHero />
        <GalleryFilters 
          activeFilter={activeFilter} 
          onFilterChange={setActiveFilter} 
        />
        <GalleryGrid items={filteredItems} />
      </main>
      <Footer />
    </div>
  );
}
