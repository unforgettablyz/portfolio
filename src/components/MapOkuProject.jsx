import React, { useState } from 'react';
import BlueprintCard from './BlueprintCard';
import map from '../assets/map.jpg';
import report from '../assets/report.jpg';
import mapoku from '../assets/mapoku.jpg';

const MapOkuProject = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <BlueprintCard className="hover:scale-[1.02] transition-transform duration-300 h-[400px] cursor-pointer group">
        <div 
          className="h-full flex flex-col"
          onClick={() => setIsModalOpen(true)}
        >
          <div className="h-[50%] border-b border-white/10 bg-slate-900/80 relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-sky-400/10 z-10"></div>
            <img src={mapoku} alt="mapOKU" className="w-full h-full object-cover" />
          </div>

          <div className="h-[50%] flex flex-col bg-slate-950/90">
            <div className="p-3 border-b border-white/10">
              <h3 className="font-mono text-sm font-bold uppercase text-sky-200">mapOKU</h3>
              <p className="font-sans text-xs mt-1 line-clamp-2 text-slate-200">
                Community-powered accessibility mapping for OKU and everyone who moves through the city.
              </p>
            </div>
            
            <div className="p-3 border-b border-white/10 flex-grow bg-slate-900/80">
              <span className="font-mono text-xs block mb-1 text-sky-200">TECH_STACK:</span>
              <p className="font-mono text-xs text-slate-100">REACT / LEAFLET / NODE / VERTEX AI</p>
            </div>

            <div className="p-2 text-center font-mono text-xs text-slate-200 hover:bg-sky-300 hover:text-slate-950 transition-colors">
              CLICK_TO_EXPAND_RECORDS
            </div>
          </div>
        </div>
      </BlueprintCard>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-md bg-slate-950/60">
          <div className="bg-slate-950 border border-sky-300/20 w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col text-sky-100">
            <div className="sticky top-0 bg-slate-950 border-b border-sky-300/20 p-4 flex justify-between items-center z-10">
              <h2 className="font-mono text-lg font-bold text-sky-200">PROJECT_SPECIFICATION: mapOKU</h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="font-mono text-sm border border-sky-300/40 px-3 py-1 hover:bg-sky-300 hover:text-slate-950 transition-colors"
              >
                [ CLOSE ]
              </button>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <section>
                  <h3 className="font-mono text-sm font-bold border-b border-sky-300/20 mb-2 text-sky-200">THE_PROBLEM</h3>
                  <p className="font-sans text-sm text-slate-200">
                    OKU users lack a reliable way to know whether a route is accessible today.
                  </p>
                </section>

                <section>
                  <h3 className="font-mono text-sm font-bold border-b border-sky-300/20 mb-2 text-sky-200">CORE_FEATURES</h3>
                  <ul className="font-sans text-sm list-disc list-inside space-y-1 text-slate-200">
                    <li>Smart route map</li>
                    <li>Community reports</li>
                    <li>Rewards</li>
                  </ul>
                </section>

                <section>
                  <h3 className="font-mono text-sm font-bold border-b border-sky-300/20 mb-2 text-sky-200">ARCHITECTURE</h3>
                  <div className="flex flex-wrap gap-2 font-mono text-xs">
                    <span className="px-2 py-1 bg-sky-400/10 border border-sky-300/30 text-sky-100">React</span>
                    <span className="px-2 py-1 bg-sky-400/10 border border-sky-300/30 text-sky-100">Leaflet</span>
                    <span className="px-2 py-1 bg-sky-400/10 border border-sky-300/30 text-sky-100">Node</span>
                    <span className="px-2 py-1 bg-sky-400/10 border border-sky-300/30 text-sky-100">Vertex AI</span>
                    <span className="px-2 py-1 bg-sky-400/10 border border-sky-300/30 text-sky-100">Google Cloud Speech API</span>
                  </div>
                </section>

                <section>
                  <h3 className="font-mono text-sm font-bold border-b border-sky-300/20 mb-2 text-sky-200">FUTURE_SCOPE</h3>
                  <ul className="font-sans text-sm list-disc list-inside space-y-1 text-slate-200">
                    <li>Emergency family contact</li>
                    <li>Government e-Aduan</li>
                    <li>AR + voice navigation</li>
                  </ul>
                </section>

                <div className="flex gap-4 pt-4">
                  <a href="https://github.com/yourusername/mapoku" target="_blank" rel="noreferrer" className="flex-1 text-center font-mono text-sm border border-sky-300/40 p-2 hover:bg-sky-300 hover:text-slate-950 transition-colors text-sky-100">
                    SRC_CODE (GITHUB)
                  </a>
                  <a href="#" className="flex-1 text-center font-mono text-sm border border-sky-300/40 p-2 hover:bg-sky-300 hover:text-slate-950 transition-colors text-sky-100">
                    LIVE_DEMO
                  </a>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="font-mono text-sm font-bold border-b border-sky-300/20 mb-2 text-sky-200">SYSTEM_UI_RECORDS</h3>
                <img src={map} alt="Smart Route Map" className="w-full h-auto max-h-[500px] object-contain mx-auto" />
                <br />
                <br />
                <img src={report} alt="Community Reports" className="w-full h-auto max-h-[500px] object-contain mx-auto" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MapOkuProject;