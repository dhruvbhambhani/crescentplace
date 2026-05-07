'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

const PromoPopup = () => {
  const [visible, setVisible] = useState(false);
  const [animIn, setAnimIn] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(true);
      requestAnimationFrame(() => setTimeout(() => setAnimIn(true), 10));
    }, 1800);
    return () => clearTimeout(t);
  }, []);

  const dismiss = () => {
    setAnimIn(false);
    setTimeout(() => setVisible(false), 350);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{
        background: animIn ? 'rgba(0,0,0,0.52)' : 'rgba(0,0,0,0)',
        backdropFilter: animIn ? 'blur(4px)' : 'blur(0px)',
        transition: 'background 0.35s ease, backdrop-filter 0.35s ease',
      }}
      onClick={(e) => { if (e.target === e.currentTarget) dismiss(); }}
    >
      <div
        style={{
          opacity: animIn ? 1 : 0,
          transform: animIn ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.97)',
          transition: 'opacity 0.35s ease, transform 0.35s ease',
        }}
        className="relative w-full max-w-sm bg-slate-950/85 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden"
      >
        {/* Subtle top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/25 to-transparent" />

        {/* Close */}
        <button
          onClick={dismiss}
          aria-label="Close"
          className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors z-10"
        >
          <X size={18} strokeWidth={1.5} />
        </button>

        <div className="px-8 py-10 text-center">
          {/* ── ENGLISH ── */}
          <p className="text-white/70 text-[10px] uppercase tracking-[0.35em] mb-5">
            Limited Time Offer
          </p>

          <p className="text-white/80 text-[11px] uppercase tracking-[0.25em] mb-0">Up to</p>

          <div className="flex items-baseline justify-center gap-3 leading-none mb-0">
            <span
              className="font-serif text-white leading-none"
              style={{ fontSize: '6rem', fontWeight: 700, lineHeight: 0.85 }}
            >
              1
            </span>
            <div className="flex flex-col items-start">
              <span className="text-white text-2xl font-light tracking-[0.2em] uppercase">Month</span>
              <span className="text-white text-3xl font-serif italic tracking-wide" style={{ lineHeight: 1 }}>
                Free!
              </span>
            </div>
          </div>

          <p className="text-white/55 text-[10px] mt-3 tracking-wide">
            Offer available for qualified applicants.
          </p>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-white/20" />
            <span className="text-white/40 text-xs tracking-widest">✦</span>
            <div className="flex-1 h-px bg-white/20" />
          </div>

          {/* ── SPANISH ── */}
          <p className="text-white/70 text-[10px] uppercase tracking-[0.35em] mb-5">
            Oferta por Tiempo Limitado
          </p>

          <p className="text-white/80 text-[11px] uppercase tracking-[0.25em] mb-0">Hasta</p>

          <div className="flex items-baseline justify-center gap-3 leading-none mb-0">
            <span
              className="font-serif text-white leading-none"
              style={{ fontSize: '6rem', fontWeight: 700, lineHeight: 0.85 }}
            >
              1
            </span>
            <div className="flex flex-col items-start">
              <span className="text-white text-2xl font-light tracking-[0.2em] uppercase">Mes</span>
              <span className="text-white text-3xl font-serif italic tracking-wide" style={{ lineHeight: 1 }}>
                Gratis!
              </span>
            </div>
          </div>

          <p className="text-white/55 text-[10px] mt-3 tracking-wide">
            Oferta disponible para solicitantes calificados.
          </p>

          {/* CTA */}
          <Link
            href="/contact"
            onClick={dismiss}
            className="mt-8 block w-full bg-white text-slate-900 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-slate-100 transition-colors"
          >
            Stop by to Tour / Agenda un Recorrido
          </Link>

          <button
            onClick={dismiss}
            className="mt-4 text-white/50 text-[10px] uppercase tracking-widest hover:text-white/80 transition-colors"
          >
            Maybe later
          </button>
        </div>

        {/* Subtle bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </div>
  );
};

export default PromoPopup;
