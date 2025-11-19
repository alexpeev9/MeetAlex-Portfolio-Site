import CvEducation from "@/components/cv/CvEducation";
import CvEducationImage from "@/components/cv/CvEducationImage";
import CvExperience from "@/components/cv/CvExperience";
import CvProjects from "@/components/cv/CvProjects";
import HeroSection from "@/components/sections/HeroSection";

export default function CvPage() {
  return (
    <>
      <HeroSection />
      <main className="flex flex-col">
        <CvExperience sectionId="experience" />
        <div
          id="education"
          className="mx-auto grid w-full max-w-6xl gap-8 px-4 pt-22 sm:px-6 sm:pt-24 lg:grid-cols-2 lg:px-6 xl:px-0"
        >
          <CvEducationImage className="hidden pt-0 lg:block" />
          <CvEducation className="pt-0" />
        </div>
        <CvProjects sectionId="projects" />
      </main>
    </>
  );
}
