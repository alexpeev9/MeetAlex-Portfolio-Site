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

export type CopyShape = {
  metadata: {
    title: string;
    description: string;
  };
  navigation: {
    logoPrimary: string;
    logoSecondary: string;
    items: NavigationItem[];
    cta: string;
    ariaMenu: string;
    ariaItemPrefix: string;
    logoAria: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    primaryCtaUrl: string;
    secondaryCtaUrl: string;
    imageSrc: string;
    imageAlt: string;
  };
  process: {
    title: string;
    description: string;
    steps: ProcessStep[];
  };
  portfolio: {
    title: string;
    description: string;
    projects: PortfolioProject[];
  };
  about: {
    title: string;
    copy: string;
    values: ValueCard[];
  };
  contact: {
    title: string;
    description: string;
    form: {
      nameLabel: string;
      emailLabel: string;
      messageLabel: string;
      submit: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      messagePlaceholder: string;
    };
    cards: ContactCard[];
    ariaCardPrefix: string;
  };
  footer: {
    copyright: string;
    links: ProjectAction[];
  };
  accessibility: {
    openMenu: string;
    closeMenu: string;
    primaryCta: string;
    secondaryCta: string;
    timeline: string;
    projectLink: string;
    submitForm: string;
  };
};

import copyJson from "@/translations/settings.json";

export const getCopy = (): CopyShape => {
  return copyJson as CopyShape;
};
