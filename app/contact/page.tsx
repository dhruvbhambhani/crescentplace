import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, MessageSquare, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Page Hero */}
            <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: 'url("/picas/4.jpg")',
                    }}
                >
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
                    <h3 className="text-white/80 text-sm uppercase tracking-[0.3em] mb-4">
                        Get in Touch
                    </h3>
                    <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-serif mb-6">
                        Contact Us
                    </h1>
                    <p className="text-white/80 text-lg md:text-xl max-w-2xl">
                        Ready to make Crescent Place your new home? We'd love to hear from you
                    </p>
                </div>
            </section>

            {/* Quick Contact Cards */}
            <section className="py-12 px-4 bg-slate-900">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <a
                            href="tel:713-270-4085"
                            className="bg-slate-800 p-6 flex items-center gap-4 hover:bg-slate-700 transition-colors group"
                        >
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-slate-900 transition-colors">
                                <Phone size={20} />
                            </div>
                            <div>
                                <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">Call Us</p>
                                <p className="text-white font-bold">713-270-4085</p>
                            </div>
                        </a>
                        <div className="bg-slate-800 p-6 flex items-center gap-4">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white">
                                <Clock size={20} />
                            </div>
                            <div>
                                <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">Office Hours</p>
                                <p className="text-white font-bold">Mon-Fri 9AM-5PM | Sat 10AM-3PM</p>
                            </div>
                        </div>
                        <a
                            href="https://maps.app.goo.gl/9rkX5NbKxdZWn7om8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-slate-800 p-6 flex items-center gap-4 hover:bg-slate-700 transition-colors group"
                        >
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-slate-900 transition-colors">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">Address</p>
                                <p className="text-white font-bold">10222 S Gessner Rd</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* Contact Component */}
            <Contact />

            {/* FAQ Section */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h3 className="text-slate-500 text-sm uppercase tracking-[0.2em] font-semibold mb-4">
                            FAQ
                        </h3>
                        <h2 className="text-4xl font-serif text-slate-900">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                q: "What are the lease terms available?",
                                a: "We offer flexible lease terms ranging from 6 to 12 months. Please contact our leasing office for current availability and specials."
                            },
                            {
                                q: "Is there a pet policy?",
                                a: "Yes! Crescent Place is a pet-friendly community. We welcome dogs and cats with a refundable pet deposit. Some breed restrictions may apply."
                            },
                            {
                                q: "What utilities are included?",
                                a: "Residents are responsible for electricity. Water and trash services are included in the rent. Cable and internet are available through local providers."
                            },
                            {
                                q: "Is there parking available?",
                                a: "Yes, we offer ample parking for residents. Covered parking options may be available for an additional fee."
                            },
                            {
                                q: "How do I schedule a tour?",
                                a: "You can schedule a tour by calling us at 713-270-4085, filling out the contact form above, or simply stopping by during office hours. Walk-ins are welcome!"
                            }
                        ].map((faq, index) => (
                            <div key={index} className="border-b border-slate-100 pb-6">
                                <h4 className="text-lg font-medium text-slate-900 mb-2 flex items-start gap-3">
                                    <MessageSquare className="text-slate-400 mt-1 flex-shrink-0" size={18} />
                                    {faq.q}
                                </h4>
                                <p className="text-slate-600 pl-8">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional CTA */}
            <section className="py-20 px-4 bg-slate-50">
                <div className="max-w-4xl mx-auto text-center">
                    <Calendar className="mx-auto text-slate-400 mb-6" size={48} />
                    <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4">
                        Prefer to Visit in Person?
                    </h2>
                    <p className="text-slate-600 text-lg mb-8">
                        Stop by our leasing office for a personal tour. Walk-ins are always welcome during office hours!
                    </p>
                    <div className="bg-white p-8 shadow-sm inline-block">
                        <div className="flex flex-col md:flex-row gap-8 text-left">
                            <div>
                                <p className="text-xs uppercase tracking-widest text-slate-400 mb-2">Address</p>
                                <a href="https://maps.app.goo.gl/9rkX5NbKxdZWn7om8" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">
                                    <p className="text-slate-900 font-medium">10222 S Gessner Road</p>
                                    <p className="text-slate-600">Houston, TX 77071</p>
                                </a>
                            </div>
                            <div className="border-l border-slate-200 pl-8">
                                <p className="text-xs uppercase tracking-widest text-slate-400 mb-2">Office Hours</p>
                                <p className="text-slate-900 font-medium">Mon - Fri: 9:00 AM - 5:00 PM</p>
                                <p className="text-slate-600">Sat: 10:00 AM - 3:00 PM</p>
                                <p className="text-slate-600">Sun: Closed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
