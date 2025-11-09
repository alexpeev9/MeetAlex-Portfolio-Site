'use client';

import CvCertifications from "@/components/cv/CvCertifications";
import CvEducation from "@/components/cv/CvEducation";
import CvExperience from "@/components/cv/CvExperience";
import CvHeader from "@/components/cv/CvHeader";
import CvHighlights from "@/components/cv/CvHighlights";
import CvProjects from "@/components/cv/CvProjects";
import CvSalary from "@/components/cv/CvSalary";
import CvServices from "@/components/cv/CvServices";
import CvSkills from "@/components/cv/CvSkills";
import CvTestimonials from "@/components/cv/CvTestimonials";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { getCopy } from "@/lib/getCopy";
import { openInNewTab, scrollToId } from "@/utils/navigation";
import styles from "./page.module.css";

const cvCopy = getCopy();
const sectionIds: Record<string, string> = {
  projects: "cv-projects",
  process: "cv-skills",
  about: "cv-services",
  "cv-page": "cv-overview",
};

export default function CvPage() {
  const handleNavigate = (targetId: string) => {
    if (targetId === "hire-page") {
      window.location.href = "/hire";
      return;
    }

    const mappedId = sectionIds[targetId] ?? targetId;
    scrollToId(mappedId);
  };

  const handleFooterLink = (url: string) => {
    openInNewTab(url);
  };

  return (
    <div className={styles.page}>
      <Header onNavigate={handleNavigate} />
      <main className={styles.main}>
        <CvHeader
          sectionId="cv-overview"
          bio={cvCopy.cv.bio}
          contact={cvCopy.cv.contact}
          accessibility={cvCopy.cv.accessibility}
        />
        <CvSkills
          sectionId="cv-skills"
          skills={cvCopy.cv.skills}
          accessibility={cvCopy.cv.accessibility}
        />
        <CvExperience
          sectionId="cv-experience"
          experience={cvCopy.cv.experience}
          accessibility={cvCopy.cv.accessibility}
        />
        <CvProjects
          sectionId="cv-projects"
          projects={cvCopy.cv.projects}
          accessibility={cvCopy.cv.accessibility}
        />
        <div className={`${styles.section} ${styles.gridTwo}`}>
          <CvEducation
            sectionId="cv-education"
            className={styles.sectionCompact}
            education={cvCopy.cv.education}
            accessibility={cvCopy.cv.accessibility}
          />
          <CvCertifications
            sectionId="cv-certifications"
            className={styles.sectionCompact}
            certifications={cvCopy.cv.certifications}
            accessibility={cvCopy.cv.accessibility}
          />
        </div>
        <CvServices
          sectionId="cv-services"
          services={cvCopy.cv.services}
          accessibility={cvCopy.cv.accessibility}
        />
        <CvHighlights
          sectionId="cv-highlights"
          languages={cvCopy.cv.languages}
          accessibility={cvCopy.cv.accessibility}
        />
        <CvTestimonials
          sectionId="cv-testimonials"
          testimonials={cvCopy.cv.testimonials}
          accessibility={cvCopy.cv.accessibility}
        />
        <CvSalary sectionId="cv-salary" salary={cvCopy.cv.salary} />
        <div className={styles.footerSpacing} aria-hidden="true" />
      </main>
      <Footer
        footer={cvCopy.footer}
        linkAriaLabel={cvCopy.accessibility.projectLink}
        onLinkActivate={handleFooterLink}
      />
    </div>
  );
}
