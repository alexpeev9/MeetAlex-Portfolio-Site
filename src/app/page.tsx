'use client';

import { useMemo, useState } from 'react';
import styles from './page.module.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ProcessSection from '@/components/sections/ProcessSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection, { ContactFormState } from '@/components/sections/ContactSection';
import { getCopy, PortfolioProject, ProcessStep, ValueCard, ContactCard, ProjectAction } from '@/lib/getCopy';
import { useMountedAnimations } from '@/hooks/useMountedAnimations';
import { openInNewTab, scrollToId } from '@/utils/navigation';

const copy = getCopy();

export default function Home() {
  const [formState, setFormState] = useState<ContactFormState>({
    name: '',
    email: '',
    message: '',
  });

  const { isMounted, getDelayStyle } = useMountedAnimations();

  const navigation = useMemo(() => copy.navigation, []);
  const hero = useMemo(() => copy.hero, []);
  const process = useMemo(() => copy.process, []);
  const portfolio = useMemo(() => copy.portfolio, []);
  const about = useMemo(() => copy.about, []);
  const contact = useMemo(() => copy.contact, []);
  const accessibility = useMemo(() => copy.accessibility, []);
  const footer = useMemo(() => copy.footer, []);

  const processHighlights = useMemo<ProcessStep[]>(() => process.steps.slice(0, 3), [process]);
  const projects = useMemo<PortfolioProject[]>(() => portfolio.projects, [portfolio]);
  const values = useMemo<ValueCard[]>(() => about.values, [about]);
  const contactCards = useMemo<ContactCard[]>(() => contact.cards, [contact]);
  const footerLinks = useMemo<ProjectAction[]>(() => footer.links, [footer]);

  const handleNavigate = (targetId: string) => {
    if (targetId === 'hire-page') {
      window.location.href = '/hire';
      return;
    }

    scrollToId(targetId);
  };

  const handleHeroPrimary = () => {
    openInNewTab(hero.primaryCtaUrl);
  };

  const handleHeroSecondary = () => {
    openInNewTab(hero.secondaryCtaUrl);
  };

  const handleProjectAction = (url: string) => {
    openInNewTab(url);
  };

  const handleContactResource = (url: string) => {
    openInNewTab(url);
  };

  const handleFooterLink = (url: string) => {
    openInNewTab(url);
  };

  const handleFormChange = (field: keyof ContactFormState, value: string) => {
    setFormState((previous) => ({ ...previous, [field]: value }));
  };

  const handleFormSubmit = () => {
    const defaultContactUrl = contactCards[1]?.url ?? 'mailto:hello@alexanderpeev.dev';
    openInNewTab(defaultContactUrl);
  };

  return (
    <div className={styles.page}>
      <Header
        navigation={navigation}
        onNavigate={handleNavigate}
        isMounted={isMounted}
        getDelayStyle={getDelayStyle}
      />
      <main className="flex-1">
        <HeroSection
          hero={hero}
          processHighlights={processHighlights}
          logoAccent={navigation.logoSecondary}
          onPrimaryCta={handleHeroPrimary}
          onSecondaryCta={handleHeroSecondary}
          isMounted={isMounted}
          getDelayStyle={getDelayStyle}
          primaryCtaLabel={accessibility.primaryCta}
          secondaryCtaLabel={accessibility.secondaryCta}
        />
        <ProcessSection
          process={process}
          timelineLabel={accessibility.timeline}
          isMounted={isMounted}
          getDelayStyle={getDelayStyle}
        />
        <ProjectsSection
          portfolio={{ ...portfolio, projects }}
          projectLinkLabel={accessibility.projectLink}
          isMounted={isMounted}
          getDelayStyle={getDelayStyle}
          onProjectAction={handleProjectAction}
        />
        <AboutSection
          about={{ ...about, values }}
          supportingCopy={hero.subheadline}
          accentLabel={navigation.logoSecondary}
          isMounted={isMounted}
          getDelayStyle={getDelayStyle}
        />
        <ContactSection
          contact={{ ...contact, cards: contactCards }}
          accessibility={accessibility}
          formState={formState}
          onFormChange={handleFormChange}
          onSubmit={handleFormSubmit}
          onCardActivate={handleContactResource}
          isMounted={isMounted}
          getDelayStyle={getDelayStyle}
        />
      </main>
      <Footer
        footer={{ ...footer, links: footerLinks }}
        linkAriaLabel={accessibility.projectLink}
        onLinkActivate={handleFooterLink}
        isMounted={isMounted}
        getDelayStyle={getDelayStyle}
      />
    </div>
  );
}
