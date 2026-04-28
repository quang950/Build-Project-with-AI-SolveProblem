import React from 'react';
import { Terminal } from 'lucide-react';

const Header = () => {
  return (
    <header className="py-8 px-6 border-b border-white/5 bg-darkIde/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 group">
          <div className="p-2 bg-neonCyan/10 rounded-lg group-hover:shadow-neon transition-all duration-500">
            <Terminal className="w-8 h-8 text-neonCyan" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tighter text-white">
              Dev<span className="text-neonCyan">Brander</span>
            </h1>
            <p className="text-xs text-gray-400 font-mono">Elevate your tech identity.</p>
          </div>
        </div>
        
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-400">
          <a href="#" className="hover:text-neonCyan transition-colors">Features</a>
          <a href="#" className="hover:text-neonCyan transition-colors">About</a>
          <a href="#" className="hover:text-neonCyan transition-colors">Community</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
