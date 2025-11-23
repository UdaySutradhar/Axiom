import { ChainType } from "@/lib/types";
import { Layers } from "lucide-react";

export const NetworkBadge = ({ chain }: { chain: ChainType }) => {
  if (chain === 'SOL') {
    return (
      <div className="w-3.5 h-3.5 rounded-full bg-black border border-cyan-500/50 flex items-center justify-center">
        <div className="w-2 h-[2px] bg-cyan-400 rotate-[-45deg]"></div>
      </div>
    );
  }
  return (
    <div className="w-3.5 h-3.5 rounded-full bg-yellow-500 flex items-center justify-center text-black">
      <Layers size={9} strokeWidth={3} />
    </div>
  );
};