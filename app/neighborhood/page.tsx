import Navbar from "@/components/Navbar";
import Neighborhood from "@/components/Neighborhood";
import Footer from "@/components/Footer";
import { MapPin, Clock, Car, ShoppingBag, GraduationCap, Building, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const nearbyPlaces = [
    { category: "Shopping", name: "Meyerland Plaza", distance: "5 min", icon: <ShoppingBag size={18} /> },
    { category: "Dining", name: "Restaurants on Bellaire", distance: "7 min", icon: <Building size={18} /> },
    { category: "Education", name: "Houston Baptist University", distance: "8 min", icon: <GraduationCap size={18} /> },
    { category: "Healthcare", name: "Texas Medical Center", distance: "20 min", icon: <Building size={18} /> },
    { category: "Entertainment", name: "NRG Stadium", distance: "15 min", icon: <Building size={18} /> },
    { category: "Airport", name: "Hobby Airport", distance: "20 min", icon: <Car size={18} /> },
];

export default function NeighborhoodPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Page Hero */}
            <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: 'url("/picas/download (8).jpg")',
                    }}
                >
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
                    <h3 className="text-white/80 text-sm uppercase tracking-[0.3em] mb-4">
                        The Location
                    </h3>
                    <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-serif mb-6">
                        Neighborhood
                    </h1>
                    <p className="text-white/80 text-lg md:text-xl max-w-2xl">
                        Perfectly positioned in Southwest Houston with easy access to everything you need
                    </p>
                </div>
            </section>

            {/* Location Stats */}
            <section className="bg-slate-900 py-8">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <p className="text-3xl font-serif text-white mb-1">5 min</p>
                            <p className="text-slate-400 text-sm uppercase tracking-widest">To Beltway 8</p>
                        </div>
                        <div>
                            <p className="text-3xl font-serif text-white mb-1">15 min</p>
                            <p className="text-slate-400 text-sm uppercase tracking-widest">To Sugar Land</p>
                        </div>
                        <div>
                            <p className="text-3xl font-serif text-white mb-1">20 min</p>
                            <p className="text-slate-400 text-sm uppercase tracking-widest">To Downtown</p>
                        </div>
                        <div>
                            <p className="text-3xl font-serif text-white mb-1">20 min</p>
                            <p className="text-slate-400 text-sm uppercase tracking-widest">To Med Center</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Neighborhood Component */}
            <Neighborhood />

            {/* Nearby Places */}
            <section className="py-20 px-4 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h3 className="text-slate-500 text-sm uppercase tracking-[0.2em] font-semibold mb-4">
                            Explore the Area
                        </h3>
                        <h2 className="text-4xl font-serif text-slate-900">
                            What's Nearby
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {nearbyPlaces.map((place, index) => (
                            <div key={index} className="bg-white p-6 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-600">
                                    {place.icon}
                                </div>
                                <div className="flex-1">
                                    <p className="text-xs uppercase tracking-widest text-slate-400 mb-1">{place.category}</p>
                                    <h4 className="font-medium text-slate-900">{place.name}</h4>
                                </div>
                                <div className="flex items-center gap-1 text-slate-500">
                                    <Clock size={14} />
                                    <span className="text-sm">{place.distance}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Map Embed Placeholder */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-slate-500 text-sm uppercase tracking-[0.2em] font-semibold mb-4">
                                Find Us
                            </h3>
                            <h2 className="text-4xl font-serif text-slate-900 mb-6">
                                Visit Crescent Place
                            </h2>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-4">
                                    <MapPin className="text-slate-400 mt-1" size={20} />
                                    <div>
                                        <p className="font-medium text-slate-900">10222 S Gessner Road</p>
                                        <p className="text-slate-600">Houston, TX 77071</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Clock className="text-slate-400 mt-1" size={20} />
                                    <div>
                                        <p className="font-medium text-slate-900">Office Hours</p>
                                        <p className="text-slate-600">Mon - Fri: 9:00 AM - 5:00 PM</p>
                                        <p className="text-slate-600">Sat: 10:00 AM - 3:00 PM</p>
                                        <p className="text-slate-600">Sun: Closed</p>
                                    </div>
                                </div>
                            </div>
                            <Link
                                href="/contact"
                                className="bg-slate-900 text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors inline-flex items-center gap-2"
                            >
                                Get Directions
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                        <div className="aspect-square bg-slate-100 relative overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3466.8!2d-95.5617!3d29.6527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c3e3b7d6e5a1%3A0x1234567890abcdef!2s10222+S+Gessner+Rd%2C+Houston%2C+TX+77071!5e0!3m2!1sen!2sus!4v1709900000000"
                                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
