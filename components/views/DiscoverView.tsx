'use client';

import React from 'react';
import { Filter, Search, Zap, Copy, ChevronDown } from 'lucide-react';

const MOCK_TRENDING = [
  { name: 'titmas', symbol: 'titmas', price: '$14.2K', change: '+41.99%', liq: '$15.5K', vol: '$17.8K', icon: '🎅' },
  { name: 'Polycoin', symbol: 'Will Polyc...', price: '$61.9K', change: '+2.44%', liq: '$24.3K', vol: '$14.8K', icon: '🔷' },
  { name: 'AgentM', symbol: 'AgentM', price: '$17.2K', change: '+212.4%', liq: '$16.9K', vol: '$13.4K', icon: '🕵️' },
  { name: 'NEMO', symbol: 'Justice For...', price: '$16.7K', change: '+12.17%', liq: '$16.9K', vol: '$3.67K', icon: '🐠' },
  { name: 'NOnad', symbol: 'NOnad', price: '$6.64K', change: '+46.4%', liq: '$10.6K', vol: '$6.93K', icon: '🤪' },
  { name: 'Arcade', symbol: 'Pump Arcade', price: '$7.45K', change: '+83.95%', liq: '$11.3K', vol: '$3.62K', icon: '🕹️' },
];

export const DiscoverView = () => (
  <div className="flex flex-col h-full bg-[#09090b]">
    {/* Filter Bar */}
    <div className="h-14 border-b border-zinc-800 flex items-center justify-between px-4 bg-[#0c0c0e]">
      <div className="flex items-center gap-6">
        <h2 className="text-white font-semibold text-lg">Trending</h2>
        <div className="flex gap-4 text-sm font-medium text-zinc-500">
          <span className="hover:text-white cursor-pointer">Surge</span>
          <span className="hover:text-white cursor-pointer">DEX Screener</span>
          <span className="hover:text-white cursor-pointer flex items-center gap-1">Pump Live <ChevronDown size={12}/></span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="bg-zinc-900 border border-zinc-800 rounded p-1 flex text-xs font-medium text-zinc-400">
           <span className="px-2 py-1 cursor-pointer hover:text-white">1m</span>
           <span className="px-2 py-1 bg-zinc-800 text-white rounded cursor-pointer">5m</span>
           <span className="px-2 py-1 cursor-pointer hover:text-white">30m</span>
           <span className="px-2 py-1 cursor-pointer hover:text-white">1h</span>
        </div>
        <button className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded text-sm text-zinc-300">
           <Filter size={14} /> Filter
        </button>
      </div>
    </div>

    {/* Table */}
    <div className="flex-1 overflow-y-auto p-4">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="text-xs text-zinc-500 border-b border-zinc-800/50">
            <th className="pb-3 pl-4 font-medium">Pair Info</th>
            <th className="pb-3 font-medium"></th>
            <th className="pb-3 font-medium">Market Cap</th>
            <th className="pb-3 font-medium">Liquidity</th>
            <th className="pb-3 font-medium">Volume</th>
            <th className="pb-3 font-medium">TXNS</th>
            <th className="pb-3 font-medium text-right pr-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {MOCK_TRENDING.map((t, i) => (
            <tr key={i} className="group border-b border-zinc-800/30 hover:bg-zinc-800/20 transition-colors">
              <td className="py-3 pl-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center text-xl shadow-inner ring-1 ring-white/5">
                    {t.icon}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-zinc-200 group-hover:text-blue-400 transition-colors">{t.name}</div>
                    <div className="text-xs text-zinc-500 flex items-center gap-1">{t.symbol} <Copy size={10}/></div>
                  </div>
                </div>
              </td>
              <td className="py-3">
                 {/* Sparkline Mock */}
                 <div className="w-24 h-8 flex items-end gap-[2px]">
                    {[40,60,45,70,50,80,60,90,75,100].map((h, j) => (
                       <div key={j} style={{height: `${h}%`}} className={`w-1 rounded-sm ${t.change.includes('+') ? 'bg-emerald-500/20' : 'bg-red-500/20'}`}></div>
                    ))}
                 </div>
              </td>
              <td className="py-3 font-mono text-sm">
                 <div className="text-white">{t.price}</div>
                 <div className="text-[10px] text-emerald-400">{t.change}</div>
              </td>
              <td className="py-3 font-mono text-sm text-zinc-400">{t.liq}</td>
              <td className="py-3 font-mono text-sm text-zinc-400">{t.vol}</td>
              <td className="py-3 font-mono text-sm">
                 <div className="text-zinc-300">372</div>
                 <div className="text-[10px] text-zinc-600">219 / 153</div>
              </td>
              <td className="py-3 text-right pr-4">
                 <button className="bg-[#3b82f6] hover:bg-blue-600 text-white px-4 py-1.5 rounded text-xs font-bold shadow-[0_0_10px_rgba(59,130,246,0.3)] transition-all">
                    Buy
                 </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);