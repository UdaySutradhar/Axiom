'use client';

import React, { useState } from 'react';
import { Settings, Camera, Maximize2, ChevronDown, Calendar, Plus, Minus } from 'lucide-react';

export const PerpsView = () => {
  const [side, setSide] = useState<'long' | 'short'>('long');
  const [orderType, setOrderType] = useState<'market' | 'limit'>('limit');

  return (
    <div className="flex h-full bg-[#09090b] text-zinc-200 overflow-hidden font-sans">
      
      {/* LEFT: CHART AREA (Flexible width) */}
      <div className="flex-1 flex flex-col border-r border-zinc-800 min-w-0">
         {/* Top Bar */}
         <div className="h-12 border-b border-zinc-800 flex items-center justify-between px-4 bg-[#0c0c0e] shrink-0">
            <div className="flex items-center gap-4">
               <div className="flex items-center gap-2 text-sm font-bold text-white cursor-pointer hover:text-zinc-300">
                  BTC-USD on axiom.trade <span className="text-zinc-500 font-normal">• 1D • axiom.trade</span>
               </div>
               <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-400">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span>OØ HØ LØ CØ Ø (Ø%)</span>
               </div>
            </div>
            <div className="flex items-center gap-3 text-zinc-500">
               <span className="text-xs hover:text-white cursor-pointer">Save</span>
               <ChevronDown size={12} />
               <div className="w-[1px] h-4 bg-zinc-800 mx-1"></div>
               <Settings size={14} className="hover:text-white cursor-pointer" />
               <Maximize2 size={14} className="hover:text-white cursor-pointer" />
               <Camera size={14} className="hover:text-white cursor-pointer" />
            </div>
         </div>
  
         {/* Chart Area */}
         <div className="flex-1 relative bg-[#09090b] flex flex-col">
            {/* Main Chart Canvas Placeholder */}
            <div className="flex-1 relative flex items-center justify-center">
               {/* Grid Lines Background */}
               <div className="absolute inset-0 opacity-5 pointer-events-none" style={{backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
               
               <div className="text-center opacity-20 flex flex-col items-center">
                  {/* Ghost Icon */}
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-4">
                    <path d="M9 10h.01"/><path d="M15 10h.01"/>
                    <path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"/>
                  </svg>
                  <p className="font-medium text-zinc-500">No data here</p>
               </div>
            </div>
  
            {/* Chart Bottom Controls */}
            <div className="h-10 border-t border-zinc-800 flex items-center justify-between px-4 bg-[#09090b] text-xs font-mono text-zinc-500 shrink-0">
               <div className="flex gap-4">
                  {['5y','1y','6m','3m','1m','5d','1d'].map(t => (
                     <button key={t} className="hover:text-white transition-colors">{t}</button>
                  ))}
                  <div className="w-[1px] h-4 bg-zinc-800 self-center"></div>
                  <button className="hover:text-white"><Calendar size={14} /></button>
               </div>
               <div className="flex gap-4 items-center">
                  <span>17:17:56 (UTC)</span>
                  <div className="w-[1px] h-4 bg-zinc-800"></div>
                  <button className="hover:text-white">%</button>
                  <button className="hover:text-white">log</button>
                  <button className="text-[#3b82f6] font-bold">auto</button>
               </div>
            </div>
         </div>
  
         {/* Bottom Panel: Positions */}
         <div className="h-64 border-t border-zinc-800 bg-[#0c0c0e] flex flex-col shrink-0">
            <div className="flex border-b border-zinc-800">
               <button className="px-4 py-3 text-sm font-bold text-white border-b-2 border-white">Positions</button>
               <button className="px-4 py-3 text-sm font-medium text-zinc-500 hover:text-zinc-300">Open Orders</button>
               <button className="px-4 py-3 text-sm font-medium text-zinc-500 hover:text-zinc-300">Trades</button>
            </div>
            
            {/* Table Header */}
            <div className="flex items-center px-4 py-2 text-[10px] text-zinc-500 border-b border-zinc-800/50 font-medium uppercase tracking-wider">
               <div className="w-24">Asset</div>
               <div className="w-20">Position</div>
               <div className="w-24 text-right">Position Value</div>
               <div className="w-24 text-right">Entry Price</div>
               <div className="w-24 text-right">Mark Price</div>
               <div className="w-24 text-right">Liquidation Price</div>
               <div className="w-32 text-right">Margin Used (PNL) ↓</div>
               <div className="flex-1 text-right pr-8">TP / SL</div>
               <div className="w-10 text-right">Close</div>
            </div>

            <div className="flex-1 flex items-center justify-center text-xs text-zinc-500 bg-[#09090b]">
               No open positions
            </div>
         </div>
      </div>
  
      {/* MIDDLE: ORDER BOOK (Fixed width) */}
      <div className="w-[280px] border-r border-zinc-800 bg-[#0c0c0e] flex flex-col shrink-0">
         {/* Tabs */}
         <div className="flex border-b border-zinc-800">
            <button className="flex-1 py-3 text-sm font-medium text-white border-b-2 border-white">Order Book</button>
            <button className="flex-1 py-3 text-sm font-medium text-zinc-500 hover:text-zinc-300">Trades</button>
         </div>
         
         {/* Header */}
         <div className="flex px-3 py-2 text-[10px] text-zinc-500 font-medium justify-between">
            <span className="w-16">Price</span>
            <span className="w-20 text-right">Amount (USD)</span>
            <span className="flex-1 text-right">Total (USD)</span>
         </div>
  
         {/* Order Book Visual */}
         <div className="flex-1 overflow-y-auto p-1 space-y-[2px] min-h-0 scrollbar-thin scrollbar-thumb-zinc-800">
            {/* Sells */}
            {Array.from({length:16}).map((_,i) => (
               <div key={`s-${i}`} className="flex text-[11px] font-mono h-5 items-center px-2 relative group hover:bg-zinc-800/30 cursor-pointer">
                  <div className="absolute right-0 top-0 bottom-0 bg-red-500/5 z-0" style={{width: `${Math.random()*40}%`}}></div>
                  <span className="w-16 text-red-400 z-10 group-hover:text-red-300">--</span>
                  <span className="w-20 text-zinc-500 text-right z-10 group-hover:text-zinc-300">--</span>
                  <span className="flex-1 text-zinc-600 text-right z-10 group-hover:text-zinc-400">--</span>
               </div>
            ))}
            
            {/* Spread/Current Price */}
            <div className="py-3 px-4 border-y border-zinc-800 my-1 bg-[#121214] flex flex-col items-center justify-center">
                {/* Placeholder for spread visual */}
                <div className="h-1 w-8 bg-zinc-700/50 rounded-full mb-1"></div>
                <div className="h-1 w-12 bg-zinc-700/30 rounded-full"></div>
            </div>
  
            {/* Buys */}
            {Array.from({length:16}).map((_,i) => (
               <div key={`b-${i}`} className="flex text-[11px] font-mono h-5 items-center px-2 relative group hover:bg-zinc-800/30 cursor-pointer">
                  <div className="absolute right-0 top-0 bottom-0 bg-emerald-500/5 z-0" style={{width: `${Math.random()*40}%`}}></div>
                  <span className="w-16 text-emerald-400 z-10 group-hover:text-emerald-300">--</span>
                  <span className="w-20 text-zinc-500 text-right z-10 group-hover:text-zinc-300">--</span>
                  <span className="flex-1 text-zinc-600 text-right z-10 group-hover:text-zinc-400">--</span>
               </div>
            ))}
         </div>
      </div>

      {/* RIGHT: ORDER FORM (Fixed width) */}
      <div className="w-[300px] bg-[#0c0c0e] flex flex-col shrink-0 border-l border-zinc-800">
         <div className="p-4">
            {/* Side Switcher */}
            <div className="flex bg-[#18181b] p-1 rounded-md mb-6">
               <button 
                 onClick={() => setSide('long')}
                 className={`flex-1 py-2 text-xs font-bold rounded transition-all ${
                   side === 'long' ? 'bg-emerald-500 text-black shadow' : 'text-zinc-400 hover:text-white'
                 }`}
               >
                 Long
               </button>
               <button 
                 onClick={() => setSide('short')}
                 className={`flex-1 py-2 text-xs font-bold rounded transition-all ${
                   side === 'short' ? 'bg-[#f43f5e] text-white shadow' : 'text-zinc-400 hover:text-white'
                 }`}
               >
                 Short
               </button>
            </div>
  
            {/* Order Type Tabs */}
            <div className="flex justify-between mb-4 text-[11px] font-medium border-b border-zinc-800 pb-2">
               <div className="flex gap-4">
                 <button 
                   onClick={() => setOrderType('market')}
                   className={`pb-2 border-b-2 transition-colors ${orderType === 'market' ? 'text-white border-white' : 'text-zinc-500 border-transparent hover:text-zinc-300'}`}
                 >
                   Market
                 </button>
                 <button 
                   onClick={() => setOrderType('limit')}
                   className={`pb-2 border-b-2 transition-colors ${orderType === 'limit' ? 'text-white border-white' : 'text-zinc-500 border-transparent hover:text-zinc-300'}`}
                 >
                   Limit
                 </button>
               </div>
               <span className="text-zinc-500">Leverage: <span className="text-zinc-300">--</span></span>
            </div>
  
            {/* Inputs */}
            <div className="space-y-4">
               {/* Price Input (Only for Limit) */}
               {orderType === 'limit' && (
                 <div className="bg-[#121214] border border-zinc-800 rounded-lg p-3 focus-within:border-zinc-600 transition-colors">
                    <div className="flex justify-between text-[10px] text-zinc-500 mb-1">
                      <span>Price</span>
                      <span>USDC</span>
                    </div>
                    <div className="flex justify-between items-center">
                       <input type="text" value="0.0000" className="bg-transparent w-full text-sm font-mono text-white focus:outline-none" />
                       <span className="text-zinc-500 text-xs">NaN</span>
                    </div>
                 </div>
               )}

               {/* Amount Input */}
               <div className="bg-[#121214] border border-zinc-800 rounded-lg p-3 focus-within:border-zinc-600 transition-colors">
                  <div className="flex justify-between text-[10px] text-zinc-500 mb-1">
                    <span>Buy Amount</span>
                    <span>BTC</span>
                  </div>
                  <div className="flex justify-between items-center">
                     <input type="text" value="0.0000" className="bg-transparent w-full text-sm font-mono text-white focus:outline-none" />
                     <span className="text-orange-500 text-xs font-mono">₿ NaN</span>
                  </div>
               </div>
               
               {/* Slider */}
               <div className="py-2">
                 <div className="relative h-1 bg-zinc-800 rounded-full">
                    <div className={`absolute top-0 left-0 h-full rounded-full w-0 ${side === 'long' ? 'bg-emerald-500' : 'bg-[#f43f5e]'}`}></div>
                    
                    {/* Slider Thumbs/Ticks */}
                    <div className="absolute w-full flex justify-between -top-1.5 px-[1px]">
                       {[0, 25, 50, 75, 100].map(p => (
                          <div key={p} className={`w-4 h-4 rounded-full border-2 border-[#0c0c0e] flex items-center justify-center z-10 ${p === 0 ? (side === 'long' ? 'bg-[#3b82f6]' : 'bg-[#3b82f6]') : 'bg-zinc-700'}`}>
                            {p === 0 && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
                          </div>
                       ))}
                    </div>
                 </div>
                 <div className="flex justify-between text-[9px] text-zinc-500 font-mono mt-2 px-1">
                    <span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                 </div>
               </div>

               {/* Limit Price Info */}
               <div className="flex justify-between items-center bg-[#121214] p-3 rounded border border-zinc-800">
                  <div className="flex flex-col">
                     <span className="text-[10px] text-zinc-500">Limit Price</span>
                     <span className="text-sm font-mono text-zinc-400">$0.00</span>
                  </div>
                  <div className="flex flex-col text-right">
                     <span className="text-[10px] text-zinc-500">Current Price: <span className="text-white">$0.00</span></span>
                  </div>
               </div>
  
               <div className="flex items-center gap-2 mt-2">
                  <div className="w-4 h-4 border border-zinc-700 rounded bg-[#0c0c0e] cursor-pointer hover:border-zinc-500"></div>
                  <span className="text-xs text-zinc-300">TP/SL</span>
                  <span className="ml-auto text-xs text-zinc-600">Est. Liq. Price: --</span>
               </div>
  
               <button 
                 className={`w-full py-3.5 font-bold rounded-lg transition-all text-sm shadow-lg ${
                   side === 'long' 
                     ? 'bg-emerald-500 hover:bg-emerald-400 text-black shadow-emerald-900/20' 
                     : 'bg-[#f43f5e] hover:bg-rose-500 text-white shadow-rose-900/20'
                 }`}
               >
                  {side === 'long' ? 'Add More Funds' : 'Add More Funds'}
               </button>
            </div>
  
            {/* Account Details */}
            <div className="mt-6 pt-4 border-t border-zinc-800 space-y-3">
               <div className="flex justify-between text-xs items-center">
                  <span className="text-zinc-500">Available Margin</span>
                  <span className="bg-[#1e1b4b] text-blue-400 px-1.5 py-0.5 rounded text-[10px] font-mono">0.00 USDC</span>
               </div>
               <div className="flex justify-between text-xs">
                  <span className="text-zinc-500">Perps Account Value</span>
                  <span className="text-zinc-400">Loading...</span>
               </div>
               <div className="flex justify-between text-xs">
                  <span className="text-zinc-500">Current Position</span>
                  <span className="text-zinc-400">--</span>
               </div>
            </div>
         </div>
         
         {/* Footer Powered By */}
         <div className="mt-auto p-4 flex justify-end items-center gap-1 text-[10px] text-zinc-600">
            powered by <span className="font-bold text-white flex items-center gap-1"><div className="w-2 h-2 bg-cyan-400 rounded-full"></div> Hyperliquid</span>
         </div>
      </div>
    </div>
  );
};