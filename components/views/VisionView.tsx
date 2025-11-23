'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown, ArrowUpRight, LayoutGrid, Wallet, User, ArrowUpDown } from 'lucide-react';

// --- MOCK DATA ---
const TOP_KOLS = [
  { name: 'Jijo', pnl: '+$375.5', pnlVal: '+51.5K', win: '70.21%', pos: '282', color: 'from-purple-500/20 to-blue-500/20', img: '🧞‍♂️', border: 'border-blue-500/30' },
  { name: 'Loopierr', pnl: '+$149.6', pnlVal: '+$19K', win: '46.15%', pos: '91', color: 'from-blue-500/20 to-cyan-500/20', img: '🧙‍♂️', border: 'border-zinc-800' },
  { name: 'Cented', pnl: '+$117.2', pnlVal: '+$16.4K', win: '54.98%', pos: '642', color: 'from-orange-500/20 to-red-500/20', img: '🐱', border: 'border-zinc-800' },
];

const GLOBAL_TRADERS = [
  { rank: 1, name: '515v...pNRp', pnl: '+24.8K', win: '81.79%', pos: 291, trades: '1K', vol: '26.6K', time: '5m', color: 'text-yellow-400' },
  { rank: 2, name: '43Yn...Ja6s', pnl: '+19.1K', win: '90.12%', pos: 243, trades: 917, vol: '29.7K', time: '5m', color: 'text-zinc-200' },
  { rank: 3, name: 'CPGh...Fsy9', pnl: '+18.2K', win: '83.96%', pos: 106, trades: 437, vol: '21.1K', time: '8m', color: 'text-zinc-200' },
  { rank: 4, name: '5C5R...7wP2', pnl: '+9.26K', win: '87.3%', pos: 189, trades: 642, vol: '10.5K', time: '7m', color: 'text-zinc-200' },
  { rank: 5, name: '68Xt...upXx', pnl: '+5.91K', win: '70.24%', pos: 84, trades: 512, vol: '8.82K', time: '25m', color: 'text-zinc-200' },
  { rank: 6, name: '8zkJ...dCVp', pnl: '+5.82K', win: '88.68%', pos: 53, trades: 296, vol: '12.1K', time: '1h', color: 'text-zinc-200' },
];

const KOL_TRADERS = [
  { rank: 9, name: 'The Doc', pnl: '+59.9', win: '54.95%', pos: 111, trades: 432, vol: '705.3', time: '1h', color: 'text-zinc-200' },
  { rank: 10, name: '^1s1mple', pnl: '+52.56', win: '45.44%', pos: 504, trades: '1.85K', vol: '2.56K', time: '24s', color: 'text-zinc-200' },
  { rank: 11, name: 'Spuno', pnl: '+43.97', win: '50%', pos: 34, trades: 105, vol: '335.9', time: '1h', color: 'text-zinc-200' },
  { rank: 12, name: 'clukz', pnl: '+39.89', win: '46.99%', pos: 83, trades: 248, vol: '800.2', time: '4m', color: 'text-zinc-200' },
  { rank: 13, name: 'Til', pnl: '+34.39', win: '53.27%', pos: 199, trades: 624, vol: '1.03K', time: '2m', color: 'text-zinc-200' },
];

type TabType = 'KOL' | 'Global' | 'Your Wallets' | 'Tracked';
type SortOption = 'PnL USD' | 'PnL SOL' | 'Volume USD' | 'Volume SOL' | 'Wins' | 'Losses' | 'Buys' | 'Sells' | 'Avg Hold Time';

