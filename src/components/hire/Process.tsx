import { CSSProperties } from 'react';
import styles from '@/app/hire/page.module.css';
import { CopyShape } from '@/lib/getCopy';

type HireProcessProps = {
  process: CopyShape['hire']['process'];
  isMounted: boolean;
  getDelayStyle: (index?: number, baseDelay?: number) => CSSProperties | undefined;
};

const HireProcess = ({ process, isMounted, getDelayStyle }: HireProcessProps) => {
  return (
    <section className={`${styles.section} space-y-12`}>
      <div className={`space-y-4 ${isMounted ? styles.fadeInUp : ''}`}>
        <h2 className="text-3xl font-semibold text-slate-50 md:text-4xl">{process.title}</h2>
      </div>
      <div className={styles.gridThree}>
        {process.steps.map((step, index) => (
          <div
            key={step.step}
            className={`${styles.panel} ${isMounted ? styles.fadeInUp : ''}`}
            style={getDelayStyle(index, 0.18)}
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

export default HireProcess;
