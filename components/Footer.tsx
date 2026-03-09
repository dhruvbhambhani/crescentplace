'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-serif font-bold tracking-tighter text-slate-900">
              CRESCENT PLACE
            </Link>
            <a href="https://maps.app.goo.gl/9rkX5NbKxdZWn7om8" target="_blank" rel="noopener noreferrer" className="mt-6 block text-slate-500 text-sm leading-relaxed hover:text-slate-900 transition-colors">
              10222 S Gessner Road<br />
              Houston, TX 77071
            </a>
            <p className="mt-2 text-slate-500 text-sm">713-270-4085</p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Home</Link></li>
              <li><Link href="/floorplans" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Floor Plans</Link></li>
              <li><Link href="/amenities" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Amenities</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-6">Connect</h4>
            <ul className="space-y-4">
              <li><Link href="/gallery" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Gallery</Link></li>
              <li><Link href="/neighborhood" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Neighborhood</Link></li>
              <li><Link href="/contact" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-100 flex justify-center items-center">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Crescent Place Apartments. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
