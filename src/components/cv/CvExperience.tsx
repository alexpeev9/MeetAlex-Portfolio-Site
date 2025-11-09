import styles from "@/app/cv/page.module.css";
import { CopyShape } from "@/lib/getCopy";

type CvExperienceProps = {
  experience: CopyShape["cv"]["experience"];
  accessibility: CopyShape["cv"]["accessibility"];
  sectionId?: string;
  className?: string;
};

const CvExperience = ({ experience, accessibility, sectionId, className }: CvExperienceProps) => {
  const sectionClassName = [styles.section, styles.fadeInUp, className]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={sectionId} className={sectionClassName}>
      <div className={`${styles.card} space-y-8`}>
        <h2 className={`text-2xl font-semibold md:text-3xl ${styles.heading}`}>
          {experience.title}
        </h2>
        <div className={styles.timeline}>
          {experience.roles.map((role) => (
            <article
              key={`${role.title}-${role.company}`}
              className={`${styles.timelineItem} space-y-3`}
              aria-label={accessibility.experience}
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className={`text-xl font-semibold ${styles.heading}`}>
                    {role.title}
                  </h3>
                  <p className={`text-sm ${styles.subheading}`}>
                    {role.company}
                  </p>
                </div>
                <span
                  className={`text-xs font-semibold uppercase tracking-[0.28em] ${styles.metaText}`}
                >
                  {role.period}
                </span>
              </div>
              <p className={`text-sm leading-6 ${styles.bodyText}`}>
                {role.description}
              </p>
              <ul
                className={`list-disc space-y-2 pl-5 text-sm ${styles.bodyText}`}
              >
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
