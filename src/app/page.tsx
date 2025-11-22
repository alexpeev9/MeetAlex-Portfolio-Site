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
        <ClientProjects sectionId="projects" />
        <OpenSourceProjects sectionId="open-source" />
        <SplitSection
          sectionId="youtube"
          FirstComponent={YouTubeChannel}
          SecondComponent={YouTubeChannelImage}
          isFirstComponentHiddenOnMobile={true}
        />
        <ThankYouSection />
      </main>
    </>
  );
};

export default Page;
