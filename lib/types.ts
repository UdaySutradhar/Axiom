export type ChainType = 'SOL' | 'BNB';

export interface TokenStats {
  run: number;
  house: number;
  shield: number;
  lock: number;
  bio: number;
}

export interface Token {
  id: string;
  name: string;
  desc: string;
  icon: string;
  address: string;
  mc: number;
  vol: number;
  time: number;
  timeUnit: 's' | 'm' | 'h';
  holders: number;
  txCount: number;
  fVal: string;
  stats: TokenStats;
  countdown: string | null;
  isFire: boolean;
  chain: ChainType;
}