import React from "react";

const FDPLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <div className="w-8 h-9 bg-white/10 backdrop-blur-sm rounded-tl-md rounded-tr-xl rounded-bl-xl rounded-br-md flex items-center justify-center border border-[#C8A732]/70">
          <span className="text-[#C8A732] font-bold text-base leading-none">FDP</span>
        </div>
        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-primary/80 rounded-full border border-[#C8A732]/80" />
      </div>
      <span className="text-white font-bold text-xl">FDP</span>
    </div>
  );
};

export default FDPLogo;
