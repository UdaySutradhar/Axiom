'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, CheckCircle2 } from 'lucide-react';
import { NetworkBadge } from '@/components/ui/NetworkBadge';
import { ChainType } from '@/lib/types';

interface NetworkSelectorProps {
  activeChain: ChainType;
  onSwitch: (chain: ChainType) => void;
}

export const NetworkSelector = ({ activeChain, onSwitch }: NetworkSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-[#121214] border border-zinc-800 rounded-[4px] px-2.5 py-1 hover:border-zinc-700 transition-colors group min-w-[70px]"
      >
        <div className="flex items-center gap-1.5">
          <NetworkBadge chain={activeChain} />
          <span className={`text-[12px] font-bold transition-colors ${activeChain === 'SOL' ? 'text-white group-hover:text-cyan-400' : 'text-yellow-500'}`}>
            {activeChain}
          </span>
        </div>
        <ChevronDown size={12} className="text-zinc-500" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-40 bg-[#18181b] border border-zinc-800 rounded-md shadow-xl py-1 z-50 flex flex-col">
          <div className="px-3 py-1.5 text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Select Chain</div>
          {(['SOL', 'BNB'] as ChainType[]).map(chain => (
            <button 
              key={chain}
              onClick={() => { onSwitch(chain); setIsOpen(false); }}
              className="flex items-center gap-3 px-3 py-2 hover:bg-zinc-800 text-left transition-colors w-full"
            >
              <NetworkBadge chain={chain} />
              <span className={`text-sm ${activeChain === chain ? (chain === 'SOL' ? 'text-cyan-400' : 'text-yellow-400') : 'text-zinc-300'} font-bold`}>
                {chain === 'SOL' ? 'Solana' : 'BNB Chain'}
              </span>
              {activeChain === chain && <CheckCircle2 size={12} className={`ml-auto ${chain === 'SOL' ? 'text-cyan-400' : 'text-yellow-400'}`} />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};