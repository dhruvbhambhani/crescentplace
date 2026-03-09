import Navbar from "@/components/Navbar";
import Amenities from "@/components/Amenities";
import Footer from "@/components/Footer";
import { Waves, ShieldCheck, Zap, Dog, Target, Settings, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AmenitiesPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Page Hero */}
            <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: 'url("/picas/13.jpg")',
                    }}
                >
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
                    <h3 className="text-white/80 text-sm uppercase tracking-[0.3em] mb-4">
                        The Lifestyle
                    </h3>
                    <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-serif mb-6">
                        Amenities
                    </h1>
                    <p className="text-white/80 text-lg md:text-xl max-w-2xl">
                        Resort-style living with amenities designed for your comfort and convenience
                    </p>
                </div>
            </section>

            {/* Amenities Component */}
            <Amenities />

            {/* Community Highlights */}
            <section className="py-20 px-4 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h3 className="text-slate-500 text-sm uppercase tracking-[0.2em] font-semibold mb-4">
                            Community Features
                        </h3>
                        <h2 className="text-4xl font-serif text-slate-900">
                            More Reasons to Love Crescent Place
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 shadow-sm">
                            <h3 className="text-xl font-serif text-slate-900 mb-4">Community Perks</h3>
                            <ul className="space-y-3">
                                {[
                                    "Beautifully Landscaped Grounds",
                                    "Ample Parking Available",
                                    "Professional On-Site Management",
                                    "Easy Online Rent Payment",
                                    "24-Hour Emergency Maintenance"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <CheckCircle className="text-green-600 flex-shrink-0" size={18} />
                                        <span className="text-slate-600">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white p-8 shadow-sm">
                            <h3 className="text-xl font-serif text-slate-900 mb-4">Pet Policy</h3>
                            <p className="text-slate-600 mb-4">
                                We welcome your furry family members! Crescent Place is a pet-friendly community
                                that understands pets are part of the family.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Dogs and Cats Welcome",
                                    "No Weight Restrictions",
                                    "Pet Deposit Required",
                                    "Breed Restrictions May Apply"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <Dog className="text-slate-400 flex-shrink-0" size={18} />
                                        <span className="text-slate-600">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Image Gallery Strip */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                            { src: "/Tennis Court.jpg", alt: "Tennis Court" },
                            { src: "/Laundry.jpg", alt: "Laundry Facilities" },
                            { src: "/Pool.jpg", alt: "Swimming Pool" },
                        ].map((img, index) => (
                            <div key={index} className="aspect-square overflow-hidden relative group">
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <p className="text-white text-sm font-bold uppercase tracking-widest">{img.alt}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-slate-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
                        Experience the Crescent Place Lifestyle
                    </h2>
                    <p className="text-slate-400 text-lg mb-8">
                        Schedule a tour to see all our amazing amenities in person.
                    </p>
                    <Link
                        href="/contact"
                        className="bg-white text-slate-900 px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-slate-100 transition-colors inline-flex items-center justify-center gap-2"
                    >
                        Schedule a Tour
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
