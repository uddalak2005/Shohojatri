import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/global/Navbar';
import Footer from '../components/global/Footer';
import Loader from '../components/global/Loader';
import { client, urlFor } from '../utils/sanity';
import { PortableText } from '@portabletext/react';
import RibbonIcon from '../components/global/RibbonIcon';

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const query = `*[_type == "blogPost" && slug.current == $slug][0]`;
        const data = await client.fetch(query, { slug });
        setPost(data);
      } catch (error) {
        console.error("Error fetching blog post:", error);
      }
      setLoading(false);
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  if (loading) return <Loader />;

  if (!post) {
    return (
      <div className="bg-background font-body min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex flex-col items-center justify-center pt-[72px]">
          <h1 className="text-4xl serif-italic text-[#2e6a4f] mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-[#C25E7A] hover:underline font-label uppercase tracking-widest text-sm">
            ← Back to Blog
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const portableTextComponents = {
    types: {
      image: ({ value }) => {
        if (!value?.asset?._ref) {
          return null;
        }
        return (
          <img
            alt={value.alt || ' '}
            loading="lazy"
            src={urlFor(value).url()}
            className="w-full h-auto rounded-xl my-8 object-cover"
          />
        );
      }
    },
    marks: {
      link: ({children, value}) => {
        const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
        return (
          <a href={value.href} rel={rel} className="text-[#C25E7A] underline decoration-[#C25E7A]/30 hover:decoration-[#C25E7A] transition-all">
            {children}
          </a>
        );
      },
    },
    block: {
      h1: ({children}) => <h1 className="text-4xl serif-italic text-[#2e6a4f] mt-12 mb-6">{children}</h1>,
      h2: ({children}) => <h2 className="text-3xl serif-italic text-[#2e6a4f] mt-10 mb-5">{children}</h2>,
      h3: ({children}) => <h3 className="text-2xl serif-italic text-[#2e6a4f] mt-8 mb-4">{children}</h3>,
      h4: ({children}) => <h4 className="text-xl serif-italic text-[#2e6a4f] mt-6 mb-3">{children}</h4>,
      normal: ({children}) => <p className="text-[#3a3a3a] leading-[1.8] font-light text-[16px] mb-6">{children}</p>,
      blockquote: ({children}) => (
        <blockquote className="border-l-4 border-[#9ae600] pl-6 py-2 my-8 text-xl serif-italic text-[#2e6a4f]/80 bg-[#f8fdf8] rounded-r-lg">
          {children}
        </blockquote>
      )
    },
    list: {
      bullet: ({children}) => <ul className="list-disc pl-6 mb-6 space-y-2 text-[#3a3a3a] font-light">{children}</ul>,
      number: ({children}) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-[#3a3a3a] font-light">{children}</ol>
    },
    listItem: {
      bullet: ({children}) => <li>{children}</li>,
      number: ({children}) => <li>{children}</li>
    }
  };

  return (
    <div className="bg-background font-body min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-[72px]">
        {/* Post Hero */}
        <article>
          <header className="px-6 py-16 md:py-24 max-w-4xl mx-auto text-center">
            <span className="inline-block text-[#9ae600] text-xs font-label uppercase tracking-widest mb-6">
              {post.category}
            </span>
            <h1 className="apple-garamond italic text-4xl md:text-5xl lg:text-6xl text-[#113424] leading-tight mb-8">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-center gap-4 font-label text-xs uppercase tracking-widest text-[#888888]">
              {post.date && (
                <>
                  <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C25E7A]"></span>
                </>
              )}
              <span>{post.author}</span>
            </div>
          </header>

          {/* Featured Image */}
          {post.image && (
            <div className="px-6 max-w-[1280px] mx-auto mb-16 md:mb-24">
              <div className="w-full aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl relative">
                <img 
                  src={urlFor(post.image).url()} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          {/* Post Content */}
          <div className="px-6 pb-24 max-w-3xl mx-auto">
            {post.content ? (
              <div className="prose-container">
                <PortableText 
                  value={post.content} 
                  components={portableTextComponents} 
                />
              </div>
            ) : (
              <p className="text-[#3a3a3a] leading-[1.8] font-light text-[16px] mb-6">
                {post.excerpt}
              </p>
            )}

            {/* End Mark */}
            <div className="flex justify-center mt-20 opacity-30">
              <RibbonIcon size="sm" color="#2e6a4f" />
            </div>

            {/* Back Button */}
            <div className="mt-16 border-t border-[#2e6a4f]/10 pt-8 text-center">
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-2 text-[#2e6a4f] hover:text-[#C25E7A] font-label text-xs uppercase tracking-widest transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                Back to all articles
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
