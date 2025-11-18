export type NavigationItem = {
  id: string;
  label: string;
};

export type ProjectAction = {
  label: string;
  url: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  copy: string;
};

export type PortfolioProject = {
  name: string;
  tags: string[];
  description: string;
  imageSrc: string;
  imageAlt: string;
  actions: ProjectAction[];
};

export type ValueCard = {
  title: string;
  description: string;
};

export type ContactCard = {
  title: string;
  description: string;
  cta: string;
  url: string;
};

export type HireBenefit = ValueCard;

export type HirePosition = {
  title: string;
  location: string;
  type: string;
  summary: string;
  tags: string[];
  ctaLabel: string;
  ctaUrl: string;
};

export type HirePoint = ValueCard;

export type CvRole = {
  title: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  stack: string[];
};

export type CvEducationItem = {
  degree: string;
  field: string;
  period: string;
  school: string;
  linkLabel: string;
  link: string;
};

export type CvProject = {
  name: string;
  description: string;
  stack: string[];
  link: string;
};

export type CvLanguage = {
  name: string;
  level: string;
};

export type CvSkillCategory = {
  title: string;
  items: string[];
};

export type CvService = {
  title: string;
  description: string;
};

export type CvCertification = {
  name: string;
  issuer: string;
  year: string;
  linkLabel: string;
  link: string;
};

export type CvTestimonial = {
  quote: string;
  name: string;
  role: string;
};

import copyJson from "@/translations/settings.json";

export const getCopy = () => {
  return copyJson;
};
