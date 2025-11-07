import { CSSProperties } from 'react';
import styles from '@/app/hire/page.module.css';
import { CopyShape } from '@/lib/getCopy';

type HireCultureProps = {
  culture: CopyShape['hire']['culture'];
  isMounted: boolean;
  getDelayStyle: (index?: number, baseDelay?: number) => CSSProperties | undefined;
};

const HireCulture = ({ culture, isMounted, getDelayStyle }: HireCultureProps) => {
  return (
    <section className={`${styles.section} space-y-12`}>
      <div className={`space-y-4 ${isMounted ? styles.fadeInUp : ''}`}>
        <h2 className="text-3xl font-semibold text-slate-50 md:text-4xl">{culture.title}</h2>
      </div>
      <div className={styles.gridThree}>
        {culture.points.map((point, index) => (
          <div
            key={point.title}
            className={`${styles.panel} ${isMounted ? styles.fadeInUp : ''}`}
            style={getDelayStyle(index, 0.18)}
          >
            <h3 className="text-xl font-semibold text-slate-50">{point.title}</h3>
            <p className="mt-3 text-base leading-7 text-slate-300">{point.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HireCulture;
