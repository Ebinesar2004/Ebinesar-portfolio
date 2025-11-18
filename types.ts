
export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
}

export interface EducationInfo {
  degree: string;
  institution: string;
  year: string;
  grade: string;
}

export interface ProjectInfo {
  title: string;
  description: string;
  tech: string[];
}

export interface InternshipInfo {
  role: string;
  company: string;
  description: string;
}

export interface CertificateInfo {
  title: string;
  issuer: string;
  url: string;
}

export interface ResumeData {
  personal: PersonalInfo;
  objective: string;
  education: EducationInfo[];
  technicalSkills: string[];
  nonTechnicalSkills: string[];
  projects: ProjectInfo[];
  internships: InternshipInfo[];
  languages: string[];
  certifications: CertificateInfo[];
}