'use client';

import React, { useEffect, useReducer, useState } from 'react';
import { Search, Bell, Wallet, User, Star } from 'lucide-react';

// State & Logic
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setChain } from '@/store/appSlice';
import { generateToken } from '@/lib/mock-data';
import { Token } from '@/lib/types';

// Views
import { PulseView } from '@/components/views/PulseView';
import { DiscoverView } from '@/components/views/DiscoverView';
import { PerpsView } from '@/components/views/PerpsView';
import { TrackersView, YieldView, PortfolioView, RewardsView } from '@/components/views/GeneralViews';
import { VisionView } from '@/components/views/VisionView';
import { NetworkSelector } from '@/components/dashboard/NetworkSelector';

// --- Types ---
type ViewType = 'discover' | 'pulse' | 'trackers' | 'perpetuals' | 'yield' | 'vision' | 'portfolio' | 'rewards';

// --- Data Reducer ---
interface DashboardState {
  newPairs: Token[];
  finalStretch: Token[];
  migrated: Token[];
  isLoading: boolean;
}

type Action = 
  | { type: 'SET_DATA'; payload: { newPairs: Token[]; finalStretch: Token[]; migrated: Token[] } }
  | { type: 'UPDATE_PRICES' }
  | { type: 'SET_LOADING'; payload: boolean };

const initialState: DashboardState = {
  newPairs: [],
  finalStretch: [],
  migrated: [],
  isLoading: true,
};

function dashboardReducer(state: DashboardState, action: Action): DashboardState {
  switch (action.type) {
    case 'SET_DATA': return { ...state, ...action.payload, isLoading: false };
    case 'SET_LOADING': return { ...state, isLoading: action.payload };
    case 'UPDATE_PRICES':
      const update = (list: Token[]) => list.map(t => Math.random() > 0.7 ? { ...t, mc: t.mc * (1 + (Math.random() * 0.02 - 0.01)) } : t);
      return {
        ...state,
        newPairs: update(state.newPairs),
        finalStretch: update(state.finalStretch),
        migrated: update(state.migrated),
      };
    default: return state;
  }
}

// --- Main Component ---
export default function AxiomPulse() {
  const [currentView, setCurrentView] = useState<ViewType>('pulse');
  const activeChain = useAppSelector((state) => state.app.activeChain);
  const reduxDispatch = useAppDispatch();
  const [state, localDispatch] = useReducer(dashboardReducer, initialState);

  // Simulate data fetching when chain changes
  useEffect(() => {
    localDispatch({ type: 'SET_LOADING', payload: true });
    const timer = setTimeout(() => {
      localDispatch({
        type: 'SET_DATA',
        payload: {
          newPairs: Array.from({ length: 8 }, (_, i) => generateToken(i, 'new', activeChain)),
          finalStretch: Array.from({ length: 8 }, (_, i) => generateToken(i, 'final', activeChain)),
          migrated: Array.from({ length: 8 }, (_, i) => generateToken(i, 'migrated', activeChain)),
        }
      });
    }, 500);
    return () => clearTimeout(timer);
  }, [activeChain]);

  // Live price ticker
  useEffect(() => {
    const interval = setInterval(() => localDispatch({ type: 'UPDATE_PRICES' }), 1000);
    return () => clearInterval(interval);
  }, []);

  const renderContent = () => {
    switch (currentView) {
      // Wire up the switch callback here
      case 'pulse': 
        return (
          <PulseView 
            activeChain={activeChain} 
            {...state} 
            onChainSwitch={(c) => reduxDispatch(setChain(c))} 
          />
        );
      case 'discover': return <DiscoverView />;
      case 'trackers': return <TrackersView />;
      case 'perpetuals': return <PerpsView />;
      case 'yield': return <YieldView />;
      case 'vision': return <VisionView />;
      case 'portfolio': return <PortfolioView />;
      case 'rewards': return <RewardsView />;
      default: 
        return (
          <PulseView 
            activeChain={activeChain} 
            {...state} 
            onChainSwitch={(c) => reduxDispatch(setChain(c))} 
          />
        );
    }
  };

  return (
    <div className="h-screen flex flex-col bg-[#09090b] text-zinc-200 font-sans overflow-hidden selection:bg-cyan-500/20">
      
      {/* MAIN HEADER */}
      <header className="h-11 border-b border-zinc-800 bg-[#09090b] flex items-center justify-between px-3 shrink-0 z-50 select-none">
         <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentView('pulse')}>
               <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 2L2 22h20L12 2z" /></svg>
            </div>
            <nav className="hidden lg:flex items-center gap-5 text-[13px] font-medium text-zinc-400">
               {['Discover', 'Pulse', 'Trackers', 'Perpetuals', 'Yield', 'Vision', 'Portfolio', 'Rewards'].map((item) => {
                 const viewKey = item.toLowerCase() as ViewType;
                 return (
                   <button 
                     key={item} 
                     onClick={() => setCurrentView(viewKey)}
                     className={`transition-colors hover:text-white ${currentView === viewKey ? 'text-[#3b82f6] font-semibold' : ''}`}
                   >
                     {item}
                   </button>
                 )
               })}
            </nav>
         </div>

         <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-zinc-800/50 cursor-pointer text-zinc-400"><Search size={16} /></div>
            
            <NetworkSelector activeChain={activeChain} onSwitch={(c) => reduxDispatch(setChain(c))} />
            
            <button className="bg-[#4f46e5] hover:bg-[#4338ca] text-white px-3.5 py-1 rounded-[4px] text-[12px] font-bold shadow-lg shadow-indigo-500/20 transition-all">Deposit</button>
            
            <div className="flex items-center gap-2 pl-2 border-l border-zinc-800 ml-1">
               <div className="p-1.5 hover:bg-zinc-800 rounded cursor-pointer text-zinc-400 hover:text-white"><Star size={16} /></div>
               <div className="p-1.5 hover:bg-zinc-800 rounded cursor-pointer text-zinc-400 hover:text-white"><Bell size={16} /></div>
               <div className="flex items-center gap-2 bg-[#121214] border border-zinc-800 px-2.5 py-1 rounded-[4px] text-[11px] hover:bg-zinc-800 cursor-pointer transition-colors">
                  <Wallet size={12} className="text-zinc-500" />
                  <span className="font-mono text-zinc-300">0</span>
               </div>
               <div className="w-7 h-7 bg-[#1c1c1f] rounded-full flex items-center justify-center border border-zinc-700 ml-1 text-zinc-400 hover:text-white cursor-pointer"><User size={13} /></div>
            </div>
         </div>
      </header>

      {renderContent()}

    </div>
  );
}