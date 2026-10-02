import React, { useState } from 'react';
import BlueprintCard from './BlueprintCard';
import creditcard from '../assets/creditcard.png';
import elbowmethod from '../assets/elbowmethod.png';
import clustering from '../assets/clustering.png';

const CreditCardProject = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <BlueprintCard className="hover:scale-[1.02] transition-transform duration-300 h-[400px] cursor-pointer group">
        <div 
          className="h-full flex flex-col"
          onClick={() => setIsModalOpen(true)}
        >
          <div className="h-[50%] border-b border-white/10 bg-slate-900/80 relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-emerald-400/10 z-10"></div>
            <img src={creditcard} alt="Credit Card Project" className="w-full h-full object-cover" />
          </div>

          <div className="h-[50%] flex flex-col bg-slate-950/90">
            <div className="p-3 border-b border-white/10">
              <h3 className="font-mono text-sm font-bold uppercase text-emerald-200 truncate">Customer Segmentation</h3>
              <p className="font-sans text-xs mt-1 line-clamp-2 text-slate-200">
                Applies K-Means clustering to credit card customer data to segment users based on utilization, credit limit, and revolving balances.
              </p>
            </div>
            
            <div className="p-3 border-b border-white/10 flex-grow bg-slate-900/80 overflow-hidden">
              <span className="font-mono text-xs block mb-1 text-emerald-200">TECH_STACK:</span>
              <p className="font-mono text-[10px] leading-relaxed text-slate-100">PYTHON / PANDAS / NUMPY / SCIKIT-LEARN / SEABORN / MATPLOTLIB</p>
            </div>

            <div className="p-2 text-center font-mono text-xs text-slate-200 hover:bg-emerald-300 hover:text-slate-950 transition-colors">
              CLICK_TO_EXPAND_RECORDS
            </div>
          </div>
        </div>
      </BlueprintCard>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-md bg-slate-950/60">
          <div className="bg-slate-950 border border-emerald-300/20 w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col text-emerald-100">
            <div className="sticky top-0 bg-slate-950 border-b border-emerald-300/20 p-4 flex justify-between items-center z-10">
              <h2 className="font-mono text-sm md:text-lg font-bold truncate pr-4 text-emerald-200">PROJECT_SPECIFICATION: CUSTOMER_SEGMENTATION</h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="font-mono text-sm border border-emerald-300/40 px-3 py-1 hover:bg-emerald-300 hover:text-slate-950 transition-colors shrink-0"
              >
                [ CLOSE ]
              </button>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <section>
                  <h3 className="font-mono text-sm font-bold border-b border-emerald-300/20 mb-2 text-emerald-200">THE_PROBLEM</h3>
                  <ul className="font-sans text-sm list-disc list-inside space-y-2 text-slate-200">
                    <li>Difficulty in manually identifying distinct segments of credit card customers based on financial utilization and spending behaviors.</li>
                    <li>High risk of customer churn without granular visibility into behavioral attributes such as credit limit usage and revolving balance patterns.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="font-mono text-sm font-bold border-b border-emerald-300/20 mb-2 text-emerald-200">CORE_FEATURES</h3>
                  <ul className="font-sans text-sm list-disc list-inside space-y-1 text-slate-200">
                    <li>Automated dataset ingestion and directory management via kagglehub.</li>
                    <li>Feature scaling and standardization using StandardScaler.</li>
                    <li>Optimal cluster determination using the Elbow Method and statistical profiling.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="font-mono text-sm font-bold border-b border-emerald-300/20 mb-2 text-emerald-200">ARCHITECTURE</h3>
                  <div className="flex flex-wrap gap-2 font-mono text-xs">
                    <span className="px-2 py-1 bg-emerald-400/10 border border-emerald-300/30 text-emerald-100">K-Means Clustering</span>
                    <span className="px-2 py-1 bg-emerald-400/10 border border-emerald-300/30 text-emerald-100">Data Preprocessing</span>
                    <span className="px-2 py-1 bg-emerald-400/10 border border-emerald-300/30 text-emerald-100">Exploratory Data Analysis</span>
                    <span className="px-2 py-1 bg-emerald-400/10 border border-emerald-300/30 text-emerald-100">Group Aggregation</span>
                  </div>
                </section>

                <section>
                  <h3 className="font-mono text-sm font-bold border-b border-emerald-300/20 mb-2 text-emerald-200">FUTURE_SCOPE</h3>
                  <ul className="font-sans text-sm list-disc list-inside space-y-1 text-slate-200">
                    <li>Implementation of classification models to predict customer churn.</li>
                    <li>Integration of an interactive Streamlit or Dash dashboard.</li>
                  </ul>
                </section>

                <div className="flex gap-4 pt-4">
                  <a href="https://colab.research.google.com/drive/1Ui48IWJ5mCgtSD_Ur1aiO-TdqP1Yqpeb?usp=sharing" target="_blank" rel="noreferrer" className="flex-1 text-center font-mono text-sm border border-emerald-300/40 p-2 hover:bg-emerald-300 hover:text-slate-950 transition-colors text-emerald-100">
                    VIEW_NOTEBOOK (COLAB)
                  </a>
                  <a href="https://www.kaggle.com/datasets/sakshigoyal7/credit-card-customers" target="_blank" rel="noreferrer" className="flex-1 text-center font-mono text-sm border border-emerald-300/40 p-2 hover:bg-emerald-300 hover:text-slate-950 transition-colors text-emerald-100">
                    VIEW_DATASET
                  </a>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="font-mono text-sm font-bold border-b border-emerald-300/20 mb-2 text-emerald-200">DATA_VISUALIZATION_RECORDS</h3>
                <img src={elbowmethod} alt="Elbow Method Plot" className="w-full h-auto max-h-[500px] object-contain mx-auto border border-emerald-300/20 bg-slate-900 p-2" />
                <img src={clustering} alt="Cluster Visualization" className="w-full h-auto max-h-[500px] object-contain mx-auto border border-emerald-300/20 bg-slate-900 p-2" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreditCardProject;