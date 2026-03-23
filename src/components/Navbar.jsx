import { NavLink } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/achintya', label: 'Achintya' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <nav className="h-[72px] fixed top-0 w-full z-[100] bg-[#fbf9f8]/80 backdrop-blur-md border-b border-[#2e6a4f]/10 shadow-sm">
      <div className="flex justify-between items-center px-8 max-w-[1280px] mx-auto w-full h-full">
        <NavLink to="/" className="font-serif text-[20px] font-bold text-[#2e6a4f] tracking-tight uppercase leading-none">
          SHOHOJATRI
        </NavLink>
        <div className="hidden md:flex gap-8 font-serif text-[13px] tracking-tight">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                isActive
                  ? 'text-[#7e2844] border-b-2 border-[#9ae600] pb-1 transition-colors duration-300'
                  : 'text-[#2e6a4f] hover:text-[#7e2844] transition-colors duration-300'
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
        <NavLink
          to="/contact"
          className="bg-[#115238] text-white px-6 py-2 rounded-full font-label text-sm tracking-wide scale-95 active:scale-90 transition-transform hover:shadow-lg hover:shadow-secondary/20"
        >
          Walk With Us →
        </NavLink>
      </div>
    </nav>
  );
}
