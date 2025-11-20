import { getCopy } from "../../lib/getCopy";
import CvEducationItem from "./CvEducationItem";

type CvEducationProps = {
  className?: string;
};

const CvEducation = ({ className }: CvEducationProps) => {
  const sectionClassName = ["mx-auto w-full max-w-6xl px-0 sm:px-0", className]
    .filter(Boolean)
    .join(" ");
  const copy = getCopy();
  const education = copy.cv.education;
  const accessibility = copy.cv.accessibility;
  const certifications = copy.cv.certifications;

  return (
    <section className={sectionClassName}>
      <div className="h-full space-y-6 rounded-[1.75rem] border border-(--surface-card-border) bg-(--surface-card) px-4 py-8 [box-shadow:var(--surface-card-shadow)] [backdrop-filter:blur(18px)] lg:p-10">
        <h2 className="text-2xl font-semibold text-(--text-primary) md:text-3xl">
          {education.title}
        </h2>
        <div className="grid gap-4">
          {education.items.map((item) => (
            <CvEducationItem
              key={`${item.title}-${item.subtitle}`}
              item={item}
              linkAriaLabel={accessibility.educationLink}
            />
          ))}
        </div>
        <hr className="my-4 h-px border-0 bg-(--text-accent)/20" />
        <h2 className="text-2xl font-semibold text-(--text-primary) md:text-3xl">
          {certifications.title}
        </h2>
        <div className="grid gap-4">
          {certifications.items.map((item) => (
            <CvEducationItem
              key={`${item.title}-${item.subtitle}`}
              item={item}
              linkAriaLabel={accessibility.certificationLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CvEducation;
