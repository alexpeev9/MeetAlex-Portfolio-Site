import React from "react";
import { getCopy } from "../../lib/getCopy";

type HeroHeadlineProps = {
  className?: string;
};
const HeroHeadline: React.FC<HeroHeadlineProps> = ({ className }) => {
  const copy = getCopy();
  const { hero, accessibility } = copy;

  return (
    <>
      <div
        className={`flex flex-col items-center gap-3 lg:items-start lg:gap-6 ${className}`}
      >
        <span className="hidden w-fit items-center gap-3 rounded-full border border-blue-200 bg-white/70 px-5 py-2 text-xs font-semibold tracking-[0.32em] text-blue-500 uppercase shadow-sm lg:inline-flex">
          {hero.eyebrow}
        </span>
        <h1 className="text-center text-2xl leading-tight font-semibold text-slate-900 lg:text-left lg:text-4xl lg:text-[3.5rem]">
          {hero.headline}
          <br />
          {hero.headline2}
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
          {hero.subheadline}
          <br />
          <span className="hidden lg:block">{hero.subheadline2}</span>
        </p>
      </div>
      <div
        className={`flex flex-wrap items-center justify-center gap-4 pb-4 lg:justify-start lg:pb-0 ${className}`}
      >
        <a
          href={hero.primaryCtaUrl}
          // target="_blank"
          // rel="noreferrer"
          aria-label={accessibility.primaryCta}
          className="inline-flex w-68 items-center justify-center rounded-full border border-blue-600 bg-blue-600 px-8 py-3 text-sm font-semibold tracking-[0.2em] text-white uppercase shadow-lg shadow-blue-600/30 transition hover:-translate-y-0.5 hover:bg-blue-500 focus-visible:ring-2 focus-visible:ring-(--focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--focus-ring-offset)"
        >
          {hero.primaryCta}
        </a>
        <a
          href={hero.secondaryCtaUrl}
          // target="_blank"
          // rel="noreferrer"
          aria-label={accessibility.secondaryCta}
          className="inline-flex w-68 items-center justify-center rounded-full border border-blue-600 bg-white px-8 py-3 text-sm font-semibold tracking-[0.2em] text-blue-600 uppercase shadow-lg shadow-slate-200/30 transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-500 focus-visible:ring-2 focus-visible:ring-(--focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--focus-ring-offset)"
        >
          {hero.secondaryCta}
        </a>
        {/* <a
          href={hero.cvDownloadCtaUrl}
          download
          aria-label={accessibility.cvDownloadCta}
          className="inline-flex w-68 items-center justify-center rounded-full border border-blue-600 bg-white px-8 py-3 text-sm font-semibold tracking-[0.2em] text-blue-600 uppercase shadow-lg shadow-slate-200/30 transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-500 focus-visible:ring-2 focus-visible:ring-(--focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--focus-ring-offset)"
        >
          {hero.cvDownloadCta}
        </a> */}
      </div>
    </>
  );
};

export default HeroHeadline;
