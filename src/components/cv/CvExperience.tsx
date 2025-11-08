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
        <h2 className={`text-2xl font-semibold md:text-3xl ${styles.heading}`}>{experience.title}</h2>
        <div className={styles.timeline}>
          {experience.roles.map((role, index) => (
            <article
              key={`${role.title}-${role.company}`}
              className={`${styles.timelineItem} space-y-3`}
              aria-label={accessibility.experience}
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className={`text-xl font-semibold ${styles.heading}`}>{role.title}</h3>
                  <p className={`text-sm ${styles.subheading}`}>{role.company}</p>
                </div>
                <span className={`text-xs font-semibold uppercase tracking-[0.28em] ${styles.metaText}`}>
                  {role.period}
                </span>
              </div>
              <p className={`text-sm leading-6 ${styles.bodyText}`}>{role.description}</p>
              <ul className={`list-disc space-y-2 pl-5 text-sm ${styles.bodyText}`}>
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
