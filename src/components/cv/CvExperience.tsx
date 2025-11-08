import { CSSProperties } from 'react';
import styles from '@/app/cv/page.module.css';
import { CopyShape } from '@/lib/getCopy';

type CvExperienceProps = {
  experience: CopyShape['cv']['experience'];
  accessibility: CopyShape['cv']['accessibility'];
  isMounted: boolean;
  getDelayStyle: (index?: number, baseDelay?: number) => CSSProperties | undefined;
};

const CvExperience = ({ experience, accessibility, isMounted, getDelayStyle }: CvExperienceProps) => {
  return (
    <section className={`${styles.section} ${isMounted ? styles.fadeInUp : ''}`} style={getDelayStyle(0, 0.18)}>
      <div className={`${styles.card} space-y-8`}>
        <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">{experience.title}</h2>
        <div className={styles.timeline}>
          {experience.roles.map((role, index) => (
            <article
              key={`${role.title}-${role.company}`}
              className={`${styles.timelineItem} space-y-3`}
              aria-label={accessibility.experience}
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-slate-50">{role.title}</h3>
                  <p className="text-sm text-sky-300">{role.company}</p>
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                  {role.period}
                </span>
              </div>
              <p className="text-sm leading-6 text-slate-400">{role.description}</p>
              <ul className="list-disc space-y-2 pl-5 text-sm text-slate-300">
                {role.highlights.map((highlight) => (
                  <li key={`${role.title}-${highlight}`}>{highlight}</li>
                ))}
              </ul>
              <div className={styles.tagList}>
                {role.stack.map((item) => (
                  <span key={item} className={styles.tag}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CvExperience;
