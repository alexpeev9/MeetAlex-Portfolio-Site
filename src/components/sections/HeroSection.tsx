'use client';

import { getCopy } from '@/lib/getCopy';
import { openInNewTab } from '@/utils/navigation';
import Image from 'next/image';

type HeroSectionProps = {
  sectionId?: string;
};

const HeroSection = ({ sectionId }: HeroSectionProps) => {
  const copy = getCopy();
  const { hero, accessibility, cv } = copy;

  const handlePrimaryClick = () => {
    openInNewTab(hero.primaryCtaUrl);
  };

  const handleSecondaryClick = () => {
    openInNewTab(hero.secondaryCtaUrl);
  };

  return (
    <section
      id={sectionId}
      className="relative isolate flex h-[calc(100vh-5rem)] w-full items-center"
    >
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,0,102,0.13),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,0,51,0.2),transparent_65%)]" /> */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
        <div className="flex w-full flex-1 flex-col gap-10">
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center gap-3 rounded-full border border-rose-200 bg-white/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-rose-500 shadow-sm">
              {hero.eyebrow}
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl lg:text-[3.5rem]">
              {hero.headline}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              {hero.subheadline}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={handlePrimaryClick}
              aria-label={accessibility.primaryCta}
              className="inline-flex items-center justify-center rounded-full bg-rose-600 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-rose-600/30 transition hover:-translate-y-0.5 hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-400"
            >
              {hero.primaryCta}
            </button>
            <button
              type="button"
              onClick={handleSecondaryClick}
              aria-label={accessibility.secondaryCta}
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-rose-600 transition hover:-translate-y-0.5 hover:border-rose-300 hover:text-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-400"
            >
              {hero.secondaryCta}
            </button>
          </div>
          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {hero.metrics.map((metric) => (
              <div key={metric.label} className="flex flex-col gap-2">
                <span className="text-3xl font-semibold text-slate-900">
                  {metric.value}
                </span>
                <span className="text-xs uppercase tracking-[0.26em] text-slate-500">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.28em] text-slate-400">
              {hero.trustedTitle}
            </span>
            <div className="flex flex-wrap gap-3">
              {hero.trustedBrands.map((brand) => (
                <span
                  key={brand}
                  className="inline-flex items-center rounded-full border border-white/60 bg-white/90 px-4 py-2 text-sm font-semibold text-rose-600 shadow-sm"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="relative w-full flex-1">
          <div className="relative overflow-hidden rounded-3xl border border-rose-100 bg-white/80 p-6 shadow-[0_30px_80px_-35px_rgba(255,0,90,0.45)] backdrop-blur">
            <div className="rounded-2xl bg-gradient-to-br from-rose-50 via-white to-white p-4">
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
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium uppercase tracking-[0.28em] text-rose-500">
                  {cv.bio.title}
                </span>
                <span className="text-2xl font-semibold text-slate-900">
                  {cv.bio.name}
                </span>
                <span className="text-sm font-medium text-rose-500">
                  {cv.bio.location}
                </span>
              </div>
            </div>
          </div>
          <div className="absolute -left-6 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-rose-200/40 to-rose-100/10 blur-3xl" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


