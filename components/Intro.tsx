import React, { useState, useEffect } from 'react';
import { INTRO_TEXT } from '../constants';

// ==============================================================================
// [이미지 주소]
// ==============================================================================
const SEAL_IMAGE_URL = "https://od.lk/s/OF8xOTk5MTQ0NjJf/seal.webp"; 
const PAPER_TEXTURE_URL = "https://od.lk/s/OF8xOTk5MTQyMTNf/letter.webp"; 

interface IntroProps {
  onSign: () => void;
}

const Intro: React.FC<IntroProps> = ({ onSign }) => {
  const [stage, setStage] = useState<'envelope' | 'letter' | 'signed'>('envelope');
  const [isSigning, setIsSigning] = useState(false);

  useEffect(() => {
    // Preload images for faster rendering
    const sealImg = new Image();
    sealImg.src = SEAL_IMAGE_URL;
    const paperImg = new Image();
    paperImg.src = PAPER_TEXTURE_URL;
  }, []);

  const playPaperSound = () => {
    const audio = new Audio("https://od.lk/s/OF8xOTk4ODYzODJf/turn_se.mp3");
    audio.volume = 0.5;
    audio.play().catch(e => console.log("Audio play prevented", e));
  };

  const handleEnvelopeClick = () => {
    playPaperSound();
    setStage('letter');
  };

  const handleSign = () => {
    setIsSigning(true);
    setTimeout(() => {
      setStage('signed');
      setTimeout(() => {
        onSign();
      }, 1000);
    }, 2500);
  };

  if (stage === 'signed' || (stage === 'letter' && isSigning)) {
    // Transitioning...
  } else if (stage === 'envelope') {
    return (
      <div 
        className="fixed inset-0 z-50 flex flex-col items-center justify-center text-white perspective-1000"
        style={{
          background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 40%, #020617 80%, #000000 100%)'
        }}
      >
         {/* Texture Overlay for Background */}
         <div className="absolute inset-0 z-[-1] opacity-20 bg-[url('https://www.transparenttextures.com/patterns/snow.png')] animate-pulse-slow"></div>
         
         <div 
           onClick={handleEnvelopeClick}
           className="relative z-10 cursor-pointer group transform transition-transform duration-500 hover:scale-105 hover:-translate-y-2"
         >
            <div className="w-[28rem] h-[18rem] md:w-[36rem] md:h-[24rem] rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative flex items-center justify-center overflow-hidden border border-[#8c7b6c] bg-[#f0e6d2]">
               <div 
                 className="absolute inset-0 opacity-40 mix-blend-multiply"
                 style={{ backgroundImage: `url('${PAPER_TEXTURE_URL}')`, backgroundSize: 'cover' }}
               ></div>
               {/* Flaps */}
               <div className="absolute top-0 left-0 w-0 h-0 border-t-[140px] border-r-[224px] md:border-t-[192px] md:border-r-[288px] border-t-[#e2ded0] border-r-transparent drop-shadow-sm z-10"></div>
               <div className="absolute top-0 right-0 w-0 h-0 border-t-[140px] border-l-[224px] md:border-t-[192px] md:border-l-[288px] border-t-[#e2ded0] border-l-transparent drop-shadow-sm z-10"></div>
               <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#dcd1bc] clip-path-polygon border-t border-[#b8ad9e] shadow-inner z-0"></div>

               <div className="absolute z-20 group-hover:scale-110 transition-transform">
                 {SEAL_IMAGE_URL ? (
                   <img src={SEAL_IMAGE_URL} alt="Seal" className="w-28 h-28 md:w-40 md:h-40 object-contain filter drop-shadow-lg" />
                 ) : (
                   <div className="w-24 h-24 rounded-full bg-[#8c7b6c] border-2 border-[#5c4b3c] flex items-center justify-center shadow-inner">
                      <span className="text-[#f0e6d2] font-display font-bold text-3xl">W</span>
                   </div>
                 )}
               </div>
            </div>
            
            <p className="mt-8 text-center text-slate-400 font-chosun tracking-widest text-lg animate-pulse group-hover:text-[#f0e6d2] transition-colors">
              [ 의뢰서 확인하기 ]
            </p>
         </div>
      </div>
    );
  }

  // LETTER STAGE
  // Added overflow-y-auto to the parent container to allow scrolling on zoom or small screens
  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md p-4 transition-opacity duration-1000 overflow-y-auto custom-scrollbar ${stage === 'signed' ? 'opacity-0' : 'opacity-100'}`}
      style={{
        background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 40%, #020617 80%, #000000 100%)'
      }}
    >
      <div 
        // Changed layout to be more fluid with max constraints
        className="relative max-w-4xl w-full my-auto shadow-2xl rounded-sm transform transition-all duration-700 animate-fade-in flex flex-col"
        style={{
             boxShadow: '0 0 100px rgba(0,0,0,0.8)',
             backgroundColor: '#f7f1e3',
             minHeight: '600px', // Minimum height
        }}
      >
        <div 
          className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none rounded-sm"
          style={{ backgroundImage: `url('${PAPER_TEXTURE_URL}')`, backgroundSize: 'cover' }}
        ></div>
        
        {/* Content Container */}
        <div className="relative z-10 flex flex-col h-full font-letter text-[#2c2b29] p-8 md:p-12">
          
          {/* Header */}
          <div className="flex justify-between items-end mb-6 border-b-2 border-[#5c4b3c] pb-4 shrink-0">
            <h2 className="text-3xl md:text-4xl font-chosun font-bold tracking-widest text-[#1a1a1a]">
              {INTRO_TEXT.title}
            </h2>
          </div>

          {/* Body */}
          <div className="flex-grow whitespace-pre-line leading-relaxed font-bold text-[#3a3a3a] text-2xl md:text-[1.7rem] flex items-center py-4">
            {INTRO_TEXT.body}
          </div>

          {/* Footer & Signature */}
          <div className="flex flex-col items-end mt-6 shrink-0">
            <p className="font-bold text-3xl mb-4 text-black font-chosun">{INTRO_TEXT.signer}</p>
            
            <div className="relative w-72 h-20 border-b-2 border-[#5c4b3c] flex items-end justify-center cursor-pointer group" onClick={!isSigning ? handleSign : undefined}>
              
              {!isSigning && !stage.includes('signed') && (
                <span className="mb-2 text-[#5c4b3c] text-xl group-hover:text-red-900 transition-colors font-chosun font-bold animate-pulse">
                  (이곳을 눌러 서명하십시오)
                </span>
              )}

              {isSigning && (
                <div className="absolute inset-0 z-20 overflow-visible">
                  <svg className="w-full h-full" viewBox="0 0 300 100" style={{ overflow: 'visible' }}>
                    <path
                      d="M20,60 C60,40 80,90 120,60 S180,30 220,70 S280,50 300,70" 
                      fill="none"
                      stroke="#880000"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeDasharray="1000"
                      strokeDashoffset="1000"
                      className="animate-sign" 
                    />
                  </svg>
                  <div className="absolute top-0 left-0 w-16 h-16 pointer-events-none animate-[write_2.5s_linear_forwards] z-30">
                     <svg viewBox="0 0 24 24" fill="currentColor" className="text-slate-900 w-full h-full drop-shadow-xl transform -rotate-12">
                        <path d="M19.07 4.93L17.07 6.93L15.07 4.93L17.07 2.93L19.07 4.93ZM14.07 5.93L3 17V21H7L18.07 9.93L14.07 5.93Z" />
                     </svg>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;