'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Floor Plans', href: '/floorplans' },
    { name: 'Amenities', href: '/amenities' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Neighborhood', href: '/neighborhood' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Announcement Banner */}
      <div
        className="fixed top-0 left-0 right-0 z-[60] overflow-hidden transition-all duration-300 ease-in-out"
        style={{ height: bannerVisible ? '40px' : '0px' }}
      >
        <div className="h-10 bg-slate-900 border-b border-white/10 flex items-center justify-center px-10 relative">
          <p className="text-center text-[11px] uppercase tracking-widest leading-none text-white/80">
            <span className="hidden sm:inline">
              1 Bed · 1 Bath from{' '}
              <span className="text-amber-300 font-bold">$700/mo</span>
              {' '}· Pet Friendly · Pool · W/D Hookups
              <span className="text-white/30 mx-3">|</span>
            </span>
            <span className="sm:hidden">
              1 Bed from{' '}
              <span className="text-amber-300 font-bold">$700/mo</span>
              <span className="text-white/30 mx-2">·</span>
            </span>
            1 Hab · 1 Baño desde{' '}
            <span className="text-amber-300 font-bold">$700/mes</span>
            <span className="text-white/30 mx-2 hidden sm:inline">·</span>
            <Link
              href="/contact"
              className="hidden sm:inline underline underline-offset-2 text-white/60 hover:text-white transition-colors ml-1"
            >
              Tour Today
            </Link>
          </p>
          <button
            onClick={() => setBannerVisible(false)}
            aria-label="Dismiss"
            className="absolute right-4 text-white/40 hover:text-white transition-colors"
          >
            <X size={14} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Navbar — shifts down when banner is open */}
      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
        style={{ top: bannerVisible ? '40px' : '0px' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0">
              <Link href="/" className={`text-2xl font-serif font-bold tracking-tighter leading-none ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                CRESCENT PLACE
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium uppercase tracking-widest hover:opacity-70 transition-opacity ${isScrolled ? 'text-slate-700' : 'text-white'}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="tel:713-270-4085"
                className={`flex items-center gap-2 px-4 py-2 rounded-sm border transition-all ${isScrolled
                  ? 'border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white'
                  : 'border-white text-white hover:bg-white hover:text-slate-900'
                  }`}
              >
                <Phone size={16} />
                <span className="text-sm font-bold">713-270-4085</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`${isScrolled ? 'text-slate-900' : 'text-white'}`}
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-xl py-4 px-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-800 text-lg font-medium border-b border-slate-100 pb-2"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="tel:713-270-4085"
              className="bg-slate-900 text-white text-center py-3 rounded-sm font-bold"
            >
              713-270-4085
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
