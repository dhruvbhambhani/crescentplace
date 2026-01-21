'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Floor Plans', href: '#floorplans' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Neighborhood', href: '#neighborhood' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link href="/" className={`text-2xl font-serif font-bold tracking-tighter ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              CRESCENT PLACE APARTMENTS
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
              className={`flex items-center gap-2 px-4 py-2 rounded-sm border transition-all ${
                isScrolled 
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
  );
};

export default Navbar;
