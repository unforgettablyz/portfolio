import React from 'react';
import BlueprintCard from './BlueprintCard';

const ProjectBlueprint = ({ title, tech, demoLink, codeLink }) => {
  return (
    <BlueprintCard className="hover:scale-[1.02] transition-transform duration-300 h-[400px]">
      {/* Top 60%: Image Placeholder with blueprint filter effects */}
      <div className="h-[60%] border-b-[1.5px] border-blueprint-blue bg-blueprint-blue/10 relative overflow-hidden group">
        {/* Simulate a blueprint overlay over a grayscale image */}
        <div className="absolute inset-0 bg-blueprint-blue mix-blend-screen opacity-50 z-10"></div>
        <div className="w-full h-full bg-slate-200 grayscale contrast-125 flex items-center justify-center">
            {/* Replace this div with an actual <img> tag when you have project screenshots */}
            <span className="font-mono text-blueprint-blue z-20 font-bold opacity-60 mix-blend-multiply">
              [ IMG_RENDER ]
            </span>
        </div>
      </div>

      {/* Bottom 40%: Details */}
      <div className="h-[40%] flex flex-col">
        <div className="p-3 border-b-[1.5px] border-blueprint-blue bg-blueprint-bg">
          <h3 className="font-mono text-sm font-bold uppercase">{title}</h3>
        </div>
        
        <div className="p-3 border-b-[1.5px] border-blueprint-blue flex-grow bg-blueprint-blue/5">
          <span className="font-mono text-xs block mb-1">TECH_STACK:</span>
          <p className="font-mono text-xs">{tech}</p>
        </div>

        <div className="flex font-mono text-xs">
          <a href={codeLink} className="flex-1 p-2 border-r-[1.5px] border-blueprint-blue hover:bg-blueprint-blue hover:text-white transition-colors text-center">
            SRC_CODE
          </a>
          <a href={demoLink} className="flex-1 p-2 hover:bg-blueprint-blue hover:text-white transition-colors text-center">
            LIVE_DEMO
          </a>
        </div>
      </div>
    </BlueprintCard>
  );
};

export default ProjectBlueprint;