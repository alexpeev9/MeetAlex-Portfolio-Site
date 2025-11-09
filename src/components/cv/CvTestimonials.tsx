import styles from "@/app/cv/page.module.css";
import { CopyShape } from "@/lib/getCopy";

type CvTestimonialsProps = {
  testimonials: CopyShape["cv"]["testimonials"];
  accessibility: CopyShape["cv"]["accessibility"];
  sectionId?: string;
  className?: string;
};

const CvTestimonials = ({ testimonials, accessibility, sectionId, className }: CvTestimonialsProps) => {
  const sectionClassName = [styles.section, styles.fadeInUp, className]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={sectionId} className={sectionClassName}>
      <div className={`${styles.card} space-y-8`}>
        <div className="space-y-3">
          <h2 className={`text-2xl font-semibold md:text-3xl ${styles.heading}`}>
            {testimonials.title}
          </h2>
          <p className={styles.bodyText}>{testimonials.intro}</p>
        </div>
        <div className={styles.testimonialGrid}>
          {testimonials.items.map((item) => (
            <blockquote
              key={`${item.name}-${item.role}`}
              className={styles.testimonialCard}
              aria-label={`${accessibility.testimonialQuote}: ${item.name}`}
            >
              <p className={styles.quoteText}>“{item.quote}”</p>
              <footer className={styles.quoteSignature}>
                <span className={`font-semibold ${styles.heading}`}>{item.name}</span>
                <span className={styles.mutedText}>{item.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CvTestimonials;
