'use client';

import CvEducation from "@/components/cv/CvEducation";
import CvExperience from "@/components/cv/CvExperience";
import CvHeader from "@/components/cv/CvHeader";
import CvProjects from "@/components/cv/CvProjects";
import CvSalary from "@/components/cv/CvSalary";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { useMountedAnimations } from "@/hooks/useMountedAnimations";
import { getCopy } from "@/lib/getCopy";
import { openInNewTab, scrollToId } from "@/utils/navigation";
import { useMemo } from "react";
import styles from "./page.module.css";

const cvCopy = getCopy();

export default function CvPage() {
  const { isMounted, getDelayStyle } = useMountedAnimations();
  const navigation = useMemo(() => cvCopy.navigation, []);
  const footer = useMemo(() => cvCopy.footer, []);
  const appAccessibility = useMemo(() => cvCopy.accessibility, []);
  const cv = useMemo(() => cvCopy.cv, []);

  const headerNavigation = useMemo(
    () => ({
      ...navigation,
      items: navigation.items,
    }),
    [navigation]
  );

  const handleNavigate = (targetId: string) => {
    if (targetId === "hire-page") {
      window.location.href = "/hire";
      return;
    }

    if (
      targetId === "projects" ||
      targetId === "process" ||
      targetId === "about"
    ) {
      window.location.href = `/#${targetId}`;
      return;
    }

    scrollToId(targetId);
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
        <CvHeader
          bio={cv.bio}
          contact={cv.contact}
          accessibility={cv.accessibility}
          isMounted={isMounted}
          getDelayStyle={getDelayStyle}
        />
        <div className={styles.columns}>
          <div>
            <CvExperience
              experience={cv.experience}
              accessibility={cv.accessibility}
              isMounted={isMounted}
              getDelayStyle={getDelayStyle}
            />
          </div>
          <div className="flex flex-col gap-10">
            <CvEducation
              education={cv.education}
              accessibility={cv.accessibility}
              isMounted={isMounted}
              getDelayStyle={getDelayStyle}
            />
            <CvProjects
              projects={cv.projects}
              accessibility={cv.accessibility}
              isMounted={isMounted}
              getDelayStyle={getDelayStyle}
            />
          </div>
        </div>
        <CvSalary
          salary={cv.salary}
          isMounted={isMounted}
          getDelayStyle={getDelayStyle}
        />
        <div className={styles.footerSpacing} aria-hidden="true" />
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
