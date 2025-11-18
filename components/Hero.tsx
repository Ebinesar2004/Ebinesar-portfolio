import React from 'react';
import type { PersonalInfo } from '../types';

interface HeroProps {
  personal: PersonalInfo;
}

const Hero: React.FC<HeroProps> = ({ personal }) => {
  return (
    <section id="hero" className="min-h-[calc(100vh-6rem)] flex items-center justify-center py-20">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
          {personal.name}
        </h1>
        <p className="mt-2 md:mt-4 text-lg md:text-2xl text-cyan-400 font-medium">
          {personal.title}
        </p>
        <div className="mt-8 flex flex-wrap justify-center items-center gap-x-6 gap-y-4 text-gray-400">
          <div className="flex items-center">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-cyan-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
            <span>{personal.location}</span>
          </div>
          <a href={`mailto:${personal.email}`} className="flex items-center hover:text-cyan-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-cyan-400" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
            <span>{personal.email}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;