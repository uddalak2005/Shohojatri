import React from 'react';
import Navbar from '../components/global/Navbar';
import BlogHero from '../components/blog/BlogHero';
import BlogGrid from '../components/blog/BlogGrid';
import Footer from '../components/global/Footer';

export default function Blog() {
  return (
    <div className="bg-[#f8fdf8] font-body">
      <Navbar />
      <main className="pt-[72px]">
        <BlogHero />
        <BlogGrid />
      </main>
      <Footer />
    </div>
  );
}
