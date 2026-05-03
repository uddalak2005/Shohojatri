import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../../data/blogPosts';
import SectionHeader from '../global/SectionHeader';
import Card from '../global/Card';
import Button from '../global/Button';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { urlFor } from '../../utils/sanity';

const BlogPreview = ({ data }) => {
  const sectionRef = useScrollAnimation();
  
  if (!data || data.length === 0) {
    return null;
  }

  const displayPosts = data;

  const getPhotoUrl = (photo) => {
    if (!photo) return '';
    if (typeof photo === 'string') return photo;
    if (photo.asset) return urlFor(photo).url();
    return '';
  };

  return (
    <section className="py-24 px-8 max-w-[1280px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16">
        <SectionHeader 
          label="From Our Blog"
          titleLine1="Words That"
          titleLine2="Heal"
          italic={2}
        />
        <Button variant="text" href="/blog" className="pb-1">
          View All Posts
        </Button>
      </div>

      <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-3 gap-10 animate">
        {displayPosts.map((post) => (
          <article key={post._id || post.id} className="space-y-6 group cursor-pointer">
            <Card className="aspect-[4/3] relative overflow-hidden bg-gray-100" hover={true}>
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                src={getPhotoUrl(post.image)} 
                alt={post.title}
                loading="lazy"
                decoding="async"
              />
              <span className="absolute top-4 left-4 bg-[#9ae600]/90 text-[#115238] px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold">
                {post.category}
              </span>
            </Card>
            <h3 className="serif-italic text-2xl text-[#2e6a4f] leading-tight group-hover:text-[#C25E7A] transition-colors">
              {post.title}
            </h3>
            <Button variant="text" href={`/blog/${post.slug?.current || post.slug}`} className="text-[#C25E7A]">
              Read More →
            </Button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogPreview;
