'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    interest: '1 Bedroom',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to send');
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again or call us directly.');
    } finally {
      setLoading(false);
    }
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
                  <p className="text-sm">Mon - Fri: 9:00 AM - 5:00 PM</p>
                  <p className="text-sm">Sat: 10:00 AM - 3:00 PM</p>
                  <p className="text-sm">Sun: Closed</p>
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
                    setSubmitted(false);
                    setFormData({ firstName: '', lastName: '', email: '', interest: '1 Bedroom', message: '' });
                  }}
                  className="mt-6 text-slate-900 font-bold uppercase tracking-widest text-xs border-b-2 border-slate-900 pb-1"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 text-sm">
                    {error}
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">First Name</label>
                    <input required type="text" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} className="w-full border-b border-slate-200 py-2 focus:border-slate-900 outline-none transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Last Name</label>
                    <input required type="text" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} className="w-full border-b border-slate-200 py-2 focus:border-slate-900 outline-none transition-colors" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Email Address</label>
                  <input required type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full border-b border-slate-200 py-2 focus:border-slate-900 outline-none transition-colors" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Interested In</label>
                  <select value={formData.interest} onChange={(e) => setFormData({ ...formData, interest: e.target.value })} className="w-full border-b border-slate-200 py-2 focus:border-slate-900 outline-none transition-colors bg-transparent">
                    <option>1 Bedroom</option>
                    <option>2 Bedrooms</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Message</label>
                  <textarea rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full border-b border-slate-200 py-2 focus:border-slate-900 outline-none transition-colors resize-none" />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-slate-900 text-white py-4 text-sm font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Send Inquiry'}
                  {!loading && <Send size={16} />}
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
