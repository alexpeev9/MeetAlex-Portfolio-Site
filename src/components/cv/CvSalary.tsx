import styles from "@/app/cv/page.module.css";
import { CopyShape } from "@/lib/getCopy";

type CvSalaryProps = {
  salary: CopyShape["cv"]["salary"];
  sectionId?: string;
  className?: string;
};

const CvSalary = ({ salary, sectionId, className }: CvSalaryProps) => {
  const sectionClassName = [styles.section, styles.fadeInUp, className, "pb-16"]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={sectionId} className={sectionClassName}>
      <div className={`${styles.card} space-y-3`}>
        <h2 className={`text-2xl font-semibold md:text-3xl ${styles.heading}`}>
          {salary.title}
        </h2>
        <p className={`text-sm leading-6 ${styles.bodyText}`}>{salary.note}</p>
      </div>
    </section>
  );
};

export default CvSalary;
