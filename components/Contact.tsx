'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Contact form submitted. current submitted state: ${submitted}`);
    // Simulate form submission
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-4 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-5">
          <div className="md:col-span-2 bg-slate-900 p-12 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-serif mb-6">Visit Us</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Stop by today to tour our one and two bedroom apartments in Houston.
              </p>
              
              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500 mb-1">Address</p>
                  <p className="text-sm">10222 S Gessner Road, Houston, TX 77071</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500 mb-1">Phone</p>
                  <p className="text-sm">713-270-4085</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500 mb-1">Office Hours</p>
                  <p className="text-sm">Mon - Fri: 8:30 AM - 5:30 PM</p>
                  <p className="text-sm">Sat - Sun: Closed</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-800">
              <p className="text-xs text-slate-500 italic">
                * Tours are available by appointment or walk-in.
              </p>
            </div>
          </div>

          <div className="md:col-span-3 p-12">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-fade-in">
                <CheckCircle2 size={64} className="text-green-500 mb-4" />
                <h3 className="text-2xl font-serif text-slate-900">Thank You!</h3>
                <p className="text-slate-500">
                  Your inquiry has been received. A leasing specialist will contact you shortly.
                </p>
                <button 
                  onClick={() => {
                    console.log(`Contact form reset button clicked. previous submitted state: ${submitted}`);
                    setSubmitted(false);
                  }}
                  className="mt-6 text-slate-900 font-bold uppercase tracking-widest text-xs border-b-2 border-slate-900 pb-1"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">First Name</label>
                    <input required type="text" className="w-full border-b border-slate-200 py-2 focus:border-slate-900 outline-none transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Last Name</label>
                    <input required type="text" className="w-full border-b border-slate-200 py-2 focus:border-slate-900 outline-none transition-colors" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Email Address</label>
                  <input required type="email" className="w-full border-b border-slate-200 py-2 focus:border-slate-900 outline-none transition-colors" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Interested In</label>
                  <select className="w-full border-b border-slate-200 py-2 focus:border-slate-900 outline-none transition-colors bg-transparent">
                    <option>1 Bedroom</option>
                    <option>2 Bedrooms</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Message</label>
                  <textarea rows={4} className="w-full border-b border-slate-200 py-2 focus:border-slate-900 outline-none transition-colors resize-none" />
                </div>

                <button type="submit" className="w-full bg-slate-900 text-white py-4 text-sm font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                  Send Inquiry
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
