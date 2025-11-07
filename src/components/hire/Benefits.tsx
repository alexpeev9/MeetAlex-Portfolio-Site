import { CSSProperties } from 'react';
import styles from '@/app/hire/page.module.css';
import { CopyShape } from '@/lib/getCopy';

type HireBenefitsProps = {
  benefits: CopyShape['hire']['benefits'];
  isMounted: boolean;
  getDelayStyle: (index?: number, baseDelay?: number) => CSSProperties | undefined;
};

const HireBenefits = ({ benefits, isMounted, getDelayStyle }: HireBenefitsProps) => {
  return (
    <section className={`${styles.section} space-y-12`}>
      <div className={`space-y-4 ${isMounted ? styles.fadeInUp : ''}`}>
        <h2 className="text-3xl font-semibold text-slate-50 md:text-4xl">{benefits.title}</h2>
      </div>
      <div className={styles.gridTwo}>
        {benefits.items.map((item, index) => (
          <div
            key={item.title}
            className={`${styles.panel} ${isMounted ? styles.fadeInUp : ''}`}
            style={getDelayStyle(index, 0.18)}
          >
            <h3 className="text-xl font-semibold text-slate-50">{item.title}</h3>
            <p className="mt-3 text-base leading-7 text-slate-300">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HireBenefits;
