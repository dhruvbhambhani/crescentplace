'use client';

import React, { useState } from 'react';
import { Bed, Bath, Square, ArrowRight } from 'lucide-react';

const floorPlans = [
  {
    id: 1,
    name: "Plan A (1x1)",
    type: "1 Bedroom",
    beds: 1,
    baths: 1,
    sqft: 652,
    price: "800",
    image: "/floorplans/1 Bed 1 Bath A.jpg",
    description: "A smart, efficient layout with everything you need"
  },
  {
    id: 2,
    name: "Plan B (1x1)",
    type: "1 Bedroom",
    beds: 1,
    baths: 1,
    sqft: 740,
    price: "900",
    image: "/floorplans/1 Bed 1 Bath B.jpg",
    description: "Extra breathing room with a dedicated dining space and generous storage"
  },
  {
    id: 3,
    name: "Plan A (2x2)",
    type: "2 Bedrooms",
    beds: 2,
    baths: 2,
    sqft: 910,
    price: "1,100",
    image: "/floorplans/2 Bed 2 Bath A.jpg",
    description: "Two bedrooms. Two full baths. Zero compromises"
  },
  {
    id: 4,
    name: "Plan B (2x2)",
    type: "2 Bedrooms",
    beds: 2,
    baths: 2,
    sqft: 1030,
    price: "1,200",
    image: "/floorplans/2 Bed 2 Bath B.jpg",
    description: "Our most spacious layout yet perfect for those who value comfort"
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
                className={`px-8 py-2 text-sm font-bold uppercase tracking-widest transition-all border-b-2 ${filter === cat
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
              <div className="flex flex-col lg:flex-row h-full">
                <div className="relative overflow-hidden bg-slate-100 flex items-center justify-center w-full lg:w-[300px] h-[300px] flex-shrink-0">
                  <img
                    src={plan.image}
                    alt={plan.name}
                    className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex-1 p-8 flex flex-col justify-between">
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
                  <p className="text-center text-xs text-slate-400 uppercase tracking-widest py-3 border-t border-slate-100">
                    Contact Leasing Office for Availability
                  </p>
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
