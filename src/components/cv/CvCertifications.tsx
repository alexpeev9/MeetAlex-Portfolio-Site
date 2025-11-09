import styles from "@/app/cv/page.module.css";
import { CopyShape } from "@/lib/getCopy";
import Link from "next/link";

type CvCertificationsProps = {
  certifications: CopyShape["cv"]["certifications"];
  accessibility: CopyShape["cv"]["accessibility"];
  sectionId?: string;
  className?: string;
};

const CvCertifications = ({ certifications, accessibility, sectionId, className }: CvCertificationsProps) => {
  const sectionClassName = [styles.section, styles.fadeInUp, className]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={sectionId} className={sectionClassName}>
      <div className={`${styles.card} space-y-6`}>
        <h2 className={`text-2xl font-semibold md:text-3xl ${styles.heading}`}>
          {certifications.title}
        </h2>
        <div className={styles.detailList}>
          {certifications.items.map((item) => (
            <article key={`${item.name}-${item.issuer}`} className={`${styles.innerCard} space-y-3`}>
              <div className="flex flex-col gap-1">
                <h3 className={`text-lg font-semibold ${styles.heading}`}>
                  {item.name}
                </h3>
                <span className={styles.detailMeta}>
                  {item.issuer} · {item.year}
                </span>
              </div>
              <Link
                href={item.link}
                className={styles.linkItem}
                aria-label={`${accessibility.certificationLink}: ${item.name}`}
                tabIndex={0}
              >
                {item.linkLabel}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CvCertifications;
