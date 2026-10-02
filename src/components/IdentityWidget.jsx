import React, { useState } from 'react';
import BlueprintCard from './BlueprintCard';

const IdentityWidget = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <BlueprintCard className="showcase-card-inner h-full min-h-[320px] cursor-pointer group">
        <div className="h-full flex flex-col" onClick={() => setIsModalOpen(true)}>
          <div className="flex-grow p-4 relative border-b border-white/10 bg-gradient-to-br from-sky-400/10 via-slate-900 to-slate-950 overflow-hidden">
            <div className="absolute inset-0 opacity-20 border border-sky-300/30 m-4 rounded-full border-dashed animate-[spin_60s_linear_infinite] pointer-events-none"></div>
            <div className="absolute inset-10 opacity-30 border border-sky-300/40 rounded-full pointer-events-none"></div>

            <div className="h-full w-full flex items-center justify-center relative z-10 text-sky-200 p-2">
              <svg viewBox="0 0 120 120" className="w-full h-full max-h-48 drop-shadow-sm">
                <polygon points="60,20 98,48 83.5,92 36.5,92 22,48" fill="none" stroke="currentColor" strokeWidth="0.5" className="opacity-30" />
                <polygon points="60,33.3 85.3,52 75.6,81.3 44.4,81.3 34.6,52" fill="none" stroke="currentColor" strokeWidth="0.5" className="opacity-30" />
                <polygon points="60,46.6 72.6,59.3 67.8,70.6 52.2,70.6 47.3,59.3" fill="none" stroke="currentColor" strokeWidth="0.5" className="opacity-30" />

                <line x1="60" y1="60" x2="60" y2="20" stroke="currentColor" strokeWidth="0.5" className="opacity-30"/>
                <line x1="60" y1="60" x2="98" y2="48" stroke="currentColor" strokeWidth="0.5" className="opacity-30"/>
                <line x1="60" y1="60" x2="83.5" y2="92" stroke="currentColor" strokeWidth="0.5" className="opacity-30"/>
                <line x1="60" y1="60" x2="36.5" y2="92" stroke="currentColor" strokeWidth="0.5" className="opacity-30"/>
                <line x1="60" y1="60" x2="22" y2="48" stroke="currentColor" strokeWidth="0.5" className="opacity-30"/>

                <polygon
                  points="60,24 92.3,49.8 82.3,90.4 41.2,85.6 33.4,51.6"
                  fill="currentColor"
                  fillOpacity="0.15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="group-hover:fill-opacity-25 transition-all duration-300"
                />

                <circle cx="60" cy="24" r="2" fill="currentColor" />
                <circle cx="92.3" cy="49.8" r="2" fill="currentColor" />
                <circle cx="82.3" cy="90.4" r="2" fill="currentColor" />
                <circle cx="41.2" cy="85.6" r="2" fill="currentColor" />
                <circle cx="33.4" cy="51.6" r="2" fill="currentColor" />

                <text x="60" y="15" textAnchor="middle" fontSize="6" className="font-mono fill-current uppercase font-bold tracking-wider">Frontend</text>
                <text x="100" y="47" textAnchor="start" fontSize="6" className="font-mono fill-current uppercase font-bold tracking-wider">Backend</text>
                <text x="85" y="100" textAnchor="start" fontSize="6" className="font-mono fill-current uppercase font-bold tracking-wider">AI / ML</text>
                <text x="35" y="100" textAnchor="end" fontSize="6" className="font-mono fill-current uppercase font-bold tracking-wider">Data</text>
                <text x="20" y="47" textAnchor="end" fontSize="6" className="font-mono fill-current uppercase font-bold tracking-wider">DevOps</text>
              </svg>
            </div>
          </div>

          <div className="flex flex-col bg-slate-950/80">
            <div className="p-4 flex flex-col justify-end border-b border-white/10 h-28">
              <div className="font-mono text-[10px] mb-1 uppercase tracking-[0.22rem] text-sky-200">Looking for</div>
              <h1 className="font-sans font-black text-3xl uppercase tracking-tight text-white">Internship</h1>
              <h2 className="font-mono text-xs font-medium mt-1 text-slate-300">Feb 2026 — Sep 2026</h2>
            </div>

            <div className="p-2 text-center font-mono text-[10px] tracking-[0.18rem] uppercase text-slate-200 hover:bg-sky-300 hover:text-slate-950 transition-colors">
              Expand profile
            </div>
          </div>
        </div>
      </BlueprintCard>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-md bg-slate-950/60">
          <div className="bg-slate-950 border border-sky-300/20 w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col text-sky-100">
            <div className="sticky top-0 bg-slate-950 border-b border-sky-300/20 p-4 flex justify-between items-center z-10">
              <h2 className="font-mono text-lg font-bold text-sky-200">Personnel Record</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="font-mono text-sm border border-sky-300/40 px-3 py-1 hover:bg-sky-300 hover:text-slate-950 transition-colors"
              >
                [ Close ]
              </button>
            </div>

            <div className="p-6 space-y-6">
              <section>
                <h3 className="font-mono text-sm font-bold border-b border-sky-300/20 mb-3 text-sky-200">Contact</h3>
                <div className="flex flex-col gap-2 font-mono text-sm text-slate-200">
                  <span>Email: acunah@icloud.com</span>
                  <span>
                    LinkedIn: <a href="https://www.linkedin.com/in/nurulhusnahanipi" target="_blank" rel="noopener noreferrer" className="underline hover:text-sky-300">linkedin.com/in/nurulhusnahanipi</a>
                  </span>
                </div>
              </section>

              <section>
                <h3 className="font-mono text-sm font-bold border-b border-sky-300/20 mb-3 text-sky-200">Education</h3>
                <div className="space-y-4 text-slate-200">
                  <div>
                    <div className="flex justify-between font-mono text-sm font-bold">
                      <span>Universiti Pendidikan Sultan Idris</span>
                      <span>Oct 2023 — Present</span>
                    </div>
                    <p className="font-sans text-sm mt-1">Bachelor's degree, Software Engineering (Educational Software)</p>
                    <p className="font-mono text-xs mt-1 text-sky-200">CGPA: 3.74</p>
                  </div>
                  <div>
                    <div className="flex justify-between font-mono text-sm font-bold">
                      <span>Universiti Teknologi Mara</span>
                      <span>2018 — 2019</span>
                    </div>
                    <p className="font-sans text-sm mt-1">Foundation, Engineering</p>
                    <p className="font-mono text-xs mt-1 text-sky-200">CGPA: 4.00</p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="font-mono text-sm font-bold border-b border-sky-300/20 mb-3 text-sky-200">Achievements</h3>
                <ul className="font-sans text-sm list-disc list-inside space-y-2 text-slate-200">
                  <li><strong>PETRONAS Scholarship Recipient:</strong> Selected for full sponsorship based on academic excellence and leadership potential.</li>
                  <li><strong>Top Coders Coding Competition:</strong> 1st Place (2025), 2nd Place (2024) at University Level.</li>
                  <li><strong>Academic Excellence:</strong> Maintained a strong grade trajectory and Dean's List recognition across multiple semesters.</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default IdentityWidget;