import React from 'react';
import { ArrowRight, Sparkles, Calendar, ChevronRight, PlayCircle } from 'lucide-react';
import { Button } from './ui/Button';
import { AmbientGlow, GridBackground } from './ui/BackgroundEffects';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-32 overflow-hidden">
      <GridBackground />
      <AmbientGlow />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Badge */}
        <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-blue-200 hover:bg-white/10 transition-colors cursor-pointer group">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span>New: AI Voice Receptionist 2.0</span>
            <ChevronRight className="w-3 h-3 text-gray-500 group-hover:text-white transition-colors" />
          </div>
        </div>

        {/* Hook / Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.1] animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Your Chairs Full.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
            On Autopilot.
          </span>
        </h1>

        {/* Promise / Subhead */}
        <p className="max-w-2xl text-lg md:text-xl text-gray-400 mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          DentalFlow AI captures missed calls, qualifies leads, and fills your calendar automatically. 
          Stop chasing patients and start treating them.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
            Start Scaling Now
          </Button>
          <Button variant="secondary" size="lg" icon={<PlayCircle className="w-4 h-4" />}>
            Watch System Demo
          </Button>
        </div>

        {/* Abstract Tech Visual / "Baseten" style reference */}
        <div className="mt-20 relative w-full max-w-5xl animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
           {/* Decorative Border */}
           <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-xl blur-lg opacity-50"></div>
           
           {/* Main Dashboard Preview */}
           <div className="relative rounded-xl border border-white/10 bg-black/80 backdrop-blur-sm shadow-2xl overflow-hidden">
              <div className="border-b border-white/10 bg-white/5 p-4 flex items-center justify-between">
                 <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                 </div>
                 <div className="text-xs text-gray-500 font-mono">dashboard.dentalflow.ai</div>
              </div>
              
              <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                 {/* Visualizing Data */}
                 <div className="col-span-2 space-y-4">
                    <div className="flex items-center justify-between">
                       <h3 className="text-white font-medium">Weekly Appointments</h3>
                       <span className="text-emerald-400 text-sm flex items-center gap-1">
                          <Sparkles className="w-3 h-3" /> +24% vs last week
                       </span>
                    </div>
                    {/* Simulated Chart Bars */}
                    <div className="h-48 flex items-end justify-between gap-2">
                       {[40, 65, 50, 80, 55, 90, 75].map((h, i) => (
                          <div key={i} className="w-full bg-gradient-to-t from-blue-900/20 to-blue-500/20 rounded-t-sm relative group">
                             <div 
                                style={{ height: `${h}%` }} 
                                className="absolute bottom-0 w-full bg-blue-500 rounded-t-sm opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                             ></div>
                             {/* Hover Tooltip */}
                             <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                {h * 2} Pts
                             </div>
                          </div>
                       ))}
                    </div>
                 </div>

                 {/* Side Stats */}
                 <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors group">
                       <div className="text-gray-400 text-xs mb-1">Missed Calls Recovered</div>
                       <div className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">47</div>
                    </div>
                    <div className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors group">
                       <div className="text-gray-400 text-xs mb-1">Revenue Generated</div>
                       <div className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">$12,450</div>
                    </div>
                    <div className="p-4 rounded-lg bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30">
                       <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-xs text-blue-200 font-medium">AI Agent Active</span>
                       </div>
                       <div className="text-xs text-gray-300">
                          "Hello Sarah, Dr. Smith has an opening tomorrow at 2 PM. Shall I book it?"
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};