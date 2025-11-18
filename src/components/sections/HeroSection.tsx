'use client';

import { getCopy } from "@/lib/getCopy";
import Image from "next/image";

type HeroSectionProps = {
  sectionId?: string;
};

const HeroSection = ({ sectionId }: HeroSectionProps) => {
  const copy = getCopy();
  const { hero, accessibility, cv } = copy;

  return (
    <section
      id={sectionId}
      className="relative isolate flex w-full items-center justify-center px-4 pt-4 pb-16 sm:px-6 sm:pt-0 lg:px-12"
      style={{
        minHeight: "calc(100vh - 5rem)",
        overflow: "hidden",
      }}
    >
      <div className="relative z-10 grid w-full max-w-6xl gap-4 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <div className="hero-fade-in-delayed order-1 mx-auto w-full max-w-sm lg:order-2 lg:mx-0 lg:max-w-none">
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
            <div className="mt-6 flex flex-col gap-4">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex flex-col gap-1 text-center lg:text-left">
                  <span className="text-sm font-medium tracking-[0.28em] text-blue-500 uppercase">
                    {cv.bio.title}
                  </span>
                  <span className="text-2xl font-semibold text-slate-900">
                    {cv.bio.name}
                  </span>
                  <span className="text-sm font-medium text-blue-500">
                    {cv.bio.location}
                  </span>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-2 lg:justify-end">
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
                      className="h-16 w-16"
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
                      className="h-16 w-16"
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
                      className="h-16 w-16"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="pointer-events-none absolute -top-8 -left-6 h-24 w-24 rounded-full blur-3xl"
            style={{
              background:
                "linear-gradient(to bottom right, rgba(184, 217, 255, 0.4), rgba(230, 242, 255, 0.1))",
            }}
          />
        </div>
        <div className="hero-fade-in order-2 flex w-full flex-col gap-10 text-center lg:order-1 lg:text-left">
          <div className="flex flex-col items-center gap-6 lg:items-start">
            <span className="inline-flex w-fit items-center gap-3 rounded-full border border-blue-200 bg-white/70 px-5 py-2 text-xs font-semibold tracking-[0.32em] text-blue-500 uppercase shadow-sm">
              {hero.eyebrow}
            </span>
            <h1 className="text-4xl leading-tight font-semibold text-slate-900 md:text-[2.9rem] lg:text-[3.5rem]">
              {hero.headline}
              <br />
              {hero.headline2}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              {hero.subheadline}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
              href={hero.primaryCtaUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={accessibility.primaryCta}
              className="inline-flex items-center justify-center rounded-full border border-blue-600 bg-blue-600 px-8 py-3 text-sm font-semibold tracking-[0.2em] text-white uppercase shadow-lg shadow-blue-600/30 transition hover:-translate-y-0.5 hover:bg-blue-500 focus-visible:ring-2 focus-visible:ring-(--focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--focus-ring-offset)"
            >
              {hero.primaryCta}
            </a>
            <a
              href={hero.secondaryCtaUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={accessibility.secondaryCta}
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-3 text-sm font-semibold tracking-[0.2em] text-blue-600 uppercase shadow-lg shadow-slate-200/30 transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-500 focus-visible:ring-2 focus-visible:ring-(--focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--focus-ring-offset)"
            >
              {hero.secondaryCta}
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {hero.metrics.map((metric) => (
              <div key={metric.label} className="flex flex-col gap-2">
                <span className="text-3xl font-semibold text-slate-900">
                  {metric.value}
                </span>
                <span className="text-xs tracking-[0.26em] text-slate-500 uppercase">
                  {metric.label}
                </span>
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


