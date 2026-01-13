import React, { useState } from 'react';
import { MAP_POINTS } from '../constants';

// ==================================================================================
// [이스터에그 (노던라이트 클릭 시) 배경 이미지 수정]
// 이 변수의 URL을 변경하면 이스터에그 화면의 배경이 바뀝니다.
// ==================================================================================
const EASTER_EGG_BG = "https://od.lk/s/OF8xOTk5MTUxNjZf/abyss.webp";

const MapSection: React.FC = () => {
  const [hoveredPoint, setHoveredPoint] = useState<typeof MAP_POINTS[0] | null>(null);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  // Play Paper Sound
  const playPaperSound = () => {
    const audio = new Audio("https://od.lk/s/OF8xOTk4ODYzODJf/turn_se.mp3");
    audio.volume = 0.3;
    audio.play().catch(e => console.log("Audio play prevented", e));
  };

  const handlePointClick = (point: typeof MAP_POINTS[0]) => {
    if (point.id === 'northern') {
      playPaperSound();
      setShowEasterEgg(true);
    }
  };

  const handleMouseEnter = (point: typeof MAP_POINTS[0]) => {
    if (hoveredPoint?.id !== point.id) {
         playPaperSound();
         setHoveredPoint(point);
    }
  };

  return (
    <div className="flex flex-col gap-6 relative">
      {/* 
         2. Map Container
         Removed aspect-ratio and fixed height constraints.
         Now essentially a wrapper around the full-width image.
      */}
      <div className="relative w-full shadow-2xl rounded-sm group z-10">
        
        {/* Actual Map Image - Full View */}
        <img 
           src="https://od.lk/s/OF8xOTk5MTQ2NTFf/map.webp"
           alt="Map"
           className="w-full h-auto block"
        />
        
        {/* Overlay Darkener */}
        <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent pointer-events-none"></div>

        {/* Path Line (SVG) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-60">
          <polyline 
            points={MAP_POINTS.map(p => `${p.x}%,${p.y}%`).join(' ')}
            fill="none"
            stroke="#94a3b8" 
            strokeWidth="1" 
            strokeDasharray="4,4"
            className="drop-shadow-md"
          />
        </svg>

        {/* Map Points */}
        <div className="absolute inset-0 z-20">
          {MAP_POINTS.map((point) => (
            <div 
              key={point.id}
              onClick={() => handlePointClick(point)}
              onMouseEnter={() => handleMouseEnter(point)}
              onMouseLeave={() => setHoveredPoint(null)}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group/pin transition-all duration-300 z-30
                ${point.id === 'northern' ? 'cursor-pointer' : 'cursor-default'}`}
              style={{ left: `${point.x}%`, top: `${point.y}%` }}
            >
               {/* Dot Style Icon */}
               <div className={`
                 w-4 h-4 rounded-full flex items-center justify-center 
                 border border-white/50 shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-300
                 bg-slate-200 group-hover/pin:scale-150 group-hover/pin:bg-white
                 ${point.id === 'northern' ? 'animate-pulse bg-red-500 border-red-300 shadow-red-500/50 w-5 h-5' : ''}
               `}>
               </div>

               {/* Simple Label */}
               <span className="mt-3 text-xs font-bold px-2 py-1 rounded bg-black/60 backdrop-blur-sm whitespace-nowrap text-slate-300 border border-slate-700 font-bombaram pointer-events-none">
                 {point.name}
               </span>
            </div>
          ))}
        </div>

        {/* Hover Preview Card */}
        {hoveredPoint && (
          <div 
            className="absolute z-40 w-64 bg-black/90 backdrop-blur-md border border-slate-500 rounded-sm overflow-hidden animate-fade-in shadow-[0_0_30px_rgba(0,0,0,0.8)] pointer-events-none"
            style={{ 
                left: hoveredPoint.x > 60 ? `calc(${hoveredPoint.x}% - 17rem)` : `calc(${hoveredPoint.x}% + 2rem)`,
                top: `calc(${hoveredPoint.y}% - 5rem)` 
            }}
          >
            <div className="h-28 w-full relative border-b border-slate-700">
              <img 
                src={hoveredPoint.image} 
                alt={hoveredPoint.name} 
                className="w-full h-full object-cover" 
                loading="eager"
              />
              {/* Vignette Overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_50%,rgba(0,0,0,0.8)_100%)]"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              
              <h3 className="absolute bottom-2 left-3 text-white font-bombaram text-lg drop-shadow-md z-10">{hoveredPoint.name}</h3>
            </div>
            <div className="p-3">
              <p className="text-slate-300 text-xs font-chosun leading-relaxed">
                {hoveredPoint.desc}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* EASTER EGG MODAL */}
      {showEasterEgg && (
        <div 
          className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center animate-fade-in cursor-not-allowed overflow-hidden"
          onClick={() => setShowEasterEgg(false)}
        >
           {/* Background Image */}
           <div 
              className="absolute inset-0 z-0 opacity-60 animate-pulse-slow"
           >
             <img 
              src={EASTER_EGG_BG} 
              alt="Abyss" 
              className="w-full h-full object-cover" 
              loading="eager"
             />
           </div>
           
           {/* 
              Zalgo Text Container
           */}
           <div className="relative z-10 text-center space-y-8 pointer-events-none">
              {/* 
                  1. '접근 거부' -> Keep Glitch 
              */}
              <h1 
                className="text-6xl md:text-8xl font-maguntia text-red-600 tracking-widest glitch"
                data-text="접근 거부"
              >
                 접근 거부
              </h1>
              
              {/* 
                  2. 'DO NOT LOOK...' -> Remove Glitch, Add Blur 
                  User requested: "do not look into abyss 문구는 이펙트 빼주고, 아까처럼 흐릿하게 유지해줘!"
              */}
              <p 
                className="text-white font-serif text-2xl tracking-[0.5em] opacity-80 blur-[2px] leading-loose"
              >
                 D̴̢̨̡̝̱̠̖͙̘̰̬͔̭͓̗̮̠̝̝͔̞͍͈̝̭͚̬͓̟͎̯͕̥͗̍͗̇͆͒̎̉̚͜͝O̴̡̨̻̩͔̫̩͇̱̻͕̟͎̞̗̥͖̹̗̺̝̰̗̖̘̭̞̭̠͎̙͍̳̜͙̠͙̹͚͚̝̐͊͋͐͗̂̿̒̈́̌̃̍̈̃̊̏͛́͌́̏̈́͊̊̚̚͘͘͜͝͠͝͝͝ͅ ̷̡̣̻͓̥̘̩̗̲̘̙̺̺͙̠̺̺̠̩̲̂̉͌Ǹ̷̡̠͇̮͈̹̪̰̙̺̦̫͓̰̹̻̺͙̰̻͉͎̺̲͚̮̤͍̖̫̬̜͚̞͎͍̹̖̟͖̭̍̀̿̉͊̏̈́̈͆͐̈͂͆̀̐̐̿̍̒̂͂̇͒̈́̓͋̑͑̌̋͛̚͘̕͘͜͝͝͝͠͝͝ͅǪ̷̢̡̨̡̢̨̢̨̛͖̼͔͍͓̹̰͍̠̖͇̣̗̥̠̩̹̤͈͕̫̫̼̟̣̲̱̥͎̟͎͖͕͖͖̜͕̩̬̝̈́͌̇̓͊̾̓͊̑̆̌͗̇̈́̃̍̒̌̋̑͊̌͆͛̂͗̈́͑̆̐̈́͘͘ͅT̸̨̨̡̨̢̨̧̨̛̲̠̼̩̺̭͎̲͓͙̦̪͇̫̺͙͔͚̘̫͚͈̘̮̥̣̼͈͍̪̗̯̖̼̼̰̞̼̈́̏͂̅̈̐̀̍͊̅͊̂́̏͒̒͆̀̏͊̄̈́̌̇̋͑́͂̔̔̈́́̐͛̈͘̚͘̕̕̚͘̕̕͝͠͠ͅͅͅ ̶̢̢̧̨̧̛͓͇̰̫͔̝̗̳̥̪̟̱̰̩̩̮̺̜̟̣͖͈͕̖̙̥̲̟̟̫̯͓̫̠̰̲͔̲͍̮̦̥̣̘̎̿͋̑͂̓́͐̐͒͊͌̅̓̽̌͑͊̇́̈̚͜͜͜͠͝͝L̴̢̪̞̤̙̗̰͈͙͚̮̣̼̦̼̻̜͇͚̱͖̟̰̞͉̜̬̦̳͖̞͈͔͕̠͍̘̜̱̎̈́̚͜Ó̴̢̢̢̡͎͔̺̻̫̘̗̮͙̱̗̹̬̤̠̞̜̝͈̩̦̹͎̭̺͇͎̣̞͚̜̥̣̝̘̠͈̜̤̼̱̉̀̅̊͊͜ͅͅͅͅŐ̷̧̨̢̧̧̨̧̬̮͚̯̪̖̺̝͓͕̫͔̼̯̩̥̜̻̻̻͍̪̭̠̩̦̮̘̍͊̅̓̈́̎͌̾̓̽̽̓͒̇̾̐͋͌̽͒͐̓̾̏̐̒̾͗̌̈́̈̕̕͘͠͠͝͝͝͝͝͠͠K̷̢̡̨̛̫͕̙͉͎͔͙̻̪̱̥̮̦͉̺̮̣͕̥̣̰̜̝̠̝̹̰̣̖̱̗̩̐̓̆̄̀͆͒͂̅͒̉̒̈́̀̃͗̉͊̈̾̽͂̚̕͘͝͠ͅͅ ̴̢̨͖̰̘̖̯̿͋͋̀͐̓̐̄̇̈́̇̈́͑͗͆͊̒̀̉̉̎̽͘͠͝͝ͅI̶̢̡̨̢̧̢̢̡̛̛̛̖̗̜̟̺̻̣̫̹̯̣͇̝̘̙͕̜̥͚̭͚̜̭̜̬̳͙̭͍͍̠̩̘̙͇͒̃̃̐͌̾̐̇͂̈́͑̑̑͐̂͂̆̔̓̔̏͋̓̈́͋̆͊̀̍̽͆͑̿͛̎̉͐͘̕͜͠͝͝͝N̶̢̧̢̧̢̧̡̧̻͍̪̙̥̦̰̦̖̞̬͕̯̣̟̞͖̳̝͍̖͉̝̣̫̙̻̭̘͐̉̎̇̏̓̿͆̔̃͆͋̋͂͒̀̀͋̒͐̈̅͂̇̎͗͗͂͘̕͜͝͝͠ͅT̸̨̡̤̳̪̹͓̙̩͙̦̣̣̙͔̩̼̳̈́̍͐͆̍̉̔̅O̵̧̨̢̨̢̗̩̘͙͈͓̻̼̭͖̳͚̖̲̻̩̳͉͙̯͙̣̩̯̯̗̜̬̘͓̥̟͍̺̱̳̬̳̅̒̿͑͌́̏̓͐̆͆̓̎̓͌̃͋̔̏̈́̈́́̾͑͋͋͐̍̊̇̔̊͌̿̕̕̚͜͜͝͝͠͝ͅ ̵̨̡̨̡̡̙̮͚̠̖̼̪̤̩̝̦̲̳̲̖̼͈̗̜͉͖̝̰̖̭̠͚̲͙̬̜̠̪̦̟̞͇̟̠̲̳̯̇̈̎̆͂͂́̈̓̔̀̑̊̌̓͛̈́́͋͘̚͘̚͜͝͝Ą̷̢̡̨̢̡̧̛̘̺̪̖͙̘̩̲̪̯̺͎̭̳͎̳͈̤̠͖͚͔̫̠̜͎̐́̾̄͆̈̉͆̐͛̀̽͂́͋̃́͑̉̎͋̏̍̈̀͆̔̾̎͋̑̈́̆̈́̇͌̀̏̑̚̚͠͝͝͠B̵̢̡̧̨̧̛̬̹͔͍͍̺̞̮͕̫̗̰̱̱̞͇̦̬̤̝̫̼̺̺̤͍̊̈́̐̑̏̓̿̑̊̄̈́̓͒̾̅̒̿̚͝Y̸̧̛̛̮̺̣̟͈̗̯͙̩͙̫̜͍̻̯̯͓̲̻̮̍̄̌̇̏̊̄̈́̑̓͊̆̀̎̇̇̆͊̈͊̀̿̈́̈́̈̄̎̔̽͂̍̍̀͋̌̈́͊̀̚̚͘͠͝͠S̸̨̛̝̺̣̙̭̹̦̭̗̺̹̗̗̺͉̀̍͝ͅS̵̢̨̢̨̨̺͚̹̥͔̠̞̥̤̥̤̘̪͓̫͉͉͕̣̪̞̜͇̞̘͙̩̮̣͎̙͕̬̝̳͍̱̰̐͛̆̋̆̍͂̋̋͒̽͑̀̃̀͆̽̀̀̀̍͑̌̍̊́̅͛͗̓͛̂̆̈͘̕͘͜͜͠͠͝͝͝͠
              </p>
           </div>

           {/* CRT Scanline Effect */}
           <div className="absolute inset-0 z-20 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]"></div>
        </div>
      )}
    </div>
  );
};

export default MapSection;