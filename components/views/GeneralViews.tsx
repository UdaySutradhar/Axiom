'use client';

import React from 'react';
import { Search, Copy, Shield, Zap, Trophy, Settings, User } from 'lucide-react';

// --- TRACKERS VIEW ---
export const TrackersView = () => (
  <div className="flex flex-col h-full text-zinc-200">
    <div className="h-12 border-b border-zinc-800 flex items-center justify-between px-4 bg-[#0c0c0e]">
      <div className="flex gap-4 text-sm">
        <button className="px-3 py-1 bg-zinc-800/50 rounded text-blue-400 border border-blue-500/20">Wallet Manager</button>
        <button className="px-3 py-1 text-zinc-500 hover:text-zinc-300">Live Trades</button>
        <button className="px-3 py-1 text-zinc-500 hover:text-zinc-300">Monitor</button>
      </div>
      <div className="flex items-center gap-2">
        <button className="bg-[#3b82f6] text-white px-3 py-1.5 rounded text-xs font-bold">Add Wallet</button>
      </div>
    </div>
    <div className="flex-1 flex items-center justify-center bg-[#09090b]">
      <div className="text-center space-y-3">
        <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center mx-auto border border-zinc-800">
          <Search className="text-zinc-600" />
        </div>
        <p className="text-zinc-500 text-sm">No wallets added yet.</p>
      </div>
    </div>
  </div>
);

