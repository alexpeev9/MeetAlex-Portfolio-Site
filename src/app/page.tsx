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

const cvCopy = getCopy();

export default function CvPage() {
  const handleFooterLink = (url: string) => {
    openInNewTab(url);
  };

  return (
    <div
      className="flex min-h-screen flex-col"
      style={{
        background: "var(--gradient-page)",
        color: "var(--text-primary)",
      }}
    >
      <Header />
      <HeroSection sectionId="hero" />
      <main className="flex flex-col gap-24 pt-16 pb-24">
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
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 pt-16 md:grid-cols-2 lg:px-12">
          <CvEducation
            sectionId="education"
            className="m-0 p-0"
            education={cvCopy.cv.education}
            accessibility={cvCopy.cv.accessibility}
          />
          <CvCertifications
            sectionId="certifications"
            className="m-0 p-0"
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
