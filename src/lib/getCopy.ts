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
    eyebrow: string;
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    primaryCtaUrl: string;
    secondaryCtaUrl: string;
    imageSrc: string;
    imageAlt: string;
    metrics: {
      label: string;
      value: string;
    }[];
    trustedTitle: string;
    trustedBrands: string[];
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
  hire: {
    hero: {
      eyebrow: string;
      headline: string;
      subheadline: string;
      primaryCta: string;
      secondaryCta: string;
      primaryCtaUrl: string;
      secondaryCtaUrl: string;
      imageSrc: string;
      imageAlt: string;
    };
    benefits: {
      title: string;
      items: HireBenefit[];
    };
    roles: {
      title: string;
      description: string;
      positions: HirePosition[];
    };
    process: {
      title: string;
      steps: ProcessStep[];
    };
    culture: {
      title: string;
      points: HirePoint[];
    };
    cta: {
      title: string;
      description: string;
      primaryLabel: string;
      primaryUrl: string;
      secondaryLabel: string;
      secondaryUrl: string;
    };
    accessibility: {
      primaryCta: string;
      secondaryCta: string;
      roleCta: string;
      hirePrimary: string;
      hireSecondary: string;
    };
  };
  cv: {
    bio: {
      name: string;
      title: string;
      summary: string;
      location: string;
    };
    contact: {
      phoneLabel: string;
      phone: string;
      emailLabel: string;
      email: string;
      linkedin: string;
      github: string;
      hireCta: string;
    };
    skills: {
      title: string;
      intro: string;
      categories: CvSkillCategory[];
    };
    experience: {
      title: string;
      roles: CvRole[];
    };
    projects: {
      title: string;
      items: CvProject[];
    };
    services: {
      title: string;
      intro: string;
      items: CvService[];
    };
    education: {
      title: string;
      items: CvEducationItem[];
    };
    certifications: {
      title: string;
      items: CvCertification[];
    };
    testimonials: {
      title: string;
      intro: string;
      items: CvTestimonial[];
    };
    languages: {
      title: string;
      listTitle: string;
      items: CvLanguage[];
      interests: {
        title: string;
        items: string[];
      };
    };
    salary: {
      title: string;
      note: string;
    };
    accessibility: {
      experience: string;
      projectLink: string;
      educationLink: string;
      contactLink: string;
      skillsCategory: string;
      skillsTag: string;
      serviceCard: string;
      certificationLink: string;
      testimonialQuote: string;
      languageItem: string;
      interestTag: string;
    };
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
