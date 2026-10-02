import React, { useState } from 'react';
import BlueprintCard from './BlueprintCard';

const Checkbox = ({ label, checked }) => (
  <div className="flex items-center gap-2 mb-2">
    <div className={`w-4 h-4 border border-sky-300/50 flex items-center justify-center ${checked ? 'bg-sky-300/20' : 'bg-slate-900/80'}`}>
      {checked && <div className="w-2 h-2 bg-sky-300"></div>}
    </div>
    <span className="font-sans text-sm truncate text-slate-200">{label}</span>
  </div>
);

const TechSpecsWidget = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <BlueprintCard className="h-full cursor-pointer group">
        <div className="h-full flex flex-col" onClick={() => setIsModalOpen(true)}>
          <div className="flex border-b border-white/10">
            <div className="flex-1 p-3 border-r border-white/10 bg-slate-950/70">
              <span className="font-mono text-[10px] block mb-1 uppercase tracking-[0.2rem] text-sky-200">Strength</span>
              <span className="font-mono text-sm font-bold text-white">Front End Dev</span>
            </div>
            <div className="flex-1 p-3 overflow-hidden bg-slate-950/60">
              <span className="font-mono text-[10px] block mb-1 uppercase tracking-[0.2rem] text-sky-200">Passion</span>
              <span className="font-mono text-sm font-bold truncate block text-white">Machine Learning</span>
            </div>
          </div>

          <div className="p-4 border-b border-white/10 bg-slate-900/80">
            <span className="font-mono text-[10px] block mb-3 uppercase tracking-[0.2rem] text-sky-200">Core modules</span>
            <div className="grid grid-cols-2 gap-2">
              <Checkbox label="React.js" checked={true} />
              <Checkbox label="Node.js" checked={true} />
              <Checkbox label="Python / AI" checked={true} />
              <Checkbox label="PostgreSQL" checked={true} />
            </div>
          </div>

          <div className="p-4 flex-grow border-b border-white/10 bg-gradient-to-br from-slate-900 to-slate-950">
            <span className="font-mono text-[10px] block mb-2 uppercase tracking-[0.2rem] text-sky-200">Description</span>
            <p className="font-sans text-xs lg:text-sm leading-relaxed text-slate-200">
              Software Engineering student and PETRONAS Scholar. Experienced in full-stack development, data analytics, and AI-powered product workflows.
            </p>
          </div>

          <div className="p-2 text-center font-mono text-[10px] uppercase tracking-[0.16rem] text-slate-200 hover:bg-sky-300 hover:text-slate-950 transition-colors bg-slate-950/80">
            Expand specs
          </div>
        </div>
      </BlueprintCard>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-md bg-slate-950/60">
          <div className="bg-slate-950 border border-sky-300/20 w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col text-sky-100">
            <div className="sticky top-0 bg-slate-950 border-b border-sky-300/20 p-4 flex justify-between items-center z-10">
              <h2 className="font-mono text-lg font-bold text-sky-200">Technical Specifications</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="font-mono text-sm border border-sky-300/40 px-3 py-1 hover:bg-sky-300 hover:text-slate-950 transition-colors"
              >
                [ Close ]
              </button>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <section>
                  <h3 className="font-mono text-sm font-bold border-b border-sky-300/20 mb-3 text-sky-200">Tech stack</h3>

                  <div className="mb-4">
                    <span className="font-mono text-xs font-bold text-sky-200">Languages:</span>
                    <p className="font-sans text-sm mt-1 text-slate-200">Python, JavaScript, PHP, Swift, HTML5, CSS</p>
                  </div>

                  <div className="mb-4">
                    <span className="font-mono text-xs font-bold text-sky-200">Frontend & UI:</span>
                    <p className="font-sans text-sm mt-1 text-slate-200">React.js, TailwindCSS, SwiftUI, Figma</p>
                  </div>

                  <div className="mb-4">
                    <span className="font-mono text-xs font-bold text-sky-200">Backend & Databases:</span>
                    <p className="font-sans text-sm mt-1 text-slate-200">Node.js, Laravel, PostgreSQL, MySQL, Redis, Supabase, Firebase</p>
                  </div>

                  <div className="mb-4">
                    <span className="font-mono text-xs font-bold text-sky-200">Data & AI:</span>
                    <p className="font-sans text-sm mt-1 text-slate-200">Agentic AI workflows, Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn, Looker Studio</p>
                  </div>

                  <div>
                    <span className="font-mono text-xs font-bold text-sky-200">DevOps & IT admin:</span>
                    <p className="font-sans text-sm mt-1 text-slate-200">Docker, Git, GitHub, Cloudflare, Proxmox VE, VMware, Postman, DBeaver</p>
                  </div>
                </section>
              </div>

              <div className="space-y-6">
                <section>
                  <h3 className="font-mono text-sm font-bold border-b border-sky-300/20 mb-3 text-sky-200">Training & certifications</h3>

                  <div className="mb-4">
                    <h4 className="font-mono text-xs font-bold text-sky-100">seKODlah TecHive Bootcamp (Data & Digital)</h4>
                    <p className="font-sans text-xs text-sky-200 mb-1">Forest Interactive Foundation</p>
                    <ul className="font-sans text-sm list-disc list-inside space-y-1 text-slate-200">
                      <li>Engineered an unsupervised ML pipeline in Python.</li>
                      <li>Built dashboards in Looker Studio.</li>
                      <li>Configured virtualized environments using Proxmox VE and Cloudflare.</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-mono text-xs font-bold text-sky-100">AI-Powered Full Stack Development Bootcamp</h4>
                    <p className="font-sans text-xs text-sky-200 mb-1">Korea-ASEAN Digital Academy</p>
                    <ul className="font-sans text-sm list-disc list-inside space-y-1 text-slate-200">
                      <li>Built responsive web apps using React.js and TailwindCSS.</li>
                      <li>Integrated Node.js and Supabase for backend flows.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-mono text-xs font-bold text-sky-100">SwiftUI Academy</h4>
                    <p className="font-sans text-xs text-sky-200 mb-1">App Development with Swift — Associate</p>
                    <ul className="font-sans text-sm list-disc list-inside space-y-1 text-slate-200">
                      <li>Built interactive iOS interfaces with SwiftUI.</li>
                    </ul>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TechSpecsWidget;