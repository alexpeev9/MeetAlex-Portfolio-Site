import { CSSProperties } from 'react';
import styles from '@/app/page.module.css';
import { CopyShape } from '@/lib/getCopy';

type ProcessSectionProps = {
  process: CopyShape['process'];
  timelineLabel: string;
  isMounted: boolean;
  getDelayStyle: (index?: number, baseDelay?: number) => CSSProperties | undefined;
};

const ProcessSection = ({ process, timelineLabel, isMounted, getDelayStyle }: ProcessSectionProps) => {
  return (
    <section id="process" className={`${styles.section} space-y-10`}>
      <div className={`space-y-4 ${isMounted ? styles.fadeInUp : ''}`}>
        <h2 className="text-3xl font-semibold text-slate-50 md:text-4xl">{process.title}</h2>
        <p className="max-w-3xl text-lg leading-7 text-slate-300">{process.description}</p>
      </div>
      <div className={styles.processGrid}>
        {process.steps.map((step, index) => (
          <div
            key={step.step}
            className={`${styles.processStep} ${isMounted ? styles.fadeInUp : ''}`}
            style={getDelayStyle(index, 0.18)}
            aria-label={timelineLabel}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">{step.step}</span>
            <h3 className="mt-4 text-2xl font-semibold text-slate-50">{step.title}</h3>
            <p className="mt-3 text-base leading-7 text-slate-300">{step.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
