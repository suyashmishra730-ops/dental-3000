import React, { useState, useEffect } from 'react';
import { Activity, Menu, X } from 'lucide-react';
import { Button } from './ui/Button';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-black/60 backdrop-blur-md border-white/5 py-3' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="p-1.5 rounded-lg bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 border border-white/10 group-hover:border-blue-500/50 transition-colors">
               <Activity className="w-5 h-5 text-blue-400" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white">DentalFlow AI</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Features</a>
            <a href="#proof" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Results</a>
            <a href="#how-it-works" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Methodology</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
             <Button variant="ghost" size="sm">Log In</Button>
             <Button variant="primary" size="sm">Book Demo</Button>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-400 hover:text-white"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 p-4 flex flex-col gap-4">
            <a href="#features" className="text-sm font-medium text-gray-400 hover:text-white">Features</a>
            <a href="#proof" className="text-sm font-medium text-gray-400 hover:text-white">Results</a>
            <Button variant="primary" className="w-full">Book Demo</Button>
        </div>
      )}
    </nav>
  );
};