import React from 'react';
import Card from '../global/Card';
import Button from '../global/Button';
import { blogPosts } from '../../data/blogPosts';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const BlogGrid = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section className="px-12 py-24 max-w-[1280px] mx-auto">
      <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 animate">
        {blogPosts.map((post) => (
          <article key={post.id} className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-[#2e6a4f]/5">
            <div className="aspect-video relative overflow-hidden">
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                src={post.image} 
                alt={post.title}
                loading="lazy"
                decoding="async"
              />
              <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#2e6a4f]">
                {post.category}
              </span>
            </div>
            
            <div className="p-8 flex flex-col flex-grow space-y-4">
              <div className="flex items-center gap-3 font-label text-[10px] uppercase tracking-widest text-[#888888]">
                <span>{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-[#C25E7A]"></span>
                <span>{post.author}</span>
              </div>
              
              <h3 className="serif-italic text-2xl text-[#2e6a4f] leading-tight group-hover:text-[#C25E7A] transition-colors">
                {post.title}
              </h3>
              
              <p className="font-label font-light text-sm text-[#3a3a3a] leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="pt-4 mt-auto">
                <Button variant="text" href={`/blog/${post.slug}`} className="text-[#C25E7A]">
                  Read More →
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogGrid;
