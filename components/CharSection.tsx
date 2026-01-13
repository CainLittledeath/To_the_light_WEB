import React, { useState } from 'react';
import { CHARACTERS } from '../constants';
import { Character } from '../types';
import { X } from 'lucide-react';

const CharacterSection: React.FC = () => {
  const [selectedChar, setSelectedChar] = useState<Character | null>(null);

  // Helper to determine modal image style based on Character ID
  const getModalImageStyle = (id: number) => {
    if (id === 2) return { transform: 'scale(0.9)' }; // Sonya - shrink
    if (id === 3 || id === 4) return { transform: 'scale(1.15)' }; // Nocturne & June - enlarge
    return {};
  };

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-5xl md:text-6xl font-bombaram font-bold text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
          노던라이트 탐사대
        </h2>
      </div>

      {/* Grid Layout Container */}
      <div className="w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {CHARACTERS.map((char) => (
            <div 
              key={char.id} 
              onClick={() => setSelectedChar(char)}
              className="group relative cursor-pointer w-full h-[450px] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative flex flex-col w-full h-full bg-black/60 overflow-hidden border border-slate-700 transition-all duration-500 group-hover:border-white/50 group-hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] rounded-sm backdrop-blur-sm">
                 
                 <div className="absolute inset-0 border border-transparent group-hover:border-white/30 pointer-events-none z-20 transition-all duration-500"></div>

                 {/* 
                    1. Image Area (Pre-click)
                    Changed to use 'char.headshot' provided by the user.
                    Removed scale hacks since the image is expected to be a pre-cropped headshot.
                 */}
                 <div className="h-[55%] w-full relative overflow-hidden border-b border-slate-800">
                    <img 
                      src={char.headshot} 
                      alt={char.name} 
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                 </div>

                 <div className="h-[45%] w-full p-6 flex flex-col justify-between relative bg-gradient-to-b from-[#0a0a0a] to-[#050505]">
                    
                    <div className="relative flex flex-col items-center">
                      {/* Name with Hover Glow Effect */}
                      <h3 className="text-white font-bombaram text-2xl lg:text-3xl mb-2 transition-all drop-shadow-md text-center group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                        {char.name}
                      </h3>
                      
                      {/* Glowing Line Decoration on Hover */}
                      <div className="w-full h-[1px] bg-slate-800 relative overflow-hidden">
                         <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></span>
                      </div>
                    </div>

                    {/* Role Display */}
                    <p className="text-center text-slate-400 font-display text-sm tracking-[0.2em] uppercase group-hover:text-white transition-colors mt-2">
                      {char.role}
                    </p>

                     <p className="text-center text-slate-500 text-xs font-serif italic line-clamp-2 opacity-60 group-hover:opacity-100 transition-opacity mt-4 whitespace-pre-line">
                       "{char.quote}"
                     </p>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedChar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md" onClick={() => setSelectedChar(null)}>
          <div 
            className="relative w-full max-w-5xl h-[500px] bg-[#0f172a] border border-slate-600 shadow-[0_0_50px_rgba(0,0,0,1)] overflow-hidden flex flex-col md:flex-row animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedChar(null)}
              className="absolute top-4 right-4 text-white/50 hover:text-white z-20 bg-black/50 rounded-full p-2 transition-colors"
            >
              <X size={24} />
            </button>

            {/* 
               Modal Image
               Uses original 'char.image' (Full body or larger cut)
            */}
            <div className="hidden md:block w-[40%] h-full relative border-r border-slate-700 overflow-hidden">
               <img 
                 src={selectedChar.image} 
                 className="w-full h-full object-cover object-[center_15%] transition-transform duration-300" 
                 alt={selectedChar.name}
                 style={getModalImageStyle(selectedChar.id)}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
               <div className="absolute bottom-8 left-8">
                  <h2 className="text-5xl font-bombaram text-white drop-shadow-md">{selectedChar.name}</h2>
               </div>
            </div>

            {/* Modal Content */}
            <div className="w-full md:w-[60%] h-full p-8 md:p-12 flex flex-col overflow-y-auto custom-scrollbar bg-[#0f0f10]">
              <div className="md:hidden mb-6">
                 <h2 className="text-4xl font-bombaram text-white">{selectedChar.name}</h2>
              </div>

              <blockquote className="border-l-2 border-slate-600 pl-6 italic text-slate-300 mb-8 font-chosun text-xl leading-relaxed whitespace-pre-line">
                "{selectedChar.quote}"
              </blockquote>

              <div className="space-y-6 flex-grow">
                <div>
                   {/* Description header removed here */}
                   <p className="leading-loose text-slate-300 whitespace-pre-line font-chosun text-base">
                    {selectedChar.description}
                   </p>
                </div>
              </div>

              {/* Display Specialty in Modal */}
              <div className="mt-12 pt-6 border-t border-slate-800 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <span className="text-slate-500 font-bold uppercase tracking-wider text-xs">Specialty</span>
                  <span className="text-xl font-bombaram text-white">
                    {selectedChar.specialty.label} {selectedChar.specialty.value && `/ ${selectedChar.specialty.value}`}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterSection;