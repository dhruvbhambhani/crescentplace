'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-serif font-bold tracking-tighter text-slate-900">
              CRESCENT PLACE
            </Link>
            <p className="mt-6 text-slate-500 text-sm leading-relaxed">
              10222 S Gessner Road<br />
              Houston, TX 77071<br />
              713-270-4085
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="#floorplans" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Floor Plans</Link></li>
              <li><Link href="#amenities" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Amenities</Link></li>
              <li><Link href="#gallery" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Gallery</Link></li>
              <li><Link href="#neighborhood" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Neighborhood</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><span className="text-sm text-slate-500">Privacy Policy</span></li>
              <li><span className="text-sm text-slate-500">Terms of Service</span></li>
              <li><span className="text-sm text-slate-500">Fair Housing</span></li>
              <li><span className="text-sm text-slate-500">Accessibility</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-6">Newsletter</h4>
            <p className="text-sm text-slate-500 mb-4">Stay updated with our latest news and offers.</p>
            <div className="flex">
              <input type="email" placeholder="Email Address" className="bg-slate-50 border-none py-2 px-4 text-sm w-full focus:ring-1 focus:ring-slate-900 outline-none" />
              <button className="bg-slate-900 text-white px-4 py-2 text-xs font-bold uppercase tracking-widest">Join</button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Crescent Place Apartments. All rights reserved.
          </p>
          <div className="flex gap-8">
            <span className="text-xs text-slate-400 uppercase tracking-widest cursor-pointer hover:text-slate-900">Instagram</span>
            <span className="text-xs text-slate-400 uppercase tracking-widest cursor-pointer hover:text-slate-900">Facebook</span>
            <span className="text-xs text-slate-400 uppercase tracking-widest cursor-pointer hover:text-slate-900">LinkedIn</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
