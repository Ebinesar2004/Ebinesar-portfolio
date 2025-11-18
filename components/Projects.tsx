
import React from 'react';
import SectionWrapper from './SectionWrapper';
import type { ProjectInfo } from '../types';

interface ProjectsProps {
  projects: ProjectInfo[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <SectionWrapper id="projects" title="Projects">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 text-cyan-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="bg-gray-700 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
