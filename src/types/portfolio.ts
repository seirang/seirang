export interface Profile {
  name: string;
  title: string;
  description: string;
  profileImage?: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  organization: string;
}

export interface Skill {
  name: string;
  level: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image?: string;
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
}

export interface Interest {
  title: string;
  description: string;
  icon: string;
}

export interface PortfolioData {
  profile: Profile;
  timeline: TimelineItem[];
  skills: Skill[];
  projects: Project[];
  contact: ContactInfo;
  interests: Interest[];
} 