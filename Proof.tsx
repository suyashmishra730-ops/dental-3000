import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "The AI reactivation campaign alone brought in $45k of production in the first 30 days. It's like having a full-time marketer who never sleeps.",
    author: "Dr. Sarah Chen",
    role: "Owner, Chen Family Dentistry",
    metric: "+$45k/mo Revenue"
  },
  {
    quote: "We were missing 30% of our calls. DentalFlow captures them all. Our new patient numbers have doubled without spending a dime more on ads.",
    author: "Mark Davis",
    role: "Practice Manager, Smile Bright",
    metric: "2x New Patients"
  },
  {
    quote: "I was skeptical about AI, but the booking bot is indistinguishable from a human. Patients love the instant responses.",
    author: "Dr. James Wilson",
    role: "Orthodontist, Wilson Ortho",
    metric: "98% Auto-Booking"
  }
];

export const Proof = () => {
  return (
    <section id="proof" className="py-32 relative overflow-hidden">
      {/* Background Gradient Spot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-900/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Trusted by Top Practices</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join 200+ dental offices modernizing their patient experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className="group relative bg-surface border border-white/5 p-8 rounded-2xl hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.15)] hover:border-blue-500/20"
            >
              <div className="absolute top-8 right-8 text-white/5 group-hover:text-blue-500/20 transition-colors">
                <Quote size={40} />
              </div>
              
              <div className="mb-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-300 text-lg leading-relaxed relative z-10">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-auto">
                <div>
                  <div className="text-white font-medium">{t.author}</div>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </div>
                <div className="text-right">
                  <div className="inline-block px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded text-xs font-bold text-blue-400">
                    {t.metric}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};