export interface Project {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  role?: string;
  link?: string;
  isPlaceholder?: boolean;
}

export interface ExperienceItem {
  organization: string;
  role: string;
  period: string;
  description: string;
  isPlaceholder?: boolean;
}

export interface SearchResult {
  title: string;
  source: string;
  description: string;
  url: string;
}
