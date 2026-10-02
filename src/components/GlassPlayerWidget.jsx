import React from 'react';

const GlassPlayerWidget = () => {
  return (
    <div className="bg-slate-900/80 backdrop-blur-xl border border-sky-300/20 shadow-[0_24px_60px_rgba(0,0,0,0.45)] rounded-[2rem] p-6 text-slate-100 w-full h-full flex flex-col justify-center">
      {/* Track Info */}
      <div className="text-center mb-6">
        <h3 className="font-sans font-bold text-lg tracking-tight text-white">
          StockWise: Smart Inventory & Emergency Food Readiness Assistant
        </h3>
        <p className="font-sans text-sm text-sky-200 font-medium mt-2">Currently in progress</p>
      </div>

      {/* Progress Bar */}
      <div className="flex items-center gap-3 mb-8">
        <span className="text-xs font-medium text-slate-400 w-8 text-right">1:20</span>
        <div className="flex-1 h-1.5 bg-white/10 rounded-full relative">
          <div className="absolute top-0 left-0 h-full w-[45%] bg-gradient-to-r from-sky-300 to-blue-500 rounded-full"></div>
        </div>
        <span className="text-xs font-medium text-slate-400 w-8">-2:56</span>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-8">
        <button className="hover:opacity-60 transition-opacity text-sky-200">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z"/>
          </svg>
        </button>
        <button className="hover:scale-105 transition-transform active:scale-95 text-sky-100">
          <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
          </svg>
        </button>
        <button className="hover:opacity-60 transition-opacity text-sky-200">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default GlassPlayerWidget;