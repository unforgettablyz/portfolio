import React from 'react';

const BlueprintCard = ({ children, className = '' }) => {
  return (
    <div className={`blueprint-card ${className}`.trim()}>
      {children}
    </div>
  );
};

export default BlueprintCard;