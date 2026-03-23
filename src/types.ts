export type Screen = 'profile' | 'genealogy' | 'events' | 'contributions';

export interface Member {
  id: string;
  name: string;
  years: string;
  generation: string;
  role?: string;
  bio?: string;
  portraitUrl: string;
  father?: string;
  mother?: string;
  spouse?: string;
  children?: string[];
  timeline: {
    date: string;
    title: string;
    description: string;
  }[];
}

export interface Event {
  id: string;
  title: string;
  date: string;
  lunarDate: string;
  location: string;
  description: string;
  type: 'DAI_LE_TOC' | 'NOI_BO' | 'GIAO_DUC';
  preparation: string[];
  program: string[];
}

export interface Contribution {
  id: string;
  member: string;
  content: string;
  date: string;
  status: 'APPROVED' | 'PENDING';
}
