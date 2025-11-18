
import React from 'react';
import SectionWrapper from './SectionWrapper';
import type { CertificateInfo } from '../types';

interface CertificationsProps {
  certifications: CertificateInfo[];
}

const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {
  return (
    <SectionWrapper id="certifications" title="Certifications">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-between hover:shadow-cyan-500/20 transition-shadow duration-300">
            <div>
              <p className="text-sm text-cyan-400 font-semibold mb-1">{cert.issuer}</p>
              <h3 className="text-lg font-bold text-white mb-4">{cert.title}</h3>
            </div>
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-block text-center bg-cyan-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-cyan-600 transition-colors duration-300"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Certifications;
