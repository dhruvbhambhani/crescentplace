'use client';

import React from 'react';
import Link from 'next/link';
import { Bed, Sparkles, Camera, MapPin, Phone, ArrowRight } from 'lucide-react';

const sections = [
    {
        title: "Floor Plans",
        subtitle: "Find Your Perfect Space",
        description: "Discover thoughtfully designed one and two bedroom apartments featuring modern finishes, open layouts, and private balconies.",
        icon: <Bed size={28} />,
        href: "/floorplans",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
        cta: "Explore Floor Plans"
    },
    {
        title: "Amenities",
        subtitle: "The Lifestyle",
        description: "Enjoy resort-style living with our swimming pool, tennis court, gated access, pet-friendly community, and on-call maintenance.",
        icon: <Sparkles size={28} />,
        href: "/amenities",
        image: "https://images.unsplash.com/photo-1582653280643-e79c79219b19?q=80&w=800&auto=format&fit=crop",
        cta: "View All Amenities"
    },
    {
        title: "Gallery",
        subtitle: "Visual Tour",
        description: "Take a visual journey through our beautiful community, modern interiors, and exceptional amenity spaces.",
        icon: <Camera size={28} />,
        href: "/gallery",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop",
        cta: "Browse Gallery"
    },
    {
        title: "Neighborhood",
        subtitle: "The Location",
        description: "Located on South Gessner Road with easy access to Beltway 8, shopping, dining, and entertainment destinations.",
        icon: <MapPin size={28} />,
        href: "/neighborhood",
        image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=800&auto=format&fit=crop",
        cta: "Discover the Area"
    },
    {
        title: "Contact",
        subtitle: "Get in Touch",
        description: "Ready to make Crescent Place your new home? Schedule a tour or reach out to our friendly leasing team today.",
        icon: <Phone size={28} />,
        href: "/contact",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop",
        cta: "Contact Us"
    }
];

const HomepageOverview = () => {
    return (
        <section className="py-24 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <h3 className="text-slate-500 text-sm uppercase tracking-[0.2em] font-semibold">
                        Discover Crescent Place
                    </h3>
                    <h2 className="text-4xl md:text-5xl font-serif text-slate-900">
                        Your New Home Awaits
                    </h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                        Explore everything our community has to offer, from spacious floor plans to
                        exceptional amenities in the heart of Houston.
                    </p>
                </div>

                {/* Overview Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sections.map((section, index) => (
                        <Link
                            key={section.title}
                            href={section.href}
                            className={`group relative overflow-hidden bg-white border border-slate-100 hover:border-slate-300 transition-all duration-300 hover:shadow-xl ${index === 4 ? 'lg:col-span-1 md:col-span-2 lg:col-start-2' : ''
                                }`}
                        >
                            {/* Image */}
                            <div className="aspect-[16/10] overflow-hidden">
                                <img
                                    src={section.image}
                                    alt={section.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-sm">
                                    <span className="text-slate-700">{section.icon}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <p className="text-slate-400 text-xs uppercase tracking-[0.2em] font-semibold mb-2">
                                    {section.subtitle}
                                </p>
                                <h3 className="text-2xl font-serif text-slate-900 mb-3">
                                    {section.title}
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                                    {section.description}
                                </p>
                                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-900 group-hover:gap-4 transition-all">
                                    {section.cta}
                                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-20 text-center bg-slate-900 py-16 px-8">
                    <h3 className="text-3xl font-serif text-white mb-4">
                        Ready to Call Crescent Place Home?
                    </h3>
                    <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                        Schedule a tour today and experience the perfect blend of comfort, convenience, and community.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-slate-900 px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-slate-100 transition-colors"
                        >
                            Schedule a Tour
                        </Link>
                        <a
                            href="tel:713-270-4085"
                            className="border-2 border-white text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all"
                        >
                            Call 713-270-4085
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomepageOverview;