export const VisionView = () => {
  const [activeTab, setActiveTab] = useState<TabType>('KOL');
  const [sortBy, setSortBy] = useState<SortOption>('PnL SOL');
  const [isSortOpen, setIsSortOpen] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setIsSortOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const sortOptions: SortOption[] = [
    'PnL USD', 'PnL SOL', 'Volume USD', 'Volume SOL', 'Wins', 'Losses', 'Buys', 'Sells', 'Avg Hold Time'
  ];

  return (
    <div className="flex flex-col h-full bg-[#09090b] overflow-hidden relative z-0">
      
      {/* 1. Header Tabs & Search */}
      <div className="h-14 border-b border-zinc-800 flex items-center justify-between px-6 bg-[#0c0c0e] shrink-0 select-none z-10 relative">
        <div className="flex gap-8 text-sm font-bold text-zinc-500 h-full">
          {['KOL', 'Global', 'Your Wallets', 'Tracked'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab as TabType)}
              className={`h-full border-b-2 transition-colors hover:text-zinc-300 relative z-20 ${
                activeTab === tab ? 'text-white border-white' : 'border-transparent'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-[#121214] border border-zinc-800 hover:border-zinc-700 text-zinc-300 px-3 py-1.5 rounded text-xs font-medium transition-colors">
             <ArrowUpRight size={14} /> Apply
          </button>
          <div className="relative group">
             <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-white transition-colors" />
             <input 
               type="text" 
               placeholder={activeTab === 'Your Wallets' ? "Search Your Wallets..." : activeTab === 'Tracked' ? "Search Tracked..." : "Search KOLs..."}
               className="bg-[#121214] border border-zinc-800 rounded-full pl-9 pr-4 py-1.5 text-xs text-zinc-300 w-64 focus:outline-none focus:border-zinc-600 transition-colors placeholder:text-zinc-600" 
             />
          </div>
        </div>
      </div>

      {/* 2. Content Area */}
      <div className="flex-1 overflow-y-auto p-6 relative z-0">
        
        {/* --- Sub-Header: Sort Controls (Visible on KOL & Global) --- */}
        {(activeTab === 'KOL' || activeTab === 'Global') && (
           <div className="flex items-center justify-between mb-6 relative z-20">
              <div className="flex items-center gap-2">
                 
                 {/* SORT DROPDOWN */}
                 <div className="relative" ref={sortRef}>
                    <button 
                      onClick={() => setIsSortOpen(!isSortOpen)}
                      className={`flex items-center gap-2 bg-[#121214] border border-zinc-800 rounded px-3 py-1.5 cursor-pointer hover:bg-zinc-800 transition-colors ${isSortOpen ? 'bg-zinc-800 border-zinc-700' : ''}`}
                    >
                       <span className="text-xs text-zinc-400">Sort by</span>
                       <span className="text-xs font-bold text-white min-w-[60px] text-left">{sortBy}</span>
                       <ChevronDown size={12} className={`text-zinc-500 transition-transform duration-200 ${isSortOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Dropdown Menu */}
                    {isSortOpen && (
                       <div className="absolute top-full left-0 mt-1 w-48 bg-[#18181b] border border-zinc-800 rounded-lg shadow-xl py-1 z-50 animate-in fade-in zoom-in-95 duration-100">
                          {sortOptions.map((option) => (
                             <button
                               key={option}
                               onClick={() => {
                                 setSortBy(option);
                                 setIsSortOpen(false);
                               }}
                               className={`w-full text-left px-3 py-2 text-xs hover:bg-zinc-800 transition-colors ${
                                 sortBy === option ? 'text-white bg-zinc-800/50 font-medium' : 'text-zinc-400'
                               }`}
                             >
                               {option}
                             </button>
                          ))}
                       </div>
                    )}
                 </div>

                 {/* Direction Toggle */}
                 <button className="p-1.5 bg-[#121214] border border-zinc-800 rounded text-zinc-400 hover:text-white transition-colors" title="Toggle Sort Direction">
                    <ArrowUpDown size={14} />
                 </button>
              </div>

              <div className="flex gap-4 text-xs font-medium text-zinc-500">
                 <span className="hover:text-white cursor-pointer">1d</span>
                 <span className="hover:text-white cursor-pointer">3d</span>
                 <span className="text-blue-400 font-bold cursor-pointer">7d</span>
                 <span className="hover:text-white cursor-pointer">14d</span>
                 <span className="hover:text-white cursor-pointer">30d</span>
              </div>
           </div>
        )}

        {/* --- CONTENT: KOL TAB --- */}
        {activeTab === 'KOL' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {TOP_KOLS.map((t, i) => (
                   <div key={i} className={`relative overflow-hidden rounded-xl border ${t.border} bg-[#0c0c0e] p-6 group`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${t.color} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                      <div className="relative z-10">
                         <div className="flex justify-between items-start mb-6">
                            <div className="flex items-center gap-3">
                               <div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center text-2xl border border-white/5 shadow-inner">
                                  {t.img}
                               </div>
                               <div>
                                  <h3 className="font-bold text-base text-white">{t.name}</h3>
                                  <div className="text-xs text-zinc-500">{t.win}</div>
                               </div>
                            </div>
                            <div className="text-right">
                               <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-medium">PNL</div>
                               <div className="text-lg font-mono font-bold text-emerald-400">{t.pnl}</div>
                               <div className="text-xs font-mono text-emerald-500/80">{t.pnlVal}</div>
                            </div>
                         </div>
                         
                         <div className="grid grid-cols-3 gap-2 bg-[#000]/20 rounded-lg p-3 border border-white/5">
                            <div className="text-center">
                               <div className="text-[10px] text-zinc-500 uppercase mb-1">Positions</div>
                               <div className="text-xs font-bold text-white">{t.pos}</div>
                               <div className="text-[10px] text-emerald-500 flex justify-center gap-1">
                                  <span className="text-emerald-400">198</span>
                                  <span className="text-red-400">84</span>
                               </div>
                            </div>
                            <div className="text-center border-l border-white/5">
                               <div className="text-[10px] text-zinc-500 uppercase mb-1">Trades</div>
                               <div className="text-xs font-bold text-white">1.1K</div>
                               <div className="text-[10px] text-emerald-500 flex justify-center gap-1">
                                  <span className="text-emerald-400">605</span>
                                  <span className="text-red-400">499</span>
                               </div>
                            </div>
                            <div className="text-center border-l border-white/5">
                               <div className="text-[10px] text-zinc-500 uppercase mb-1">Volume</div>
                               <div className="text-xs font-bold text-cyan-400">≡ 2.09K</div>
                               <div className="text-[10px] text-zinc-400">$287K</div>
                            </div>
                         </div>
                      </div>
                   </div>
                ))}
             </div>
             
             <div className="mb-4 flex justify-between items-center">
                <h3 className="text-white font-semibold text-lg">Traders</h3>
             </div>

             <TradersTable data={KOL_TRADERS} />
          </div>
        )}

        {/* --- CONTENT: GLOBAL TAB --- */}
        {activeTab === 'Global' && (
           <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="mb-4 flex justify-between items-center">
                 <h3 className="text-white font-semibold text-lg">Traders</h3>
              </div>
              <TradersTable data={GLOBAL_TRADERS} />
           </div>
        )}

        {/* --- CONTENT: YOUR WALLETS (Empty State) --- */}
        {activeTab === 'Your Wallets' && (
           <div className="h-[60vh] flex flex-col items-center justify-center animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 bg-[#121214] rounded-2xl flex items-center justify-center mb-6 border border-zinc-800">
                 <Wallet size={32} className="text-zinc-600" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">No wallet data available</h3>
              <p className="text-zinc-500 text-sm max-w-md text-center">
                 Add some wallets to your account to see their performance rankings and statistics.
              </p>
           </div>
        )}

        {/* --- CONTENT: TRACKED (Empty State) --- */}
        {activeTab === 'Tracked' && (
           <div className="h-[60vh] flex flex-col items-center justify-center animate-in zoom-in-95 duration-300">
              <div className="text-zinc-500 text-sm">
                 No tracked wallets available
              </div>
           </div>
        )}

      </div>
    </div>
  );
};

