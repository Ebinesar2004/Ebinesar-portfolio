
import React from 'react';
import SectionWrapper from './SectionWrapper';

interface AboutProps {
  objective: string;
}

const About: React.FC<AboutProps> = ({ objective }) => {
  return (
    <SectionWrapper id="about" title="About Me">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          {objective}
        </p>
      </div>
    </SectionWrapper>
  );
};

export default About;
