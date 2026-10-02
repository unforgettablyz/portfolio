import React, { useState } from 'react';
import BlueprintCard from './BlueprintCard';
import wiseserve from '../assets/wiseserve.jpg';
import dashboard from '../assets/dashboard.jpg';
import expirationalert from '../assets/expirationalert.jpg';

const WiseServeProject = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <BlueprintCard className="hover:scale-[1.02] transition-transform duration-300 h-[400px] cursor-pointer group">
        <div 
          className="h-full flex flex-col"
          onClick={() => setIsModalOpen(true)}
        >
          <div className="h-[50%] border-b border-white/10 bg-slate-900/80 relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-indigo-400/10 z-10"></div>
            <img src={wiseserve} alt="WiseServe" className="w-full h-full object-cover" />
          </div>

          <div className="h-[50%] flex flex-col bg-slate-950/90">
            <div className="p-3 border-b border-white/10">
              <h3 className="font-mono text-sm font-bold uppercase text-indigo-200">F&B WiseServe</h3>
              <p className="font-sans text-xs mt-1 line-clamp-2 text-slate-200">
                Food waste prevention system targeting zero avoidable food waste - one order, one shift, one outlet at a time.
              </p>
            </div>
            
            <div className="p-3 border-b border-white/10 flex-grow bg-slate-900/80">
              <span className="font-mono text-xs block mb-1 text-indigo-200">TECH_STACK:</span>
              <p className="font-mono text-xs text-slate-100">REACT / NODE.JS / POSTGRESQL / DOCKER</p>
            </div>

            <div className="p-2 text-center font-mono text-xs text-slate-200 hover:bg-indigo-300 hover:text-slate-950 transition-colors">
              CLICK_TO_EXPAND_RECORDS
            </div>
          </div>
        </div>
      </BlueprintCard>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-md bg-slate-950/60">
          <div className="bg-slate-950 border border-indigo-300/20 w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col text-indigo-100">
            <div className="sticky top-0 bg-slate-950 border-b border-indigo-300/20 p-4 flex justify-between items-center z-10">
              <h2 className="font-mono text-lg font-bold text-indigo-200">PROJECT_SPECIFICATION: WISESERVE</h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="font-mono text-sm border border-indigo-300/40 px-3 py-1 hover:bg-indigo-300 hover:text-slate-950 transition-colors"
              >
                [ CLOSE ]
              </button>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <section>
                  <h3 className="font-mono text-sm font-bold border-b border-indigo-300/20 mb-2 text-indigo-200">THE_PROBLEM</h3>
                  <ul className="font-sans text-sm list-disc list-inside space-y-2 text-slate-200">
                    <li>Receiving staff do not write expiry dates or batch arrival dates on outer boxes.</li>
                    <li>Managing festive and seasonal promotions is difficult due to fluctuating demand.</li>
                    <li>Exhausted staff discard leftovers without recording numbers, giving management zero visibility.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="font-mono text-sm font-bold border-b border-indigo-300/20 mb-2 text-indigo-200">MICROSERVICES & FEATURES</h3>
                  <ul className="font-sans text-sm list-disc list-inside space-y-1 text-slate-200">
                    <li>Menu Management & AI Scanner</li>
                    <li>Daily Log Terminal (Prep/Sold)</li>
                    <li>Smart Prep Engine (AI Batch Suggestion)</li>
                    <li>Executive Analytics & Loss Dashboard</li>
                    <li>Expiration Alert System</li>
                    <li>Dynamic Promotions Management</li>
                  </ul>
                </section>

                <section>
                  <h3 className="font-mono text-sm font-bold border-b border-indigo-300/20 mb-2 text-indigo-200">ARCHITECTURE</h3>
                  <div className="flex flex-wrap gap-2 font-mono text-xs">
                    <span className="px-2 py-1 bg-indigo-400/10 border border-indigo-300/30 text-indigo-100">React (Vite)</span>
                    <span className="px-2 py-1 bg-indigo-400/10 border border-indigo-300/30 text-indigo-100">TailwindCSS</span>
                    <span className="px-2 py-1 bg-indigo-400/10 border border-indigo-300/30 text-indigo-100">Node.js + Express</span>
                    <span className="px-2 py-1 bg-indigo-400/10 border border-indigo-300/30 text-indigo-100">PostgreSQL</span>
                    <span className="px-2 py-1 bg-indigo-400/10 border border-indigo-300/30 text-indigo-100">Docker</span>
                    <span className="px-2 py-1 bg-indigo-400/10 border border-indigo-300/30 text-indigo-100">Recharts</span>
                  </div>
                </section>

                <div className="flex gap-4 pt-4">
                  <a href="#" target="_blank" rel="noreferrer" className="flex-1 text-center font-mono text-sm border border-indigo-300/40 p-2 hover:bg-indigo-300 hover:text-slate-950 transition-colors text-indigo-100">
                    SRC_CODE (GITHUB)
                  </a>
                  <a href="#" className="flex-1 text-center font-mono text-sm border border-indigo-300/40 p-2 hover:bg-indigo-300 hover:text-slate-950 transition-colors text-indigo-100">
                    LIVE_DEMO
                  </a>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="font-mono text-sm font-bold border-b border-indigo-300/20 mb-2 text-indigo-200">SYSTEM_UI_RECORDS</h3>
                <img src={dashboard} alt="Dashboard Overview" className="w-full h-auto max-h-[500px] object-contain mx-auto border border-indigo-300/20 bg-slate-900 p-2" />
                <img src={expirationalert} alt="Expiration Alerts" className="w-full h-auto max-h-[500px] object-contain mx-auto border border-indigo-300/20 bg-slate-900 p-2" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WiseServeProject;