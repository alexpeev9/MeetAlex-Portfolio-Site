import { CSSProperties } from 'react';
import Link from 'next/link';
import styles from '@/app/cv/page.module.css';
import { CopyShape } from '@/lib/getCopy';

type CvEducationProps = {
  education: CopyShape['cv']['education'];
  accessibility: CopyShape['cv']['accessibility'];
  isMounted: boolean;
  getDelayStyle: (index?: number, baseDelay?: number) => CSSProperties | undefined;
};

const CvEducation = ({ education, accessibility, isMounted, getDelayStyle }: CvEducationProps) => {
  return (
    <section className={`${styles.section} ${isMounted ? styles.fadeInUp : ''}`} style={getDelayStyle(0, 0.24)}>
      <div className={`${styles.card} space-y-6`}>
        <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">{education.title}</h2>
        <div className="grid gap-4">
          {education.items.map((item, index) => (
            <div key={`${item.degree}-${item.school}`} className="space-y-2">
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold text-slate-100">{item.degree}</h3>
                <span className="text-sm text-sky-300">{item.field}</span>
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                  {item.period}
                </span>
                <p className="text-sm text-slate-300">{item.school}</p>
              </div>
              <Link
                href={item.link}
                className={styles.linkItem}
                aria-label={`${accessibility.educationLink}: ${item.linkLabel}`}
              >
                {item.linkLabel}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CvEducation;
