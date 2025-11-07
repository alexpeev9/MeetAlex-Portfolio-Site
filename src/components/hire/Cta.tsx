import { CSSProperties } from 'react';
import Link from 'next/link';
import styles from '@/app/hire/page.module.css';
import { CopyShape } from '@/lib/getCopy';

type HireCtaProps = {
  cta: CopyShape['hire']['cta'];
  accessibility: CopyShape['hire']['accessibility'];
  isMounted: boolean;
  getDelayStyle: (index?: number, baseDelay?: number) => CSSProperties | undefined;
};

const HireCta = ({ cta, accessibility, isMounted, getDelayStyle }: HireCtaProps) => {
  return (
    <section className={`${styles.section} pb-24`}>
      <div className={`${styles.ctaPanel} ${isMounted ? styles.fadeInUp : ''}`} style={getDelayStyle(0, 0.18)}>
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">{cta.title}</p>
          <p className="max-w-3xl text-lg leading-7 text-slate-200">{cta.description}</p>
        </div>
        <div className={styles.ctaActions}>
          <Link
            href={cta.primaryUrl}
            className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-sky-400"
            aria-label={accessibility.hirePrimary}
          >
            {cta.primaryLabel}
          </Link>
          <Link
            href={cta.secondaryUrl}
            className="inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-400 hover:text-sky-200"
            aria-label={accessibility.hireSecondary}
          >
            {cta.secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HireCta;
