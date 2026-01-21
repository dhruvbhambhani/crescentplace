'use client';

import React from 'react';

const CommunityOverview = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-slate-500 text-sm uppercase tracking-[0.2em] font-semibold">
                The Community
              </h3>
              <h2 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight">
                Experience Elevated Living in the Heart of Houston
              </h2>
            </div>
            
            <p className="text-slate-600 text-lg leading-relaxed">
              Crescent Place is a pet-friendly community located in Houston, Texas. 
              Our one and two bedroom apartments for rent feature balconies or patios, 
              walk-in closets, and all-electric kitchens. Experience a community 
              designed for comfort and convenience.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <h4 className="text-3xl font-serif text-slate-900">Gated</h4>
                <p className="text-slate-500 text-sm uppercase tracking-wider">Controlled Access</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif text-slate-900">Tennis</h4>
                <p className="text-slate-500 text-sm uppercase tracking-wider">On-site Court</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif text-slate-900">Pool</h4>
                <p className="text-slate-500 text-sm uppercase tracking-wider">Sparkling Water</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif text-slate-900">Laundry</h4>
                <p className="text-slate-500 text-sm uppercase tracking-wider">On-site Facility</p>
              </div>
            </div>

            <button className="text-slate-900 font-bold uppercase tracking-widest text-sm border-b-2 border-slate-900 pb-1 hover:opacity-70 transition-opacity">
              Learn More About Us
            </button>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop" 
                alt="Luxury Apartment Interior" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-slate-100 -z-10 hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityOverview;
