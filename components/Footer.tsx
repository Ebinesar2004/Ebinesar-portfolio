
import React from 'react';
import type { PersonalInfo } from '../types';

interface FooterProps {
  personal: PersonalInfo;
}

const Footer: React.FC<FooterProps> = ({ personal }) => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-20">
      <div className="container mx-auto py-8 px-4 text-center text-gray-400">
        <p className="text-lg font-semibold text-white">Get in Touch</p>
        <div className="flex justify-center gap-6 my-4">
          <a href={`mailto:${personal.email}`} className="hover:text-cyan-400 transition-colors">{personal.email}</a>
          <span className="text-gray-600">|</span>
          <a href={`tel:${personal.phone.replace(/ /g, '')}`} className="hover:text-cyan-400 transition-colors">{personal.phone}</a>
        </div>
        <p>&copy; {new Date().getFullYear()} {personal.name}. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
