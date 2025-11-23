'use client';

import React, { memo } from 'react';
import { Copy, Flame, Clock, User, Globe, Link as LinkIcon, Search, Activity, Home, Shield, Lock, Leaf } from 'lucide-react';
import { Token } from '@/lib/types';
import { formatMoney } from '@/lib/utils';

interface TokenCardProps {
  token: Token;
}

// Sub-component for small stats
const StatItem = ({ icon: Icon, value, color = "text-emerald-500" }: any) => (
  <div className="flex items-center gap-0.5 text-[9px] font-mono font-medium min-w-[24px]">
    <Icon size={9} className={color} />
    <span className={value > 0 ? "text-emerald-500" : "text-zinc-500"}>{value}%</span>
  </div>
);

const TokenCard = memo(({ token }: TokenCardProps) => {
  return (
    <div className="flex gap-2 p-2 bg-[#0c0c0e] hover:bg-[#151518] border-b border-zinc-900/50 group h-[84px] select-none transition-colors cursor-pointer">
      
      {/* 1. Icon & Address Column */}
      <div className="flex flex-col justify-between w-[52px] shrink-0">
        <div className="w-[52px] h-[52px] bg-zinc-800 rounded-[4px] overflow-hidden relative border border-white/5 flex items-center justify-center text-2xl shadow-inner">
          {token.icon}
          <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-black/60 backdrop-blur rounded-tl flex items-center justify-center">
             <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.8)]"></div>
          </div>
        </div>
        <span className="text-[9px] text-zinc-600 font-mono truncate text-center mt-0.5 font-medium tracking-tight hover:text-zinc-400 transition-colors">
          {token.address}
        </span>
      </div>

      {/* 2. Data Grid Column */}
      <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
        
        {/* Row A: Name & Market Cap */}
        <div className="flex justify-between items-start leading-none">
          <div className="flex items-center gap-1.5 min-w-0">
            <h4 className="text-zinc-100 font-bold text-[13px] truncate tracking-tight">{token.name}</h4>
            <span className="text-zinc-500 text-[11px] truncate hidden sm:block font-medium">{token.desc}</span>
            <Copy size={9} className="text-zinc-600 hover:text-zinc-400" />
            {token.isFire && <Flame size={9} className="text-orange-500 fill-orange-500" />}
          </div>
          <div className="flex items-center gap-1">
             <span className="text-[9px] text-zinc-600 font-sans font-bold">MC</span>
             <span className="text-cyan-400 font-mono font-bold text-[13px] tracking-tight">{formatMoney(token.mc)}</span>
          </div>
        </div>

        {/* Row B: Time, Socials, Volume */}
        <div className="flex justify-between items-center mt-[-2px]">
          <div className="flex items-center gap-2">
            <span className="text-emerald-500 text-[11px] font-mono font-medium">{token.time}{token.timeUnit}</span>
            
            {token.countdown && (
              <div className="flex items-center gap-1 bg-[#2a1215] border border-red-900/30 px-1 py-[1px] rounded-[2px] text-[9px] text-red-400 font-mono leading-none">
                <Clock size={7} />
                {token.countdown}
              </div>
            )}

            <div className="flex items-center gap-1.5 text-zinc-600 pl-1 border-l border-zinc-800 ml-1 h-3">
               <User size={10} className="hover:text-zinc-400" />
               <Globe size={10} className="hover:text-zinc-400" />
               <LinkIcon size={10} className="hover:text-zinc-400" />
               <Search size={10} className="hover:text-zinc-400" />
               <span className="flex items-center text-[9px] font-mono gap-0.5 text-zinc-500 ml-1">
                  <User size={8} /> {token.holders}
               </span>
            </div>
          </div>

          <div className="flex items-center gap-1 text-[11px] font-mono">
             <span className="text-zinc-600 text-[9px] font-bold">V</span>
             <span className="text-white font-medium">${token.vol.toFixed(0)}</span>
          </div>
        </div>

        {/* Row C: Advanced Stats */}
        <div className="flex justify-between items-end mt-0.5">
           <div className="flex items-center gap-2">
              <StatItem icon={Activity} value={token.stats.run} />
              <StatItem icon={Home} value={token.stats.house} color="text-blue-500" />
              <StatItem icon={Shield} value={token.stats.shield} />
              <StatItem icon={Lock} value={token.stats.lock} />
              <StatItem icon={Leaf} value={token.stats.bio} />
           </div>

           <div className="flex flex-col items-end leading-none gap-1">
              <div className="flex items-center gap-1 text-[10px] font-mono">
                 <span className="text-zinc-600 text-[9px] font-bold">F</span>
                 <span className="text-cyan-400">{token.fVal}</span>
              </div>
              <div className="flex items-center gap-1 text-[10px] font-mono">
                 <span className="text-zinc-600 text-[9px] font-bold">TX</span>
                 <span className="text-zinc-300">{token.txCount}</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}, (prev, next) => {
  // Performance optimization: Only re-render if data actually changed
  return prev.token.mc === next.token.mc && prev.token.id === next.token.id && prev.token.vol === next.token.vol;
});

export default TokenCard;