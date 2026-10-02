import React, { useState } from 'react';
import BlueprintCard from './BlueprintCard';
import predethn from '../assets/predethn.png';
import predgender from '../assets/predgender.png';
import predage from '../assets/predage.png';

const CnnProject = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <BlueprintCard className="hover:scale-[1.02] transition-transform duration-300 h-[400px] cursor-pointer group">
        <div 
          className="h-full flex flex-col"
          onClick={() => setIsModalOpen(true)}
        >
          <div className="h-[50%] border-b border-white/10 bg-slate-900/80 relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-pink-400/10 z-10"></div>
            <img src={predage} alt="CNN Project" className="w-full h-full object-cover" />
          </div>

          <div className="h-[50%] flex flex-col bg-slate-950/90">
            <div className="p-3 border-b border-white/10">
              <h3 className="font-mono text-sm font-bold uppercase text-pink-200 truncate">Age & Ethnicity CNN</h3>
              <p className="font-sans text-xs mt-1 line-clamp-2 text-slate-200">
                A deep learning project utilizing CNNs to predict age, ethnicity, and gender from facial image pixel data.
              </p>
            </div>
            
            <div className="p-3 border-b border-white/10 flex-grow bg-slate-900/80 overflow-hidden">
              <span className="font-mono text-xs block mb-1 text-pink-200">TECH_STACK:</span>
              <p className="font-mono text-[10px] leading-relaxed text-slate-100">PYTHON / TENSORFLOW / KERAS / PANDAS / NUMPY</p>
            </div>

            <div className="p-2 text-center font-mono text-xs text-slate-200 hover:bg-pink-300 hover:text-slate-950 transition-colors">
              CLICK_TO_EXPAND_RECORDS
            </div>
          </div>
        </div>
      </BlueprintCard>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-md bg-slate-950/60">
          <div className="bg-slate-950 border border-pink-300/20 w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col text-pink-100">
            <div className="sticky top-0 bg-slate-950 border-b border-pink-300/20 p-4 flex justify-between items-center z-10">
              <h2 className="font-mono text-sm md:text-lg font-bold truncate pr-4 text-pink-200">PROJECT_SPECIFICATION: CNN_PREDICTOR</h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="font-mono text-sm border border-pink-300/40 px-3 py-1 hover:bg-pink-300 hover:text-slate-950 transition-colors shrink-0"
              >
                [ CLOSE ]
              </button>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <section>
                  <h3 className="font-mono text-sm font-bold border-b border-pink-300/20 mb-2 text-pink-200">THE_PROBLEM</h3>
                  <ul className="font-sans text-sm list-disc list-inside space-y-2 text-slate-200">
                    <li>Traditional dense neural networks struggle to process image spatial patterns effectively.</li>
                    <li>Predicting multi-task facial attributes requires specialized feature learning from raw pixel data.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="font-mono text-sm font-bold border-b border-pink-300/20 mb-2 text-pink-200">CORE_FEATURES</h3>
                  <ul className="font-sans text-sm list-disc list-inside space-y-1 text-slate-200">
                    <li><strong>Pixel Data Preprocessing & Reshaping:</strong> Normalizes and reshapes images into tensors.</li>
                    <li><strong>Multi-Task Architecture:</strong> Uses Conv2D, MaxPool2D, Dropout, and Dense layers.</li>
                    <li><strong>Model Evaluation:</strong> Assesses performance with MAE, MSE, and R-squared comparisons.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="font-mono text-sm font-bold border-b border-pink-300/20 mb-2 text-pink-200">ARCHITECTURE</h3>
                  <div className="flex flex-wrap gap-2 font-mono text-xs">
                    <span className="px-2 py-1 bg-pink-400/10 border border-pink-300/30 text-pink-100">CNN / Conv2D</span>
                    <span className="px-2 py-1 bg-pink-400/10 border border-pink-300/30 text-pink-100">Keras Sequential API</span>
                    <span className="px-2 py-1 bg-pink-400/10 border border-pink-300/30 text-pink-100">Scikit-Learn</span>
                    <span className="px-2 py-1 bg-pink-400/10 border border-pink-300/30 text-pink-100">KaggleHub</span>
                  </div>
                </section>

                <section>
                  <h3 className="font-mono text-sm font-bold border-b border-pink-300/20 mb-2 text-pink-200">FUTURE_SCOPE</h3>
                  <ul className="font-sans text-sm list-disc list-inside space-y-1 text-slate-200">
                    <li><strong>Multi-Output Neural Network:</strong> Predict age, gender, and ethnicity in one pass.</li>
                    <li><strong>Real-Time Inference:</strong> Integrate OpenCV for live camera applications.</li>
                  </ul>
                </section>

                <div className="flex gap-4 pt-4">
                  <a href="https://colab.research.google.com/drive/1lTyl0UBkWEy3f6ufX7t7jo1YPc81wqte?usp=sharing" target="_blank" rel="noreferrer" className="flex-1 text-center font-mono text-sm border border-pink-300/40 p-2 hover:bg-pink-300 hover:text-slate-950 transition-colors text-pink-100">
                    VIEW_NOTEBOOK (COLAB)
                  </a>
                  <a href="https://www.kaggle.com/datasets/nipunarora8/age-gender-and-ethnicity-face-data-csv" target="_blank" rel="noreferrer" className="flex-1 text-center font-mono text-sm border border-pink-300/40 p-2 hover:bg-pink-300 hover:text-slate-950 transition-colors text-pink-100">
                    VIEW_DATASET
                  </a>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="font-mono text-sm font-bold border-b border-pink-300/20 mb-2 text-pink-200">DATA_VISUALIZATION_RECORDS</h3>
                <img src={predethn} alt="Ethnicity prediction results" className="w-full h-auto max-h-[500px] object-contain mx-auto border border-pink-300/20 bg-slate-900 p-2" />
                <img src={predgender} alt="Gender prediction results" className="w-full h-auto max-h-[500px] object-contain mx-auto border border-pink-300/20 bg-slate-900 p-2" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CnnProject;