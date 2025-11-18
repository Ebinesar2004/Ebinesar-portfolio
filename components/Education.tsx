
import React from 'react';
import SectionWrapper from './SectionWrapper';
import type { EducationInfo } from '../types';

interface EducationProps {
  education: EducationInfo[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <SectionWrapper id="education" title="Education">
      <div className="max-w-4xl mx-auto space-y-8">
        {education.map((edu, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col sm:flex-row justify-between items-start sm:items-center hover:shadow-cyan-500/20 transition-shadow duration-300">
            <div className="flex-1 mb-4 sm:mb-0">
              <p className="text-cyan-400 font-semibold">{edu.degree}</p>
              <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
              <p className="text-gray-400">{edu.grade}</p>
            </div>
            <div className="bg-gray-700 text-white text-sm font-bold px-4 py-1 rounded-full">
              {edu.year}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Education;