// Helper Component for the Table Row
const TradersTable = ({ data }: { data: any[] }) => (
  <div className="border border-zinc-800 rounded-xl overflow-hidden bg-[#0c0c0e]">
     <table className="w-full text-left border-collapse">
        <thead className="bg-[#121214] text-[10px] text-zinc-500 uppercase tracking-wider font-medium">
           <tr>
              <th className="p-4 w-16 font-medium">Rank</th>
              <th className="p-4 font-medium">Trader</th>
              <th className="p-4 font-medium">PNL</th>
              <th className="p-4 font-medium">Win Rate</th>
              <th className="p-4 font-medium">Positions</th>
              <th className="p-4 font-medium">Trades</th>
              <th className="p-4 font-medium">Volume</th>
              <th className="p-4 text-right font-medium">Avg Hold Time</th>
           </tr>
        </thead>
        <tbody className="divide-y divide-zinc-800/50 text-sm">
           {data.map((t, i) => (
              <tr key={i} className="hover:bg-zinc-800/30 transition-colors group cursor-pointer">
                 <td className={`p-4 font-mono ${t.color || 'text-zinc-500'} font-bold`}>{t.rank}</td>
                 <td className="p-4">
                    <div className="flex items-center gap-3">
                       <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs text-zinc-500">
                          {t.name[0]}
                       </div>
                       <span className={`font-medium ${t.color ? 'text-yellow-400' : 'text-zinc-200'}`}>{t.name}</span>
                    </div>
                 </td>
                 <td className="p-4 font-mono font-bold text-emerald-400">≡ {t.pnl}</td>
                 <td className="p-4 font-mono text-zinc-300">{t.win}</td>
                 <td className="p-4 font-mono">
                    <div className="text-zinc-300 flex items-center gap-2">
                       {t.pos}
                       <div className="flex gap-1 text-[10px]">
                          <span className="text-emerald-500">165</span>
                          <span className="text-red-500">24</span>
                       </div>
                    </div>
                 </td>
                 <td className="p-4 font-mono">
                    <div className="text-zinc-300 flex items-center gap-2">
                       {t.trades}
                       <div className="flex gap-1 text-[10px]">
                          <span className="text-emerald-500">288</span>
                          <span className="text-red-500">354</span>
                       </div>
                    </div>
                 </td>
                 <td className="p-4 font-mono text-blue-400">≡ {t.vol}</td>
                 <td className="p-4 text-right font-mono text-zinc-500">{t.time}</td>
              </tr>
           ))}
        </tbody>
     </table>
  </div>
);