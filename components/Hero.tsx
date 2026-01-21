'use client';

import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 hover:scale-105"
        style={{ 
          backgroundImage: 'url("https://media.apts247.info/06/06755046d1d74c5db93814f5db989cb1/hero_shot/community/0O7A1295.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-white text-sm md:text-base uppercase tracking-[0.3em] mb-4 animate-fade-in">
          Pet-Friendly Living in Houston, TX
        </h2>
        <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-serif mb-8 max-w-5xl leading-tight">
          Crescent Place <br />
          <span className="italic text-4xl md:text-6xl block mt-2">Apartments</span>
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button className="bg-white text-slate-900 px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-slate-100 transition-colors">
            View Floor Plans
          </button>
          <button className="border-2 border-white text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all">
            Schedule a Tour
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/60 text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