// --- YIELD VIEW ---
export const YieldView = () => (
  <div className="h-full flex items-center justify-center bg-[#09090b] p-8">
    <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 bg-[#0c0c0e] border border-zinc-800 rounded-xl overflow-hidden relative">
      <div className="p-12 flex flex-col justify-center space-y-6 z-10">
        <h2 className="text-4xl font-medium text-white">Earn Passive<br/>Income</h2>
        <div className="text-3xl font-bold text-emerald-400">3.64% APY</div>
        <p className="text-zinc-400 text-sm leading-relaxed">
          Easily swap your SOL for USDC and earn yield on your earnings! We make use of the Marginfi protocol to provide a secure and easy-to-use solution.
        </p>
        <div>
          <button className="bg-[#3b82f6] hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-bold transition-colors">
            Enable Yield
          </button>
        </div>
      </div>
      <div className="relative flex items-center justify-center p-8 bg-gradient-to-br from-blue-900/10 to-purple-900/10">
        <div className="w-64 h-64 relative">
           <div className="absolute inset-0 border border-blue-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
           <div className="absolute inset-4 border border-purple-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Zap size={64} className="text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
           </div>
        </div>
      </div>
    </div>
  </div>
);

// --- PORTFOLIO VIEW ---
export const PortfolioView = () => (
  <div className="flex flex-col h-full bg-[#09090b]">
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between bg-[#1e1e24] border border-blue-500/20 p-3 rounded-lg">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-500/20 rounded flex items-center justify-center">
            <Shield size={16} className="text-blue-400" />
          </div>
          <span className="text-sm text-zinc-200">Try Vanish: Trade privately with our new Vanish wallet</span>
        </div>
        <button className="bg-[#0c0c0e] border border-zinc-700 text-xs px-3 py-1.5 rounded text-white hover:bg-zinc-800">Enable Vanish</button>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-white mb-4">Wallets</h2>
        <div className="border border-zinc-800 rounded-lg overflow-hidden bg-[#0c0c0e]">
          <div className="grid grid-cols-12 p-3 border-b border-zinc-800 text-xs text-zinc-500 font-medium uppercase">
            <div className="col-span-4">Wallet</div>
            <div className="col-span-2 text-right">Balance</div>
            <div className="col-span-2 text-right">Holdings</div>
            <div className="col-span-4 text-right">Actions</div>
          </div>
          <div className="grid grid-cols-12 p-4 hover:bg-zinc-800/30 transition-colors items-center">
            <div className="col-span-4 flex items-center gap-3">
              <div className="w-4 h-4 rounded bg-orange-500/20 border border-orange-500/50"></div>
              <div>
                <div className="text-sm text-white font-medium">Axiom Main</div>
                <div className="text-xs text-zinc-600 font-mono">4kt7...765K <Copy size={10} className="inline ml-1"/></div>
              </div>
            </div>
            <div className="col-span-2 text-right text-zinc-300 flex items-center justify-end gap-1">
               <div className="w-3 h-3 rounded-full bg-blue-500/20 flex items-center justify-center text-[8px]">≡</div> 0
            </div>
            <div className="col-span-2 text-right text-zinc-300">0</div>
            <div className="col-span-4 text-right">
               <button className="text-zinc-500 hover:text-white"><Settings size={14}/></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- REWARDS VIEW ---
export const RewardsView = () => (
  <div className="flex flex-col h-full bg-[#09090b] p-6 overflow-y-auto">
    <h1 className="text-2xl font-semibold text-white mb-8">Rewards</h1>
    
    <div className="flex flex-col items-center justify-center mb-12">
       <div className="w-24 h-24 bg-gradient-to-b from-yellow-600 to-yellow-800 rounded-xl mb-4 shadow-lg shadow-yellow-900/20 flex items-center justify-center">
          <Trophy size={40} className="text-yellow-200" />
       </div>
       <h2 className="text-3xl font-bold text-white">1X Rewards</h2>
       <p className="text-zinc-500 text-sm mt-1">30% Referral Rate • <span className="text-zinc-400">0 Users</span></p>
       <div className="flex gap-3 mt-6">
          <button className="px-4 py-2 bg-zinc-800 rounded-lg text-sm text-zinc-300 border border-zinc-700 hover:border-zinc-600">Edit Referral</button>
          <button className="px-4 py-2 bg-[#3b82f6] rounded-lg text-sm text-white font-medium hover:bg-blue-600">Share Referral</button>
       </div>
    </div>

    {/* Cards Section */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
       <div className="bg-[#0c0c0e] border border-zinc-800 rounded-xl p-5">
          <h3 className="text-sm font-medium text-zinc-400 mb-4">SOL Rewards</h3>
          <div className="h-32 border-l border-b border-zinc-800 relative">
             <div className="absolute bottom-0 left-0 w-full h-[1px] bg-blue-500/50"></div>
          </div>
       </div>
       <div className="bg-[#0c0c0e] border border-zinc-800 rounded-xl p-5 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 to-transparent"></div>
          <div className="text-center z-10">
             <div className="text-2xl font-mono text-white mb-2 flex items-center justify-center gap-2">
                <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-sm">≡ +0</span>
             </div>
             <button className="w-full bg-[#1e1e24] hover:bg-[#27272f] text-zinc-400 py-2 rounded mt-4 text-xs font-bold uppercase tracking-wider">Nothing to Claim</button>
          </div>
       </div>
       <div className="bg-[#0c0c0e] border border-zinc-800 rounded-xl p-5">
          <div className="flex justify-between mb-6">
             <h3 className="text-sm font-medium text-zinc-400">Quests</h3>
             <span className="text-xs text-zinc-600">Points Breakdown</span>
          </div>
          <div className="flex justify-between text-center">
             <div className="space-y-2">
                <div className="w-16 h-16 rounded-full border-2 border-zinc-800 flex items-center justify-center text-xs text-zinc-500 mx-auto">+1,500</div>
                <p className="text-[10px] text-zinc-500">Refer 3 people</p>
             </div>
             <div className="space-y-2">
                <div className="w-16 h-16 rounded-full border-2 border-zinc-800 flex items-center justify-center text-xs text-zinc-500 mx-auto">+1,000</div>
                <p className="text-[10px] text-zinc-500">Trade 5 SOL</p>
             </div>
          </div>
       </div>
    </div>

    {/* Referrals Section */}
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-white">Referrals</h3>
      <div className="bg-[#0c0c0e] border border-zinc-800 rounded-xl overflow-hidden min-h-[300px] flex flex-col">
         {/* Table Header */}
         <div className="grid grid-cols-5 px-6 py-4 border-b border-zinc-800/50 text-xs text-zinc-500 font-medium">
            <div>Email/Wallet</div>
            <div className="text-right">Date Joined</div>
            <div className="text-right">Type</div>
            <div className="text-right">Points Earned</div>
            <div className="text-right">SOL Earned</div>
         </div>
         
         {/* Empty State */}
         <div className="flex-1 flex flex-col items-center justify-center py-12">
            <button className="bg-[#3b82f6] hover:bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all">
               Set Referral Code to Earn Rewards
            </button>
         </div>
      </div>
      <div className="flex justify-end text-xs text-zinc-500 gap-2 items-center">
         <User size={12}/> 0
      </div>
    </div>
  </div>
);