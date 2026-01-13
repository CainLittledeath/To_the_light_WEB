import React from 'react';
import { SectionId } from '../types';

// ==============================================================================
// [로고 이미지 주소]
// ==============================================================================
const LOGO_URL = "https://od.lk/s/OF8xOTk4ODYzODZf/logo.png"; 
// ==============================================================================

interface NavbarProps {
  onNavigate: (section: SectionId) => void;
  currentSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentSection }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 w-full bg-[#0a0a0a]/50 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
        
        {/* Logo Area */}
        <div className="flex items-center">
          {LOGO_URL ? (
            <img src={LOGO_URL} alt="Winter Abyss" className="h-20 object-contain opacity-80" />
          ) : (
            <span className="font-display font-bold text-slate-200 tracking-widest text-lg border-2 border-slate-600 px-2 py-1">
              LOGO
            </span>
          )}
        </div>
        
        <div className="flex gap-8">
          {[
            { id: SectionId.WORLD, label: '세계관' },
            { id: SectionId.CHARACTERS, label: '캐릭터' },
            { id: SectionId.MAP, label: '탐사경로' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`text-lg font-sans font-normal tracking-wide transition-all duration-300 relative group py-2 ${
                currentSection === item.id 
                  ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {item.label}
              {/* Glowing Line Decoration - White */}
              <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent transition-transform duration-300 origin-center box-shadow-[0_0_10px_#ffffff] ${
                  currentSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-75'
              }`}></span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;