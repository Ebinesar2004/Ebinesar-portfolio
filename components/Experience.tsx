
import React from 'react';
import SectionWrapper from './SectionWrapper';
import type { InternshipInfo } from '../types';

interface ExperienceProps {
  internships: InternshipInfo[];
}

const Experience: React.FC<ExperienceProps> = ({ internships }) => {
  return (
    <SectionWrapper id="experience" title="Experience">
      <div className="relative max-w-2xl mx-auto">
        <div className="absolute left-1/2 w-1 h-full bg-gray-700 transform -translate-x-1/2"></div>
        {internships.map((internship, index) => (
          <div key={index} className={`mb-8 flex items-center w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
            <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-300">
                <p className="text-cyan-400 font-semibold">{internship.company}</p>
                <h3 className="text-xl font-bold text-white mb-2">{internship.role}</h3>
                <p className="text-gray-400">{internship.description}</p>
              </div>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400 border-4 border-gray-900"></div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Experience;
