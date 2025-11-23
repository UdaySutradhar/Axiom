'use client';

import React, { memo } from 'react';
import { Zap, Menu, Settings } from 'lucide-react';
import TokenCard from './TokenCard';
import { Token } from '@/lib/types';

interface TokenColumnProps {
  title: string;
  tokens: Token[];
  isLoading: boolean;
}

const ColumnHeader = memo(({ title }: { title: string }) => (
  <div className="flex items-center justify-between px-3 py-2 bg-[#0c0c0e] border-b border-zinc-800 sticky top-0 z-10 h-10 select-none">
    <h3 className="text-[13px] font-medium text-zinc-200">{title}</h3>
    <div className="flex items-center gap-2">
       <div className="flex items-center gap-1 px-1.5 py-[2px] bg-zinc-900 rounded-[3px] border border-zinc-800 hover:border-zinc-700 transition-colors cursor-pointer">
          <Zap size={9} className="text-zinc-500 fill-zinc-500" />
          <span className="text-[10px] text-zinc-400 font-mono">0</span>
       </div>
       <Menu size={13} className="text-[#3b82f6] cursor-pointer" />
       <div className="flex bg-[#09090b] rounded-[3px] border border-zinc-800 p-[1px]">
          {['P1', 'P2', 'P3'].map((p, i) => (
             <span key={p} className={`text-[9px] px-1.5 py-[1px] rounded-[2px] cursor-pointer font-medium ${i === 0 ? 'bg-zinc-800 text-blue-400' : 'text-zinc-600 hover:text-zinc-400'}`}>{p}</span>
          ))}
       </div>
       <Settings size={12} className="text-zinc-500 hover:text-zinc-300 cursor-pointer" />
    </div>
  </div>
));

export const TokenColumn = memo(({ title, tokens, isLoading }: TokenColumnProps) => {
  return (
    <section className="flex flex-col bg-[#09090b] min-h-0 border-r border-zinc-800/50 last:border-r-0">
      <ColumnHeader title={title} />
      <div className="flex-1 overflow-y-auto p-0 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
        {isLoading 
          ? Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-[84px] border-b border-zinc-900/50 bg-[#0c0c0e] animate-pulse" />
            ))
          : tokens.map(t => <TokenCard key={t.id} token={t} />)
        }
      </div>
    </section>
  );
});