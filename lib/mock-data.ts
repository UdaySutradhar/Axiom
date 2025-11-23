import { Token, ChainType } from './types';

const SOL_ASSETS = [
  { name: 'PSTAR', desc: 'Patrick Star', icon: '⭐' },
  { name: 'ANAGO', desc: 'ANAGO', icon: '🐟' },
  { name: 'COINX', desc: 'Coinbase', icon: '🔵' },
  { name: 'NOAIR', desc: 'No Airdrop', icon: '🎈' },
];

const BNB_ASSETS = [
  { name: '1bnb', desc: '1bnb', icon: '🟡' },
  { name: 'HorseKing', desc: 'HorseKing', icon: '🐴' },
  { name: 'Ratking', desc: 'Ratking', icon: '🐀' },
  { name: 'SafeMoon', desc: 'SafeMoon', icon: '🌑' },
];

export const generateToken = (index: number, type: string, chain: ChainType): Token => {
  const assets = chain === 'BNB' ? BNB_ASSETS : SOL_ASSETS;
  const asset = assets[Math.floor(Math.random() * assets.length)];
  
  return {
    id: `${chain}-${type}-${index}`,
    name: asset.name,
    desc: asset.desc,
    icon: asset.icon,
    address: `0x${Math.random().toString(16).substring(2, 6)}...`,
    mc: (Math.random() * 50000) + 1000,
    vol: (Math.random() * 5000),
    time: Math.floor(Math.random() * 59) + 1,
    timeUnit: 's',
    holders: Math.floor(Math.random() * 100),
    txCount: Math.floor(Math.random() * 150),
    fVal: (Math.random() * 0.1).toFixed(3),
    stats: {
      run: Math.floor(Math.random() * 100),
      house: Math.floor(Math.random() * 100),
      shield: Math.floor(Math.random() * 100),
      lock: Math.floor(Math.random() * 100),
      bio: Math.floor(Math.random() * 100),
    },
    countdown: type === 'new' ? '23:59:52' : null,
    isFire: Math.random() > 0.8,
    chain,
  };
};