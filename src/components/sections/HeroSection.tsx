import { getCopy } from "@/lib/getCopy";
import Image from "next/image";
import Text from "../ui/Text";
import HeroHeadline from "./HeroHeadline";

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
                  <a
                    href={cv.contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit ${cv.contact.linkedinLabel} profile`}
                    className="inline-flex items-center justify-center gap-15 opacity-80 transition hover:opacity-100 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
                    tabIndex={0}
                  >
                    <Image
                      src="/images/icons/linkedin.png"
                      alt=""
                      width={64}
                      height={64}
                      className="h-8 w-8"
                    />
                  </a>
                  <a
                    href={cv.contact.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit ${cv.contact.githubLabel} profile`}
                    className="inline-flex items-center justify-center opacity-80 transition hover:opacity-100 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
                    tabIndex={0}
                  >
                    <Image
                      src="/images/icons/github.png"
                      alt=""
                      width={64}
                      height={64}
                      className="h-8 w-8"
                    />
                  </a>
                  <a
                    href={cv.contact.youtube}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit ${cv.contact.youtubeLabel} channel`}
                    className="inline-flex items-center justify-center opacity-80 transition hover:opacity-100 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
                    tabIndex={0}
                  >
                    <Image
                      src="/images/icons/youtube.png"
                      alt=""
                      width={64}
                      height={64}
                      className="h-8 w-8"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-fade-in order-2 flex w-full flex-col gap-6 text-center lg:order-1 lg:text-left">
          <HeroHeadline />
          <div className="flex flex-col gap-16 pt-12 lg:flex-row lg:gap-6 lg:pt-0">
            {hero.metrics.map((metric) => (
              <div key={metric.label} className="flex flex-col gap-2">
                <Text variant="heading2" size="3xl">
                  {metric.value}
                </Text>
                <Text variant="caption" className="px-10 tracking-[0.26em] lg:px-0">
                  {metric.label}
                </Text>
              </div>
            ))}
          </div>
          {/* <div className="flex flex-col gap-4">
            <span className="text-xs tracking-[0.28em] text-slate-400 uppercase">
              {hero.trustedTitle}
            </span>
            <div className="flex flex-wrap gap-3">
              {hero.trustedBrands.map((brand) => (
                <span
                  key={brand}
                  className="inline-flex items-center rounded-full border border-white/60 bg-white/90 px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
