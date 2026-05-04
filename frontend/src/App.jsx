import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/index.jsx';
import Achintya from './pages/achintya.jsx';
import Gallery from './pages/gallery.jsx';
import Blog from './pages/blog.jsx';
import BlogPost from './pages/BlogPost.jsx';
import Contact from './pages/contact.jsx';
import ScrollToTop from './components/global/ScrollToTop.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/achintya" element={<Achintya />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
