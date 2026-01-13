import React from 'react';

const WorldSection: React.FC = () => {
  return (
    <div className="relative w-full flex flex-col gap-16 p-4 md:p-8">
      
      {/* Title Area */}
      <div className="border-l-4 border-slate-500 pl-6 py-2">
        <h2 className="text-5xl md:text-6xl font-bombaram text-white leading-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] mb-2">
          극야와 긴 밤
        </h2>
      </div>

      {/* Main Description - More Transparent Background */}
      <div className="max-w-4xl bg-black/20 backdrop-blur-sm p-8 md:p-10 border-t border-b border-slate-600/50 hover:bg-black/50 transition-colors duration-500">
        <p className="text-slate-200 leading-loose text-xl md:text-2xl font-chosun tracking-wide">
          200년간 지속된 <span className="text-cyan-400 font-bold">'극야'</span>가 끝나고, 
          20년의 <span className="text-slate-400 font-bold">'긴 밤'</span>이 막 지나갔다. 
          대륙은 황폐화되었고, 감염체들은 또다른 희생자들을 찾아 헤메이고 있다.
          <br/><br/>
          해는 짧고, 어둠은 여전히 길 뿐.
        </p>
      </div>

      {/* Grid Layout for Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-4">
        
        {/* Events Card */}
        <div className="relative group transition-all duration-500">
           {/* Decorative Border & Glow on Hover */}
           <div className="absolute inset-0 border border-slate-700 bg-black/60 backdrop-blur-md transition-all duration-500 group-hover:border-white/40 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"></div>
           <div className="absolute inset-0 bg-gradient-to-b from-slate-800/20 to-transparent pointer-events-none"></div>
           
           <div className="relative z-10 p-8 md:p-10">
             <h4 className="text-slate-300 font-bold text-3xl mb-8 font-bombaram border-b border-slate-600 pb-4 flex items-center group-hover:text-white transition-colors">
               <span className="w-2 h-2 bg-slate-400 rotate-45 mr-3 group-hover:bg-white transition-colors"></span>
               주요 사건 기록
             </h4>
             <ul className="space-y-8 text-slate-300 font-chosun text-lg">
                <li className="flex flex-col gap-3 group-hover:text-white transition-colors">
                  <span className="font-bold text-xl text-slate-200 group-hover:text-white group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] transition-all">■ 극야 (The Polar Night)</span>
                  <span className="leading-relaxed opacity-80 pl-4 border-l border-slate-600 group-hover:border-white/50 transition-colors">
                    원인 불명의 '심연 감염' 확산으로 인한 대륙의 붕괴. 태양이 사라진 200년의 시간.
                  </span>
                </li>
                <li className="flex flex-col gap-3 group-hover:text-white transition-colors">
                  <span className="font-bold text-xl text-slate-200 group-hover:text-white group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] transition-all">■ 긴 밤 (The Long Night)</span>
                  <span className="leading-relaxed opacity-80 pl-4 border-l border-slate-600 group-hover:border-white/50 transition-colors">
                    극야 직후의 암흑기. 기아, 감염, 그리고 어둠 학자와 마법사들을 향한 잔혹한 마녀사냥의 시대.
                  </span>
                </li>
              </ul>
           </div>
        </div>

        {/* Infection Info Card */}
        <div className="relative group transition-all duration-500">
            <div className="absolute inset-0 border border-red-900/30 bg-black/60 backdrop-blur-md transition-all duration-500 group-hover:border-red-500/40 group-hover:shadow-[0_0_20px_rgba(220,38,38,0.2)]"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-red-900/10 to-transparent pointer-events-none"></div>

            <div className="relative z-10 p-8 md:p-10">
              <div className="flex justify-between items-center mb-8 border-b border-red-900/50 pb-4">
                  <h3 className="text-3xl font-bombaram text-red-700/80 group-hover:text-red-500 group-hover:drop-shadow-[0_0_8px_rgba(220,38,38,0.5)] transition-all flex items-center">
                    <span className="w-2 h-2 bg-red-800 rotate-45 mr-3 group-hover:bg-red-500 transition-colors"></span>
                    심연 감염
                  </h3>
                  <span className="text-xs text-red-900/80 border border-red-900/50 px-2 py-1 tracking-widest group-hover:text-red-500 group-hover:border-red-500">CLASSIFIED</span>
              </div>
              
              <div className="space-y-8 text-slate-300 font-chosun text-lg">
                <div className="flex gap-4 items-start group-hover:text-white transition-colors">
                  <div className="text-slate-500 font-serif font-bold italic text-xl">I.</div>
                  <div>
                    <strong className="text-slate-200 block mb-2 text-xl group-hover:text-red-200">감염 대상</strong>
                    <p className="text-slate-400 opacity-80">생물과 무생물을 구분하지 않고 잠식한다.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start group-hover:text-white transition-colors">
                  <div className="text-slate-500 font-serif font-bold italic text-xl">II.</div>
                  <div>
                    <strong className="text-slate-200 block mb-2 text-xl group-hover:text-red-200">초기 증상</strong>
                    <p className="text-slate-400 opacity-80">악몽, 불면증, 야간 시야 확보 및 신체 능력 강화. (잠복기 개인차 존재)</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group-hover:text-white transition-colors">
                  <div className="text-red-800 font-serif font-bold italic text-xl">III.</div>
                  <div>
                    <strong className="text-red-800/80 block mb-2 text-xl group-hover:text-red-500 transition-colors">말기 변이</strong>
                    <p className="text-slate-400 opacity-80">중기 없이 급변. 검은 혈관, 청색 안광, 이성 상실 및 무차별 감염 본능.</p>
                  </div>
                </div>
              </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default WorldSection;