'use client';

import { useMemo } from 'react';
import styles from './page.module.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HireHero from '@/components/hire/Hero';
import HireBenefits from '@/components/hire/Benefits';
import HireRoles from '@/components/hire/Roles';
import HireProcess from '@/components/hire/Process';
import HireCulture from '@/components/hire/Culture';
import HireCta from '@/components/hire/Cta';
import { getCopy } from '@/lib/getCopy';
import { useMountedAnimations } from '@/hooks/useMountedAnimations';
import { openInNewTab, scrollToId } from '@/utils/navigation';

const hireCopy = getCopy();

export default function HirePage() {
  const { isMounted, getDelayStyle } = useMountedAnimations();

  const navigation = useMemo(() => hireCopy.navigation, []);
  const footer = useMemo(() => hireCopy.footer, []);
  const appAccessibility = useMemo(() => hireCopy.accessibility, []);
  const hire = useMemo(() => hireCopy.hire, []);

  const headerNavigation = useMemo(
    () => ({
      ...navigation,
      items: [
        ...navigation.items.filter((item) => item.id !== 'hire-page'),
        { id: 'roles', label: 'Roles' },
      ],
    }),
    [navigation],
  );

  const handleNavigate = (targetId: string) => {
    if (targetId === 'roles') {
      scrollToId('roles');
      return;
    }

    if (targetId === 'hire-page') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (targetId === 'cv-page') {
      window.location.href = '/cv';
      return;
    }

    if (targetId === 'projects' || targetId === 'process' || targetId === 'about') {
      window.location.href = `/#${targetId}`;
      return;
    }

    scrollToId(targetId);
  };

  const handleRoleActivate = (url: string) => {
    openInNewTab(url);
  };

  const handleFooterLink = (url: string) => {
    openInNewTab(url);
  };

  return (
    <div className={styles.page}>
      <Header
        navigation={headerNavigation}
        onNavigate={handleNavigate}
        isMounted={isMounted}
        getDelayStyle={getDelayStyle}
      />
      <main className="flex-1">
        <HireHero
          hero={hire.hero}
          accessibility={hire.accessibility}
          isMounted={isMounted}
          getDelayStyle={getDelayStyle}
        />
        <HireBenefits
          benefits={hire.benefits}
          isMounted={isMounted}
          getDelayStyle={getDelayStyle}
        />
        <div id="roles">
          <HireRoles
            roles={hire.roles}
            accessibility={hire.accessibility}
            isMounted={isMounted}
            getDelayStyle={getDelayStyle}
            onRoleActivate={handleRoleActivate}
          />
        </div>
        <HireProcess
          process={hire.process}
          isMounted={isMounted}
          getDelayStyle={getDelayStyle}
        />
        <HireCulture
          culture={hire.culture}
          isMounted={isMounted}
          getDelayStyle={getDelayStyle}
        />
        <HireCta
          cta={hire.cta}
          accessibility={hire.accessibility}
          isMounted={isMounted}
          getDelayStyle={getDelayStyle}
        />
      </main>
      <Footer
        footer={footer}
        linkAriaLabel={appAccessibility.projectLink}
        onLinkActivate={handleFooterLink}
        isMounted={isMounted}
        getDelayStyle={getDelayStyle}
      />
    </div>
  );
}
