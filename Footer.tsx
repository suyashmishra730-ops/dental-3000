import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-md"></div>
            <span className="text-lg font-bold text-white">DentalFlow AI</span>
          </div>
          
          <div className="flex gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="flex gap-4">
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Github size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-gray-600">
          © {new Date().getFullYear()} DentalFlow AI Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};