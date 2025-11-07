import { CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/hire/page.module.css';
import { CopyShape } from '@/lib/getCopy';

type HireHeroProps = {
  hero: CopyShape['hire']['hero'];
  accessibility: CopyShape['hire']['accessibility'];
  isMounted: boolean;
  getDelayStyle: (index?: number, baseDelay?: number) => CSSProperties | undefined;
};

const HireHero = ({ hero, accessibility, isMounted, getDelayStyle }: HireHeroProps) => {
  return (
    <section className={`${styles.section} grid gap-12 pt-24 lg:grid-cols-[1.1fr_1fr] lg:items-center`}>
      <div className={`space-y-8 ${isMounted ? styles.fadeInUp : ''}`}>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">{hero.eyebrow}</p>
        <h1 className="text-4xl font-semibold leading-tight text-slate-50 md:text-5xl">{hero.headline}</h1>
        <p className="max-w-2xl text-lg leading-8 text-slate-300">{hero.subheadline}</p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href={hero.primaryCtaUrl}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-sky-400 hover:shadow-[0_12px_40px_-20px_rgba(56,189,248,1)]"
            aria-label={accessibility.primaryCta}
          >
            {hero.primaryCta}
          </Link>
          <Link
            href={hero.secondaryCtaUrl}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-500 hover:text-slate-50 hover:shadow-[0_12px_40px_-24px_rgba(148,163,184,0.8)]"
            aria-label={accessibility.secondaryCta}
          >
            {hero.secondaryCta}
          </Link>
        </div>
      </div>
      <div className={`${styles.heroVisual} ${isMounted ? styles.fadeInUp : ''}`} style={getDelayStyle(0, 0.24)}>
        <div className={`${styles.heroGlow} ${styles.float}`} aria-hidden="true" />
        <div className="relative rounded-2xl overflow-hidden shadow-[0_36px_80px_-50px_rgba(14,165,233,0.6)]">
          <Image src={hero.imageSrc} alt={hero.imageAlt} width={380} height={380} priority />
        </div>
      </div>
    </section>
  );
};

export default HireHero;
