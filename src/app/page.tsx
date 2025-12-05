import ClientProjects from "@/components/ClientProjects";
import Education from "@/components/education/Education";
import EducationImage from "@/components/education/EducationImage";
import Experience from "@/components/Experience";
import HeroSection from "@/components/HeroSection";
import OpenSourceProjects from "@/components/OpenSourceProjects";
import ThankYouSection from "@/components/ThankYouSection";
import SplitSection from "@/components/ui/SplitSection";
import YouTubeChannel from "@/components/youtube/YouTubeChannel";
import YouTubeChannelImage from "@/components/youtube/YouTubeChannelImage";

const Page = () => {
  return (
    <>
      <HeroSection />
      <main className="flex flex-col">
        <Experience sectionId="experience" />
        <SplitSection
          sectionId="education"
          FirstComponent={EducationImage}
          SecondComponent={Education}
        />
        <OpenSourceProjects sectionId="open-source" />
        <ClientProjects sectionId="projects" />
        <SplitSection
          sectionId="youtube"
          FirstComponent={YouTubeChannel}
          SecondComponent={YouTubeChannelImage}
          isSecondComponentHiddenOnMobile={true}
        />
        <ThankYouSection />
      </main>
    </>
  );
};

export default Page;
