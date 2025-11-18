
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import type { ResumeData } from './types';

const resumeData: ResumeData = {
  personal: {
    name: 'EBINESAR C',
    title: 'AI & Data Science Enthusiast',
    location: 'Kulithalai, Karur',
    phone: '+91 73391 90820',
    email: 'ebinesar15.09.2004@gmail.com',
  },
  objective:
    'AI and Data Science enthusiast with expertise in machine learning, deep learning, and data analysis. Skilled in Python, TensorFlow, and data visualization, with hands-on experience deploying models for real-time insights. Known for delivering data-driven solutions that enhance decision-making and operational efficiency. Passionate about leveraging AI to solve complex challenges.',
  education: [
    {
      degree: 'B.Tech., (AI & DS)',
      institution: 'Chettinad College of Engineering & Technology',
      year: '2026',
      grade: 'Up to 5th semester 7.4 CGPA',
    },
    {
      degree: 'HSC',
      institution:'Bishop Heber higher secondary school',
        
      year: '2022',
      grade: '57.5%',
    },
    {
      degree: 'SSLC',
      institution:'Sevai Shanthi metric higher secondary school',
      
      year: '2019',
      grade: '70.2%',
      
    },
  ],
  technicalSkills: [
    'HTML',
    'CSS',
    'JavaScript',
    'Python',
    'Excel',
    'AI',
    'Data Science',
    'TensorFlow',
    'Machine Learning',
  ],
  nonTechnicalSkills: [
    'Strong Analytical skills',
    'Problem solving skills',
    'Communication Skills',
    'Team management',
    'Quick learner',
  ],
  projects: [
    {
      title: 'Train Ticket Booking System – Mini Project',
      description:
        'A console-based application that allows users to view trains, book tickets, cancel bookings, and view booking history. Designed with a simple user interface and basic database storage.',
      tech: ['Python', 'File I/O', 'MongoDB/SQLite (conceptual)'],
    },
  ],
  internships: [
    {
      role: 'Full Stack Development Intern',
      company: 'IBM',
      description: 'Completed a comprehensive internship focused on full-stack development principles and practices.',
    },
    {
      role: 'Web Development Intern',
      company: 'Skill Vertex',
      description: 'Gained hands-on experience in web development technologies and methodologies.',
    },
  ],
  certifications: [
    {
      title: 'Large Language Model Basics',
      issuer: 'IBM SkillsBuild',
      url: 'https://skills.yourlearning.ibm.com/certificate/MDL-433',
    },
    {
      title: 'Mastering the Art of Prompting',
      issuer: 'IBM SkillsBuild',
      url: 'https://skills.yourlearning.ibm.com/certificate/MDL-298',
    },
    {
      title: 'Front End Technologies',
      issuer: 'IBM Career Education Program',
      url: 'https://courses.ibmcep.cognitiveclass.ai/certificates/b3ccc5d259a246b8b446f14cf1dc673a',
    },
  ],
  languages: ['Tamil', 'English'],
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main className="container mx-auto px-4 md:px-8 lg:px-16 pt-24">
        <Hero personal={resumeData.personal} />
        <About objective={resumeData.objective} />
        <Skills technical={resumeData.technicalSkills} nonTechnical={resumeData.nonTechnicalSkills} />
        <Experience internships={resumeData.internships} />
        <Projects projects={resumeData.projects} />
        <Education education={resumeData.education} />
        <Certifications certifications={resumeData.certifications} />
      </main>
      <Footer personal={resumeData.personal} />
    </div>
  );
};

export default App;