import { CSSProperties } from 'react';
import styles from '@/app/page.module.css';
import { CopyShape } from '@/lib/getCopy';

type AboutSectionProps = {
  about: CopyShape['about'];
  supportingCopy: string;
  accentLabel: string;
  isMounted: boolean;
  getDelayStyle: (index?: number, baseDelay?: number) => CSSProperties | undefined;
};

const AboutSection = ({ about, supportingCopy, accentLabel, isMounted, getDelayStyle }: AboutSectionProps) => {
  return (
    <section id="about" className={`${styles.section} space-y-10`}>
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
        <div className={`space-y-4 ${isMounted ? styles.fadeInUp : ''}`}>
          <h2 className="text-3xl font-semibold text-slate-50 md:text-4xl">{about.title}</h2>
          <p className="text-lg leading-7 text-slate-300">{about.copy}</p>
        </div>
        <div className={`${styles.card} ${isMounted ? styles.fadeInUp : ''}`} style={getDelayStyle(0, 0.24)}>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">{accentLabel}</p>
          <p className="mt-4 text-base leading-7 text-slate-300">{supportingCopy}</p>
        </div>
      </div>
      <div className={styles.valuesGrid}>
        {about.values.map((value, index) => (
          <div
            key={value.title}
            className={`${styles.valueCard} ${isMounted ? styles.fadeInUp : ''}`}
            style={getDelayStyle(index, 0.18)}
          >
            <h3 className="text-xl font-semibold text-slate-50">{value.title}</h3>
            <p className="mt-3 text-base leading-7 text-slate-300">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
