import React from 'react';
import cunaImg from '../assets/cuna.jpg';

const ProfileHeader = () => {
  return (
    <header className="hero-panel">
      <div className="hero-copy">
        <span className="hero-kicker">Creative technologist</span>
        <h1>Nurul Husna Hanipi</h1>
        <p>
          I craft interactive digital experiences through software engineering, data-driven thinking,
          and visual storytelling. My work blends product design, front-end development, and AI-driven problem solving.
        </p>

        <div className="hero-actions">
          <a href="https://www.linkedin.com/in/nurulhusnahanipi" target="_blank" rel="noopener noreferrer" className="hero-button primary">
            LinkedIn
          </a>
          <a href="mailto:cunazyx@gmail.com" className="hero-button">
            cunazyx@gmail.com
          </a>
          <a href="tel:+601129251004" className="hero-button">
            +60 11-2925 1004
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="profile-frame">
          <img src={cunaImg} alt="Nurul Husna" />
        </div>
      </div>
    </header>
  );
};

export default ProfileHeader;