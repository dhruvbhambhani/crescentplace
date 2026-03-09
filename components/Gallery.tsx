'use client';

import React, { useState } from 'react';

const galleryImages = [
  { id: 1, category: 'Exteriors', url: '/picas/2.jpg', title: 'Community Entrance' },
  { id: 2, category: 'Exteriors', url: '/picas/6.jpg', title: 'Community Grounds' },
  { id: 3, category: 'Exteriors', url: '/picas/4.jpg', title: 'Building Exterior' },
  { id: 4, category: 'Amenities', url: '/picas/8.jpg', title: 'Private Balconies' },
  { id: 5, category: 'Amenities', url: '/picas/13.jpg', title: 'Tennis Court' },
  { id: 6, category: 'Amenities', url: '/picas/5.jpg', title: 'Resort-Style Pool' },
  { id: 7, category: 'Interiors', url: '/picas/download (23).jpg', title: 'Gourmet Kitchen' },
  { id: 8, category: 'Interiors', url: '/picas/54.jpg', title: 'Living Room with Fireplace' },
  { id: 9, category: 'Interiors', url: '/picas/59.jpg', title: 'Master Bedroom' },
  
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Interiors', 'Exteriors', 'Amenities'];

  const filteredImages = activeFilter === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <section id="gallery" className="py-24 px-4 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="space-y-4">
            <h3 className="text-slate-400 text-sm uppercase tracking-[0.2em] font-semibold">
              Visual Tour
            </h3>
            <h2 className="text-4xl md:text-5xl font-serif">
              Picture Yourself Here
            </h2>
          </div>

          <div className="flex flex-wrap gap-6">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`text-xs font-bold uppercase tracking-widest transition-all pb-1 border-b-2 ${activeFilter === filter
                  ? 'border-white text-white'
                  : 'border-transparent text-slate-500 hover:text-slate-300'
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="relative aspect-[4/3] overflow-hidden group cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-xs uppercase tracking-[0.2em] mb-2">{image.category}</p>
                  <h4 className="text-xl font-serif">{image.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
