import { CSSProperties } from 'react';
import styles from '@/app/cv/page.module.css';
import { CopyShape } from '@/lib/getCopy';

type CvSalaryProps = {
  salary: CopyShape['cv']['salary'];
  isMounted: boolean;
  getDelayStyle: (index?: number, baseDelay?: number) => CSSProperties | undefined;
};

const CvSalary = ({ salary, isMounted, getDelayStyle }: CvSalaryProps) => {
  return (
    <section className={`${styles.section} pb-16 ${isMounted ? styles.fadeInUp : ''}`} style={getDelayStyle(0, 0.32)}>
      <div className={`${styles.card} space-y-3`}>
        <h2 className={`text-2xl font-semibold md:text-3xl ${styles.heading}`}>{salary.title}</h2>
        <p className={`text-sm leading-6 ${styles.bodyText}`}>{salary.note}</p>
      </div>
    </section>
  );
};

export default CvSalary;
