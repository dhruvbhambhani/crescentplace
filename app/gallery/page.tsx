import Navbar from "@/components/Navbar";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import { Camera, ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Page Hero */}
            <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: 'url("/picas/6.jpg")',
                    }}
                >
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
                    <h3 className="text-white/80 text-sm uppercase tracking-[0.3em] mb-4">
                        Visual Tour
                    </h3>
                    <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-serif mb-6">
                        Photo Gallery
                    </h1>
                    <p className="text-white/80 text-lg md:text-xl max-w-2xl">
                        Take a visual journey through our beautiful community and modern living spaces
                    </p>
                </div>
            </section>

            {/* Gallery Component */}
            <Gallery />

            {/* Featured Spaces */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h3 className="text-slate-500 text-sm uppercase tracking-[0.2em] font-semibold mb-4">
                            Featured Spaces
                        </h3>
                        <h2 className="text-4xl font-serif text-slate-900">
                            A Closer Look at Your Future Home
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Large Featured Image */}
                        <div className="relative aspect-[4/3] overflow-hidden group">
                            <img
                                src="/picas/download (6).jpg"
                                alt="Sparkling Pool"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-6 left-6 text-white">
                                <p className="text-xs uppercase tracking-[0.2em] mb-1">Sparkling Pool</p>
                                <h4 className="text-2xl font-serif">Lush Green Courtyard</h4>
                            </div>
                        </div>

                        {/* Smaller Images Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { img: "/picas/download (23).jpg", title: "Gourmet Kitchen" },
                                { img: "/picas/IMG_2889.jpg", title: "Bathroom" },
                                { img: "/picas/59.jpg", title: "Master Bedroom" },
                                { img: "/picas/8.jpg", title: "Private Balcony" }
                            ].map((item, index) => (
                                <div key={index} className="relative aspect-square overflow-hidden group">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <p className="text-white text-sm font-bold uppercase tracking-widest">{item.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Virtual Tour CTA */}
            <section className="py-20 px-4 bg-slate-50">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-900 text-white mb-6">
                        <Camera size={28} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4">
                        See It in Person
                    </h2>
                    <p className="text-slate-600 text-lg mb-8">
                        Photos only tell part of the story. Schedule a tour to experience the beauty of Crescent Place firsthand.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-slate-900 text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors inline-flex items-center justify-center gap-2"
                        >
                            Schedule a Tour
                            <ArrowRight size={16} />
                        </Link>
                        <Link
                            href="/floorplans"
                            className="border-2 border-slate-900 text-slate-900 px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all"
                        >
                            View Floor Plans
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
