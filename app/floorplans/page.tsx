import Navbar from "@/components/Navbar";
import FloorPlanBrowser from "@/components/FloorPlanBrowser";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Bed, Bath, Square, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function FloorPlansPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Page Hero */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1600607687940-467f5b637a61?q=80&w=1600&auto=format&fit=crop")',
          }}
        >
          <div className="absolute inset-0 bg-slate-900" />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h3 className="text-white/80 text-sm uppercase tracking-[0.3em] mb-4">
            Crescent Place Apartments
          </h3>
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-serif mb-6">
            Floor Plans
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl">
            Discover thoughtfully designed one and two bedroom apartments featuring modern finishes and open layouts
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-slate-600 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-serif text-white mb-1">650-1,030</p>
              <p className="text-slate-400 text-sm uppercase tracking-widest">Sq. Ft.</p>
            </div>
            <div>
              <p className="text-3xl font-serif text-white mb-1">1-2</p>
              <p className="text-slate-400 text-sm uppercase tracking-widest">Bedrooms</p>
            </div>
            <div>
              <p className="text-3xl font-serif text-white mb-1">$800+</p>
              <p className="text-slate-400 text-sm uppercase tracking-widest">Starting At</p>
            </div>
            <div>
              <p className="text-3xl font-serif text-white mb-1">4</p>
              <p className="text-slate-400 text-sm uppercase tracking-widest">Unique Layouts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Floor Plans Browser */}
      <FloorPlanBrowser />

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-slate-500 text-sm uppercase tracking-[0.2em] font-semibold mb-4">
              What's Included
            </h3>
            <h2 className="text-4xl font-serif text-slate-900">
              Premium Features in Every Home
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "All-Electric Kitchen",
              "Dishwasher & Refrigerator",
              "Microwave Included",
              "Private Balcony/Patio",
              "Walk-in Closets",
              "Central Air Conditioning",
              "Ceiling Fans",
              "Mini Blinds",
              "Cable/Internet Ready"
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-4 p-4 border border-slate-100 hover:border-slate-300 transition-colors">
                <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                <span className="text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4">
            Ready to Find Your Perfect Space?
          </h2>
          <p className="text-slate-600 text-lg mb-8">
            Schedule a tour today to see these beautiful floor plans in person.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-slate-900 text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors inline-flex items-center justify-center gap-2"
            >
              Schedule a Tour
              <ArrowRight size={16} />
            </Link>
            <a
              href="tel:713-270-4085"
              className="border-2 border-slate-900 text-slate-900 px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all"
            >
              Call 713-270-4085
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
