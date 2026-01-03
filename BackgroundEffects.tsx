import React from 'react';

export const GridBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
  </div>
);

export const AmbientGlow = () => (
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] z-0 pointer-events-none opacity-30">
     <div className="absolute top-[-20%] left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-screen filter blur-[128px] opacity-40 animate-blob"></div>
     <div className="absolute top-[-10%] right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-screen filter blur-[128px] opacity-40 animate-blob animation-delay-2000"></div>
     <div className="absolute top-[10%] left-1/3 w-72 h-72 bg-cyan-500 rounded-full mix-blend-screen filter blur-[128px] opacity-40 animate-blob animation-delay-4000"></div>
  </div>
);

export const BeamBorder = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={`relative group ${className}`}>
            <div className="absolute -inset-px bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-500 group-hover:duration-200 animate-gradient-xy"></div>
            <div className="relative bg-surface rounded-xl">
                {children}
            </div>
        </div>
    )
}