'use client';

import React from 'react';
import { MapPin, ShoppingBag, Coffee, Utensils, TreePine } from 'lucide-react';

const locations = [
  { name: "South Gessner Road", distance: "Immediate", icon: <MapPin size={20} /> },
  { name: "Beltway 8", distance: "1.5 Miles", icon: <MapPin size={20} /> },
  { name: "Houston Baptist University", distance: "3.2 Miles", icon: <MapPin size={20} /> },
  { name: "Sugar Land", distance: "15 Minutes", icon: <MapPin size={20} /> },
  { name: "Medical Center", distance: "20 Minutes", icon: <MapPin size={20} /> },
];

const Neighborhood = () => {
  return (
    <section id="neighborhood" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-square bg-slate-100 relative overflow-hidden">
              {/* Placeholder for a map or neighborhood image */}
              <img 
                src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1200&auto=format&fit=crop" 
                alt="Houston Neighborhood" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-6 shadow-2xl text-center max-w-xs">
                  <MapPin className="mx-auto mb-4 text-slate-900" size={32} />
                  <h4 className="text-xl font-serif mb-2">10222 S Gessner Rd</h4>
                  <p className="text-sm text-slate-500">Houston, TX 77071</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <h3 className="text-slate-500 text-sm uppercase tracking-[0.2em] font-semibold">
                The Location
              </h3>
              <h2 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight">
                Everything You Need, <br />Right Outside Your Door
              </h2>
            </div>
            
            <p className="text-slate-600 text-lg">
              Crescent Place puts you at the center of it all. Enjoy easy access to Houston's premier 
              shopping, dining, and entertainment destinations, while being just minutes away from 
              major employment hubs and beautiful green spaces.
            </p>

            <div className="space-y-4">
              {locations.map((loc, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-slate-100">
                  <div className="flex items-center gap-4">
                    <span className="text-slate-400">{loc.icon}</span>
                    <span className="font-medium text-slate-800">{loc.name}</span>
                  </div>
                  <span className="text-sm text-slate-400 uppercase tracking-widest">{loc.distance}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Neighborhood;
