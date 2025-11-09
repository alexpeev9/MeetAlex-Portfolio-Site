import styles from "@/app/cv/page.module.css";
import { CopyShape } from "@/lib/getCopy";

type CvHighlightsProps = {
  languages: CopyShape["cv"]["languages"];
  accessibility: CopyShape["cv"]["accessibility"];
  sectionId?: string;
  className?: string;
};

const CvHighlights = ({ languages, accessibility, sectionId, className }: CvHighlightsProps) => {
  const sectionClassName = [styles.section, styles.fadeInUp, className]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={sectionId} className={sectionClassName}>
      <div className={`${styles.card} space-y-8`}>
        <div className="space-y-3">
          <h2 className={`text-2xl font-semibold md:text-3xl ${styles.heading}`}>
            {languages.title}
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <h3 className={`text-lg font-semibold ${styles.heading}`}>
              {languages.listTitle}
            </h3>
            <div className={styles.languageList}>
              {languages.items.map((item) => (
                <div
                  key={item.name}
                  className={styles.languageItem}
                  aria-label={`${accessibility.languageItem}: ${item.name}`}
                >
                  <span className={`text-base font-semibold ${styles.heading}`}>
                    {item.name}
                  </span>
                  <span className={styles.bodyText}>{item.level}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className={`text-lg font-semibold ${styles.heading}`}>
              {languages.interests.title}
            </h3>
            <div className={styles.interestChips} role="list">
              {languages.interests.items.map((interest) => (
                <span
                  key={interest}
                  className={styles.tag}
                  role="listitem"
                  aria-label={`${accessibility.interestTag}: ${interest}`}
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CvHighlights;
