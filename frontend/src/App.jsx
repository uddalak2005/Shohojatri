import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import ScrollToTop from './components/global/ScrollToTop.jsx';
import Loader from './components/global/Loader.jsx';

// Code-splitting routes
const Home = lazy(() => import('./pages/index.jsx'));
const Achintya = lazy(() => import('./pages/achintya.jsx'));
const Gallery = lazy(() => import('./pages/gallery.jsx'));
const Blog = lazy(() => import('./pages/blog.jsx'));
const BlogPost = lazy(() => import('./pages/BlogPost.jsx'));
const Contact = lazy(() => import('./pages/contact.jsx'));

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/achintya" element={<Achintya />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      <Analytics />
    </BrowserRouter>
  );
}
