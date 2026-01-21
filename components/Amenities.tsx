'use client';

import React from 'react';
import { Waves, ShieldCheck, Zap, Dog, Target, Settings } from 'lucide-react';

const amenities = [
  {
    icon: <Waves size={32} />,
    title: "Swimming Pool",
    description: "Relax and unwind in our sparkling community swimming pool."
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Gated Access",
    description: "Enjoy peace of mind with our controlled gated community access."
  },
  {
    icon: <Target size={32} />,
    title: "Tennis Court",
    description: "Stay active with our on-site tennis court available for residents."
  },
  {
    icon: <Dog size={32} />,
    title: "Pet Friendly",
    description: "We welcome your furry friends to our pet-friendly community."
  },
  {
    icon: <Zap size={32} />,
    title: "All-Electric Kitchens",
    description: "Modern kitchens featuring dishwashers, refrigerators, and microwaves."
  },
  {
    icon: <Settings size={32} />,
    title: "On-Call Maintenance",
    description: "Dedicated maintenance team ready to assist you when needed."
  }
];

const Amenities = () => {
  return (
    <section id="amenities" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:sticky lg:top-32 space-y-6">
            <h3 className="text-slate-500 text-sm uppercase tracking-[0.2em] font-semibold">
              The Lifestyle
            </h3>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight">
              Amenities Designed for Your Comfort
            </h2>
            <p className="text-slate-600 text-lg">
              At Crescent Place, we've curated a collection of amenities that cater to your every need, 
              whether you're looking to relax, stay active, or connect with neighbors.
            </p>
            <button className="bg-slate-900 text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors">
              Explore All Features
            </button>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {amenities.map((item, index) => (
              <div key={index} className="p-8 border border-slate-100 hover:border-slate-300 transition-colors group">
                <div className="text-slate-400 group-hover:text-slate-900 transition-colors mb-6">
                  {item.icon}
                </div>
                <h4 className="text-xl font-serif text-slate-900 mb-3">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
