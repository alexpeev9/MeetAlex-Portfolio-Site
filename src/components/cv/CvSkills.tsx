import styles from "@/app/cv/page.module.css";
import { CopyShape } from "@/lib/getCopy";

type CvSkillsProps = {
  skills: CopyShape["cv"]["skills"];
  accessibility: CopyShape["cv"]["accessibility"];
  sectionId?: string;
  className?: string;
};

const CvSkills = ({ skills, accessibility, sectionId, className }: CvSkillsProps) => {
  const sectionClassName = [styles.section, styles.fadeInUp, className]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={sectionId} className={sectionClassName}>
      <div className={`${styles.card} space-y-8`}>
        <div className="space-y-3">
          <h2 className={`text-2xl font-semibold md:text-3xl ${styles.heading}`}>
            {skills.title}
          </h2>
          <p className={styles.bodyText}>{skills.intro}</p>
        </div>
        <div className={styles.skillCategories}>
          {skills.categories.map((category) => (
            <article
              key={category.title}
              className={`${styles.innerCard} space-y-4`}
              aria-label={`${accessibility.skillsCategory}: ${category.title}`}
            >
              <h3 className={`text-lg font-semibold ${styles.heading}`}>
                {category.title}
              </h3>
              <div className={styles.tagList} role="list">
                {category.items.map((item) => (
                  <span
                    key={`${category.title}-${item}`}
                    className={styles.tag}
                    role="listitem"
                    aria-label={`${accessibility.skillsTag}: ${item}`}
                  >
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

export default CvSkills;
