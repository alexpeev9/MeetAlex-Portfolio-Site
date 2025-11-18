import CvCertifications from "@/components/cv/CvCertifications";
import CvEducation from "@/components/cv/CvEducation";
import CvExperience from "@/components/cv/CvExperience";
import CvProjects from "@/components/cv/CvProjects";
import HeroSection from "@/components/sections/HeroSection";
import { getCopy } from "@/lib/getCopy";

const cvCopy = getCopy();

export default function CvPage() {
  return (
    <>
      <HeroSection sectionId="hero" />
      <main className="flex flex-col gap-16 pt-16 pb-24 sm:gap-20">
        <CvExperience sectionId="experience" />
        <CvProjects
          sectionId="projects"
          projects={cvCopy.cv.projects}
          accessibility={cvCopy.cv.accessibility}
        />
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 pt-12 sm:px-6 sm:pt-16 md:grid-cols-2 lg:px-6">
          <CvEducation sectionId="education" className="pt-0" />
          <CvCertifications
            sectionId="certifications"
            className="pt-0"
            certifications={cvCopy.cv.certifications}
            accessibility={cvCopy.cv.accessibility}
          />
        </div>
      </main>
    </>
  );
}
