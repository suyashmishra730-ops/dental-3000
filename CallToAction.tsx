import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';

export const CallToAction = () => {
  return (
    <section className="py-32 relative border-t border-white/10 overflow-hidden">
      
      {/* Moving beams background */}
      <div className="absolute inset-0 overflow-hidden">
         <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent animate-pulse-slow"></div>
         <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent animate-pulse-slow animation-delay-1000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-8">
          Ready to automate your<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">growth engine?</span>
        </h2>
        
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          We guarantee 20 qualified new patient appointments in your first 30 days, or you don't pay.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
           <Button variant="primary" size="lg" className="w-full sm:w-auto text-lg px-10 py-4" icon={<ArrowRight />}>
             Get Your Growth Plan
           </Button>
           <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-10 py-4">
             View Pricing
           </Button>
        </div>
        
        <p className="mt-8 text-sm text-gray-500">
          No credit card required for demo. Integration takes less than 15 minutes.
        </p>
      </div>
    </section>
  );
};