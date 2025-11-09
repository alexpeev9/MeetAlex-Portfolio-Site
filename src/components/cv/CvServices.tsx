import styles from "@/app/cv/page.module.css";
import { CopyShape } from "@/lib/getCopy";

type CvServicesProps = {
  services: CopyShape["cv"]["services"];
  accessibility: CopyShape["cv"]["accessibility"];
  sectionId?: string;
  className?: string;
};

const CvServices = ({ services, accessibility, sectionId, className }: CvServicesProps) => {
  const sectionClassName = [styles.section, styles.fadeInUp, className]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={sectionId} className={sectionClassName}>
      <div className={`${styles.card} space-y-8`}>
        <div className="space-y-3">
          <h2 className={`text-2xl font-semibold md:text-3xl ${styles.heading}`}>
            {services.title}
          </h2>
          <p className={styles.bodyText}>{services.intro}</p>
        </div>
        <div className={styles.serviceGrid}>
          {services.items.map((service) => (
            <article
              key={service.title}
              className={`${styles.innerCard} space-y-3`}
              aria-label={`${accessibility.serviceCard}: ${service.title}`}
            >
              <h3 className={`text-lg font-semibold ${styles.heading}`}>
                {service.title}
              </h3>
              <p className={styles.bodyText}>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CvServices;
