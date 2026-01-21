'use client';

import React, { useState } from 'react';
import { Bed, Bath, Square, ArrowRight } from 'lucide-react';

const floorPlans = [
  {
    id: 1,
    name: "The Sterling",
    type: "1 Bedroom",
    beds: 1,
    baths: 1,
    sqft: 750,
    price: "1,850",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
    description: "A spacious one-bedroom layout featuring an open-concept kitchen and private balcony."
  },
  {
    id: 2,
    name: "The Meridian",
    type: "1 Bedroom",
    beds: 1,
    baths: 1,
    sqft: 825,
    price: "2,100",
    image: "https://images.unsplash.com/photo-1630699144867-37acec97df5a?q=80&w=800&auto=format&fit=crop",
    description: "Enhanced living space with a dedicated home office nook and walk-in closet."
  },
  {
    id: 3,
    name: "The Crescent",
    type: "2 Bedrooms",
    beds: 2,
    baths: 2,
    sqft: 1150,
    price: "2,850",
    image: "https://images.unsplash.com/photo-1600607687940-467f5b637a61?q=80&w=800&auto=format&fit=crop",
    description: "Our signature two-bedroom suite with dual master baths and premium finishes."
  },
  {
    id: 4,
    name: "The Skyline",
    type: "2 Bedrooms",
    beds: 2,
    baths: 2,
    sqft: 1280,
    price: "3,200",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=800&auto=format&fit=crop",
    description: "Expansive corner unit with floor-to-ceiling windows and panoramic city views."
  }
];

const FloorPlanBrowser = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', '1 Bedroom', '2 Bedrooms'];

  const filteredPlans = filter === 'All' 
    ? floorPlans 
    : floorPlans.filter(plan => plan.type === filter);

  return (
    <section id="floorplans" className="py-24 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h3 className="text-slate-500 text-sm uppercase tracking-[0.2em] font-semibold">
            Floor Plans
          </h3>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900">
            Find Your Perfect Space
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-2 text-sm font-bold uppercase tracking-widest transition-all border-b-2 ${
                  filter === cat 
                  ? 'border-slate-900 text-slate-900' 
                  : 'border-transparent text-slate-400 hover:text-slate-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPlans.map((plan) => (
            <div key={plan.id} className="bg-white group overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-5 h-full">
                <div className="lg:col-span-2 relative overflow-hidden">
                  <img 
                    src={plan.image} 
                    alt={plan.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                    {plan.type}
                  </div>
                </div>
                
                <div className="lg:col-span-3 p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-2xl font-serif text-slate-900">{plan.name}</h4>
                      <div className="text-right">
                        <p className="text-xs text-slate-400 uppercase tracking-tighter">Starting at</p>
                        <p className="text-xl font-serif text-slate-900">${plan.price}</p>
                      </div>
                    </div>
                    
                    <p className="text-slate-500 text-sm mb-6 line-clamp-2">
                      {plan.description}
                    </p>

                    <div className="grid grid-cols-3 gap-4 py-4 border-y border-slate-100 mb-6">
                      <div className="flex flex-col items-center gap-1">
                        <Bed size={18} className="text-slate-400" />
                        <span className="text-xs font-bold text-slate-700">{plan.beds} Bed</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <Bath size={18} className="text-slate-400" />
                        <span className="text-xs font-bold text-slate-700">{plan.baths} Bath</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <Square size={18} className="text-slate-400" />
                        <span className="text-xs font-bold text-slate-700">{plan.sqft} Sq.Ft.</span>
                      </div>
                    </div>
                  </div>

                  <button className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-3 text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors">
                    Check Availability
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-400 text-sm italic">
            * Pricing and availability are subject to change. Square footage is approximate.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FloorPlanBrowser;
