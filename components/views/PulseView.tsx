'use client';

import React from 'react';
import { TokenColumn } from '@/components/dashboard/TokenColumn';
import { Token, ChainType } from '@/lib/types';
import { LayoutGrid, List, HelpCircle, ChevronDown } from 'lucide-react';

// --- Custom Icons ---
const SolanaLogo = () => (
  <svg width="18" height="14" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sol_grad" x1="0" y1="0" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#9945FF" />
        <stop offset="100%" stopColor="#14F195" />
      </linearGradient>
    </defs>
    <path d="M4.93 0h21.96c.64 0 1.17.41 1.34 1.02.17.61-.06 1.27-.58 1.66l-4.78 3.59c-.3.22-.66.34-1.03.34H-.13c-.64 0-1.17-.41-1.34-1.02-.17-.61.06-1.27.58-1.66L3.89.34C4.19.12 4.56 0 4.93 0zm-5.06 9.7h21.96c.64 0 1.17.41 1.34 1.02.17.61-.06 1.27-.58 1.66l-4.78 3.59c-.3.22-.66.34-1.03.34H-.13c-.64 0-1.17-.41-1.34-1.02-.17-.61.06-1.27.58-1.66l4.78-3.59c.3-.23.67-.34 1.04-.34zm5.06 9.69h21.96c.64 0 1.17.41 1.34 1.02.17.61-.06 1.27-.58 1.66l-4.78 3.59c-.3.22-.66.34-1.03.34H-.13c-.64 0-1.17-.41-1.34-1.02-.17-.61.06-1.27.58-1.66l4.78-3.59c.3-.23.67-.34 1.04-.34z" fill="url(#sol_grad)" transform="translate(1.5, 0.5) scale(0.9)" />
  </svg>
);

const BnbLogo = () => (
  <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="#F3BA2F" d="M16 0L3.8 6.9v18.2L16 32l12.2-6.9V6.9L16 0zm0 3.3l8.6 4.9-3.2 1.9-5.4-3.1-5.4 3.1-3.2-1.9L16 3.3zm-8.6 6.8l3.2 1.9v3.8l-3.2 1.9-3.2-1.9v-3.8l3.2-1.9zm8.6 15.6l-8.6-4.9 3.2-1.9 5.4 3.1 5.4-3.1 3.2 1.9-8.6 4.9zm8.6-6.8l-3.2 1.9v3.8l3.2-1.9 3.2 1.9v3.8l-3.2-1.9z"/>
  </svg>
);

interface PulseViewProps {
  activeChain: ChainType;
  newPairs: Token[];
  finalStretch: Token[];
  migrated: Token[];
  isLoading: boolean;
  onChainSwitch: (chain: ChainType) => void; // Added callback
}

export const PulseView = ({ activeChain, newPairs, finalStretch, migrated, isLoading, onChainSwitch }: PulseViewProps) => {
  return (
    <div className="flex-1 flex flex-col overflow-hidden relative">
      
      {/* TOOLBAR */}
      <div className="h-12 border-b border-zinc-800 bg-[#09090b] flex items-center justify-between px-4 shrink-0 select-none">
         <div className="flex items-center gap-6">
            
            {/* PULSE TITLE + INTERACTIVE LOGOS */}
            <div className="flex items-center gap-4">
              <h1 className="text-3xl font-medium text-white tracking-tight">Pulse</h1>
              <div className="flex items-center gap-3">
                 
                 {/* Solana Switcher */}
                 <button 
                   onClick={() => onChainSwitch('SOL')}
                   className={`flex items-center justify-center transition-all duration-200 ${
                     activeChain === 'SOL' 
                       ? 'w-9 h-9 rounded-full bg-[#161618] shadow-inner ring-1 ring-white/5 scale-100 opacity-100' 
                       : 'w-7 h-7 opacity-40 hover:opacity-100 hover:scale-110 grayscale'
                   }`}
                   aria-label="Switch to Solana"
                 >
                    <SolanaLogo />
                 </button>

                 {/* BNB Switcher */}
                 <button 
                   onClick={() => onChainSwitch('BNB')}
                   className={`flex items-center justify-center transition-all duration-200 ${
                     activeChain === 'BNB' 
                       ? 'w-9 h-9 rounded-full bg-[#161618] shadow-inner ring-1 ring-white/5 scale-100 opacity-100' 
                       : 'w-7 h-7 opacity-40 hover:opacity-100 hover:scale-110 grayscale'
                   }`}
                   aria-label="Switch to BNB"
                 >
                    <BnbLogo />
                 </button>
              </div>
            </div>

            <div className="w-px h-6 bg-zinc-800/50"></div>

            <div className="flex gap-1 bg-[#121214] p-[2px] rounded-md border border-zinc-800/50">
               <button className="p-1.5 bg-zinc-800 rounded-[4px] text-[#3b82f6] shadow-sm"><LayoutGrid size={13} /></button>
               <button className="p-1.5 text-zinc-600 hover:text-zinc-400"><List size={13} /></button>
            </div>
         </div>

         <div className="flex items-center gap-4">
             <div className="flex items-center gap-3">
               <div className="group cursor-pointer hover:bg-zinc-800 p-1.5 rounded-full transition-colors">
                 <HelpCircle size={18} className="text-zinc-500 group-hover:text-white" />
               </div>
               <div className="flex items-center gap-2 bg-[#121214] border border-zinc-800 rounded-[4px] px-3 py-1.5 cursor-pointer hover:bg-zinc-800 transition-colors">
                  <List size={14} className="text-zinc-400" />
                  <span className="text-[12px] font-medium text-zinc-300">Display</span>
                  <ChevronDown size={12} className="text-zinc-500" />
               </div>
             </div>
         </div>
      </div>

      {/* COLUMNS GRID */}
      <div className="flex-1 overflow-hidden relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 h-full divide-x divide-zinc-800/50">
          <TokenColumn title="New Pairs" tokens={newPairs} isLoading={isLoading} />
          <TokenColumn title="Final Stretch" tokens={finalStretch} isLoading={isLoading} />
          <TokenColumn title="Migrated" tokens={migrated} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};