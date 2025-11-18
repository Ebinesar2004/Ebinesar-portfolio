
import React from 'react';

interface SectionWrapperProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-16 md:py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12 text-white">
        {title}
        <span className="block w-20 h-1 bg-cyan-400 mx-auto mt-2"></span>
      </h2>
      {children}
    </section>
  );
};

export default SectionWrapper;
