"use client";

import { getCopy } from "@/lib/getCopy";
import Button from "./ui/Button";
import CountUp from "./ui/CountUp";
import FadeContent from "./ui/FadeContent";
import SocialLink from "./ui/SocialLink";
import SplitText from "./ui/SplitText";
import Text, { textVariantStyles } from "./ui/Text";

const HeroSection = () => {
  const copy = getCopy();
  const { hero, cv } = copy;

  const parseMetricValue = (value: string): { num: number; suffix: string } => {
    const match = value.match(/^(\d+)(.*)$/);
    if (match) {
      return { num: parseInt(match[1], 10), suffix: match[2] };
    }
    return { num: 0, suffix: value };
  };

  return (
    <section className="relative isolate flex h-full w-full items-center justify-center overflow-hidden px-4 pt-[4.8rem] sm:px-6 lg:h-(--section-height) lg:pt-21">
      <div className="relative z-10 grid h-full w-full max-w-6xl gap-4 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:py-6">
        {/* Profile Card */}
        <FadeContent
          direction="right"
          delay={0.2}
          className="order-1 mx-auto flex h-full w-full max-w-100 flex-col items-center justify-center gap-4 pt-4 lg:order-2 lg:mx-0 lg:max-w-none lg:pt-0"
        >
          <div className="group relative flex h-full max-h-[650px] min-h-0 w-full flex-col overflow-hidden rounded-3xl border border-(--hero-card-border) bg-(--hero-card-bg) p-4 [box-shadow:var(--hero-card-shadow)] backdrop-blur transition-all duration-500 sm:p-6">
            <div
              className="aspect-square min-h-0 w-full flex-1 rounded-2xl bg-cover bg-top shadow-lg lg:aspect-auto"
              style={{
                backgroundImage: `url(${hero.imageSrc})`,
              }}
              role="img"
              aria-label={hero.imageAlt}
            />
            <div className="flex shrink-0 flex-col gap-4 pt-3 lg:pt-6">
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
                    classNameIcon="dark:brightness-0 dark:invert"
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
        </FadeContent>

        {/* Text Content */}
        <FadeContent
          direction="left"
          className="order-2 flex w-full flex-col justify-center gap-6 text-center lg:order-1 lg:text-left"
        >
          <div className="flex flex-col items-center gap-6 lg:items-start">
            <span className="animate-shimmer hidden w-fit items-center gap-3 rounded-full border border-(--badge-border) bg-(--badge-bg) bg-linear-to-r bg-size-[200%_100%] px-5 py-2 text-xs font-semibold tracking-[0.32em] text-(--badge-text-color) uppercase shadow-sm lg:inline-flex">
              {hero.eyebrow}
            </span>
            <div className="hidden leading-tight lg:block">
              <SplitText
                splitBy="words"
                animation="fadeUp"
                stagger={0.08}
                className={textVariantStyles.heading1}
              >
                {hero.headline}
              </SplitText>
              <SplitText
                splitBy="words"
                animation="fadeUp"
                delay={0.1}
                stagger={0.08}
                className={textVariantStyles.heading1}
              >
                {hero.headline2}
              </SplitText>
              <SplitText
                splitBy="words"
                animation="fadeUp"
                delay={0.3}
                stagger={0.08}
                className={textVariantStyles.heading1}
              >
                {hero.headline3}
              </SplitText>
            </div>
          </div>

          {/* Animated Metrics */}
          <div className="flex flex-col gap-12 lg:flex-row lg:pt-0">
            {hero.metrics.map((metric, index) => {
              const { num, suffix } = parseMetricValue(metric.value);
              return (
                <FadeContent
                  key={metric.label}
                  direction="up"
                  delay={0.4 + index * 0.15}
                  className="flex flex-col gap-2"
                >
                  <Text variant="heading2" size="3xl">
                    <CountUp
                      end={num}
                      duration={2000}
                      delay={600 + index * 200}
                      suffix={suffix}
                    />
                  </Text>
                  <Text
                    variant="caption"
                    className="px-10 tracking-[0.26em] lg:px-0"
                  >
                    {metric.label}
                  </Text>
                </FadeContent>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <FadeContent
            direction="up"
            delay={0.8}
            className="flex flex-wrap items-center justify-center gap-4 pt-6 lg:justify-start lg:pt-0"
          >
            <Button
              download={hero.primaryCtaUrl}
              href={hero.primaryCtaUrl}
              ariaLabel={hero.primaryCta}
              buttonType="primary"
              size="lg"
              isExternal={true}
              className="group relative w-68 overflow-hidden tracking-[0.2em] uppercase transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <span className="relative z-10">{hero.primaryCta}</span>
            </Button>
          </FadeContent>
        </FadeContent>
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex">
        <div className="animate-bounce-slow h-12 w-6 rounded-full border-2 border-blue-300/50 p-1">
          <div className="animate-scroll-indicator h-2 w-full rounded-full bg-blue-400/60" />
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;
