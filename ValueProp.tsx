import React from 'react';
import { Bot, BarChart3, ShieldCheck, Zap, Calendar } from 'lucide-react';

const features = [
  {
    title: "AI Receptionist",
    description: "Never miss a new patient call again. Our AI answers, screens, and books appointments 24/7 with human-like empathy.",
    icon: <Bot className="w-6 h-6 text-cyan-400" />,
    gradient: "from-cyan-500/20 to-blue-500/20"
  },
  {
    title: "Smart Reactivation",
    description: "Automatically re-engage dormant patients for hygiene recalls and unfinished treatment plans via SMS & Email.",
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    gradient: "from-yellow-500/20 to-orange-500/20"
  },
  {
    title: "Insurance Verification",
    description: "Instant eligibility checks before the patient arrives. Reduce admin time by 80% and eliminate surprise bills.",
    icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
    gradient: "from-emerald-500/20 to-green-500/20"
  }
];

export const ValueProp = () => {
  return (
    <section id="features" className="py-24 bg-surface relative border-y border-dashed border-white/10">
      
      {/* Vertical Grid Lines (Background) */}
      <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-none">
        <div className="border-l border-dashed border-white/5 h-full absolute left-4 sm:left-6 lg:left-8"></div>
        <div className="border-r border-dashed border-white/5 h-full absolute right-4 sm:right-6 lg:right-8"></div>
        <div className="hidden md:block border-l border-dashed border-white/5 h-full absolute left-1/2 -translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Value Prop Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-24 items-center">
          <div>
             <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
               Inference is<br/>
               <span className="text-gray-500">Revenue.</span>
             </h2>
             <p className="text-lg text-gray-400 leading-relaxed">
               Traditional agencies sell leads. We sell booked appointments. 
               Our infrastructure combines advanced LLMs with your practice management software (Dentrix, Eaglesoft, OpenDental) to create a seamless patient acquisition engine.
             </p>
          </div>
          <div className="relative group">
             {/* Tech Illustration */}
             <div className="aspect-video bg-neutral-900 rounded-lg border border-white/10 p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                
                {/* Simulated Nodes Graph */}
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                   <div className="w-64 h-64 border border-white/10 rounded-full animate-pulse-slow"></div>
                   <div className="absolute w-48 h-48 border border-white/10 rounded-full animate-pulse-slow animation-delay-500"></div>
                </div>

                <div className="relative z-10 flex flex-col gap-4">
                    <div className="flex items-center gap-4 p-3 bg-black/50 border border-white/5 rounded-md backdrop-blur-sm transform transition-transform group-hover:translate-x-2">
                        <div className="p-2 bg-blue-500/20 rounded text-blue-400"><Bot size={16}/></div>
                        <div className="text-sm">
                            <div className="text-gray-500 text-xs">Trigger</div>
                            <div className="text-white">Missed Call (Unknown)</div>
                        </div>
                    </div>
                    <div className="w-0.5 h-6 bg-white/10 ml-8"></div>
                    <div className="flex items-center gap-4 p-3 bg-black/50 border border-white/5 rounded-md backdrop-blur-sm transform transition-transform group-hover:translate-x-2 transition-delay-100">
                         <div className="p-2 bg-purple-500/20 rounded text-purple-400"><Zap size={16}/></div>
                        <div className="text-sm">
                            <div className="text-gray-500 text-xs">Action</div>
                            <div className="text-white">AI SMS Analysis & Reply</div>
                        </div>
                    </div>
                    <div className="w-0.5 h-6 bg-white/10 ml-8"></div>
                    <div className="flex items-center gap-4 p-3 bg-black/50 border border-white/5 rounded-md backdrop-blur-sm transform transition-transform group-hover:translate-x-2 transition-delay-200">
                        <div className="p-2 bg-green-500/20 rounded text-green-400"><Calendar size={16}/></div>
                        <div className="text-sm">
                            <div className="text-gray-500 text-xs">Result</div>
                            <div className="text-white">Appointment Booked</div>
                        </div>
                    </div>
                </div>
             </div>
          </div>
        </div>

        {/* 3 Columns Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="group relative p-8 bg-neutral-900/50 border border-white/5 hover:border-white/10 transition-colors rounded-2xl overflow-hidden hover:bg-neutral-900">
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-black border border-white/10 rounded-lg flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="mt-6 flex items-center text-xs font-medium text-white/50 group-hover:text-white transition-colors cursor-pointer">
                  Learn more <BarChart3 className="w-3 h-3 ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};