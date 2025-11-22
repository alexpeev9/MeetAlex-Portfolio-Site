import ClientProjects from "@/components/ClientProjects";
import Education from "@/components/Education";
import EducationImage from "@/components/EducationImage";
import Experience from "@/components/Experience";
import HeroSection from "@/components/HeroSection";
import OpenSourceProjects from "@/components/OpenSourceProjects";

export default function Page() {
  return (
    <>
      <HeroSection />
      <main className="flex flex-col">
        <Experience sectionId="experience" />
        <div
          id="education"
          className="mx-auto grid w-full max-w-6xl gap-8 px-4 pt-22 sm:px-6 sm:pt-24 lg:grid-cols-2 lg:px-6 xl:px-0"
        >
          <EducationImage className="hidden pt-0 lg:block" />
          <Education className="pt-0" />
        </div>
        <ClientProjects sectionId="projects" />
        <OpenSourceProjects sectionId="open-source" />
      </main>
    </>
  );
}
