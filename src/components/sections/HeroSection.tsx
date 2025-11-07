import { CSSProperties } from 'react';
import Image from 'next/image';
import styles from '@/app/page.module.css';
import { CopyShape, ProcessStep } from '@/lib/getCopy';

type HeroSectionProps = {
  hero: CopyShape['hero'];
  processHighlights: ProcessStep[];
  logoAccent: string;
  onPrimaryCta: () => void;
  onSecondaryCta: () => void;
  isMounted: boolean;
  getDelayStyle: (index?: number, baseDelay?: number) => CSSProperties | undefined;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
};

const HeroSection = ({
  hero,
  processHighlights,
  logoAccent,
  onPrimaryCta,
  onSecondaryCta,
  isMounted,
  getDelayStyle,
  primaryCtaLabel,
  secondaryCtaLabel,
}: HeroSectionProps) => {
  return (
    <section id="hero" className={`${styles.section} flex flex-col gap-12 pt-24`}>
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div className={`space-y-8 ${isMounted ? styles.fadeInUp : ''}`}>
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">{logoAccent}</p>
            <h1 className="text-4xl font-semibold leading-tight text-slate-50 md:text-5xl">
              {hero.headline}
            </h1>
            <p className="max-w-xl text-lg leading-8 text-slate-300">{hero.subheadline}</p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-sky-400 hover:shadow-[0_12px_40px_-20px_rgba(56,189,248,1)]"
              aria-label={primaryCtaLabel}
              onClick={onPrimaryCta}
            >
              {hero.primaryCta}
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-500 hover:text-slate-50 hover:shadow-[0_12px_40px_-24px_rgba(148,163,184,0.8)]"
              aria-label={secondaryCtaLabel}
              onClick={onSecondaryCta}
            >
              {hero.secondaryCta}
            </button>
          </div>
        </div>
        <div className={`${styles.heroVisual} ${isMounted ? styles.fadeInUp : ''}`} style={getDelayStyle(0, 0.24)}>
          <div className={`${styles.heroGlow} ${styles.float}`} aria-hidden="true" />
          <div className={styles.heroImage}>
            <Image src={hero.imageSrc} alt={hero.imageAlt} width={360} height={360} priority />
          </div>
        </div>
      </div>
      <div className={`${styles.card} grid gap-6 lg:hidden`}>
        {processHighlights.map((step, index) => (
          <div key={step.step} className="grid gap-4 text-sm text-slate-300">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-slate-200">{step.title}</span>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${index === 0 ? 'bg-sky-500/10 text-sky-300' : index === 1 ? 'bg-purple-500/10 text-purple-300' : 'bg-emerald-500/10 text-emerald-300'}`}
              >
                {step.step}
              </span>
            </div>
            <p className="leading-6 text-slate-400">{step.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
