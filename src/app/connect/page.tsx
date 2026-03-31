import About from "@/components/connect/About";
import Process from "@/components/connect/Process";
import HeroSection from "@/components/HeroSection";
import ThankYouSection from "@/components/ThankYouSection";

const Page = () => {
  return (
    <>
      <HeroSection />
      <main className="flex flex-col">
        <Process sectionId="process" />
        <About sectionId="about" />
        <ThankYouSection />
      </main>
    </>
  );
};

export default Page;
