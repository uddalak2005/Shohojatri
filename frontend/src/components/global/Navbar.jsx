import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import RibbonIcon from './RibbonIcon';
import Button from './Button';
import Shohojatri from '../../assets/shohojatri.png'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/achintya', label: 'Achintya' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className="fixed top-0 w-full z-[100] transition-all duration-400 h-[72px] bg-[#f8fdf8]/50 backdrop-blur-[20px] border-b border-[#2e6a4f]/10 shadow-[0_4px_24px_rgba(46,106,79,0.06)]"
      >
        <div className="flex justify-between items-center px-8 lg:px-10 max-w-[1280px] mx-auto w-full h-full">

          {/* ── Logo ── */}
          <NavLink to="/" className="group flex items-center gap-3 no-underline">
            <img
              src={Shohojatri}
              alt="Shohojatri logo"
              className='w-12 h-12'
              loading="eager"
              decoding="async"
            />
            <div className="flex flex-col leading-none">
              <span
                className="text-[20px] font-semibold text-[#2e6a4f] tracking-[0.08em] uppercase leading-none"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                SHOHOJATRI
              </span>
              <span
                className="text-[9px] uppercase tracking-[0.18em] text-[#C25E7A] mt-[4px]"
                style={{ fontFamily: 'var(--font-body)', fontWeight: 400 }}
              >
                Journey of Togetherness
              </span>
            </div>
          </NavLink>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `relative py-1 text-[13px] uppercase tracking-[0.08em]
                   transition-colors duration-250 no-underline
                   ${isActive
                    ? 'text-[#C25E7A]'
                    : 'text-[#2e6a4f] hover:text-[#C25E7A]'
                  }`
                }
                style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
              >
                {({ isActive }) => (
                  <>
                    {label}
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-[#9ae600]
                        transition-all duration-300
                        ${isActive ? 'w-full' : 'w-0'}`}
                    />
                  </>
                )}
              </NavLink>
            ))}

            <Button
              variant="primary"
              href="/contact"
              className="px-6 py-[10px] text-[13px]"
            >
              Walk With Us →
            </Button>
          </div>

          {/* ── Hamburger (mobile + tablet, below lg) ── */}
          <button
            className="lg:hidden text-[#2e6a4f] p-2 z-[110] relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 6L18 18M6 18L18 6"
                  stroke="#f8fdf8"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 7H20M4 12H20M4 17H20"
                  stroke="#2e6a4f"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>

        </div>
      </nav>

      {/* ── Mobile / Tablet Overlay Menu (below lg) ── */}
      <div
        className={`
          fixed inset-0 z-[99] flex flex-col items-center justify-center
          gap-6 overflow-hidden lg:hidden
          transition-all duration-500
          ${isMobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-full pointer-events-none'
          }
        `}
        style={{ backgroundColor: '#2e6a4f' }}
      >

        {/* Decorative ribbon watermark — bottom right */}
        <div
          className="absolute pointer-events-none select-none opacity-[0.06]"
          style={{ right: '-20px', bottom: '-40px' }}
        >
          <RibbonIcon size="lg" color="#ffffff" />
        </div>

        {/* Founder credit — top center */}
        <p
          className="absolute top-8 text-white/30 text-[11px] tracking-[0.12em] italic"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          A Debangana Bhattacharya Initiative
        </p>

        {/* Nav Links */}
        {navLinks.map(({ to, label }, index) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `no-underline transition-all duration-300
               ${isActive ? 'text-[#9ae600]' : 'text-white hover:text-[#C25E7A]'}`
            }
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 'clamp(28px, 5vw, 40px)',
              // Staggered entrance per link
              transitionDelay: isMobileMenuOpen
                ? `${index * 70}ms`
                : '0ms',
              transform: isMobileMenuOpen
                ? 'translateY(0)'
                : 'translateY(20px)',
              opacity: isMobileMenuOpen ? 1 : 0,
            }}
          >
            {label}
          </NavLink>
        ))}

        {/* CTA — white bordered pill, styled for dark bg */}
        <div
          style={{
            marginTop: '16px',
            transition: 'all 0.3s ease',
            transitionDelay: isMobileMenuOpen
              ? `${navLinks.length * 70}ms`
              : '0ms',
            transform: isMobileMenuOpen
              ? 'translateY(0)'
              : 'translateY(20px)',
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
        >
          <NavLink
            to="/contact"
            className="inline-block px-8 py-3 rounded-full border-[1.5px]
              border-white text-white no-underline
              transition-all duration-300
              hover:bg-white hover:text-[#2e6a4f]"
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              fontSize: '14px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Walk With Us →
          </NavLink>
        </div>

      </div>
    </>
  );
};

export default Navbar;