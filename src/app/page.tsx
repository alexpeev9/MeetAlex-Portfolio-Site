'use client';

import CvCertifications from "@/components/cv/CvCertifications";
import CvEducation from "@/components/cv/CvEducation";
import CvExperience from "@/components/cv/CvExperience";
import CvProjects from "@/components/cv/CvProjects";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import { getCopy } from "@/lib/getCopy";
import { openInNewTab } from "@/utils/navigation";
import styles from "./page.module.css";

const cvCopy = getCopy();

export default function CvPage() {
  const handleFooterLink = (url: string) => {
    openInNewTab(url);
  };

  return (
    <div className={styles.page}>
      <Header />
      <HeroSection sectionId="hero" />
      <main className={styles.main}>
        <CvProjects
          sectionId="projects"
          projects={cvCopy.cv.projects}
          accessibility={cvCopy.cv.accessibility}
        />
        <CvExperience
          sectionId="experience"
          experience={cvCopy.cv.experience}
          accessibility={cvCopy.cv.accessibility}
        />
        {/* <CvSkills
          sectionId="cv-skills"
          skills={cvCopy.cv.skills}
          accessibility={cvCopy.cv.accessibility}
        /> */}
        <div className={`${styles.section} ${styles.gridTwo}`}>
          <CvEducation
            sectionId="education"
            className={styles.sectionCompact}
            education={cvCopy.cv.education}
            accessibility={cvCopy.cv.accessibility}
          />
          <CvCertifications
            sectionId="certifications"
            className={styles.sectionCompact}
            certifications={cvCopy.cv.certifications}
            accessibility={cvCopy.cv.accessibility}
          />
        </div>
        {/* <CvServices
          sectionId="cv-services"
          services={cvCopy.cv.services}
          accessibility={cvCopy.cv.accessibility}
        />
        <CvHighlights
          sectionId="cv-highlights"
          languages={cvCopy.cv.languages}
          accessibility={cvCopy.cv.accessibility}
        /> */}
        {/* <CvTestimonials
          sectionId="cv-testimonials"
          testimonials={cvCopy.cv.testimonials}
          accessibility={cvCopy.cv.accessibility}
        /> */}
        {/* <CvSalary sectionId="cv-salary" salary={cvCopy.cv.salary} /> */}
        {/* <div className={styles.footerSpacing} aria-hidden="true" /> */}
      </main>
      <Footer
        footer={cvCopy.footer}
        linkAriaLabel={cvCopy.accessibility.projectLink}
        onLinkActivate={handleFooterLink}
      />
    </div>
  );
}
