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
      className="relative isolate flex w-full items-center justify-center px-4 sm:px-6 lg:px-12"
      style={{
        minHeight: "calc(100vh - 5rem)",
        background:
          "radial-gradient(circle at top left, rgba(255,0,102,0.12), transparent 55%), radial-gradient(circle at bottom right, rgba(255,0,51,0.18), transparent 60%), var(--gradient-page)",
        overflow: "hidden",
      }}
    >
      <div className="hero-fade-in relative z-10 grid w-full max-w-6xl gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div className="flex w-full flex-col gap-10 text-center lg:text-left">
          <div className="flex flex-col items-center gap-6 lg:items-start">
            <span className="inline-flex w-fit items-center gap-3 rounded-full border border-rose-200 bg-white/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-rose-500 shadow-sm">
              {hero.eyebrow}
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-[2.9rem] lg:text-[3.5rem]">
              {hero.headline}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              {hero.subheadline}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <button
              type="button"
              onClick={handlePrimaryClick}
              aria-label={accessibility.primaryCta}
              className="inline-flex items-center justify-center rounded-full bg-rose-600 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-rose-600/30 transition hover:-translate-y-0.5 hover:bg-rose-500 focus-visible:ring-2 focus-visible:ring-(--focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--focus-ring-offset)"
            >
              {hero.primaryCta}
            </button>
            <button
              type="button"
              onClick={handleSecondaryClick}
              aria-label={accessibility.secondaryCta}
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-rose-600 transition hover:-translate-y-0.5 hover:border-rose-300 hover:text-rose-500 focus-visible:ring-2 focus-visible:ring-(--focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--focus-ring-offset)"
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
        <div className="hero-fade-in-delayed relative w-full flex-1">
          <div className="relative overflow-hidden rounded-3xl border border-rose-100 bg-white/85 p-6 shadow-[0_30px_80px_-35px_rgba(255,0,90,0.45)] backdrop-blur">
            <div
              className="rounded-2xl p-4"
              style={{
                background:
                  "linear-gradient(to bottom right, #fff0f5, #ffffff)",
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
          <div
            className="absolute -left-6 -top-8 h-24 w-24 rounded-full blur-3xl"
            style={{
              background:
                "linear-gradient(to bottom right, rgba(255, 200, 210, 0.4), rgba(255, 220, 230, 0.1))",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


