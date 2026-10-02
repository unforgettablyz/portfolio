import './App.css';
import IdentityWidget from './components/IdentityWidget';
import TechSpecsWidget from './components/TechSpecsWidget';
import GlassPlayerWidget from './components/GlassPlayerWidget';
import MapOkuProject from './components/MapOkuProject';
import WiseServeProject from './components/WiseServeProject';
import CreditCardProject from './components/CreditCardProject';
import CnnProject from './components/CnnProject';
import ProfileHeader from './components/ProfileHeader';

function App() {
  return (
    <div className="app-shell">
      <div className="page-shell">
        <ProfileHeader />

        <div className="showcase-grid">
          <div className="showcase-card">
            <IdentityWidget />
          </div>
          <div className="showcase-card">
            <TechSpecsWidget />
          </div>
          <div className="showcase-card">
            <GlassPlayerWidget />
          </div>
        </div>

        <section className="section-block">
          <div className="section-header">
            <div>
              <span className="eyebrow">Portfolio</span>
              <h2>Development Project</h2>
            </div>
          </div>
          <div className="project-grid">
            <MapOkuProject />
            <WiseServeProject />
          </div>
        </section>

        <section className="section-block">
          <div className="section-header">
            <div>
              <span className="eyebrow">Machine learning</span>
              <h2>AI / Data Project</h2>
            </div>
          </div>
          <div className="project-grid">
            <CreditCardProject />
            <CnnProject />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;