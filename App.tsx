import React, { useState, useEffect, useRef } from 'react';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import WorldSection from './components/WorldSection';
import CharSection from './components/CharSection';
import MapSection from './components/MapSection';
import { SectionId } from './types';
import { Volume2, Play, Pause } from 'lucide-react';

const LOGO_URL = "https://od.lk/s/OF8xOTk4ODYzODZf/logo.png";

const App: React.FC = () => {
  const [hasSigned, setHasSigned] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('world');
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const scrollToSection = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const handleSignComplete = () => {
    setHasSigned(true);
    // Autoplay logic
    if (audioRef.current) {
      audioRef.current.volume = volume;
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          setIsPlaying(true);
        }).catch(error => {
          console.log("Autoplay prevented:", error);
          setIsPlaying(false);
        });
      }
    }
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (audioRef.current) {
      audioRef.current.volume = newVol;
    }
  };

  useEffect(() => {
    if (!hasSigned) return;
    const handleScroll = () => {
      const sections = Object.values(SectionId);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasSigned]);

  if (!hasSigned) {
    return <Intro onSign={handleSignComplete} />;
  }

  return (
    <div className="relative w-full min-h-screen font-sans text-slate-200 selection:bg-white/30 overflow-hidden">
      
      {/* 
        Global Fixed Background Gradient 
        Darker Gradient: Deep Slate -> Pitch Black
      */}
      <div 
        className="fixed inset-0 z-[-5]"
        style={{
          background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 40%, #020617 80%, #000000 100%)'
        }}
      ></div>

      {/* Snow Effect */}
      <div className="fixed inset-0 z-[-1] pointer-events-none opacity-20 bg-[url('https://www.transparenttextures.com/patterns/snow.png')] animate-pulse-slow"></div>

      <audio 
        ref={audioRef} 
        loop 
        src="https://od.lk/s/OF8xOTk4ODYzODRf/prologue_bgm.mp3" 
      />

      {/* Floating Music Controller */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-black/70 backdrop-blur-md px-4 py-2 rounded-full border border-slate-600 shadow-2xl transition-all duration-300 hover:bg-black/90">
        <button 
          onClick={toggleMusic}
          className="p-2 bg-slate-800 rounded-full border border-slate-600 hover:bg-slate-700 hover:border-white hover:text-white text-slate-300 transition-all shadow-lg group"
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 fill-current" />
          ) : (
            <Play className="w-4 h-4 fill-current ml-1" />
          )}
        </button>

        <div className="flex flex-col items-start mr-2">
           <span className="text-[10px] text-slate-400 font-display tracking-widest leading-none mb-1">
            MUSIC BY
           </span>
           <span className="text-xs text-slate-200 font-serif font-bold tracking-wide leading-none">
            Cain_Littledeath
           </span>
        </div>

        <div className="h-6 w-[1px] bg-slate-600 mx-1"></div>

        <div className="flex items-center gap-2">
           <Volume2 className="w-3 h-3 text-slate-400" />
           <input 
             type="range" 
             min="0" 
             max="1" 
             step="0.05" 
             value={volume}
             onChange={handleVolumeChange}
             className="w-16 h-1 appearance-none bg-slate-600 rounded-lg cursor-pointer accent-white"
             title="Volume"
           />
        </div>
      </div>

      <Navbar onNavigate={scrollToSection} currentSection={activeSection} />

      {/* Added pt-32 to account for missing header and fixed navbar */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-20 pt-32 space-y-48">
        
        {/* Sections */}
        <section id={SectionId.WORLD} className="scroll-mt-32">
          <WorldSection />
        </section>

        <section id={SectionId.CHARACTERS} className="scroll-mt-32">
          <CharSection />
        </section>

        <section id={SectionId.MAP} className="scroll-mt-32 pb-32">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bombaram font-bold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              탐사 경로
            </h2>
          </div>
          <MapSection />
        </section>

      </main>

      <footer className="relative z-10 bg-gradient-to-t from-black via-black/80 to-transparent text-slate-500 py-24 text-center border-t border-transparent backdrop-blur-sm flex flex-col items-center justify-center">
        {/* Footer Logo - Larger */}
        <img 
          src={LOGO_URL} 
          alt="Winter Abyss Logo" 
          className="h-48 mb-8 object-contain opacity-90 hover:opacity-100 transition-opacity drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" 
        />
        <p className="text-sm font-sans tracking-widest text-slate-400">
          © 2026 Toward to the light. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;