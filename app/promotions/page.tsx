import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Waves, Zap, Dog, ArrowRight, Bed, Bath, Star } from 'lucide-react';
import Link from 'next/link';

const amenities = [
  {
    icon: Zap,
    title: 'Washer / Dryer Connections',
    desc: 'In-unit hookups ready to go.',
  },
  {
    icon: Star,
    title: 'Spacious Walk-in Closet',
    desc: 'Generous storage in every home.',
  },
  {
    icon: Waves,
    title: 'Sparkling Pool',
    desc: 'Resort-style pool on site.',
  },
  {
    icon: Dog,
    title: 'Pet Friendly',
    desc: 'Your furry family is welcome.',
  },
];

export default function PromotionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full border border-white/5" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[900px] h-[900px] rounded-full border border-white/[0.03]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-white/60 text-xs uppercase tracking-[0.4em] mb-8">
            Limited Time Offer
          </p>

          <div className="flex items-start justify-center gap-2 mb-2">
            <span className="text-white/50 text-2xl font-light mt-4">$</span>
            <span
              className="font-serif text-white leading-none"
              style={{ fontSize: 'clamp(7rem, 20vw, 14rem)', lineHeight: 0.9 }}
            >
              700
            </span>
            <span className="text-white/50 text-lg font-light self-end mb-2">/mo</span>
          </div>

          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="h-px w-12 bg-white/10" />
            <p className="text-white/50 text-xs uppercase tracking-[0.3em]">Special Offer</p>
            <div className="h-px w-12 bg-white/10" />
          </div>

          <div className="flex items-center justify-center gap-6 mt-6 mb-4">
            <div className="flex items-center gap-2 text-white">
              <Bed size={18} className="text-white/50" />
              <span className="text-lg font-light tracking-wide">1 Bedroom</span>
            </div>
            <div className="w-px h-6 bg-white/20" />
            <div className="flex items-center gap-2 text-white">
              <Bath size={18} className="text-white/50" />
              <span className="text-lg font-light tracking-wide">1 Bath</span>
            </div>
          </div>

          <p className="text-white/35 text-xs tracking-wide mb-2">
            For qualified applicants only
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              href="/contact"
              className="bg-white text-slate-900 px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-slate-100 transition-colors inline-flex items-center justify-center gap-2"
            >
              Schedule a Tour
              <ArrowRight size={14} />
            </Link>
            <a
              href="tel:713-270-4085"
              className="border-2 border-white text-white px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-slate-900 transition-all inline-flex items-center justify-center"
            >
              Call 713-270-4085
            </a>
          </div>
        </div>

      </section>

      {/* ── AMENITIES ── */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-slate-500 text-xs uppercase tracking-[0.3em] font-semibold mb-3">
              What's Included
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900">
              Every Home Comes With
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100">
            {amenities.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white p-8 flex flex-col items-center text-center group hover:bg-slate-900 transition-colors duration-300">
                <div className="w-14 h-14 rounded-full border border-slate-200 group-hover:border-white/20 flex items-center justify-center mb-6 transition-colors duration-300">
                  <Icon size={22} className="text-slate-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-slate-900 group-hover:text-white font-semibold text-sm uppercase tracking-widest mb-3 transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-slate-500 group-hover:text-white/60 text-xs leading-relaxed transition-colors duration-300">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MODEL UNIT STRIP ── */}
      <section className="bg-slate-900 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/60 text-xs uppercase tracking-[0.4em] mb-6">
            Model Unit Available
          </p>
          <h2 className="text-white font-serif text-4xl md:text-5xl mb-10 leading-tight">
            Come See It for Yourself
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 mb-12">
            {[
              { label: 'Address', value: '10222 S Gessner Road, Houston, TX 77071' },
              { label: 'Phone', value: '713-270-4085' },
              { label: 'Office Hours', value: 'Mon – Fri  9am – 5pm  |  Sat  10am – 3pm' },
            ].map(({ label, value }) => (
              <div key={label} className="bg-slate-900 px-8 py-8">
                <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] mb-2">{label}</p>
                <p className="text-white text-sm font-light">{value}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-slate-900 px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-slate-100 transition-colors inline-flex items-center justify-center gap-2"
            >
              Schedule a Tour
              <ArrowRight size={14} />
            </Link>
            <a
              href="tel:713-270-4085"
              className="border-2 border-white text-white px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-slate-900 transition-all"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>

      {/* ── FINE PRINT ── */}
      <section className="py-8 px-4 bg-slate-50 text-center">
        <p className="text-slate-400 text-[11px] max-w-2xl mx-auto leading-relaxed">
          *Special pricing available for qualified applicants on select units. Offer subject to change without notice. Contact the leasing office for full details and current availability.
        </p>
      </section>

      <Footer />
    </main>
  );
}
