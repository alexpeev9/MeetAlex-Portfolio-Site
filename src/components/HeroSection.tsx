import { getCopy } from "@/lib/getCopy";
import Image from "next/image";
import Button from "./ui/Button";
import SocialLink from "./ui/SocialLink";
import Text from "./ui/Text";

const HeroSection = () => {
  const copy = getCopy();
  const { hero, cv } = copy;

  return (
    <section className="relative isolate flex h-full w-full items-center justify-center px-4 pt-4 sm:px-6 lg:h-(--section-height) lg:px-12 lg:pt-0">
      <div className="relative z-10 grid w-full max-w-6xl gap-4 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <div className="hero-fade-in-delayed order-1 mx-auto flex h-(--section-height-mobile) w-full max-w-sm flex-col items-center justify-center gap-4 sm:h-auto lg:order-2 lg:mx-0 lg:max-w-none">
          <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-white/85 p-4 shadow-[0_30px_80px_-35px_rgba(30,111,232,0.3)] backdrop-blur sm:p-6">
            <div
              className="rounded-2xl"
              style={{
                background:
                  "linear-gradient(to bottom right, #E6F2FF, #FFFFFF)",
              }}
            >
              <Image
                src={hero.imageSrc}
                alt={hero.imageAlt}
                width={1080}
                height={1080}
                loading="eager"
                className="h-auto w-full rounded-2xl shadow-lg"
                priority
              />
            </div>
            <div className="mt-3 flex flex-col gap-4 lg:mt-6">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex flex-col gap-1 text-center lg:text-left">
                  <Text variant="heading3">{cv.bio.name}</Text>
                  <Text variant="body" size="lg" weight="bold" color="accent">
                    {cv.bio.location}
                  </Text>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-end">
                  <SocialLink
                    href={cv.contact.linkedin}
                    ariaLabel={`Visit ${cv.contact.linkedinLabel} profile`}
                    iconSrc="/images/icons/linkedin.webp"
                    iconAlt="LinkedIn logo"
                  />
                  <SocialLink
                    href={cv.contact.github}
                    ariaLabel={`Visit ${cv.contact.githubLabel} profile`}
                    iconSrc="/images/icons/github.webp"
                    iconAlt="GitHub logo"
                  />
                  <SocialLink
                    href={cv.contact.youtube}
                    ariaLabel={`Visit ${cv.contact.youtubeLabel} channel`}
                    iconSrc="/images/icons/youtube.webp"
                    iconAlt="YouTube logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-fade-in order-2 flex w-full flex-col gap-6 text-center lg:order-1 lg:text-left">
          <div className="flex flex-col items-center gap-6 lg:items-start">
            <span className="hidden w-fit items-center gap-3 rounded-full border border-blue-200 bg-white/70 px-5 py-2 text-xs font-semibold tracking-[0.32em] text-blue-500 uppercase shadow-sm lg:inline-flex">
              {hero.eyebrow}
            </span>
            <Text
              variant="heading1"
              className="text-center leading-tight lg:text-left"
            >
              {hero.headline}
              <br />
              {hero.headline2}
            </Text>
            <Text
              variant="body"
              size="lg"
              className="max-w-2xl leading-8 md:text-xl"
            >
              {hero.subheadline}
            </Text>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Button
              href={hero.primaryCtaUrl}
              ariaLabel={hero.primaryCta}
              buttonType="primary"
              size="lg"
              isExternal={false}
              className="w-68 tracking-[0.2em] uppercase"
            >
              {hero.primaryCta}
            </Button>
            <Button
              href={hero.secondaryCtaUrl}
              ariaLabel={hero.secondaryCta}
              buttonType="secondary"
              size="lg"
              isExternal={false}
              className="w-68 tracking-[0.2em] uppercase"
            >
              {hero.secondaryCta}
            </Button>
          </div>
          <div className="flex flex-col gap-16 pt-12 lg:flex-row lg:gap-6 lg:pt-0">
            {hero.metrics.map((metric) => (
              <div key={metric.label} className="flex flex-col gap-2">
                <Text variant="heading2" size="3xl">
                  {metric.value}
                </Text>
                <Text
                  variant="caption"
                  className="px-10 tracking-[0.26em] lg:px-0"
                >
                  {metric.label}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
