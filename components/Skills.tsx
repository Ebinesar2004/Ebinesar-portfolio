
import React from 'react';
import SectionWrapper from './SectionWrapper';

interface SkillsProps {
  technical: string[];
  nonTechnical: string[];
}

const SkillBadge: React.FC<{ skill: string }> = ({ skill }) => (
    <div className="bg-gray-800 text-gray-200 py-2 px-4 rounded-lg shadow-md hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1 cursor-default">
        {skill}
    </div>
);


const Skills: React.FC<SkillsProps> = ({ technical, nonTechnical }) => {
  return (
    <SectionWrapper id="skills" title="Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold text-center mb-6 text-white">Technical Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technical.map((skill, index) => (
              <SkillBadge key={index} skill={skill} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-center mb-6 text-white">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {nonTechnical.map((skill, index) => (
              <SkillBadge key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
