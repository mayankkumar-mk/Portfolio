export interface Education {
  degree: string;
  institution: string;
  year: string;
  details?: string;
  grade?: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: string;
  type: 'Journal' | 'Conference' | 'Under Review';
  doi?: string;
  abstract?: string;
}

export interface Project {
  title: string;
  role: string;
  duration: string;
  description: string;
  highlights: string[];
  confidential?: boolean;
}

export interface Achievement {
  title: string;
  year: string;
  description: string;
}

export interface Referee {
  name: string;
  title: string;
  department: string;
  institution: string;
  email: string;
}