'use client';

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      {/* Yoyo Icon */}
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-br from-[#1E40AF] via-[#3B82F6] to-[#1D4ED8] rounded-full shadow-lg flex items-center justify-center">
          <div className="w-6 h-6 bg-gradient-to-br from-[#E5E7EB] to-[#FFFFFF] rounded-full shadow-md flex items-center justify-center">
            <div className="w-3 h-3 bg-[#1E40AF] rounded-full"></div>
          </div>
        </div>
        {/* Yoyo strings */}
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0.5 h-3 bg-gradient-to-b from-[#374151] to-transparent"></div>
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0.5 h-2 bg-gradient-to-b from-[#374151] to-transparent"></div>
      </div>

      {/* Text Logo */}
      <div className="font-extrabold text-2xl bg-gradient-to-r from-[#1E40AF] via-[#3B82F6] to-[#1D4ED8] bg-clip-text text-transparent tracking-wider" style={{fontFamily: 'cursive, serif', fontStyle: 'oblique', letterSpacing: '2px', textShadow: '2px 2px 4px rgba(0,0,0,0.1)'}}>
        PayYoYo
      </div>
    </div>
  );
}
